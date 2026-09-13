import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Pill from "@/components/ui/Pill";
import { zones } from "@/lib/content";

export default function Cobertura() {
  return (
    <section
      id="cobertura"
      data-screen-label="Cobertura"
      className="relative overflow-hidden bg-cream px-[clamp(20px,4vw,64px)] py-[clamp(56px,8vw,110px)] text-ink"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-[8%] -top-[12%] h-[66%] w-[58%] [mask-image:radial-gradient(closest-side,rgba(0,0,0,0.9),transparent_72%)] [-webkit-mask-image:radial-gradient(closest-side,rgba(0,0,0,0.9),transparent_72%)]"
        style={{
          background:
            "repeating-conic-gradient(from 205deg at 100% 0%, rgba(255,122,0,0.08) 0deg 1.6deg, transparent 1.6deg 9deg)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px]">
        <Reveal as="span">
          <SectionEyebrow index="04" label="Cobertura" className="mb-3.5" />
        </Reveal>
        <Reveal
          as="h2"
          className="mb-4 font-heading text-[clamp(30px,4.4vw,56px)] font-extrabold uppercase leading-[1.02] tracking-[-0.035em]"
        >
          Atendemos toda
          <br />
          la Región Metropolitana
        </Reveal>
        <Reveal as="p" className="mb-10 max-w-[620px] text-[15px] leading-[1.55] text-body-on-light">
          Si tu comuna no aparece en la lista, llamá igual: cubrimos la RM completa y te confirmamos el tiempo de
          llegada en la misma llamada.
        </Reveal>

        <div className="grid max-w-[1160px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-9 gap-y-8">
          {zones.map((zone) => (
            <Reveal key={zone.name}>
              <span className="mb-3.5 block font-heading text-xs font-bold uppercase tracking-[0.09em] text-brand-amber">
                {zone.name}
              </span>
              <div className="flex flex-wrap gap-2">
                {zone.comunas.map((comuna) => (
                  <Pill key={comuna}>{comuna}</Pill>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 overflow-hidden rounded-lg border border-border-light bg-white">
          <div className="flex flex-col gap-1 p-[20px_24px]">
            <span className="font-heading text-[15px] font-bold">Mapa de cobertura</span>
            <span className="text-[13.5px] leading-[1.5] text-body-on-light-2">
              Cubrimos toda la Región Metropolitana. Si tu comuna no aparece arriba, llamá igual y te confirmamos el
              tiempo de llegada en la misma llamada.
            </span>
          </div>
          <iframe
            title="Mapa de cobertura de ServiPuerta en la Región Metropolitana"
            src="https://maps.google.com/maps?q=Regi%C3%B3n%20Metropolitana%20de%20Santiago%2C%20Chile&z=9&output=embed"
            className="block h-[clamp(280px,38vw,380px)] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
