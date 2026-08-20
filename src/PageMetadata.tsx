import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteMetadata } from "./metadata";

function setContent(selector: string, content: string) {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = content;
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
    setContent('[data-route-meta="twitter-title"]', metadata.title);
    setContent(
      '[data-route-meta="twitter-description"]',
      metadata.description,
    );

    const canonical = document.querySelector<HTMLLinkElement>(
      '[data-route-meta="canonical"]',
    );
    if (canonical) canonical.href = metadata.canonicalUrl;
  }, [pathname]);

  return null;
}
