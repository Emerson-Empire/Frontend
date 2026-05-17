import { useState, useEffect, useCallback } from "react";
import { Vincent, Malik, Hosea, Matheous, Helena } from "../../../assets";

const CARDS = [
  { name: "Javier Valdez", title: "Web Dev Intern",       image: Vincent  },
  { name: "Jane Doe",      title: "UI Designer",          image: Helena   },
  { name: "Mali",          title: "Growth Intern",        image: Malik    },
  { name: "Hosea",         title: "Remote Associate",     image: Hosea    },
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
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <p className="text-[#0f5f5f] text-[11px] font-bold uppercase tracking-[0.25em] mb-3">
            Success Stories
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-950 leading-tight">
            From Our Community
          </h2>
        </div>

        {/* ── Carousel row ── */}
        <div className="relative flex items-center justify-center gap-0">

          {slots.map(({ offset, card }) => {
            const isCenter = offset === 0;

            return (
              <div
                key={card.name + offset}
                onClick={() => !isCenter && (offset === -1 ? prev() : next())}
                className="relative flex-shrink-0 transition-all duration-500 ease-out"
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
                  className={`w-full h-full rounded-[24px] overflow-hidden relative transition-all duration-500
                    ${isCenter
                      ? "bg-[#0d3d3d] shadow-[0_40px_80px_-30px_rgba(13,61,61,0.45)]"
                      : "bg-slate-200 opacity-70"
                    }`}
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover"
                    style={{ opacity: isCenter ? 0.92 : 0.6 }}
                  />

                  {/* Gradient overlay on center card */}
                  {isCenter && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d3d3d]/80 via-transparent to-transparent" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Active card info ── */}
        <div className="text-center mt-8">
          <p className="text-xl font-black text-slate-950">{CARDS[active].name}</p>
          <p className="text-sm text-slate-500 mt-1">{CARDS[active].title}</p>
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
            className="w-14 h-14 rounded-full border-2 border-slate-200 bg-white hover:bg-[#0d3d3d] hover:border-[#0d3d3d] hover:text-white text-slate-700 grid place-items-center shadow-md transition-all duration-200 text-lg font-bold"
          >
            ←
          </button>

          {/* Circular avatar of next person */}
          <button
            onClick={next}
            aria-label="Next"
            className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#0d3d3d] shadow-md hover:scale-110 transition-transform duration-200"
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
