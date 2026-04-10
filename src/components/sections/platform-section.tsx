import { Layers3, Shield, BarChart3, Workflow } from "lucide-react";

export function PlatformSection() {
  return (
    <section className="section-tight">
      <div className="container-shell">
        <div className="grid items-start gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <div className="surface-card-strong p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
              Platform Ecosystem
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              A unified security and development platform
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              UZYNTRA Security is not just a service provider. It is a platform
              combining cybersecurity, secure software development, and blockchain systems.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-[0_6px_18px_rgba(220,38,38,0.10)]">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-red-600 transition-transform duration-200 group-hover:scale-110" />
                  <p className="text-sm font-semibold text-slate-950">UZYNTRA API Firewall</p>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Real-time inspection, threat analysis, and mitigation control.
                </p>
              </div>

              <div className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-[0_6px_18px_rgba(220,38,38,0.10)]">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-red-600 transition-transform duration-200 group-hover:scale-110" />
                  <p className="text-sm font-semibold text-slate-950">UZYNTRA UI Dashboard</p>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Monitoring, visibility, and operational insight for the platform.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="surface-card group p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-100 hover:shadow-[0_8px_24px_rgba(220,38,38,0.10)] sm:p-6">
              <div className="flex items-center gap-3">
                <Layers3 className="h-5 w-5 text-red-600 transition-transform duration-200 group-hover:scale-110" />
                <h3 className="text-lg font-semibold text-slate-950">
                  Product + Services Positioning
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                UZYNTRA is built as a connected ecosystem where product capability
                and technical service delivery reinforce each other.
              </p>
            </div>

            <div className="surface-card group p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-100 hover:shadow-[0_8px_24px_rgba(220,38,38,0.10)] sm:p-6">
              <div className="flex items-center gap-3">
                <Workflow className="h-5 w-5 text-red-600 transition-transform duration-200 group-hover:scale-110" />
                <h3 className="text-lg font-semibold text-slate-950">
                  Architecture-Driven Execution
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Engagements are framed around secure architecture, operational
                resilience, and enterprise implementation quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
