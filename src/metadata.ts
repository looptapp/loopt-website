export type RouteMetadata = {
  pathname: string;
  outputFile: string;
  title: string;
  description: string;
  canonicalUrl: string;
  expectedContent: string;
};

export const PRERENDER_ROUTES: RouteMetadata[] = [
  {
    pathname: "/",
    outputFile: "index.html",
    title: "Loopt — plans, sorted",
    description:
      "Make plans, add people and keep everyone in the loop. Loopt makes it easier to spend more time together offline.",
    canonicalUrl: "https://loopt.app/",
    expectedContent: "plans, sorted",
  },
  {
    pathname: "/premium",
    outputFile: "premium.html",
    title: "Loopt Premium — more control when plans spread",
    description:
      "Loopt Premium gives you extra control over plans that grow, including who's in, payments, access, privacy and more.",
    canonicalUrl: "https://loopt.app/premium",
    expectedContent: "for plans that spread",
  },
  {
    pathname: "/support",
    outputFile: "support.html",
    title: "Loopt Support",
    description:
      "Need help with Loopt? Find support, get in touch and find answers to common questions.",
    canonicalUrl: "https://loopt.app/support",
    expectedContent: "get in touch",
  },
  {
    pathname: "/safety",
    outputFile: "safety.html",
    title: "Safety at Loopt",
    description:
      "Learn about Loopt's approach to safety and how we help people use Loopt responsibly.",
    canonicalUrl: "https://loopt.app/safety",
    expectedContent: "child safety standards",
  },
  {
    pathname: "/delete-account",
    outputFile: "delete-account.html",
    title: "Delete your Loopt account",
    description:
      "Find out how to permanently delete your Loopt account and associated account data.",
    canonicalUrl: "https://loopt.app/delete-account",
    expectedContent: "delete account",
  },
];

export function normalizePathname(pathname: string) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/+$/, "");
}

export function getRouteMetadata(pathname: string) {
  const normalizedPathname = normalizePathname(pathname);
  return PRERENDER_ROUTES.find(
    (route) => route.pathname === normalizedPathname,
  );
}
