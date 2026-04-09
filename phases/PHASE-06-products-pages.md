# Phase 06 — Products Pages (API Firewall + UI Dashboard)

## Objective

Build **enterprise-grade product pages** for:

1. UZYNTRA API Firewall (flagship)
2. UZYNTRA UI Dashboard

This phase includes:

- detailed product architecture
- real-world enterprise copy
- screenshot integration guide
- GitHub + download integration
- visual system for product showcase

---

# Routes

```
/products
/products/uzyntra-api-firewall
```

---

# Folder Structure

```
src/app/products/page.tsx
src/app/products/uzyntra-api-firewall/page.tsx

public/images/products/
```

---

# IMAGE SYSTEM (IMPORTANT)

## Folder

```
public/images/products/
```

## Naming Convention

```
api-firewall-hero.png
api-firewall-dashboard.png
api-firewall-logs.png
api-firewall-rules.png

ui-dashboard-overview.png
ui-dashboard-analytics.png
```

---

# HOW TO TAKE SCREENSHOTS (VERY IMPORTANT)

## 1 — API FIREWALL TERMINAL

Run your firewall:

```
cargo run
```

Then capture:

- startup logs
- request logs
- security events

Use:

- dark terminal theme
- high contrast
- full width window

SAVE AS:
```
api-firewall-logs.png
```

---

## 2 — CURL TESTING SCREENSHOT

Example:

```
curl http://127.0.0.1:8080/healthz
```

Capture:
- request
- response
- headers

SAVE AS:
```
api-firewall-terminal.png
```

---

## 3 — UI DASHBOARD SCREENSHOT

Run your UI:

```
npm run dev
```

Open:
```
http://localhost:3000
```

Capture:

- dashboard overview
- charts
- analytics panels

SAVE AS:
```
ui-dashboard-overview.png
```

---

## 4 — CLEANUP RULES

- crop properly
- no personal data
- no clutter
- keep consistent aspect ratio (16:9)

---

# PRODUCTS INDEX PAGE

## File: src/app/products/page.tsx

```tsx
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="section-shell">
      <div className="container-shell text-center">
        <h1>Products</h1>
        <p className="mt-4 text-slate-600">
          Enterprise security products built by UZYNTRA.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <Link href="/products/uzyntra-api-firewall" className="surface-card p-6">
            <h3>UZYNTRA API Firewall</h3>
            <p className="mt-2 text-sm">Real-time API protection</p>
          </Link>

          <div className="surface-card p-6 opacity-60">
            <h3>UZYNTRA UI Dashboard</h3>
            <p className="mt-2 text-sm">Monitoring & analytics</p>
            <p className="mt-2 text-xs">Integrated with firewall</p>
          </div>
        </div>
      </div>
    </main>
  );
}
```

---

# API FIREWALL PRODUCT PAGE

## File: src/app/products/uzyntra-api-firewall/page.tsx

```tsx
import Image from "next/image";
import Link from "next/link";

export default function FirewallPage() {
  return (
    <main>

      {/* HERO */}
      <section className="section-shell">
        <div className="container-shell grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <h1>UZYNTRA API Firewall</h1>

            <p className="mt-4 text-slate-600">
              A high-performance Rust-based API security layer designed to
              protect, monitor, and control API traffic in real-time.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">
              <a
                href="https://github.com/UsamaMatrix/uzyntra-api-firewall/releases/latest"
                className="bg-red-600 text-white px-6 py-3 rounded-xl"
              >
                Download
              </a>

              <a
                href="https://github.com/UsamaMatrix/uzyntra-api-firewall"
                className="border px-6 py-3 rounded-xl"
              >
                GitHub
              </a>
            </div>
          </div>

          <Image
            src="/images/products/api-firewall-hero.png"
            alt="API Firewall"
            width={800}
            height={500}
          />

        </div>
      </section>

      {/* FEATURES */}
      <section className="section-shell bg-slate-50">
        <div className="container-shell grid md:grid-cols-3 gap-6">

          <div className="surface-card p-6">
            <h3>Real-Time Inspection</h3>
            <p className="mt-2 text-sm">
              Deep request inspection with detection engine.
            </p>
          </div>

          <div className="surface-card p-6">
            <h3>Threat Detection</h3>
            <p className="mt-2 text-sm">
              SQLi, XSS, rate abuse, anomaly detection.
            </p>
          </div>

          <div className="surface-card p-6">
            <h3>Mitigation Engine</h3>
            <p className="mt-2 text-sm">
              Automatic blocking and reputation tracking.
            </p>
          </div>

        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="section-shell">
        <div className="container-shell">
          <h2>Architecture</h2>

          <div className="mt-6 surface-card p-6">
            <p className="text-sm text-slate-600">
              Client → API → Firewall → Backend
            </p>

            <p className="mt-4 text-sm text-slate-600">
              The firewall sits between clients and backend services,
              analyzing every request before forwarding.
            </p>
          </div>
        </div>
      </section>

      {/* DASHBOARD RELATION */}
      <section className="section-shell">
        <div className="container-shell grid lg:grid-cols-2 gap-10">

          <Image
            src="/images/products/ui-dashboard-overview.png"
            alt="Dashboard"
            width={800}
            height={500}
          />

          <div>
            <h2>UZYNTRA UI Dashboard</h2>
            <p className="mt-4 text-slate-600">
              Visualize logs, threats, and system metrics in real-time.
            </p>
          </div>

        </div>
      </section>

      {/* USE CASES */}
      <section className="section-shell bg-slate-50">
        <div className="container-shell grid md:grid-cols-2 gap-6">

          <div className="surface-card p-6">
            <h3>API Protection</h3>
          </div>

          <div className="surface-card p-6">
            <h3>Zero Trust Systems</h3>
          </div>

          <div className="surface-card p-6">
            <h3>Microservices Security</h3>
          </div>

          <div className="surface-card p-6">
            <h3>SaaS Platforms</h3>
          </div>

        </div>
      </section>

    </main>
  );
}
```

---

# IMAGE PROMPTS (SORA)

## FIREWALL HERO

```
Ultra-realistic API security system visualization, enterprise server environment, red and white interface dashboards, clean corporate look, no cyberpunk, 16:9
```

---

## DASHBOARD SCREEN

```
Modern cybersecurity dashboard with analytics charts, logs, metrics panels, red white UI, clean SaaS interface, professional environment, 16:9
```

---

# Phase 06 Completion Criteria

- product pages created
- API firewall page detailed
- screenshots integrated
- GitHub links working
- UI consistent

---

# Next Phase

## Phase 07 — Contact Page + Forms + Validation

---

## End of Phase 06
