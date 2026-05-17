import React from "react";

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Operational Audits",
    description:
      "Stop losing time to inefficient processes. We audit your business workflows and intake systems to maximize productivity and client satisfaction.",
    cta: "Optimize My Workflow",
    highlight: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "1099 & Small Business Tax",
    description:
      "Professional tax preparation focused on business-specific deductions. We ensure you stay compliant while keeping more of your hard-earned revenue.",
    cta: "Maximize My Deductions",
    highlight: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Bookkeeping Cleanup",
    description:
      "We turn messy receipts into organized financial records. Clear books mean better decisions and a stress-free tax season every year.",
    cta: "Organize My Books",
    highlight: false,
  },
];

const BusinessSupport: React.FC = () => {
  return (
    <section className="bg-[#0a0118] py-20 px-6 sm:px-10 lg:px-16 border-y-2 border-[#1a3a8f]/40">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl sm:text-5xl font-black text-white text-center mb-14">
          Small Business Support
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className={`rounded-2xl p-8 flex flex-col gap-5 border transition-transform duration-200 hover:-translate-y-1 ${
                svc.highlight
                  ? "bg-[#1e0c4e] border-[#C9A84C]/40"
                  : "bg-[#12022A] border-white/10"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  svc.highlight ? "bg-[#C9A84C]/20 text-[#C9A84C]" : "bg-white/10 text-white/70"
                }`}
              >
                {svc.icon}
              </div>

              <div>
                <h3 className={`text-sm font-black uppercase tracking-[0.15em] mb-3 ${svc.highlight ? "text-[#C9A84C]" : "text-white"}`}>
                  {svc.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {svc.description}
                </p>
              </div>

              <a
                href="#contact"
                className={`mt-auto inline-flex items-center justify-center px-6 py-3 rounded-sm text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 ${
                  svc.highlight
                    ? "bg-[#C9A84C] hover:bg-[#E8C97A] text-[#12022A]"
                    : "bg-[#C9A84C]/10 hover:bg-[#C9A84C]/20 text-[#C9A84C] border border-[#C9A84C]/30"
                }`}
              >
                {svc.cta}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BusinessSupport;
