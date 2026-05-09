import React, { useState } from 'react';
import { Helena } from '../../assets';
import { motion, AnimatePresence } from 'framer-motion';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image?: string;
}

const TEAM: TeamMember[] = [
  { id: 1, name: 'Lyric Helena Emason', role: 'Founder & CEO', department: 'Leadership', image: Helena },
  { id: 2, name: 'Majembe Vincent', role: 'Head of Development', department: 'Web Development', image: undefined },
  { id: 3, name: 'Malik', role: 'Team Lead', department: 'Web Development', image: undefined },
  { id: 4, name: 'Mathius', role: 'Full Stack', department: 'Web Development', image: undefined },
  { id: 5, name: 'Wiltod Kamdem', role: 'Developer', department: 'Web Development', image: undefined },
  { id: 6, name: 'Jonathan', role: 'Developer', department: 'Web Development', image: undefined },
];

const logos = ['NEXORA', 'VELDT', 'AUREUM', 'STRATUM', 'CRESTIO'];
const duplicated = [...logos, ...logos];

const getInitials = (name: string) =>
  name.trim().split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

const PlaceholderLogo: React.FC<{ name: string }> = ({ name }) => (
  <svg width="80" height="28" viewBox="0 0 80 28" fill="none">
    <rect width="80" height="28" rx="4" fill="currentColor" fillOpacity="0.08" />
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
    <section className="bg-[#12022A] px-6 sm:px-10 lg:px-16 py-20">

      {/* Header */}
    

      {/* Main layout: stacks on mobile, side-by-side on lg+ */}
      <div className="flex lg:flex-row flex-col items-center gap-12">

        {/* Left — scrolling logos */}
        <div className="w-full lg:w-1/2">
            <div className="mb-14 text-center">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="block bg-[#C9A84C] opacity-50 w-7 h-px" />
          <p className="font-semibold text-[#C9A84C] text-[10px] uppercase tracking-[4px] body">
            Our People & Partners
          </p>
          <span className="block bg-[#C9A84C] opacity-50 w-7 h-px" />
        </div>
        <h2 className="text-[#F5F0E8] text-[40px] leading-[1.1] tracking-wide heading">
          The <em className="text-[#E8C97A] italic">Empire</em> Team
        </h2>
        <div className="bg-[#C9A84C] opacity-35 mx-auto mt-5 w-10 h-px" />
      </div>

          <p className="mb-8 text-[#C9A84C] text-[10px] text-center uppercase tracking-[4px]">
            Trusted by
          </p>
          <div className="relative overflow-hidden">
            {/* Fade left */}
            <div className="left-0 z-10 absolute inset-y-0 bg-linear-to-r from-[#12022A] to-transparent w-16 pointer-events-none" />
            {/* Fade right */}
            <div className="right-0 z-10 absolute inset-y-0 bg-linear-to-l from-[#12022A] to-transparent w-16 pointer-events-none" />

            <motion.div
              className="flex items-center gap-14"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
              style={{ width: 'max-content' }}
            >
              {duplicated.map((name, i) => (
                <div key={`${name}-${i}`} className="text-[#F5F0E8]">
                  <PlaceholderLogo name={name} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="bg-[#C9A84C]/20 mx-auto mt-10 w-full h-px" />
        </div>

        {/* Right — team carousel */}
        <div className="flex flex-col items-center w-full lg:w-1/2">

          {/* Sliding card */}
          <div className="relative w-full overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={member.id}
                custom={direction}
                initial={{ x: direction * 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction * -80, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex flex-col items-center bg-white/2 p-8 border border-[#C9A84C]/20 rounded-sm w-full text-center"
              >
                {/* Avatar */}
                <div className="flex justify-center items-center bg-[#1e053e] mb-5 border border-[#C9A84C]/35 rounded-full w-28 h-28 overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-serif font-semibold text-[#C9A84C] text-[28px]">
                      {getInitials(member.name)}
                    </span>
                  )}
                </div>

                <p className="font-serif font-semibold text-[#F5F0E8] text-[22px] leading-tight">
                  {member.name}
                </p>
                <p className="mt-2 font-semibold text-[#C9A84C] text-[10px] uppercase tracking-[2px]">
                  {member.role}
                </p>
                <p className="mt-1 text-[#F5F0E8]/30 text-[9px] uppercase tracking-[1.5px]">
                  {member.department}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={() => go(-1)}
              className="flex justify-center items-center border border-[#C9A84C]/30 hover:border-[#C9A84C] rounded-sm w-10 h-10 text-[#C9A84C] transition-colors duration-200"
            >
              ←
            </button>
            <span className="text-[#C9A84C]/50 text-[11px] tracking-[2px]">
              {index + 1} / {TEAM.length}
            </span>
            <button
              onClick={() => go(1)}
              className="flex justify-center items-center border border-[#C9A84C]/30 hover:border-[#C9A84C] rounded-sm w-10 h-10 text-[#C9A84C] transition-colors duration-200"
            >
              →
            </button>
          </div>

        </div>
      </div>

      <div className="bg-[#C9A84C]/30 mx-auto mt-14 w-16 h-px" />
    </section>
  );
};

export default EmpireTeamTrusted;