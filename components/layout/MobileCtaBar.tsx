import { business, whatsappUrl } from "@/lib/content";

export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] grid grid-cols-2 gap-px border-t border-white/15 bg-white/15 sp:hidden">
      <a
        href={business.phoneHref}
        aria-label="Llamar ahora"
        className="flex min-h-[60px] items-center justify-center gap-2 bg-brand-amber font-heading text-[17px] font-extrabold uppercase tracking-[0.02em] text-ink"
      >
        Llamar
      </a>
      <a
        href={whatsappUrl("Hola, necesito un cerrajero.")}
        target="_blank"
        rel="noopener"
        aria-label="Escribir por WhatsApp"
        className="flex min-h-[60px] items-center justify-center gap-2 bg-ink font-heading text-[17px] font-extrabold uppercase tracking-[0.02em] text-white"
      >
        WhatsApp
      </a>
    </div>
  );
}
