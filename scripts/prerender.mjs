import { access, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = process.cwd();
const distDirectory = process.env.LOOPT_DIST_DIR
  ? path.resolve(process.env.LOOPT_DIST_DIR)
  : path.join(projectRoot, "dist");
const prerenderDirectory = process.env.LOOPT_PRERENDER_DIR
  ? path.resolve(process.env.LOOPT_PRERENDER_DIR)
  : path.join(projectRoot, ".prerender");
const serverBundle = path.join(prerenderDirectory, "entry-server.js");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceTitle(html, value) {
  const pattern =
    /(<title\s+data-route-meta="title">)[\s\S]*?(<\/title>)/g;
  const matches = html.match(pattern);
  if (matches?.length !== 1) {
    throw new Error(`Expected one route title marker, found ${matches?.length ?? 0}`);
  }
  return html.replace(pattern, `$1${escapeHtml(value)}$2`);
}

function replaceAttribute(html, marker, attribute, value) {
  const pattern = new RegExp(
    `(<[^>]*data-route-meta="${marker}"[^>]*\\b${attribute}=")[^"]*(")`,
    "g",
  );
  const matches = html.match(pattern);
  if (matches?.length !== 1) {
    throw new Error(
      `Expected one ${marker} ${attribute} marker, found ${matches?.length ?? 0}`,
    );
  }
  return html.replace(pattern, `$1${escapeHtml(value)}$2`);
}

function injectMetadata(html, route) {
  let result = replaceTitle(html, route.title);
  result = replaceAttribute(result, "description", "content", route.description);
  result = replaceAttribute(result, "canonical", "href", route.canonicalUrl);
  result = replaceAttribute(result, "og-title", "content", route.title);
  result = replaceAttribute(
    result,
    "og-description",
    "content",
    route.description,
  );
  result = replaceAttribute(result, "og-url", "content", route.canonicalUrl);
  result = replaceAttribute(
    result,
    "og-type",
    "content",
    route.ogType ?? "website",
  );
  result = replaceAttribute(result, "twitter-title", "content", route.title);
  result = replaceAttribute(
    result,
    "twitter-description",
    "content",
    route.description,
  );
  return injectStructuredData(result, route.structuredData);
}

function injectStructuredData(html, routeStructuredData) {
  const pattern = /(<script\s+data-route-meta="structured-data"\s+type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g;
  const matches = [...html.matchAll(pattern)];
  if (matches.length !== 1) {
    throw new Error(`Expected one structured data marker, found ${matches.length}`);
  }

  const value = JSON.parse(matches[0][2]);
  value["@graph"] = value["@graph"].filter(
    (node) => node["@type"] !== "Article",
  );
  if (routeStructuredData) value["@graph"].push(routeStructuredData);
  return html.replace(pattern, `$1${JSON.stringify(value)}$3`);
}

function injectRenderedPage(html, route, renderedPage) {
  const emptyRoot = '<div id="root"></div>';
  if (!html.includes(emptyRoot)) {
    throw new Error("Client template is missing the expected empty root element");
  }
  return html.replace(
    emptyRoot,
    `<div id="root" data-prerendered-path="${route.pathname}">${renderedPage}</div>`,
  );
}

function assertGeneratedPage(html, route) {
  const metadataExpectations = [
    ["description", "content", route.description],
    ["canonical", "href", route.canonicalUrl],
    ["og-title", "content", route.title],
    ["og-description", "content", route.description],
    ["og-url", "content", route.canonicalUrl],
    ["og-type", "content", route.ogType ?? "website"],
    ["twitter-title", "content", route.title],
    ["twitter-description", "content", route.description],
  ];

  const expectedTitle = `<title data-route-meta="title">${escapeHtml(route.title)}</title>`;
  if (!html.includes(expectedTitle)) {
    throw new Error(`${route.pathname} is missing its expected title`);
  }

  for (const [marker, attribute, value] of metadataExpectations) {
    const tagPattern = new RegExp(
      `<[^>]*\\bdata-route-meta="${marker}"[^>]*>`,
      "g",
    );
    const matchingTags = html.match(tagPattern);

    if (matchingTags?.length !== 1) {
      throw new Error(
        `${route.pathname} is missing expected ${marker} metadata`,
      );
    }

    const attributePattern = new RegExp(`\\b${attribute}="([^"]*)"`);
    const actualValue = matchingTags[0].match(attributePattern)?.[1];

    if (actualValue !== escapeHtml(value)) {
      throw new Error(
        `${route.pathname} is missing expected ${marker} metadata`,
      );
    }
  }

  const contentExpectations = [
    `data-prerendered-path="${route.pathname}"`,
    route.expectedContent,
    "<h1",
  ];

  for (const expectation of contentExpectations) {
    if (!html.includes(expectation)) {
      throw new Error(
        `${route.pathname} is missing expected generated content: ${expectation}`,
      );
    }
  }

  if (html.includes('<div id="root"></div>')) {
    throw new Error(`${route.pathname} still contains an empty application root`);
  }

  const structuredDataPattern = /<script\s+data-route-meta="structured-data"\s+type="application\/ld\+json">([\s\S]*?)<\/script>/;
  const structuredData = JSON.parse(
    html.match(structuredDataPattern)?.[1] ?? "null",
  );
  const articleNodes = structuredData?.["@graph"]?.filter(
    (node) => node["@type"] === "Article",
  );
  if (route.structuredData && articleNodes?.length !== 1) {
    throw new Error(`${route.pathname} is missing its Article structured data`);
  }
  if (!route.structuredData && articleNodes?.length) {
    throw new Error(`${route.pathname} unexpectedly contains Article structured data`);
  }
}

async function prerender() {
  const templatePath = path.join(distDirectory, "index.html");
  const template = await readFile(templatePath, "utf8");
  const serverModule = await import(pathToFileURL(serverBundle).href);
  const { PRERENDER_ROUTES: routes, render } = serverModule;

  if (!Array.isArray(routes) || routes.length === 0) {
    throw new Error("Expected at least one prerender route");
  }

  for (const route of routes) {
    const renderedPage = render(route.pathname);
    if (!renderedPage.includes(route.expectedContent)) {
      throw new Error(
        `${route.pathname} did not render its expected page content: ${route.expectedContent}`,
      );
    }

    const withPage = injectRenderedPage(template, route, renderedPage);
    const output = injectMetadata(withPage, route);
    assertGeneratedPage(output, route);

    const outputPath = path.join(distDirectory, route.outputFile);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, output);
    await access(outputPath);

    const writtenOutput = await readFile(outputPath, "utf8");
    assertGeneratedPage(writtenOutput, route);
    console.log(`prerendered ${route.pathname} -> dist/${route.outputFile}`);
  }
}

try {
  await prerender();
} finally {
  await rm(prerenderDirectory, {
    recursive: true,
    force: true,
  });
}
