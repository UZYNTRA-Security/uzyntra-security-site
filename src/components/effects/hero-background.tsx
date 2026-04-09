"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {/* Base radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.06),transparent_24%)]" />

      {/* Orb 1 — top left */}
      <motion.div
        className="absolute left-[8%] top-[12%] h-56 w-56 rounded-full bg-red-200/30 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orb 2 — top right */}
      <motion.div
        className="absolute right-[10%] top-[18%] h-72 w-72 rounded-full bg-red-300/20 blur-3xl"
        animate={{ x: [0, -35, 0], y: [0, 35, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orb 3 — bottom center */}
      <motion.div
        className="absolute bottom-[10%] left-[30%] h-64 w-64 rounded-full bg-rose-200/20 blur-3xl"
        animate={{ x: [0, 25, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Drifting grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.06]"
        animate={{ backgroundPosition: ["0px 0px", "32px 32px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft bottom vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.10),rgba(255,255,255,0.30))]" />
    </div>
  );
}
