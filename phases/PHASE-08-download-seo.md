# Phase 08 — Download Page + GitHub Integration + SEO (Enterprise Ready)

## Objective

Implement a **production-grade download experience** + **GitHub integration** + **SEO system**.

This phase ensures:

- Users can download products easily
- GitHub repos are integrated cleanly
- Pages are SEO-optimized (metadata, OpenGraph)
- Site is ready for indexing and sharing

---

# Routes

```
/download
/privacy-policy
/terms
/responsible-disclosure
```

---

# Folder Structure

```
src/app/download/page.tsx
src/app/privacy-policy/page.tsx
src/app/terms/page.tsx
src/app/responsible-disclosure/page.tsx

src/config/seo.ts
```

---

# 1 — SEO CONFIG SYSTEM

## File: `src/config/seo.ts`

```ts
export const seoConfig = {
  siteName: "UZYNTRA Security",
  siteUrl: "https://uzyntra.com",
  description:
    "Enterprise cybersecurity, blockchain, and secure software engineering platform.",
  keywords: [
    "API Security",
    "Cybersecurity",
    "Rust Backend",
    "API Firewall",
    "Blockchain",
  ],
  author: "UZYNTRA Security",
};
```

---

# 2 — GLOBAL METADATA

## Update: `src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { seoConfig } from "@/config/seo";

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: seoConfig.siteName,
    template: `%s | ${seoConfig.siteName}`,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  openGraph: {
    title: seoConfig.siteName,
    description: seoConfig.description,
    url: seoConfig.siteUrl,
    siteName: seoConfig.siteName,
    type: "website",
  },
};
```

---

# 3 — DOWNLOAD PAGE

## File: `src/app/download/page.tsx`

```tsx
export default function DownloadPage() {
  return (
    <main className="section-shell">
      <div className="container-shell max-w-3xl mx-auto text-center">

        <h1>Download UZYNTRA API Firewall</h1>

        <p className="mt-4 text-slate-600">
          Get the latest version of our enterprise API firewall and start securing your APIs.
        </p>

        <div className="mt-8 flex flex-col gap-4">

          <a
            href="https://github.com/UsamaMatrix/uzyntra-api-firewall/releases/latest"
            className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Download Latest Release
          </a>

          <a
            href="https://github.com/UsamaMatrix/uzyntra-api-firewall"
            className="border px-6 py-3 rounded-xl font-semibold"
          >
            View Firewall Repository
          </a>

          <a
            href="https://github.com/UsamaMatrix/uzyntra-ui"
            className="border px-6 py-3 rounded-xl font-semibold"
          >
            View UI Dashboard Repository
          </a>

        </div>

      </div>
    </main>
  );
}
```

---

# 4 — PRIVACY POLICY PAGE

## File: `src/app/privacy-policy/page.tsx`

```tsx
export default function PrivacyPage() {
  return (
    <main className="section-shell">
      <div className="container-shell max-w-3xl mx-auto">
        <h1>Privacy Policy</h1>

        <p className="mt-4 text-slate-600">
          UZYNTRA Security respects your privacy. We do not collect unnecessary data.
        </p>
      </div>
    </main>
  );
}
```

---

# 5 — TERMS PAGE

## File: `src/app/terms/page.tsx`

```tsx
export default function TermsPage() {
  return (
    <main className="section-shell">
      <div className="container-shell max-w-3xl mx-auto">
        <h1>Terms & Conditions</h1>

        <p className="mt-4 text-slate-600">
          Use of UZYNTRA products must comply with applicable laws.
        </p>
      </div>
    </main>
  );
}
```

---

# 6 — RESPONSIBLE DISCLOSURE

## File: `src/app/responsible-disclosure/page.tsx`

```tsx
export default function DisclosurePage() {
  return (
    <main className="section-shell">
      <div className="container-shell max-w-3xl mx-auto">
        <h1>Responsible Disclosure</h1>

        <p className="mt-4 text-slate-600">
          If you find a vulnerability, please report it responsibly to our team.
        </p>
      </div>
    </main>
  );
}
```

---

# 7 — SEO BEST PRACTICES

## Must Follow:

- Each page has unique title + description
- Use semantic headings (h1, h2)
- Use alt tags for images
- Keep URLs clean
- Use internal linking

---

# 8 — FUTURE SEO (OPTIONAL)

Later you can add:

- sitemap.xml
- robots.txt
- structured data (JSON-LD)
- blog system

---

# Phase 08 Completion Criteria

- download page working
- GitHub links integrated
- SEO metadata configured
- legal pages created
- site ready for indexing

---

# Next Phase

## Phase 09 — Contact Page + Form + Backend Integration

---

## End of Phase 08
