"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

export type VideoSource = { src: string; poster?: string };

type BackgroundVideoCrossfadeProps = {
  sources: VideoSource[];
  fallbackPoster: string;
  fallbackAlt: string;
  crossfadeDuration?: number;
  holdDuration?: number;
  className?: string;
};

export default function BackgroundVideoCrossfade({
  sources,
  fallbackPoster,
  fallbackAlt,
  crossfadeDuration = 1.2,
  holdDuration = 8,
  className,
}: BackgroundVideoCrossfadeProps) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || sources.length < 2) return;

    let index = 0;
    const advance = () => {
      const next = (index + 1) % sources.length;
      const current = videoRefs.current[index];
      const upcoming = videoRefs.current[next];
      if (upcoming) {
        upcoming.currentTime = 0;
        upcoming.play().catch(() => {});
      }
      gsap.to(current, { opacity: 0, duration: crossfadeDuration });
      gsap.to(upcoming, { opacity: 1, duration: crossfadeDuration });
      index = next;
    };

    const interval = window.setInterval(advance, holdDuration * 1000);
    return () => window.clearInterval(interval);
  }, [sources.length, crossfadeDuration, holdDuration, reduced]);

  if (sources.length === 0 || reduced) {
    return (
      <Image
        src={fallbackPoster}
        alt={fallbackAlt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className={cn("object-cover object-center", className)}
      />
    );
  }

  return (
    <div className={cn("absolute inset-0", className)}>
      {sources.map((source, i) => (
        <video
          key={source.src}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          src={source.src}
          poster={source.poster ?? fallbackPoster}
          muted
          autoPlay={i === 0}
          loop={sources.length === 1}
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ opacity: i === 0 ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
