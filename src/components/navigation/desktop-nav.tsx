"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/data/navigation";

interface DesktopNavProps {
  items: NavItem[];
}

export function DesktopNav({ items }: DesktopNavProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
      {items.map((item) => {
        const hasChildren = !!item.children?.length;
        const isActive = item.href
          ? item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
          : item.children?.some((c) => pathname.startsWith(c.href));

        if (!hasChildren && item.href) {
          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                "hover:bg-red-50 hover:text-red-700",
                isActive
                  ? "text-red-700 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:rounded-full after:bg-red-600 after:content-['']"
                  : "text-slate-700"
              )}
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
            onMouseLeave={() => setOpenMenu((cur) => (cur === item.title ? null : cur))}
          >
            <button
              type="button"
              className={cn(
                "relative inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                "hover:bg-red-50 hover:text-red-700",
                openMenu === item.title && "bg-red-50 text-red-700",
                isActive && !openMenu &&
                  "text-red-700 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:rounded-full after:bg-red-600 after:content-['']"
              )}
              aria-expanded={openMenu === item.title}
              aria-haspopup="menu"
            >
              {item.title}
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 text-slate-400 transition-all duration-200",
                  openMenu === item.title && "rotate-180 text-red-500"
                )}
              />
            </button>

            {/* Dropdown */}
            <div
              className={cn(
                "absolute left-0 top-full z-50 mt-2 w-[440px] rounded-2xl border border-slate-200/80 bg-white/95 p-2 shadow-[0_20px_60px_rgba(15,23,42,0.14)] backdrop-blur-sm transition-all duration-200 xl:w-[500px]",
                openMenu === item.title
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-2 opacity-0"
              )}
              role="menu"
            >
              {/* Top accent line */}
              <div className="mb-2 h-[2px] w-full rounded-full bg-gradient-to-r from-red-500 via-red-400 to-transparent" />

              <div className="grid gap-1">
                {item.children?.map((child) => {
                  const childActive = pathname.startsWith(child.href);
                  return (
                    <Link
                      key={child.title}
                      href={child.href}
                      className={cn(
                        "group relative flex items-start gap-3 overflow-hidden rounded-xl px-4 py-3 transition-all duration-200",
                        "hover:bg-red-50/80",
                        childActive ? "bg-red-50" : ""
                      )}
                      role="menuitem"
                    >
                      {/* Left accent bar */}
                      <span
                        className={cn(
                          "absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-red-500 transition-all duration-200",
                          childActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        )}
                      />
                      <div className="min-w-0 flex-1 pl-1">
                        <div className={cn(
                          "text-sm font-semibold transition-colors duration-150",
                          childActive ? "text-red-700" : "text-slate-950 group-hover:text-red-700"
                        )}>
                          {child.title}
                        </div>
                        {child.description && (
                          <p className="mt-0.5 text-xs leading-5 text-slate-500 group-hover:text-slate-600">
                            {child.description}
                          </p>
                        )}
                      </div>
                      <ChevronDown className="mt-0.5 h-3.5 w-3.5 shrink-0 -rotate-90 text-slate-300 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-red-400" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
