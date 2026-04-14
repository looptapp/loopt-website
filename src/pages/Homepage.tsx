import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "what is Loopt used for?",
    answer:
      "Loopt is a private social planning app for organising plans with friends. It keeps invites, guest lists, updates and event details in one place, so everything stays clear.",
  },
  {
    question: "is Loopt public?",
    answer:
      "no — Loopt is built for private plans, not public posting. Events are only visible to people who are invited, either directly or through someone in the group.",
  },
  {
    question: "do I need the app to open an invite?",
    answer:
      "you can open an invite link in your browser and see the event details, like the name, date and time. To join the guest list, see who’s going, get updates or send messages, you’ll need to log in or create an account. It only takes a few seconds.",
  },
  {
    question: "what kind of plans is Loopt for?",
    answer:
      "anything social and real-life — drinks, dinners, birthdays, movies, sport, trips, house parties and more. It also works well for people who organise things regularly, like run clubs, dog walks, pub quizzes or group meetups.",
  },
  {
    question: "why use Loopt instead of a group chat?",
    answer:
      "because the details stay organised. Instead of invites, updates and guest changes getting buried in messages, everything lives in one clear place. You can also easily add people — and give guests controlled access to invite others where it makes sense.",
  },
  {
    question: "can I invite people who don’t have Loopt?",
    answer:
      "yes — every event has a shareable invite link. You can send it to anyone, and they can join from there.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-[20px] border border-white/8 bg-white/[0.02] backdrop-blur-sm transition duration-200 hover:border-white/12">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left sm:px-6"
      >
        <span className="text-[1rem] font-[500] tracking-[-0.015em] text-white/92 sm:text-[1.03rem]">
          {question}
        </span>

        <span
          className={`shrink-0 text-xl leading-none text-white/45 transition-transform duration-200 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-[0.98rem] leading-7 text-white/62 sm:px-6">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepagePreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

        .loopt-fade-1 {
          opacity: 0;
          animation: looptFadeUp 0.7s ease-out forwards;
          animation-delay: 0.08s;
        }

        .loopt-fade-2 {
          opacity: 0;
          animation: looptFadeUp 0.7s ease-out forwards;
          animation-delay: 0.16s;
        }

        .loopt-fade-3 {
          opacity: 0;
          animation: looptFadeUp 0.7s ease-out forwards;
          animation-delay: 0.24s;
        }

        .loopt-fade-4 {
          opacity: 0;
          animation: looptFadeUp 0.7s ease-out forwards;
          animation-delay: 0.32s;
        }

        .loopt-fade-5 {
          opacity: 0;
          animation: looptFadeUp 0.7s ease-out forwards;
          animation-delay: 0.42s;
        }

        .loopt-fade-phone {
          opacity: 0;
          animation:
            looptFadeUp 0.85s ease-out forwards,
            looptFloat 5.2s ease-in-out 1.05s infinite;
          animation-delay: 0.22s, 1.05s;
        }
      `}</style>

      <main className="min-h-screen bg-[#0f0f10] text-white overflow-hidden">
        <section className="mx-auto flex min-h-screen w-full max-w-7xl items-start px-6 pt-8 pb-8 sm:px-8 sm:pt-10 lg:px-12 lg:pt-12">
          <div className="grid w-full items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
            {/* LEFT */}
            <div className="max-w-[560px] pt-[30%] sm:pt-[26%] lg:pt-[30%]">
              <Link to="/">
                <img
                  src="/logo.png"
                  alt="Loopt"
                  className="loopt-fade-1 mb-5 h-[2.3rem] w-auto cursor-pointer sm:h-[2.55rem]"
                />
              </Link>

              <h1
                className="loopt-fade-2 max-w-[520px] text-[2.45rem] font-[500] leading-[0.98] tracking-[-0.055em] text-white sm:text-[3.1rem] lg:text-[4.15rem]"
                style={{ fontFamily: '"Quicksand", sans-serif' }}
              >
                plans, sorted
              </h1>

                <p
                  className="loopt-fade-3 mt-5 max-w-[470px] text-[1rem] font-[500] leading-[1.85] tracking-[-0.01em] text-white/68 sm:text-[1.04rem]"
                  style={{ fontFamily: '"Quicksand", sans-serif' }}
                >
                  Loopt keeps your plans, people and updates in one place — so everything feels easy.
                </p>

                <div className="loopt-fade-4 mt-8 flex flex-col items-start">
                  {/* PRIMARY CTA */}
                  <a
                    href="https://join.loopt.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[56px] items-center justify-center rounded-[16px] border border-[#FE7512]/75 px-7 text-[1rem] font-[500] tracking-[-0.01em] text-white transition duration-200 hover:bg-white/[0.02] hover:border-[#FE7512]"
                    style={{ fontFamily: '"Quicksand", sans-serif' }}
                  >
                    <span>get Loopt</span>
                    <span className="ml-2.5 text-white/60">›</span>
                  </a>

                  {/* STORE BADGE */}
                  <div className="mt-8 flex items-center opacity-85">
                    <a
                      href="https://apps.apple.com/us/app/loopt/id6759469851"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/app-store-badge.svg"
                        alt="Download on the App Store"
                        className="h-[38px] w-auto"
                      />
                    </a>
                  </div>
                </div>
              </div>

            {/* RIGHT */}
            <div className="flex justify-center lg:justify-end lg:-mt-4 lg:pr-20">
              <div className="relative w-full max-w-[270px] sm:max-w-[300px] lg:max-w-[330px]">
                <div className="absolute inset-0 bg-[#FE7512]/[0.045] blur-3xl" />
                <a
                  href="https://apps.apple.com/us/app/loopt/id6759469851"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/plans.png"
                    alt="Loopt app preview"
                    className="loopt-fade-phone relative block w-full h-auto select-none"
                    draggable={false}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-6 pb-16 sm:px-8 lg:px-12 lg:pb-20">
          <div className="loopt-fade-5">
            <div className="mb-8 max-w-[700px]">
              <h2 className="text-[1.9rem] font-[500] tracking-[-0.04em] text-white sm:text-[2.4rem]">
                a few things to know
              </h2>
              <p className="mt-3 max-w-[620px] text-[1rem] leading-7 text-white/60">
                Loopt is a private app for organising plans with friends —
                keeping invites, updates and guest lists in one place.
              </p>
            </div>


            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((current) =>
                      current === index ? null : index,
                    )
                  }
                />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {/* PRIMARY CTA */}
              <a
                href="https://join.loopt.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[56px] items-center justify-center rounded-[16px] border border-[#FE7512]/75 px-7 text-[1rem] font-[500] tracking-[-0.01em] text-white transition duration-200 hover:bg-white/[0.02] hover:border-[#FE7512]"
                style={{ fontFamily: '"Quicksand", sans-serif' }}
              >
                <span>get Loopt</span>
                <span className="ml-2.5 text-white/60">›</span>
              </a>

              {/* SECONDARY */}
              <a
                href="/support"
                className="inline-flex min-h-[56px] items-center justify-center rounded-[16px] border border-white/15 px-6 text-[0.98rem] font-[500] text-white/70 transition hover:text-white hover:border-white/30"
                style={{ fontFamily: '"Quicksand", sans-serif' }}
              >
                <span>get in touch</span>
                <span className="ml-2.5 text-white/50">›</span>
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mx-auto w-full max-w-7xl px-6 pb-10 sm:px-8 lg:px-12">
          <div className="border-t border-white/8 pt-6 text-center">
            <p className="text-sm text-white/45">
              Copyright © 2026 Loopt Ltd. All Rights Reserved.
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/55">
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