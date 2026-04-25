export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tag: string;
  date: string;
  readTime: string;
  externalUrl: string;
  platform: "DEV" | "Medium" | "Hashnode" | "Substack" | "UZYNTRA";
  targetKeyword: string;
  serviceLink: string;
  cta: string;
  published: boolean; // false = article not yet live, shows "Coming Soon" on blog page
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
    targetKeyword: "API security vulnerabilities 2026",
    serviceLink: "/services/api-security-testing",
    cta: "Request API Security Audit",
    published: true,
  },
  {
    slug: "api-security-testing-guide-saas",
    title: "API Security Testing Guide for SaaS Startups",
    excerpt:
      "A practical guide to API security testing for SaaS teams — covering authentication testing, BOLA, rate limiting gaps, and how to build a repeatable security testing process without a dedicated security team.",
    category: "API Security",
    tag: "SaaS Security",
    date: "January 2026",
    readTime: "10 min read",
    externalUrl: "https://dev.to/uzyntra",
    platform: "DEV",
    targetKeyword: "API security testing SaaS startups",
    serviceLink: "/services/api-security-testing",
    cta: "Request API Security Audit",
    published: true,
  },
  {
    slug: "real-world-api-exploits-explained",
    title: "Real-World API Exploits Explained",
    excerpt:
      "Case studies of real API exploits — how attackers abused BOLA to access other users' data, bypassed authentication with JWT algorithm confusion, and extracted sensitive data through excessive data exposure.",
    category: "API Security",
    tag: "Real-World Exploits",
    date: "Coming Soon",
    readTime: "9 min read",
    externalUrl: "https://dev.to/uzyntra",
    platform: "DEV",
    targetKeyword: "real world API exploits",
    serviceLink: "/services/api-security-testing",
    cta: "Test Your API Security",
    published: false,
  },
  {
    slug: "prevent-broken-authentication-attacks",
    title: "How to Prevent Broken Authentication Attacks",
    excerpt:
      "Broken authentication is the second most critical API vulnerability. This guide covers JWT attacks, OAuth flow abuse, session fixation, credential stuffing, and how to design authentication systems that resist real-world attacks.",
    category: "API Security",
    tag: "Authentication Security",
    date: "Coming Soon",
    readTime: "11 min read",
    externalUrl: "https://dev.to/uzyntra",
    platform: "DEV",
    targetKeyword: "prevent broken authentication attacks",
    serviceLink: "/services/api-security-testing",
    cta: "Request Authentication Security Review",
    published: false,
  },
  {
    slug: "red-team-vs-penetration-testing",
    title: "Red Team vs Penetration Testing: What's the Difference?",
    excerpt:
      "Red teaming and penetration testing are not the same thing. This breakdown explains the methodology, scope, objectives, and output differences — and how to choose the right engagement for your security maturity level.",
    category: "Penetration Testing",
    tag: "Red Team",
    date: "Coming Soon",
    readTime: "7 min read",
    externalUrl: "https://dev.to/uzyntra",
    platform: "DEV",
    targetKeyword: "red team vs penetration testing",
    serviceLink: "/services/penetration-testing",
    cta: "Book a Penetration Test",
    published: false,
  },
  {
    slug: "secure-backend-architecture-rust",
    title: "Secure Backend Architecture in Rust",
    excerpt:
      "Why Rust is the right choice for security-critical backend systems — covering memory safety guarantees, authentication architecture patterns, secure API design, and how to structure a Rust backend that resists real-world attacks.",
    category: "Backend Engineering",
    tag: "Rust Security",
    date: "Coming Soon",
    readTime: "12 min read",
    externalUrl: "https://dev.to/uzyntra",
    platform: "DEV",
    targetKeyword: "secure backend architecture Rust",
    serviceLink: "/services/backend-engineering",
    cta: "Build Secure Infrastructure",
    published: false,
  },
  {
    slug: "cloud-security-checklist-startups",
    title: "Cloud Security Checklist for Startups",
    excerpt:
      "A practical cloud security checklist for startups on AWS — covering IAM least privilege, S3 bucket policies, secrets management, VPC configuration, logging, and the 10 misconfigurations attackers exploit most.",
    category: "Cloud Security",
    tag: "AWS Security",
    date: "Coming Soon",
    readTime: "9 min read",
    externalUrl: "https://dev.to/uzyntra",
    platform: "DEV",
    targetKeyword: "cloud security checklist startups",
    serviceLink: "/services/penetration-testing",
    cta: "Get Cloud Security Assessment",
    published: false,
  },
  {
    slug: "smart-contract-security-risks",
    title: "Smart Contract Security Risks Explained",
    excerpt:
      "The most critical smart contract vulnerabilities — reentrancy, access control flaws, integer overflow, unsafe delegatecall, and flash loan attack vectors — explained with real examples and how to prevent them.",
    category: "Blockchain Security",
    tag: "Smart Contracts",
    date: "Coming Soon",
    readTime: "10 min read",
    externalUrl: "https://dev.to/uzyntra",
    platform: "DEV",
    targetKeyword: "smart contract security risks",
    serviceLink: "/services/blockchain-security",
    cta: "Request Smart Contract Security Review",
    published: false,
  },
  {
    slug: "n8n-automation-security-best-practices",
    title: "n8n Automation Security Best Practices",
    excerpt:
      "How to secure your n8n automation workflows — covering credential management, secrets handling, webhook validation, access control, self-hosted deployment hardening, and preventing injection through workflow inputs.",
    category: "Automation",
    tag: "n8n Security",
    date: "Coming Soon",
    readTime: "8 min read",
    externalUrl: "https://dev.to/uzyntra",
    platform: "DEV",
    targetKeyword: "n8n automation security best practices",
    serviceLink: "/services/automation-ai",
    cta: "Automate Securely",
    published: false,
  },
  {
    slug: "devsecops-modern-saas",
    title: "DevSecOps for Modern SaaS: A Practical Guide",
    excerpt:
      "How to integrate security into your CI/CD pipeline without slowing down your team — covering SAST, dependency scanning, secrets detection, container image scanning, and IaC security checks at every stage.",
    category: "DevSecOps",
    tag: "CI/CD Security",
    date: "Coming Soon",
    readTime: "11 min read",
    externalUrl: "https://dev.to/uzyntra",
    platform: "DEV",
    targetKeyword: "DevSecOps modern SaaS",
    serviceLink: "/services/backend-engineering",
    cta: "Build Secure Infrastructure",
    published: false,
  },
  {
    slug: "owasp-top-10-detailed-breakdown",
    title: "OWASP Top 10: Detailed Breakdown for Developers",
    excerpt:
      "A technical breakdown of the OWASP Top 10 web application security risks — with real exploitation examples, code-level root causes, and concrete remediation guidance for each category.",
    category: "Web Security",
    tag: "OWASP Top 10",
    date: "Coming Soon",
    readTime: "14 min read",
    externalUrl: "https://dev.to/uzyntra",
    platform: "DEV",
    targetKeyword: "OWASP Top 10 breakdown developers",
    serviceLink: "/services/penetration-testing",
    cta: "Book a Penetration Test",
    published: false,
  },
];

/** Only published posts — used by homepage insights + footer + about */
export const publishedPosts = blogPosts.filter((p) => p.published);

/** Featured posts for homepage — published only, max 3 */
export const featuredPosts = publishedPosts.slice(0, 3);
