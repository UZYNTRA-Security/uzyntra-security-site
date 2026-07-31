import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { mainNavigation } from "@/data/navigation";
import { DesktopNav } from "@/components/navigation/desktop-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ThemedLogo } from "@/components/ui/themed-logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.06)] backdrop-blur-md" style={{ background: "var(--bg-surface-strong)" }}>
      <div className="container-shell">
        <div className="flex items-center justify-between gap-2 sm:gap-4" style={{ height: "56px" }}>

          {/* Logo */}
          <Link
            href="/"
            className="group inline-flex shrink-0 items-center"
            aria-label="UZYNTRA Security home"
          >
            {/* Mobile: smaller logo | Desktop: full size */}
            <span className="block sm:hidden">
              <ThemedLogo width={140} height={32} priority />
            </span>
            <span className="hidden sm:block">
              <ThemedLogo width={200} height={44} priority />
            </span>
          </Link>

          {/* Desktop nav — centered */}
          <DesktopNav items={mainNavigation} />

          {/* Right actions */}
          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <Link
              href="/download"
              className="btn-stroke hidden h-8 items-center gap-1.5 rounded-lg px-3.5 text-xs active:translate-y-0 lg:inline-flex"
            >
              Download
            </Link>
            <MobileNav items={mainNavigation} />
          </div>

        </div>
      </div>
    </header>
  );
}

