"use client";

import { useEffect, useRef } from "react";
import BackgroundVideoCrossfade from "@/components/hero/BackgroundVideoCrossfade";
import DustCanvas from "@/components/effects/DustCanvas";
import Nav from "@/components/layout/Nav";
import CallButton from "@/components/ui/CallButton";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

const HERO_LINES = ["¿Quedaste fuera?", "Llegamos en menos", "de 20 minutos."];

export default function Hero() {
  const navWrapRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bulletsRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const lines = lineRefs.current.filter(Boolean);
    const ctas = ctaRef.current ? Array.from(ctaRef.current.children) : [];

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(navWrapRef.current, { y: -16, opacity: 0, duration: 0.6 })
      .from(badgeRef.current, { scale: 0.85, opacity: 0, duration: 0.4 }, "-=0.2")
      .from(lines, { y: 24, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.15")
      .from(subRef.current, { y: 16, opacity: 0, duration: 0.5 }, "-=0.3")
      .from(ctas, { y: 12, scale: 0.96, opacity: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.4)" }, "-=0.2")
      .from(bulletsRef.current, { opacity: 0, duration: 0.5 }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, [reduced]);

  return (
    <section
      data-screen-label="Hero"
      className="relative flex min-h-[min(88vh,820px)] flex-col overflow-hidden bg-ink"
    >
      <BackgroundVideoCrossfade
        sources={[]}
        fallbackPoster="/images/hero-poster.jpg"
        fallbackAlt="Cerrajero abriendo un cilindro con ganzúa y llave de tensión, macro"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,16,0.72)_0%,rgba(14,14,16,0.55)_45%,rgba(14,14,16,0.92)_100%)]" />
      <DustCanvas />

      <div ref={navWrapRef}>
        <Nav />
      </div>

      <div className="relative z-[5] flex max-w-[1100px] flex-1 flex-col justify-end px-[clamp(20px,4vw,64px)] pb-[clamp(36px,5vw,64px)] pt-[clamp(48px,9vw,110px)]">
        <span
          ref={badgeRef}
          className="mb-[22px] inline-flex w-fit items-center gap-[9px] rounded border border-white/20 bg-black/40 px-[13px] py-[7px] text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          Cerrajería a domicilio · Región Metropolitana
        </span>

        <h1 className="font-heading text-[clamp(38px,7vw,86px)] font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-balance">
          {HERO_LINES.map((line, i) => (
            <span
              key={line}
              ref={(el) => {
                lineRefs.current[i] = el;
              }}
              className="block"
            >
              {line}
            </span>
          ))}
        </h1>

        <p ref={subRef} className="mt-6 max-w-[600px] text-[clamp(15px,1.7vw,19px)] leading-[1.5] text-body-on-dark">
          Apertura sin daños a tu puerta, técnicos certificados y atención las 24 horas en todas las comunas de la
          Región Metropolitana.
        </p>

        <div ref={ctaRef} className="mt-[34px] flex flex-wrap gap-[14px]">
          <CallButton />
          <WhatsAppButton
            variant="outline"
            message="Hola, tengo una urgencia: quedé fuera y necesito un cerrajero ahora."
            className="flex-col items-start gap-0.5 px-[30px] py-[18px]"
          >
            <span className="font-heading text-[clamp(22px,3vw,32px)] font-extrabold leading-none tracking-[-0.02em]">
              WHATSAPP
            </span>
            <span className="text-sm font-medium opacity-70">Respuesta inmediata</span>
          </WhatsAppButton>
        </div>

        <div ref={bulletsRef} className="mt-[30px] flex flex-wrap gap-x-[26px] gap-y-[10px] text-[13.5px] text-white">
          <span className="flex items-center gap-[9px]">
            <span className="font-bold text-eyebrow">/</span>Sin daños a tu puerta
          </span>
          <span className="flex items-center gap-[9px]">
            <span className="font-bold text-eyebrow">/</span>Técnicos certificados
          </span>
          <span className="flex items-center gap-[9px]">
            <span className="font-bold text-eyebrow">/</span>Atención 24/7, festivos incluidos
          </span>
        </div>
      </div>
    </section>
  );
}
