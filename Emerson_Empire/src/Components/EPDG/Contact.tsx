import { useState } from "react";
import type { FC } from "react";
import { darkBtn } from "./Navbar";

const Contact: FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("Entry-Level Growth");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-start">
        <div>
          <p className="text-sm text-slate-500 mb-3">Get the clarity you need to scale. Contact us today for a 1-on-1 assessment and discover how The Emerson Empire can transform your potential into verifiable professional authority.</p>
          <h2 className="text-5xl font-black tracking-tight text-slate-950 mb-8">Your Global Seat is Waiting.</h2>

          <p className="text-sm text-slate-600 leading-relaxed mb-8">
            With these three simple steps you can start the best global internship programs focused on you and also develop leadership skills for your professional career.
          </p>

          <div className="flex flex-wrap gap-3">
            {['Entry-Level Growth', 'Executive Scaling'].map((item) => (
              <span key={item} className="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-[11px] font-semibold text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 shadow-[0_40px_120px_-60px_rgba(15,32,73,0.25)]">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-full border border-slate-700 bg-slate-900/90 px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full border border-slate-700 bg-slate-900/90 px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            <input
              type="text"
              placeholder="Number / Whatsapp"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-full border border-slate-700 bg-slate-900/90 px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            <select
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              className="w-full rounded-full border border-slate-700 bg-slate-900/90 px-5 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              <option value="Entry-Level Growth">Entry-Level Growth</option>
              <option value="Executive Scaling">Executive Scaling</option>
            </select>
            <textarea
              placeholder="Send us a message:"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-5 py-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            <button className={`${darkBtn} w-full rounded-full`}>Apply Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

