export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tag: string;
  date: string;
  readTime: string;
  externalUrl: string;
  platform: "DEV" | "Medium" | "Hashnode" | "Substack";
};

export const blogPosts: BlogPost[] = [
  {
    slug: "top-api-security-vulnerabilities-2026",
    title: "Top API Security Vulnerabilities in 2026 (Real-World Breakdown)",
    excerpt:
      "A technical breakdown of the most exploited API vulnerabilities in 2026 — covering BOLA, authentication flaws, business logic abuse, and real-world attack patterns that automated scanners miss.",
    category: "API Security",
    tag: "OWASP API Top 10",
    date: "2026",
    readTime: "8 min read",
    externalUrl:
      "https://dev.to/uzyntra/top-api-security-vulnerabilities-in-2026-real-world-breakdown-e9g",
    platform: "DEV",
  },
];

/** Posts shown on the homepage insights section — most recent first */
export const featuredPosts = blogPosts.slice(0, 3);
