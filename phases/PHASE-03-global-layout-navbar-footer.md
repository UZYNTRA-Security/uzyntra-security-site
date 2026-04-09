# Phase 03 — Global Layout, Navbar, Footer, and Logo Integration

## Objective

Build the **global site shell** for UZYNTRA Security, including:

- sticky enterprise navbar
- desktop navigation with dropdown menus
- mobile navigation with expandable groups
- premium footer with structured columns
- shared header/footer composition in the root layout
- logo integration paths so you can drop in your own assets without changing component logic

This phase establishes the **persistent navigational framework** used across the entire website.

---

## Important Logo Note

You said you will create the logos yourself.  
So this phase uses **fixed logo file paths** that you can match by naming your files accordingly.

## Use these exact asset locations

Place your logo files here:

```txt
public/
├── logos/
│   ├── uzyntra-logo-main.svg
│   ├── uzyntra-logo-main-dark.svg
│   ├── uzyntra-mark.svg
│   ├── uzyntra-mark-dark.svg
│   ├── uzyntra-wordmark.svg
│   └── uzyntra-wordmark-dark.svg
```

## Recommended usage

- `uzyntra-logo-main.svg`
  - primary light-background navbar/footer logo
- `uzyntra-logo-main-dark.svg`
  - optional dark variant for future dark sections
- `uzyntra-mark.svg`
  - icon-only version
- `uzyntra-mark-dark.svg`
  - icon-only dark variant
- `uzyntra-wordmark.svg`
  - text-only version if needed later
- `uzyntra-wordmark-dark.svg`
  - dark variant for text-only use

For this phase, the components will directly use:

```txt
/public/logos/uzyntra-logo-main.svg
/public/logos/uzyntra-mark.svg
```

If you name your files exactly like this and place them in the same folder, the site will pick them up automatically.

---

## Files Covered in This Phase

```txt
src/
├── app/
│   └── layout.tsx
│
├── components/
│   ├── layout/
│   │   ├── site-header.tsx
│   │   └── site-footer.tsx
│   │
│   └── navigation/
│       ├── desktop-nav.tsx
│       └── mobile-nav.tsx
│
├── data/
│   └── navigation.ts
│
└── config/
    └── site.ts
```

---

## Architecture Notes

This phase uses a clean separation of responsibilities:

### 1. `navigation.ts`
Stores navigation structure in one place.

### 2. `desktop-nav.tsx`
Handles desktop dropdown menus.

### 3. `mobile-nav.tsx`
Handles mobile menu behavior.

### 4. `site-header.tsx`
Wraps logo + desktop nav + mobile nav trigger.

### 5. `site-footer.tsx`
Provides company, services, products, legal, and social navigation.

### 6. `layout.tsx`
Injects header and footer globally.

This keeps the layout **maintainable and scalable**.

---

# File 1 — `src/data/navigation.ts`

## Purpose

Central source of truth for navigation links.

## Code

```ts
export type NavChildItem = {
  title: string;
  href: string;
  description?: string;
};

export type NavItem = {
  title: string;
  href?: string;
  children?: NavChildItem[];
};

export const mainNavigation: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    children: [
      {
        title: "Cybersecurity",
        href: "/services/cybersecurity",
        description: "Offensive, defensive, cloud, identity, and enterprise security services.",
      },
      {
        title: "Software Development",
        href: "/services/software-development",
        description: "Secure web, mobile, cloud, Rust, AI, and DevOps engineering services.",
      },
      {
        title: "Blockchain",
        href: "/services/blockchain",
        description: "Enterprise blockchain, smart contracts, dApps, infrastructure, and consulting.",
      },
    ],
  },
  {
    title: "Products",
    children: [
      {
        title: "UZYNTRA API Firewall",
        href: "/products/uzyntra-api-firewall",
        description: "Enterprise API protection, traffic inspection, and modern control layer.",
      },
      {
        title: "UZYNTRA UI Dashboard",
        href: "/products",
        description: "Operational visibility and management experience for the UZYNTRA platform.",
      },
    ],
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const footerNavigation = {
  company: [
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Download", href: "/download" },
  ],
  services: [
    { title: "Cybersecurity", href: "/services/cybersecurity" },
    { title: "Software Development", href: "/services/software-development" },
    { title: "Blockchain", href: "/services/blockchain" },
  ],
  products: [
    { title: "UZYNTRA API Firewall", href: "/products/uzyntra-api-firewall" },
    { title: "UZYNTRA UI Dashboard", href: "/products" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms", href: "/terms" },
    { title: "Responsible Disclosure", href: "/responsible-disclosure" },
  ],
  social: [
    { title: "GitHub", href: "https://github.com/UsamaMatrix" },
    { title: "LinkedIn", href: "https://www.linkedin.com" },
    { title: "X", href: "https://x.com" },
    { title: "Instagram", href: "https://www.instagram.com" },
    { title: "Facebook", href: "https://www.facebook.com" },
    { title: "Email", href: "mailto:contact@uzyntra.com" },
  ],
} as const;
```

---

# File 2 — Update `src/config/site.ts`

## Purpose

Add logo paths so all layout components use centralized asset references.

## Replace the file with this full version

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

  logos: {
    main: "/logos/uzyntra-logo-main.svg",
    mainDark: "/logos/uzyntra-logo-main-dark.svg",
    mark: "/logos/uzyntra-mark.svg",
    markDark: "/logos/uzyntra-mark-dark.svg",
    wordmark: "/logos/uzyntra-wordmark.svg",
    wordmarkDark: "/logos/uzyntra-wordmark-dark.svg",
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

# File 3 — `src/components/navigation/desktop-nav.tsx`

## Purpose

Desktop navigation with enterprise dropdown menus.

## Code

```tsx
"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/data/navigation";

interface DesktopNavProps {
  items: NavItem[];
}

export function DesktopNav({ items }: DesktopNavProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav
      className="hidden items-center gap-2 lg:flex"
      aria-label="Primary navigation"
    >
      {items.map((item) => {
        const hasChildren = !!item.children?.length;

        if (!hasChildren && item.href) {
          return (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-red-50 hover:text-red-700"
            >
              {item.title}
            </Link>
          );
        }

        return (
          <div
            key={item.title}
            className="relative"
            onMouseEnter={() => setOpenMenu(item.title)}
            onMouseLeave={() => setOpenMenu((current) => (current === item.title ? null : current))}
          >
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition",
                "hover:bg-red-50 hover:text-red-700",
                openMenu === item.title && "bg-red-50 text-red-700"
              )}
              aria-expanded={openMenu === item.title}
              aria-haspopup="menu"
            >
              {item.title}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openMenu === item.title && "rotate-180"
                )}
              />
            </button>

            <div
              className={cn(
                "absolute left-0 top-full z-50 mt-3 w-[420px] rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.14)] transition-all duration-200",
                openMenu === item.title
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-2 opacity-0"
              )}
              role="menu"
            >
              <div className="grid gap-2">
                {item.children?.map((child) => (
                  <Link
                    key={child.title}
                    href={child.href}
                    className="rounded-xl border border-transparent px-4 py-3 transition hover:border-red-100 hover:bg-red-50/70"
                    role="menuitem"
                  >
                    <div className="text-sm font-semibold text-slate-950">
                      {child.title}
                    </div>
                    {child.description && (
                      <p className="mt-1 text-sm text-slate-600">
                        {child.description}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
```

---

# File 4 — `src/components/navigation/mobile-nav.tsx`

## Purpose

Mobile navigation with:
- open/close drawer
- expandable groups
- touch-friendly interaction
- clean enterprise layout

## Code

```tsx
"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/data/navigation";

interface MobileNavProps {
  items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition hover:border-red-200 hover:bg-red-50"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div
        className={cn(
          "fixed inset-0 z-[90] bg-slate-950/40 backdrop-blur-sm transition",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        className={cn(
          "fixed right-0 top-0 z-[100] flex h-full w-full max-w-sm flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-700">
              Navigation
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Explore UZYNTRA Security
            </p>
          </div>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition hover:border-red-200 hover:bg-red-50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="space-y-2">
            {items.map((item) => {
              const hasChildren = !!item.children?.length;

              if (!hasChildren && item.href) {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-red-50 hover:text-red-700"
                  >
                    {item.title}
                  </Link>
                );
              }

              const isExpanded = expandedItem === item.title;

              return (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-slate-900"
                    onClick={() =>
                      setExpandedItem((current) =>
                        current === item.title ? null : item.title
                      )
                    }
                    aria-expanded={isExpanded}
                  >
                    {item.title}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        isExpanded && "rotate-180"
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-200",
                      isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-1 border-t border-slate-200 px-2 py-2">
                        {item.children?.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-xl px-3 py-3 transition hover:bg-red-50"
                          >
                            <div className="text-sm font-semibold text-slate-900">
                              {child.title}
                            </div>
                            {child.description && (
                              <p className="mt-1 text-xs leading-6 text-slate-600">
                                {child.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-t border-slate-200 px-5 py-4">
          <Link
            href="/download"
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Download API Firewall
          </Link>
        </div>
      </div>
    </div>
  );
}
```

---

# File 5 — `src/components/layout/site-header.tsx`

## Purpose

Production-ready header with:
- logo
- desktop nav
- mobile nav
- sticky style
- premium enterprise shell

## Code

```tsx
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { mainNavigation } from "@/data/navigation";
import { DesktopNav } from "@/components/navigation/desktop-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container-shell">
        <div className="flex h-[var(--header-height)] items-center justify-between gap-6">
          <Link
            href="/"
            className="group inline-flex shrink-0 items-center gap-3"
            aria-label="UZYNTRA Security home"
          >
            <span className="relative h-10 w-[164px] overflow-hidden">
              <Image
                src={siteConfig.logos.main}
                alt="UZYNTRA Security"
                fill
                priority
                className="object-contain object-left transition duration-300 group-hover:scale-[1.02]"
                sizes="164px"
              />
            </span>
          </Link>

          <DesktopNav items={mainNavigation} />

          <div className="flex items-center gap-3">
            <Link
              href="/download"
              className="hidden rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 lg:inline-flex"
            >
              Download
            </Link>

            <MobileNav items={mainNavigation} />
          </div>
        </div>
      </div>
    </header>
  );
}
```

---

# File 6 — `src/components/layout/site-footer.tsx`

## Purpose

Enterprise footer with structured columns.

## Code

```tsx
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/data/navigation";

type FooterGroupProps = {
  title: string;
  links: readonly {
    title: string;
    href: string;
  }[];
};

function FooterGroup({ title, links }: FooterGroupProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-950">
        {title}
      </h3>

      <ul className="mt-4 space-y-3">
        {links.map((link) => {
          const isExternal =
            link.href.startsWith("http://") ||
            link.href.startsWith("https://") ||
            link.href.startsWith("mailto:");

          return (
            <li key={link.title}>
              <Link
                href={link.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="text-sm text-slate-600 transition hover:text-red-700"
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="UZYNTRA Security home"
            >
              <span className="relative h-10 w-[164px] overflow-hidden">
                <Image
                  src={siteConfig.logos.main}
                  alt="UZYNTRA Security"
                  fill
                  className="object-contain object-left"
                  sizes="164px"
                />
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              {siteConfig.description}
            </p>

            <p className="mt-5 text-sm font-medium text-slate-950">
              {siteConfig.email}
            </p>
          </div>

          <FooterGroup title="Company" links={footerNavigation.company} />
          <FooterGroup title="Services" links={footerNavigation.services} />
          <FooterGroup title="Products" links={footerNavigation.products} />
          <FooterGroup title="Legal" links={footerNavigation.legal} />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {footerNavigation.social.map((link) => {
              const isExternal =
                link.href.startsWith("http://") ||
                link.href.startsWith("https://") ||
                link.href.startsWith("mailto:");

              return (
                <Link
                  key={link.title}
                  href={link.href}
                  {...(isExternal
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="text-sm text-slate-600 transition hover:text-red-700"
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

# File 7 — Update `src/app/layout.tsx`

## Purpose

Inject the site header and footer globally.

## Replace the full file with this

```tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

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
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
```

---

# Optional Improvement — Add Header Shadow State Later

For now the header is always sticky with backdrop blur.  
In a later animation phase, you can add scroll-detected shadow intensity.

---

# Logo Placement Instructions

Create this exact folder locally:

```txt
public/logos
```

Then put your exported logo files there using these exact names:

```txt
uzyntra-logo-main.svg
uzyntra-logo-main-dark.svg
uzyntra-mark.svg
uzyntra-mark-dark.svg
uzyntra-wordmark.svg
uzyntra-wordmark-dark.svg
```

### Minimum required for this phase

Only these two are actually required immediately:

```txt
public/logos/uzyntra-logo-main.svg
public/logos/uzyntra-mark.svg
```

That is enough for the current header and footer.

---

# Validation Checklist

Run:

```bash
npm run dev
```

Then verify:

## Header
- sticky header appears on every page
- logo renders correctly
- desktop nav appears on large screens
- dropdown menus open on hover
- download CTA appears on desktop

## Mobile
- hamburger icon visible on mobile/tablet
- drawer opens/closes smoothly
- grouped links expand correctly
- body scroll locks when menu is open

## Footer
- logo renders
- columns appear correctly
- legal links visible
- social links visible
- copyright line correct

---

# Production Notes

## 1. Why `Image` is used for logos
Using Next Image keeps rendering optimized and consistent, especially if later you switch from SVG to PNG/WebP.

## 2. Why navigation is config-driven
This avoids duplicating links across header, mobile menu, and footer.

## 3. Why dropdown content includes descriptions
This makes the site feel more enterprise-grade and helps visitors understand service/product categories quickly.

## 4. Why mobile nav is a slide-in panel
It feels more premium and controlled than a simple collapsed list.

---

# Phase 03 Completion Criteria

This phase is complete when:

- global header is rendered from layout
- global footer is rendered from layout
- desktop nav works
- mobile nav works
- dropdown menus work
- logo paths are configured
- your own logo files can be dropped into `public/logos`

---

# Next Phase Handoff

## Phase 04 — Homepage Sections

Next phase will build the real homepage:

- premium hero
- platform ecosystem section
- services preview
- interactive product highlight
- why choose us
- CTA block

That phase will replace the basic starter homepage with the real enterprise landing experience.

---

## End of Phase 03
