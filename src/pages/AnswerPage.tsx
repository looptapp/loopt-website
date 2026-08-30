import { Link, useParams } from "react-router-dom";
import { getAnswerBySlug } from "../content/answers";
import SiteFooter from "../components/SiteFooter";
import SiteMenu from "../components/SiteMenu";

export default function AnswerPage() {
  const { slug } = useParams();
  const answer = getAnswerBySlug(slug);

  if (!answer) {
    return (
      <main className="min-h-screen bg-[#0f0f10] px-6 py-16 text-white">
        <div className="mx-auto max-w-[720px]">
          <h1 className="text-3xl font-[500]">Answer not found</h1>
          <Link to="/answers" className="mt-8 inline-block text-[#FE7512]">← answers</Link>
        </div>
      </main>
    );
  }

  const getLooptHref = `https://join.loopt.app/?answer_path=${encodeURIComponent(answer.path)}`;

  return (
    <main className="min-h-screen bg-[#0f0f10] text-white">
      <SiteMenu />
      <section className="mx-auto w-full max-w-5xl px-6 pb-24 pt-8 sm:px-8 sm:pt-10 lg:px-12 lg:pb-32 lg:pt-12">
        <div className="pt-[15%] sm:pt-[13%] lg:pt-[clamp(6.6rem,calc(12vw-1.08rem),8.52rem)]">
          <div className="mx-auto flex max-w-[720px] items-center justify-between gap-6">
            <Link to="/"><img src="/logo.png" alt="Loopt" className="h-[2.35rem] w-auto sm:h-[2.6rem]" /></Link>
            <Link to="/answers" className="text-[0.95rem] font-[500] text-[#FE7512]/80 transition hover:text-[#FE7512]">← answers</Link>
          </div>
          <article className="mx-auto mt-10 max-w-[720px]">
          <h1 className="text-[2.65rem] font-[500] leading-[1.08] tracking-[-0.055em] text-white sm:text-[3.65rem]">{answer.title}</h1>
          <div className="mt-12 sm:mt-14">
            {answer.content.map((block, index) => {
              if (block.type === "heading") {
                return <h2 key={index} className="mb-6 mt-16 text-[1.65rem] font-[500] leading-[1.25] tracking-[-0.04em] text-white sm:mt-20 sm:text-[2rem]">{block.text}</h2>;
              }
              if (block.type === "example") {
                return (
                  <div key={index} className="my-9 max-w-[360px] rounded-[20px] border border-white/10 bg-[#171717] px-5 py-4 sm:px-6 sm:py-5">
                    <p className="text-[1.05rem] font-[600] tracking-[-0.02em] text-white/92 sm:text-[1.1rem]">{block.lines[0]}</p>
                    <p className="mt-1.5 text-[0.92rem] font-[500] text-white/48">{block.lines[1]}</p>
                  </div>
                );
              }
              if (block.type === "strong") {
                return <p key={index} className="my-10 border-l border-[#FE7512]/45 pl-5 text-[1.05rem] leading-[1.85] tracking-[-0.01em] text-white/92 sm:my-12 sm:pl-6 sm:text-[1.1rem]"><strong className="font-[700]">{block.text}</strong></p>;
              }
              return <p key={index} className="mb-6 text-[1.05rem] font-[500] leading-[1.85] tracking-[-0.01em] text-white/72 sm:text-[1.1rem]">{block.text}</p>;
            })}
          </div>
          <div className="mt-16 border-t border-white/10 pt-10 sm:mt-20">
            <a href={getLooptHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[56px] items-center justify-center rounded-[16px] border border-[#FE7512]/75 px-7 text-[1rem] font-[500] tracking-[-0.01em] text-white transition duration-200 hover:border-[#FE7512] hover:bg-white/[0.02]">
              <span>get Loopt</span><span className="ml-2.5 text-white/60">›</span>
            </a>
          </div>
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
