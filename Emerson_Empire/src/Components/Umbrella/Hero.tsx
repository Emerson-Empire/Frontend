import React from 'react';
import { Helena, HelenaAvif, HelenaWebp } from '../../assets';

const Hero: React.FC = () => {
  return (
    <section className="bg-white pt-16 w-full">
      <div className="flex flex-col lg:flex-row items-stretch mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-16 gap-12 lg:gap-16 min-h-[calc(100vh-4rem)]">

        {/* ── LEFT: Text content ── */}
        <div className="flex flex-col justify-center lg:w-1/2">

          {/* Eyebrow */}
          <div className="relative flex items-center mb-6">
            {/* Decorative silver crossing lines + horizontal rule */}
            <div className="flex items-center w-full">
              <svg width="28" height="28" className="shrink-0"><line x1="28" y1="0" x2="0" y2="28" stroke="#C9A84C" strokeWidth="1.5" /></svg>
              <svg width="28" height="28" className="shrink-0"><line x1="28" y1="0" x2="0" y2="28" stroke="#C9A84C" strokeWidth="1.5" /></svg>
              <svg width="28" height="28" className="shrink-0"><line x1="28" y1="0" x2="0" y2="28" stroke="#C9A84C" strokeWidth="1.5" /></svg>
              <span className="flex-1 bg-[#C9A84C]/40 h-px" />
              <span className="flex-1 bg-[#C9A84C]/40 h-px" />
              <svg width="28" height="28" className="shrink-0"><line x1="28" y1="0" x2="0" y2="28" stroke="#C9A84C" strokeWidth="1.5" /></svg>
              <svg width="28" height="28" className="shrink-0"><line x1="28" y1="0" x2="0" y2="28" stroke="#C9A84C" strokeWidth="1.5" /></svg>
              <svg width="28" height="28" className="shrink-0"><line x1="28" y1="0" x2="0" y2="28" stroke="#C9A84C" strokeWidth="1.5" /></svg>
            </div>
            {/* Label centered on top of the lines — no background so lines cross through */}
            <p
              className="absolute left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#12022A]/55 whitespace-nowrap"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              The Emerson Empire
            </p>
          </div>

          {/* Headline */}
          <h1
            className="mb-6 font-black text-[#12022A] text-[42px] sm:text-[54px] lg:text-[60px] leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Your bridge from ambition to actual impact.
          </h1>

          {/* Subtitle */}
          <p
            className="mb-10 max-w-md text-[#12022A]/55 text-[15px] leading-[1.8]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We don't just offer services; we build paths. Whether you are a{' '}
            <strong className="font-semibold italic text-[#12022A]/80">
              student hungry for a global internship or a business seeking sharp financial solutions
            </strong>
            , we provide the tools to secure your future.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="/epdg"
              className="inline-flex items-center px-6 py-3 bg-[#12022A] hover:bg-[#1E0A4A] rounded-sm font-semibold text-[11px] text-white uppercase tracking-[0.18em] transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Global Internships — EPDG
            </a>
            <a
              href="/agency"
              className="inline-flex items-center px-6 py-3 bg-[#4B1E91] hover:bg-[#5D2AAD] rounded-sm font-semibold text-[11px] text-white uppercase tracking-[0.18em] transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Financial Solutions — Agency
            </a>
          </div>
        </div>

        {/* ── RIGHT: Dark panel with photo + stat badges ── */}
        <div className="relative flex items-end justify-center lg:w-1/2">
          <div className="relative bg-[#12022A] rounded-2xl w-full overflow-hidden" style={{ minHeight: '480px' }}>

            {/* Photo */}
            <picture>
              <source srcSet={HelenaAvif} type="image/avif" />
              <source srcSet={HelenaWebp} type="image/webp" />
              <img
                src={Helena}
                alt="Emerson Empire founder"
                fetchPriority="high"
                className="object-cover object-top w-full h-full absolute inset-0"
                style={{ minHeight: '480px' }}
              />
            </picture>

            {/* Stat badges — bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 flex gap-3 p-4">
              <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm shadow-lg px-4 py-3 rounded-xl flex-1">
                <span
                  className="font-black text-[#12022A] text-[24px] leading-none"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  +20
                </span>
                <span
                  className="text-[#12022A]/55 text-[11px] leading-tight tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Boarding<br />programs
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm shadow-lg px-4 py-3 rounded-xl flex-1">
                <span
                  className="font-black text-[#12022A] text-[24px] leading-none"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  +100
                </span>
                <span
                  className="text-[#12022A]/55 text-[11px] leading-tight tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Advised<br />companies
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
