import { trustPhrases } from "@/lib/content";

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex items-center gap-10 whitespace-nowrap pr-10 font-heading text-sm font-semibold uppercase tracking-[0.1em] text-body-on-dark"
    >
      {trustPhrases.map((phrase, i) => (
        <span key={i} className="flex items-center gap-10">
          <span>{phrase}</span>
          <span className="text-white/30">◆</span>
        </span>
      ))}
    </div>
  );
}

export default function ConfianzaMarquee() {
  return (
    <section
      data-screen-label="Confianza"
      className="overflow-hidden border-y border-white/[0.08] bg-slate-dark py-4"
    >
      <div className="animate-marquee flex w-max">
        <Track />
        <Track hidden />
      </div>
    </section>
  );
}
