import type { FC } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Malik, wiltord, lidi, sales } from "../../../assets";

type Person = {
  name: string;
  title: string;
  image: string;
  quote: string;
};

const PEOPLE: Person[] = [
  {
    name: "Wiltord Kamdem",
    title: "Web Dev Intern",
    image: wiltord,
    quote:
      "EPDG helped me build a portfolio that opened global opportunities.",
  },
  {
    name: "Malik Muhammad",
    title: "Growth Intern",
    image: Malik,
    quote:
      "I went from being ignored to landing international interviews.",
  },
  {
    name: "Rogers Otkhanje",
    title: "Sales & Marketing",
    image: sales,
    quote:
      "I stopped thinking locally and started positioning for global markets.",
  },
  {
    name: "Lidi Nehmen",
    title: "Leadership Fellow",
    image: lidi,
    quote:
      "The mentorship helped me break my income ceiling completely.",
  },
];

const CARD_BACKGROUNDS = [
  "linear-gradient(180deg,#E5E7EB,#F8FAFC)",
  "linear-gradient(180deg,#DDD6FE,#F5F3FF)",
  "linear-gradient(180deg,#FED7AA,#FFEDD5)",
  "linear-gradient(180deg,#CBD5E1,#F8FAFC)",
];

const clamp = (i: number, len: number) => ((i % len) + len) % len;

const ARC_SLOTS = [
  {
    x: 0,
    y: 0,
    z: 0,
    scale: 1,
    rotY: 0,
    brightness: 1,
  },

  {
    x: -170,
    y: 18,
    z: -40,
    scale: 0.88,
    rotY: 12,
    brightness: 0.82,
  },

  {
    x: 170,
    y: 18,
    z: -40,
    scale: 0.88,
    rotY: -12,
    brightness: 0.82,
  },

  {
    x: -310,
    y: 42,
    z: -80,
    scale: 0.76,
    rotY: 18,
    brightness: 0.65,
  },
];

const StoryModal: FC<{
  person: Person;
  onClose: () => void;
}> = ({ person, onClose }) => (
  <AnimatePresence>
    <motion.div
      className="z-50 fixed inset-0 flex justify-center items-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className="z-10 relative bg-white shadow-2xl p-8 rounded-3xl w-full max-w-xl"
      >
        <button
          onClick={onClose}
          className="top-4 right-4 absolute text-2xl"
        >
          ×
        </button>

        <img
          src={person.image}
          alt={person.name}
          className="shadow-lg mx-auto rounded-2xl w-28 h-28 object-cover object-top"
        />

        <h2 className="mt-6 font-black text-slate-950 text-3xl text-center">
          {person.name}
        </h2>

        <p className="mt-1 text-slate-500 text-sm text-center uppercase tracking-widest">
          {person.title}
        </p>

        <p className="mt-6 text-slate-600 text-center leading-relaxed">
          {person.quote}
        </p>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const Reviews: FC = () => {
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const total = PEOPLE.length;

  const prev = () =>
    setActive((i) => clamp(i - 1, total));

  const next = () =>
    setActive((i) => clamp(i + 1, total));

  const person = PEOPLE[active];

  return (
    <>
      <section className="bg-[#F8F8FA] py-24 w-full overflow-hidden">
        <div className="mx-auto px-6 w-full xxxxxx">
          {/* Header */}
          <div className="bg-[#12022A] mb-80 rounded-md text-center">
            <h2 className="font-black text-[56px] text-white text-5xl sm:text-6xl leading-none tracking-tight">
              Our track record
              <br />
              of success
            </h2>

            <p className="mt-5 text-[20px] text-slate-500">
              From internship programs to global
              professional development
            </p>
          </div>

          {/* Carousel */}
          <div className="relative mx-auto mt-10 mb-14 max-w-6xl">
            {/* Glow */}
            <div className="top-1/2 left-1/2 absolute bg-purple-400/20 blur-3xl rounded-full w-85 h-85 -translate-x-1/2 -translate-y-1/2" />

            {/* Cards */}
            <div className="relative flex justify-center items-end min-h-26.25 perspective-distance">
              {PEOPLE.map((p, idx) => {
                const slot =
                  (idx - active + total) % total;

                const s = ARC_SLOTS[slot];

                const isActive = slot === 0;

                const transform = `
                  perspective(1200px)
                  translateX(${s.x}px)
                  translateY(${s.y}px)
                  translateZ(${s.z}px)
                  rotateY(${s.rotY}deg)
                  scale(${s.scale})
                `;

                return (
                  <div
                    key={p.name}
                    onClick={() =>
                      isActive
                        ? setModalOpen(true)
                        : setActive(idx)
                    }
                    className="bottom-0 absolute rounded-[34px] overflow-hidden hover:scale-105 transition-all duration-700 cursor-pointer"
                    style={{
                      width: "220px",

                      height: isActive
                        ? "360px"
                        : "300px",

                      transform,

                      zIndex:
                        ARC_SLOTS.length - slot,

                      filter: `brightness(${s.brightness})`,

                      background:
                        CARD_BACKGROUNDS[
                          idx %
                            CARD_BACKGROUNDS.length
                        ],

                      boxShadow: isActive
                        ? "0 40px 90px -40px rgba(15,23,42,0.35)"
                        : "0 20px 50px -30px rgba(15,23,42,0.15)",
                    }}
                  >
                    {/* Image */}
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover object-top"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

                    {/* Active badge */}
                    {isActive && (
                      <div className="right-0 bottom-0 left-0 absolute p-5 text-center">
                        <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 border border-white/20 rounded-full font-bold text-[11px] text-white uppercase tracking-[0.2em]">
                          Read Story
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prev}
                className="bg-slate-950 hover:bg-slate-700 rounded-full w-12 h-12 text-white transition"
              >
                ←
              </button>

              <button
                onClick={next}
                className="bg-slate-950 hover:bg-slate-700 rounded-full w-12 h-12 text-white transition"
              >
                →
              </button>
            </div>
          </div>

          {/* Name */}
          <div className="text-center">
            <h3 className="font-black text-slate-950 text-4xl">
              {person.name}
            </h3>

            <p className="mt-2 text-slate-500 text-xl">
              {person.title}
            </p>
          </div>

          {/* Quote */}
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-slate-600 text-lg leading-relaxed">
              {person.quote}
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white mt-8 px-6 py-3 border border-slate-200 hover:border-purple-300 rounded-full font-semibold text-[11px] text-slate-700 hover:text-purple-700 uppercase tracking-[0.15em] transition"
            >
              Read Full Story ↗
            </button>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4 mt-14">
            <a
              href="#contact"
              className="bg-[#4B1E91] hover:bg-[#39156f] px-8 py-4 rounded-xl font-bold text-[11px] text-white uppercase tracking-[0.2em] transition"
            >
              Start Building My Portfolio
            </a>

            <a
              href="#program"
              className="px-8 py-4 border border-slate-300 hover:border-slate-500 rounded-xl font-bold text-[11px] text-slate-700 uppercase tracking-[0.2em] transition"
            >
              Scale To Global Leadership
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <StoryModal
          person={person}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

export default Reviews;