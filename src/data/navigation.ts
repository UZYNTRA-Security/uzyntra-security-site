import { certificationPrograms, coursePrograms } from "@/data/exclusive-course-catalog";

export type NavChildItem = {
  title: string;
  href: string;
  description?: string;
};

export type NavItem = {
  title: string;
  href?: string;
  children?: NavChildItem[];
};

const courseNavigationItems: NavChildItem[] = coursePrograms.map((course) => ({
  title: course.title,
  href: course.href,
  description: course.summary,
}));

const certificationNavigationItems: NavChildItem[] = certificationPrograms.map((certification) => ({
  title: `${certification.code} - ${certification.title}`,
  href: certification.href,
  description: certification.summary,
}));

export const mainNavigation: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    children: [
      {
        title: "API & SaaS Security Testing",
        href: "/services/api-security-testing",
        description:
          "Offensive testing for APIs, SaaS platforms, authentication systems, and cloud services.",
      },
      {
        title: "Penetration Testing & Red Teaming",
        href: "/services/penetration-testing",
        description:
          "Real-world attack simulations across infrastructure, applications, and identity systems.",
      },
      {
        title: "Secure Backend & Cloud Engineering",
        href: "/services/backend-engineering",
        description:
          "Secure backend systems, APIs, and cloud-native architectures built with Rust and modern stacks.",
      },
      {
        title: "Blockchain Security & Smart Contract Engineering",
        href: "/services/blockchain-security",
        description:
          "Smart contract development, blockchain security reviews, dApp architecture, and Web3 engineering.",
      },
      {
        title: "Automation & AI Workflow Systems",
        href: "/services/automation-ai",
        description:
          "n8n automation, API orchestration, AI pipelines, and self-hosted workflow systems.",
      },
    ],
  },
  {
    title: "Products",
    children: [
      {
        title: "UZYNTRA API Firewall",
        href: "/products/uzyntra-api-firewall",
        description: "Rust API firewall engine with integrated operator control plane.",
      },
    ],
  },
  {
    title: "Courses",
    children: [
      {
        title: "Offensive AI Certified Web Pentester",
        href: "/offensive-ai",
        description: "Exclusive certification for AI-powered web pentesting, GPT agents, labs, and reporting.",
      },
      ...courseNavigationItems,
      {
        title: "All Certifications",
        href: "/certifications",
        description: "Professional and master certification paths from the advanced course poster.",
      },
      ...certificationNavigationItems,
      {
        title: "View All Courses",
        href: "/courses",
        description: "Browse courses and exclusive certifications across security, AI, cloud, and engineering.",
      },
    ],
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const footerNavigation = {
  courses: [
    { title: "Offensive AI Certified Web Pentester", href: "/offensive-ai" },
    ...coursePrograms.slice(0, 7).map((course) => ({ title: course.title, href: course.href })),
    { title: "Certifications", href: "/certifications" },
    { title: "View All Courses", href: "/courses" },
  ],
  company: [
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
    { title: "Download", href: "/download" },
    { title: "Company Overview", href: "/company-overview" },
  ],
  services: [
    { title: "API & SaaS Security Testing", href: "/services/api-security-testing" },
    { title: "Penetration Testing & Red Teaming", href: "/services/penetration-testing" },
    { title: "Secure Backend & Cloud Engineering", href: "/services/backend-engineering" },
    { title: "Blockchain Security & Smart Contract Engineering", href: "/services/blockchain-security" },
    { title: "Automation & AI Workflow Systems", href: "/services/automation-ai" },
  ],
  products: [
    { title: "UZYNTRA API Firewall Platform", href: "/products/uzyntra-api-firewall" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms", href: "/terms" },
    { title: "Responsible Disclosure", href: "/responsible-disclosure" },
  ],
  social: [
    { title: "GitHub", href: "https://github.com/UsamaMatrix" },
    { title: "LinkedIn", href: "https://www.linkedin.com" },
    { title: "X", href: "https://x.com" },
    { title: "Instagram", href: "https://www.instagram.com" },
    { title: "Facebook", href: "https://www.facebook.com" },
    { title: "Email", href: "mailto:security@uzyntra.com" },
  ],
} as const;
