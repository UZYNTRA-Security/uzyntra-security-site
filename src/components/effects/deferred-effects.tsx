"use client";

import dynamic from "next/dynamic";

// Neither component is needed for first paint — defer both to post-hydration
const ParticleNetworkBackground = dynamic(
  () =>
    import("@/components/effects/particle-network-background").then(
      (m) => m.ParticleNetworkBackground
    ),
  { ssr: false }
);

const GlobalBackground = dynamic(
  () =>
    import("@/components/effects/global-background").then(
      (m) => m.GlobalBackground
    ),
  { ssr: false }
);

export function DeferredEffects() {
  return (
    <>
      {/* Fixed particle canvas — sits behind all page content */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <ParticleNetworkBackground />
      </div>

      {/* Decorative glows, grid, scan line, orbs */}
      <GlobalBackground />
    </>
  );
}
