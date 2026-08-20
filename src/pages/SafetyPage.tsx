import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";


export default function SafetyPage() {
  const navigate = useNavigate();

  // ✅ swipe-right to go back (iOS-style)
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);


  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/", { replace: true });
  };

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    startX.current = t.clientX;
    startY.current = t.clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null || startY.current == null) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - startX.current;
    const dy = t.clientY - startY.current;

    if (dx > 90 && Math.abs(dy) < 50) {
      goBack();
    }

    startX.current = null;
    startY.current = null;
  };

  return (
    <div
      className="min-h-screen bg-[#0f0f10] text-gray-300"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="max-w-md mx-auto px-4 pt-4">
        <a
        href="https://www.loopt.app"
        className="text-sm text-gray-400 hover:text-gray-200 transition"
        >
        ← home
        </a>
      </div>

      <div className="px-4 py-6">
        <div className="max-w-md mx-auto space-y-6 text-sm leading-relaxed">
          <h1 className="text-xl font-semibold text-gray-100">
            child safety standards
          </h1>

          <p className="text-xs text-gray-500">
            last updated: 14 April 2026
          </p>

          <p>
            Loopt is committed to maintaining a safe environment for all users.
            We have a zero-tolerance policy for child sexual abuse and
            exploitation (CSAE), including child sexual abuse material (CSAM)
            and any behaviour that exploits, harms, or endangers minors.
          </p>

          <h2 className="text-base font-semibold text-gray-100">
            our commitment
          </h2>

          <p>
            We do not allow content, behaviour, or interactions that involve:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>child sexual abuse or exploitation</li>
            <li>child sexual abuse material (CSAM)</li>
            <li>grooming, coercion, or predatory behaviour towards minors</li>
            <li>
              any use of Loopt that puts children or young people at risk
            </li>
          </ul>

          <h2 className="text-base font-semibold text-gray-100">reporting</h2>

          <p>
            Loopt provides ways for users to report inappropriate content,
            abusive behaviour, or safety concerns in-app.
          </p>

          <p>
            Reports are reviewed promptly. Where appropriate, we may remove
            content, suspend accounts, permanently ban users, and take any other
            action needed to protect our users and comply with the law.
          </p>

          <h2 className="text-base font-semibold text-gray-100">
            enforcement
          </h2>

          <p>
            We actively enforce our safety standards and reserve the right to
            restrict or remove access to Loopt for any user who violates these
            rules.
          </p>

          <p>
            Serious violations may result in immediate account termination
            without warning.
          </p>

          <h2 className="text-base font-semibold text-gray-100">
            cooperation with authorities
          </h2>

          <p>
            Loopt complies with applicable child safety laws and reporting
            obligations.
          </p>

          <p>
            Where required, we report illegal material or behaviour to relevant
            regional or national authorities and cooperate with lawful requests
            relating to child safety investigations.
          </p>

          <h2 className="text-base font-semibold text-gray-100">contact</h2>

          <p>
            For child safety concerns or compliance-related enquiries, please contact us directly.
            </p>

            <p>
           <a
            href="mailto:lily@loopt.app?subject=Child%20Safety%20Report"
            className="underline text-gray-400 hover:text-gray-200"
            >
            contact us
            </a>
            </p>
            {/* FOOTER */}
            <footer className="mx-auto w-full max-w-7xl px-6 pb-10 sm:px-8 lg:px-12">
            <div className="border-t border-white/8 pt-6 text-center">
                <p className="text-sm text-white/45">
                Copyright © 2026 Loopt Ltd. All Rights Reserved.
                </p>

               <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/55">
                <a
                    href="https://www.loopt.app"
                    className="transition hover:text-white/85"
                >
                    home
                </a>
                <span className="text-white/20">|</span>

                <a href="/premium" className="transition hover:text-white/85">
                    Premium
                </a>
                <span className="text-white/20">|</span>

                <a
                    href="https://join.loopt.app/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white/85"
                >
                    privacy policy
                </a>
                <span className="text-white/20">|</span>

                <a
                    href="https://join.loopt.app/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white/85"
                >
                    terms &amp; conditions
                </a>
                <span className="text-white/20">|</span>

                <a href="/support" className="transition hover:text-white/85">
                    support
                </a>
                <span className="text-white/20">|</span>

                <a href="/delete-account" className="transition hover:text-white/85">
                    delete account
                </a>
                <span className="text-white/20">|</span>

                <a
                    href="https://www.loopt.app/safety"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white/85"
                >
                    child safety
                </a>
                </div>
            </div>
            </footer>
        </div>
      </div>
    </div>
  );
}
