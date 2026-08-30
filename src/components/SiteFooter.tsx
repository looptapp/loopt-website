import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-6 pb-10 sm:px-8 lg:px-12">
      <div className="border-t border-white/8 pt-6 text-center">
        <p className="text-sm text-white/45">
          Copyright © 2026 Loopt Ltd. All Rights Reserved.
        </p>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/55">
          <Link to="/premium" className="transition hover:text-white/85">Premium</Link>
          <span className="text-white/20">|</span>
          <Link to="/answers" className="transition hover:text-white/85">answers</Link>
          <span className="text-white/20">|</span>
          <a href="https://join.loopt.app/privacy" target="_blank" rel="noopener noreferrer" className="transition hover:text-white/85">privacy policy</a>
          <span className="text-white/20">|</span>
          <a href="https://join.loopt.app/terms" target="_blank" rel="noopener noreferrer" className="transition hover:text-white/85">terms &amp; conditions</a>
          <span className="text-white/20">|</span>
          <a href="/support" className="transition hover:text-white/85">support</a>
          <span className="text-white/20">|</span>
          <a href="/delete-account" className="transition hover:text-white/85">delete account</a>
          <span className="text-white/20">|</span>
          <a href="https://www.loopt.app/safety" target="_blank" rel="noopener noreferrer" className="transition hover:text-white/85">child safety</a>
        </div>
      </div>
    </footer>
  );
}
