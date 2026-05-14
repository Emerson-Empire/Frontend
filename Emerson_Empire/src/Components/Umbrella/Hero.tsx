import React from 'react';
import { Agency, AgencyWebp, AgencyAvif, EPDG, EPDGWebp, EPDGAvif, Helena2, Helena2Webp, Helena2Avif } from '../../assets';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#1E0A4A] pt-20 overflow-hidden">

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
     <div className="z-10 relative sm:flex bg-[#4B1E91] px-6 pt-20 pb-0 w-full h-auto">
  <div className="flex flex-col justify-center items-center w-full text-center">

        {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-6">
          <span className="block bg-[#C9A84C] opacity-50 w-8 h-px" />
          <p className="font-semibold text-[#C9A84C] text-[10px] uppercase tracking-[4px]">
            The Emerson Empire
          </p>
          <span className="block bg-[#C9A84C] opacity-50 w-8 h-px" />
        </div>

        {/* Headline */}
        <h1
          className="bg-[#4B1E91] mb-4 text-[#F5F0E8] text-[48px] sm:text-[56px] leading-[1.1] tracking-wide heading"

        >
         The  Emerson Empire —{' '}
          <em className="text-[#E8C97A] italic">Agency & Professional Development</em>
        </h1>

        {/* Gold rule */}
        <div className="bg-[#C9A84C] opacity-40 my-5 w-12 h-px" />

        {/* Subtitle */}
        <p className="mb-10 max-w-lg text-[16px] text-white leading-[1.9] tracking-[1.5px] body"
        >
        Building pathways for professional growth, business development, financial education, and global opportunity.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          <a
            href="/agency"
            className="bg-[#C9A84C] hover:bg-[#E8C97A] px-7 py-3 border border-[#C9A84C] hover:border-[#E8C97A] rounded-sm font-semibold text-[#12022A] text-[13px] uppercase tracking-[3px] transition-all duration-200 body"
          >
            Explore Agency
          </a>
          <a
            href="/epdg"
            className="bg-transparent hover:bg-[#C9A84C]/10 px-7 py-3 border border-[#C9A84C]/40 hover:border-[#C9A84C] rounded-sm font-medium text-[#E8C97A] text-[13px] uppercase tracking-[3px] transition-all duration-200 body"
          >
            Explore EPDG
          </a>
        </div>

        {/* Stars */}
        <p className="opacity-50 mb-12 text-[#C9A84C] text-[10px] tracking-[6px]">
          ★ &nbsp; ★ &nbsp; ★
        </p>

      </div>

      {/* LCP hero image */}
      <div className="w-full h-full overflow-hidden">
        <picture>
          <source srcSet={Helena2Avif} type="image/avif" />
          <source srcSet={Helena2Webp} type="image/webp" />
          <img
            src={Helena2}
            alt="Emerson Empire campaign"
            width={800}
            height={600}
            fetchPriority="high"
            className="rounded-xl w-full h-full object-cover"
          />
        </picture>
      </div>
     </div>

      {/* ── Feature cards ── */}
      <div className="flex-col justify-center bg-white m-3 rounded-md text-center">
      <h2 className="mb-3 font-semibold text-[[#1E0A4A] text-[32px] hover:text-[#1E0A4A] leading-[1.15] heading">
        YOU <em className="">CHOOSE YOUR</em> PATH</h2>
        <p></p>
      <div className="z-10 relative flex-col grid grid-cols-1 md:grid-cols-2 bg-[#1E0A4A] opacity-90 border-t">

        {/* Agency Card */}
         <div className="group m-1 px-8 py-10 border-[#C9A84C] border-4 rounded-xl transition-colors duration-200 hover:scale:105">
          <div className="mb-6 rounded-xl w-full h-70 overflow-hidden">
            <picture>
              <source srcSet={AgencyAvif} type="image/avif" />
              <source srcSet={AgencyWebp} type="image/webp" />
              <img
                src={Agency}
                alt="Emerson Agency"
                width={600}
                height={280}
                className="m-2 w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </picture>
          </div>
            <div className="flex justify-center items-center mb-5 border border-[#C9A84C]/25 rounded-sm w-10 h-10 text-[#C9A84C] hover:scale-110">
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="1" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </div>

          <p className="flex items-center gap-2 mb-4 font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[3px]">
            <span className="block bg-[#C9A84C] opacity-60 w-5 h-px" />
            Division 01
          </p>
<div className="flex flex-col items-center bg-[#C9A84C] p-2 border-2 rounded-md w-full h-auto sm:h-60 text-center hover:scale-105">
          <h2 className="mb-3 font-semibold text--[#1E0A4A] text-[#1E0A4A] text-[32px] leading-[1.15] heading">
            Emerson Agency
          </h2>

          <p className="mb-7 text-[#1E0A4A] text-[16px] text-center leading-[1.9] tracking-wide body">
            The Emerson Agency is beign Developed as a community-centered business and finacial services agency supporting
            individuals, families, and small businesses through practical guidance, finacial education,tax preparation support,
            insurance-related services ,and business development resources.
          </p>

   <a
  href="/agency"
  className="inline-flex items-center gap-2 hover:gap-3 bg-[#4B1E91] mt-auto p-3 rounded-md font-semibold text-[#C9A84C] text-[13px] uppercase tracking-[2.5px] transition-all duration-200"
>
  Explore Agency
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
</a>
        </div>
 </div>


        {/* EPDG Card */}
        <div className="group m-1 px-8 py-10 border-[#C9A84C] border-4 rounded-xl transition-colors duration-200 hover:scale:105">
       <div className="mb-6 rounded-xl w-full h-70 overflow-hidden">
          <picture>
            <source srcSet={EPDGAvif} type="image/avif" />
            <source srcSet={EPDGWebp} type="image/webp" />
            <img
              src={EPDG}
              alt="Emerson Professional Development"
              width={600}
              height={280}
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </picture>
        </div>
          <div className="flex justify-center items-center mb-5 border border-[#C9A84C]/25 rounded-sm w-10 h-10 text-[#C9A84C] hover:scale-110">
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
         </div>

          <p className="flex items-center gap-2 mb-4 font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[3px]">
            <span className="block bg-[#C9A84C] opacity-60 w-5 h-px" />
            Division 02
          </p>
 <div className="flex flex-col items-center bg-[#C9A84C] p-2 border-2 rounded-md w-full h-auto sm:h-60 text-center hover:scale-105">
          <h2 className="mb-3 font-semibold text-[#1E0A4A] text-[32px] leading-[1.15] heading">
            Emerson Professional Development
          </h2>


          <p className="mb-7 text-[#1E0A4A] text-[16px] text-center leading-[1.9] tracking-wide body">
            Emerson professional development group  equips emerging professionals intern,entrepreneurs, and leaders with Training
            , structure , metorship, and practical tools for long-term growth.


          </p>

         <a
  href="/agency"
  className="inline-flex items-center gap-2 hover:gap-3 bg-[#4B1E91] mt-auto p-3 rounded-md font-semibold text-[#C9A84C] text-[13px] uppercase tracking-[2.5px] transition-all duration-200"
>
            Explore EPDG
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div></div>
         </div>
      </div>

    </section>
  );
};

export default Hero;
