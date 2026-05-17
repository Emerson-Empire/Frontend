import type { FC } from "react";
import { useState } from "react";
import { Vincent, Malik, Hosea, Matheous } from "../../../assets";

const PEOPLE = [
  {
    name: "Javier Valdez",
    title: "Web Dev Intern",
    image: Vincent,
    quote:
      "I sent dozens of CVs and got zero replies because I had 'no experience.' EPDG ended that cycle. Their remote internship with portfolio building gave me real campaigns to show, not just theory. I stopped feeling like an impostor and started earning in USD. If you're tired of being ignored, this is your way out.",
  },
  {
    name: "Mali",
    title: "Growth Intern",
    image: Malik,
    quote:
      "EPDG gave me a framework I couldn't find anywhere else. Within weeks I had a portfolio that actually reflected my skills. I went from being ignored to getting real interviews with global companies.",
  },
  {
    name: "Hosea",
    title: "Remote Associate",
    image: Hosea,
    quote:
      "The leadership development track changed how I see my career. I stopped thinking locally and started positioning myself for international roles. The results spoke for themselves.",
  },
  {
    name: "Matheus",
    title: "Leadership Fellow",
    image: Matheous,
    quote:
      "This program is the real deal. The advisory tracks and mentorship helped me break my income ceiling. I now lead a remote team across three time zones and it started here.",
  },
];

const clamp = (i: number, len: number) => ((i % len) + len) % len;

// Fixed arc slots — slot 0 = active (far right, largest), slots 1-3 curve left & back
const ARC_SLOTS = [
  { x:  260, y:   0, z:   0, scale: 1.00, rotY:   0, brightness: 1.00 },
  { x:   70, y:  38, z: -65, scale: 0.78, rotY: -12, brightness: 0.82 },
  { x: -110, y:  58, z: -105, scale: 0.63, rotY: -22, brightness: 0.68 },
  { x: -260, y:  34, z: -65, scale: 0.73, rotY: -28, brightness: 0.76 },
];

const Reviews: FC = () => {
  const [active, setActive] = useState(0);
  const total = PEOPLE.length;

  const prev = () => setActive((i) => clamp(i - 1, total));
  const next = () => setActive((i) => clamp(i + 1, total));

  const person = PEOPLE[active];

  return (
    <section id="reviews" className="py-20 overflow-hidden bg-gray-50">
      <div className="px-6 mx-auto sm:px-8 max-w-screen-7xl">

        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-6xl">
            Our track record of success
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            From internship programs to global professional development
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto mb-10">
          <div className="absolute inset-x-0 -translate-y-1/2 rounded-full pointer-events-none top-1/2 bg-slate-200/40 blur-3xl h-95" />

          {/* Cards — C-arc: active at far right, others curve left & down */}
          <div className="relative flex items-end justify-center min-h-95">
            {PEOPLE.map((p, idx) => {
              // slot 0 = active, slot 1,2,3 = next in sequence
              const slot = (idx - active + total) % total;
              const s = ARC_SLOTS[slot];
              const transform = `perspective(1100px) translateX(${s.x}px) translateY(${s.y}px) translateZ(${s.z}px) rotateY(${s.rotY}deg) scale(${s.scale})`;

              return (
                <div
                  key={p.name}
                  onClick={() => setActive(idx)}
                  className="absolute bottom-0 overflow-hidden transition-all duration-500 ease-out cursor-pointer rounded-3xl w-50 h-95"
                  style={{
                    transform,
                    zIndex: ARC_SLOTS.length - slot,
                    filter: `brightness(${s.brightness})`,
                    boxShadow: slot === 0
                      ? "0 40px 90px -40px rgba(15,32,73,0.35)"
                      : "0 20px 50px -30px rgba(15,32,73,0.15)",
                  }}
                >
                  <img src={p.image} alt={p.name} className="object-cover w-full h-full" />
                </div>
              );
            })}
          </div>

          {/* Arrows — below the arc */}
          <div className="relative z-20 flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="grid w-12 h-12 text-white transition rounded-full shadow-lg place-items-center bg-slate-950 hover:bg-slate-700"
              type="button" aria-label="Previous"
            >
              &larr;
            </button>
            <button
              onClick={next}
              className="grid w-12 h-12 text-white transition rounded-full shadow-lg place-items-center bg-slate-950 hover:bg-slate-700"
              type="button" aria-label="Next"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Name + title */}
        <div className="mb-4 text-center">
          <p className="text-2xl font-black text-slate-950">{person.name}</p>
          <p className="mt-1 text-sm text-slate-500">{person.title}</p>
        </div>

        {/* Quote */}
        <p className="max-w-2xl mx-auto mb-10 text-sm leading-relaxed text-center text-slate-600 sm:text-base">
          {person.quote}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex justify-center items-center bg-[#081331] hover:bg-[#0f2049] px-8 py-4 rounded-lg font-bold text-[11px] text-white uppercase tracking-[0.2em] transition-colors duration-200"
          >
            Start Building My Portfolio
          </a>
          <a
            href="#program"
            className="inline-flex justify-center items-center px-8 py-4 border-2 border-slate-300 hover:border-slate-400 rounded-lg font-bold text-[11px] text-slate-700 uppercase tracking-[0.2em] transition-colors duration-200"
          >
            Scale to Global Leadership
          </a>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
