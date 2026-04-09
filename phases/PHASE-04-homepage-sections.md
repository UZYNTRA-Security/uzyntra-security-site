# Phase 04 — Homepage Sections (Enterprise Landing Page)

## Objective

Build the **full premium homepage** for UZYNTRA Security using:

- reusable components from Phase 02
- global layout from Phase 03
- enterprise-grade UI/UX structure

This phase replaces the temporary homepage with a **production-ready landing page**.

---

## Homepage Sections Overview

1. Hero Section  
2. Platform Section  
3. Services Preview  
4. Product Highlight  
5. Why Choose Us  
6. CTA Section  

---

## Files Covered

```txt
src/
├── app/
│   └── page.tsx
│
├── components/
│   └── sections/
│       ├── hero-section.tsx
│       ├── platform-section.tsx
│       ├── services-preview-section.tsx
│       ├── product-highlight-section.tsx
│       ├── why-choose-us-section.tsx
│       └── cta-section.tsx
```

---

# 1 — Hero Section

## File: `src/components/sections/hero-section.tsx`

```tsx
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="section-shell bg-enterprise-radial">
      <div className="container-shell text-center">
        <span className="eyebrow">Enterprise Platform</span>

        <h1 className="mt-6 text-balance font-semibold">
          {siteConfig.tagline}
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-slate-600">
          {siteConfig.description}
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link href="/services" className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700">
            Explore Services
          </Link>

          <Link href="/products" className="border px-6 py-3 rounded-xl font-semibold hover:bg-red-50">
            View Products
          </Link>

          <Link href="/download" className="border border-red-200 text-red-700 px-6 py-3 rounded-xl font-semibold hover:bg-red-50">
            Download API Firewall
          </Link>
        </div>
      </div>
    </section>
  );
}
```

---

# 2 — Platform Section

## File: `src/components/sections/platform-section.tsx`

```tsx
export function PlatformSection() {
  return (
    <section className="section-shell">
      <div className="container-shell grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-semibold">
            A Unified Security & Development Platform
          </h2>

          <p className="mt-4 text-slate-600">
            UZYNTRA Security is not just a service provider — it is a platform
            combining cybersecurity, secure development, and blockchain systems.
          </p>
        </div>

        <div className="surface-card p-6">
          <ul className="space-y-4 text-sm text-slate-600">
            <li>• UZYNTRA API Firewall</li>
            <li>• UZYNTRA UI Dashboard</li>
            <li>• Enterprise Security Services</li>
            <li>• Blockchain Infrastructure</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
```

---

# 3 — Services Preview

## File: `src/components/sections/services-preview-section.tsx`

```tsx
import { Card } from "@/components/ui/card";

export function ServicesPreviewSection() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <h2 className="text-center font-semibold">
          Core Service Areas
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Card>
            <h3>Cybersecurity</h3>
            <p className="mt-2 text-sm">
              VAPT, SOC, SIEM, IAM, Cloud Security.
            </p>
          </Card>

          <Card>
            <h3>Software Development</h3>
            <p className="mt-2 text-sm">
              Web, Mobile, Rust, DevOps, AI systems.
            </p>
          </Card>

          <Card>
            <h3>Blockchain</h3>
            <p className="mt-2 text-sm">
              Smart contracts, dApps, DeFi, infrastructure.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
```

---

# 4 — Product Highlight

## File: `src/components/sections/product-highlight-section.tsx`

```tsx
import Link from "next/link";

export function ProductHighlightSection() {
  return (
    <section className="section-shell bg-slate-50">
      <div className="container-shell grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-semibold">
            UZYNTRA API Firewall
          </h2>

          <p className="mt-4 text-slate-600">
            Enterprise-grade API protection with real-time inspection,
            threat detection, and control.
          </p>

          <div className="mt-6 flex gap-4">
            <Link href="/products/uzyntra-api-firewall" className="bg-red-600 text-white px-5 py-2 rounded-lg">
              View Product
            </Link>

            <Link href="/download" className="border px-5 py-2 rounded-lg">
              Download
            </Link>
          </div>
        </div>

        <div className="surface-card p-6">
          <p className="text-sm text-slate-600">
            UI Dashboard enables monitoring, analytics, and control.
          </p>
        </div>
      </div>
    </section>
  );
}
```

---

# 5 — Why Choose Us

## File: `src/components/sections/why-choose-us-section.tsx`

```tsx
export function WhyChooseUsSection() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <h2 className="text-center font-semibold">
          Why UZYNTRA Security
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="surface-card p-6">
            <h3>Enterprise Architecture</h3>
            <p className="mt-2 text-sm">
              Built with scalability and security in mind.
            </p>
          </div>

          <div className="surface-card p-6">
            <h3>Security-First Approach</h3>
            <p className="mt-2 text-sm">
              Every system is designed with protection at its core.
            </p>
          </div>

          <div className="surface-card p-6">
            <h3>Modern Technology Stack</h3>
            <p className="mt-2 text-sm">
              Rust, cloud-native systems, and blockchain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

# 6 — CTA Section

## File: `src/components/sections/cta-section.tsx`

```tsx
import Link from "next/link";

export function CTASection() {
  return (
    <section className="section-shell bg-red-600 text-white">
      <div className="container-shell text-center">
        <h2 className="font-semibold">
          Ready to Secure Your Systems?
        </h2>

        <p className="mt-4 text-red-100">
          Partner with UZYNTRA Security to build and protect modern systems.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link href="/contact" className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold">
            Contact Us
          </Link>

          <Link href="/download" className="border border-white px-6 py-3 rounded-xl font-semibold">
            Download Now
          </Link>
        </div>
      </div>
    </section>
  );
}
```

---

# Final Step — Update Homepage

## File: `src/app/page.tsx`

Replace entire file:

```tsx
import { HeroSection } from "@/components/sections/hero-section";
import { PlatformSection } from "@/components/sections/platform-section";
import { ServicesPreviewSection } from "@/components/sections/services-preview-section";
import { ProductHighlightSection } from "@/components/sections/product-highlight-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <PlatformSection />
      <ServicesPreviewSection />
      <ProductHighlightSection />
      <WhyChooseUsSection />
      <CTASection />
    </main>
  );
}
```

---

# Validation Checklist

- All sections render
- spacing consistent
- CTA buttons clickable
- responsive layout works
- no console errors

---

# Phase 04 Completion Criteria

- homepage fully structured
- all sections implemented
- design consistent with enterprise UI
- navigation working with homepage

---

# Next Phase

## Phase 05 — Services Pages

---

## End of Phase 04
