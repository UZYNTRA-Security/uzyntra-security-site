"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateDeviceMode = () => setEnabled(mediaQuery.matches);
    updateDeviceMode();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateDeviceMode);
    } else {
      mediaQuery.addListener(updateDeviceMode);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updateDeviceMode);
      } else {
        mediaQuery.removeListener(updateDeviceMode);
      }
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;

    if (!dot || !ring || !glow) return;

    let rafId = 0;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let glowX = mouseX;
    let glowY = mouseY;
    let isVisible = false;
    let isHoveringInteractive = false;

    const DOT_SIZE = 8;
    const RING_SIZE = 34;
    const GLOW_SIZE = 120;

    const isInteractiveElement = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;
      return !!target.closest('a, button, [role="button"], input, textarea, select, label, .group');
    };

    const showCursor = () => {
      if (!isVisible) {
        dot.style.opacity = "0.85";
        ring.style.opacity = "0.55";
        glow.style.opacity = "0.5";
        isVisible = true;
      }
    };

    const hideCursor = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      glow.style.opacity = "0";
      isVisible = false;
    };

    const moveDot = () => {
      dot.style.transform = `translate3d(${mouseX - DOT_SIZE / 2}px, ${mouseY - DOT_SIZE / 2}px, 0)`;
    };

    const updateInteractiveState = () => {
      ring.style.scale = isHoveringInteractive ? "1.5" : "1";
      ring.style.opacity = isHoveringInteractive ? "0.75" : "0.55";
      glow.style.scale = isHoveringInteractive ? "1.2" : "1";
      glow.style.opacity = isHoveringInteractive ? "0.70" : "0.50";
    };

    const animateFollowers = () => {
      // Tighter lerp — ring tracks cursor closely so scale changes
      // don't create a visible gap between dot and ring
      ringX += (mouseX - ringX) * 0.28;
      ringY += (mouseY - ringY) * 0.28;
      glowX += (mouseX - glowX) * 0.10;
      glowY += (mouseY - glowY) * 0.10;

      ring.style.transform = `translate3d(${ringX - RING_SIZE / 2}px, ${ringY - RING_SIZE / 2}px, 0)`;
      glow.style.transform = `translate3d(${glowX - GLOW_SIZE / 2}px, ${glowY - GLOW_SIZE / 2}px, 0)`;

      rafId = requestAnimationFrame(animateFollowers);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isHoveringInteractive = isInteractiveElement(e.target);
      updateInteractiveState();
      moveDot();
      showCursor();
    };

    const handleMouseEnter = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Snap ring and glow to cursor position on entry — prevents
      // the ring lerping in from a stale off-screen position
      ringX = e.clientX;
      ringY = e.clientY;
      glowX = e.clientX;
      glowY = e.clientY;
      moveDot();
      showCursor();
    };

    const handleMouseLeave = () => hideCursor();

    hideCursor();

    // Defer RAF until first mousemove — avoids running the animation loop
    // during the LCP window when no cursor movement has occurred yet.
    let loopStarted = false;
    const startLoopOnce = () => {
      if (!loopStarted) {
        loopStarted = true;
        rafId = requestAnimationFrame(animateFollowers);
      }
    };

    const handleMouseMoveWithStart = (e: MouseEvent) => {
      startLoopOnce();
      handleMouseMove(e);
    };

    window.addEventListener("mousemove", handleMouseMoveWithStart, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter as EventListener);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveWithStart);
      document.removeEventListener("mouseenter", handleMouseEnter as EventListener);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!mounted || !enabled) return null;

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9996] h-[120px] w-[120px] rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.14)_0%,rgba(239,68,68,0.06)_40%,rgba(239,68,68,0.00)_70%)] opacity-0 blur-2xl transition-[opacity,scale] duration-300 will-change-transform"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-[34px] w-[34px] rounded-full border border-red-500/60 opacity-0 shadow-[0_0_12px_rgba(239,68,68,0.15)] transition-[opacity,scale] duration-200 will-change-transform"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-red-500 opacity-0 shadow-[0_0_8px_rgba(220,38,38,0.7)] transition-opacity duration-200 will-change-transform"
      />
    </>
  );
}
