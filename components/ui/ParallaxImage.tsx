"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

type ParallaxImageProps = {
  src: string;
  alt: string;
  amount?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function ParallaxImage({ src, alt, amount = 0.06, className, priority, sizes }: ParallaxImageProps) {
  const layerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const bleed = Math.ceil(amount * 100) + 4;

  useEffect(() => {
    if (reduced || !layerRef.current) return;
    const el = layerRef.current;
    const tween = gsap.fromTo(
      el,
      { yPercent: -amount * 100 },
      {
        yPercent: amount * 100,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [amount, reduced]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div ref={layerRef} className="absolute" style={{ inset: `-${bleed}%` }}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
    </div>
  );
}
