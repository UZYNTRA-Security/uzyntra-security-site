"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const updateDeviceMode = () => setEnabled(mediaQuery.matches);
    const timer = window.setTimeout(updateDeviceMode, 0);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateDeviceMode);
    } else {
      mediaQuery.addListener(updateDeviceMode);
    }

    return () => {
      window.clearTimeout(timer);
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
    let loopStarted = false;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let glowX = mouseX;
    let glowY = mouseY;

    const DOT_SIZE = 9;
    const RING_SIZE = 38;
    const GLOW_SIZE = 132;

    const isInteractiveElement = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;
      return !!target.closest('a, button, [role="button"], input, textarea, select, label, .group');
    };

    const setVisible = (visible: boolean) => {
      dot.style.opacity = visible ? "1" : "0";
      ring.style.opacity = visible ? "0.78" : "0";
      glow.style.opacity = visible ? "0.58" : "0";
    };

    const moveDot = () => {
      dot.style.transform = `translate3d(${mouseX - DOT_SIZE / 2}px, ${mouseY - DOT_SIZE / 2}px, 0)`;
    };

    const animateFollowers = () => {
      ringX += (mouseX - ringX) * 0.30;
      ringY += (mouseY - ringY) * 0.30;
      glowX += (mouseX - glowX) * 0.11;
      glowY += (mouseY - glowY) * 0.11;

      ring.style.transform = `translate3d(${ringX - RING_SIZE / 2}px, ${ringY - RING_SIZE / 2}px, 0)`;
      glow.style.transform = `translate3d(${glowX - GLOW_SIZE / 2}px, ${glowY - GLOW_SIZE / 2}px, 0)`;
      rafId = requestAnimationFrame(animateFollowers);
    };

    const startLoopOnce = () => {
      if (loopStarted) return;
      loopStarted = true;
      rafId = requestAnimationFrame(animateFollowers);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      moveDot();

      const hovering = isInteractiveElement(event.target);
      ring.style.scale = hovering ? "1.55" : "1";
      glow.style.scale = hovering ? "1.18" : "1";
      setVisible(true);
      startLoopOnce();
    };

    const handleMouseEnter = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      ringX = mouseX;
      ringY = mouseY;
      glowX = mouseX;
      glowY = mouseY;
      moveDot();
      setVisible(true);
      startLoopOnce();
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    setVisible(false);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter as EventListener);
    document.addEventListener("mouseleave", handleMouseLeave as EventListener);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter as EventListener);
      document.removeEventListener("mouseleave", handleMouseLeave as EventListener);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9996] h-[132px] w-[132px] rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.20)_0%,rgba(239,68,68,0.08)_42%,rgba(239,68,68,0.00)_72%)] opacity-0 blur-2xl transition-[opacity,scale] duration-200 will-change-transform"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-[38px] w-[38px] rounded-full border-2 border-red-500/80 opacity-0 shadow-[0_0_18px_rgba(239,68,68,0.30)] transition-[opacity,scale] duration-150 will-change-transform"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[9px] w-[9px] rounded-full bg-red-500 opacity-0 shadow-[0_0_10px_rgba(220,38,38,0.85)] transition-opacity duration-100 will-change-transform"
      />
    </>
  );
}
