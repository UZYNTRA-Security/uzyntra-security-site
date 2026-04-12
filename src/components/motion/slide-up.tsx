"use client";

import { useEffect, useRef } from "react";

export function SlideUp({ children }: { children: React.ReactNode }) {
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
      className="reveal-slide-up"
      style={{ opacity: 0, transform: "translateY(32px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
    >
      <style>{`
        .reveal-slide-up.is-visible { opacity: 1 !important; transform: translateY(0) !important; }
        @media (prefers-reduced-motion: reduce) { .reveal-slide-up { opacity: 1 !important; transform: none !important; } }
      `}</style>
      {children}
    </div>
  );
}
