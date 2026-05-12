import { FC } from "react";
import { ImgPH } from "./Hero";
import { darkBtn, BrandLogo } from "./Navbar";

const About: FC = () => {
  return (
    <>
      {/* ═══════════ GLOBAL NETWORK ═══════════ */}
      <section className="relative py-14 overflow-hidden">
        {/* Globe watermark */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-12 pointer-events-none select-none"
          aria-hidden="true"
        >
          <svg width="650" height="650" viewBox="0 0 650 650" style={{ opacity: 0.15 }}>
            <circle cx="325" cy="325" r="300" stroke="#9ca3af" strokeWidth="16" fill="none" />
            <ellipse cx="325" cy="325" rx="150" ry="300" stroke="#9ca3af" strokeWidth="12" fill="none" />
            <ellipse cx="325" cy="325" rx="260" ry="300" stroke="#9ca3af" strokeWidth="8" fill="none" />
            <line x1="25" y1="325" x2="625" y2="325" stroke="#9ca3af" strokeWidth="12" />
            <line x1="325" y1="25" x2="325" y2="625" stroke="#9ca3af" strokeWidth="6" />
            <path d="M90 165 Q325 215 560 165" stroke="#9ca3af" strokeWidth="7" fill="none" />
            <path d="M65 480 Q325 530 585 480" stroke="#9ca3af" strokeWidth="7" fill="none" />
          </svg>
        </div>

        <div className="relative">
          <h2 className="text-center text-2xl font-extrabold mb-12 tracking-tight">
            GLOBAL NETWORK
          </h2>

          {/* Top logo strip */}
          <div
            className="bg-gray-100 shadow-md py-4 mb-4 -ml-0 mr-8"
            style={{ marginLeft: "-2rem" }}
          >
            <div className="flex items-center gap-16 px-8 max-w-screen-xl mx-auto justify-around">
              <div className="shrink-0">
                <BrandLogo />
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <svg width="26" height="28" viewBox="0 0 26 28" fill="none">
                  <path d="M13 1L24 4V14C24 19 13 26 13 26S2 19 2 14V4L13 1Z" fill="#1e3a8a" />
                  <path
                    d="M9 13L12 16L17 11"
                    stroke="white"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xl font-bold text-gray-900">Logoipsum</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="14" fill="#a5b4fc" />
                  <circle cx="16" cy="16" r="6" fill="#1e3a8a" />
                  <circle cx="16" cy="16" r="2" fill="#a5b4fc" />
                </svg>
                <div className="leading-tight">
                  <p className="text-xl font-bold text-gray-900 leading-none">Logoipsum</p>
                  <p className="text-[10px] italic text-gray-500 leading-none mt-0.5">
                    Brand Standard
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom logo strip */}
          <div className="bg-gray-100 shadow-md py-4 ml-8" style={{ marginRight: "-2rem" }}>
            <div className="flex items-center gap-16 px-8 max-w-screen-xl mx-auto justify-around">
              <div className="flex items-center gap-2 shrink-0">
                <svg width="26" height="28" viewBox="0 0 26 28" fill="none">
                  <path d="M13 1L24 4V14C24 19 13 26 13 26S2 19 2 14V4L13 1Z" fill="#1e3a8a" />
                  <path
                    d="M9 13L12 16L17 11"
                    stroke="white"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xl font-bold text-gray-900">Logoipsum</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="14" fill="#a5b4fc" />
                  <circle cx="16" cy="16" r="6" fill="#1e3a8a" />
                  <circle cx="16" cy="16" r="2" fill="#a5b4fc" />
                </svg>
                <div className="leading-tight">
                  <p className="text-xl font-bold text-gray-900 leading-none">Logoipsum</p>
                  <p className="text-[10px] italic text-gray-500 leading-none mt-0.5">
                    Brand Standard
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="14" fill="#9ca3af" />
                  <g stroke="#374151" strokeWidth="1.5">
                    <line x1="6" y1="11" x2="26" y2="11" />
                    <line x1="5" y1="16" x2="27" y2="16" />
                    <line x1="6" y1="21" x2="26" y2="21" />
                  </g>
                </svg>
                <span className="text-xl font-bold text-gray-900">Logo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT US ═══════════ */}
      <section className="max-w-screen-lg mx-auto px-6 py-14">
        <div className="grid grid-cols-2 gap-10 items-center">
          <ImgPH className="w-full rounded" style={{ height: 300 }} />
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-700 mb-3">
              ABOUT US
            </p>
            <h2 className="text-xl font-extrabold leading-tight mb-4">
              LOREM IPSUN DOLOR SIT AMET CONSECTEURE
            </h2>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Lorem ipsum
              dolor sit amet consectetur adipiscing elit Ut et massa mi. Lorem ipsum dolor sit amet
              consectetur adipiscing elit Ut et massa mi.
            </p>
            <button className={darkBtn}>LEARN MORE</button>
          </div>
        </div>
      </section>

      {/* ═══════════ THE EMERSON EMPIRE ═══════════ */}
      <section className="max-w-screen-lg mx-auto px-6 py-10">
        <div className="grid grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-xl font-extrabold mb-4">THE EMERSON EMPIRE</h2>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-5">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Lorem ipsum
              dolor sit amet consectetur adipiscing elit Ut et massa mi.
            </p>
            <p className="text-xs font-extrabold uppercase tracking-wide text-gray-800 mb-2">
              EMERSON PROFESIONAL
              <br />
              DEVELOPMENT GROUP
            </p>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-5">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
            </p>
            <p className="text-xs font-extrabold uppercase tracking-wide text-gray-800 mb-2">
              EMERSON PROFESIONAL
              <br />
              DEVELOPMENT GROUP
            </p>
            <p className="text-[11px] text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-10 gap-x-6 pt-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i}>
                <p className="text-4xl font-extrabold text-gray-900 mb-2 leading-none">+100</p>
                <p className="text-[10px] text-gray-600 leading-snug">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
