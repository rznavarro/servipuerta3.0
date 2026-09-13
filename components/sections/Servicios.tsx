import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { services, supportServices } from "@/lib/content";

export default function Servicios() {
  return (
    <section
      id="servicios"
      data-screen-label="Servicios"
      className="bg-cream px-[clamp(20px,4vw,64px)] py-[clamp(56px,8vw,110px)] text-ink"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-[clamp(32px,4vw,56px)] flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-[640px]">
            <Reveal as="span">
              <SectionEyebrow index="01" label="Servicios" className="mb-3.5" />
            </Reveal>
            <Reveal as="h2" className="font-heading text-[clamp(30px,4.4vw,56px)] font-extrabold uppercase leading-[1.02] tracking-[-0.035em]">
              Lo que resolvemos
              <br />
              el mismo día
            </Reveal>
          </div>
          <Reveal as="p" className="max-w-[340px] text-[15px] leading-[1.55] text-body-on-light">
            Apertura, cambio de cilindros, reparación integral, control de acceso y cerrajería automotriz. Cada
            trabajo con presupuesto confirmado antes de empezar.
          </Reveal>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-[clamp(16px,2vw,26px)]">
          {services.map((service) => (
            <Reveal
              key={service.slug}
              as="article"
              className="group flex flex-col overflow-hidden rounded-card border border-border-light-3 bg-white transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(14,14,16,0.14)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                <Image src={service.image} alt={service.title} fill sizes="(min-width: 860px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-[26px_24px_24px]">
                <h3 className="font-heading text-[23px] font-bold tracking-[-0.02em]">{service.title}</h3>
                <p className="flex-1 text-[14.5px] leading-[1.55] text-body-on-light">{service.description}</p>
                <WhatsAppButton message={service.whatsappMessage} className="mt-1">
                  {service.ctaLabel} →
                </WhatsAppButton>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          className="mt-[clamp(16px,2vw,26px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-px overflow-hidden rounded-card border border-border-light-3 bg-border-light-3"
        >
          {supportServices.map((item) => (
            <div key={item.title} className="bg-cream p-[22px_24px]">
              <h3 className="mb-1.5 font-heading text-[17px] font-bold tracking-[-0.01em]">{item.title}</h3>
              <p className="text-sm leading-[1.5] text-body-on-light">{item.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
