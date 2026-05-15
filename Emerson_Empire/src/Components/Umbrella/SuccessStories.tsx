import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Hosea,
  Matheous, MatheousWebp, MatheousAvif,
  wiltord,
  Helena, HelenaWebp, HelenaAvif,
  Helena2, Helena2Webp, Helena2Avif,
} from '../../assets';

interface Story {
  id: number;
  name: string;
  role: string;
  src: string;
  srcWebp?: string;
  srcAvif?: string;
  quote: string;
  rating: number;
}

const STORIES: Story[] = [
  {
    id: 1,
    name: 'Elena Rodriguez',
    role: 'Digital Marketing Intern',
    src: Hosea,
    quote: 'I spent months applying for roles but kept hearing I lacked real experience. The Emerson Empire changed that in weeks. I wasn\'t just watching videos — I was managing actual campaigns and learning how to drive real traffic. This program gave me the portfolio and the confidence I needed to finally land a full-time position in the industry.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Founder of Chen Logistics',
    src: Matheous,
    srcWebp: MatheousWebp,
    srcAvif: MatheousAvif,
    quote: 'As a small business owner, taxes and strategic planning always felt like a burden I had to carry alone. Working with the Emerson Agency felt like finally having a partner who cared about my business as much as I do. They provided the high-level financial precision I thought only big firms had, but with a level of personal attention that is rare to find today.',
    rating: 5,
  },
  {
    id: 3,
    name: 'James Okafor',
    role: 'Sales Team Lead',
    src: wiltord,
    quote: 'I spent time wondering if I was really ready to make the leap. The professional development program gave me structure, mentorship, and real accountability. Within three months I had a portfolio, references, and a position I am genuinely proud of.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'Tax Consultation Client',
    src: Helena,
    srcWebp: HelenaWebp,
    srcAvif: HelenaAvif,
    quote: 'The Emerson Agency made tax season less stressful than it has ever been. They were thorough, responsive, and explained everything clearly. I finally feel like I have a financial team that is genuinely looking out for me.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Lyric Helena Emerson',
    role: 'Founder & CEO',
    src: Helena2,
    srcWebp: Helena2Webp,
    srcAvif: Helena2Avif,
    quote: 'Every program we build starts from a simple question: what would have helped me? Our mission is to make sure no one has to figure it out alone. The stories our interns and clients share remind us every day why this work matters.',
    rating: 5,
  },
];

const Stars: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#C9A84C" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const StoryCard: React.FC<{ story: Story; active: boolean; onClick: () => void }> = ({ story, active, onClick }) => (
  <motion.div
    layout
    onClick={onClick}
    animate={{ scale: active ? 1 : 0.96, opacity: active ? 1 : 0.75 }}
    transition={{ duration: 0.35, ease: 'easeInOut' }}
    className={`flex flex-col shrink-0 w-75 sm:w-85 p-6 rounded-2xl cursor-pointer select-none transition-shadow duration-300 ${
      active ? 'bg-[#4B1E91] shadow-2xl' : 'bg-[#12022A] hover:opacity-90'
    }`}
  >
    {/* Person photo + name + role */}
    <div className="flex items-center gap-3 mb-4">
      <div className="border border-white/15 rounded-xl w-12 h-12 overflow-hidden shrink-0">
        <picture>
          {story.srcAvif && <source srcSet={story.srcAvif} type="image/avif" />}
          {story.srcWebp && <source srcSet={story.srcWebp} type="image/webp" />}
          <img src={story.src} alt={story.name} width={48} height={48} loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
        </picture>
      </div>
      <div className="min-w-0">
        <p className="font-bold text-[14px] text-white truncate leading-tight">{story.name}</p>
        <p className={`text-[11px] leading-tight truncate ${active ? 'text-[#E8C97A]' : 'text-[#C9A84C]/70'}`}>
          {story.role}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1 ml-auto shrink-0">
        <span className={`font-bold text-[9px] uppercase tracking-[2px] ${active ? 'text-white/70' : 'text-white/40'}`}>Rate</span>
        <Stars count={story.rating} />
      </div>
    </div>

    {/* Quote */}
    <p className={`text-[12px] leading-[1.85] ${active ? 'text-white/85' : 'text-white/50'}`}>
      "{story.quote}"
    </p>
  </motion.div>
);

const SuccessStories: React.FC = () => {
  const [active, setActive] = useState(1);

  const go = useCallback((dir: number) => {
    setActive(prev => (prev + dir + STORIES.length) % STORIES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => go(1), 4000);
    return () => clearInterval(timer);
  }, [go]);

  return (
    <section className="bg-white py-20 overflow-hidden">

      {/* Heading */}
      <div className="mx-auto mb-12 px-6 sm:px-10 lg:px-16 max-w-7xl">
        <h2 className="mb-4 font-bold text-[#12022A] text-[32px] sm:text-[42px] leading-tight heading">
          Stories of real progress.
        </h2>
        <p className="max-w-xl text-[#12022A]/50 text-[14px] leading-[1.85]">
          Success is better when shared. Read how our interns have launched their careers and how business owners have found peace of mind through our professional support.
        </p>
      </div>

      {/* Slider track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="left-0 z-10 absolute inset-y-0 bg-linear-to-r from-white to-transparent w-16 pointer-events-none" />
        <div className="right-0 z-10 absolute inset-y-0 bg-linear-to-l from-white to-transparent w-16 pointer-events-none" />

        <motion.div
          className="flex gap-5 px-6 sm:px-10 lg:px-16"
          animate={{ x: `calc(50vw - ${active * 357 + 178}px - 2.5rem)` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ width: 'max-content' }}
        >
          {STORIES.map((story, i) => (
            <StoryCard
              key={story.id}
              story={story}
              active={i === active}
              onClick={() => setActive(i)}
            />
          ))}
        </motion.div>
      </div>

      {/* Dot indicators + arrows */}
      <div className="flex justify-center items-center gap-6 mt-10 px-6">
        <button
          onClick={() => go(-1)}
          aria-label="Previous story"
          className="flex justify-center items-center hover:bg-[#4B1E91]/8 border border-[#12022A]/20 hover:border-[#4B1E91] rounded-full w-11 h-11 text-[#12022A] transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="flex gap-2">
          {STORIES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to story ${i + 1}`}
              className="flex items-center justify-center w-8 h-8"
            >
              <span className={`rounded-full block h-2.5 w-6 origin-left [transition:transform_0.3s_ease-in-out,background-color_0.3s_ease-in-out] ${
                i === active ? 'bg-[#4B1E91]' : 'scale-x-[0.417] bg-[#12022A]/20'
              }`} />
            </button>
          ))}
        </div>

        <button
          onClick={() => go(1)}
          aria-label="Next story"
          className="flex justify-center items-center hover:bg-[#4B1E91]/8 border border-[#12022A]/20 hover:border-[#4B1E91] rounded-full w-11 h-11 text-[#12022A] transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default SuccessStories;
