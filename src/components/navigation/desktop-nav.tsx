"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/data/navigation";
import { CoursesDropdown } from "@/components/navigation/courses-dropdown";

interface DesktopNavProps {
  items: NavItem[];
}

export function DesktopNav({ items }: DesktopNavProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const menuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      const isInside = Object.values(menuRefs.current).some((el) => el?.contains(target));
      if (!isInside) setOpenMenu(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const open = useCallback((title: string) => setOpenMenu(title), []);
  const close = useCallback(() => setOpenMenu(null), []);

  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
      {items.map((item) => {
        const hasChildren = !!item.children?.length;
        const isActive = item.href
          ? item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
          : item.children?.some((c) => pathname.startsWith(c.href));
        const isOpen = openMenu === item.title;
        const isCourses = item.title === "Courses";

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
            ref={(el) => { menuRefs.current[item.title] = el; }}
            className="relative"
            onMouseEnter={() => open(item.title)}
            onMouseLeave={close}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-haspopup="menu"
              aria-controls={`menu-${item.title}`}
              onClick={() => setOpenMenu(isOpen ? null : item.title)}
              className={cn(
                "relative inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 select-none",
                "hover:bg-red-50 hover:text-red-700",
                isOpen && "bg-red-50 text-red-700",
                isActive && !isOpen &&
                  "text-red-700 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:rounded-full after:bg-red-600 after:content-['']"
              )}
            >
              {item.title}
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 text-slate-400 transition-transform duration-[180ms]",
                  isOpen && "rotate-180 text-red-500"
                )}
                aria-hidden="true"
              />
            </button>

            {/* ── Courses: premium dropdown ── */}
            {isCourses && (
              <CoursesDropdown open={isOpen} />
            )}

            {/* ── Services / Products: generic dropdown ── */}
            {!isCourses && (
              <div
                id={`menu-${item.title}`}
                role="menu"
                aria-label={`${item.title} menu`}
                className={cn(
                  "absolute left-0 top-full z-50 mt-2 w-[440px] rounded-2xl border border-slate-200/80 bg-white/95 p-2 shadow-[0_4px_6px_rgba(0,0,0,0.04),0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm xl:w-[500px]",
                  "transition-[opacity,transform,visibility] duration-[180ms] [transition-timing-function:cubic-bezier(.2,.8,.2,1)]",
                  isOpen
                    ? "visible translate-y-0 scale-100 opacity-100"
                    : "invisible -translate-y-1.5 scale-[0.98] opacity-0"
                )}
              >
                {/* Top accent */}
                <div className="mb-2 h-[2px] w-full rounded-full bg-gradient-to-r from-red-500 via-red-400 to-transparent" />

                <div className="grid gap-1">
                  {item.children?.map((child) => {
                    const childActive = pathname.startsWith(child.href);
                    return (
                      <Link
                        key={child.title}
                        href={child.href}
                        role="menuitem"
                        className={cn(
                          "group relative flex items-start gap-3 overflow-hidden rounded-xl px-4 py-3 transition-all duration-200",
                          "hover:bg-red-50/80 hover:translate-x-0.5",
                          childActive ? "bg-red-50 border border-red-100" : "border border-transparent"
                        )}
                      >
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
                        <ChevronDown className="mt-0.5 h-3.5 w-3.5 shrink-0 -rotate-90 text-slate-300 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-red-400" aria-hidden="true" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
