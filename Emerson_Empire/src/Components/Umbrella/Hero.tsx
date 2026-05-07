import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#12022A] overflow-hidden">

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(201,168,76,0.04) 0, rgba(201,168,76,0.04) 1px, transparent 1px, transparent 72px),
            repeating-linear-gradient(0deg,  rgba(201,168,76,0.04) 0, rgba(201,168,76,0.04) 1px, transparent 1px, transparent 72px)
          `,
        }}
      />

      {/* ── Hero content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-0">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-px bg-[#C9A84C] opacity-50" />
          <p className="text-[10px] font-semibold tracking-[4px] uppercase text-[#C9A84C]">
            The Emerson Empire
          </p>
          <span className="block w-8 h-px bg-[#C9A84C] opacity-50" />
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-[#F5F0E8] leading-[1.1] tracking-wide mb-4"
          style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}
        >
          Emerson Empire —{' '}
          <em className="italic text-[#E8C97A]">Agency & EPDG</em>
        </h1>

        {/* Gold rule */}
        <div className="w-12 h-px bg-[#C9A84C] opacity-40 my-5" />

        {/* Subtitle */}
        <p className="text-[13px] text-[#F5F0E8]/50 tracking-[1.5px] leading-[1.9] max-w-lg mb-10">
          Two pillars. One mission. We build brands, lead movements, and expand
          empires — through world-class agency services and the power of EPDG.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="/agency"
            className="text-[10px] font-semibold tracking-[3px] uppercase text-[#12022A] bg-[#C9A84C] border border-[#C9A84C] px-7 py-3 rounded-sm hover:bg-[#E8C97A] hover:border-[#E8C97A] transition-all duration-200"
          >
            Explore Agency
          </a>
          <a
            href="/epdg"
            className="text-[10px] font-medium tracking-[3px] uppercase text-[#E8C97A] bg-transparent border border-[#C9A84C]/40 px-7 py-3 rounded-sm hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-200"
          >
            Explore EPDG
          </a>
        </div>

        {/* Stars */}
        <p className="text-[#C9A84C] text-[10px] tracking-[6px] opacity-50 mb-12">
          ★ &nbsp; ★ &nbsp; ★
        </p>
      </div>

      {/* ── Feature cards ── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 border-t border-[#C9A84C]/15">

        {/* Agency Card */}
        <div className="group px-8 py-10 border-b md:border-b-0 md:border-r border-[#C9A84C]/10 hover:bg-[#C9A84C]/[0.03] transition-colors duration-200">
          <div className="w-10 h-10 border border-[#C9A84C]/25 rounded-sm flex items-center justify-center text-[#C9A84C] mb-5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="1" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </div>

          <p className="flex items-center gap-2 text-[9px] font-semibold tracking-[3px] uppercase text-[#C9A84C] mb-4">
            <span className="w-5 h-px bg-[#C9A84C] opacity-60 block" />
            Division 01
          </p>

          <h2 className="font-serif text-[28px] font-semibold text-[#F5F0E8] leading-[1.15] mb-3">
            Emerson Agency
          </h2>

          <p className="text-[12px] text-[#F5F0E8]/50 leading-[1.9] tracking-wide mb-7">
            A full-service creative and strategic agency built to elevate brands,
            drive growth, and craft campaigns that leave a lasting mark. We partner
            with visionaries to turn ambition into impact.
          </p>

          <a
            href="/agency"
            className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[2.5px] uppercase text-[#C9A84C] hover:gap-3 transition-all duration-200"
          >
            Explore Agency
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* EPDG Card */}
        <div className="group px-8 py-10 hover:bg-[#C9A84C]/[0.03] transition-colors duration-200">
          <div className="w-10 h-10 border border-[#C9A84C]/25 rounded-sm flex items-center justify-center text-[#C9A84C] mb-5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
          </div>

          <p className="flex items-center gap-2 text-[9px] font-semibold tracking-[3px] uppercase text-[#C9A84C] mb-4">
            <span className="w-5 h-px bg-[#C9A84C] opacity-60 block" />
            Division 02
          </p>

          <h2 className="font-serif text-[28px] font-semibold text-[#F5F0E8] leading-[1.15] mb-3">
            Emerson EPDG
          </h2>

          <p className="text-[12px] text-[#F5F0E8]/50 leading-[1.9] tracking-wide mb-7">
            EPDG — our entrepreneurial and professional development group — equips
            leaders with the tools, training, and community to scale businesses and
            build lasting legacies.
          </p>

          <a
            href="/epdg"
            className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[2.5px] uppercase text-[#C9A84C] hover:gap-3 transition-all duration-200"
          >
            Explore EPDG
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
