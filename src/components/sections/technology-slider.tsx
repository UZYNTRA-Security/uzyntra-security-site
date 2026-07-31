"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { TechnologyItem } from "@/data/technologies";

type TechnologySliderProps = {
  eyebrow?: string;
  title?: string;
  items: TechnologyItem[];
  variant?: "default" | "compact";
};

function LogoBadge({ item }: { item: TechnologyItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="tech-badge group inline-flex shrink-0 items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white px-4 py-2.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-[0_4px_14px_rgba(220,38,38,0.10)]">
      {!imgError ? (
        <div className="tech-logo-wrap relative h-5 w-5 shrink-0">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="20px"
            className="object-contain"
            onError={() => setImgError(true)}
            loading="lazy"
            unoptimized
          />
        </div>
      ) : (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-red-50 text-[9px] font-bold uppercase text-red-700">
          {item.name.slice(0, 2)}
        </span>
      )}
      <span className="whitespace-nowrap text-sm font-medium text-slate-700 transition-colors duration-200 group-hover:text-slate-950">
        {item.name}
      </span>
    </div>
  );
}

const SCROLL_SPEED = 0.6;
const ARROW_JUMP = 320;
const RESUME_DELAY = 2000;

export function TechnologySlider({
  eyebrow = "TECHNOLOGY STACK",
  title = "Technologies We Work With",
  items,
  variant = "default",
}: TechnologySliderProps) {
  const track = [...items, ...items, ...items];
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const manualRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const scrollPos = useRef(0);
  const tickRef = useRef<() => void>(() => {});

  useEffect(() => {
    tickRef.current = () => {
      if (!items.length) return;

      const viewport = viewportRef.current;
      const trackElement = trackRef.current;
      if (!viewport || !trackElement) {
        rafRef.current = requestAnimationFrame(tickRef.current);
        return;
      }

      if (!pausedRef.current && !manualRef.current) {
        scrollPos.current += SCROLL_SPEED;
        const oneThird = trackElement.scrollWidth / 3;

        if (scrollPos.current >= oneThird * 2) {
          scrollPos.current -= oneThird;
        }

        viewport.scrollLeft = scrollPos.current;
      }

      rafRef.current = requestAnimationFrame(tickRef.current);
    };
  }, [items.length]);

  useEffect(() => {
    if (!items.length) return;

    const viewport = viewportRef.current;
    const trackElement = trackRef.current;
    if (viewport && trackElement) {
      scrollPos.current = trackElement.scrollWidth / 3;
      viewport.scrollLeft = scrollPos.current;
    }

    rafRef.current = requestAnimationFrame(tickRef.current);
    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(resumeTimer.current);
    };
  }, [items.length]);

  const scroll = (direction: "left" | "right") => {
    const viewport = viewportRef.current;
    const trackElement = trackRef.current;
    if (!viewport || !trackElement) return;

    manualRef.current = true;
    clearTimeout(resumeTimer.current);

    const oneThird = trackElement.scrollWidth / 3;
    scrollPos.current += direction === "left" ? -ARROW_JUMP : ARROW_JUMP;

    if (scrollPos.current < 0) scrollPos.current += oneThird;
    if (scrollPos.current >= oneThird * 2) scrollPos.current -= oneThird;

    viewport.scrollLeft = scrollPos.current;
    resumeTimer.current = setTimeout(() => {
      manualRef.current = false;
    }, RESUME_DELAY);
  };

  if (!items.length) return null;

  return (
    <section className={variant === "compact" ? "section-tight tech-slider-section" : "section-shell tech-slider-section"}>
      <div className="container-shell mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">{eyebrow}</p>
        <h2 className="mt-3 text-xl font-semibold text-slate-950 sm:text-2xl">{title}</h2>
      </div>

      <div
        className="tech-slider-wrapper group/slider"
        style={{ position: "relative", width: "100%" }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        <button type="button" aria-label="Scroll left" onClick={() => scroll("left")} className="tech-arrow tech-arrow-left" style={{ cursor: "pointer" }}>
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button type="button" aria-label="Scroll right" onClick={() => scroll("right")} className="tech-arrow tech-arrow-right" style={{ cursor: "pointer" }}>
          <ChevronRight className="h-4 w-4" />
        </button>

        <div aria-hidden="true" className="tech-fade-left" style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "7rem", zIndex: 10, pointerEvents: "none", background: "linear-gradient(to right, white, transparent)" }} />
        <div aria-hidden="true" className="tech-fade-right" style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "7rem", zIndex: 10, pointerEvents: "none", background: "linear-gradient(to left, white, transparent)" }} />

        <div ref={viewportRef} role="region" aria-label={title} style={{ overflow: "hidden", width: "100%" }}>
          <div ref={trackRef} style={{ display: "flex", width: "max-content", gap: "0.75rem", padding: "0.5rem 0.75rem" }}>
            {track.map((item, index) => (
              <LogoBadge key={`${item.slug}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
