import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  division: 'Agency' | 'EPDG';
  quote: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Amara Osei',
    role: 'Small Business Owner',
    division: 'Agency',
    quote:
      "Emerson Agency completely transformed how I look at my business finances. They handled our corporate tax filing, found deductions I had missed for years, and set up an insurance plan that actually makes sense for our size. I no longer dread tax season.",
    initials: 'AO',
  },
  {
    name: 'Tendai Moyo',
    role: 'Family Client',
    division: 'Agency',
    quote:
      "I came in overwhelmed — I had not filed taxes in two years and had no life insurance plan. The team at Emerson Agency sorted everything without judgement. Clean, professional, and genuinely caring. They have a client for life.",
    initials: 'TM',
  },
  {
    name: 'Lerato Dlamini',
    role: 'EPDG Graduate, Now Marketing Associate',
    division: 'EPDG',
    quote:
      "The internship programme placed me inside a real company from week one. I built campaigns, sat in client meetings, and had a mentor who pushed me every step. Six months later I had a full-time offer. EPDG changed the trajectory of my career.",
    initials: 'LD',
  },
  {
    name: 'Kwame Asante',
    role: 'Entrepreneur & EPDG Alumnus',
    division: 'EPDG',
    quote:
      "Before EPDG I had an idea and no roadmap. The entrepreneurship workshops gave me a business plan, financial model, and the confidence to pitch investors. I launched my company three months after graduating from the programme.",
    initials: 'KA',
  },
  {
    name: 'Zanele Khumalo',
    role: 'HR Manager, Corporate Client',
    division: 'Agency',
    quote:
      "We switched our company insurance portfolio to Emerson Agency and the difference was immediate. Better coverage, lower premiums, and a team that actually explains what you are paying for. Highly recommend to any growing business.",
    initials: 'ZK',
  },
];

const QuoteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      d="M6 20c0-5.333 2.667-9.333 8-12l2 3c-3.333 1.667-5 4-5 7h4v8H6v-6zm16 0c0-5.333 2.667-9.333 8-12l2 3c-3.333 1.667-5 4-5 7h4v8h-9v-6z"
      fill="currentColor"
      opacity="0.3"
    />
  </svg>
);

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const current = TESTIMONIALS[active];

  return (
    <section id="Testimony" className="bg-[#12022A] px-6 sm:px-10 lg:px-16 py-20 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="mb-4 font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[4px]">
          Client Stories
        </p>
        <h2 className="text-[#F5F0E8] text-[36px] sm:text-[44px] leading-[1.1] tracking-wide heading">
          What People Say
        </h2>
        <div className="bg-[#C9A84C]/40 mx-auto mt-5 w-12 h-px" />
      </motion.div>

      {/* Main testimonial */}
      <div className="mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-[#4B1E91]/30 p-8 sm:p-10 border border-white/8 rounded-xl"
          >
            {/* Division badge */}
            <span
              className="top-6 right-6 absolute px-2.5 py-1 rounded-sm font-semibold text-[9px] uppercase tracking-[3px]"
              style={{
                background: current.division === 'Agency' ? '#C9A84C18' : '#9B7FD418',
                color: current.division === 'Agency' ? '#C9A84C' : '#9B7FD4',
                border: `1px solid ${current.division === 'Agency' ? '#C9A84C30' : '#9B7FD430'}`,
              }}
            >
              {current.division}
            </span>

            {/* Quote icon */}
            <div className="mb-6 text-[#C9A84C]">
              <QuoteIcon />
            </div>

            {/* Quote text */}
            <p className="mb-8 text-[#F5F0E8]/90 text-[16px] sm:text-[18px] italic leading-[1.9] body">
              "{current.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="flex justify-center items-center rounded-sm w-11 h-11 font-serif font-bold text-[13px]"
                style={{ background: '#C9A84C18', color: '#C9A84C', border: '1px solid #C9A84C35' }}
              >
                {current.initials}
              </div>
              <div>
                <p className="font-semibold text-[#F5F0E8] text-[14px] tracking-wide heading">
                  {current.name}
                </p>
                <p className="mt-0.5 text-[12px] text-purple-400 tracking-wide body">
                  {current.role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-sm transition-all duration-300"
              style={{
                width: i === active ? '28px' : '8px',
                height: '8px',
                background: i === active ? '#C9A84C' : '#C9A84C30',
              }}
              aria-label={`View testimonial from ${t.name}`}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={() => setActive(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="flex justify-center items-center border border-white/10 hover:border-[#C9A84C]/50 rounded-sm w-9 h-9 text-purple-400 hover:text-[#C9A84C] transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            onClick={() => setActive(i => (i + 1) % TESTIMONIALS.length)}
            className="flex justify-center items-center border border-white/10 hover:border-[#C9A84C]/50 rounded-sm w-9 h-9 text-purple-400 hover:text-[#C9A84C] transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
