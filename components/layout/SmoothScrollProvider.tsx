"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealEls = gsap.utils.toArray<HTMLElement>(".js-reveal");

    if (prefersReduced) {
      gsap.set(revealEls, { opacity: 1, y: 0, clearProps: "transform" });
      return;
    }

    gsap.set(revealEls, { opacity: 0, y: 20 });
    const batches = ScrollTrigger.batch(revealEls, {
      start: "top 90%",
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08, overwrite: true }),
    });

    const lenis = new Lenis({ autoRaf: false });
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      batches.forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
