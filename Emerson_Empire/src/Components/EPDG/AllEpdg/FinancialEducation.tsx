import type { FC } from "react";
 

const FinancialEducation: FC = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto px-6 sm:px-8 max-w-screen-7xl">
        <div className="items-center gap-12 grid lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 font-bold text-black text-3xl uppercase tracking-[0.28em]">
              EPDG Premium Ecosystem Services
            </p>
            <h2 className="mb-2 font-semibold text-slate-950 text-2xl">
              Executive Presence & LinkedIn Mastery
            </h2>
            <p className="mb-4 text-slate-600 text-sm leading-relaxed">
              We don’t just optimize a profile; we engineer a digital identity of authority. We position your brand to attract global recruiters and command respect from the first click.
            </p>
            <hr className="mt-3 mb-3 border-slate-1000" />

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
                  <p className="mb-2 font-semibold text-slate-950 text-2xl">{item.title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-white shadow-[0_40px_120px_-70px_rgba(15,32,73,0.2)] border border-slate-200 rounded-4xl overflow-hidden">
            <img  alt="Professional growth" className="w-full h-full min-h-4xl object-cover" />
            <div className="bottom-6 left-6 absolute bg-white/95 shadow-slate-900/10 shadow-xl px-4 py-3 border border-slate-200 rounded-3xl max-w-55">
              <p className="font-semibold text-[10px] text-slate-900 text-center uppercase tracking-[0.24em]">
                ATS format to achieve maximum succes
              </p>
            </div>
            <div className="right-6 bottom-6 absolute">
              <button className="justify-center bg-white hover:bg-slate-800 shadow-lg shadow-slate-950/20 px-8 py-4 rounded-lg font-semibold text-[11px] text-slate hover:text-white uppercase tracking-[0.18em] transition cursor-pointer">
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

