"use client";

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
        // Isolate this layer — prevents its animations from triggering
        // layout recalculation on the main document tree
        contain: "strict",
      }}
    >
      {/* Soft center radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.04),transparent_55%)]" />

      {/* Top-left glow */}
      <div className="global-bg-orb-1 absolute left-[-6%] top-[-8%] h-[16rem] w-[16rem] rounded-full bg-red-200/20 blur-3xl" />

      {/* Bottom-right glow */}
      <div className="global-bg-orb-2 absolute bottom-[-10%] right-[-6%] h-[18rem] w-[18rem] rounded-full bg-rose-200/16 blur-3xl" />

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(15,23,42,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.15)_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* Scan line — will-change promotes to compositor layer, no layout reflow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 top-[-25%] h-[28%] w-full animate-[uzyntraScan_12s_linear_infinite] bg-[linear-gradient(to_bottom,transparent,rgba(239,68,68,0.05),transparent)] blur-2xl"
          style={{ willChange: "transform" }}
        />
      </div>

      {/* Floating orb 1 — compositor layer */}
      <div
        className="absolute left-[8%] top-[20%] h-28 w-28 animate-[uzyntraFloatA_14s_ease-in-out_infinite] rounded-full bg-red-400/[0.07] blur-3xl"
        style={{ willChange: "transform" }}
      />

      {/* Floating orb 2 — compositor layer */}
      <div
        className="absolute right-[8%] top-[45%] h-36 w-36 animate-[uzyntraFloatB_18s_ease-in-out_infinite] rounded-full bg-rose-400/[0.07] blur-3xl"
        style={{ willChange: "transform" }}
      />

      {/* Edge vignette */}
      <div className="global-bg-vignette absolute inset-0 bg-[radial-gradient(circle,transparent_55%,rgba(255,255,255,0.22)_100%)]" />

      <style jsx>{`
        @keyframes uzyntraScan {
          0%   { transform: translateY(-130%); }
          100% { transform: translateY(430%); }
        }
        @keyframes uzyntraFloatA {
          0%, 100% { transform: translateY(0px)   translateX(0px)  scale(1);    }
          33%       { transform: translateY(-10px) translateX(6px)  scale(1.02); }
          66%       { transform: translateY(8px)   translateX(-8px) scale(0.99); }
        }
        @keyframes uzyntraFloatB {
          0%, 100% { transform: translateY(0px)  translateX(0px)   scale(1);    }
          33%       { transform: translateY(10px) translateX(-10px) scale(1.02); }
          66%       { transform: translateY(-8px) translateX(6px)   scale(0.99); }
        }
      `}</style>
    </div>
  );
}
