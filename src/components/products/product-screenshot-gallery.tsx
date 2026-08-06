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
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {screenshots.map((shot, index) => (
          <button
            key={shot.file}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative h-full overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,rgba(239,31,36,0.48),rgba(15,23,42,0.18),rgba(15,23,42,0.42))] p-[1px] text-left shadow-[0_22px_64px_rgba(15,23,42,0.11)] outline-none transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_82px_rgba(220,38,38,0.18)] focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            aria-label={`Open ${shot.title} screenshot`}
          >
            <span className="relative block h-full overflow-hidden rounded-[27px] bg-[#080809] p-3">
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
              <span className="relative block aspect-[16/10] overflow-hidden rounded-[20px] border border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(239,31,36,0.12),transparent_28%),#050506]">
                <Image
                  src={`/images/products/${shot.file}`}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 1280px) 31vw, (min-width: 768px) 46vw, calc(100vw - 2rem)"
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.025]"
                />
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
        ))}
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