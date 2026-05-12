import type { FC, CSSProperties } from "react";
import { darkBtn } from "./Navbar";

interface ImgPHProps {
  className?: string;
  style?: CSSProperties;
}

/* Image placeholder — exported because most sections need it */
export const ImgPH: FC<ImgPHProps> = ({ className = "", style = {} }) => {
  return (
    <div
      className={`bg-gray-300 flex items-center justify-center ${className}`}
      style={style}
    >
      <svg viewBox="0 0 60 44" fill="none" className="w-1/3 max-w-[80px] min-w-[24px]">
        <rect width="60" height="44" rx="2" fill="#9ca3af" />
        <path d="M5 38L18 18L28 28L38 14L55 38Z" fill="#d1d5db" />
        <circle cx="44" cy="11" r="5" fill="#d1d5db" />
      </svg>
    </div>
  );
};

const Hero: FC = () => {
  return (
    <div className="bg-white pt-6 pb-6">
      <section className="max-w-screen-lg mx-auto px-6">
        <div className="bg-gray-200 rounded-lg px-8 py-12 relative">
          <div className="relative flex items-start gap-4 min-h-[230px]">
            {/* Image positioned absolutely in middle area, ON TOP of text */}
            <div
              className="absolute z-10 pointer-events-none"
              style={{ left: "44%", top: "18%" }}
            >
              <ImgPH className="rounded" style={{ width: 180, height: 145 }} />
            </div>

            {/* Left: text content */}
            <div className="flex-1 relative z-0 max-w-md">
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] bg-gray-300 text-gray-700 rounded-full px-3 py-1 font-medium">
                  TEXT 1
                </span>
                <span className="text-[10px] bg-gray-300 text-gray-700 rounded-full px-3 py-1 font-medium">
                  TEXT 2
                </span>
              </div>
              <h1 className="text-2xl font-bold leading-tight mb-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
              </h1>
              <p className="text-[11px] text-gray-700 mb-6 max-w-xs leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
              </p>
              <div className="flex gap-3 relative z-20">
                <button className={darkBtn}>CTA USER PERSONA 1</button>
                <button className={darkBtn}>CTA USER PERSONA 2</button>
              </div>
            </div>

            {/* Right: stat cards */}
            <div className="relative z-20 flex flex-col gap-3 w-32 shrink-0">
              {[0, 1].map((i) => (
                <div key={i} className="bg-white rounded shadow-sm p-3 text-center">
                  <p className="text-lg font-bold text-gray-900">+100</p>
                  <p className="text-[9px] text-gray-600 leading-tight mt-1">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
ro;
