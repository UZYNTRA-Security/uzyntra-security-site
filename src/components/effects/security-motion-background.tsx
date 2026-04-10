"use client";

// Decorative effects (glows, grid, scan line, orbs) are now handled globally
// via GlobalBackground in layout.tsx — this component only adds the
// hero-specific soft center radial tint on top.
export function SecurityMotionBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05),transparent_50%)]" />
    </div>
  );
}
