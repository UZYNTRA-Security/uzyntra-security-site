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
  const [btnHover, setBtnHover] = useState(false);
  const [dark, setDark] = useState(false);
  // true on devices that support hover (desktop) — false on touch-only
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    const check = () =>
      setDark(document.documentElement.getAttribute("data-theme") === "dark");
    check();
    window.addEventListener("uzyntra-theme-change", check);

    // Detect hover capability once on mount
    setHasHover(window.matchMedia("(hover: hover)").matches);

    return () => window.removeEventListener("uzyntra-theme-change", check);
  }, []);

  // Desktop: hover flips. Mobile: click flips.
  const showBack = hasHover ? flipped : flipped;

  const backBtnStyle: React.CSSProperties = dark
    ? btnHover
      ? { background: "rgb(220,38,38)",  color: "#ffffff",          border: "2px solid rgb(220,38,38)",   transform: "translateY(-2px)" }
      : { background: "#1e293b",          color: "rgb(248,113,113)", border: "2px solid rgb(248,113,113)", transform: "translateY(0)" }
    : btnHover
      ? { background: "transparent",     color: "#ffffff",          border: "2px solid #ffffff",          transform: "translateY(-2px)" }
      : { background: "#ffffff",          color: "#0f172a",          border: "2px solid #ffffff",          transform: "translateY(0)" };

  const backBtnArrowColor = dark
    ? btnHover ? "#ffffff" : "rgb(248,113,113)"
    : btnHover ? "#ffffff" : "#0f172a";

  const pillStyle: React.CSSProperties = dark
    ? { background: "rgba(220,38,38,0.12)", border: "1px solid rgba(248,113,113,0.5)", color: "rgb(248,113,113)" }
    : { background: "#ffffff",              border: "1px solid rgb(220,38,38)",         color: "rgb(185,28,28)" };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${title} — click to ${flipped ? "show front" : "show details"}`}
      className={cn("flip-card-wrapper cursor-pointer", className)}
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped((v) => !v)}
      onMouseEnter={() => hasHover && setFlipped(true)}
      onMouseLeave={() => hasHover && setFlipped(false)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setFlipped((v) => !v)}
    >
      {/* Inner — rotates on flip */}
      <div
        style={{
          position: "relative",
          width: "100%",
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
          <div className="mt-auto pt-3">
            <span
              className="flip-pill-front"
              style={{
                ...pillStyle,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                borderRadius: "9999px",
                padding: "6px 12px",
                fontSize: "0.75rem",
                fontWeight: 600,
                transition: "all 0.2s ease",
              }}
            >
              {hrefLabel}
              <ArrowRight style={{ width: "12px", height: "12px", flexShrink: 0 }} />
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
          <div className="mt-auto pt-3">
            {href ? (
              <Link
                href={href}
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
                style={{
                  ...backBtnStyle,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "12px",
                  padding: "10px 16px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease",
                  cursor: "pointer",
                }}
              >
                View {title} Services
                <ArrowRight
                  style={{
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                    color: backBtnArrowColor,
                    transform: btnHover ? "translateX(4px)" : "translateX(0)",
                    transition: "transform 0.2s ease, color 0.2s ease",
                  }}
                />
              </Link>
            ) : (
              <span className="inline-flex rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                UZYNTRA Enterprise Capability
              </span>
            )}
          </div>
        </div>

        {/* ── HEIGHT SPACER ──
            Renders both front AND back content invisibly so the card height
            equals whichever face is taller — guarantees equal height in a grid row. */}
        <div className="invisible flex flex-col gap-3 p-6" aria-hidden="true">
          {icon && <div className="h-11 w-11 shrink-0" />}
          {/* Front content */}
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-sm leading-7">{frontDescription}</p>
          <div className="pt-3">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold">
              {hrefLabel}
            </span>
          </div>
          {/* Back content — stacked below so spacer height = max(front, back) */}
          <h3 className="text-base font-semibold">{backTitle ?? title}</h3>
          <p className="text-sm leading-7">{backDescription}</p>
          <div className="pt-3">
            <span className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold">
              View {backTitle ?? title} Services
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
