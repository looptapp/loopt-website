import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { label: "home", to: "/" },
  { label: "answers", to: "/answers" },
  { label: "premium", to: "/premium" },
  { label: "support", to: "/support" },
];

export default function SiteMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        'button, a[href], [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      menuButton?.focus();
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        ref={menuButtonRef}
        type="button"
        aria-label="Open site menu"
        aria-expanded={isOpen}
        aria-controls={drawerId}
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full text-white/65 transition hover:bg-white/[0.04] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE7512] sm:left-5 sm:top-5"
      >
        <span className="flex w-[19px] flex-col gap-[4px]" aria-hidden="true">
          <span className="h-px w-full bg-current" />
          <span className="h-px w-full bg-current" />
          <span className="h-px w-full bg-current" />
        </span>
      </button>

      <div
        inert={!isOpen}
        className={`fixed inset-0 z-50 transition-opacity duration-200 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <button type="button" aria-label="Close site menu" tabIndex={-1} onClick={closeMenu} className="absolute inset-0 h-full w-full bg-black/55" />

        <div
          ref={drawerRef}
          id={drawerId}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`relative flex h-full w-[min(320px,calc(100vw-40px))] flex-col border-r border-white/10 bg-[#0f0f10] px-7 pb-8 pt-5 transition-transform duration-200 ease-out sm:px-8 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close site menu"
            onClick={closeMenu}
            className="flex h-11 w-11 -translate-x-3 items-center justify-center self-start rounded-full text-[1.65rem] font-[300] leading-none text-white/65 transition hover:bg-white/[0.04] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE7512]"
          >
            <span aria-hidden="true">×</span>
          </button>

          <nav className="mt-12" aria-label="Main navigation">
            <ul className="space-y-6">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} onClick={closeMenu} className="text-[1.2rem] font-[500] tracking-[-0.025em] text-white/78 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FE7512]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto border-t border-white/10 pt-7">
            <a href="https://join.loopt.app/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[54px] w-full items-center justify-center rounded-[15px] border border-[#FE7512]/80 px-6 text-[1rem] font-[500] text-white transition hover:border-[#FE7512] hover:bg-[#FE7512]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE7512]">
              get Loopt
              <span className="ml-2.5 text-white/55" aria-hidden="true">›</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
