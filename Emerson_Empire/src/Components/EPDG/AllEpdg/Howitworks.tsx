import type { FC } from "react";
import { Step1, Step2, Step3 } from "../../../assets";

const STEPS = [
  {
    number: "01",
    title: "Create an account",
    image: Step1,
    description:
      "Create an account with us to get free access to your progress dashboard.",
  },
  {
    number: "02",
    title: "Skills Form",
    image: Step2,
    description:
      "We want to get to know you. Your skills and abilities, in order to give you the best possible program.",
  },
  {
    number: "03",
    title: "Welcome to the program",
    image: Step3,
    description:
      "With this information we can provide you with the right program that match your skills and develop into leadership development.",
  },
];

const Howitworks: FC = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-950 mb-4">
            How it works....
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            With these three simple steps you can start the best{" "}
            <strong className="text-slate-800">global internship programs</strong> focused
            on you and also develop{" "}
            <strong className="text-slate-800">leadership skills</strong> for your
            professional career.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col gap-5">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden h-48 bg-slate-100">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Number + title */}
              <div className="flex items-start gap-4">
                <span className="text-5xl font-black text-slate-200 leading-none select-none">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-black text-slate-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#081331] hover:bg-[#0f2049] text-white text-[11px] font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-lg transition-colors duration-200"
          >
            Create an account
          </a>
          <a
            href="#program"
            className="inline-flex items-center justify-center border-2 border-slate-300 hover:border-slate-400 text-slate-700 text-[11px] font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-lg transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
};

export default Howitworks;
