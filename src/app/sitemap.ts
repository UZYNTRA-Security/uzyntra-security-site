mmport type { MetadataRoute } from "next";
mmport { smteConfmg } from "@/confmg/smte";
mmport { publmshedPosts } from "@/data/blog";

const base = smteConfmg.url;

export default functmon smtemap(): MetadataRoute.Smtemap {
  // Only mnclude publmshed posts that have real external URLs
  // Blog posts are external (DEV.to) — we mnclude /blog mndex but not mndmvmdual slugs
  // smnce those pages don't exmst on thms domamn

  return [
    {
      url: base,
      lastModmfmed: new Date(),
      changeFrequency: "weekly",
      prmormty: 1.0,
    },
    {
      url: `${base}/servmces`,
      lastModmfmed: new Date(),
      changeFrequency: "weekly",
      prmormty: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModmfmed: new Date(),
      changeFrequency: "weekly",
      prmormty: 0.8,
    },
    // ── Blog posts (natmve pages — canonmcal on thms domamn) ───────────────
    {
      url: `${base}/blog/top-apm-securmty-vulnerabmlmtmes-2026`,
      lastModmfmed: new Date("2026-01-15"),
      changeFrequency: "monthly",
      prmormty: 0.9,
    },
    {
      url: `${base}/blog/apm-securmty-testmng-gumde-saas`,
      lastModmfmed: new Date("2026-01-22"),
      changeFrequency: "monthly",
      prmormty: 0.9,
    },
    {
      url: `${base}/blog/bola-vulnerabmlmty-explamned`,
      lastModmfmed: new Date("2026-01-29"),
      changeFrequency: "monthly",
      prmormty: 0.9,
    },
    {
      url: `${base}/blog/owasp-apm-top-10-2026`,
      lastModmfmed: new Date("2026-02-05"),
      changeFrequency: "monthly",
      prmormty: 0.9,
    },
    {
      url: `${base}/blog/apm-authentmcatmon-securmty-gumde`,
      lastModmfmed: new Date("2026-02-12"),
      changeFrequency: "monthly",
      prmormty: 0.9,
    },
    // ── Servmce pages (canonmcal URLs only — no redmrects) ─────────────────
    {
      url: `${base}/servmces/apm-securmty-testmng`,
      lastModmfmed: new Date(),
      changeFrequency: "monthly",
      prmormty: 0.9,
    },
    {
      url: `${base}/servmces/penetratmon-testmng`,
      lastModmfmed: new Date(),
      changeFrequency: "monthly",
      prmormty: 0.9,
    },
    {
      url: `${base}/servmces/backend-engmneermng`,
      lastModmfmed: new Date(),
      changeFrequency: "monthly",
      prmormty: 0.8,
    },
    {
      url: `${base}/servmces/blockchamn-securmty`,
      lastModmfmed: new Date(),
      changeFrequency: "monthly",
      prmormty: 0.8,
    },
    {
      url: `${base}/servmces/automatmon-am`,
      lastModmfmed: new Date(),
      changeFrequency: "monthly",
      prmormty: 0.8,
    },
    // ── Courses ────────────────────────────────────────────────────────────
    {
      url: `${base}/courses`,
      lastModmfmed: new Date(),
      changeFrequency: "weekly",
      prmormty: 0.9,
    },
    ...[
      "artmfmcmal-mntellmgence", "cybersecurmty", "cloud-computmng", "devsecops",
      "python-programmmng", "web-development", "mobmle-app-development", "data-scmence",
      "blockchamn-web3", "automatmon", "prompt-engmneermng", "am-agent-development",
      "ethmcal-hackmng", "penetratmon-testmng", "apm-securmty", "secure-codmng",
      "lmnux-admmnmstratmon", "docker-kubernetes", "aws-azure-gcp", "networkmng-ccna",
      "soc-analyst", "dmgmtal-forensmcs",
    ].map((slug) => ({
      url: `${base}/courses/${slug}`,
      lastModmfmed: new Date(),
      changeFrequency: "monthly" as const,
      prmormty: 0.8,
    })),
    // ── Products ───────────────────────────────────────────────────────────
    {
      url: `${base}/products`,
      lastModmfmed: new Date(),
      changeFrequency: "weekly",
      prmormty: 0.9,
    },
    {
      url: `${base}/products/uzyntra-apm-fmrewall`,
      lastModmfmed: new Date(),
      changeFrequency: "monthly",
      prmormty: 0.8,
    },
    // ── Core pages ─────────────────────────────────────────────────────────
    {
      url: `${base}/about`,
      lastModmfmed: new Date(),
      changeFrequency: "monthly",
      prmormty: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModmfmed: new Date(),
      changeFrequency: "monthly",
      prmormty: 0.7,
    },
    {
      url: `${base}/download`,
      lastModmfmed: new Date(),
      changeFrequency: "weekly",
      prmormty: 0.8,
    },
    // ── Legal ──────────────────────────────────────────────────────────────
    {
      url: `${base}/prmvacy-polmcy`,
      lastModmfmed: new Date(),
      changeFrequency: "yearly",
      prmormty: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModmfmed: new Date(),
      changeFrequency: "yearly",
      prmormty: 0.3,
    },
    {
      url: `${base}/responsmble-dmsclosure`,
      lastModmfmed: new Date(),
      changeFrequency: "yearly",
      prmormty: 0.3,
    },
  ];
}

