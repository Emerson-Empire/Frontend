import React from 'react';
import { Helena2, Helena2Webp, Helena2Avif } from '../../assets';

const Hero: React.FC = () => {
  return (
    <section className="bg-white pt-16 min-h-screen">
      <div className="flex lg:flex-row flex-col mx-auto px-6 sm:px-10 lg:px-16 py-16 max-w-7xl min-h-[calc(100vh-4rem)]">

        {/* ── LEFT: Text content ── */}
        <div className="flex flex-col justify-center pr-0 lg:pr-16 lg:w-1/2">

          {/* Eyebrow */}
          <div className="relative flex items-center mb-6">
            <div className="flex items-center w-full">
              <svg width="40" height="40"><line x1="40" y1="0" x2="0" y2="40" stroke="#C9A84C" strokeWidth={2} /></svg>
              <svg width="40" height="40"><line x1="40" y1="0" x2="0" y2="40" stroke="#C9A84C" strokeWidth={2} /></svg>
              <svg width="40" height="40"><line x1="40" y1="0" x2="0" y2="40" stroke="#C9A84C" strokeWidth={2} /></svg>
              <span className="block flex-1 bg-[#C9A84C] opacity-50 h-px" />
              <span className="block flex-1 bg-[#C9A84C] opacity-50 h-px" />
              <svg width="40" height="40"><line x1="40" y1="0" x2="0" y2="40" stroke="#C9A84C" strokeWidth={2} /></svg>
              <svg width="40" height="40"><line x1="40" y1="0" x2="0" y2="40" stroke="#C9A84C" strokeWidth={2} /></svg>
              <svg width="40" height="40"><line x1="40" y1="0" x2="0" y2="40" stroke="#C9A84C" strokeWidth={2} /></svg>
            </div>
            <p className="left-1/2 absolute bg-white px-3 font-semibold text-[#C9A84C] text-[10px] uppercase tracking-[4px] whitespace-nowrap -translate-x-1/2">
              The Emerson Empire
            </p>
          </div>

          {/* Headline */}
          <h1 className="mb-6 font-bold text-[#12022A] text-[40px] sm:text-[52px] lg:text-[58px] leading-[1.1] tracking-tight heading">
            Your bridge from ambition to actual impact.
          </h1>

          {/* Subtitle */}
          <p className="mb-10 max-w-md text-[#12022A]/60 text-[15px] leading-[1.85]">
            We don't just offer services; we build paths. Whether you are a{' '}
            <strong className="font-semibold text-[#12022A]/90">
              student hungry for a global internship or a business seeking sharp financial solutions
            </strong>
            , we provide the tools to secure your future.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="/epdg"
              className="inline-flex items-center gap-2 bg-[#12022A] hover:bg-[#1E0A4A] px-6 py-3 rounded-sm font-semibold text-[12px] text-white uppercase tracking-[2px] transition-colors duration-200"
            >
              Global Internships — EPDG
            </a>
            <a
              href="/agency"
              className="inline-flex items-center gap-2 bg-[#4B1E91] hover:bg-[#5D2AAD] px-6 py-3 rounded-sm font-semibold text-[12px] text-white uppercase tracking-[2px] transition-colors duration-200"
            >
              Financial Solutions — Agency
            </a>
          </div>
        </div>

        {/* ── RIGHT: Dark panel with image + stats ── */}
        <div className="relative flex justify-center items-end mt-12 lg:mt-0 lg:w-1/2">
          {/* Dark card */}
          <div className="relative bg-[#12022A] rounded-2xl w-full max-w-md overflow-hidden" style={{ minHeight: '480px' }}>

            {/* Campaign image */}
            <picture>
              <source srcSet={Helena2Avif} type="image/avif" sizes="(max-width: 768px) 100vw, 50vw" />
              <source srcSet={Helena2Webp} type="image/webp" sizes="(max-width: 768px) 100vw, 50vw" />
              <img
                src={Helena2}
                alt="Emerson Empire founder"
                width={600}
                height={480}
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover object-top"
                style={{ minHeight: '480px' }}
              />
            </picture>

            {/* Stat badges — bottom overlay */}
            <div className="right-0 bottom-0 left-0 absolute flex justify-end gap-3 p-4">
              <div className="flex flex-col bg-white/95 shadow-lg px-4 py-3 rounded-xl min-w-22.5">
                <span className="font-bold text-[#12022A] text-[22px] leading-none">+20</span>
                <span className="mt-1 text-[#12022A]/60 text-[10px] leading-tight tracking-wide">Boarding<br />programs</span>
              </div>
              <div className="flex flex-col bg-white/95 shadow-lg px-4 py-3 rounded-xl min-w-22.5">
                <span className="font-bold text-[#12022A] text-[22px] leading-none">+100</span>
                <span className="mt-1 text-[#12022A]/60 text-[10px] leading-tight tracking-wide">Advised<br />companies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
