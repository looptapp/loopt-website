/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import SiteRoutes from "./SiteRoutes";

export { PRERENDER_ROUTES } from "./metadata";

export function render(pathname: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={pathname}>
        <SiteRoutes />
      </StaticRouter>
    </StrictMode>,
  );
}
