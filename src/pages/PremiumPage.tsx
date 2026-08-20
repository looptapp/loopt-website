import { useState } from "react";
import { Link } from "react-router-dom";

// const iconStyle =
//   "h-[42px] w-auto opacity-90";

const APP_URL = "https://join.loopt.app/";

const premiumFeatures = [
  {
    title: "check who's in",
    visual: "attendance",
    text: "see who's in, out, or a maybe, and nudge people for a response",
    usefulWhen:
      "you're trying to work out numbers without chasing everyone individually",
  },
  {
    title: "ask a question",
    visual: "question",
    text: "ask people individually about food, arrival times or what they're bringing — without notifying everyone as a group",
    usefulWhen:
      "you need answers from people without creating a flood of replies and notifications",
  },
  {
    title: "share payment link",
    visual: "payment",
    text: "add a payment or suggested donation link, and see who has marked it as paid",
    usefulWhen:
      "people need to contribute towards a booking, trip, ticket or shared costs",
  },
  {
    title: "change add access",
    visual: "inviteTypes",
    text: "switch people between them-only, +1 or open access at any time",
    usefulWhen:
      "someone was given the wrong access, or the plan is getting bigger than expected",
  },
  {
    title: "prevent rejoining",
    visual: "rejoin",
    text: "if someone leaves, they'll need a fresh invite link to come back",
    usefulWhen:
      "you're managing limited spaces and don't want numbers changing constantly",
  },
  {
    title: "limit visibility",
    visual: "limitVisibility",
    text: "people only see those they're connected to, plus the total number of people in the plan",
    usefulWhen:
      "plans are shared more widely and guests don't need visibility of everyone attending",
  },
  {
    title: "keep group private",
    visual: "privateGroup",
    text: "stop other people reusing your attendee list for their own future plans",
    usefulWhen:
      "you're growing a community and want to protect who attends your events",
  },
  {
    title: "community mode",
    visual: "community",
    text: "people who join through organiser links won't automatically become your 1st connections",
    usefulWhen:
      "you're sharing plans publicly and don't want attendees becoming part of your personal network",
  },
];

export default function PremiumPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0f0f10] font-['Quicksand',sans-serif] text-white">
      <section className="relative mx-auto w-full max-w-7xl px-6 pt-8 pb-14 sm:px-8 sm:pt-10 lg:px-12 lg:pt-12 lg:pb-16">
        <a
          href="/"
          className="absolute left-6 top-8 inline-flex items-center text-[0.95rem] font-[500] tracking-[-0.01em] text-[#FE7512]/78 transition hover:text-[#FE7512] sm:left-8 sm:top-10 lg:left-12 lg:top-12"
          style={{ fontFamily: '"Quicksand", sans-serif' }}
        >
          <span className="mr-2 text-[1rem]">‹</span>
          go back
        </a>

        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="max-w-[620px] pt-[15%] sm:pt-[13%] lg:pt-[30%]">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Loopt"
                className="mb-10 h-[2.35rem] w-auto sm:h-[2.6rem]"
              />
            </Link>

           <div className="mb-5 flex items-center gap-2">
            <img
                src="/bolt.svg"
                alt=""
                className="h-4 w-4 brightness-0 invert"
            />

            <p className="text-[0.82rem] font-[600] uppercase tracking-[0.34em] text-[#FE7512]">
                Loopt Premium
            </p>
            </div>

            <h1 className="max-w-[520px] text-[2.45rem] font-[500] leading-[0.98] tracking-[-0.055em] text-white sm:text-[3.1rem] lg:text-[4.15rem]">
              for plans that spread
            </h1>

            <p className="mt-7 max-w-[520px] text-[1.08rem] font-[500] leading-[1.9] tracking-[-0.01em] text-white/62 sm:text-[1.14rem]">
              when you need a little more organisation and control
            </p>

            <p className="mt-3 text-[0.95rem] font-[500] text-white/38">
              about the cost of a coffee · cancel anytime
            </p>

            <div className="mt-9 flex flex-col items-start gap-4">
              <a
                href={APP_URL}
                className="group inline-flex h-[58px] items-center rounded-[15px] border border-[#FE7512] px-8 text-[1.05rem] font-[500] tracking-[-0.02em] text-white transition hover:bg-[#FE7512]/10"
              >
                get Premium
                <span className="ml-3 translate-y-[-1px] text-[#FE7512] transition group-hover:translate-x-1">
                  ›
                </span>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end lg:pt-[4%]">
            <div className="relative w-full max-w-[620px] lg:w-[106%] lg:max-w-none lg:origin-top-right lg:translate-x-12 lg:scale-[1.08]">
              <div className="absolute inset-0 bg-[#FE7512]/[0.045] blur-3xl" />
              <picture className="block">
                <source
                  type="image/webp"
                  srcSet="/loopt-premium-plan-features-620.webp 620w, /loopt-premium-plan-features-800.webp 800w, /loopt-premium-plan-features-1600.webp 1600w"
                  sizes="(min-width: 1280px) 780px, (min-width: 1024px) 61vw, (min-width: 640px) min(620px, calc(100vw - 64px)), min(620px, calc(100vw - 48px))"
                />
                <img
                  src="/loopt-premium-plan-features.png"
                  width={4218}
                  height={3881}
                  alt="Loopt plan showing Premium controls for who's in, payments, questions, privacy and who can join"
                  className="relative block h-auto w-full select-none"
                  fetchPriority="high"
                  draggable={false}
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-20">

        <section className="border-t border-white/10 py-20">
          <div className="mb-9 max-w-[720px]">
            <p className="mb-4 text-[0.82rem] font-[600] uppercase tracking-[0.3em] text-[#FE7512]">
              Premium
            </p>
            <h2 className="text-[2.65rem] font-[500] leading-[1.05] tracking-[-0.055em] text-white sm:text-[3.5rem]">
                when your plans start to spread {" "}
                <img
                    src="/bolt.svg"
                    alt=""
                    className="inline-block h-[0.8em] w-[0.8em] align-[0.02em] brightness-0 invert opacity-80"
                />
                </h2>
                <p className="mt-6 max-w-[420px] text-[1.02rem] font-[500] leading-[1.85] text-white/56">
                    a little more control, without making things complicated
                </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {premiumFeatures.map((feature) => (
                <FeatureCard
                    key={feature.title}
                    title={feature.title}
                    text={feature.text}
                    tag="premium"
                    visual={feature.visual}
                    usefulWhen={feature.usefulWhen}
                    />
            ))}
                        </div>
        </section>

        <section className="py-20">
          <div className="rounded-[34px] border border-white/10 bg-[#171717] px-7 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-4 text-[0.82rem] font-[600] uppercase tracking-[0.3em] text-white/28">
                  get Loopt
                </p>

                <h2 className="max-w-[560px] text-[2.65rem] font-[500] leading-[1.05] tracking-[-0.055em] text-white sm:text-[3.5rem]">
                  most people won’t need Premium
                </h2>
              </div>

              <div>
                <p className="max-w-[560px] text-[1.08rem] font-[500] leading-[1.9] text-white/62">
                  Loopt is free for everyday plans. Premium gives you a little
                  more control when you need it.
                </p>

                <a
                  href={APP_URL}
                  className="mt-8 inline-flex h-[56px] items-center rounded-[15px] border border-[#FE7512] px-8 text-[1.05rem] font-[500] tracking-[-0.02em] text-white transition hover:bg-[#FE7512]/10"
                >
                  get Premium
                  <span className="ml-3 translate-y-[-1px] text-[#FE7512]">
                    ›
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-24">
          <div className="max-w-[900px]">
            <p className="mb-4 text-[0.82rem] font-[600] uppercase tracking-[0.3em] text-white/28">
              FAQs
            </p>

            <h2 className="mb-14 text-[2.65rem] font-[500] leading-[1.05] tracking-[-0.055em] text-white sm:text-[3.5rem]">
              how Loopt works
            </h2>

            <div className="space-y-3">
              {premiumFaqs.map((faq, index) => (
                <PremiumFaqItem
                  key={faq.question}
                  id={`premium-faq-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaqIndex === index}
                  onToggle={() =>
                    setOpenFaqIndex((current) =>
                      current === index ? null : index,
                    )
                  }
                />
              ))}
            </div>
          </div>
        </section>
      </div>

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
  );
}

function PremiumFaqItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  return (
    <div className="rounded-[20px] border border-white/8 bg-white/[0.02] backdrop-blur-sm transition duration-200 hover:border-white/12">
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
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
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
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

const premiumFaqs = [
  {
    question: "what is Loopt?",
    answer:
      "Loopt is a way to organise plans through real friendship networks. Instead of posting an event publicly and hoping the right people find it, plans start with a few people and spread naturally as friends invite friends.",
  },
  {
    question: "how is Loopt different from Meetup, Eventbrite or Heylo?",
    answer:
      "Meetup, Eventbrite and Heylo are mostly built around publishing events, selling tickets or managing communities. Loopt is friendship-circle first. If someone is already going, they can invite the people they know, while the organiser controls how far the plan can spread.",
  },
  {
    question: "how is Loopt different from a group chat?",
    answer:
      "Loopt keeps the plan details, guest list, updates and invite links attached to the plan itself. People can still chat elsewhere if they want, but the important details do not get buried in conversation.",
  },
  {
    question: "who is Loopt for?",
    answer:
      "Loopt works for dinner plans, birthdays, house parties, run clubs, student societies, community events, group trips and recurring gatherings. Some plans involve five people. Others involve hundreds.",
  },
  {
    question: "do guests need Premium?",
    answer:
      "No. Loopt is free for guests, attendees and casual organisers. Premium is for people who regularly organise plans, communities or recurring events and want extra visibility, privacy and control.",
  },
  {
    question: "can people join without downloading the app?",
    answer:
      "Yes. Plans can be shared through invite links, making it easy to invite people who do not already use Loopt.",
  },
  {
    question: "why do people upgrade?",
    answer:
      "Most plans work well on the free version. Premium adds features for organisers who want attendance tracking, guest questions, payment links, privacy controls, community mode and more control over how plans spread.",
  },
  {
    question: "why do people enjoy using Loopt?",
    answer:
      "Loopt lowers the barrier to organising. You do not need a special organiser account, public event page or mailing list. You can make a plan, invite a few people and let it grow from there. That also means people can discover plans through people they already know and trust.",
  },
];

function FeatureCard({
  title,
  text,
  visual,
  usefulWhen,
}: {
  title: string;
  text: string;
  tag: "free" | "premium";
  visual?: string;
  usefulWhen?: string;
}) {

    // const isPremium = tag === "premium";

  return (
    <article className="rounded-[28px] border border-white/10 bg-[#171717] p-6 transition hover:border-[#FE7512]/45">
    {visual && <FeatureVisual type={visual} />}

      <h3 className="text-[1.45rem] font-[500] leading-[1.15] tracking-[-0.04em] text-white">
        {title}
      </h3>

      <p className="mt-4 text-[0.98rem] font-[500] leading-[1.75] tracking-[-0.01em] text-white/56">
        {text}
      </p>

        {usefulWhen && (
           <div className="mt-5 border-t border-[#FE7512]/35 pt-4">
                <p className="mb-2 text-[0.68rem] font-[700] uppercase tracking-[0.16em] text-[#FE7512]/70">
                useful when
                </p>

                <p className="text-[0.86rem] font-[500] leading-[1.65] tracking-[-0.01em] text-white/36">
                {usefulWhen}
                </p>
            </div>
            )}
    </article>
  );
}

function FeatureVisual({ type }: { type: string }) {
  // const avatar = "h-7 w-7 rounded-[9px] bg-white/12 border border-white/10";

  if (type === "attendance") {
    return (
        <div className="mb-7 flex flex-wrap gap-2">
        <span className="rounded-full border border-green-500/35 px-3 py-[5px] text-[11px] font-medium text-green-400/80">
            I'm in
        </span>

        <span className="rounded-full border border-[#FE7512]/45 px-3 py-[5px] text-[11px] font-medium text-[#FE7512]/85">
            maybe
        </span>

        <span className="rounded-full border border-red-500/30 px-3 py-[5px] text-[11px] font-medium text-red-400/70">
            - out
        </span>
        </div>
    );
    }

  if (type === "question") {
    return (
        <div className="mb-7">
        <img
            src="/question_mark.svg"
            alt=""
            className="h-[46px] w-auto"
        />
        </div>
    );
    }

  if (type === "rejoin") {
    return (
      <div className="mb-7 inline-flex items-center gap-3 rounded-[18px] border border-white/10 bg-black/35 px-4 py-3">
        <span className="relative rounded-full border border-white/15 px-4 py-1.5 text-[0.85rem] text-white/45">
          rejoin
          <span className="absolute left-2 right-2 top-1/2 h-px -rotate-12 bg-[#FE7512]" />
        </span>
      </div>
    );
  }

  if (type === "inviteTypes") {
    return (
        <div className="mb-7 flex items-center gap-4">
        <span
            aria-hidden="true"
            className="h-[42px] w-[42px] bg-[#FE7512]"
            style={{
              WebkitMask:
                "url(/invite_only_symbol.svg) center / contain no-repeat",
              mask: "url(/invite_only_symbol.svg) center / contain no-repeat",
            }}
        />

        <span
            aria-hidden="true"
            className="h-[42px] w-[42px] bg-[#FE7512]"
            style={{
              WebkitMask:
                "url(/plus_one_symbol.svg) center / contain no-repeat",
              mask: "url(/plus_one_symbol.svg) center / contain no-repeat",
            }}
        />

        <span
            aria-hidden="true"
            className="h-[42px] w-[42px] bg-[#FE7512]"
            style={{
              WebkitMask:
                "url(/bring_friends_symbol.svg) center / contain no-repeat",
              mask: "url(/bring_friends_symbol.svg) center / contain no-repeat",
            }}
        />
        </div>
    );
    }

  if (type === "payment") {
    return (
        <div className="mb-7">
        <img
            src="/wallet.svg"
            alt=""
            className="h-[46px] w-auto"
        />
        </div>
    );
    }

  if (type === "community") {
    return (
        <div className="mb-7">
        <img
            src="/groups.svg"
            alt=""
            className="h-[46px] w-auto"
        />
        </div>
    );
    }

  if (type === "privateGroup") {
    return (
        <div className="mb-7">
        <img
            src="/visibility_lock.svg"
            alt=""
            className="h-[46px] w-auto"
        />
        </div>
    );
    }

  if (type === "limitVisibility") {
    return (
        <div className="mb-7 flex items-center gap-2">
        <div className="shrink-0 flex items-center">
            <div className="flex -space-x-4">
            <div className="h-8 w-8 rounded-lg border border-white/15 bg-[#171717]" />
            <div className="h-8 w-8 rounded-lg border border-[#FE7512]/15 bg-[#1c1c1c]" />
            <div className="h-8 w-8 rounded-lg border border-[#FE7512]/25 bg-[#232323]" />
            </div>
        </div>

        <span className="ml-1 text-sm font-medium text-[#FE7512]/85">
            +30 others
            </span>
        </div>
    );
    }


  return null;
}
