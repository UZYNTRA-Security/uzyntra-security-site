import Image from "next/image";
import Link from "next/link";
import { Mail, Shield, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/data/navigation";
import { ThemedLogo } from "@/components/ui/themed-logo";
import { blogPosts, publishedPosts } from "@/data/blog";

type FooterGroupProps = {
  title: string;
  links: readonly { title: string; href: string }[];
};

function FooterGroup({ title, links }: FooterGroupProps) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-950">
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
                className="text-sm text-slate-600 transition duration-200 hover:text-red-700"
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
  { title: "GitHub",    href: siteConfig.socials.github,    icon: FaGithub    },
  { title: "LinkedIn",  href: siteConfig.socials.linkedin,  icon: FaLinkedinIn },
  { title: "X",         href: siteConfig.socials.x,         icon: FaXTwitter  },
  { title: "Instagram", href: siteConfig.socials.instagram, icon: FaInstagram },
  { title: "Facebook",  href: siteConfig.socials.facebook,  icon: FaFacebookF },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="container-shell py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.4fr_0.9fr_0.9fr_0.9fr_0.9fr_1.1fr]">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center" aria-label="UZYNTRA Security home">
              <ThemedLogo width={240} height={56} />
            </Link>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              UZYNTRA Security delivers enterprise-grade cybersecurity solutions,
              secure software engineering, and blockchain systems with
              production-ready architecture.
            </p>

            {/* Platform badge — clickable */}
            <Link
              href="/services"
              className="group mt-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-red-700 transition-all duration-200 hover:border-red-300 hover:bg-red-100"
            >
              <Shield className="h-3.5 w-3.5" />
              Enterprise Security Platform
              <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100" aria-hidden="true" />
            </Link>

            <p className="mt-5 text-sm font-medium text-slate-950">
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-red-700">
                {siteConfig.email}
              </a>
            </p>
          </div>

          <FooterGroup title="Company"  links={footerNavigation.company}  />
          <FooterGroup title="Services" links={footerNavigation.services} />
          <FooterGroup title="Products" links={footerNavigation.products} />
          <FooterGroup title="Legal"    links={footerNavigation.legal}    />

          {/* Research / Articles column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-950">
              Research
            </h3>
            <ul className="mt-4 space-y-3">
              {publishedPosts.slice(0, 4).map((post) => (
                <li key={post.slug}>
                  {/* Link to native page — SEO value + trust */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="footer-research-link group flex items-start gap-1.5 text-sm text-slate-600 transition duration-200 hover:text-red-700"
                  >
                    <span className="flex-1 leading-snug">{post.title}</span>
                  </Link>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <span className="footer-research-meta text-[11px] text-slate-400">
                      {post.category} · {post.readTime}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[11px] font-semibold text-red-600 transition-all duration-200 hover:text-red-700"
                    >
                      Read guide →
                    </Link>
                  </div>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 transition-all duration-200 hover:gap-2"
                >
                  View all research
                  <ArrowUpRight className="h-3 w-3 shrink-0" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-slate-200 pt-6 sm:mt-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
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
