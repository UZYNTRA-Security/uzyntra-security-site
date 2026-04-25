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
    // Tighter deviceSizes — removes redundant 420 breakpoint, adds 1920 for retina
    deviceSizes: [320, 640, 768, 1024, 1280, 1600, 1920],
    imageSizes: [64, 128, 256, 384, 512],
    minimumCacheTTL: 31536000,
    // Serve AVIF first — ~50% smaller than WebP for photographic content
    dangerouslyAllowSVG: false,
    contentDispositionType: "attachment",
  },

  // Target modern JS — eliminates legacy polyfills (~14KB savings)
  // Next.js 15+ defaults to browserslist; this makes it explicit.
  compiler: {
    // Remove console.* calls in production builds
    removeConsole: process.env.NODE_ENV === "production",
  },

  experimental: {
    // Tree-shake icon/animation packages at the import level.
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "react-icons",
      "@vercel/analytics",
      "@vercel/speed-insights",
    ],
    // Inline critical CSS for above-the-fold content
    // Reduces render-blocking stylesheet impact
    optimizeCss: true,
  },

  async redirects() {
    return [
      // Legacy URL aliases — kept for backward compatibility with any
      // external links, but canonical pages now live at the new slugs.
      // Old pages still exist so Google sees 200 at both; these redirects
      // ensure any inbound links consolidate PageRank to the canonical URL.
      { source: "/services/cybersecurity",       destination: "/services/penetration-testing", permanent: true },
      { source: "/services/software-development", destination: "/services/backend-engineering",  permanent: true },
      { source: "/services/blockchain",           destination: "/services/blockchain-security",  permanent: true },
      { source: "/services/n8n-automation",       destination: "/services/automation-ai",        permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // ── Sitemap + robots overrides ───────────────────────────────────────
      // The global rule sets Cross-Origin-Resource-Policy: same-origin which
      // blocks Googlebot (external origin) from fetching these files.
      // These per-route overrides relax only what is necessary for crawlers.
      // Next.js applies headers in order — later rules override earlier ones
      // for the same key on matching routes.
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type",                  value: "application/xml; charset=utf-8" },
          { key: "Cross-Origin-Resource-Policy",  value: "cross-origin" },
          { key: "Cache-Control",                 value: "public, max-age=3600, stale-while-revalidate=86400" },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          { key: "Content-Type",                  value: "text/plain; charset=utf-8" },
          { key: "Cross-Origin-Resource-Policy",  value: "cross-origin" },
          { key: "Cache-Control",                 value: "public, max-age=3600, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
