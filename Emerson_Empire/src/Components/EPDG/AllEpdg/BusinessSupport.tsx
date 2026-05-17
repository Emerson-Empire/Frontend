import type { FC } from "react";
import { Step1, Step2, Step3 } from "../../../assets";
 

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
      <div className="px-6 mx-auto sm:px-8 max-w-screen-7xl">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            How it works....
          </h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            With these three simple steps you can start the best <span className="font-semibold text-slate-950">global internship programs</span> focused on you and also <span className="font-semibold text-slate-950">develop leadership skills</span> for your professional career.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="group bg-white hover:shadow-[0_40px_120px_-60px_rgba(15,32,73,0.18)] border border-slate-200 rounded-[15px] overflow-hidden transition hover:-translate-y-1">
              <div className="relative h-112.5 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-linear-to-t"/>
                <div className="absolute bottom-0 left-0 right-0 px-6 pt-6 pb-8 border-t backdrop-blur-sm border-white/20">
                  <p className="text-5xl font-black text-white opacity-95">{step.number}.</p>
                  <h3 className="mt-4 text-2xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-100">
                    {step.copy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 mt-12 sm:flex-row sm:justify-center">
          <button  >Create an account</button>
          <button className="inline-flex justify-center items-center bg-white hover:bg-slate-100 px-8 py-3 border border-slate-300 rounded-lg font-semibold text-slate-950 text-sm uppercase tracking-[0.18em] transition cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSupport;

