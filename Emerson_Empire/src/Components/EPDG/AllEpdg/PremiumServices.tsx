import type { FC } from "react";
import img from "../../../assets/Girl_Typing.webp";

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    title: "Executive Presence & LinkedIn Mastery",
    desc: "From job seekers to in-demand professionals — we engineer your personal brand to attract global recruiters, command premium rates, and position you as the top voice in your field.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Performance Management Analytics",
    desc: "Our graduates gain access to real-time performance dashboards, providing actionable strategy insights and measurable progress milestones to achieve verifiable global recognition.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Financial Scalability & Global ROI",
    desc: "From portfolio to global income — we track the financial and personal metrics required for sustainable scalability, helping you exceed income ceilings and build measurable ROI.",
  },
];

const PremiumServices: FC = () => {
  return (
    <section className="py-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[560px]">

        {/* ── Left: dark panel ── */}
        <div className="bg-[#08142e] lg:w-1/2 px-10 py-16 lg:px-14 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-12">
            EPDG Premium<br />
            <span className="text-slate-300">Ecosystem Services</span>
          </h2>

          <div className="flex flex-col gap-8">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="flex gap-5 items-start">
                {/* Icon badge */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  {svc.icon}
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">{svc.title}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: mockup panel ── */}
        <div className="bg-slate-100 lg:w-1/2 relative flex flex-col items-center justify-center px-10 py-16 gap-8">

          {/* Device mockup */}
          <div className="relative w-full max-w-sm">
            {/* Screen frame */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
              {/* Titlebar */}
              <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-3 flex-1 bg-slate-700 rounded h-4" />
              </div>
              {/* Screen content */}
              <div className="relative h-48 overflow-hidden">
                <img src={img} alt="EPDG Platform" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#08142e]/30" />
                {/* Overlay stat card */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#08142e] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-4 h-4">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">ATS Format</p>
                    <p className="text-[10px] text-slate-500">Optimized to achieve business success</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom stand */}
            <div className="mx-auto w-24 h-3 bg-slate-300 rounded-b-lg mt-0" />
            <div className="mx-auto w-36 h-2 bg-slate-200 rounded-lg" />
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#C9A84C] hover:bg-[#E8C97A] text-[#081331] text-[11px] font-black uppercase tracking-[0.2em] px-10 py-4 rounded-sm transition-colors duration-200 shadow-lg"
          >
            Get This Service
          </a>
        </div>

      </div>
    </section>
  );
};

export default PremiumServices;
