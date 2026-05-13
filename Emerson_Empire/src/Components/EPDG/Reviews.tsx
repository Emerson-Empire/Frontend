import type { FC } from "react";
import { darkBtn } from "./Navbar";

const Reviews: FC = () => {
  return (
    <section className="pt-12 pb-12 overflow-hidden">
      <div className="max-w-screen-lg mx-auto px-6 text-center mb-10">
        <h2 className="text-lg font-extrabold mb-2 leading-tight">
          SOCIAL PROOF - 3D
          <br />
          CAROUSEL DEVELOPMENT
        </h2>
        <p className="text-[10px] text-gray-500 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur
          <br />
          adipiscing elit Ut et massa mi.
        </p>
      </div>

      {/* FULL VIEWPORT WIDTH carousel container */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 mb-10">
        <div
          className="flex items-center justify-center"
          style={{ perspective: "700px", perspectiveOrigin: "50% 50%" }}
        >
          {[
            { ry: 60 },
            { ry: 35 },
            { ry: 0 },
            { ry: -35 },
            { ry: -60 },
          ].map((c, i) => (
            <div
              key={i}
              className="bg-gray-200 border border-gray-300 shrink-0 flex items-center justify-center"
              style={{
                width: 220,
                height: 270,
                borderRadius: 6,
                margin: "0 -20px",
                transform: `rotateY(${c.ry}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              <svg viewBox="0 0 60 44" fill="none" className="w-14">
                <rect width="60" height="44" rx="2" fill="#9ca3af" />
                <path d="M5 38L18 18L28 28L38 14L55 38Z" fill="#d1d5db" />
                <circle cx="44" cy="11" r="5" fill="#d1d5db" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto px-6 text-center">
        <p className="text-sm font-bold">Name: Lorem Ipsum</p>
        <p className="text-sm font-bold mt-1">Ocupation: Student</p>
        <p className="text-[11px] text-gray-500 mt-3 max-w-xs mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        </p>
        <div className="flex justify-center gap-3 mt-5">
          <button className={darkBtn}>CTA USER PERSONA 1</button>
          <button className={darkBtn}>CTA USER PERSONA 2</button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

