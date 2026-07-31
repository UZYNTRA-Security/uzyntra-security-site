import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { publishedPosts } from "@/data/blog";

const base = siteConfig.url;

const serviceSlugs = [
  "api-security-testing",
  "penetration-testing",
  "backend-engineering",
  "blockchain-security",
  "automation-ai",
] as const;

const courseSlugs = [
  "artificial-intelligence",
  "cybersecurity",
  "cloud-computing",
  "devsecops",
  "python-programming",
  "web-development",
  "mobile-app-development",
  "data-science",
  "blockchain-web3",
  "automation",
  "prompt-engineering",
  "ai-agent-development",
  "ethical-hacking",
  "penetration-testing",
  "api-security",
  "secure-coding",
  "linux-administration",
  "docker-kubernetes",
  "aws-azure-gcp",
  "networking-ccna",
  "soc-analyst",
  "digital-forensics",
] as const;

const corePages = ["about", "contact", "download"] as const;
const legalPages = ["privacy-policy", "terms", "responsible-disclosure"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...publishedPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${base}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: slug === "api-security-testing" || slug === "penetration-testing" ? 0.9 : 0.8,
    })),
    {
      url: `${base}/courses`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...courseSlugs.map((slug) => ({
      url: `${base}/courses/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${base}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/products/uzyntra-api-firewall`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...corePages.map((slug) => ({
      url: `${base}/${slug}`,
      lastModified: now,
      changeFrequency: slug === "download" ? "weekly" as const : "monthly" as const,
      priority: slug === "download" ? 0.8 : 0.7,
    })),
    ...legalPages.map((slug) => ({
      url: `${base}/${slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
