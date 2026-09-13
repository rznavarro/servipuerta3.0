"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { steps } from "@/lib/content";

export default function ComoFunciona() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current) return;
    const stepEls = stepRefs.current.filter(Boolean) as HTMLDivElement[];
    const numberEls = numberRefs.current.filter(Boolean) as HTMLSpanElement[];
    if (stepEls.length < 2) return;

    gsap.set(stepEls.slice(1), { opacity: 0.35 });
    gsap.set(numberEls.slice(1), { color: "#ffffff" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${stepEls.length * 380}`,
        pin: true,
        scrub: 0.6,
      },
    });

    stepEls.forEach((step, i) => {
      if (i === 0) return;
      tl.to(stepEls[i - 1], { opacity: 0.35, duration: 0.3 }, i - 1)
        .to(numberEls[i - 1], { color: "#ffffff", duration: 0.3 }, i - 1)
        .to(step, { opacity: 1, duration: 0.3 }, i - 1)
        .to(numberEls[i], { color: "#ff7a00", duration: 0.3 }, i - 1);
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [reduced]);

  return (
    <section
      id="como-funciona"
      ref={sectionRef}
      data-screen-label="Cómo funciona"
      className="border-b border-white/[0.08] bg-ink px-[clamp(20px,4vw,64px)] py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[1240px]">
        <Reveal as="span">
          <SectionEyebrow index="02" label="Cómo funciona" className="mb-3.5" />
        </Reveal>
        <Reveal
          as="h2"
          className="mb-[clamp(32px,4vw,56px)] max-w-[760px] font-heading text-[clamp(30px,4.4vw,56px)] font-extrabold uppercase leading-[1.02] tracking-[-0.035em]"
        >
          Sabés el precio
          <br />
          antes de que toquemos la puerta
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(28px,4vw,64px)]">
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className={`flex gap-5 border-t border-white/[0.12] py-6 ${i === steps.length - 1 ? "border-b" : ""}`}
              >
                <span
                  ref={(el) => {
                    numberRefs.current[i] = el;
                  }}
                  className="min-w-[48px] font-heading text-[30px] font-extrabold leading-none tracking-[-0.03em] text-white"
                >
                  {step.number}
                </span>
                <div>
                  <h3 className="mb-[7px] font-heading text-xl font-bold tracking-[-0.015em]">{step.title}</h3>
                  <p className="text-[14.5px] leading-[1.55] text-body-on-dark">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Reveal className="relative aspect-[4/3] min-h-[260px] overflow-hidden rounded-card border border-white/[0.12] bg-ink">
            <Image
              src="/images/mecanismo-corte.jpg"
              alt="Corte técnico de un cilindro de cerradura mostrando los pines y resortes internos"
              fill
              sizes="(min-width: 860px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="absolute bottom-3.5 left-3.5 z-[2] rounded bg-black/55 px-2.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
              Cilindro de pines — corte técnico
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
