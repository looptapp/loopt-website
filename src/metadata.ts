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
    pathname: "/answers/tell-friends-they-can-bring-other-people",
    outputFile: "answers/tell-friends-they-can-bring-other-people.html",
    title: "How do you tell friends they can bring other people to a plan? | Loopt",
    description:
      "Tell friends they can bring other people by making the plan's access clear, from Them only and Plus one to Open access for friends of friends.",
    canonicalUrl: "https://loopt.app/answers/tell-friends-they-can-bring-other-people",
    expectedContent: "How do you tell friends they can bring other people to a plan?",
    ogType: "article",
    structuredData: {
      "@type": "Article",
      "@id": "https://loopt.app/answers/tell-friends-they-can-bring-other-people#article",
      headline: "How do you tell friends they can bring other people to a plan?",
      description:
        "Tell friends they can bring other people by making the plan's access clear, from Them only and Plus one to Open access for friends of friends.",
      datePublished: "2026-09-01",
      mainEntityOfPage: "https://loopt.app/answers/tell-friends-they-can-bring-other-people",
      author: { "@id": "https://loopt.app/#organization" },
      publisher: { "@id": "https://loopt.app/#organization" },
    },
  },
  {
    pathname: "/answers/dont-make-friends-during-freshers-week",
    outputFile: "answers/dont-make-friends-during-freshers-week.html",
    title: "What if I don't make friends during Freshers' Week? | Loopt",
    description:
      "Not making friends during Freshers' Week doesn't mean you've missed your chance. Focus on who you'd like to see again, then make another plan.",
    canonicalUrl: "https://loopt.app/answers/dont-make-friends-during-freshers-week",
    expectedContent: "make friends during Freshers",
    ogType: "article",
    structuredData: {
      "@type": "Article",
      "@id": "https://loopt.app/answers/dont-make-friends-during-freshers-week#article",
      headline: "What if I don't make friends during Freshers' Week?",
      description:
        "Not making friends during Freshers' Week doesn't mean you've missed your chance. Focus on who you'd like to see again, then make another plan.",
      datePublished: "2026-08-31",
      mainEntityOfPage: "https://loopt.app/answers/dont-make-friends-during-freshers-week",
      author: { "@id": "https://loopt.app/#organization" },
      publisher: { "@id": "https://loopt.app/#organization" },
    },
  },
  {
    pathname: "/answers/make-recurring-plans-with-friends",
    outputFile: "answers/make-recurring-plans-with-friends.html",
    title: "How do you make recurring plans with friends? | Loopt",
    description:
      "Recurring plans are easier when you reduce repeated organising, whether that means a standing plan or making it simple to bring the same group together again.",
    canonicalUrl: "https://loopt.app/answers/make-recurring-plans-with-friends",
    expectedContent: "How do you make recurring plans with friends?",
    ogType: "article",
    structuredData: {
      "@type": "Article",
      "@id": "https://loopt.app/answers/make-recurring-plans-with-friends#article",
      headline: "How do you make recurring plans with friends?",
      description:
        "Recurring plans are easier when you reduce repeated organising, whether that means a standing plan or making it simple to bring the same group together again.",
      datePublished: "2026-08-31",
      mainEntityOfPage: "https://loopt.app/answers/make-recurring-plans-with-friends",
      author: { "@id": "https://loopt.app/#organization" },
      publisher: { "@id": "https://loopt.app/#organization" },
    },
  },
  {
    pathname: "/answers/get-friends-to-commit-to-plans",
    outputFile: "answers/get-friends-to-commit-to-plans.html",
    title: "How do you get friends to commit to plans? | Loopt",
    description:
      "Getting friends to commit is easier when the plan is concrete, the level of commitment matches the plan and people can give a clear answer.",
    canonicalUrl: "https://loopt.app/answers/get-friends-to-commit-to-plans",
    expectedContent: "How do you get friends to commit to plans?",
    ogType: "article",
    structuredData: {
      "@type": "Article",
      "@id": "https://loopt.app/answers/get-friends-to-commit-to-plans#article",
      headline: "How do you get friends to commit to plans?",
      description:
        "Getting friends to commit is easier when the plan is concrete, the level of commitment matches the plan and people can give a clear answer.",
      datePublished: "2026-08-31",
      mainEntityOfPage: "https://loopt.app/answers/get-friends-to-commit-to-plans",
      author: { "@id": "https://loopt.app/#organization" },
      publisher: { "@id": "https://loopt.app/#organization" },
    },
  },
  {
    pathname: "/answers/make-plans-with-friends-when-everyone-is-busy",
    outputFile: "answers/make-plans-with-friends-when-everyone-is-busy.html",
    title: "How do you make plans with friends when everyone is busy? | Loopt",
    description:
      "When everyone is busy, making the plan first and seeing who can come can be easier than waiting for every friend's calendar to line up.",
    canonicalUrl: "https://loopt.app/answers/make-plans-with-friends-when-everyone-is-busy",
    expectedContent: "How do you make plans with friends when everyone is busy?",
    ogType: "article",
    structuredData: {
      "@type": "Article",
      "@id": "https://loopt.app/answers/make-plans-with-friends-when-everyone-is-busy#article",
      headline: "How do you make plans with friends when everyone is busy?",
      description:
        "When everyone is busy, making the plan first and seeing who can come can be easier than waiting for every friend's calendar to line up.",
      datePublished: "2026-08-31",
      mainEntityOfPage: "https://loopt.app/answers/make-plans-with-friends-when-everyone-is-busy",
      author: { "@id": "https://loopt.app/#organization" },
      publisher: { "@id": "https://loopt.app/#organization" },
    },
  },
  {
    pathname: "/answers/organise-plans-big-group-of-friends",
    outputFile: "answers/organise-plans-big-group-of-friends.html",
    title: "How do you organise plans with a big group of friends? | Loopt",
    description:
      "Organising plans with a big group is easier when the plan is concrete, important details stay clear and you don't wait for everyone to agree.",
    canonicalUrl: "https://loopt.app/answers/organise-plans-big-group-of-friends",
    expectedContent: "How do you organise plans with a big group of friends?",
    ogType: "article",
    structuredData: {
      "@type": "Article",
      "@id": "https://loopt.app/answers/organise-plans-big-group-of-friends#article",
      headline: "How do you organise plans with a big group of friends?",
      description:
        "Organising plans with a big group is easier when the plan is concrete, important details stay clear and you don't wait for everyone to agree.",
      datePublished: "2026-08-31",
      mainEntityOfPage: "https://loopt.app/answers/organise-plans-big-group-of-friends",
      author: { "@id": "https://loopt.app/#organization" },
      publisher: { "@id": "https://loopt.app/#organization" },
    },
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
