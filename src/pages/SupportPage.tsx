import { Link } from "react-router-dom";
export default function SupportPage() {
  const supportHref =
    "mailto:lily@loopt.app?subject=" +
    encodeURIComponent("Loopt enquiry") +
    "&body=" +
    encodeURIComponent(
      "Hi Loopt,\n\nI need help with:\n\n\n\nDevice / browser:\n\nAccount phone number:\n\nAnything else that might help:\n",
    );

  return (
    <>
      <style>{`
        @keyframes looptFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes looptFloat {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .loopt-fade-phone {
          opacity: 0;
          animation:
            looptFadeUp 0.85s ease-out forwards,
            looptFloat 5.2s ease-in-out 1.05s infinite;
          animation-delay: 0.22s, 1.05s;
        }
      `}</style>

      <main className="min-h-screen bg-[#0f0f10] text-white">
      <section className="relative mx-auto w-full max-w-7xl px-6 pt-8 pb-14 sm:px-8 sm:pt-10 lg:px-12 lg:pt-12 lg:pb-16">

        <a
  href="/"
  className="absolute left-6 top-8 inline-flex items-center text-[0.95rem] font-[500] tracking-[-0.01em] text-[#FE7512]/78 transition hover:text-[#FE7512] sm:left-8 sm:top-10 lg:left-12 lg:top-12"
  style={{ fontFamily: '"Quicksand", sans-serif' }}
>
  <span className="mr-2 text-[1rem]">‹</span>
  go back
</a>
        {/* TOP SECTION */}
        <div className="grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          {/* LEFT SIDE */}
          <div className="max-w-[520px] pt-[15%] sm:pt-[13%] lg:pt-[30%]">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Loopt"
              className="mb-10 h-[2.35rem] w-auto sm:h-[2.6rem]"
            />
            </Link>

            <h1
              className="text-[2.35rem] font-[500] leading-[0.98] tracking-[-0.05em] text-white sm:text-[3rem]"
              style={{ fontFamily: '"Quicksand", sans-serif' }}
            >
              get in touch
            </h1>

            <p
              className="mt-4 max-w-[460px] text-[1rem] leading-7 text-white/65 sm:text-[1.04rem]"
              style={{ fontFamily: '"Quicksand", sans-serif' }}
            >
              for support, press or other enquiries.
            </p>

            <div className="mt-7">
              <a
                href={supportHref}
                className="inline-flex min-h-[56px] items-center justify-center rounded-[16px] border border-[#FE7512]/75 px-7 text-[1rem] font-[500] tracking-[-0.01em] text-white transition duration-200 hover:bg-white/[0.02] hover:border-[#FE7512]"
                style={{ fontFamily: '"Quicksand", sans-serif' }}
              >
                <span>contact Loopt</span>
                <span className="ml-2.5 text-white/60">›</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end lg:-mt-4 lg:pr-20">
            <div className="relative w-full max-w-[270px] sm:max-w-[300px] lg:max-w-[330px]">
              <div className="absolute inset-0 bg-[#FE7512]/[0.045] blur-3xl" />
              <img
                src="/gala-plans.png"
                alt="Loopt event screen"
                className="loopt-fade-phone relative block w-full h-auto select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* INFO CARDS */}
        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:gap-4">
          <section className="rounded-[22px] border border-white/8 bg-white/[0.02] p-5 sm:p-6">
            <h2 className="text-[1.12rem] font-[500] tracking-[-0.03em] text-white">
              what is Loopt?
            </h2>

            <div className="mt-4 space-y-4 text-[0.97rem] leading-7 text-white/65">
              <p>
                Loopt Ltd is a UK-registered company building tools for private
                social coordination.
              </p>
              <p>
                Loopt is a private social planning app that helps people
                organise plans with friends, manage invitations and keep updates
                in one place.
              </p>
            </div>
          </section>

          <section className="rounded-[22px] border border-white/8 bg-white/[0.02] p-5 sm:p-6">
            <h2 className="text-[1.12rem] font-[500] tracking-[-0.03em] text-white">
              how it works
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-5 text-[0.97rem] leading-7 text-white/65">
              <li>create a plan and add the details</li>
              <li>invite people directly or share a link</li>
              <li>send updates and messages</li>
              <li>stay in control of who can join</li>
            </ul>
          </section>

          <section className="rounded-[22px] border border-white/8 bg-white/[0.02] p-5 sm:p-6">
            <h2 className="text-[1.12rem] font-[500] tracking-[-0.03em] text-white">
              invite links
            </h2>

            <p className="mt-4 text-[0.97rem] leading-7 text-white/65">
              share a Loopt invite link with anyone. People can open the link and view the event details, then download the app or sign in to join the guest list, see who’s going, get updates and send messages.
            </p>
          </section>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto w-full max-w-7xl px-6 pb-10 sm:px-8 lg:px-12">
        <div className="border-t border-white/8 pt-6 text-center">
          <p className="text-sm text-white/45">
            Copyright © 2026 Loopt Ltd. All Rights Reserved.
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/55">
            <Link to="/premium" className="transition hover:text-white/85">
              Premium
            </Link>
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
    </main>
  </>
  );
}
