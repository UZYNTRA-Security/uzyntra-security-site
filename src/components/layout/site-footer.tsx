import Link from "next/link";
import { Mail, Shield, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/data/navigation";
import { ThemedLogo } from "@/components/ui/themed-logo";
import { publishedPosts } from "@/data/blog";

type FooterGroupProps = {
  title: string;
  links: readonly { title: string; href: string }[];
  className?: string;
};

function FooterGroup({ title, links, className = "" }: FooterGroupProps) {
  return (
    <div className={`footer-link-group min-w-0 ${className}`}>
      <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-950">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => {
          const isExternal =
            link.href.startsWith("http://") ||
            link.href.startsWith("https://") ||
            link.href.startsWith("mailto:");
          return (
            <li key={link.title}>
              <Link
                href={link.href}
                {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
                className="footer-link-text block text-sm leading-6 text-slate-600 transition duration-200 hover:text-red-700"
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const socialLinks = [
  { title: "GitHub", href: siteConfig.socials.github, icon: FaGithub },
  { title: "LinkedIn", href: siteConfig.socials.linkedin, icon: FaLinkedinIn },
  { title: "X", href: siteConfig.socials.x, icon: FaXTwitter },
  { title: "Instagram", href: siteConfig.socials.instagram, icon: FaInstagram },
  { title: "Facebook", href: siteConfig.socials.facebook, icon: FaFacebookF },
];

export function SiteFooter() {
  return (
    <footer className="site-footer relative border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="container-shell py-10 sm:py-12">
        <div className="footer-main-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[minmax(250px,1.15fr)_minmax(96px,0.48fr)_minmax(190px,0.82fr)_minmax(118px,0.54fr)_minmax(142px,0.62fr)_minmax(290px,1.25fr)] xl:gap-x-7 xl:gap-y-10">
          <div className="footer-brand-block max-w-sm lg:col-span-2 xl:col-span-1">
            <Link href="/" className="inline-flex items-center" aria-label="UZYNTRA Security home">
              <ThemedLogo width={240} height={56} />
            </Link>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              UZYNTRA Security delivers enterprise-grade cybersecurity solutions,
              secure software engineering, and blockchain systems with
              production-ready architecture.
            </p>

            <Link
              href="/services"
              className="group mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-red-700 transition-all duration-200 hover:border-red-300 hover:bg-red-100"
            >
              <Shield className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="min-w-0 leading-tight">Enterprise Security Platform</span>
              <ArrowUpRight className="h-3 w-3 shrink-0 opacity-0 transition-all duration-200 group-hover:opacity-100" aria-hidden="true" />
            </Link>

            <p className="mt-5 text-sm font-medium text-slate-950">
              <a href="mailto:contact@uzyntra.com" className="transition-colors hover:text-red-700">
                contact@uzyntra.com
              </a>
            </p>
            <p className="mt-1.5 text-sm font-medium text-slate-950">
              <a href="tel:+923335545728" className="transition-colors hover:text-red-700">
                +92 333 5545728
              </a>
            </p>
          </div>

          <FooterGroup title="Company" links={footerNavigation.company} />
          <FooterGroup title="Services" links={footerNavigation.services} />
          <FooterGroup title="Courses" links={footerNavigation.courses} />

          <div className="space-y-8">
            <FooterGroup title="Products" links={footerNavigation.products} />
            <FooterGroup title="Legal" links={footerNavigation.legal} />
          </div>

          <div className="footer-research-column min-w-0 lg:col-span-2 xl:col-span-1">
            <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-950">
                Research
              </h3>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-700 transition-all duration-200 hover:gap-1.5"
              >
                All
                <ArrowUpRight className="h-3 w-3 shrink-0" aria-hidden="true" />
              </Link>
            </div>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {publishedPosts.slice(0, 4).map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="footer-research-card group block rounded-lg border p-3 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span className="block text-[13px] font-semibold leading-snug text-slate-700 transition-colors group-hover:text-red-700">
                      {post.title}
                    </span>
                    <span className="footer-research-meta mt-1.5 flex items-center justify-between gap-3 text-[11px] text-slate-400">
                      <span className="min-w-0 truncate">{post.category} - {post.readTime}</span>
                      <ArrowUpRight className="h-3 w-3 shrink-0 text-red-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-slate-200 pt-6 sm:mt-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map(({ title, href, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={title}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:border-red-300 hover:bg-red-600 hover:text-white hover:shadow-[0_6px_16px_rgba(220,38,38,0.28)] active:translate-y-0"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}

            <Link
              href={siteConfig.socials.email}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:border-red-300 hover:bg-red-600 hover:text-white hover:shadow-[0_6px_16px_rgba(220,38,38,0.28)] active:translate-y-0"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
