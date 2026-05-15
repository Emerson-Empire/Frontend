import type { FC } from "react";
import { useState } from "react";
import { darkBtn } from "./Navbar";
import { Vincent, Malik, Hosea, Matheous } from "../../assets";

const PEOPLE = [
  { name: "Majvin Vincent", title: "Web Dev Intern", image: Vincent },
  { name: "Mali", title: "Growth Intern", image: Malik },
  { name: "Hosea", title: "Remote Associate", image: Hosea },
  { name: "Matheus", title: "Leadership Fellow", image: Matheous },
];

const clampIndex = (index: number, length: number) => {
  if (index < 0) return length - 1;
  if (index >= length) return 0;
  return index;
};

const Reviews: FC = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  const handlePrev = () => setActiveIndex((prev) => clampIndex(prev - 1, PEOPLE.length));
  const handleNext = () => setActiveIndex((prev) => clampIndex(prev + 1, PEOPLE.length));

  return (
    <section id="reviews" className="bg-slate-50 py-16 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Our track record of success
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From internship programs to global professional development
          </p>
        </div>

        <div className="relative mx-auto mb-14 overflow-visible">
          <div className="absolute left-1/2 top-2/4 -translate-y-1/2 -translate-x-1/2 h-[400px] w-[80%] rounded-full bg-sky-100/70 blur-3xl" />
          <div className="relative flex items-center justify-center gap-6 perspective-[1400px] min-h-[420px]">
            {PEOPLE.map((person, idx) => {
              const offset = idx - activeIndex;
              const absOffset = Math.abs(offset);
              const isActive = offset === 0;
              const zIndex = PEOPLE.length - absOffset;
              const transform = `perspective(1400px) translateX(${offset * 130}px) translateZ(${isActive ? 0 : -60}px) rotateY(${offset * -18}deg) scale(${isActive ? 1 : 0.86})`;
              const opacity = absOffset > 2 ? 0 : 1;

              return (
                <div
                  key={person.name}
                  className="pointer-events-none absolute top-0 mx-auto h-[380px] w-[240px] rounded-[32px] border bg-white shadow-[0_45px_120px_-65px_rgba(15,32,73,0.15)] transition-all duration-500 ease-out"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    filter: isActive ? "drop-shadow(0_35px_120px_rgba(15,32,73,0.18))" : "brightness(0.95)",
                  }}
                >
                  <img src={person.image} alt={person.name} className="h-72 w-full object-cover rounded-t-[32px]" />
                  <div className="p-6 text-center">
                    <p className="text-lg font-bold text-slate-950">{person.name}</p>
                    <p className="text-sm text-slate-500 mt-1">{person.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-[0_40px_120px_-60px_rgba(15,32,73,0.2)] p-8 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-8">
              <div className="text-center sm:text-left">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Featured graduate
                </p>
                <p className="mt-3 text-2xl sm:text-3xl font-black text-slate-950">
                  {PEOPLE[activeIndex].name}
                </p>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500 mt-2">
                  {PEOPLE[activeIndex].title}
                </p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handlePrev}
                  className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-100 transition"
                >
                  &larr;
                </button>
                <button
                  onClick={handleNext}
                  className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-100 transition"
                >
                  &rarr;
                </button>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              “I sent dozens of CVs and got zero replies because I had ‘no experience.’ EPDG ended that cycle. Their remote internship with portfolio building gave me real campaigns to show, not just theory. I stopped feeling like an impostor and started earning in USD. If you’re tired of being ignored, this is your way out.”
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <button className={darkBtn}>Start Building My Portfolio</button>
              <button className="bg-white text-slate-950 border border-slate-300 text-[11px] font-semibold uppercase tracking-[0.18em] px-6 py-3 rounded-full hover:bg-slate-100 transition">
                Scale to Global Leadership
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

