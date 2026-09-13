import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { business } from "@/lib/content";

export default function CtaFinal() {
  return (
    <section
      data-screen-label="CTA final"
      className="relative flex min-h-[min(78vh,700px)] items-center justify-center overflow-hidden px-[clamp(20px,4vw,64px)] py-[clamp(56px,8vw,110px)] text-center"
    >
      <ParallaxImage
        src="/images/tecnico-noche.jpg"
        alt="Técnico de ServiPuerta iluminando una cerradura con una linterna de noche"
        amount={0.07}
        className="absolute inset-0"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_50%,rgba(255,122,0,0.34)_0%,rgba(14,14,16,0.78)_55%,rgba(14,14,16,0.95)_100%)]" />

      <div className="relative z-[2] flex max-w-[900px] flex-col items-center gap-5">
        <Reveal as="span" className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-body-on-dark">
          Urgencias 24 horas
        </Reveal>
        <Reveal
          as="h2"
          className="font-heading text-[clamp(28px,4.2vw,54px)] font-extrabold uppercase leading-[1.02] tracking-[-0.035em]"
        >
          Si estás fuera ahora,
          <br />
          no sigas leyendo
        </Reveal>
        <Reveal
          as="a"
          href={business.phoneHref}
          aria-label={`Llamar ahora al ${business.phone}`}
          className="animate-pulse-cta border-b-4 border-brand-amber px-1 py-2.5 font-heading text-[clamp(34px,6.5vw,82px)] font-extrabold leading-none tracking-[-0.045em] text-white transition-colors hover:text-brand-amber"
        >
          {business.phone}
        </Reveal>
        <Reveal as="p" className="text-[15px] text-white">
          Toque un botón y estamos en camino. Santiago y toda la Región Metropolitana.
        </Reveal>
        <Reveal>
          <WhatsAppButton variant="outline" message="Hola, necesito un cerrajero.">
            O escribinos por WhatsApp →
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
