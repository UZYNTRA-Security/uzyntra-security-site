"use client";

// Keyframes (uzyntraScan, uzyntraFloatA, uzyntraFloatB) are defined in globals.css
// — no styled-jsx runtime needed here.
export function GlobalBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
        contain: "strict",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.04),transparent_55%)]" />
      <div className="global-bg-orb-1 absolute left-[-6%] top-[-8%] h-[16rem] w-[16rem] rounded-full bg-red-200/20 blur-3xl" />
      <div className="global-bg-orb-2 absolute bottom-[-10%] right-[-6%] h-[18rem] w-[18rem] rounded-full bg-rose-200/16 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(15,23,42,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.15)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 top-[-25%] h-[28%] w-full animate-[uzyntraScan_12s_linear_infinite] bg-[linear-gradient(to_bottom,transparent,rgba(239,68,68,0.05),transparent)] blur-2xl"
          style={{ willChange: "transform" }}
        />
      </div>
      <div
        className="absolute left-[8%] top-[20%] h-28 w-28 animate-[uzyntraFloatA_14s_ease-in-out_infinite] rounded-full bg-red-400/[0.07] blur-3xl"
        style={{ willChange: "transform" }}
      />
      <div
        className="absolute right-[8%] top-[45%] h-36 w-36 animate-[uzyntraFloatB_18s_ease-in-out_infinite] rounded-full bg-rose-400/[0.07] blur-3xl"
        style={{ willChange: "transform" }}
      />
      <div className="global-bg-vignette absolute inset-0 bg-[radial-gradient(circle,transparent_55%,rgba(255,255,255,0.22)_100%)]" />
    </div>
  );
}
