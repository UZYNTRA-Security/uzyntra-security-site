"use client";

import { useEffect, useRef } from "react";

export function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal-fade"
      style={{ opacity: 0, transition: "opacity 0.6s ease" }}
    >
      <style>{`
        .reveal-fade.is-visible { opacity: 1 !important; }
        @media (prefers-reduced-motion: reduce) { .reveal-fade { opacity: 1 !important; } }
      `}</style>
      {children}
    </div>
  );
}
