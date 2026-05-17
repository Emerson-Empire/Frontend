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
    <section id="reviews" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-slate-950">
            Our track record of success
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-500">
            From internship programs to global professional development
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto mb-10">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[380px] bg-slate-200/40 blur-3xl rounded-full pointer-events-none" />

          {/* Cards — C-arc: active at far right, others curve left & down */}
          <div className="relative flex justify-center items-end min-h-[420px]">
            {PEOPLE.map((p, idx) => {
              // slot 0 = active, slot 1,2,3 = next in sequence
              const slot = (idx - active + total) % total;
              const s = ARC_SLOTS[slot];
              const transform = `perspective(1100px) translateX(${s.x}px) translateY(${s.y}px) translateZ(${s.z}px) rotateY(${s.rotY}deg) scale(${s.scale})`;

              return (
                <div
                  key={p.name}
                  onClick={() => setActive(idx)}
                  className="absolute bottom-0 rounded-[24px] overflow-hidden w-[200px] h-[310px] transition-all duration-500 ease-out cursor-pointer"
                  style={{
                    transform,
                    zIndex: ARC_SLOTS.length - slot,
                    filter: `brightness(${s.brightness})`,
                    boxShadow: slot === 0
                      ? "0 40px 90px -40px rgba(15,32,73,0.35)"
                      : "0 20px 50px -30px rgba(15,32,73,0.15)",
                  }}
                >
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
              );
            })}
          </div>

          {/* Arrows — below the arc */}
          <div className="flex justify-center gap-4 mt-6 relative z-20">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-slate-950 hover:bg-slate-700 text-white grid place-items-center shadow-lg transition"
              type="button" aria-label="Previous"
            >
              &larr;
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-slate-950 hover:bg-slate-700 text-white grid place-items-center shadow-lg transition"
              type="button" aria-label="Next"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Name + title */}
        <div className="text-center mb-4">
          <p className="text-2xl font-black text-slate-950">{person.name}</p>
          <p className="text-sm text-slate-500 mt-1">{person.title}</p>
        </div>

        {/* Quote */}
        <p className="text-center text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
          {person.quote}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#081331] hover:bg-[#0f2049] text-white text-[11px] font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-[8px] transition-colors duration-200"
          >
            Start Building My Portfolio
          </a>
          <a
            href="#program"
            className="inline-flex items-center justify-center border-2 border-slate-300 hover:border-slate-400 text-slate-700 text-[11px] font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-[8px] transition-colors duration-200"
          >
            Scale to Global Leadership
          </a>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
