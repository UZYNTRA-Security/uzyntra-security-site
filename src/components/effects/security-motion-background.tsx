"use client";

export function SecurityMotionBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft center radial base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.07),transparent_52%)]" />

      {/* Top-left glow */}
      <div className="absolute left-[-8%] top-[-10%] h-[22rem] w-[22rem] rounded-full bg-red-300/[0.18] blur-3xl" />

      {/* Bottom-right glow */}
      <div className="absolute bottom-[-12%] right-[-8%] h-[24rem] w-[24rem] rounded-full bg-rose-300/[0.14] blur-3xl" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(15,23,42,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.18)_1px,transparent_1px)] [background-size:42px_42px]" />

      {/* Moving scan line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-[-25%] h-[32%] w-full animate-[uzyntraScan_9s_linear_infinite] bg-[linear-gradient(to_bottom,transparent,rgba(239,68,68,0.08),transparent)] blur-2xl" />
      </div>

      {/* Floating orb 1 */}
      <div className="absolute left-[10%] top-[18%] h-40 w-40 animate-[uzyntraFloatA_12s_ease-in-out_infinite] rounded-full bg-red-400/10 blur-3xl" />

      {/* Floating orb 2 */}
      <div className="absolute right-[10%] top-[48%] h-52 w-52 animate-[uzyntraFloatB_16s_ease-in-out_infinite] rounded-full bg-rose-400/10 blur-3xl" />

      {/* Floating orb 3 */}
      <div className="absolute bottom-[8%] left-[32%] h-44 w-44 animate-[uzyntraFloatC_14s_ease-in-out_infinite] rounded-full bg-pink-300/10 blur-3xl" />

      {/* Edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_50%,rgba(255,255,255,0.28)_100%)]" />

      <style jsx>{`
        @keyframes uzyntraScan {
          0%   { transform: translateY(-130%); }
          100% { transform: translateY(430%); }
        }

        @keyframes uzyntraFloatA {
          0%, 100% { transform: translateY(0px)   translateX(0px)   scale(1);    }
          25%       { transform: translateY(-14px) translateX(8px)   scale(1.03); }
          50%       { transform: translateY(10px)  translateX(-10px) scale(0.98); }
          75%       { transform: translateY(-8px)  translateX(6px)   scale(1.02); }
        }

        @keyframes uzyntraFloatB {
          0%, 100% { transform: translateY(0px)  translateX(0px)   scale(1);    }
          25%       { transform: translateY(12px) translateX(-12px) scale(1.04); }
          50%       { transform: translateY(-10px) translateX(8px)  scale(0.98); }
          75%       { transform: translateY(6px)  translateX(-6px)  scale(1.01); }
        }

        @keyframes uzyntraFloatC {
          0%, 100% { transform: translateY(0px)   translateX(0px)  scale(1);    }
          25%       { transform: translateY(-10px) translateX(10px) scale(1.02); }
          50%       { transform: translateY(12px)  translateX(-8px) scale(0.99); }
          75%       { transform: translateY(-6px)  translateX(4px)  scale(1.03); }
        }
      `}</style>
    </div>
  );
}
