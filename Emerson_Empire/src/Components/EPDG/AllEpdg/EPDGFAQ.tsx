import type { FC } from "react";
import { Helena2 } from "../../../assets";

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
      <section className="py-16 bg-white">
        <div className="px-6 mx-auto mb-12 text-center sm:px-8 max-w-screen-7xl">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-950">Blogs and News</h2>
          <p className="max-w-2xl mx-auto text-sm leading-relaxed text-slate-600">
            Discover the latest news and opportunities regarding internship and professional development programs happening around the world today.
          </p>
        </div>

        <div className="grid gap-6 px-6 mx-auto lg:grid-cols-3 sm:px-8 max-w-screen-7xl">
          {BLOGS.map((item) => (
            <div key={item.title} className="bg-white shadow-[0_30px_90px_-50px_rgba(15,32,73,0.12)] border border-slate-200 rounded-4xl overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img src={Helena2} alt={item.title} className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-600">{item.description}</p>
                <p className="text-[11px] text-slate-400 uppercase tracking-[0.24em]">Date: {item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="items-start gap-10 grid lg:grid-cols-[1.2fr_0.8fr] mx-auto px-6 sm:px-8 max-w-screen-7xl">
          <div className="bg-white shadow-[0_30px_90px_-50px_rgba(15,32,73,0.15)] border border-slate-200 rounded-4xl overflow-hidden">
            <div className="p-8 border-b border-slate-200">
              <h2 className="mb-4 text-3xl font-black text-slate-950">FAQs</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Common questions in our education programs
              </p>
            </div>
            <div className="grid gap-6 p-8 bg-slate-50">
              <div className="items-center gap-5 grid lg:grid-cols-[1.2fr_0.8fr] bg-slate-950 p-8 rounded-[28px] text-white">
                <div>
                  <p className="mb-4 text-slate-300 text-sm uppercase tracking-[0.3em]">I have no prior experience. Can I really build a global portfolio?</p>
                  <p className="text-sm leading-relaxed text-slate-100">
                    Absolutely. EPDG is designed to bridge the "experience gap." Through our remote internship with portfolio building, you will execute real-world projects that serve as verifiable proof of your talent, allowing you to bypass entry-level gatekeepers and secure your first global role.
                  </p>
                  <button className="bg-white shadow-lg shadow-slate-950/10 mt-6 px-6 py-3 rounded-full font-semibold text-[11px] text-slate-950 uppercase tracking-[0.18em]">
                    Learn More
                  </button>
                </div>
                <div className="overflow-hidden bg-white border border-white/30 rounded-3xl">
                  <div className="h-48 bg-slate-200" />
                </div>
              </div>

              <div className="space-y-3">
                {QUESTIONS.slice(1).map((question) => (
                  <div key={question} className="p-5 bg-white border border-slate-200 rounded-4xl">
                    <p className="text-sm font-semibold text-slate-950">{question}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white shadow-[0_30px_90px_-50px_rgba(15,32,73,0.12)] border border-slate-200 rounded-4xl overflow-hidden">
            <div className="p-8">
              <h3 className="mb-4 text-xl font-bold text-slate-950">We Want to talk to you!</h3>
              <p className="text-sm leading-relaxed text-slate-600">
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

