import { useState, useEffect, useCallback } from "react";
import {   Matheous, Adaobi, Jonathan, Khaishawn, Hosea2 } from "../../../assets";

const CARDS = [
  { name: "Adaobi Elestina Oramife", title: "Sales & Business Development", image: Adaobi  },
  { name: "Jonathan",      title: "Web Developer ",image:Jonathan   },
  { name: "Khaishawn",          title: "Social Media",        image: Khaishawn  },
  { name: "Hosea",         title: "Web Developer",     image: Hosea2    },
  { name: "Matheus",       title: "Leadership Fellow",    image: Matheous },
];

const wrap = (i: number, len: number) => ((i % len) + len) % len;

export default function SuccessStories() {
  const [active, setActive] = useState(0);
  const total  = CARDS.length;

  const prev = useCallback(() => setActive((i) => wrap(i - 1, total)), [total]);
  const next = useCallback(() => setActive((i) => wrap(i + 1, total)), [total]);

  /* auto-slide every 4 s */
  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  /* visible window: [active-1, active, active+1] */
  const slots = [-1, 0, 1].map((offset) => ({
    offset,
    card: CARDS[wrap(active + offset, total)],
  }));

  return (
    <section className="bg-slate-50 py-20 overflow-hidden">
      <div className="shadow-md mx-1 px-4 py-2 max-w-screen-7xl">

        {/* ── Header ── */}
        <div className="bg-[#12022A] mb-14 rounded-2xl text-center">
          <p className="mb-3 font-bold text-[#0f5f5f] text-[15px] uppercase tracking-[0.25em]">
            ----Success Stories---
          </p>
          <h2 className="p-2.5 font-black text-[36px] text-white sm:text-5xl leading-tight">
            From Our Community
          </h2>
        </div>

        {/* ── Carousel row ── */}
        <div className="relative flex justify-center items-center gap-0">

          {slots.map(({ offset, card }) => {
            const isCenter = offset === 0;

            return (
              <div
                key={card.name + offset}
                onClick={() => !isCenter && (offset === -1 ? prev() : next())}
                className="relative transition-all duration-500 ease-out shrink-0"
                style={{
                  width:   isCenter ? 260 : 200,
                  height:  isCenter ? 340 : 280,
                  zIndex:  isCenter ? 10  : 1,
                  /* partial crop on side cards */
                  clipPath: offset === -1
                    ? "inset(0 0 0 40px round 24px)"
                    : offset === 1
                    ? "inset(0 40px 0 0 round 24px)"
                    : undefined,
                  cursor: isCenter ? "default" : "pointer",
                }}
              >
                {/* Card body */}
                <div
                  className={`w-full h-full rounded-3xl overflow-hidden relative transition-all duration-500
                    ${isCenter
                      ? "bg-[#0d3d3d] shadow-[0_40px_80px_-30px_rgba(13,61,61,0.45)]"
                      : "bg-slate-200 opacity-70"
                    }`}
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover hover:scale-110"
                    style={{ opacity: isCenter ? 0.92 : 0.6 }}
                  />

                  {/* Gradient overlay on center card */}
                  {isCenter && (
                    <div className="absolute inset-0 bg-linear-to-t from-[#0d3d3d]/80 via-transparent to-transparent" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Active card info ── */}
        <div className="mt-8 text-center">
          <p className="font-black text-slate-950 text-xl">{CARDS[active].name}</p>
          <p className="mt-1 text-slate-500 text-sm">{CARDS[active].title}</p>
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex justify-center gap-2 mt-6">
          {CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 h-2.5 bg-[#0d3d3d]"
                  : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* ── Navigation: circular avatar button ── */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            aria-label="Previous"
            className="place-items-center grid bg-white hover:bg-[#0d3d3d] shadow-md border-2 border-slate-200 hover:border-[#0d3d3d] rounded-full w-14 h-14 font-bold text-slate-700 hover:text-white text-lg transition-all duration-200"
          >
            ←
          </button>

          {/* Circular avatar of next person */}
          <button
            onClick={next}
            aria-label="Next"
            className="shadow-md border-[#0d3d3d] border-2 rounded-full w-14 h-14 overflow-hidden hover:scale-110 transition-transform duration-200"
          >
            <img
              src={CARDS[wrap(active + 1, total)].image}
              alt="Next"
              className="w-full h-full object-cover"
            />
          </button>
        </div>

      </div>
    </section>
  );
}
