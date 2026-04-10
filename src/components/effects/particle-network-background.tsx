"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  isAccent: boolean;
}

// Brand red palette — restrained for light background
const NODE_BASE   = { r: 185, g: 28,  b: 28  }; // red-700
const NODE_ACCENT = { r: 220, g: 38,  b: 38  }; // red-600
const LINE_C      = { r: 220, g: 38,  b: 38  }; // red-600
const GRAB_C      = { r: 153, g: 27,  b: 27  }; // red-800

const LINK_DISTANCE   = 180;
const GRAB_DISTANCE   = 220;
const SPEED           = 0.26;
const PARTICLE_RADIUS = 2.2;

function particleCount(w: number): number {
  if (w < 480) return 24;
  if (w < 768) return 48;
  if (w < 1280) return 88;
  return 120;
}

export function ParticleNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let particles: Particle[] = [];
    let w = 0;
    let h = 0;
    let dpr = 1;
    const mouse = { x: -9999, y: -9999, active: false };
    const isMobile = () => window.innerWidth < 768;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      if (w === 0 || h === 0) return;

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width  = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(dpr, dpr);
      init();
    }

    function init() {
      particles = Array.from({ length: particleCount(w) }, () => createParticle());
    }

    function createParticle(): Particle {
      const angle    = Math.random() * Math.PI * 2;
      const speed    = SPEED * (0.5 + Math.random() * 0.8);
      const isAccent = Math.random() < 0.20;
      return {
        x:       Math.random() * w,
        y:       Math.random() * h,
        vx:      Math.cos(angle) * speed,
        vy:      Math.sin(angle) * speed,
        radius:  PARTICLE_RADIUS * (0.65 + Math.random() * 0.70),
        opacity: isAccent
          ? 0.50 + Math.random() * 0.15   // accent: 0.50–0.65
          : 0.32 + Math.random() * 0.20,  // base:   0.32–0.52
        isAccent,
      };
    }

    function drawParticle(p: Particle) {
      const c = p.isAccent ? NODE_ACCENT : NODE_BASE;
      ctx!.beginPath();
      ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx!.fillStyle = `rgba(${c.r},${c.g},${c.b},${p.opacity})`;
      ctx!.fill();
    }

    function drawLine(
      ax: number, ay: number,
      bx: number, by: number,
      c: { r: number; g: number; b: number },
      alpha: number,
      width: number
    ) {
      ctx!.beginPath();
      ctx!.moveTo(ax, ay);
      ctx!.lineTo(bx, by);
      ctx!.strokeStyle = `rgba(${c.r},${c.g},${c.b},${alpha})`;
      ctx!.lineWidth   = width;
      ctx!.stroke();
    }

    function tick() {
      ctx!.clearRect(0, 0, w, h);

      const mobile = isMobile();

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];

        a.x += a.vx;
        a.y += a.vy;
        if (a.x < -4)         a.x = w + 4;
        else if (a.x > w + 4) a.x = -4;
        if (a.y < -4)         a.y = h + 4;
        else if (a.y > h + 4) a.y = -4;

        drawParticle(a);

        // Particle ↔ particle links
        for (let j = i + 1; j < particles.length; j++) {
          const b    = particles[j];
          const dx   = a.x - b.x;
          const dy   = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.44;
            drawLine(a.x, a.y, b.x, b.y, LINE_C, alpha, 0.8);
          }
        }

        // Mouse grab lines
        if (!mobile && mouse.active) {
          const dx   = a.x - mouse.x;
          const dy   = a.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < GRAB_DISTANCE) {
            const alpha = (1 - dist / GRAB_DISTANCE) * 0.80;
            drawLine(a.x, a.y, mouse.x, mouse.y, GRAB_C, alpha, 1.1);
          }
        }
      }

      rafId = requestAnimationFrame(tick);
    }

    function onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(tick);
      }
    }

    function onMouseMove(e: MouseEvent) {
      if (isMobile()) return;
      const rect   = canvas!.getBoundingClientRect();
      mouse.x      = e.clientX - rect.left;
      mouse.y      = e.clientY - rect.top;
      mouse.active = true;
    }

    function onMouseLeave() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }

    let resizeTimer = 0;
    const ro = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 80);
    });
    ro.observe(canvas.parentElement ?? canvas);

    resize();

    if (w === 0 || h === 0) {
      requestAnimationFrame(() => {
        resize();
        if (particles.length > 0) rafId = requestAnimationFrame(tick);
      });
    } else {
      rafId = requestAnimationFrame(tick);
    }

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("mousemove",  onMouseMove,  { passive: true });
    window.addEventListener("mouseleave", onMouseLeave, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("mousemove",  onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      "absolute",
        inset:         0,
        width:         "100%",
        height:        "100%",
        display:       "block",
        pointerEvents: "none",
        maxWidth:      "none",
      }}
    />
  );
}
