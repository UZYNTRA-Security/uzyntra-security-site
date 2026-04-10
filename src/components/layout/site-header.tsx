import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { mainNavigation } from "@/data/navigation";
import { DesktopNav } from "@/components/navigation/desktop-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-md">
      <div className="container-shell">
        <div className="flex items-center justify-between gap-4" style={{ height: "60px" }}>

          {/* Logo */}
          <Link
            href="/"
            className="group inline-flex shrink-0 items-center"
            aria-label="UZYNTRA Security home"
          >
            <span className="relative overflow-hidden" style={{ height: "28px", width: "130px" }}>
              <Image
                src={siteConfig.logos.main}
                alt="UZYNTRA Security"
                fill
                priority
                className="object-contain object-left transition-opacity duration-200 group-hover:opacity-80"
                sizes="(max-width: 640px) 130px, 148px"
              />
            </span>
          </Link>

          {/* Desktop nav — centered */}
          <DesktopNav items={mainNavigation} />

          {/* Right actions */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <Link
              href="/download"
              className="btn-solid hidden h-9 items-center gap-1.5 rounded-lg px-4 text-sm active:translate-y-0 lg:inline-flex"
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
