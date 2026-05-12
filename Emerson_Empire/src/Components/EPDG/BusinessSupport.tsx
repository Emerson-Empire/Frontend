import type { FC } from "react";
import { ImgPH } from "./Hero";
import { darkBtn } from "./Navbar";

const BusinessSupport: FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-screen-lg mx-auto px-6">
        <h2 className="text-center text-lg font-extrabold leading-tight mb-2">
          HOW IT WORKS - Lorem
          <br />
          ipsum dolor sit
        </h2>
        <p className="text-center text-[10px] text-gray-500 mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur
          <br />
          adipiscing elit Ut et massa mi.
        </p>

        <div className="grid grid-cols-3 gap-5 mb-8">
          {["01.", "02.", "03."].map((n, i) => (
            <div key={i} className="bg-white border border-gray-300 rounded-lg p-4">
              <ImgPH className="w-full rounded mb-4" style={{ height: 100 }} />
              <p className="text-3xl font-bold text-gray-300 mb-2 leading-none">{n}</p>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className={darkBtn}>LEARN MORE</button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSupport;
rt;
