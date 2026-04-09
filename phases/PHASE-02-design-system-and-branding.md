# Phase 02 — Design System and Branding

## Objective

Build a **production-grade enterprise design system** for UZYNTRA Security.

This phase transforms the raw foundation (Phase 01) into a **reusable UI system** that will power:

- Navbar
- Footer
- Homepage sections
- Services pages
- Product pages
- Contact forms
- Future dashboards

This is NOT just styling — this is a **systemized UI architecture**.

---

## Design Philosophy

### Core Principles

- **Enterprise-first** (not startup flashy)
- **High contrast** (white + red + dark text)
- **Structured layout**
- **Consistent spacing**
- **Reusable components**
- **Subtle but premium interactions**
- **Minimal visual noise**

---

## Color System

### Primary Palette

| Token | Value | Usage |
|------|------|------|
| Primary | Red-600 | CTAs, highlights |
| Primary Hover | Red-700 | Hover states |
| Background | White | Base UI |
| Text | Slate-950 | Headings |
| Muted | Slate-600 | Body text |
| Border | Slate-200 | Cards & separators |

---

## Typography System

### Scale

| Element | Size |
|--------|------|
| H1 | 48–80px |
| H2 | 32–56px |
| H3 | 22–32px |
| Body | 16–18px |
| Small | 12–14px |

### Rules

- Headings: **bold, tight tracking**
- Paragraphs: **relaxed line height**
- Avoid overly thin fonts

---

## Spacing System

```txt
XS → 4px
SM → 8px
MD → 16px
LG → 24px
XL → 32px
2XL → 48px
3XL → 64px+
```

Use Tailwind scale consistently.

---

# Components Implementation

---

# 1 — Button Component

## File: `src/components/ui/button.tsx`

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition",
        {
          "bg-red-600 text-white hover:bg-red-700":
            variant === "primary",

          "bg-white border border-slate-200 text-slate-900 hover:bg-slate-50":
            variant === "secondary",

          "border border-red-200 text-red-700 hover:bg-red-50":
            variant === "outline",

          "text-slate-700 hover:bg-slate-100":
            variant === "ghost",
        },
        className
      )}
      {...props}
    />
  );
}
```

---

# 2 — Section Heading Component

## File: `src/components/ui/section-heading.tsx`

```tsx
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "left",
}: Props) {
  return (
    <div
      className={cn("max-w-3xl", {
        "text-center mx-auto": align === "center",
      })}
    >
      {eyebrow && (
        <p className="eyebrow mb-3">{eyebrow}</p>
      )}

      <h2 className="text-slate-950 font-semibold">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
```

---

# 3 — Card Component

## File: `src/components/ui/card.tsx`

```tsx
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "surface-card p-6 transition hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
```

---

# 4 — Badge / Eyebrow Enhancement

Already defined in CSS → `.eyebrow`

Use it consistently across:
- sections
- product labels
- categories

---

# Layout Rules

## Section Pattern

```tsx
<section className="section-shell">
  <div className="container-shell">
    {/* content */}
  </div>
</section>
```

---

## Grid Patterns

### 3 Column

```tsx
grid gap-6 md:grid-cols-3
```

### 2 Column

```tsx
grid gap-8 lg:grid-cols-2
```

---

# Interaction Design

## Hover Rules

- Subtle elevation
- Color shift (red → darker red)
- No aggressive animations

---

## Focus Rules

Already defined in Phase 01:
- visible outline
- accessibility compliant

---

# Design Consistency Rules

### Always:

- use `container-shell`
- use `section-shell`
- use `surface-card`
- use tokens (no random colors)
- keep spacing consistent

### Never:

- mix random Tailwind spacing
- use neon colors
- create one-off styles
- break visual rhythm

---

# Example Usage

```tsx
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

export default function Example() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Example"
          title="Reusable Design System"
          description="This demonstrates the design system usage."
          align="center"
        />

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Card>
            <h3>Card Title</h3>
            <p className="mt-2 text-sm">
              Card content goes here.
            </p>
          </Card>

          <Card>
            <h3>Card Title</h3>
            <p className="mt-2 text-sm">
              Card content goes here.
            </p>
          </Card>

          <Card>
            <h3>Card Title</h3>
            <p className="mt-2 text-sm">
              Card content goes here.
            </p>
          </Card>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>
    </section>
  );
}
```

---

# Validation Checklist

- Buttons render correctly
- Variants work
- Section headings align properly
- Cards have consistent spacing
- No visual inconsistency
- Hover states feel premium

---

# Phase 02 Completion Criteria

- Button component implemented
- Section heading component implemented
- Card component implemented
- Consistent spacing rules applied
- No design randomness
- Components reusable across pages

---

# Next Phase

## Phase 03 — Navbar + Footer + Navigation System

- Desktop navbar
- Mobile navigation
- Dropdown menus
- Footer layout
- Social links
- Sticky header behavior

---

## End of Phase 02
