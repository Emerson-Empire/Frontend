import React, { useState } from 'react';
import { bruno, brunoWebp, brunoAvif, Helena, HelenaWebp, HelenaAvif, Malik, MalikWebp, MalikAvif, Vincent, VincentWebp, VincentAvif } from '../../assets';
import { motion, AnimatePresence } from 'framer-motion';

interface TeamMember {
  id: number;
  name: string;
  Title: string;
  skills: string[];
  description: string;
  image?: string;
  imageWebp?: string;
  imageAvif?: string;
}

const TEAM: TeamMember[] = [
  {
    id: 1,
    name: 'Lyric Helena Emerson',
    Title: 'Founder & CEO',
    skills: ['Strategy', 'Leadership', 'Vision', 'Brand Development', 'Entrepreneurship'],
    description: 'Lyric Helena Emerson is the founder and visionary behind The Emerson Empire. She drives the strategic direction, culture, and long-term growth of the organization.',
    image: Helena, imageWebp: HelenaWebp, imageAvif: HelenaAvif,
  },
  {
    id: 2,
    name: 'Majembe Vincent',
    Title: 'Head of Web Development',
    skills: ['React', 'TypeScript', 'Architecture', 'Project Management', 'Team Direction'],
    description: 'Vincent leads the overall website development process, coordinating technical direction across the web development teams.',
    image: Vincent, imageWebp: VincentWebp, imageAvif: VincentAvif,
  },
  {
    id: 3,
    name: 'Mohamed Malik',
    Title: 'Web Development Team Lead',
    skills: ['Frontend', 'React', 'Team Coordination', 'Agile', 'Collaboration'],
    description: 'Mohamed Malik supports team organization, assignment coordination, and development progress across the web development group.',
    image: Malik, imageWebp: MalikWebp, imageAvif: MalikAvif,
  },
  {
    id: 5,
    name: 'Bruno Gutierrez Marin',
    Title: 'UX/UI & Web Design Lead',
    skills: ['UI/UX Design', 'Figma', 'Brand Identity', 'Visual Design', 'Accessibility'],
    description: 'Bruno supports the visual design, user experience, and layout direction of the website.',
    image: bruno, imageWebp: brunoWebp, imageAvif: brunoAvif,
  },
];

const logos = ['NEXORA', 'VELDT', 'AUREUM', 'STRATUM', 'CRESTIO'];
const duplicated = [...logos, ...logos];

const getInitials = (name: string) =>
  name.trim().split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

const PlaceholderLogo: React.FC<{ name: string }> = ({ name }) => (
  <svg width="80" height="28" viewBox="0 0 80 28" fill="none">
    <rect width="80" height="28" rx="4" fill="currentColor" fillOpacity="0.12" />
    <text
      x="50%" y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="currentColor"
      fontSize="11"
      fontFamily="Georgia, serif"
      fontWeight="600"
      letterSpacing="1"
    >
      {name}
    </text>
  </svg>
);

const EmpireTeamTrusted: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + TEAM.length) % TEAM.length);
  };

  const member = TEAM[index];

  return (
    <section id="team" className="bg-white px-6 sm:px-10 lg:px-16 py-20">
      <div className="flex lg:flex-row flex-col items-start gap-14 mx-auto max-w-7xl">

        {/* ── LEFT: Text + logos ── */}
        <div className="lg:pt-4 w-full lg:w-1/2">
          <p className="mb-4 font-semibold text-[#C9A84C] text-[10px] uppercase tracking-[4px]">
            Our Team of Experts
          </p>
          <h2 className="mb-6 font-bold text-[#12022A] text-[36px] sm:text-[44px] leading-[1.1] tracking-tight heading">
            The minds behind<br />the mission.
          </h2>
          <p className="mb-10 max-w-md text-[#12022A]/55 text-[14px] leading-[1.9]">
            We are a collective of specialists driving real change. By merging technical expertise with a mission-first mindset,{' '}
            <strong className="font-semibold text-[#12022A]/80">
              our team builds the infrastructure for your professional and financial success.
            </strong>
          </p>

          {/* Scrolling logos */}
          <p className="mb-5 font-semibold text-[#12022A]/40 text-[10px] uppercase tracking-[4px]">
            Trusted by
          </p>
          <div className="relative overflow-hidden">
            <div className="left-0 z-10 absolute inset-y-0 bg-linear-to-r from-white to-transparent w-12 pointer-events-none" />
            <div className="right-0 z-10 absolute inset-y-0 bg-linear-to-l from-white to-transparent w-12 pointer-events-none" />
            <motion.div
              className="flex items-center gap-12"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
              style={{ width: 'max-content' }}
            >
              {duplicated.map((name, i) => (
                <div key={`${name}-${i}`} className="text-[#12022A]/40">
                  <PlaceholderLogo name={name} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT: Dark carousel card ── */}
        <div className="relative bg-[#0D0118] shadow-2xl rounded-2xl w-full lg:w-1/2 overflow-hidden">

          {/* Diagonal lines decoration — top-right corner */}
          <div className="top-4 right-4 absolute flex gap-0.5 opacity-30 pointer-events-none">
            <svg width="40" height="40"><line x1="40" y1="0" x2="0" y2="40" stroke="#C9A84C" strokeWidth={1.5} /></svg>
            <svg width="40" height="40"><line x1="40" y1="0" x2="0" y2="40" stroke="#C9A84C" strokeWidth={1.5} /></svg>
            <svg width="40" height="40"><line x1="40" y1="0" x2="0" y2="40" stroke="#C9A84C" strokeWidth={1.5} /></svg>
          </div>

          {/* Photo with side nav arrows */}
          <div className="relative flex items-center">
            <button
              onClick={() => go(-1)}
              aria-label="Previous member"
              className="left-3 z-10 absolute flex justify-center items-center bg-[#12022A]/70 hover:bg-[#C9A84C]/20 border border-[#C9A84C]/30 rounded-sm w-11 h-11 text-[#C9A84C] transition-colors duration-200"
            >
              ←
            </button>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={member.id}
                custom={direction}
                initial={{ x: direction * 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction * -60, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-full h-80 sm:h-96 overflow-hidden"
              >
                {member.image ? (
                  <picture>
                    {member.imageAvif && <source srcSet={member.imageAvif} type="image/avif" />}
                    {member.imageWebp && <source srcSet={member.imageWebp} type="image/webp" />}
                    <img
                      src={member.image}
                      alt={member.name}
                      width={600}
                      height={400}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                  </picture>
                ) : (
                  <div className="flex justify-center items-center bg-[#1E0A4A] w-full h-full">
                    <span className="font-serif font-semibold text-[#C9A84C] text-[64px]">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() => go(1)}
              aria-label="Next member"
              className="right-3 z-10 absolute flex justify-center items-center bg-[#12022A]/70 hover:bg-[#C9A84C]/20 border border-[#C9A84C]/30 rounded-sm w-11 h-11 text-[#C9A84C] transition-colors duration-200"
            >
              →
            </button>
          </div>

          {/* Bottom info panel */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`info-${member.id}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
              className="flex items-center gap-4 bg-[#12022A] px-5 py-4 border-[#C9A84C]/15 border-t"
            >
              {/* Avatar */}
              <div className="flex justify-center items-center border-[#C9A84C]/30 border-2 rounded-full w-14 h-14 overflow-hidden shrink-0">
                {member.image ? (
                  <picture>
                    {member.imageAvif && <source srcSet={member.imageAvif} type="image/avif" />}
                    {member.imageWebp && <source srcSet={member.imageWebp} type="image/webp" />}
                    <img src={member.image} alt={member.name} width={56} height={56} loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
                  </picture>
                ) : (
                  <div className="flex justify-center items-center bg-[#1E0A4A] w-full h-full">
                    <span className="font-serif font-semibold text-[#C9A84C] text-[20px]">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="min-w-0">
                <p className="font-bold text-[#F5F0E8] text-[15px] truncate leading-tight">
                  {member.name}
                </p>
                <p className="mb-1.5 font-semibold text-[#C9A84C] text-[12px] italic">
                  {member.Title}
                </p>
                <p className="text-[#F5F0E8]/40 text-[11px] leading-snug">
                  {member.skills.join(' | ')}
                </p>
              </div>

              {/* Counter */}
              <p className="ml-auto text-[#C9A84C]/40 text-[11px] tracking-[2px] shrink-0">
                {index + 1}/{TEAM.length}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EmpireTeamTrusted;
