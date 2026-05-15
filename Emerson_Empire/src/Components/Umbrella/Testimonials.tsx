import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  EPDG as EpdgLogo, EPDGWebp as EpdgLogoWebp, EPDGAvif as EpdgLogoAvif,
  Agency as AgencyLogo, AgencyWebp as AgencyLogoWebp, AgencyAvif as AgencyLogoAvif,
  Helena2, Helena2Webp, Helena2Avif,
  empire, empireWebp, empireAvif,
  Matheous, MatheousWebp, MatheousAvif,
  Hosea,
  wiltord,
} from '../../assets';

const EPDG_STATS = [
  { value: '+100', label: 'Young professionals\nengaged' },
  { value: '+50',  label: 'Entrepreneurship\nparticipants' },
  { value: '+200', label: 'Students reached\nacross all tracks' },
];

const AGENCY_STATS = [
  { value: '+150', label: 'Individuals &\nfamilies supported' },
  { value: '+300', label: 'Consultations\nhandled' },
  { value: '+80',  label: 'Clients guided\nthrough planning' },
];

const SLIDES = [
  { src: Helena2, srcWebp: Helena2Webp,   srcAvif: Helena2Avif,   alt: 'Emerson Empire program' },
  { src: empire,  srcWebp: empireWebp,     srcAvif: empireAvif,     alt: 'Emerson Empire team' },
  { src: Matheous,srcWebp: MatheousWebp,   srcAvif: MatheousAvif,   alt: 'Emerson Empire event' },
  { src: Hosea,   srcWebp: undefined,      srcAvif: undefined,      alt: 'Emerson Empire student' },
  { src: wiltord, srcWebp: undefined,      srcAvif: undefined,      alt: 'Emerson Empire professional' },
];

const StatBox: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="bg-white shadow-sm px-4 py-3 border border-[#12022A]/12 rounded-xl text-center">
    <p className="font-bold text-[#12022A] text-[20px] leading-none">{value}</p>
    <p className="mt-1.5 text-[#12022A]/55 text-[11px] leading-snug whitespace-pre-line">{label}</p>
  </div>
);

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(p => (p + 1) % SLIDES.length), []);

  useEffect(() => {
    const t = setInterval(next, 3000);
    return () => clearInterval(t);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <section id="Testimony" className="bg-white px-6 sm:px-10 lg:px-16 py-20">

      {/* Heading */}
      <h2 className="mb-14 font-bold text-[#12022A] text-[26px] sm:text-[34px] lg:text-[40px] text-center uppercase tracking-[0.15em] heading">
        The Experience of Success
      </h2>

      {/* Three-column layout */}
      <div className="items-start gap-8 grid grid-cols-1 lg:grid-cols-[200px_1fr_200px] mx-auto max-w-5xl">

        {/* LEFT — EPDG */}
        <div className="flex flex-col items-center gap-4 order-2 lg:order-1">
          <picture>
            <source srcSet={EpdgLogoAvif} type="image/avif" />
            <source srcSet={EpdgLogoWebp} type="image/webp" />
            <img src={EpdgLogo} alt="EPDG" width={96} height={96} loading="lazy" decoding="async" className="drop-shadow w-24 h-24 object-contain" />
          </picture>
          <div className="flex flex-col gap-3 w-full">
            {EPDG_STATS.map(s => <StatBox key={s.value + s.label} {...s} />)}
          </div>
          {/* Inward arrow */}
          <div className="hidden lg:flex justify-end pt-2 pr-1 w-full">
            <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
              <path d="M0 8h24M18 2l6 6-6 6" stroke="#12022A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* CENTER — Auto-play slider */}
        <div className="relative order-1 lg:order-2 bg-[#12022A] rounded-2xl aspect-3/4 overflow-hidden">
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
                {slide.srcAvif && <source srcSet={slide.srcAvif} type="image/avif" />}
                {slide.srcWebp && <source srcSet={slide.srcWebp} type="image/webp" />}
                <img src={slide.src} alt={slide.alt} width={600} height={800} loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
              </picture>
            </motion.div>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="bottom-3 left-1/2 z-10 absolute flex gap-1.5 -translate-x-1/2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
                className="flex justify-center items-center w-5 h-5"
              >
                <span className={`block h-2 w-5 rounded-full origin-left [transition:transform_0.3s_ease-in-out,background-color_0.3s_ease-in-out] ${
                  i === current ? 'bg-[#C9A84C]' : 'scale-x-[0.4] bg-white/50'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — Agency */}
        <div className="flex flex-col items-center gap-4 order-3">
          <picture>
            <source srcSet={AgencyLogoAvif} type="image/avif" />
            <source srcSet={AgencyLogoWebp} type="image/webp" />
            <img src={AgencyLogo} alt="Emerson Agency" width={96} height={96} loading="lazy" decoding="async" className="drop-shadow w-24 h-24 object-contain" />
          </picture>
          <div className="flex flex-col gap-3 w-full">
            {AGENCY_STATS.map(s => <StatBox key={s.value + s.label} {...s} />)}
          </div>
          {/* Inward arrow */}
          <div className="hidden lg:flex justify-start pt-2 pl-1 w-full">
            <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
              <path d="M28 8H4M10 2L4 8l6 6" stroke="#12022A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom CTA buttons */}
      <div className="flex sm:flex-row flex-col justify-center gap-3 mx-auto mt-12 max-w-xl">
        <a
          href="/epdg"
          className="inline-flex flex-1 justify-center items-center bg-[#12022A] hover:bg-[#1E0A4A] px-6 py-3.5 rounded-sm font-bold text-[11px] text-white uppercase tracking-[2px] transition-colors duration-200"
        >
          Global Internships — EPDG
        </a>
        <a
          href="/agency"
          className="inline-flex flex-1 justify-center items-center bg-[#4B1E91] hover:bg-[#5D2AAD] px-6 py-3.5 rounded-sm font-bold text-[11px] text-white uppercase tracking-[2px] transition-colors duration-200"
        >
          Financial Solutions — Agency
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
