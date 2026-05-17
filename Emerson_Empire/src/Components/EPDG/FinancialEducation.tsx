import type { FC } from "react";
import { EcoSystem } from "../../assets";

const FinancialEducation: FC = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div>
            <p className="text-3xl font-bold uppercase tracking-[0.28em] text-black mb-3">
              EPDG Premium Ecosystem Services
            </p>
            <h2 className="text-2xl font-semibold text-slate-950 mb-2">
              Executive Presence & LinkedIn Mastery
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              We don’t just optimize a profile; we engineer a digital identity of authority. We position your brand to attract global recruiters and command respect from the first click.
            </p>
            <hr className="border-slate-1000 mt-3 mb-3" />

            <div className="space-y-6">
              {[
                {
                  title: "High-Stakes Interview Simulation",
                  description:
                    "Turn pressure into a competitive advantage. Our simulated corporate environments master the art of remote communication, preparing you to secure six-figure roles with confidence.",
                },
                {
                  title: "Global Mentorship Network",
                  description:
                    "Gain direct access to the powerhouse of The Emerson Empire. Break professional isolation by connecting with elite leaders who provide the roadmap to global executive status.",
                },
                {
                  title: "Real-Time Performance Dashboard",
                  description:
                    "Stop wondering about your progress. Our professional metrics system tracks your growth in real-time, providing verifiable data on your evolution toward senior management roles.",
                },
                {
                  title: "Financial Scalability & Global ROI",
                  description:
                    "We teach you to manage the success you build. Master international contract negotiation, salary scaling, and the financial mindset required for the borderless economy.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <p className="text-2xl font-semibold text-slate-950 mb-2">{item.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-[0_40px_120px_-70px_rgba(15,32,73,0.2)] bg-white">
            <img src={EcoSystem} alt="Professional growth" className="h-full w-full object-cover min-h-[420px]" />
            <div className="absolute bottom-6 left-6 bg-white/95 px-4 py-3 rounded-3xl border border-slate-200 shadow-xl shadow-slate-900/10 max-w-[220px]">
              <p className="text-center text-[10px] text-slate-900 font-semibold uppercase tracking-[0.24em]">
                ATS format to achieve maximum succes
              </p>
            </div>
            <div className="absolute bottom-6 right-6">
              <button className="justify-center bg-white text-slate text-[11px] font-semibold uppercase tracking-[0.18em] px-8 py-4 rounded-[8px] shadow-lg shadow-slate-950/20 cursor-pointer transition hover:bg-slate-800 hover:text-white">
                Get this service
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialEducation;

