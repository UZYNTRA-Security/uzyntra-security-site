"use client";

import dynamic from "next/dynamic";

const ParticleNetworkBackground = dynamic(
  () =>
    import("@/components/effects/particle-network-background").then(
      (m) => m.ParticleNetworkBackground,
    ),
  { ssr: false },
);

const GlobalBackground = dynamic(
  () =>
    import("@/components/effects/global-background").then(
      (m) => m.GlobalBackground,
    ),
  { ssr: false },
);

export function DeferredEffects() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          opacity: 0.82,
        }}
      >
        <ParticleNetworkBackground />
      </div>
      <GlobalBackground />
    </>
  );
}
