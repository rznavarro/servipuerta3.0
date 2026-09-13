import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import AccordionItem from "@/components/ui/AccordionItem";
import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section
      id="faq"
      data-screen-label="Preguntas frecuentes"
      className="relative overflow-hidden bg-cream px-[clamp(20px,4vw,64px)] pb-[clamp(56px,8vw,110px)] text-ink"
    >
      <div className="relative mx-auto max-w-[1240px] border-t border-border-light pt-[clamp(48px,6vw,80px)]">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-[30px] right-[4%] h-80 w-[480px] rounded-full"
          style={{
            background: "radial-gradient(closest-side, rgba(255,122,0,0.14), rgba(255,122,0,0) 72%)",
          }}
        />

        <div className="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-[clamp(32px,5vw,64px)]">
          <Reveal className="relative aspect-[4/5] max-h-[640px] overflow-hidden rounded-faq border border-black/10 sp:sticky sp:top-24">
            <Image
              src="/images/puerta-oficina.jpg"
              alt="Puerta de oficina con cerradura de seguridad instalada por ServiPuerta"
              fill
              sizes="(min-width: 860px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <div>
            <div className="mb-[clamp(28px,3.5vw,40px)]">
              <Reveal as="span">
                <SectionEyebrow index="05" label="Preguntas frecuentes" className="mb-3.5" />
              </Reveal>
              <Reveal
                as="h2"
                className="font-heading text-[clamp(28px,4vw,48px)] font-extrabold uppercase leading-[1.05] tracking-[-0.035em]"
              >
                Lo que preguntan
                <br />
                antes de llamar
              </Reveal>
            </div>

            <div className="flex flex-col gap-2.5">
              {faqs.map((faq) => (
                <Reveal key={faq.question}>
                  <AccordionItem question={faq.question} answer={faq.answer} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
