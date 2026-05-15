import type { FC } from "react";
import { Helena } from "../../assets";

const FinancialEducation: FC = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500 mb-3">
              EPDG Premium Ecosystem Services
            </p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 mb-5">
              Executive Presence & LinkedIn Mastery
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              We don’t just optimize a profile; we engineer a digital identity of authority. We position your brand to attract global recruiters and command respect from the first click.
            </p>

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
                  <p className="text-sm font-semibold text-slate-950 mb-2">{item.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-[0_40px_120px_-70px_rgba(15,32,73,0.2)] bg-white">
            <img src={Helena} alt="Professional growth" className="h-full w-full object-cover min-h-[420px]" />
            <div className="absolute bottom-6 left-6 bg-white/95 px-4 py-3 rounded-3xl border border-slate-200 shadow-xl shadow-slate-900/10 max-w-[220px]">
              <p className="text-[10px] text-slate-900 font-semibold uppercase tracking-[0.24em]">
                ATS format to achieve maximum succes
              </p>
            </div>
            <div className="absolute bottom-6 right-6">
              <button className="bg-slate-950 text-white text-[11px] font-semibold uppercase tracking-[0.18em] px-6 py-3 rounded-full shadow-lg shadow-slate-950/20">
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

