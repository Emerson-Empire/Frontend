import { FC } from "react";
import { ImgPH } from "./Hero";
import { darkBtn } from "./Navbar";

const FAQS_BELOW = [
  "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
];

const AgencyFAQ: FC = () => {
  return (
    <>
      {/* ═══════════ BLOGS AND NEWS ═══════════ */}
      <section className="py-12 overflow-hidden">
        <div className="max-w-screen-lg mx-auto px-6 mb-8 text-center">
          <h2 className="text-xl font-extrabold mb-2">BLOGS AND NEWS</h2>
          <p className="text-[10px] text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet
            <br />
            consectetur adipiscing elit Ut et
            <br />
            massa mi.
          </p>
        </div>

        <div className="overflow-x-hidden">
          <div
            className="flex gap-5 px-6"
            style={{ marginLeft: "-3rem", marginRight: "-3rem" }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="shrink-0 w-48">
                <ImgPH className="w-full rounded-lg mb-3 aspect-square" />
                <p className="text-xs font-extrabold mb-1">Blog #</p>
                <p className="text-[10px] text-gray-600 leading-snug mb-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
                </p>
                <p className="text-[10px] text-gray-500">Date: 12/13/12</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FAQS ═══════════ */}
      <section className="max-w-screen-lg mx-auto px-6 py-14">
        <h2 className="text-center text-xl font-extrabold mb-2">FAQS</h2>
        <p className="text-center text-[10px] text-gray-500 mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur
          <br />
          adipiscing elit Ut et massa mi.
        </p>

        <div className="rounded-lg overflow-hidden bg-gray-200 border border-gray-300">
          <div className="px-6 py-4 bg-gray-300">
            <p className="text-xs text-gray-800 font-medium">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
            </p>
          </div>

          <div className="px-6 py-6 bg-white grid grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-[11px] text-gray-600 leading-relaxed mb-5">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Lorem ipsum
                dolor sit amet consectetur adipiscing elit Ut et massa mi.
              </p>
              <button className={darkBtn}>LEARN MORE</button>
            </div>
            <div className="flex gap-3">
              <ImgPH className="flex-1 rounded" style={{ height: 100 }} />
              <ImgPH className="flex-1 rounded" style={{ height: 100 }} />
            </div>
          </div>

          {FAQS_BELOW.map((q, i) => (
            <div key={i} className="px-6 py-4 border-t border-gray-300">
              <p className="text-xs text-gray-800 font-medium">{q}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AgencyFAQ;
