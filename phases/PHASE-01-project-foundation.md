# Phase 01 — Project Foundation

## Objective

Build the **production-ready foundation** for the UZYNTRA Security website using **Next.js App Router + TypeScript + Tailwind CSS** with a structure that is:

- enterprise-grade
- scalable
- SEO-ready
- accessible
- performance-aware
- easy to extend into a full product + services platform

This phase focuses on the **core app shell and project architecture**, not the final visual polish. After this phase, the project will have:

- a strong global layout
- base metadata
- global theme variables
- utility helpers
- centralized site configuration
- a clean enterprise foundation for later phases

---

## Tech Foundation

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS + custom CSS variables
- **Animation-ready:** Framer Motion will be added in later phases
- **Architecture:** component-driven, config-driven
- **Deployment target:** Vercel + custom domain (`uzyntra.com`)

---

## Files Covered in This Phase

```txt
src/
└── app/
    ├── globals.css
    ├── layout.tsx
    └── page.tsx

src/
└── config/
    └── site.ts

src/
└── lib/
    └── utils.ts
```

---

## Architecture Notes

This phase establishes the following standards:

### 1. Centralized configuration
Company information, navigation references, product links, and social URLs are stored in one place so the site stays maintainable.

### 2. Global metadata
The root layout defines SEO defaults, Open Graph values, robots rules, and metadata base.

### 3. Theme tokens
Colors, spacing, border radii, shadows, and container widths are declared at the global level so future phases remain visually consistent.

### 4. Utility-first development
A reusable `cn()` helper is included for safe class merging using `clsx` and `tailwind-merge`.

### 5. Enterprise defaults
The layout uses semantic HTML, good typography, color contrast, selection styling, focus styling, and reduced-motion awareness.

---

## Implementation Strategy

In this phase we create:

1. `src/config/site.ts`
   - company metadata
   - domain
   - GitHub and product repository links
   - social links
   - SEO defaults

2. `src/lib/utils.ts`
   - className merger helper

3. `src/app/globals.css`
   - design tokens
   - CSS variables
   - reset refinements
   - typography defaults
   - utility classes
   - enterprise visual baseline

4. `src/app/layout.tsx`
   - root metadata
   - viewport config
   - `<html>` / `<body>` structure
   - shell container
   - accessibility helpers
   - future-ready composition

5. `src/app/page.tsx`
   - temporary production-safe starter homepage
   - acts as a clean test point before later phases replace it with full homepage sections

---

# File 1 — `src/config/site.ts`

## Code

```ts
export const siteConfig = {
  name: "UZYNTRA Security",
  shortName: "UZYNTRA",
  legalName: "UZYNTRA Security",
  description:
    "UZYNTRA Security delivers enterprise-grade cybersecurity solutions, secure software engineering, and blockchain systems built with modern architecture, security-first thinking, and production-ready technology.",
  url: "https://uzyntra.com",
  ogImage: "https://uzyntra.com/og-image.png",
  domain: "uzyntra.com",
  locale: "en_US",
  type: "website",
  email: "contact@uzyntra.com",

  tagline: "Cybersecurity, Blockchain, and Secure Software Engineering",

  founderLinks: {
    github: "https://github.com/UsamaMatrix",
  },

  productLinks: {
    apiFirewallRepo: "https://github.com/UsamaMatrix/uzyntra-api-firewall",
    uiRepo: "https://github.com/UsamaMatrix/uzyntra-ui",
    apiFirewallDownload:
      "https://github.com/UsamaMatrix/uzyntra-api-firewall/releases/latest",
  },

  socials: {
    github: "https://github.com/UsamaMatrix",
    linkedin: "https://www.linkedin.com",
    x: "https://x.com",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    email: "mailto:contact@uzyntra.com",
  },

  company: {
    name: "UZYNTRA Security",
    mission:
      "To help organizations build, protect, and scale secure digital systems through cybersecurity, secure software development, and blockchain engineering.",
    positioning:
      "UZYNTRA Security is a platform and services company delivering enterprise-grade technology solutions, not a single-product vendor.",
  },

  seo: {
    titleTemplate: "%s | UZYNTRA Security",
    defaultTitle: "UZYNTRA Security",
    defaultDescription:
      "Enterprise cybersecurity, blockchain engineering, and secure software development solutions with modern architecture and production-grade delivery.",
    keywords: [
      "UZYNTRA Security",
      "Cybersecurity",
      "API Firewall",
      "Secure Software Development",
      "Blockchain Development",
      "SOC as a Service",
      "SIEM",
      "IAM",
      "Cloud Security",
      "Rust Development",
      "Enterprise Security",
      "API Security",
    ],
  },

  nav: {
    home: "/",
    services: "/services",
    products: "/products",
    about: "/about",
    contact: "/contact",
    download: "/download",
    privacyPolicy: "/privacy-policy",
    terms: "/terms",
    responsibleDisclosure: "/responsible-disclosure",
  },
} as const;

export type SiteConfig = typeof siteConfig;
```

---

# File 2 — `src/lib/utils.ts`

## Code

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

# File 3 — `src/app/globals.css`

## Code

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
  --muted-foreground: 215 16% 35%;
  --card: 0 0% 100%;
  --card-foreground: 222 47% 11%;
  --border: 220 14% 90%;
  --input: 220 14% 90%;
  --ring: 0 72% 51%;

  --primary: 0 72% 51%;
  --primary-foreground: 0 0% 100%;
  --primary-soft: 0 86% 97%;
  --primary-strong: 0 74% 42%;

  --secondary: 210 40% 98%;
  --secondary-foreground: 222 47% 11%;

  --accent: 0 86% 97%;
  --accent-foreground: 222 47% 11%;

  --surface-subtle: 210 20% 98%;
  --surface-elevated: 0 0% 100%;

  --success: 142 71% 45%;
  --warning: 38 92% 50%;
  --destructive: 0 84% 60%;

  --radius-sm: 0.5rem;
  --radius-md: 0.875rem;
  --radius-lg: 1.25rem;
  --radius-xl: 1.5rem;
  --radius-2xl: 2rem;

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 10px 30px rgba(15, 23, 42, 0.08);
  --shadow-lg: 0 18px 60px rgba(15, 23, 42, 0.12);
  --shadow-red: 0 20px 70px rgba(220, 38, 38, 0.14);

  --container: 1280px;

  --header-height: 4.75rem;
  --section-padding-y: clamp(4rem, 6vw, 7rem);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(254, 242, 242, 0.9), transparent 28%),
    linear-gradient(to bottom, #ffffff, #fcfcfd);
  color: hsl(var(--foreground));
  font-feature-settings: "rlig" 1, "calt" 1;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: rgba(220, 38, 38, 0.14);
  color: hsl(var(--foreground));
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

img,
svg,
video,
canvas {
  display: block;
  max-width: 100%;
}

button {
  cursor: pointer;
}

:focus-visible {
  outline: 2px solid rgba(220, 38, 38, 0.9);
  outline-offset: 2px;
}

main {
  display: block;
}

@layer base {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: hsl(var(--foreground));
    letter-spacing: -0.03em;
    line-height: 1.05;
    margin: 0;
    font-weight: 700;
  }

  h1 {
    font-size: clamp(2.75rem, 6vw, 5rem);
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3.5rem);
  }

  h3 {
    font-size: clamp(1.375rem, 2vw, 2rem);
  }

  p {
    margin: 0;
    line-height: 1.75;
    color: hsl(var(--muted-foreground));
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }
}

@layer components {
  .container-shell {
    width: 100%;
    max-width: calc(var(--container) + 2rem);
    margin-inline: auto;
    padding-inline: 1rem;
  }

  @media (min-width: 768px) {
    .container-shell {
      padding-inline: 1.5rem;
    }
  }

  @media (min-width: 1280px) {
    .container-shell {
      padding-inline: 2rem;
    }
  }

  .section-shell {
    padding-block: var(--section-padding-y);
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 9999px;
    border: 1px solid rgba(220, 38, 38, 0.12);
    background: rgba(220, 38, 38, 0.05);
    padding: 0.5rem 0.875rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgb(185, 28, 28);
  }

  .surface-card {
    border: 1px solid hsl(var(--border));
    background: rgba(255, 255, 255, 0.82);
    backdrop-filter: blur(12px);
    box-shadow: var(--shadow-md);
    border-radius: var(--radius-xl);
  }

  .surface-card-strong {
    border: 1px solid rgba(220, 38, 38, 0.1);
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.98), rgba(254, 250, 250, 0.95));
    box-shadow: var(--shadow-lg);
    border-radius: var(--radius-2xl);
  }

  .grid-overlay {
    background-image:
      linear-gradient(to right, rgba(15, 23, 42, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(15, 23, 42, 0.03) 1px, transparent 1px);
    background-size: 32px 32px;
  }

  .text-balance {
    text-wrap: balance;
  }

  .text-pretty {
    text-wrap: pretty;
  }
}

@layer utilities {
  .bg-enterprise-radial {
    background:
      radial-gradient(circle at 20% 10%, rgba(254, 226, 226, 0.7), transparent 22%),
      radial-gradient(circle at 80% 0%, rgba(254, 242, 242, 0.8), transparent 24%),
      linear-gradient(to bottom right, rgba(255, 255, 255, 1), rgba(250, 250, 251, 1));
  }

  .border-gradient-red {
    position: relative;
  }

  .border-gradient-red::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgba(220, 38, 38, 0.22),
      rgba(220, 38, 38, 0.04),
      rgba(15, 23, 42, 0.06)
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .shadow-red-soft {
    box-shadow: var(--shadow-red);
  }

  .sr-only-focusable:not(:focus):not(:active) {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(220, 38, 38, 0.5) rgba(15, 23, 42, 0.06);
}

*::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

*::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.04);
}

*::-webkit-scrollbar-thumb {
  background: rgba(220, 38, 38, 0.45);
  border-radius: 999px;
}

*::-webkit-scrollbar-thumb:hover {
  background: rgba(220, 38, 38, 0.65);
}
```

---

# File 4 — `src/app/layout.tsx`

## Code

```tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [...siteConfig.seo.keywords],
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Open Graph Image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.ogImage],
    creator: "@uzyntra",
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
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          inter.variable,
          "min-h-screen bg-white text-slate-950 antialiased",
        ].join(" ")}
      >
        <a
          href="#main-content"
          className="sr-only-focusable fixed left-4 top-4 z-[100] rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-950 shadow-md"
        >
          Skip to content
        </a>

        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
```

---

# File 5 — `src/app/page.tsx`

## Code

```tsx
import Link from "next/link";

import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <main id="main-content" className="relative">
      <section className="bg-enterprise-radial section-shell">
        <div className="container-shell">
          <div className="surface-card-strong border-gradient-red relative overflow-hidden px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="grid-overlay absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent" />

            <div className="relative z-10 max-w-4xl">
              <span className="eyebrow">
                Enterprise Security • Software • Blockchain
              </span>

              <h1 className="mt-6 text-balance font-semibold text-slate-950">
                {siteConfig.tagline}
              </h1>

              <p className="mt-6 max-w-3xl text-base text-slate-600 sm:text-lg">
                {siteConfig.description}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={siteConfig.nav.services}
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Explore Services
                </Link>

                <Link
                  href={siteConfig.nav.products}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-red-200 hover:bg-red-50"
                >
                  View Products
                </Link>

                <Link
                  href={siteConfig.nav.download}
                  className="inline-flex items-center justify-center rounded-xl border border-red-200 bg-red-50 px-6 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-100"
                >
                  Download API Firewall
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-slate-950">Cybersecurity</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Enterprise protection, detection, architecture review, and security operations support.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-slate-950">Software Development</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Secure software engineering with modern stacks, scalable systems, and production-focused delivery.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-slate-950">Blockchain</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Blockchain platforms, smart contracts, dApps, infrastructure, and consulting for modern enterprises.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="surface-card p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-700">
                Platform Direction
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                A platform and services company with product-led momentum
              </h2>
              <p className="mt-4 text-slate-600">
                UZYNTRA Security combines product development and enterprise service delivery.
                The ecosystem starts with the UZYNTRA API Firewall and expands through secure
                software engineering, blockchain systems, and cybersecurity capabilities built
                for real operational environments.
              </p>
            </div>

            <div className="surface-card p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-700">
                Foundation Check
              </p>
              <ul className="mt-5 space-y-4 text-sm text-slate-600">
                <li>• App Router structure initialized</li>
                <li>• TypeScript foundation in place</li>
                <li>• SEO root metadata configured</li>
                <li>• Enterprise global theme variables configured</li>
                <li>• Utility helpers ready for component expansion</li>
                <li>• Ready for Phase 02 design system implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
```

---

# Validation Checklist

Run:

```bash
npm run dev
```

Then verify:

- app starts without TypeScript errors
- homepage loads
- focus states work
- metadata exists
- enterprise white/red visual style is visible
- card surfaces and spacing feel polished

---

# Phase 01 Completion Criteria

Phase 01 is complete when:

- `site.ts` exists and is used
- `utils.ts` exists
- `globals.css` contains theme tokens and baseline styles
- `layout.tsx` defines metadata and root shell
- `page.tsx` renders a credible starter page
- local development runs without errors

---

# Next Phase Handoff

## Phase 02 — Design System and Branding

Next, build reusable:

- buttons
- section headings
- cards
- badges
- spacing rules
- enterprise visual patterns

Then the rest of the website can be assembled on top of a proper design system.

---

## End of Phase 01
