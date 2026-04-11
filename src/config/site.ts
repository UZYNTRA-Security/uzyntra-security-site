export const siteConfig = {
  name: "UZYNTRA Security",
  shortName: "UZYNTRA",
  legalName: "UZYNTRA Security",
  description:
    "UZYNTRA Security delivers enterprise-grade cybersecurity solutions, secure software engineering, and blockchain systems built with modern architecture, security-first thinking, and production-ready technology.",
  url: "https://uzyntra.com",
  ogImage: "https://uzyntra.com/preview.webp",
  domain: "uzyntra.com",
  locale: "en_US",
  type: "website",
  email: "uzyntra@gmail.com",

  tagline: "Cybersecurity, Blockchain, and Secure Software Engineering",

  founderLinks: {
    github: "https://github.com/UsamaMatrix",
  },

  productLinks: {
    apiFirewallRepo: "https://github.com/UsamaMatrix/uzyntra-api-firewall",
    uiRepo: "https://github.com/UsamaMatrix/uzyntra-ui",
    apiFirewallDownload:
      "https://github.com/UsamaMatrix/uzyntra-api-firewall/releases/latest",
  },

  logos: {
    main: "/logos/uzyntra-logo-main.svg",
    mainDark: "/logos/uzyntra-logo-main-dark.svg",
    mark: "/logos/uzyntra-mark.webp",
    markDark: "/logos/uzyntra-mark-dark.webp",
    wordmark: "/logos/uzyntra-wordmark.webp",
    wordmarkDark: "/logos/uzyntra-wordmark-dark.webp",
  },

  socials: {
    github: "https://github.com/UZYNTRA-Security",
    linkedin: "https://www.linkedin.com/company/uzyntra",
    x: "https://x.com/uzyntra",
    instagram: "https://www.instagram.com/uzyntra",
    facebook: "https://www.facebook.com/uzyntra",
    email: "mailto:uzyntra@gmail.com",
  },

  company: {
    name: "UZYNTRA Security",
    mission:
      "To help organizations build, protect, and scale secure digital systems through cybersecurity, secure software development, and blockchain engineering.",
    positioning:
      "UZYNTRA Security is a platform and services company delivering enterprise-grade technology solutions, not a single-product vendor.",
  },

  seo: {
    titleTemplate: "%s | UZYNTRA Security",
    defaultTitle: "UZYNTRA Security",
    defaultDescription:
      "Enterprise cybersecurity, blockchain engineering, and secure software development solutions with modern architecture and production-grade delivery.",
    keywords: [
      "UZYNTRA Security",
      "Cybersecurity",
      "API Firewall",
      "Secure Software Development",
      "Blockchain Development",
      "SOC as a Service",
      "SIEM",
      "IAM",
      "Cloud Security",
      "Rust Development",
      "Enterprise Security",
      "API Security",
      "n8n Automation",
      "Workflow Automation",
      "API Orchestration",
      "AI Agent Workflows",
      "Business Process Automation",
      "Self-hosted n8n",
    ],
  },

  nav: {
    home: "/",
    services: "/services",
    n8nAutomation: "/services/n8n-automation",
    products: "/products",
    about: "/about",
    contact: "/contact",
    download: "/download",
    privacyPolicy: "/privacy-policy",
    terms: "/terms",
    responsibleDisclosure: "/responsible-disclosure",
  },
} as const;

export type SiteConfig = typeof siteConfig;
