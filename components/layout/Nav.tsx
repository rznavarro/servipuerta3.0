import Image from "next/image";
import { business, navLinks } from "@/lib/content";

export default function Nav() {
  return (
    <nav className="relative z-10 mx-4 mt-[18px] flex items-center justify-between gap-4 rounded-xl border border-white/20 bg-black/40 px-3.5 py-2.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-md sp:mx-12">
      <a href="#top" className="flex flex-shrink-0 items-center">
        <Image
          src="/images/logo-servipuerta.png"
          alt="Cerrajería ServiPuerta — seguridad, confianza, tranquilidad"
          width={220}
          height={64}
          className="block h-16 w-auto"
          priority
        />
      </a>
      <div className="hidden items-center gap-6 text-[13.5px] text-body-on-dark sp:flex">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="text-body-on-dark transition-colors hover:text-white">
            {link.label}
          </a>
        ))}
      </div>
      <a
        href={business.phoneHref}
        aria-label={`Llamar a ServiPuerta al ${business.phone}`}
        className="flex-shrink-0 rounded-lg bg-white px-4 py-[9px] font-heading text-[13.5px] font-bold text-ink transition-colors hover:bg-[#f3f4f6]"
      >
        Llamar
      </a>
    </nav>
  );
}
