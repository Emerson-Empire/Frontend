import React from 'react';
import { motion } from 'framer-motion';
import { Majvin } from '../../assets';

// ✅ SVG placeholder logos for companies you don't have assets for yet
const PlaceholderLogo: React.FC<{ name: string }> = ({ name }) => (
  <svg width="80" height="28" viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="28" rx="4" fill="currentColor" fillOpacity="0.08" />
    <text
      x="50%"
      y="50%"
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

interface Logo {
  name: string;
  src?: string;
  placeholder?: boolean;
}

// ✅ Mix your real logo with placeholder company names
const logos: Logo[] = [
  // { name: 'MajVin',   src: Majvin },
  { name: 'NEXORA',   placeholder: true },
  { name: 'VELDT',    placeholder: true },
  { name: 'AUREUM',   placeholder: true },
  { name: 'STRATUM',  placeholder: true },
  { name: 'CRESTIO',  placeholder: true },
];

// ✅ Duplicate list so the marquee loops seamlessly
const duplicated = [...logos, ...logos];

const TrustedBy: React.FC = () => {
  return (
    <div className="bg-[#12022A] px-6 sm:px-10 lg:px-16 py-14 overflow-hidden">

      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#4B1E91] shadow-2xl mb-10 rounded-md font-medium text-[#C9A84C] text-[28px] text-xs text-center uppercase tracking-widest"
      >
        Trusted by leading companies
      </motion.p>

      {/* ✅ Marquee track */}
      <div className="relative">
        {/* Left fade */}
        <div className="left-0 z-10 absolute inset-y-0 bg-gradient-to-r from-[#12022A] to-transparent w-24 pointer-events-none" />
        {/* Right fade */}
        <div className="right-0 z-10 absolute inset-y-0 bg-gradient-to-l from-[#12022A] to-transparent w-24 pointer-events-none" />

        <motion.div
          className="flex items-center gap-14"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 18,
            ease: 'linear',
            repeat: Infinity,
          }}
          style={{ width: 'max-content' }}
        >
          {/* grayscale hover:grayscale-0 *  transition-all duration-300 transition-opacity duration-300*/}
          {duplicated.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex flex-shrink-0 justify-center items-center h-60 text-[#F5F0E8] cursor-default"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-auto h-full object-contain"
                />  
              ) : (
                <PlaceholderLogo name={logo.name} />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="bg-[#C9A84C]/30 mx-auto mt-10 w-16 h-px" />
    </div>
  );
};

export default TrustedBy;