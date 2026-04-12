"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ProductHighlightAnimationsProps {
  textCol: ReactNode;
  imageCol: ReactNode;
}

// IntersectionObserver-based reveal — no framer-motion dependency.
// Adds .is-visible class when element enters viewport, triggering CSS transition.
export function ProductHighlightAnimations({
  textCol,
  imageCol,
}: ProductHighlightAnimationsProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [textRef.current, imgRef.current].filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .reveal-left, .reveal-right {
          opacity: 0;
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal-left  { transform: translateX(-22px); }
        .reveal-right { transform: translateX(22px); }
        .reveal-left.is-visible,
        .reveal-right.is-visible {
          opacity: 1;
          transform: translateX(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal-left, .reveal-right { opacity: 1; transform: none; transition: none; }
        }
      `}</style>

      <div ref={textRef} className="reveal-left">
        {textCol}
      </div>
      <div ref={imgRef} className="reveal-right">
        {imageCol}
      </div>
    </>
  );
}
