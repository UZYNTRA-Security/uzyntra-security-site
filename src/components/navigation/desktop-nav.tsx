"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
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

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

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
                  ? "text-red-700 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[3px] after:rounded-full after:bg-red-600 after:shadow-[0_0_6px_rgba(220,38,38,0.5)] after:content-['']"
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
                "relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 select-none",
                "hover:bg-red-50 hover:text-red-700",
                isOpen && "bg-red-50 text-red-700",
                isActive && !isOpen &&
                  "text-red-700 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[3px] after:rounded-full after:bg-red-600 after:shadow-[0_0_6px_rgba(220,38,38,0.5)] after:content-['']"
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

            {isCourses ? (
              <CoursesDropdown open={isOpen} />
            ) : (
              <div
                id={`menu-${item.title}`}
                role="menu"
                aria-label={`${item.title} menu`}
                className={cn(
                  "nav-mega-panel fixed left-0 right-0 top-[56px] z-50 border-y border-red-950/60 bg-[#0b0b0c] text-white shadow-[0_28px_70px_rgba(0,0,0,0.35)]",
                  "transition-[opacity,transform,visibility] duration-200 [transition-timing-function:cubic-bezier(.2,.8,.2,1)]",
                  isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0 pointer-events-none"
                )}
              >
                <div className="mx-auto grid max-w-[1360px] grid-cols-[240px_minmax(0,1fr)] gap-10 px-10 py-7 xl:px-14">
                  <aside className="border-r border-white/10 pr-8">
                    <p className="nav-mega-heading text-[13px] font-extrabold uppercase leading-tight text-[#ff1f2d]">
                      {item.title}
                    </p>
                    <p className="nav-mega-copy mt-3 text-sm leading-6 text-white/65">
                      {item.title === "Services"
                        ? "Security testing, engineering, blockchain, and automation capabilities for modern teams."
                        : "UZYNTRA products and platforms built for secure operations and visibility."}
                    </p>
                    <Link
                      href={item.title === "Services" ? "/services" : "/products"}
                      role="menuitem"
                      className="mt-5 inline-flex h-10 items-center justify-center bg-red-600 px-4 text-xs font-extrabold uppercase text-white transition-colors duration-200 hover:bg-white hover:text-red-600"
                    >
                      View All
                    </Link>
                  </aside>

                  <div className="grid min-w-0 grid-cols-2 gap-x-10 gap-y-4 xl:grid-cols-3">
                    {item.children?.map((child) => {
                      const childActive = pathname.startsWith(child.href);
                      return (
                        <Link
                          key={child.title}
                          href={child.href}
                          role="menuitem"
                          className={cn(
                            "group flex items-start gap-2 py-1.5 text-[15px] font-semibold leading-5 text-white transition-colors duration-200 hover:text-red-500",
                            childActive && "text-red-500"
                          )}
                        >
                          <ChevronRight
                            className={cn(
                              "mt-0.5 h-3.5 w-3.5 shrink-0 text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-red-500",
                              childActive && "text-red-500"
                            )}
                            aria-hidden="true"
                          />
                          <span>
                            <span className="block">{child.title}</span>
                            {child.description ? (
                              <span className="nav-mega-copy mt-1 block text-xs font-medium leading-5 text-white/55 group-hover:text-white/75">
                                {child.description}
                              </span>
                            ) : null}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
