import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Emason, EmasonWebp, EmasonAvif,
  EmersonAgency,
  Helena2, Helena2Webp, Helena2Avif,
  empire, empireWebp, empireAvif,
  Hosea, wiltord,
  Matheous, MatheousWebp, MatheousAvif,
} from '../../assets';

const EPDG_STATS = [
  { value: '+100', label: 'Young professionals engaged' },
  { value: '+50',  label: 'Entrepreneurship participants' },
  { value: '+200', label: 'Students reached' },
];

const AGENCY_STATS = [
  { value: '+150', label: 'Individuals & families supported' },
  { value: '+300', label: 'Consultations handled' },
  { value: '+80',  label: 'Clients guided' },
];

const SLIDES = [
  { src: Helena2,  srcWebp: Helena2Webp,   srcAvif: Helena2Avif,   alt: 'Emerson Empire program' },
  { src: empire,   srcWebp: empireWebp,     srcAvif: empireAvif,     alt: 'Emerson Empire team' },
  { src: Matheous, srcWebp: MatheousWebp,   srcAvif: MatheousAvif,   alt: 'Emerson Empire event' },
  { src: Hosea,    alt: 'Emerson Empire student' },
  { src: wiltord,  alt: 'Emerson Empire professional' },
];

const StatBox: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="bg-white border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-center">
    <p className="font-bold text-[#12022A] text-[22px] leading-none">{value}</p>
    <p className="mt-1 text-[#12022A]/55 text-[11px] leading-snug">{label}</p>
  </div>
);

const StatsSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="bg-white px-6 sm:px-10 lg:px-16 py-20">
      {/* Heading */}
      <h2 className="mb-14 font-bold text-[#12022A] text-[26px] sm:text-[34px] lg:text-[40px] uppercase tracking-[0.15em] text-center heading">
        The Experience of Success
      </h2>

      {/* Three-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_200px] gap-6 mx-auto max-w-5xl items-start">

        {/* LEFT — EPDG */}
        <div className="flex flex-col items-center gap-4 order-2 lg:order-1">
          {/* Logo */}
          <picture>
            <source srcSet={EmasonAvif} type="image/avif" />
            <source srcSet={EmasonWebp} type="image/webp" />
            <img src={Emason} alt="Emerson Empire" width={80} height={80} className="w-20 h-20 object-contain" />
          </picture>
          {/* Stats */}
          <div className="flex flex-col gap-3 w-full">
            {EPDG_STATS.map((s) => <StatBox key={s.label} {...s} />)}
          </div>
          {/* Arrow */}
          <div className="hidden lg:flex justify-end w-full pr-2 pt-1">
            <span className="text-[#12022A] text-[22px] font-light">→</span>
          </div>
        </div>

        {/* CENTER — Auto-play slider */}
        <div className="relative order-1 lg:order-2 rounded-2xl overflow-hidden bg-[#12022A] aspect-[3/4] sm:aspect-[4/5]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <picture>
                {'srcAvif' in slide && slide.srcAvif && <source srcSet={slide.srcAvif} type="image/avif" />}
                {'srcWebp' in slide && slide.srcWebp && <source srcSet={slide.srcWebp} type="image/webp" />}
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-top"
                />
              </picture>
            </motion.div>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-5 h-2 bg-[#C9A84C]' : 'w-2 h-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT — Agency */}
        <div className="flex flex-col items-center gap-4 order-3">
          {/* Logo */}
          <img src={EmersonAgency} alt="Emerson Agency" width={80} height={80} className="w-20 h-20 object-contain" />
          {/* Stats */}
          <div className="flex flex-col gap-3 w-full">
            {AGENCY_STATS.map((s) => <StatBox key={s.label} {...s} />)}
          </div>
          {/* Arrow */}
          <div className="hidden lg:flex justify-start w-full pl-2 pt-1">
            <span className="text-[#12022A] text-[22px] font-light">←</span>
          </div>
        </div>
      </div>

      {/* Bottom CTA buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-12 mx-auto max-w-xl">
        <a
          href="/epdg"
          className="flex-1 inline-flex items-center justify-center bg-[#12022A] hover:bg-[#1E0A4A] px-6 py-3.5 rounded-sm font-bold text-white text-[11px] uppercase tracking-[2px] transition-colors duration-200"
        >
          Global Internships – EPDG
        </a>
        <a
          href="/agency"
          className="flex-1 inline-flex items-center justify-center bg-[#0D0118] hover:bg-[#12022A] px-6 py-3.5 rounded-sm font-bold text-white text-[11px] uppercase tracking-[2px] transition-colors duration-200"
        >
          Financial Solutions – Agency
        </a>
      </div>
    </section>
  );
};

export default StatsSlider;
