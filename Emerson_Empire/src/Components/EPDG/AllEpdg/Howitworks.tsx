import type { FC } from "react";
import {  form,study, Welcome } from "../../../assets";

const STEPS = [
  {
    number: "01",
    title: "Create an account",
    image: study,
    description:
      "Create an account with us to get free access to your progress dashboard.",
  },
  {
    number: "02",
    title: "Skills Form",
    image: form,
    description:
      "We want to get to know you. Your skills and abilities, in order to give you the best possible program.",
  },
  {
    number: "03",
    title: "Welcome to the program",
    image: Welcome,
    description:
      "With this information we can provide you with the right program that match your skills and develop into leadership development.",
  },
];

const Howitworks: FC = () => {
  return (
    <section className="bg-white shadow-sm m-auto px-4 py-10 rounded-md w-[95%]">
      <div className="mx-auto w-full max-w-screen-7xl">

        {/* Header */}
        <div className="mb-14 rounded-md w-full text-center P-10">
          <h2 className="mb-4 font-black text-slate-950">
            How it works....
          </h2>
          <p className="mx-auto max-w-2xl text-[20px] text-slate-500 leading-relaxed">
            With these three simple steps you can start the best{" "}
            <strong className="text-slate-800">global internship programs</strong> focused
            on you and also develop{" "}
            <strong className="text-slate-800">leadership skills</strong> for your
            professional career.
          </p>
        </div>

        {/* Steps */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mb-14">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col gap-5">
              {/* Image */}
              <div className="bg-slate-100 rounded-2xl h-48 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="opacity-85 w-full h-full object-cover"/>
              </div>

              {/* Number + title */}
              <div className="flex items-start gap-4">
                <span className="opacity-70 font-black text-[#4B1E91] text-5xl leading-none select-none">
                  {step.number}
                </span>
                <div>
                  <h3 className="mb-2 font-black text-slate-950 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-[20px] text-slate-500 leading-relaxed">
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
            className="inline-flex justify-center items-center bg-[#12022A] hover:bg-[#4B1E91] px-8 py-4 rounded-lg font-bold text-[11px] text-white uppercase tracking-[0.2em] hover:scale-110 transition-colors duration-200"
          >
            Create an account
          </a>
          <a
            href="#program"
            className="inline-flex justify-center items-center hover:bg-[#4B1E91] px-8 py-4 border-2 border-slate-300 hover:border-slate-400 rounded-lg font-bold text-[11px] text-slate-700 hover:text-white uppercase tracking-[0.2em] hover:scale-110 transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
};

export default Howitworks;
