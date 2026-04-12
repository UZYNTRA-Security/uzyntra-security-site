"use client";

import { useEffect, useRef, Children, cloneElement, isValidElement } from "react";

export function Stagger({ children }: { children: React.ReactNode }) {
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
    <div ref={ref} className="stagger-parent">
      <style>{`
        .stagger-parent .stagger-item {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .stagger-parent.is-visible .stagger-item { opacity: 1; transform: translateY(0); }
        .stagger-parent.is-visible .stagger-item:nth-child(1) { transition-delay: 0ms; }
        .stagger-parent.is-visible .stagger-item:nth-child(2) { transition-delay: 150ms; }
        .stagger-parent.is-visible .stagger-item:nth-child(3) { transition-delay: 300ms; }
        .stagger-parent.is-visible .stagger-item:nth-child(4) { transition-delay: 450ms; }
        @media (prefers-reduced-motion: reduce) {
          .stagger-parent .stagger-item { opacity: 1 !important; transform: none !important; transition: none !important; }
        }
      `}</style>
      {children}
    </div>
  );
}

export function StaggerItem({ children }: { children: React.ReactNode }) {
  return <div className="stagger-item">{children}</div>;
}
