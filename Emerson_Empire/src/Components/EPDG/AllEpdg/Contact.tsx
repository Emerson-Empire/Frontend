import { useState } from "react";
import type { FC } from "react";
// import { darkBtn } from "./EPDGNavbar";

const Contact: FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("Entry-Level Growth");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="items-start gap-12 grid lg:grid-cols-[0.95fr_1.05fr] mx-auto px-6 sm:px-8 max-w-screen-7xl">
        <div>
          <p className="mb-3 text-sm text-slate-500">Get the clarity you need to scale. Contact us today for a 1-on-1 assessment and discover how The Emerson Empire can transform your potential into verifiable professional authority.</p>
          <h2 className="mb-8 text-5xl font-black tracking-tight text-slate-950">Your Global Seat is Waiting.</h2>

          <p className="mb-8 text-sm leading-relaxed text-slate-600">
            With these three simple steps you can start the best global internship programs focused on you and also develop leadership skills for your professional career.
          </p>

          <div className="flex flex-wrap gap-3">
            {['Entry-Level Growth', 'Executive Scaling'].map((item) => (
              <span key={item} className="bg-slate-50 px-4 py-2 border border-slate-300 rounded-full font-semibold text-[11px] text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-slate-950 shadow-[0_40px_120px_-60px_rgba(15,32,73,0.25)] p-8 border border-slate-200 rounded-4xl">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-5 py-3 text-sm text-white border rounded-full bg-slate-900/90 border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 placeholder:text-slate-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 text-sm text-white border rounded-full bg-slate-900/90 border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 placeholder:text-slate-500"
            />
            <input
              type="text"
              placeholder="Number / Whatsapp"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-5 py-3 text-sm text-white border rounded-full bg-slate-900/90 border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 placeholder:text-slate-500"
            />
            <select
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              className="w-full px-5 py-3 text-sm text-white border rounded-full bg-slate-900/90 border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              <option value="Entry-Level Growth">Entry-Level Growth</option>
              <option value="Executive Scaling">Executive Scaling</option>
            </select>
            <textarea
              placeholder="Send us a message:"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-5 py-4 text-sm text-white border bg-slate-900/90 border-slate-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-slate-500 placeholder:text-slate-500"
            />
            <button   >Apply Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

