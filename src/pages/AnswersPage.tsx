import { Link } from "react-router-dom";
import { answers } from "../content/answers";
import SiteFooter from "../components/SiteFooter";
import SiteMenu from "../components/SiteMenu";

export default function AnswersPage() {
  return (
    <main className="min-h-screen bg-[#0f0f10] text-white">
      <SiteMenu />
      <section className="mx-auto w-full max-w-5xl px-6 pb-24 pt-8 sm:px-8 sm:pt-10 lg:px-12 lg:pb-32 lg:pt-12">
        <div className="pt-[15%] sm:pt-[13%] lg:pt-[clamp(6.6rem,calc(12vw-1.08rem),8.52rem)]">
          <Link to="/" className="inline-block">
            <img src="/logo.png" alt="Loopt" className="h-[2.35rem] w-auto sm:h-[2.6rem]" />
          </Link>
          <div className="mt-10 max-w-[720px]">
            <p className="mb-5 text-[0.82rem] font-[600] uppercase tracking-[0.3em] text-[#FE7512]">Loopt Answers</p>
            <h1 className="text-[2.6rem] font-[500] leading-[1.05] tracking-[-0.055em] sm:text-[3.5rem]">Making plans and spending time together</h1>
            <p className="mt-7 max-w-[650px] text-[1.05rem] font-[500] leading-[1.85] text-white/62 sm:text-[1.1rem]">Thoughtful answers to real questions about making plans, seeing friends and spending more time together offline.</p>
            <div className="mt-14 border-t border-white/10">
              {answers.map((answer) => (
                <Link key={answer.slug} to={answer.path} className="group block border-b border-white/10 py-8">
                  <h2 className="text-[1.45rem] font-[500] tracking-[-0.035em] text-white transition group-hover:text-[#FE7512] sm:text-[1.65rem]">{answer.title}</h2>
                  <span className="mt-3 inline-block text-sm text-white/45 transition group-hover:text-white/65">read answer ›</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
