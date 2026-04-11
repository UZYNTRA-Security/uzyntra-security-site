import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// ── CSP script-src differs between dev and prod ────────────────────────────
// Dev:  unsafe-eval needed by Turbopack/React for source map reconstruction
// Prod: strict — no eval, explicit allowlist only
const scriptSrc = isDev
  ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com"
  : "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com";

// Dev: connect-src must also allow localhost HMR websocket and Turbopack
const connectSrc = isDev
  ? "connect-src 'self' ws://localhost:* http://localhost:* https://www.google-analytics.com https://analytics.google.com https://vitals.vercel-insights.com https://api.emailjs.com"
  : "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://vitals.vercel-insights.com https://api.emailjs.com";

// ── Security headers applied to every route ────────────────────────────────
const securityHeaders = [
  // ── Clickjacking protection ──────────────────────────────────────────────
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },

  // ── HSTS — 2 years, subdomains, preload ─────────────────────────────────
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  // ── Referrer policy ──────────────────────────────────────────────────────
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },

  // ── Permissions policy ───────────────────────────────────────────────────
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "interest-cohort=()",
      "payment=()",
      "usb=()",
    ].join(", "),
  },

  // ── Cross-Origin policies ────────────────────────────────────────────────
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Embedder-Policy",
    value: "require-corp",
  },

  // ── Content Security Policy ──────────────────────────────────────────────
  {
    key: "Content-Security-Policy",
    value: [
      scriptSrc,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self'",
      connectSrc,
      "object-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1600],
    imageSizes: [64, 128, 256, 384, 512, 640, 750],
    minimumCacheTTL: 31536000,
  },

  experimental: {
    // Tree-shake icon/animation packages at the import level.
    // Without this, Next.js bundles the entire package even when only a
    // handful of exports are used. Each package listed here gets per-export
    // code splitting, which directly reduces unused JS in first-party chunks.
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "react-icons",
      "@vercel/analytics",
      "@vercel/speed-insights",
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
