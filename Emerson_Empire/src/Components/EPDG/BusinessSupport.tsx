import type { FC } from "react";
import { Step1, Step2, Step3 } from "../../assets";
import { darkBtn } from "./Navbar";

const STEPS = [
  {
    number: "01",
    title: "Create an account",
    copy: "Create an account with us to get free access to your progress dashboard.",
    image: Step1,
  },
  {
    number: "02",
    title: "Skills Form",
    copy: "We want to get to know you, your skills and abilities, in order to give you the best possible program.",
    image: Step2,
  },
  {
    number: "03",
    title: "Welcome to the program",
    copy: "With this information on your dashboard, we will provide you with the best programs available for your professional development.",
    image: Step3,
  },
];

const BusinessSupport: FC = () => {
  return (
    <section id="how-it-works" className="py-16 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-950 mb-4">
            How it works....
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            With these three simple steps you can start the best <span className="font-semibold text-slate-950">global internship programs</span> focused on you and also <span className="font-semibold text-slate-950">develop leadership skills</span> for your professional career.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_90px_-45px_rgba(15,32,73,0.12)] transition hover:-translate-y-1 hover:shadow-[0_40px_120px_-60px_rgba(15,32,73,0.18)]">
              <div className="relative h-[380px] overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 pt-6 backdrop-blur-xl bg-slate-950/60">
                  <p className="text-5xl font-black text-white opacity-95">{step.number}.</p>
                  <h3 className="mt-4 text-2xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-100 leading-relaxed">
                    {step.copy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className={darkBtn}>Create an account</button>
          <button className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-slate-100">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSupport;

