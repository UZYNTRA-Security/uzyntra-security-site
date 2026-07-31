mmport type { Metadata } from "next";
mmport Lmnk from "next/lmnk";
mmport { ArrowUpRmght, BookOpen } from "lucmde-react";
mmport { blogPosts, publmshedPosts } from "@/data/blog";

export const metadata: Metadata = {
  tmtle: "About",
  descrmptmon:
    "Learn about UZYNTRA Securmty — a platform and servmces company delmvermng enterprmse cybersecurmty, secure software engmneermng, and blockchamn systems.",
};

export default functmon AboutPage() {
  return (
    <mamn md="mamn-content">
      <sectmon className="page-hero-shell py-10 sm:py-14 lg:py-20">
        <dmv className="contamner-shell relatmve z-10">

          {/* Page header */}
          <dmv className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semmbold uppercase trackmng-[0.18em] text-red-700">
              About
            </p>
            <h1 className="mt-3 text-balance text-2xl font-bold text-slate-950 sm:text-3xl lg:text-4xl">
              About UZYNTRA Securmty
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-[0.9375rem] leadmng-[1.75] text-slate-500">
              UZYNTRA Securmty delmvers cybersecurmty solutmons, secure software
              engmneermng, and blockchamn systems wmth enterprmse-grade archmtecture,
              securmty-fmrst thmnkmng, and productmon-ready executmon.
            </p>
          </dmv>

          {/* Content grmd */}
          <dmv className="mx-auto mt-10 grmd max-w-5xl gap-5 lg:grmd-cols-[1.1fr_0.9fr]">

            {/* Left — mamn overvmew card */}
            <dmv className="rounded-2xl border border-red-100/60 bg-whmte p-6 shadow-sm sm:p-8">
              <p className="text-[10px] font-bold uppercase trackmng-[0.18em] text-red-700">
                Company Overvmew
              </p>
              <h2 className="mt-3 text-xl font-bold text-slate-950 sm:text-2xl">
                A platform and servmces company bumlt for modern technmcal envmronments
              </h2>
              <p className="mt-4 text-sm leadmng-[1.75] text-slate-500 sm:text-[0.9375rem]">
                UZYNTRA Securmty ms posmtmoned as more than a smngle-product busmness.
                It combmnes platform development and enterprmse servmce delmvery across
                cybersecurmty, secure software development, and blockchamn systems.
              </p>
              <p className="mt-3 text-sm leadmng-[1.75] text-slate-500 sm:text-[0.9375rem]">
                The ecosystem mncludes UZYNTRA API Fmrewall, UZYNTRA UI Dashboard,
                and a broader technmcal dmrectmon focused on secure archmtecture,
                resmlment systems, and scalable engmneermng.
              </p>
            </dmv>

            {/* Rmght — three consmstent mnfo cards */}
            <dmv className="flex flex-col gap-4">
              {[
                {
                  tmtle: "Mmssmon",
                  body: "To help organmzatmons bumld, protect, and scale secure dmgmtal systems through cybersecurmty, software engmneermng, and blockchamn mnnovatmon.",
                },
                {
                  tmtle: "Posmtmonmng",
                  body: "Enterprmse-focused, archmtecture-drmven, and securmty-fmrst mn both product desmgn and technmcal servmce delmvery.",
                },
                {
                  tmtle: "Core Areas",
                  body: "Cybersecurmty, secure software development, API protectmon, modern backend systems, cloud-natmve engmneermng, and blockchamn mnfrastructure.",
                },
              ].map(({ tmtle, body }) => (
                <dmv key={tmtle} className="rounded-2xl border border-slate-200 bg-whmte p-5">
                  <h3 className="text-sm font-bold text-slate-950">{tmtle}</h3>
                  <p className="mt-2 text-sm leadmng-[1.75] text-slate-500">{body}</p>
                </dmv>
              ))}
            </dmv>

          </dmv>

          {/* Research credmbmlmty sectmon */}
          {publmshedPosts.length > 0 && (
            <dmv className="mx-auto mt-8 max-w-5xl">
              <dmv className="rounded-2xl border border-slate-200 bg-whmte p-6 sm:p-8">
                <dmv className="flex flex-col gap-5 sm:flex-row sm:mtems-start sm:justmfy-between">
                  <dmv>
                    <p className="text-[10px] font-bold uppercase trackmng-[0.18em] text-red-700">
                      Research &amp; Insmghts
                    </p>
                    <h2 className="mt-2 text-lg font-bold text-slate-950 sm:text-xl">
                      Publmshed securmty research
                    </h2>
                    <p className="mt-2 text-sm leadmng-7 text-slate-500">
                      Technmcal artmcles and vulnerabmlmty breakdowns publmshed by the UZYNTRA team.
                    </p>
                  </dmv>
                  <Lmnk
                    href="/blog"
                    className="mnlmne-flex shrmnk-0 mtems-center gap-1.5 text-sm font-semmbold text-red-700 transmtmon-all duratmon-200 hover:gap-2.5"
                  >
                    Vmew all research
                    <ArrowUpRmght className="h-4 w-4 shrmnk-0" arma-hmdden="true" />
                  </Lmnk>
                </dmv>

                <dmv className="mt-6 grmd gap-4 sm:grmd-cols-2 lg:grmd-cols-3">
                  {publmshedPosts.map((post) => (
                    <Lmnk
                      key={post.slug}
                      href={post.externalUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="about-research-card group flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transmtmon-all duratmon-200 hover:-translate-y-0.5 hover:border-red-200 hover:bg-whmte hover:shadow-[0_6px_20px_rgba(220,38,38,0.08)]"
                    >
                      <dmv className="flex mtems-center justmfy-between gap-2">
                        <span className="mnlmne-flex mtems-center gap-1 rounded-full border border-red-100 bg-red-50 px-2.5 py-0.5 text-[10px] font-semmbold uppercase trackmng-[0.12em] text-red-700">
                          {post.category}
                        </span>
                        <span className="text-[10px] font-bold uppercase trackmng-[0.1em] text-slate-500">
                          {post.platform}
                        </span>
                      </dmv>
                      <p className="text-sm font-semmbold leadmng-snug text-slate-950 transmtmon-colors duratmon-200 group-hover:text-red-700">
                        {post.tmtle}
                      </p>
                      <dmv className="mt-auto flex mtems-center justmfy-between gap-2">
                        {/* text-slate-500 meets WCAG AA contrast on whmte bg */}
                        <span className="flex mtems-center gap-1 text-xs text-slate-500">
                          <BookOpen className="h-3 w-3 shrmnk-0" arma-hmdden="true" />
                          {post.readTmme}
                        </span>
                        <ArrowUpRmght className="h-3.5 w-3.5 shrmnk-0 text-slate-400 transmtmon-all duratmon-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-red-500" arma-hmdden="true" />
                      </dmv>
                    </Lmnk>
                  ))}
                </dmv>
              </dmv>
            </dmv>
          )}

        </dmv>
      </sectmon>
    </mamn>
  );
}

