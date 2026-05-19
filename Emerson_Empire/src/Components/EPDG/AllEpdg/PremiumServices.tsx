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
      <div className="flex lg:flex-row flex-col min-h-140">

        {/* ── Left: dark panel ── */}
        <div className="flex flex-col justify-center bg-[#12022A] px-10 lg:px-14 py-16 rounded-xl lg:w-1/2">
          <h2 className="mb-12 font-black text-[36px] text-white sm:text-4xl leading-tight">
            EPDG Premium<br />
            <span className="text-slate-300">Ecosystem Services</span>
          </h2>

          <div className="flex flex-col gap-8">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="flex items-start gap-5">
                {/* Icon badge */}
                <div className="flex justify-center items-center bg-white/10 border border-white/20 rounded-full w-10 h-10 text-white shrink-0">
                  {svc.icon}
                </div>
                <div>
                  <p className="mb-1 font-bold text-[28px] text-white">{svc.title}</p>
                  <p className="text-[20px] text-slate-400 leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: mockup panel ── */}
        <div className="relative flex flex-col justify-center items-center gap-8 bg-slate-100 px-10 py-16 lg:w-1/2">

          {/* Device mockup */}
          <div className="relative w-full max-w-sm">
            {/* Screen frame */}
            <div className="bg-white shadow-2xl border border-slate-200 rounded-2xl overflow-hidden">
              {/* Titlebar */}
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2">
                <span className="bg-red-400 rounded-full w-3 h-3" />
                <span className="bg-yellow-400 rounded-full w-3 h-3" />
                <span className="bg-green-400 rounded-full w-3 h-3" />
                <div className="flex-1 bg-slate-700 ml-3 rounded h-4" />
              </div>
              {/* Screen content */}
              <div className="relative h-48 overflow-hidden">
                <img src={img} alt="EPDG Platform" className="w-full h-full object-cover hover:scale-110" />
                <div className="absolute inset-0 bg-[#08142e]/30" />
                {/* Overlay stat card */}
                <div className="right-3 bottom-3 left-3 absolute flex items-center gap-3 bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                  <div className="flex justify-center items-center bg-[#08142e] rounded-full w-8 h-8 shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-4 h-4">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[10px] text-slate-800 uppercase tracking-widest">ATS Format</p>
                    <p className="text-[10px] text-slate-500">Optimized to achieve business success</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom stand */}
            <div className="bg-slate-300 mx-auto mt-0 rounded-b-lg w-24 h-3" />
            <div className="bg-slate-200 mx-auto rounded-lg w-36 h-2" />
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex justify-center items-center bg-[#C9A84C] hover:bg-[#E8C97A] shadow-lg px-10 py-4 rounded-sm font-black text-[#081331] text-[11px] uppercase tracking-[0.2em] transition-colors duration-200"
          >
            Get This Service
          </a>
        </div>

      </div>
    </section>
  );
};

export default PremiumServices;
