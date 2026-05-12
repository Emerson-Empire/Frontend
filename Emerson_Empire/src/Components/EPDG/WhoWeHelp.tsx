import { FC } from "react";
import { ImgPH } from "./Hero";
import { darkBtn } from "./Navbar";

const WhoWeHelp: FC = () => {
  return (
    <section className="max-w-screen-lg mx-auto px-6 py-12">
      <div className="grid grid-cols-2 gap-6">
        {[0, 1].map((i) => (
          <div key={i} className="bg-white border border-gray-300 rounded-lg p-5">
            <ImgPH className="w-full rounded mb-5" style={{ height: 180 }} />
            <h2 className="text-2xl font-extrabold leading-tight mb-3">
              PROBLEM USER
              <br />
              PERSONA - 1
            </h2>
            <p className="text-[11px] text-gray-600 mb-3 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
            </p>
            <ul className="text-[11px] text-gray-600 list-disc pl-5 space-y-1.5 mb-5 leading-relaxed">
              <li>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</li>
            </ul>
            <div className="flex gap-3">
              <button className={darkBtn}>APPLY NOW</button>
              <button className="bg-white border border-gray-400 text-gray-700 text-[10px] font-bold px-4 py-2 rounded tracking-wide">
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeHelp;
