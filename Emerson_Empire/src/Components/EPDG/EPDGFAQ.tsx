import type { FC } from "react";
import { Helena2 } from "../../assets";

const BLOGS = [
  {
    title: "Why Degrees are Failing",
    description: "Titles have become background noise over prestige. At Emerson, we focus on verifiable work over prestige.",
    date: "12/12/25",
  },
  {
    title: "Beyond Borders: Mastering Executive Presence in the Remote Era.",
    description: "The global market doesn’t just hire workers; it recruits leaders. Discover how our leadership development for remote professionals is redefining executive success.",
    date: "12/12/25",
  },
  {
    title: "The Experience Gap is a Myth: How to Build Verifiable Proof of Work.",
    description: "Stop waiting for permission to grow. We break down how methodology uses a remote internship with portfolio building to bypass traditional gatekeepers.",
    date: "12/12/25",
  },
];

const QUESTIONS = [
  "I have no prior experience. Can I really build a global portfolio?",
  "How does EPDG accelerate my path to a six-figure leadership role?",
  "Is EPDG a traditional school or a career accelerator?",
  "Will I be able to earn in USD after completing the program?",
  "What makes the EPDG network different from other mentorship programs?",
];

const AgencyFAQ: FC = () => {
  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 mb-4">Blogs and News</h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover the latest news and opportunities regarding internship and professional development programs happening around the world today.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 grid gap-6 lg:grid-cols-3">
          {BLOGS.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[32px] border border-slate-200 shadow-[0_30px_90px_-50px_rgba(15,32,73,0.12)] bg-white">
              <div className="h-56 overflow-hidden">
                <img src={Helena2} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-950 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{item.description}</p>
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Date: {item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="rounded-[32px] overflow-hidden bg-white shadow-[0_30px_90px_-50px_rgba(15,32,73,0.15)] border border-slate-200">
            <div className="p-8 border-b border-slate-200">
              <h2 className="text-3xl font-black text-slate-950 mb-4">FAQs</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Common questions in our education programs
              </p>
            </div>
            <div className="grid gap-6 p-8 bg-slate-50">
              <div className="rounded-[28px] bg-slate-950 text-white p-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr] items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-300 mb-4">I have no prior experience. Can I really build a global portfolio?</p>
                  <p className="text-sm leading-relaxed text-slate-100">
                    Absolutely. EPDG is designed to bridge the "experience gap." Through our remote internship with portfolio building, you will execute real-world projects that serve as verifiable proof of your talent, allowing you to bypass entry-level gatekeepers and secure your first global role.
                  </p>
                  <button className="mt-6 bg-white text-slate-950 text-[11px] font-semibold uppercase tracking-[0.18em] px-6 py-3 rounded-full shadow-lg shadow-slate-950/10">
                    Learn More
                  </button>
                </div>
                <div className="rounded-[24px] overflow-hidden border border-white/30 bg-white">
                  <div className="h-48 bg-slate-200" />
                </div>
              </div>

              <div className="space-y-3">
                {QUESTIONS.slice(1).map((question) => (
                  <div key={question} className="rounded-[24px] bg-white p-5 border border-slate-200">
                    <p className="text-sm font-semibold text-slate-950">{question}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[32px] overflow-hidden bg-white border border-slate-200 shadow-[0_30px_90px_-50px_rgba(15,32,73,0.12)]">
            <div className="p-8">
              <h3 className="text-xl font-bold text-slate-950 mb-4">We Want to talk to you!</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Build Your Future. Execute. Lead. Win. Command Your Value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgencyFAQ;

