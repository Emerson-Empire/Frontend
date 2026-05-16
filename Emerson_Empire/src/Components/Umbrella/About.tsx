import React from 'react';
import { motion } from 'framer-motion';

import {
  empire,
  empireWebp,
  empireAvif,
  Emason,
  EmasonWebp,
  EmasonAvif,
} from '../../assets';

import { Settings2, Scale, GraduationCap, Coins, Users, BarChart2 } from 'lucide-react';

import Frame from '../../assets/Frame.png';

const values = [
  { icon: Settings2, title: 'Service', description: 'We believe business should serve people, not simply profit from them.' },
  { icon: Scale, title: 'Integrity', description: 'We value honesty, transparency, and ethical leadership.' },
  { icon: GraduationCap, title: 'Education', description: 'Growth begins with learning, guidance, and access to practical knowledge.' },
  { icon: Coins, title: 'Opportunity', description: 'Everyone deserves the chance to build, improve, and move forward.' },
  { icon: Users, title: 'Leadership', description: 'Strong leadership is built through service, consistency, and responsibility.' },
  { icon: BarChart2, title: 'Dignity', description: 'Every individual deserves respect, fairness, and support.' },
];

const SERVICES = [
  {
    title: 'Professional development.',
    body: 'Ready to start a career in web development, digital marketing, sales, and leadership.',
  },
  {
    title: 'Financial & business support.',
    body: 'Expert tax preparation, strategic consulting, and professional writing services.',
  },
];

const About: React.FC = () => (
  <section id="About">

    {/* ── HERO ── */}
    <div className="relative bg-[#12022A] px-6 sm:px-10 lg:px-16 py-24 overflow-hidden">
      <picture>
        <source srcSet={empireAvif} type="image/avif" />
        <source srcSet={empireWebp} type="image/webp" />
        <img
          src={empire}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 opacity-15 w-full h-full object-cover pointer-events-none select-none"
        />
      </picture>

      <div className="absolute inset-0 bg-[#12022A]/70 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <p className="mb-6 font-semibold text-[#C9A84C] text-[10px] uppercase tracking-[4px]">
          About The Emerson Empire
        </p>
        <h2 className="max-w-3xl font-bold text-[44px] text-white sm:text-[60px] lg:text-[72px] uppercase leading-none tracking-tight heading">
          Built to Bridge Your Professional Gap.
        </h2>
      </div>
    </div>

    {/* ── TWO COLUMN SECTION ── */}
    <div className="flex lg:flex-row flex-col bg-white">

      {/* LEFT */}
      <div className="relative lg:w-1/2 h-72 lg:h-auto min-h-105 overflow-hidden">

        {/* FRAME */}
        <img
          src={Frame}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* FLOATING IMAGE */}
     <div className="bottom-0 left-1/2 z-20 absolute w-[60%] h-[20%] sm:h-[20%] overflow-hidden -translate-x-1/2">
  <picture>
    <source srcSet={empireAvif} type="image/avif" />
    <source srcSet={empireWebp} type="image/webp" />

    <img
      src={empire}
      alt="Empire"
      className="rounded-2xl w-full h-full object-contain"
    />
  </picture>
</div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col justify-center px-8 lg:px-14 py-14 lg:w-1/2">

        <h3 className="mb-5 font-bold text-[#12022A] text-[32px] sm:text-[38px] leading-tight heading">
          What we do.
        </h3>

        <p className="mb-4 text-[#12022A]/60 text-[14px] leading-[1.9]">
          We take people who are ready to work and give them a place to prove it.
          We help students learn by doing and businesses get results.
        </p>

        <p className="mb-10 text-[#12022A]/55 text-[14px] leading-[1.9]">
          We handle complex parts of business and career building so people can grow faster.
        </p>

        <h3 className="mb-5 font-bold text-[#12022A] text-[26px] sm:text-[30px]">
          Our Services.
        </h3>

        <div className="flex flex-col gap-5 mb-10">
          {SERVICES.map((s) => (
            <div key={s.title}>
              <p className="font-bold text-[#12022A] text-[14px]">{s.title}</p>
              <p className="text-[#12022A]/55 text-[13px] leading-[1.8]">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <picture>
            <source srcSet={EmasonAvif} type="image/avif" />
            <source srcSet={EmasonWebp} type="image/webp" />
            <img
              src={Emason}
              alt="Logo"
              className="opacity-80 w-20 h-20 object-contain"
            />
          </picture>

          <div className="flex-1 bg-[#D1C4A8] rounded-lg h-20" />
        </div>
      </div>
    </div>

    {/* ── VALUES ── */}
    <div className="bg-white px-6 sm:px-10 lg:px-16 pt-16 pb-20">
      <h2 className="mb-12 font-bold text-[#12022A] text-[28px] sm:text-[36px] lg:text-[42px] text-center uppercase tracking-[0.12em] heading">
        Our Commitment and Values
      </h2>

      <div className="gap-5 grid sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl">
        {values.map((value, i) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-[#4B1E91] p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon size={28} className="text-[#C9A84C]" />
                <h3 className="font-bold text-[15px] text-white uppercase tracking-[0.12em]">
                  {value.title}
                </h3>
              </div>
              <p className="text-[#F5F0E8]/75 text-[13px] leading-[1.8]">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>

  </section>
);

export default About;