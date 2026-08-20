import { BrowserRouter } from "react-router-dom";
import PageMetadata from "./PageMetadata";
import SiteRoutes from "./SiteRoutes";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageMetadata />
      <SiteRoutes />
    </BrowserRouter>
  );
}
