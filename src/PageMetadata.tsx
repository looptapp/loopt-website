import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteMetadata } from "./metadata";

function setContent(selector: string, content: string) {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = content;
}

function setStructuredData(structuredData?: Record<string, unknown>) {
  const element = document.querySelector<HTMLScriptElement>(
    '[data-route-meta="structured-data"]',
  );
  if (!element?.textContent) return;

  const value = JSON.parse(element.textContent) as {
    "@context": string;
    "@graph": Record<string, unknown>[];
  };
  value["@graph"] = value["@graph"].filter(
    (node) => node["@type"] !== "Article",
  );
  if (structuredData) value["@graph"].push(structuredData);
  element.textContent = JSON.stringify(value);
}

export default function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = getRouteMetadata(pathname);
    if (!metadata) return;

    document.title = metadata.title;
    setContent('[data-route-meta="description"]', metadata.description);
    setContent('[data-route-meta="og-title"]', metadata.title);
    setContent('[data-route-meta="og-description"]', metadata.description);
    setContent('[data-route-meta="og-url"]', metadata.canonicalUrl);
    setContent('[data-route-meta="og-type"]', metadata.ogType ?? "website");
    setContent('[data-route-meta="twitter-title"]', metadata.title);
    setContent(
      '[data-route-meta="twitter-description"]',
      metadata.description,
    );

    const canonical = document.querySelector<HTMLLinkElement>(
      '[data-route-meta="canonical"]',
    );
    if (canonical) canonical.href = metadata.canonicalUrl;
    setStructuredData(metadata.structuredData);
  }, [pathname]);

  return null;
}
