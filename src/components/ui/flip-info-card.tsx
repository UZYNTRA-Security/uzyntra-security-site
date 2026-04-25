"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
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
  const cardRef = useRef<HTMLDivElement>(null);

  // Subtle tilt on mouse move
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  useEffect(() => {
    const check = () =>
      setDark(document.documentElement.getAttribute("data-theme") === "dark");
    check();
    window.addEventListener("uzyntra-theme-change", check);
    setHasHover(window.matchMedia("(hover: hover)").matches);
    return () => window.removeEventListener("uzyntra-theme-change", check);
  }, []);

  const showBack = hasHover ? hovered : flipped;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!hasHover || !cardRef.current || showBack) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    rotateX.set(-y * 6);
    rotateY.set( x * 6);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    if (hasHover) setHovered(false);
  }

  function handleClick(e: React.MouseEvent) {
    if (hasHover) return;
    if (!href) { setFlipped((v) => !v); return; }
    if (!flipped) { e.preventDefault(); setFlipped(true); }
  }

  // Fix 10: improved light mode contrast
  const pillStyle: React.CSSProperties = dark
    ? { background: "rgba(220,38,38,0.12)", border: "1px solid rgba(248,113,113,0.4)", color: "rgb(248,113,113)" }
    : { background: "#fff0f0",              border: "1px solid rgba(185,28,28,0.40)",   color: "rgb(153,27,27)" };

  const backFaceStyle: React.CSSProperties = {
    background: "#0f172a",
    borderColor: "rgba(220,38,38,0.35)",
  };

  // Fix 1: identical front card base — no card looks "more active" than others
  // Fix 7 dark mode: bg-slate-950/70 border-white/10 hover:border-red-500/40
  const frontBg          = dark ? "rgba(15,23,42,0.85)"    : "#ffffff";
  const frontBorderColor = dark ? "rgba(255,255,255,0.10)" : "rgba(203,213,225,0.8)";
  const frontHoverShadow = dark
    ? "0 0 0 1.5px rgba(239,68,68,0.40), 0 20px 48px rgba(220,38,38,0.14), 0 4px 16px rgba(0,0,0,0.20)"
    : "0 0 0 1.5px rgba(220,38,38,0.30), 0 20px 48px rgba(220,38,38,0.12), 0 4px 16px rgba(0,0,0,0.06)";
  const frontDefaultShadow = dark ? "0 1px 4px rgba(0,0,0,0.30)" : "0 1px 4px rgba(0,0,0,0.05)";

  const inner = (
    <motion.div
      ref={cardRef}
      className={cn("flip-card-wrapper h-full cursor-pointer", className)}
      style={{
        perspective: "1200px",
        rotateX: showBack ? 0 : rotateX,
        rotateY: showBack ? 0 : rotateY,
      }}
      // Fix 6: premium hover — lift + shadow-2xl + border glow
      whileHover={showBack ? {} : { y: -8, scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" as const }}
      onClick={handleClick}
      onMouseEnter={() => { if (hasHover) setHovered(true); }}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
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
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: frontBg,
            borderColor: frontBorderColor,
            boxShadow: hovered && !showBack ? frontHoverShadow : frontDefaultShadow,
            transition: "box-shadow 0.3s ease, border-color 0.3s ease",
          }}
          className="flip-card-front absolute inset-0 flex flex-col gap-3 rounded-[22px] border p-6"
        >
          {/* Fix 7: icon with ring glow */}
          {icon && (
            <div className="flip-icon-front inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-700 ring-1 ring-red-500/20 transition-all duration-200">
              {icon}
            </div>
          )}
          <h3 className="flip-title-front text-base font-semibold" style={{ color: dark ? "hsl(210,40%,96%)" : "#0f172a" }}>
            {title}
          </h3>
          <p className="flip-body-front text-sm leading-7" style={{ color: dark ? "hsl(215,16%,65%)" : "#475569" }}>
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

        {/* ── BACK — premium dark surface ── */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            ...backFaceStyle,
          }}
          className="absolute inset-0 flex flex-col gap-3 rounded-[22px] border p-6 shadow-[0_16px_48px_rgba(0,0,0,0.28)]"
        >
          {icon && (
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-600/20 text-red-400 ring-1 ring-red-500/20">
              {icon}
            </div>
          )}
          <h3 className="text-base font-semibold text-white">
            {backTitle ?? title}
          </h3>

          {/* Fix 2: text-sm, space-y-2, text-white/90 */}
          {backBullets && backBullets.length > 0 ? (
            <ul className="space-y-2">
              {backBullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm leading-6 text-white/90">
                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                  {b}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-7 text-white/90">{backDescription}</p>
          )}

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
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-400">
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
            ? backBullets.map((b) => <p key={b} className="text-sm leading-6">{b}</p>)
            : <p className="text-sm leading-7">{backDescription}</p>
          }
          <div className="mt-auto pt-3">
            <span className="inline-flex items-center gap-1.5 text-xs">{hrefLabel}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{inner}</Link>;
  }
  return inner;
}
