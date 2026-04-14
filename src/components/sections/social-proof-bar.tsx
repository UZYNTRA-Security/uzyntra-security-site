import { CheckCircle2, Users, Zap } from "lucide-react";

export function SocialProofBar() {
  return (
    <div className="social-proof-bar border-y border-slate-200 bg-slate-50/80 py-3">
      <div className="container-shell">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600">
          <span className="social-proof-item flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 shrink-0 text-red-600" aria-hidden="true" />
            Built for startups, SaaS platforms, and security-conscious engineering teams
          </span>
          <span className="social-proof-divider hidden h-3.5 w-px bg-slate-300 sm:block" aria-hidden="true" />
          <span className="social-proof-item flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-red-600" aria-hidden="true" />
            Manual testing + real attack simulation — not just automated scans
          </span>
          <span className="social-proof-divider hidden h-3.5 w-px bg-slate-300 sm:block" aria-hidden="true" />
          <span className="social-proof-item flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 shrink-0 text-red-600" aria-hidden="true" />
            Security assessment response within 24 hours
          </span>
        </div>
      </div>
    </div>
  );
}
