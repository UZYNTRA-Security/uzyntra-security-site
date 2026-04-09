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
        title: "Cybersecurity",
        href: "/services/cybersecurity",
        description: "Offensive, defensive, cloud, identity, and enterprise security services.",
      },
      {
        title: "Software Development",
        href: "/services/software-development",
        description: "Secure web, mobile, cloud, Rust, AI, and DevOps engineering services.",
      },
      {
        title: "Blockchain",
        href: "/services/blockchain",
        description: "Enterprise blockchain, smart contracts, dApps, infrastructure, and consulting.",
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
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const footerNavigation = {
  company: [
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Download", href: "/download" },
  ],
  services: [
    { title: "Cybersecurity", href: "/services/cybersecurity" },
    { title: "Software Development", href: "/services/software-development" },
    { title: "Blockchain", href: "/services/blockchain" },
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
    { title: "Email", href: "mailto:contact@uzyntra.com" },
  ],
} as const;
