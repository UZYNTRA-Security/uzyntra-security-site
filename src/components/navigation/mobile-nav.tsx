"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, Download, Sun, Moon } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/data/navigation";
import { siteConfig } from "@/config/site";

interface MobileNavProps {
  items: NavItem[];
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNav({ items }: MobileNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const panelRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const getInitialExpanded = useCallback(() => {
    for (const item of items) {
      if (item.children?.some((c) => pathname.startsWith(c.href) && c.href !== "/")) {
        return item.title;
      }
    }
    return null;
  }, [items, pathname]);

  const [expanded, setExpanded] = useState<string | null>(getInitialExpanded);

  useEffect(() => {
    setMounted(true);
    // Sync theme state from html attribute
    const current = document.documentElement.getAttribute("data-theme") as "light" | "dark";
    setTheme(current ?? "light");
  }, []);

  // Keep in sync when desktop ThemeToggle fires
  useEffect(() => {
    const handler = () => {
      const current = document.documentElement.getAttribute("data-theme") as "light" | "dark";
      if (current) setTheme(current);
    };
    window.addEventListener("uzyntra-theme-change", handler);
    return () => window.removeEventListener("uzyntra-theme-change", handler);
  }, []);

  useEffect(() => {
    setExpanded(getInitialExpanded());
  }, [pathname, getInitialExpanded]);

  // iOS-safe scroll lock
  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("position");
      document.body.style.removeProperty("width");
      return;
    }
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    return () => {
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("position");
      document.body.style.removeProperty("width");
    };
  }, [open]);

  // Escape + focus trap
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") { close(); return; }
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    const first = panelRef.current?.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    setTimeout(() => hamburgerRef.current?.focus(), 50);
  }, []);

  const toggle = (title: string) =>
    setExpanded((prev) => (prev === title ? null : title));

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("uzyntra-theme", next);
    document.documentElement.setAttribute("data-theme", next);
    window.dispatchEvent(new Event("uzyntra-theme-change"));
  };

  const isActiveLink = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isActiveParent = (item: NavItem) =>
    item.children?.some((c) => isActiveLink(c.href)) ?? false;

  // Theme-aware color tokens for inline styles
  const dark = theme === "dark";
  const colors = {
    panelBg:       dark ? "#0f172a" : "#ffffff",
    panelBorder:   dark ? "rgba(51,65,85,0.5)" : "#f1f5f9",
    headerBorder:  dark ? "rgba(51,65,85,0.4)" : "#f1f5f9",
    navBg:         dark ? "#0f172a" : "#ffffff",
    textPrimary:   dark ? "hsl(210,40%,90%)" : "#1e293b",
    textMuted:     dark ? "hsl(215,16%,62%)" : "#64748b",
    textAccent:    dark ? "rgb(248,113,113)" : "#b91c1c",
    activeBg:      dark ? "rgba(220,38,38,0.12)" : "#fef2f2",
    childGroupBg:  dark ? "rgba(30,41,59,0.6)" : "#f8fafc",
    childGroupBorder: dark ? "rgba(51,65,85,0.4)" : "#f1f5f9",
    childActiveBg: dark ? "rgba(220,38,38,0.12)" : "#fef2f2",
    ctaBorder:     dark ? "rgba(220,38,38,0.35)" : "#fecaca",
    ctaBg:         dark ? "rgba(220,38,38,0.10)" : "#fff5f5",
    ctaText:       dark ? "rgb(248,113,113)" : "#b91c1c",
    toggleBg:      dark ? "#1e293b" : "#ffffff",
    toggleBorder:  dark ? "rgba(51,65,85,0.7)" : "#e2e8f0",
    toggleColor:   dark ? "hsl(210,40%,80%)" : "#64748b",
    closeBg:       dark ? "#1e293b" : "#ffffff",
    closeBorder:   dark ? "rgba(51,65,85,0.7)" : "#e2e8f0",
    closeColor:    dark ? "hsl(210,40%,70%)" : "#64748b",
  };

  const overlay = (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={close}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          backgroundColor: "rgba(2, 6, 23, 0.82)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.28s ease",
        }}
      />

      {/* Panel */}
      <div
        id="mobile-nav-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          width: "min(360px, 94vw)",
          display: "flex",
          flexDirection: "column",
          backgroundColor: colors.panelBg,
          boxShadow: "-4px 0 32px rgba(0,0,0,0.18), -1px 0 0 rgba(0,0,0,0.08)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        {/* ── Panel header ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            borderBottom: `1px solid ${colors.headerBorder}`,
            padding: "18px 20px",
            gap: "12px",
          }}
        >
          <Link href="/" onClick={close} aria-label="UZYNTRA Security home">
            <span style={{ position: "relative", display: "block", height: "44px", width: "200px", overflow: "hidden" }}>
              <Image
                src={dark ? siteConfig.logos.mainDark : siteConfig.logos.main}
                alt="UZYNTRA Security"
                fill
                className="object-contain object-left"
                sizes="200px"
              />
            </span>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            {/* Theme toggle inside mobile nav */}
            <button
              type="button"
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              onClick={toggleTheme}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                border: `1px solid ${colors.toggleBorder}`,
                backgroundColor: colors.toggleBg,
                color: colors.toggleColor,
                cursor: "pointer",
                flexShrink: 0,
                transition: "background-color 0.15s ease, color 0.15s ease",
              }}
            >
              {theme === "light"
                ? <Moon style={{ width: "16px", height: "16px" }} />
                : <Sun style={{ width: "16px", height: "16px" }} />
              }
            </button>

            {/* Close button */}
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={close}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                border: `1px solid ${colors.closeBorder}`,
                backgroundColor: colors.closeBg,
                color: colors.closeColor,
                cursor: "pointer",
                flexShrink: 0,
                transition: "background-color 0.15s ease, color 0.15s ease",
              }}
            >
              <X style={{ width: "16px", height: "16px" }} />
            </button>
          </div>
        </div>

        {/* ── Scrollable nav body ── */}
        <nav
          style={{
            flex: 1,
            overflowY: "auto",
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
            padding: "12px 12px 8px",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {items.map((item) => {
              const hasChildren = !!item.children?.length;
              const isExpanded = expanded === item.title;
              const active = hasChildren ? isActiveParent(item) : isActiveLink(item.href ?? "");

              if (!hasChildren && item.href) {
                return (
                  <li key={item.title} style={{ marginBottom: "1px" }}>
                    <Link
                      href={item.href}
                      onClick={close}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "46px",
                        padding: "0 12px",
                        borderRadius: "10px",
                        fontSize: "0.9375rem",
                        fontWeight: active ? 600 : 500,
                        color: active ? colors.textAccent : colors.textPrimary,
                        backgroundColor: active ? colors.activeBg : "transparent",
                        textDecoration: "none",
                        transition: "background-color 0.15s ease, color 0.15s ease",
                      }}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.title} style={{ marginBottom: "1px" }}>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => toggle(item.title)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      height: "46px",
                      padding: "0 12px",
                      borderRadius: "10px",
                      fontSize: "0.9375rem",
                      fontWeight: active ? 600 : 500,
                      color: active ? colors.textAccent : colors.textPrimary,
                      backgroundColor: active && !isExpanded ? colors.activeBg : "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background-color 0.15s ease, color 0.15s ease",
                    }}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      style={{
                        width: "15px",
                        height: "15px",
                        flexShrink: 0,
                        color: isExpanded ? colors.textAccent : colors.textMuted,
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.22s ease, color 0.15s ease",
                      }}
                    />
                  </button>

                  {/* Accordion children */}
                  <div
                    style={{
                      overflow: "hidden",
                      maxHeight: isExpanded ? "600px" : "0px",
                      opacity: isExpanded ? 1 : 0,
                      transition: "max-height 0.28s ease, opacity 0.2s ease",
                    }}
                  >
                    <ul
                      style={{
                        listStyle: "none",
                        margin: "4px 0 6px 0",
                        padding: "6px 8px",
                        backgroundColor: colors.childGroupBg,
                        borderRadius: "10px",
                        border: `1px solid ${colors.childGroupBorder}`,
                      }}
                    >
                      {item.children?.map((child) => {
                        const childActive = isActiveLink(child.href);
                        return (
                          <li key={child.title} style={{ marginBottom: "1px" }}>
                            <Link
                              href={child.href}
                              onClick={close}
                              style={{
                                display: "block",
                                padding: "9px 10px",
                                borderRadius: "7px",
                                textDecoration: "none",
                                backgroundColor: childActive ? colors.childActiveBg : "transparent",
                                transition: "background-color 0.15s ease",
                              }}
                            >
                              <span
                                style={{
                                  display: "block",
                                  fontSize: "0.8125rem",
                                  fontWeight: childActive ? 600 : 500,
                                  color: childActive ? colors.textAccent : colors.textPrimary,
                                  lineHeight: 1.3,
                                }}
                              >
                                {child.title}
                              </span>
                              {child.description && (
                                <span
                                  style={{
                                    display: "block",
                                    marginTop: "2px",
                                    fontSize: "0.75rem",
                                    lineHeight: 1.5,
                                    color: colors.textMuted,
                                  }}
                                >
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Legal links */}
          <div style={{ margin: "16px 0 4px", borderTop: `1px solid ${colors.headerBorder}`, paddingTop: "12px" }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {[
                { label: "Privacy Policy", href: siteConfig.nav.privacyPolicy },
                { label: "Terms", href: siteConfig.nav.terms },
                { label: "Responsible Disclosure", href: siteConfig.nav.responsibleDisclosure },
              ].map(({ label, href }) => (
                <li key={label} style={{ marginBottom: "1px" }}>
                  <Link
                    href={href}
                    onClick={close}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "44px",
                      padding: "0 12px",
                      borderRadius: "8px",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: colors.textMuted,
                      textDecoration: "none",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* ── Bottom CTA ── */}
        <div
          style={{
            flexShrink: 0,
            padding: "12px",
            paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
            borderTop: `1px solid ${colors.headerBorder}`,
            backgroundColor: colors.panelBg,
          }}
        >
          <Link
            href={siteConfig.nav.download}
            onClick={close}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
              height: "44px",
              width: "100%",
              borderRadius: "10px",
              border: `1px solid ${colors.ctaBorder}`,
              backgroundColor: colors.ctaBg,
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: colors.ctaText,
              textDecoration: "none",
              letterSpacing: "0.01em",
              transition: "background-color 0.15s ease",
            }}
          >
            <Download style={{ width: "13px", height: "13px", flexShrink: 0 }} />
            Download API Firewall
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <div className="lg:hidden">
      <button
        ref={hamburgerRef}
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen(true)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "44px",
          height: "44px",
          borderRadius: "10px",
          border: "1px solid #e2e8f0",
          backgroundColor: "#ffffff",
          color: "#334155",
          cursor: "pointer",
          flexShrink: 0,
        }}
      >
        <Menu style={{ width: "20px", height: "20px" }} />
      </button>

      {mounted && createPortal(overlay, document.body)}
    </div>
  );
}
