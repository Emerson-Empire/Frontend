import React from 'react';
import { empire, empireWebp, empireAvif, Emason, EmasonWebp, EmasonAvif } from '../../assets';
import { motion } from 'framer-motion';
import { Settings2, Scale, GraduationCap, Coins, Users, BarChart2 } from 'lucide-react';

const values = [
  { icon: Settings2,      title: 'Service',     description: 'We believe business should serve people, not simply profit from them.' },
  { icon: Scale,          title: 'Integrity',   description: 'We value honesty, transparency, and ethical leadership.' },
  { icon: GraduationCap,  title: 'Education',   description: 'Growth begins with learning, guidance, and access to practical knowledge.' },
  { icon: Coins,          title: 'Opportunity', description: 'Everyone deserves the chance to build, improve, and move forward.' },
  { icon: Users,          title: 'Leadership',  description: 'Strong leadership is built through service, consistency, and responsibility.' },
  { icon: BarChart2,      title: 'Dignity',     description: 'Every individual deserves respect, fairness, and support.' },
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

    {/* ── 1. Dark banner ── */}
    <div className="relative bg-[#12022A] px-6 sm:px-10 lg:px-16 py-24 overflow-hidden">
      {/* Faded background photo */}
      <picture>
        <source srcSet={empireAvif} type="image/avif" />
        <source srcSet={empireWebp} type="image/webp" />
        <img
          src={empire}
          alt=""
          aria-hidden="true"
          width={1536}
          height={1024}
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

    {/* ── 2. Two-column: photo | content ── */}
    <div className="bg-white">
      <div className="flex lg:flex-row flex-col mx-auto max-w-7xl">

        {/* Left: full-height photo placeholder — replace with office/professional building photo */}
        <div className="relative flex justify-start items-start bg-[#D1C4A8] lg:w-1/2 h-72 lg:h-auto min-h-100 overflow-hidden shrink-0">
          {/* PLACEHOLDER — add image: about-office.jpg (office/glass building with people) */}
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 px-6 text-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <p className="font-bold text-[#5C4A2A] text-[13px] uppercase tracking-[2px]">about-office.jpg</p>
            <p className="max-w-50 text-[#8B7355] text-[11px] leading-snug">Office / professional building photo with people (tall, fills left column)</p>
          </div>
        </div>

        {/* Right: What we do + Our Services + Logo */}
        <div className="flex flex-col justify-center px-8 lg:px-14 py-14 lg:w-1/2">

          <h3 className="mb-5 font-bold text-[#12022A] text-[32px] sm:text-[38px] leading-tight heading">
            What we do.
          </h3>
          <p className="mb-4 text-[#12022A]/60 text-[14px] leading-[1.9]">
            We take people who are ready to work and give them a place to prove it. By running a space where{' '}
            <strong className="font-semibold text-[#12022A]/80">
              students learn by doing and businesses get results
            </strong>
            , we help both sides move forward — no one should have to start their professional journey alone or unsupported.
          </p>
          <p className="mb-10 text-[#12022A]/55 text-[14px] leading-[1.9]">
            Our focus is on making high-level expertise accessible to everyone. We handle the difficult parts of business and career building, from navigating licensing and compliance to managing the financial details that keep a company growing.
          </p>

          <h3 className="mb-5 font-bold text-[#12022A] text-[26px] sm:text-[30px] leading-tight heading">
            Our Services.
          </h3>
          <div className="flex flex-col gap-5 mb-10">
            {SERVICES.map((s) => (
              <div key={s.title}>
                <p className="mb-0.5 font-bold text-[#12022A] text-[14px]">{s.title}</p>
                <p className="text-[#12022A]/55 text-[13px] leading-[1.8]">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Logo + consultation photo side by side */}
          <div className="flex items-center gap-4 mt-auto">
            <picture>
              <source srcSet={EmasonAvif} type="image/avif" />
              <source srcSet={EmasonWebp} type="image/webp" />
              <img src={Emason} alt="Emerson Empire" width={80} height={80} loading="lazy" decoding="async" className="opacity-80 w-20 h-20 object-contain shrink-0" />
            </picture>

            {/* PLACEHOLDER — add image: about-meeting.jpg (2-person consultation/business meeting) */}
            <div className="relative flex flex-col flex-1 justify-center items-center gap-1 bg-[#D1C4A8] px-3 rounded-lg h-20 overflow-hidden text-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <p className="font-bold text-[#5C4A2A] text-[10px] uppercase leading-tight tracking-[1px]">about-meeting.jpg</p>
              <p className="text-[#8B7355] text-[9px] leading-tight">2-person consultation photo</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ── 3. Commitment and Values ── */}
    <div className="bg-white px-6 sm:px-10 lg:px-16 pt-16 pb-20">
      {/* Heading */}
      <h2 className="mb-12 font-bold text-[#12022A] text-[28px] sm:text-[36px] lg:text-[42px] text-center uppercase tracking-[0.12em] heading">
        Our Commitment and Values
      </h2>

      {/* Grid */}
      <div className="gap-5 grid sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#4B1E91] hover:bg-[#5D2AAD] p-6 rounded-2xl transition-colors duration-300"
            >
              {/* Icon + title row */}
              <div className="flex items-center gap-3 mb-3">
                <Icon size={32} className="text-[#C9A84C] shrink-0" />
                <h3 className="font-bold text-[15px] text-white uppercase tracking-[0.12em]">
                  {value.title}
                </h3>
              </div>
              {/* Description */}
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
