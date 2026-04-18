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

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-red-700">
              <Shield className="h-3.5 w-3.5" />
              Enterprise Security Platform
            </div>

            <p className="mt-5 text-sm font-medium text-slate-950">{siteConfig.email}</p>
          </div>

          <FooterGroup title="Company"  links={footerNavigation.company}  />
          <FooterGroup title="Services" links={footerNavigation.services} />
          <FooterGroup title="Products" links={footerNavigation.products} />
          <FooterGroup title="Legal"    links={footerNavigation.legal}    />

          {/* Resources / Articles column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-950">
              Research
            </h3>
            <ul className="mt-4 space-y-3">
              {publishedPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={post.externalUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-research-link group flex items-start gap-1.5 text-sm text-slate-600 transition duration-200 hover:text-red-700"
                  >
                    <span className="flex-1 leading-snug">{post.title}</span>
                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </Link>
                  <span className="footer-research-meta mt-1 block text-[11px] text-slate-400">
                    {post.category} · {post.platform}
                  </span>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 transition duration-200 hover:gap-1.5"
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-50 hover:text-red-700"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}

            <Link
              href={siteConfig.socials.email}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-50 hover:text-red-700"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
