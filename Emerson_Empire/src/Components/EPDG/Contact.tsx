import { useState } from "react";
import type { FC } from "react";
import { darkBtn } from "./Navbar";

const Contact: FC = () => {
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState("");
  const [f4, setF4] = useState("");

  return (
    <>
      {/* ═══════════ WE WANT TO TALK TO YOU ═══════════ */}
      <section className="max-w-screen-lg mx-auto px-6 py-10 text-center">
        <p className="text-[10px] text-gray-500 mb-2">
          Lorem ipsum dolor sit amet consectetur
        </p>
        <h2 className="text-xl font-extrabold mb-8">WE WANT TO TALK TO YOU</h2>
        <div className="flex justify-center gap-4 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            className="flex-1 min-w-0 bg-white border border-gray-200 rounded-lg px-4 py-4 text-xs text-center placeholder-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 min-w-0 bg-white border border-gray-200 rounded-lg px-4 py-4 text-xs text-center placeholder-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <input
            type="text"
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="flex-1 min-w-0 bg-white border border-gray-200 rounded-lg px-4 py-4 text-xs text-center placeholder-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
      </section>

      {/* ═══════════ BOTTOM HERO + FORM ═══════════ */}
      <section className="max-w-screen-lg mx-auto px-6 py-12">
        <div className="grid grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block text-[10px] bg-gray-300 text-gray-700 rounded-full px-3 py-1 font-medium mb-4">
              TEST 1
            </span>
            <h2 className="text-2xl font-bold leading-tight mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
            </h2>
            <p className="text-[11px] text-gray-600 mb-6 max-w-xs leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
            </p>
            <div className="flex gap-3">
              <button className={darkBtn}>CTA USER PERSONA 1</button>
              <button className={darkBtn}>CTA USER PERSONA 2</button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={f1}
                onChange={(e) => setF1(e.target.value)}
                className="bg-gray-200 border-0 rounded-full px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <input
                type="text"
                value={f2}
                onChange={(e) => setF2(e.target.value)}
                className="bg-gray-200 border-0 rounded-full px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
            <input
              type="text"
              value={f3}
              onChange={(e) => setF3(e.target.value)}
              className="bg-gray-200 border-0 rounded-full px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <input
              type="text"
              value={f4}
              onChange={(e) => setF4(e.target.value)}
              className="bg-gray-200 border-0 rounded-full px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <input
              type="text"
              className="bg-gray-200 border-0 rounded-full px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <div className="flex justify-center mt-2">
              <button className={darkBtn + " px-10"}>SUBMIT FORM</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
;

