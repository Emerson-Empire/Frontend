import type { FC } from "react";
import { ImgPH } from "./Hero";

const FinancialEducation: FC = () => {
  return (
    <section className="max-w-screen-lg mx-auto px-6 py-14">
      <div className="grid grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-xl font-extrabold mb-3 leading-tight">
            FEATURED
            <br />
            PROGRAMS:
          </h2>
          <p className="text-[11px] text-gray-600 leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          </p>
          {["Service 1", "Service 2", "Service 3"].map((s, i) => (
            <div key={i} className="mb-3">
              <p className="text-xs font-bold underline mb-0.5">{s}</p>
              <p className="text-[10px] text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
              </p>
            </div>
          ))}
        </div>

        <div className="relative">
          <ImgPH className="w-full rounded aspect-square" />
          {/* Top floating card */}
          <div className="absolute top-6 -right-3 bg-white shadow-md rounded px-3 py-2 w-28 border border-gray-200">
            <p className="text-[9px] text-gray-600 leading-tight">
              Lorem ipsum
              <br />
              dolor sit amet
            </p>
          </div>
          {/* Bottom floating card */}
          <div className="absolute bottom-12 -left-2 bg-white shadow-md rounded px-3 py-2 w-28 border border-gray-200">
            <p className="text-[9px] text-gray-600 leading-tight">
              Lorem ipsum
              <br />
              dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialEducation;

