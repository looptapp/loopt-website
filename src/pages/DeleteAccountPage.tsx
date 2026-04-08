import { Link } from "react-router-dom";
export default function DeleteAccountPage() {
  const deleteHref =
    "mailto:lily@loopt.app?subject=" +
    encodeURIComponent("Loopt account deletion request") +
    "&body=" +
    encodeURIComponent(
        "Hi Loopt,\n\nI would like to delete my account and associated data.\n\nFull name:\n\nPhone number used to create my account:\n\nAnything else that might help:\n",
    );

  return (
    <main className="min-h-screen bg-[#0f0f10] text-white">
      <section className="relative mx-auto w-full max-w-5xl px-6 pt-8 pb-14 sm:px-8 sm:pt-10 lg:px-12 lg:pt-12 lg:pb-16">
        <a
          href="/"
          className="absolute left-6 top-2 inline-flex items-center text-[0.95rem] font-[500] tracking-[-0.01em] text-[#FE7512]/78 transition hover:text-[#FE7512] sm:left-8 sm:top-4 lg:left-12 lg:top-6"
          style={{ fontFamily: '"Quicksand", sans-serif' }}
        >
          <span className="mr-2 text-[1rem]">‹</span>
          go back
        </a>

        <div className="max-w-[680px] pt-[15%] sm:pt-[13%] lg:pt-[18%]">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Loopt"
            className="mb-8 h-[2.35rem] w-auto sm:h-[2.6rem]"
          />
        </Link>

          <h1
            className="text-[2.2rem] font-[500] leading-[0.98] tracking-[-0.05em] text-white sm:text-[2.9rem]"
            style={{ fontFamily: '"Quicksand", sans-serif' }}
          >
            delete account
          </h1>

          <p
            className="mt-5 max-w-[620px] text-[1rem] leading-7 text-white/65 sm:text-[1.04rem]"
            style={{ fontFamily: '"Quicksand", sans-serif' }}
          >
            If you would like to delete your Loopt account and associated data,
            you can request this at any time.
          </p>

          <div className="mt-10 grid gap-4">
            <section className="rounded-[22px] border border-white/8 bg-white/[0.02] p-5 sm:p-6">
              <h2
                className="text-[1.12rem] font-[500] tracking-[-0.03em] text-white"
                style={{ fontFamily: '"Quicksand", sans-serif' }}
              >
                how to request deletion
              </h2>

              <p
                className="mt-4 text-[0.97rem] leading-7 text-white/65"
                style={{ fontFamily: '"Quicksand", sans-serif' }}
              >
                Click the link below to request account deletion. Please include
                your full name and the phone number used to create your account.
              </p>

              <div className="mt-6">
                <a
                  href={deleteHref}
                  className="inline-flex min-h-[56px] items-center justify-center rounded-[16px] border border-[#FE7512]/75 px-7 text-[1rem] font-[500] tracking-[-0.01em] text-white transition duration-200 hover:bg-white/[0.02] hover:border-[#FE7512]"
                  style={{ fontFamily: '"Quicksand", sans-serif' }}
                >
                  <span>request account deletion</span>
                  <span className="ml-2.5 text-white/60">›</span>
                </a>
              </div>
            </section>

            <section className="rounded-[22px] border border-white/8 bg-white/[0.02] p-5 sm:p-6">
              <h2
                className="text-[1.12rem] font-[500] tracking-[-0.03em] text-white"
                style={{ fontFamily: '"Quicksand", sans-serif' }}
              >
                what happens when your account is deleted
              </h2>

              <ul
                className="mt-4 list-disc space-y-3 pl-5 text-[0.97rem] leading-7 text-white/65"
                style={{ fontFamily: '"Quicksand", sans-serif' }}
              >
                <li>your account profile will be permanently deleted</li>
                <li>your phone number and associated user data will be deleted</li>
                <li>your event participation and invitations will be deleted</li>
                <li>your messages and updates in the app will be deleted</li>
              </ul>
            </section>

            <section className="rounded-[22px] border border-white/8 bg-white/[0.02] p-5 sm:p-6">
              <h2
                className="text-[1.12rem] font-[500] tracking-[-0.03em] text-white"
                style={{ fontFamily: '"Quicksand", sans-serif' }}
              >
                data retention
              </h2>

              <p
                className="mt-4 text-[0.97rem] leading-7 text-white/65"
                style={{ fontFamily: '"Quicksand", sans-serif' }}
              >
                We do not retain your personal data after deletion, except where
                required for legal, security or fraud prevention purposes. Any
                such data is retained only for as long as necessary.
              </p>

              <p
                className="mt-4 text-[0.97rem] leading-7 text-white/65"
                style={{ fontFamily: '"Quicksand", sans-serif' }}
              >
                We aim to process deletion requests within 7 days.
              </p>
            </section>
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-7xl px-6 pb-10 sm:px-8 lg:px-12">
        <div className="border-t border-white/8 pt-6 text-center">
          <p
            className="text-sm text-white/45"
            style={{ fontFamily: '"Quicksand", sans-serif' }}
          >
            Copyright © 2026 Loopt Ltd. All Rights Reserved.
          </p>

          <div
            className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/55"
            style={{ fontFamily: '"Quicksand", sans-serif' }}
          >
            <a href="/privacy" className="transition hover:text-white/85">
              privacy policy
            </a>
            <span className="text-white/20">|</span>
            <a href="/terms" className="transition hover:text-white/85">
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
          </div>
        </div>
      </footer>
    </main>
  );
}