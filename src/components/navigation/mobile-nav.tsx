"use client";

import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import type { NavItem } from "@/data/navigation";
import { siteConfig } from "@/config/site";

interface MobileNavProps {
  items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition hover:border-red-200 hover:bg-red-50"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-white">
          {/* Top bar */}
          <div className="sticky top-0 z-10 border-b border-slate-200 bg-white">
            <div className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-700">
                  Navigation
                </p>
                <p className="mt-1 text-sm text-slate-600">Explore UZYNTRA Security</p>
              </div>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition hover:border-red-200 hover:bg-red-50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scrollable body */}
          <div className="h-[calc(100vh-73px)] overflow-y-auto px-4 py-4">
            <div className="space-y-6">
              {/* Quick CTA */}
              <div className="rounded-2xl border border-red-100 bg-red-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                  Flagship Product
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Download the latest UZYNTRA API Firewall release.
                </p>
                <Link
                  href="/download"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Download API Firewall
                </Link>
              </div>

              {/* Top level navigation */}
              <div className="space-y-3">
                {items.map((item) => {
                  if (item.href) {
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-4 text-[15px] font-medium text-slate-900 transition hover:border-red-200 hover:bg-red-50"
                      >
                        <span>{item.title}</span>
                        <ChevronRight className="h-4 w-4 text-slate-400" />
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={item.title}
                      className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                    >
                      <div className="border-b border-slate-200 px-4 py-3">
                        <p className="text-[15px] font-semibold text-slate-950">
                          {item.title}
                        </p>
                      </div>

                      <div className="space-y-2 p-3">
                        {item.children?.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-xl border border-transparent bg-slate-50 px-4 py-3 transition hover:border-red-200 hover:bg-red-50"
                          >
                            <div className="text-sm font-semibold text-slate-950">
                              {child.title}
                            </div>
                            {child.description && (
                              <p className="mt-1 text-xs leading-6 text-slate-600">
                                {child.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Extra site links */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                  More
                </p>
                <div className="mt-3 grid gap-2">
                  <Link
                    href={siteConfig.nav.download}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm text-slate-700 transition hover:bg-red-50 hover:text-red-700"
                  >
                    Download
                  </Link>
                  <Link
                    href={siteConfig.nav.privacyPolicy}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm text-slate-700 transition hover:bg-red-50 hover:text-red-700"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href={siteConfig.nav.terms}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm text-slate-700 transition hover:bg-red-50 hover:text-red-700"
                  >
                    Terms
                  </Link>
                  <Link
                    href={siteConfig.nav.responsibleDisclosure}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm text-slate-700 transition hover:bg-red-50 hover:text-red-700"
                  >
                    Responsible Disclosure
                  </Link>
                </div>
              </div>

              {/* Bottom spacing */}
              <div className="h-4" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
