# Phase 09 — Animations and Custom Cursor System (Premium UX Layer)

## Objective

Enhance the entire UZYNTRA Security website with:

- **Framer Motion powered animations**
- **Premium reveal transitions**
- **Micro-interactions**
- **Custom cursor (dot + ring + glow)**
- **Desktop-only UX enhancements**

This phase transforms the site from static → **enterprise-grade interactive experience**.

---

# Key Principles

- Smooth, not flashy
- Subtle motion
- Performance-first
- No animation overload
- Disable heavy effects on mobile

---

# Dependencies

Install Framer Motion:

```bash
npm install framer-motion
```

---

# Folder Structure

```txt
src/
├── components/
│   ├── motion/
│   │   ├── fade-in.tsx
│   │   ├── slide-up.tsx
│   │   └── stagger.tsx
│   │
│   └── cursor/
│       └── custom-cursor.tsx
```

---

# 1 — Fade In Animation

## File: `src/components/motion/fade-in.tsx`

```tsx
"use client";

import { motion } from "framer-motion";

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
```

---

# 2 — Slide Up Animation

## File: `src/components/motion/slide-up.tsx`

```tsx
"use client";

import { motion } from "framer-motion";

export function SlideUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
```

---

# 3 — Stagger Animation

## File: `src/components/motion/stagger.tsx`

```tsx
"use client";

import { motion } from "framer-motion";

export function Stagger({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
```

---

# 4 — Custom Cursor System

## File: `src/components/cursor/custom-cursor.tsx`

```tsx
"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setIsDesktop(!isMobile);

    if (isMobile) return;

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      {/* Dot */}
      <div
        className="fixed z-[9999] pointer-events-none w-2 h-2 bg-red-600 rounded-full"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />

      {/* Ring */}
      <div
        className="fixed z-[9998] pointer-events-none w-8 h-8 border border-red-500 rounded-full transition-all duration-150"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        }}
      />
    </>
  );
}
```

---

# 5 — Add Cursor to Layout

## File: `src/app/layout.tsx`

```tsx
import { CustomCursor } from "@/components/cursor/custom-cursor";
```

Inside `<body>`:

```tsx
<CustomCursor />
```

---

# 6 — Apply Animations to Sections

## Example Usage

### Hero Section

```tsx
import { FadeIn } from "@/components/motion/fade-in";

<FadeIn>
  <h1>Cybersecurity Platform</h1>
</FadeIn>
```

---

### Cards Grid

```tsx
import { Stagger, StaggerItem } from "@/components/motion/stagger";

<Stagger>
  <div className="grid md:grid-cols-3 gap-6">
    <StaggerItem><Card /></StaggerItem>
    <StaggerItem><Card /></StaggerItem>
    <StaggerItem><Card /></StaggerItem>
  </div>
</Stagger>
```

---

# 7 — Hover Micro-interactions

Update cards:

```tsx
<div className="surface-card p-6 transition duration-300 hover:shadow-xl hover:-translate-y-1">
```

---

# 8 — Performance Rules

### Always:

- use `viewport={{ once: true }}`
- keep duration ≤ 0.6s
- avoid heavy transforms

### Never:

- animate everything
- use infinite loops
- degrade performance

---

# 9 — Accessibility Consideration

Add reduced motion support later:

```tsx
const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

---

# Validation Checklist

- animations smooth
- no lag
- cursor only on desktop
- no layout shift
- mobile unaffected

---

# Phase 09 Completion Criteria

- animations implemented
- cursor working
- motion applied to sections
- performance maintained

---

# Next Phase

## Phase 10 — SEO + Metadata + Production Optimization

---

## End of Phase 09
