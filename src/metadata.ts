export type RouteMetadata = {
  pathname: string;
  outputFile: string;
  title: string;
  description: string;
  canonicalUrl: string;
  expectedContent: string;
  ogType?: "website" | "article";
  structuredData?: Record<string, unknown>;
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
    pathname: "/answers",
    outputFile: "answers.html",
    title: "Loopt Answers | Making plans and spending time together",
    description:
      "Thoughtful answers to real questions about making plans, seeing friends and spending more time together offline.",
    canonicalUrl: "https://loopt.app/answers",
    expectedContent: "Making plans and spending time together",
  },
  {
    pathname: "/answers/best-app-for-making-plans-with-friends",
    outputFile: "answers/best-app-for-making-plans-with-friends.html",
    title: "What's the best app for making plans with friends? | Loopt",
    description:
      "The best app for making plans with friends depends on what actually makes planning difficult for your group, from finding a time to organising everyday plans.",
    canonicalUrl: "https://loopt.app/answers/best-app-for-making-plans-with-friends",
    expectedContent: "the best app for making plans with friends?",
    ogType: "article",
    structuredData: {
      "@type": "Article",
      "@id": "https://loopt.app/answers/best-app-for-making-plans-with-friends#article",
      headline: "What's the best app for making plans with friends?",
      description:
        "The best app for making plans with friends depends on what actually makes planning difficult for your group, from finding a time to organising everyday plans.",
      datePublished: "2026-08-31",
      mainEntityOfPage: "https://loopt.app/answers/best-app-for-making-plans-with-friends",
      author: { "@id": "https://loopt.app/#organization" },
      publisher: { "@id": "https://loopt.app/#organization" },
    },
  },
  {
    pathname: "/answers/how-to-make-friends-at-uni",
    outputFile: "answers/how-to-make-friends-at-uni.html",
    title: "How do you make friends at uni? | Loopt",
    description:
      "Making friends at uni isn't only about meeting people. Turning new acquaintances into friends usually means making another plan and spending time together again.",
    canonicalUrl: "https://loopt.app/answers/how-to-make-friends-at-uni",
    expectedContent: "How do you make friends at uni?",
    ogType: "article",
    structuredData: {
      "@type": "Article",
      "@id": "https://loopt.app/answers/how-to-make-friends-at-uni#article",
      headline: "How do you make friends at uni?",
      description:
        "Making friends at uni isn't only about meeting people. Turning new acquaintances into friends usually means making another plan and spending time together again.",
      datePublished: "2026-08-30",
      mainEntityOfPage: "https://loopt.app/answers/how-to-make-friends-at-uni",
      author: { "@id": "https://loopt.app/#organization" },
      publisher: { "@id": "https://loopt.app/#organization" },
    },
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
