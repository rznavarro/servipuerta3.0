"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type Particle = { x: number; y: number; r: number; vx: number; vy: number; a: number };

export default function DustCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.innerWidth < 860;
    if (reduced || narrow) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pts: Particle[] = [];

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const n = Math.min(150, Math.round((w * h) / 9000));
    for (let i = 0; i < n; i++) {
      pts.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.1,
        vy: -Math.random() * 0.13 - 0.02,
        a: Math.random() * 0.7 + 0.25,
      });
    }

    let mx = 0;
    let my = 0;
    let tx = 0;
    let ty = 0;
    let alive = true;

    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 16;
      ty = (e.clientY / window.innerHeight - 0.5) * 16;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);

    const frame = () => {
      if (!alive) return;
      mx += (tx - mx) * 0.05;
      my += (ty - my) * 0.05;
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -4) {
          p.y = h + 4;
          p.x = Math.random() * w;
        }
        if (p.x < -4) p.x = w + 4;
        if (p.x > w + 4) p.x = -4;
        ctx.beginPath();
        ctx.fillStyle = `rgba(226,226,232,${p.a})`;
        ctx.arc(p.x + mx * (p.r / 1.6), p.y + my * (p.r / 1.6), p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);

    return () => {
      alive = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full opacity-[0.22]", className)}
    />
  );
}
