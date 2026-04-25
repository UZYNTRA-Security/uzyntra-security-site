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
  backBullets?: string[];
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
  backBullets,
  className,
  icon,
  hrefLabel = "See details",
  href,
}: FlipInfoCardProps) {
  const [flipped, setFlipped]   = useState(false);
  const [hovered, setHovered]   = useState(false);
  const [dark, setDark]         = useState(false);
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    const check = () =>
      setDark(document.documentElement.getAttribute("data-theme") === "dark");
    check();
    window.addEventListener("uzyntra-theme-change", check);
    setHasHover(window.matchMedia("(hover: hover)").matches);
    return () => window.removeEventListener("uzyntra-theme-change", check);
  }, []);

  const showBack = hasHover ? hovered : flipped;

  function handleClick(e: React.MouseEvent) {
    if (hasHover) return;
    if (!href) { setFlipped((v) => !v); return; }
    if (!flipped) { e.preventDefault(); setFlipped(true); }
  }

  // Front pill — white bg + red border + red text (clear contrast)
  const pillStyle: React.CSSProperties = dark
    ? { background: "rgba(220,38,38,0.12)", border: "1px solid rgba(248,113,113,0.4)", color: "rgb(248,113,113)" }
    : { background: "#fff5f5",              border: "1px solid rgba(220,38,38,0.35)",   color: "rgb(185,28,28)" };

  // Back face — premium dark surface instead of aggressive red
  const backFaceStyle: React.CSSProperties = dark
    ? { background: "#0f172a", borderColor: "rgba(220,38,38,0.30)" }
    : { background: "#0f172a", borderColor: "rgba(220,38,38,0.40)" };

  const inner = (
    <div
      className={cn("flip-card-wrapper h-full cursor-pointer", className)}
      style={{ perspective: "1200px" }}
      onClick={handleClick}
      onMouseEnter={() => { if (hasHover) setHovered(true); }}
      onMouseLeave={() => { if (hasHover) setHovered(false); }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFlipped((v) => !v); }
      }}
      role={href ? undefined : "button"}
      tabIndex={href ? undefined : 0}
      aria-pressed={href ? undefined : flipped}
    >
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
          className="flip-card-front absolute inset-0 flex flex-col gap-3 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300"
          // Fix 1 & 2: subtle glow on hover, NOT full red takeover
          onMouseEnter={(e) => {
            if (!hasHover) return;
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 0 1.5px rgba(220,38,38,0.35), 0 8px_32px rgba(220,38,38,0.12)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "";
          }}
        >
          {icon && (
            <div className="flip-icon-front inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-700 transition-all duration-200">
              {icon}
            </div>
          )}
          <h3 className="flip-title-front text-base font-semibold text-slate-950">
            {title}
          </h3>
          <p className="flip-body-front text-sm leading-7 text-slate-600">
            {frontDescription}
          </p>
          <div className="mt-auto pt-3">
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

        {/* ── BACK — premium dark surface, NOT aggressive red ── */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            ...backFaceStyle,
          }}
          className="absolute inset-0 flex flex-col gap-3 rounded-[22px] border p-6 shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
        >
          {icon && (
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-600/20 text-red-400">
              {icon}
            </div>
          )}
          <h3 className="text-base font-semibold text-white">
            {backTitle ?? title}
          </h3>

          {/* Fix 4: bullet points instead of paragraph */}
          {backBullets && backBullets.length > 0 ? (
            <ul className="space-y-1.5">
              {backBullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-xs leading-5 text-slate-300">
                  <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                  {b}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-7 text-slate-300">{backDescription}</p>
          )}

          {/* Fix 5: outcome-driven CTA */}
          {href && (
            <div className="mt-auto pt-3">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-red-500/40 bg-red-600/15 px-3 py-1.5 text-xs font-semibold text-red-400 transition-all duration-200 hover:bg-red-600 hover:text-white hover:border-red-600">
                {!hasHover && flipped ? "Tap again to visit →" : hrefLabel}
                {(hasHover || !flipped) && <ArrowRight className="h-3 w-3 shrink-0" />}
              </span>
            </div>
          )}
          {!href && (
            <div className="mt-auto pt-3">
              <span className="inline-flex rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold text-slate-400">
                UZYNTRA Enterprise Capability
              </span>
            </div>
          )}
        </div>

        {/* ── HEIGHT SPACER ── */}
        <div className="invisible flex flex-col gap-3 p-6" aria-hidden="true">
          {icon && <div className="h-11 w-11 shrink-0" />}
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-sm leading-7">{frontDescription}</p>
          <div className="mt-auto pt-3">
            <span className="inline-flex items-center gap-1.5 text-xs">{hrefLabel}</span>
          </div>
          <h3 className="text-base font-semibold">{backTitle ?? title}</h3>
          {backBullets
            ? backBullets.map((b) => <p key={b} className="text-xs leading-5">{b}</p>)
            : <p className="text-sm leading-7">{backDescription}</p>
          }
          <div className="mt-auto pt-3">
            <span className="inline-flex items-center gap-1.5 text-xs">{hrefLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{inner}</Link>;
  }
  return inner;
}
