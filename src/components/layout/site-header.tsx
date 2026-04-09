import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { mainNavigation } from "@/data/navigation";
import { DesktopNav } from "@/components/navigation/desktop-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
      <div className="container-shell">
        <div className="flex h-[64px] items-center justify-between gap-3 sm:h-[70px] lg:h-[var(--header-height)]">
          <Link
            href="/"
            className="group inline-flex shrink-0 items-center"
            aria-label="UZYNTRA Security home"
          >
            <span className="relative h-8 w-[138px] overflow-hidden sm:h-10 sm:w-[164px]">
              <Image
                src={siteConfig.logos.main}
                alt="UZYNTRA Security"
                fill
                priority
                className="object-contain object-left transition duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 138px, 164px"
              />
            </span>
          </Link>

          <DesktopNav items={mainNavigation} />

          <div className="flex items-center gap-3">
            <Link
              href="/download"
              className="hidden rounded-2xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 lg:inline-flex"
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
