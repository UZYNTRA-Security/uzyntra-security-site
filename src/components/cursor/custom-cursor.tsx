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

    const DOT_SIZE = 10;
    const RING_SIZE = 38;
    const GLOW_SIZE = 140;

    const isInteractiveElement = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;
      return !!target.closest('a, button, [role="button"], input, textarea, select, label, .group');
    };

    const showCursor = () => {
      if (!isVisible) {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        glow.style.opacity = "1";
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
      ring.style.scale = isHoveringInteractive ? "1.35" : "1";
      glow.style.scale = isHoveringInteractive ? "1.15" : "1";
      glow.style.opacity = isHoveringInteractive ? "0.95" : "0.75";
    };

    const animateFollowers = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;

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
      ringX = e.clientX;
      ringY = e.clientY;
      glowX = e.clientX;
      glowY = e.clientY;
      moveDot();
      showCursor();
    };

    const handleMouseLeave = () => hideCursor();

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter as EventListener);
    document.addEventListener("mouseleave", handleMouseLeave);

    hideCursor();
    rafId = requestAnimationFrame(animateFollowers);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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
        className="pointer-events-none fixed left-0 top-0 z-[9996] h-[140px] w-[140px] rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.18)_0%,rgba(239,68,68,0.08)_35%,rgba(239,68,68,0.00)_70%)] opacity-0 blur-2xl transition-[opacity,scale] duration-300 will-change-transform"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 rounded-full border border-red-500/80 opacity-0 shadow-[0_0_24px_rgba(239,68,68,0.22)] transition-[opacity,scale] duration-200 will-change-transform"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 rounded-full bg-red-600 opacity-0 shadow-[0_0_16px_rgba(220,38,38,0.95)] transition-opacity duration-200 will-change-transform"
      />
    </>
  );
}
