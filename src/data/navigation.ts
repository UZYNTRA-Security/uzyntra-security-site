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
        description: "Enterprise API protection, traffic inspection, and modern control layer.",
      },
      {
        title: "UZYNTRA UI Dashboard",
        href: "/products",
        description: "Operational visibility and management experience for the UZYNTRA platform.",
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
      {
        title: "Artificial Intelligence",
        href: "/courses/artificial-intelligence",
        description: "ML, deep learning, LLMs, and AI deployment for production.",
      },
      {
        title: "Cyber Security",
        href: "/courses/cybersecurity",
        description: "Threats, defenses, NIST framework, and incident response.",
      },
      {
        title: "Cloud Computing",
        href: "/courses/cloud-computing",
        description: "AWS, Azure, and GCP from fundamentals to advanced architecture.",
      },
      {
        title: "DevOps & DevSecOps",
        href: "/courses/devsecops",
        description: "CI/CD pipelines, IaC, and security integrated into delivery.",
      },
      {
        title: "Ethical Hacking",
        href: "/courses/ethical-hacking",
        description: "Hands-on offensive security from recon to post-exploitation.",
      },
      {
        title: "Penetration Testing",
        href: "/courses/penetration-testing",
        description: "Professional pentest methodology, CVSS scoring, and reporting.",
      },
      {
        title: "API Security",
        href: "/courses/api-security",
        description: "OWASP API Top 10, BOLA, auth attacks, and API hardening.",
      },
      {
        title: "AI Agent Development",
        href: "/courses/ai-agent-development",
        description: "Build autonomous AI agents with LangChain and multi-agent frameworks.",
      },
      {
        title: "SOC Analyst",
        href: "/courses/soc-analyst",
        description: "SIEM, threat detection, MITRE ATT&CK, and incident response.",
      },
      {
        title: "Docker & Kubernetes",
        href: "/courses/docker-kubernetes",
        description: "Containerization and orchestration for production deployments.",
      },
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
    { title: "Artificial Intelligence", href: "/courses/artificial-intelligence" },
    { title: "Cyber Security", href: "/courses/cybersecurity" },
    { title: "Ethical Hacking", href: "/courses/ethical-hacking" },
    { title: "Penetration Testing", href: "/courses/penetration-testing" },
    { title: "API Security", href: "/courses/api-security" },
    { title: "SOC Analyst", href: "/courses/soc-analyst" },
    { title: "View All Courses", href: "/courses" },
  ],
  company: [
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
    { title: "Download", href: "/download" },
  ],
  services: [
    { title: "API & SaaS Security Testing", href: "/services/api-security-testing" },
    { title: "Penetration Testing & Red Teaming", href: "/services/penetration-testing" },
    { title: "Secure Backend & Cloud Engineering", href: "/services/backend-engineering" },
    { title: "Blockchain Security & Smart Contract Engineering", href: "/services/blockchain-security" },
    { title: "Automation & AI Workflow Systems", href: "/services/automation-ai" },
  ],
  products: [
    { title: "UZYNTRA API Firewall", href: "/products/uzyntra-api-firewall" },
    { title: "UZYNTRA UI Dashboard", href: "/products" },
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
