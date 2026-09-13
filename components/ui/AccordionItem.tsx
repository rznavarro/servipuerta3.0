"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import type { Faq } from "@/lib/content";

export default function AccordionItem({ question, answer }: Faq) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    const panel = panelRef.current;
    if (!panel) return;
    gsap.to(panel, {
      height: next ? "auto" : 0,
      duration: next ? 0.35 : 0.3,
      ease: "power2.inOut",
      onComplete: () => ScrollTrigger.refresh(),
    });
  };

  return (
    <div
      className={cn(
        "overflow-hidden rounded-faq border transition-colors duration-300",
        open ? "border-[#ffd9ae] bg-[#fff6ec]" : "border-border-light-2 bg-white",
      )}
    >
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className={cn(
          "flex w-full items-center justify-between gap-4 px-[22px] py-[19px] text-left font-heading text-[16.5px] font-bold tracking-[-0.01em] transition-colors duration-200",
          open ? "text-ink" : "text-body-on-light",
        )}
      >
        <span>{question}</span>
        <span
          className={cn(
            "flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full text-base leading-none transition-[transform,background-color,color] duration-300",
            open ? "rotate-45 bg-brand-amber text-white" : "bg-cream text-body-on-light",
          )}
        >
          +
        </span>
      </button>
      <div ref={panelRef} className="h-0 overflow-hidden">
        <p className="mx-[22px] mb-5 max-w-[680px] text-[15px] leading-[1.6] text-body-on-light-2">{answer}</p>
      </div>
    </div>
  );
}
