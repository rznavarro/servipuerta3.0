import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { unlockMethods } from "@/lib/content";

export default function CerradurasDigitales() {
  return (
    <section
      id="digitales"
      data-screen-label="Cerraduras digitales"
      className="bg-slate-dark px-[clamp(20px,4vw,64px)] py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-center gap-[clamp(28px,4vw,64px)]">
        <div>
          <Reveal as="span">
            <SectionEyebrow index="03" label="Acceso digital" className="mb-3.5" />
          </Reveal>
          <Reveal
            as="h2"
            className="mb-5 font-heading text-[clamp(30px,4.4vw,52px)] font-extrabold uppercase leading-[1.02] tracking-[-0.035em]"
          >
            Dejá de depender
            <br />
            de una llave
          </Reveal>
          <Reveal as="p" className="mb-7 max-w-[520px] text-[clamp(15px,1.6vw,17px)] leading-[1.6] text-body-on-dark">
            Instalamos y configuramos cerraduras digitales Smart Lock, EZVIZ y Yale en casas, departamentos y
            oficinas. Te la entregamos andando, con los usuarios ya cargados y la app conectada.
          </Reveal>
          <Reveal className="mb-7 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-px overflow-hidden rounded-card border border-white/[0.12] bg-white/[0.12]">
            {unlockMethods.map((method) => (
              <div key={method.title} className="bg-slate-dark p-[18px]">
                <span className="mb-1 block font-heading text-base font-bold">{method.title}</span>
                <span className="text-[13px] text-body-on-dark">{method.description}</span>
              </div>
            ))}
          </Reveal>
          <Reveal>
            <WhatsAppButton variant="solid" message="Hola, quiero cotizar mi cerradura digital. Tipo de puerta:">
              Cotizar mi cerradura digital →
            </WhatsAppButton>
          </Reveal>
        </div>
        <Reveal className="overflow-hidden rounded-card border border-white/[0.12]">
          <ParallaxImage
            src="/images/app-control.jpg"
            alt="Cerradura digital con teclado y lector de huella controlada desde la app en un smartphone"
            amount={0.06}
            className="aspect-[4/3] sp:aspect-auto sp:h-full"
            sizes="(min-width: 860px) 50vw, 100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
