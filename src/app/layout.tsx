import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CustomCursor } from "@/components/cursor/custom-cursor";
import { DeferredEffects } from "@/components/effects/deferred-effects";
import { GoogleAnalytics } from "@/components/analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  // 400 + 700 cover all UI text; 500/600 are synthesized by the browser
  // from these two — dropping them saves ~30KB of font transfer.
  weight: ["400", "700"],
  preload: true,
});

export const metadata: Metadata = {
  // metadataBase makes all relative URLs absolute — required for OG/Twitter images
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [...siteConfig.seo.keywords],
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: { canonical: siteConfig.url },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [
      {
        url: siteConfig.ogImage,          // absolute URL — WhatsApp, LinkedIn, Facebook, Discord
        secureUrl: siteConfig.ogImage,    // og:image:secure_url — required by some scrapers
        width: 1200,
        height: 630,
        type: "image/webp",              // og:image:type — helps crawlers skip content negotiation
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",          // large image card — required for X/Twitter preview
    site: "@uzyntra",                     // twitter:site — the account that owns the domain
    creator: "@uzyntra",                  // twitter:creator — content author
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [
      {
        url: siteConfig.ogImage,          // must be absolute for Twitter card validator
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        width: 1200,
        height: 630,
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Cache-control for social crawlers — Vercel honours this header
  other: {
    "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  // maximumScale removed — restricting zoom harms accessibility (WCAG 1.4.4)
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Preconnect — crossOrigin required for CORS fonts/scripts */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
        {/* Theme init — runs before paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('uzyntra-theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t||p);})();`,
          }}
        />
      </head>
      <body
        className="min-h-screen bg-white text-slate-950 antialiased"
      >
        <CustomCursor />
        <DeferredEffects />
        <a
          href="#main-content"
          className="sr-only-focusable fixed left-4 top-4 z-[200] rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-950 shadow-md"
        >
          Skip to content
        </a>
        <div className="relative flex min-h-screen flex-col" style={{ overflowX: "clip", zIndex: 1 }}>
          <SiteHeader />
          <div className="flex flex-1 flex-col">{children}</div>
          <SiteFooter />
        </div>
        <SpeedInsights />
        <Analytics />
        {/* Analytics deferred until browser idle — off the critical path */}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
