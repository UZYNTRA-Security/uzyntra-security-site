"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type FlipInfoCardProps = {
  title: string;
  frontDescription: string;
  backTitle?: string;
  backDescription: string;
  className?: string;
  icon?: React.ReactNode;
  hrefLabel?: string;
  href?: string;
};

export function FlipInfoCard({
  title,
  frontDescription,
  backTitle,
  backDescription,
  className,
  icon,
  hrefLabel = "Explore capability",
  href,
}: FlipInfoCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [dark, setDark] = useState(false);
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    const check = () =>
      setDark(document.documentElement.getAttribute("data-theme") === "dark");
    check();
    window.addEventListener("uzyntra-theme-change", check);
    setHasHover(window.matchMedia("(hover: hover)").matches);
    return () => window.removeEventListener("uzyntra-theme-change", check);
  }, []);

  const showBack = flipped;

  const pillStyle: React.CSSProperties = dark
    ? { background: "rgba(220,38,38,0.12)", border: "1px solid rgba(248,113,113,0.5)", color: "rgb(248,113,113)" }
    : { background: "#ffffff",              border: "1px solid rgb(220,38,38)",         color: "rgb(185,28,28)" };

  const inner = (
    <div
      className={cn("flip-card-wrapper h-full cursor-pointer", className)}
      style={{ perspective: "1200px" }}
      onClick={() => !href && setFlipped((v) => !v)}
      onMouseEnter={() => hasHover && setFlipped(true)}
      onMouseLeave={() => hasHover && setFlipped(false)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((v) => !v);
        }
      }}
      role={href ? undefined : "button"}
      tabIndex={href ? undefined : 0}
      aria-pressed={href ? undefined : flipped}
    >
      {/* Rotating inner */}
      <div
        className="relative h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.52s cubic-bezier(0.4, 0.2, 0.2, 1)",
          transform: showBack ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT ── */}
        <div
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          className="flip-card-front absolute inset-0 flex flex-col gap-3 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
        >
          {icon && (
            <div className="flip-icon-front inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-700">
              {icon}
            </div>
          )}
          <h3 className="flip-title-front text-base font-semibold text-slate-950">
            {title}
          </h3>
          <p className="flip-body-front text-sm leading-7 text-slate-600">
            {frontDescription}
          </p>
          {/* Inline hint — no button, no overflow risk */}
          <div className="mt-3">
            <span
              className="flip-pill-front inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
              style={pillStyle}
              aria-hidden="true"
            >
              {hrefLabel}
              <ArrowRight className="h-3 w-3 shrink-0" />
            </span>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="absolute inset-0 flex flex-col gap-3 rounded-[24px] border border-red-400 bg-gradient-to-br from-red-700 via-red-600 to-red-500 p-6 text-white shadow-[0_12px_36px_rgba(220,38,38,0.30)]"
        >
          {icon && (
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white">
              {icon}
            </div>
          )}
          <h3 className="text-base font-semibold text-white">
            {backTitle ?? title}
          </h3>
          <p className="text-sm leading-7 text-white/90">{backDescription}</p>
          {href && (
            <div className="mt-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/90">
                View service
                <ArrowRight className="h-3 w-3 shrink-0" />
              </span>
            </div>
          )}
          {!href && (
            <div className="mt-3">
              <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                UZYNTRA Enterprise Capability
              </span>
            </div>
          )}
        </div>

        {/* ── HEIGHT SPACER — drives card height from the taller face ── */}
        <div className="invisible flex flex-col gap-3 p-6" aria-hidden="true">
          {icon && <div className="h-11 w-11 shrink-0" />}
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-sm leading-7">{frontDescription}</p>
          <div className="mt-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold">{hrefLabel}</span>
          </div>
          <h3 className="text-base font-semibold">{backTitle ?? title}</h3>
          <p className="text-sm leading-7">{backDescription}</p>
          <div className="mt-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold">View service</span>
          </div>
        </div>
      </div>
    </div>
  );

  // If href provided, wrap the whole card in a Link — entire card is clickable
  if (href) {
    return (
      <Link href={href} className="block h-full">
        {inner}
      </Link>
    );
  }

  return inner;
}
