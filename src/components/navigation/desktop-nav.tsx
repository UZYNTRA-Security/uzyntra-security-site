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
    <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
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
                    <div className="text-sm font-semibold text-slate-950">{child.title}</div>
                    {child.description && (
                      <p className="mt-1 text-sm text-slate-600">{child.description}</p>
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
