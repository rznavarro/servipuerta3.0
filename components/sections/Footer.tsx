import Image from "next/image";
import { business } from "@/lib/content";

const serviceLinks = [
  { href: "#servicios", label: "Apertura de puertas" },
  { href: "#servicios", label: "Cambio de cilindros" },
  { href: "#digitales", label: "Cerraduras digitales" },
  { href: "#servicios", label: "Control de acceso" },
  { href: "#servicios", label: "Cerrajería automotriz" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-[clamp(20px,4vw,64px)] pb-10 pt-[clamp(44px,6vw,80px)]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,210px),1fr))] gap-9">
        <div className="flex flex-col gap-3.5">
          <Image
            src="/images/logo-servipuerta.png"
            alt="Cerrajería ServiPuerta"
            width={190}
            height={56}
            className="block h-auto w-[190px] max-w-full"
          />
          <p className="max-w-[280px] text-[13.5px] leading-[1.55] text-body-on-dark">
            Cerrajería a domicilio 24/7 en Santiago y toda la Región Metropolitana. Seguridad, confianza,
            tranquilidad.
          </p>
          <span className="self-start rounded border border-white/25 px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-body-on-dark">
            Urgencias 24 horas
          </span>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="mb-1 font-heading text-[13px] font-bold uppercase tracking-[0.1em] text-eyebrow">
            Servicios
          </span>
          {serviceLinks.map((link, i) => (
            <a key={i} href={link.href} className="text-sm text-body-on-dark transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="mb-1 font-heading text-[13px] font-bold uppercase tracking-[0.1em] text-eyebrow">
            Contacto
          </span>
          <a href={business.phoneHref} className="text-sm font-semibold text-white transition-colors hover:text-brand-amber">
            {business.phone}
          </a>
          <a href={`mailto:${business.email}`} className="text-sm text-body-on-dark transition-colors hover:text-white">
            {business.email}
          </a>
          <a
            href={business.whatsappBase}
            target="_blank"
            rel="noopener"
            className="text-sm text-body-on-dark transition-colors hover:text-white"
          >
            WhatsApp
          </a>
          <span className="text-sm text-body-on-dark">Santiago, Región Metropolitana</span>
          <span className="text-sm text-body-on-dark">Atención 24 horas, todos los días</span>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="mb-1 font-heading text-[13px] font-bold uppercase tracking-[0.1em] text-eyebrow">
            Redes
          </span>
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener"
            className="text-sm text-body-on-dark transition-colors hover:text-white"
          >
            Instagram
          </a>
          <a
            href={business.facebook}
            target="_blank"
            rel="noopener"
            className="text-sm text-body-on-dark transition-colors hover:text-white"
          >
            Facebook
          </a>
        </div>
      </div>

      <div className="mx-auto mt-9 flex max-w-[1240px] flex-wrap justify-between gap-3 border-t border-white/10 pt-[22px] text-[12.5px] text-eyebrow">
        <span>© 2026 Cerrajería ServiPuerta. Todos los derechos reservados.</span>
        <span>Seguridad — Confianza — Tranquilidad</span>
      </div>

      <div className="h-[76px] sp:hidden" />
    </footer>
  );
}
