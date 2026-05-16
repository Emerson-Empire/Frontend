import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Matheous, MatheousWebp, MatheousAvif,
  wiltord,
} from '../../assets';

import EpdgBottom from '../../assets/LOG 3.webp';
import AgencyBottom from '../../assets/LOG 1.webp';

const EPDG_STATS = [
  { value: '+100', label: 'Young professionals\nengaged' },
  { value: '+50', label: 'Entrepreneurship\nparticipants' },
  { value: '+200', label: 'Students reached\nacross all tracks' },
];

const AGENCY_STATS = [
  { value: '+150', label: 'Individuals &\nfamilies supported' },
  { value: '+300', label: 'Consultations\nhandled' },
  { value: '+80', label: 'Clients guided\nthrough planning' },
];

const SLIDES = [
  {
    src: Matheous,
    srcWebp: MatheousWebp,
    srcAvif: MatheousAvif,
    alt: 'Event'
  },
  {
    src: wiltord,
    srcWebp: undefined,
    srcAvif: undefined,
    alt: 'Professional'
  },
];

const StatBox: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="bg-white shadow-sm px-4 py-3 border border-[#12022A]/12 rounded-xl text-center">
    <p className="font-bold text-[#12022A] text-[20px] leading-none">{value}</p>
    <p className="mt-1.5 text-[#12022A]/55 text-[11px] whitespace-pre-line">
      {label}
    </p>
  </div>
);

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent(p => (p + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 3000);
    return () => clearInterval(t);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <section id="testimony" className="bg-white px-6 sm:px-10 lg:px-16 py-20 overflow-hidden">

      {/* TITLE */}
      <h2 className="mb-14 font-bold text-[#12022A] text-[26px] sm:text-[40px] text-center uppercase tracking-[0.15em]">
        The Experience of Success
      </h2>

      {/* MAIN GRID */}
      <div className="items-start gap-8 grid grid-cols-1 lg:grid-cols-[200px_1fr_200px] mx-auto max-w-5xl">

        {/* LEFT */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={EpdgBottom}
            alt="EPDG"
            className="w-24 h-24 object-contain"
          />

          {EPDG_STATS.map(s => (
            <StatBox key={s.value + s.label} {...s} />
          ))}
        </div>

        {/* CENTER SLIDER (FIXED HEIGHT → NO SHIFTING) */}
        <div className="relative bg-[#12022A] shadow-[#4B1E91] shadow-md rounded-2xl w-full h-105 sm:h-130 lg:h-150 overflow-hidden">

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <picture>
                {slide.srcAvif && (
                  <source srcSet={slide.srcAvif} type="image/avif" />
                )}
                {slide.srcWebp && (
                  <source srcSet={slide.srcWebp} type="image/webp" />
                )}

                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </motion.div>
          </AnimatePresence>

          {/* DOTS */}
          <div className="bottom-3 left-1/2 absolute flex gap-2 -translate-x-1/2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="flex justify-center items-center w-5 h-5"
              >
                <span
                  className={`h-2 w-5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'bg-[#C9A84C]'
                      : 'bg-white/40 scale-x-50'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={AgencyBottom}
            alt="Agency"
            className="w-24 h-24 object-contain"
          />

          {AGENCY_STATS.map(s => (
            <StatBox key={s.value + s.label} {...s} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;