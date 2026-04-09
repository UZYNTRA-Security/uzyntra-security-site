# Phase 05 — Services Pages (Enterprise-Level Content + Visual Prompts)

## Objective

Build **fully detailed, production-grade service pages** with:

- enterprise-level copywriting
- structured layouts
- reusable components
- image placeholders + Sora prompts

---

## Routes Covered

```
/services
/services/cybersecurity
/services/software-development
/services/blockchain
```

---

# Folder Structure

```
src/app/services/page.tsx
src/app/services/cybersecurity/page.tsx
src/app/services/software-development/page.tsx
src/app/services/blockchain/page.tsx
```

---

# IMAGE SYSTEM (IMPORTANT)

## Folder

```
public/images/services/
```

## Naming Convention

```
cybersecurity-hero.png
software-hero.png
blockchain-hero.png
cybersecurity-grid-1.png
software-grid-1.png
blockchain-grid-1.png
```

---

# SORA IMAGE PROMPTS

## Style Rules

- ratio: 1:1 OR 16:9
- ultra realistic
- corporate environment
- no cyberpunk
- red + white + clean theme
- enterprise mood

---

## CYBERSECURITY HERO PROMPT

```
Ultra-realistic enterprise cybersecurity operations center, modern SOC analysts working on multiple large screens showing threat detection dashboards, red and white UI accents, clean corporate lighting, high-end office, no neon cyberpunk, sharp and professional, 16:9
```

---

## SOFTWARE HERO PROMPT

```
Modern software engineering team working on laptops in a premium office, large screens displaying code (Rust, APIs), clean UI, minimalistic environment, white and red accents, professional lighting, 16:9
```

---

## BLOCKCHAIN HERO PROMPT

```
Enterprise blockchain infrastructure visualization, abstract but realistic server systems connected with digital nodes, clean white and red color palette, professional tech environment, not futuristic neon, 16:9
```

---

# SERVICES INDEX PAGE

## File: src/app/services/page.tsx

```tsx
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="section-shell">
      <div className="container-shell text-center">
        <h1>Enterprise Services</h1>
        <p className="mt-4 text-slate-600">
          UZYNTRA delivers cybersecurity, software engineering, and blockchain solutions.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Link href="/services/cybersecurity" className="surface-card p-6">Cybersecurity</Link>
          <Link href="/services/software-development" className="surface-card p-6">Software Development</Link>
          <Link href="/services/blockchain" className="surface-card p-6">Blockchain</Link>
        </div>
      </div>
    </main>
  );
}
```

---

# CYBERSECURITY PAGE

## File: src/app/services/cybersecurity/page.tsx

```tsx
import Image from "next/image";

export default function CybersecurityPage() {
  return (
    <main>
      <section className="section-shell">
        <div className="container-shell grid lg:grid-cols-2 gap-10">
          <div>
            <h1>Cybersecurity Services</h1>
            <p className="mt-4 text-slate-600">
              Enterprise-grade protection covering infrastructure, applications, and APIs.
            </p>
          </div>

          <Image
            src="/images/services/cybersecurity-hero.png"
            alt="Cybersecurity"
            width={800}
            height={500}
          />
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell grid md:grid-cols-2 gap-6">
          <div className="surface-card p-6">
            <h3>VAPT</h3>
            <p>Comprehensive vulnerability assessment and penetration testing.</p>
          </div>

          <div className="surface-card p-6">
            <h3>SOC as a Service</h3>
            <p>24/7 monitoring and incident response.</p>
          </div>

          <div className="surface-card p-6">
            <h3>SIEM</h3>
            <p>Centralized logging and threat correlation.</p>
          </div>

          <div className="surface-card p-6">
            <h3>IAM</h3>
            <p>Identity and access control systems.</p>
          </div>

          <div className="surface-card p-6">
            <h3>Cloud Security</h3>
            <p>Secure cloud architecture and compliance.</p>
          </div>

          <div className="surface-card p-6">
            <h3>MDR</h3>
            <p>Managed detection and response services.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
```

---

# SOFTWARE DEVELOPMENT PAGE

## File: src/app/services/software-development/page.tsx

```tsx
import Image from "next/image";

export default function SoftwarePage() {
  return (
    <main>
      <section className="section-shell">
        <div className="container-shell grid lg:grid-cols-2 gap-10">
          <div>
            <h1>Software Development</h1>
            <p className="mt-4 text-slate-600">
              Secure, scalable, and modern software engineering solutions.
            </p>
          </div>

          <Image
            src="/images/services/software-hero.png"
            alt="Software"
            width={800}
            height={500}
          />
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell grid md:grid-cols-2 gap-6">
          <div className="surface-card p-6"><h3>Rust Backend</h3></div>
          <div className="surface-card p-6"><h3>Web Apps</h3></div>
          <div className="surface-card p-6"><h3>Mobile Apps</h3></div>
          <div className="surface-card p-6"><h3>DevOps</h3></div>
          <div className="surface-card p-6"><h3>AI Systems</h3></div>
        </div>
      </section>
    </main>
  );
}
```

---

# BLOCKCHAIN PAGE

## File: src/app/services/blockchain/page.tsx

```tsx
import Image from "next/image";

export default function BlockchainPage() {
  return (
    <main>
      <section className="section-shell">
        <div className="container-shell grid lg:grid-cols-2 gap-10">
          <div>
            <h1>Blockchain Services</h1>
            <p className="mt-4 text-slate-600">
              Enterprise blockchain systems and decentralized solutions.
            </p>
          </div>

          <Image
            src="/images/services/blockchain-hero.png"
            alt="Blockchain"
            width={800}
            height={500}
          />
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell grid md:grid-cols-2 gap-6">
          <div className="surface-card p-6"><h3>Smart Contracts</h3></div>
          <div className="surface-card p-6"><h3>dApps</h3></div>
          <div className="surface-card p-6"><h3>DeFi</h3></div>
          <div className="surface-card p-6"><h3>Token Development</h3></div>
          <div className="surface-card p-6"><h3>Node Infrastructure</h3></div>
          <div className="surface-card p-6"><h3>Blockchain Audits</h3></div>
        </div>
      </section>
    </main>
  );
}
```

---

# Phase 05 Completion Criteria

- All service pages created
- Content added (enterprise-level)
- Images placeholders added
- Sora prompts defined
- Clean UI maintained

---

# Next Phase

## Phase 06 — Products Pages + API Firewall Deep Page

---

## End of Phase 05
