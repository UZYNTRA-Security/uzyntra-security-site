"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

export type ProductScreenshot = {
  title: string;
  file: string;
  kind: string;
  alt: string;
};

interface ProductScreenshotGalleryProps {
  screenshots: readonly ProductScreenshot[];
}

export function ProductScreenshotGallery({ screenshots }: ProductScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeShot = activeIndex === null ? null : screenshots[activeIndex];
  const featuredShot = screenshots[0];
  const remainingShots = screenshots.slice(1);

  const goPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === 0 ? screenshots.length - 1 : current - 1;
    });
  }, [screenshots.length]);

  const goNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === screenshots.length - 1 ? 0 : current + 1;
    });
  }, [screenshots.length]);

  const counterText = useMemo(() => {
    if (activeIndex === null) return "";
    return `${activeIndex + 1} / ${screenshots.length}`;
  }, [activeIndex, screenshots.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") goPrevious();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, goNext, goPrevious]);

  return (
    <>
      <div className="mt-10 overflow-hidden rounded-[34px] border border-slate-200 bg-[linear-gradient(135deg,#070708_0%,#111114_44%,#24090b_100%)] p-3 shadow-[0_28px_90px_rgba(15,23,42,0.16)]">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
          <button
            type="button"
            onClick={() => setActiveIndex(0)}
            className="group relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/10 bg-[#050506] text-left outline-none transition-all duration-300 hover:border-red-400/45 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070708] sm:min-h-[430px]"
            aria-label={`Open ${featuredShot.title} screenshot`}
          >
            <Image
              src={`/images/products/${featuredShot.file}`}
              alt={featuredShot.alt}
              fill
              sizes="(min-width: 1024px) 63vw, calc(100vw - 2rem)"
              className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.025] sm:p-6"
              priority
            />
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,6,0.04)_0%,rgba(5,5,6,0.24)_48%,rgba(5,5,6,0.92)_100%)]" aria-hidden="true" />
            <span className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" aria-hidden="true" />
            <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/72 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_16px_rgba(239,31,36,0.9)]" />
              Featured view
            </span>
            <span className="absolute bottom-0 left-0 right-0 flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
              <span>
                <span className="rounded-full border border-red-400/35 bg-red-500/12 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-red-200">
                  {featuredShot.kind}
                </span>
                <span className="mt-3 block text-2xl font-black text-white sm:text-3xl">{featuredShot.title}</span>
                <span className="mt-2 block max-w-2xl text-sm leading-6 text-white/68">
                  Command-center overview with live firewall metrics, recent activity, reputation, and blocked-event context.
                </span>
              </span>
              <span className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-red-600 px-5 text-sm font-black text-white shadow-[0_16px_42px_rgba(239,31,36,0.36)] transition-colors group-hover:bg-white group-hover:text-red-600">
                <Eye className="h-4 w-4" aria-hidden="true" />
                Open preview
              </span>
            </span>
          </button>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["Screens", screenshots.length.toString()],
              ["Coverage", "Engine + UI"],
              ["Preview", "Fullscreen"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[24px] border border-white/10 bg-white/[0.06] p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/42">{label}</p>
                <p className="mt-2 text-xl font-black text-white">{value}</p>
                <p className="mt-3 text-sm leading-6 text-white/58">
                  {label === "Screens"
                    ? "Consistent frames keep every capture easy to scan."
                    : label === "Coverage"
                      ? "Rust API responses and operator console views together."
                      : "Click any image, then use arrows or keyboard navigation."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {remainingShots.map((shot, remainingIndex) => {
          const index = remainingIndex + 1;
          return (
          <button
            key={shot.file}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative h-full overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,rgba(239,31,36,0.50),rgba(148,163,184,0.26),rgba(15,23,42,0.42))] p-[1px] text-left shadow-[0_18px_48px_rgba(15,23,42,0.10)] outline-none transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(220,38,38,0.18)] focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            aria-label={`Open ${shot.title} screenshot`}
          >
            <span className="relative block h-full overflow-hidden rounded-[25px] bg-[#09090b] p-3">
              <span className="mb-3 flex items-center justify-between gap-3 px-1">
                <span className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white/62">
                  {shot.kind}
                </span>
              </span>
              <span className="relative block aspect-[16/10] overflow-hidden rounded-[20px] border border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(239,31,36,0.13),transparent_28%),#050506]">
                <Image
                  src={`/images/products/${shot.file}`}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 1280px) 31vw, (min-width: 768px) 46vw, calc(100vw - 2rem)"
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.025]"
                />
                <span className="absolute inset-x-3 bottom-3 translate-y-3 rounded-full border border-white/10 bg-black/70 px-3 py-2 text-center text-xs font-black text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Open screenshot
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-white/10" aria-hidden="true" />
              </span>
              <span className="flex min-h-[72px] items-center justify-between gap-4 px-2 py-4">
                <span className="text-lg font-black text-white">{shot.title}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-400/35 bg-red-500/12 text-red-300 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                  <Eye className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </span>
          </button>
          );
        })}
      </div>

      {activeShot ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 text-white backdrop-blur-xl sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeShot.title} screenshot preview`}
          onClick={() => setActiveIndex(null)}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_12%,rgba(239,31,36,0.22),transparent_30%),radial-gradient(circle_at_80%_82%,rgba(239,31,36,0.14),transparent_34%)]" aria-hidden="true" />

          <div className="relative z-10 flex h-full w-full max-w-[1480px] flex-col rounded-[28px] border border-white/12 bg-[#080809] shadow-[0_30px_120px_rgba(0,0,0,0.7)]" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-red-300">{activeShot.kind}</p>
                <h3 className="mt-1 truncate text-base font-black text-white sm:text-xl">{activeShot.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-bold text-white/70 sm:inline-flex">
                  {counterText}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white transition-colors hover:bg-red-600"
                  aria-label="Close screenshot preview"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="relative min-h-0 flex-1 p-3 sm:p-5">
              <div className="relative h-full min-h-[420px] overflow-hidden rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(239,31,36,0.10),transparent_32%),#050506] sm:min-h-[560px]">
                <Image
                  src={`/images/products/${activeShot.file}`}
                  alt={activeShot.alt}
                  fill
                  sizes="100vw"
                  priority
                  className="object-contain p-3 sm:p-5"
                />
              </div>

              <button
                type="button"
                onClick={goPrevious}
                className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-black/55 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-red-600 sm:left-8 sm:h-12 sm:w-12"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-black/55 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-red-600 sm:right-8 sm:h-12 sm:w-12"
                aria-label="Next screenshot"
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
