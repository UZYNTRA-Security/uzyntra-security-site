"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  const [flipped, setFlipped]   = useState(false);
  const [hovered, setHovered]   = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const [dark, setDark]         = useState(false);

  // Sync dark mode state
  useEffect(() => {
    const check = () =>
      setDark(document.documentElement.getAttribute("data-theme") === "dark");
    check();
    window.addEventListener("uzyntra-theme-change", check);
    return () => window.removeEventListener("uzyntra-theme-change", check);
  }, []);

  const showBack = flipped || hovered;

  // ── Back-face button styles (stroke ↔ fill swap) ──────────────────────────
  // Light: default = white fill + dark text | hover = transparent + white text
  // Dark:  default = dark surface + red-400 text + red border | hover = red fill + white text
  const backBtnStyle: React.CSSProperties = dark
    ? btnHover
      ? { background: "rgb(220,38,38)",   color: "#ffffff",              border: "2px solid rgb(220,38,38)",  transform: "translateY(-2px)" }
      : { background: "#1e293b",           color: "rgb(248,113,113)",     border: "2px solid rgb(248,113,113)", transform: "translateY(0)" }
    : btnHover
      ? { background: "transparent",      color: "#ffffff",              border: "2px solid #ffffff",          transform: "translateY(-2px)" }
      : { background: "#ffffff",           color: "#0f172a",              border: "2px solid #ffffff",          transform: "translateY(0)" };

  const backBtnArrowColor = dark
    ? btnHover ? "#ffffff" : "rgb(248,113,113)"
    : btnHover ? "#ffffff" : "#0f172a";

  // ── Front-face pill styles ────────────────────────────────────────────────
  // Light: white bg + red border + red text (clear contrast)
  // Dark:  dark surface + red-400 border + red-400 text
  const pillStyle: React.CSSProperties = dark
    ? { background: "rgba(220,38,38,0.12)", border: "1px solid rgba(248,113,113,0.5)", color: "rgb(248,113,113)" }
    : { background: "#ffffff",              border: "1px solid rgb(220,38,38)",         color: "rgb(185,28,28)" };

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={cn("cursor-pointer", className)}
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped((v) => !v)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.52s cubic-bezier(0.4, 0.2, 0.2, 1)",
          transform: showBack ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT ─────────────────────────────────────── */}
        <div
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          className="flip-card-front absolute inset-0 flex flex-col gap-3 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
        >
          {icon && (
            <div className="flip-icon-front inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-700">
              {icon}
            </div>
          )}
          <h3 className="flip-title-front text-lg font-semibold text-slate-950 sm:text-xl">
            {title}
          </h3>
          <p className="flip-body-front text-sm leading-7 text-slate-600">
            {frontDescription}
          </p>
          <div className="mt-auto pt-3">
            {/* Pill — inline styled for guaranteed contrast in both themes */}
            <span
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

        {/* ── BACK ──────────────────────────────────────── */}
        <div
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="absolute inset-0 flex flex-col gap-3 rounded-[24px] border border-red-400 bg-gradient-to-br from-red-700 via-red-600 to-red-500 p-6 text-white shadow-[0_12px_36px_rgba(220,38,38,0.30)]"
        >
          {icon && (
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white">
              {icon}
            </div>
          )}
          <h3 className="text-lg font-semibold text-white sm:text-xl">
            {backTitle ?? title}
          </h3>
          <p className="text-sm leading-7 text-white/90">
            {backDescription}
          </p>
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

        {/* ── HEIGHT SPACER ── */}
        <div className="invisible flex flex-col gap-3 p-6" aria-hidden="true">
          {icon && <div className="h-11 w-11 shrink-0" />}
          <h3 className="text-lg sm:text-xl">{backTitle ?? title}</h3>
          <p className="text-sm leading-7">{backDescription}</p>
          <div className="mt-auto pt-3">
            <span className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm">
              View {backTitle ?? title} Services
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
