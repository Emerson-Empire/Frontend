import React, { useState, useEffect, useRef } from 'react';
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
    quote:
      "I spent months applying for roles but kept hearing I lacked real experience. The Emerson Empire changed that in weeks.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Founder of Chen Logistics',
    src: Matheous,
    srcWebp: MatheousWebp,
    srcAvif: MatheousAvif,
    quote:
      "Working with the Emerson Agency felt like finally having a partner who cared about my business as much as I do.",
    rating: 5,
  },
  {
    id: 3,
    name: 'James Okafor',
    role: 'Sales Team Lead',
    src: wiltord,
    quote:
      "The program gave me structure, mentorship, and real accountability. Within three months I had a job I am proud of.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'Tax Consultation Client',
    src: Helena,
    srcWebp: HelenaWebp,
    srcAvif: HelenaAvif,
    quote:
      "The Emerson Agency made tax season less stressful than ever. Everything was clear and professional.",
    rating: 5,
  },
  {
    id: 5,
    name: 'Lyric Helena Emerson',
    role: 'Founder & CEO',
    src: Helena2,
    srcWebp: Helena2Webp,
    srcAvif: Helena2Avif,
    quote:
      "Our mission is to make sure no one has to figure it out alone.",
    rating: 5,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#C9A84C">
        <polygon points="12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8" />
      </svg>
    ))}
  </div>
);

const StoryCard = ({ story, active }: any) => (
  <motion.div
    className="bg-[#12022A] p-6 rounded-2xl w-[85vw] sm:w-85 snap-center shrink-0"
    animate={{ scale: active ? 1 : 0.97, opacity: active ? 1 : 0.75 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="border border-white/10 rounded-xl w-14 h-14 overflow-hidden">
        <picture>
          {story.srcAvif && <source srcSet={story.srcAvif} type="image/avif" />}
          {story.srcWebp && <source srcSet={story.srcWebp} type="image/webp" />}
          <img
            src={story.src}
            alt={story.name}
            className="w-full h-full object-cover object-top"
            decoding="async"
            loading="lazy"
          />
        </picture>
      </div>

      <div>
        <p className="font-bold text-white text-sm">{story.name}</p>
        <p className="text-[#C9A84C] text-xs">{story.role}</p>
      </div>

      <div className="ml-auto">
        <Stars count={story.rating} />
      </div>
    </div>

    <p className="text-white/70 text-sm leading-relaxed">
      "{story.quote}"
    </p>
  </motion.div>
);

const SuccessStories: React.FC = () => {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => {
      setActive(p => (p + 1) % STORIES.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  // Scroll only the carousel container — never the page
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const card = el.children[active] as HTMLElement;
    if (!card) return;

    // offsetLeft of the card minus half the gap needed to center it
    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;
    const containerWidth = el.offsetWidth;

    el.scrollTo({
      left: cardLeft - (containerWidth - cardWidth) / 2,
      behavior: 'smooth',
    });
  }, [active]);

  return (
    <section className="bg-white py-20">

      <div className="mx-auto mb-10 px-6 sm:px-10 lg:px-16 max-w-7xl">
        <h2 className="font-bold text-[#12022A] text-[32px] sm:text-[42px]">
          Stories of real progress.
        </h2>
        <p className="mt-3 max-w-xl text-[#12022A]/60 text-sm">
          Real people, real outcomes.
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex gap-5 px-6 sm:px-10 lg:px-16 overflow-x-auto scroll-smooth snap-mandatory snap-x"
        style={{ scrollbarWidth: 'none' }}
      >
        {STORIES.map((story, i) => (
          <div key={story.id} onClick={() => setActive(i)}>
            <StoryCard story={story} active={i === active} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {STORIES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? 'w-6 bg-[#4B1E91]' : 'w-2 bg-[#12022A]/20'
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default SuccessStories;
