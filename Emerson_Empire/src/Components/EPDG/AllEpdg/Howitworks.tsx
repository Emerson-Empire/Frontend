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
    <section className="px-6 py-20 bg-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-screen-7xl">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="mb-4 text-4xl font-black text-slate-950 sm:text-5xl">
            How it works....
          </h2>
          <p className="max-w-2xl mx-auto text-sm leading-relaxed text-slate-500 sm:text-base">
            With these three simple steps you can start the best{" "}
            <strong className="text-slate-800">global internship programs</strong> focused
            on you and also develop{" "}
            <strong className="text-slate-800">leadership skills</strong> for your
            professional career.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-14">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col gap-5">
              {/* Image */}
              <div className="h-48 overflow-hidden bg-slate-100 rounded-2xl">
                <img
                  src={step.image}
                  alt={step.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Number + title */}
              <div className="flex items-start gap-4">
                <span className="text-5xl font-black leading-none select-none text-slate-200">
                  {step.number}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-black text-slate-950">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
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
            className="inline-flex justify-center items-center bg-[#081331] hover:bg-[#0f2049] px-8 py-4 rounded-lg font-bold text-[11px] text-white uppercase tracking-[0.2em] transition-colors duration-200"
          >
            Create an account
          </a>
          <a
            href="#program"
            className="inline-flex justify-center items-center px-8 py-4 border-2 border-slate-300 hover:border-slate-400 rounded-lg font-bold text-[11px] text-slate-700 uppercase tracking-[0.2em] transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
};

export default Howitworks;
