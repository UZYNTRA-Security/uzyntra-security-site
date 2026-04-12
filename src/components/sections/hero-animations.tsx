"use client";

import { type ReactNode } from "react";

interface HeroAnimationsProps {
  eyebrow: ReactNode;
  heading: ReactNode;
  paragraph: ReactNode;
  cta: ReactNode;
  cards: ReactNode;
}

// CSS-only animations — zero framer-motion on the critical path.
// Each element fades+slides in via a staggered animation-delay.
// This eliminates the framer-motion hydration cost from LCP timing.
export function HeroAnimations({
  eyebrow,
  heading,
  paragraph,
  cta,
  cards,
}: HeroAnimationsProps) {
  return (
    <>
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-up {
          opacity: 0;
          animation: heroFadeUp 0.5s ease forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-fade-up { animation: none; opacity: 1; }
        }
      `}</style>

      <div className="hero-fade-up" style={{ animationDelay: "0ms" }}>
        {eyebrow}
      </div>

      <div
        className="hero-fade-up mt-4 flex w-full justify-center"
        style={{ animationDelay: "60ms" }}
      >
        {heading}
      </div>

      <div
        className="hero-fade-up mt-3 flex w-full justify-center"
        style={{ animationDelay: "120ms" }}
      >
        {paragraph}
      </div>

      <div
        className="hero-fade-up mt-5 flex w-full justify-center"
        style={{ animationDelay: "180ms" }}
      >
        {cta}
      </div>

      <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
        {cards}
      </div>
    </>
  );
}
