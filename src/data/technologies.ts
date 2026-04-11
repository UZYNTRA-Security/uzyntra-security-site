export type TechnologyCategory = "cybersecurity" | "software" | "blockchain" | "n8n";

export type TechnologyItem = {
  name: string;
  slug: string;
  image: string;
  alt: string;
  category: TechnologyCategory;
  featured?: boolean;
};

export const technologies: TechnologyItem[] = [
  // ── Cybersecurity ──────────────────────────────────────────────────────────
  {
    name: "Nessus",
    slug: "nessus",
    image: "/images/technologies/nessus.webp",
    alt: "Nessus vulnerability scanner logo",
    category: "cybersecurity",
    featured: true,
  },
  {
    name: "Burp Suite",
    slug: "burp-suite",
    image: "/images/technologies/burp-suite.webp",
    alt: "Burp Suite web security testing logo",
    category: "cybersecurity",
    featured: true,
  },
  {
    name: "Nmap",
    slug: "nmap",
    image: "/images/technologies/nmap.webp",
    alt: "Nmap network scanner logo",
    category: "cybersecurity",
    featured: true,
  },
  {
    name: "Wireshark",
    slug: "wireshark",
    image: "/images/technologies/wireshark.webp",
    alt: "Wireshark network protocol analyzer logo",
    category: "cybersecurity",
    featured: true,
  },
  {
    name: "Metasploit",
    slug: "metasploit",
    image: "/images/technologies/metasploit.webp",
    alt: "Metasploit penetration testing framework logo",
    category: "cybersecurity",
    featured: true,
  },
  {
    name: "Microsoft Sentinel",
    slug: "microsoft-sentinel",
    image: "/images/technologies/microsoft-sentinel.webp",
    alt: "Microsoft Sentinel SIEM logo",
    category: "cybersecurity",
    featured: true,
  },
  {
    name: "Splunk",
    slug: "splunk",
    image: "/images/technologies/splunk.webp",
    alt: "Splunk security analytics logo",
    category: "cybersecurity",
    featured: true,
  },
  {
    name: "CrowdStrike",
    slug: "crowdstrike",
    image: "/images/technologies/crowdstrike.webp",
    alt: "CrowdStrike Falcon EDR logo",
    category: "cybersecurity",
    featured: true,
  },
  {
    name: "Okta",
    slug: "okta",
    image: "/images/technologies/okta.webp",
    alt: "Okta identity and access management logo",
    category: "cybersecurity",
    featured: true,
  },
  {
    name: "Prisma Cloud",
    slug: "prisma-cloud",
    image: "/images/technologies/prisma-cloud.webp",
    alt: "Prisma Cloud cloud security logo",
    category: "cybersecurity",
  },
  {
    name: "Snyk",
    slug: "snyk",
    image: "/images/technologies/snyk.webp",
    alt: "Snyk developer security platform logo",
    category: "cybersecurity",
  },
  {
    name: "Palo Alto",
    slug: "palo-alto",
    image: "/images/technologies/palo-alto.webp",
    alt: "Palo Alto Networks security logo",
    category: "cybersecurity",
  },

  // ── Software Development ───────────────────────────────────────────────────
  {
    name: "Rust",
    slug: "rust",
    image: "/images/technologies/rust.webp",
    alt: "Rust programming language logo",
    category: "software",
    featured: true,
  },
  {
    name: "TypeScript",
    slug: "typescript",
    image: "/images/technologies/typescript.webp",
    alt: "TypeScript programming language logo",
    category: "software",
    featured: true,
  },
  {
    name: "Next.js",
    slug: "nextjs",
    image: "/images/technologies/nextjs.webp",
    alt: "Next.js React framework logo",
    category: "software",
    featured: true,
  },
  {
    name: "React",
    slug: "react",
    image: "/images/technologies/react.webp",
    alt: "React JavaScript library logo",
    category: "software",
    featured: true,
  },
  {
    name: "Node.js",
    slug: "nodejs",
    image: "/images/technologies/nodejs.webp",
    alt: "Node.js runtime logo",
    category: "software",
    featured: true,
  },
  {
    name: "Python",
    slug: "python",
    image: "/images/technologies/python.webp",
    alt: "Python programming language logo",
    category: "software",
    featured: true,
  },
  {
    name: "Go",
    slug: "go",
    image: "/images/technologies/go.webp",
    alt: "Go programming language logo",
    category: "software",
    featured: true,
  },
  {
    name: "PostgreSQL",
    slug: "postgresql",
    image: "/images/technologies/postgresql.webp",
    alt: "PostgreSQL database logo",
    category: "software",
    featured: true,
  },
  {
    name: "Docker",
    slug: "docker",
    image: "/images/technologies/docker.webp",
    alt: "Docker container platform logo",
    category: "software",
    featured: true,
  },
  {
    name: "Kubernetes",
    slug: "kubernetes",
    image: "/images/technologies/kubernetes.webp",
    alt: "Kubernetes container orchestration logo",
    category: "software",
    featured: true,
  },
  {
    name: "AWS",
    slug: "aws",
    image: "/images/technologies/aws.webp",
    alt: "Amazon Web Services logo",
    category: "software",
    featured: true,
  },
  {
    name: "GitHub Actions",
    slug: "github-actions",
    image: "/images/technologies/github-actions.webp",
    alt: "GitHub Actions CI/CD logo",
    category: "software",
  },
  {
    name: "Tailwind CSS",
    slug: "tailwindcss",
    image: "/images/technologies/tailwindcss.webp",
    alt: "Tailwind CSS utility framework logo",
    category: "software",
    featured: true,
  },
  {
    name: "Redis",
    slug: "redis-software",
    image: "/images/technologies/redis.webp",
    alt: "Redis in-memory data store logo",
    category: "software",
    featured: true,
  },
  {
    name: "MongoDB",
    slug: "mongodb",
    image: "/images/technologies/mongodb.webp",
    alt: "MongoDB NoSQL database logo",
    category: "software",
    featured: true,
  },
  {
    name: "GraphQL",
    slug: "graphql-software",
    image: "/images/technologies/graphql.webp",
    alt: "GraphQL API query language logo",
    category: "software",
    featured: true,
  },
  {
    name: "Terraform",
    slug: "terraform",
    image: "/images/technologies/terraform.webp",
    alt: "Terraform infrastructure as code logo",
    category: "software",
    featured: true,
  },

  // ── Blockchain ─────────────────────────────────────────────────────────────
  {
    name: "Ethereum",
    slug: "ethereum",
    image: "/images/technologies/ethereum.webp",
    alt: "Ethereum blockchain platform logo",
    category: "blockchain",
    featured: true,
  },
  {
    name: "Solidity",
    slug: "solidity",
    image: "/images/technologies/solidity.webp",
    alt: "Solidity smart contract language logo",
    category: "blockchain",
    featured: true,
  },
  {
    name: "Hardhat",
    slug: "hardhat",
    image: "/images/technologies/hardhat.webp",
    alt: "Hardhat Ethereum development environment logo",
    category: "blockchain",
    featured: true,
  },
  {
    name: "Foundry",
    slug: "foundry",
    image: "/images/technologies/foundry.webp",
    alt: "Foundry smart contract toolkit logo",
    category: "blockchain",
    featured: true,
  },
  {
    name: "Polygon",
    slug: "polygon",
    image: "/images/technologies/polygon.webp",
    alt: "Polygon blockchain scaling solution logo",
    category: "blockchain",
    featured: true,
  },
  {
    name: "Solana",
    slug: "solana",
    image: "/images/technologies/solana.webp",
    alt: "Solana blockchain platform logo",
    category: "blockchain",
    featured: true,
  },
  {
    name: "Ethers.js",
    slug: "ethersjs",
    image: "/images/technologies/ethersjs.webp",
    alt: "Ethers.js Ethereum library logo",
    category: "blockchain",
    featured: true,
  },
  {
    name: "IPFS",
    slug: "ipfs",
    image: "/images/technologies/ipfs.webp",
    alt: "IPFS decentralized storage logo",
    category: "blockchain",
  },
  {
    name: "Chainlink",
    slug: "chainlink",
    image: "/images/technologies/chainlink.webp",
    alt: "Chainlink oracle network logo",
    category: "blockchain",
  },
  {
    name: "Alchemy",
    slug: "alchemy",
    image: "/images/technologies/alchemy.webp",
    alt: "Alchemy blockchain developer platform logo",
    category: "blockchain",
  },
  {
    name: "OpenZeppelin",
    slug: "openzeppelin",
    image: "/images/technologies/openzeppelin.webp",
    alt: "OpenZeppelin smart contract library logo",
    category: "blockchain",
  },
  {
    name: "Infura",
    slug: "infura",
    image: "/images/technologies/infura.webp",
    alt: "Infura Ethereum node infrastructure logo",
    category: "blockchain",
  },

  // ── n8n Automation ─────────────────────────────────────────────────────────
  {
    name: "n8n",
    slug: "n8n",
    image: "/images/technologies/n8n.webp",
    alt: "n8n workflow automation platform logo",
    category: "n8n",
    featured: true,
  },
  {
    name: "LangChain",
    slug: "langchain",
    image: "/images/technologies/langchain.webp",
    alt: "LangChain AI agent framework logo",
    category: "n8n",
    featured: true,
  },
  {
    name: "Ollama",
    slug: "ollama",
    image: "/images/technologies/ollama.webp",
    alt: "Ollama local LLM runtime logo",
    category: "n8n",
    featured: true,
  },
  {
    name: "PostgreSQL",
    slug: "postgresql-n8n",
    image: "/images/technologies/postgresql.webp",
    alt: "PostgreSQL database logo",
    category: "n8n",
    featured: true,
  },
  {
    name: "Redis",
    slug: "redis",
    image: "/images/technologies/redis.webp",
    alt: "Redis in-memory data store logo",
    category: "n8n",
    featured: true,
  },
  {
    name: "Node.js",
    slug: "nodejs-n8n",
    image: "/images/technologies/nodejs.webp",
    alt: "Node.js runtime logo",
    category: "n8n",
    featured: true,
  },
  {
    name: "TypeScript",
    slug: "typescript-n8n",
    image: "/images/technologies/typescript.webp",
    alt: "TypeScript programming language logo",
    category: "n8n",
    featured: true,
  },
  {
    name: "Docker",
    slug: "docker-n8n",
    image: "/images/technologies/docker.webp",
    alt: "Docker container platform logo",
    category: "n8n",
    featured: true,
  },
  {
    name: "AWS",
    slug: "aws-n8n",
    image: "/images/technologies/aws.webp",
    alt: "Amazon Web Services logo",
    category: "n8n",
  },
  {
    name: "GraphQL",
    slug: "graphql",
    image: "/images/technologies/graphql.webp",
    alt: "GraphQL API query language logo",
    category: "n8n",
  },
];

// ── Page-specific curated selectors ───────────────────────────────────────────

/** Cross-category mix for the home page — 12 items, balanced */
export const homeFeaturedTechnologies: TechnologyItem[] = [
  technologies.find((t) => t.slug === "nessus")!,
  technologies.find((t) => t.slug === "burp-suite")!,
  technologies.find((t) => t.slug === "microsoft-sentinel")!,
  technologies.find((t) => t.slug === "rust")!,
  technologies.find((t) => t.slug === "nextjs")!,
  technologies.find((t) => t.slug === "postgresql")!,
  technologies.find((t) => t.slug === "docker")!,
  technologies.find((t) => t.slug === "aws")!,
  technologies.find((t) => t.slug === "ethereum")!,
  technologies.find((t) => t.slug === "solidity")!,
  technologies.find((t) => t.slug === "n8n")!,
  technologies.find((t) => t.slug === "langchain")!,
];

/** Cybersecurity page — 12 high-signal security tools */
export const cybersecurityTechnologies: TechnologyItem[] = technologies.filter(
  (t) => t.category === "cybersecurity"
);

/** Software development page — 12 core dev tools */
export const softwareTechnologies: TechnologyItem[] = technologies.filter(
  (t) => t.category === "software"
);

/** Blockchain page — 12 blockchain-specific tools */
export const blockchainTechnologies: TechnologyItem[] = technologies.filter(
  (t) => t.category === "blockchain"
);

/** n8n automation page — 10 automation-relevant tools */
export const n8nTechnologies: TechnologyItem[] = technologies.filter(
  (t) => t.category === "n8n"
);
