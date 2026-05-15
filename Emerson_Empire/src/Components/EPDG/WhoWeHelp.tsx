import type { FC } from "react";
import { Campaign, Helena2 } from "../../assets";
import { darkBtn } from "./Navbar";

const WhoWeHelp: FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-16">
      <div className="grid gap-8 xl:grid-cols-2">
        <div className="bg-white shadow-[0_22px_80px_rgba(15,32,73,0.12)] rounded-[32px] overflow-hidden border border-slate-200 transition hover:shadow-[0_30px_100px_rgba(15,32,73,0.15)]">
          <div className="relative h-72 overflow-hidden bg-slate-100">
            <img
              src={Campaign}
              alt="Intern working remotely"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex justify-center -mt-5 mb-6">
            <div className="relative z-10 inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-slate-950 text-[10px] font-semibold uppercase tracking-[0.24em] rounded-full px-4 py-2 shadow-sm border border-white/50">
              <span className="text-lg">🎓</span>
              Interns Programs
            </div>
          </div>
          <div className="p-8">
            <h2 className="text-2xl sm:text-3xl font-black leading-tight mb-4 text-slate-950">
              Stop the "No Experience" Cycle
            </h2>
            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              Your degree is a start, but employers want proof. <strong>We offer a remote internship with portfolio building that replaces application fatigue with real-world results.</strong> Stop sending CVs into the void and start building your global track record today.
            </p>
            <button className={darkBtn}>Get My Portfolio Started</button>
          </div>
        </div>

        <div className="bg-slate-950 text-white rounded-[32px] overflow-hidden shadow-[0_22px_80px_rgba(15,32,73,0.2)] border border-white/15 transition hover:shadow-[0_30px_100px_rgba(15,32,73,0.25)]">
          <div className="relative h-72 overflow-hidden bg-slate-900">
            <img
              src={Helena2}
              alt="Professional development" 
              className="h-full w-full object-cover opacity-85"
            />
          </div>
          <div className="flex justify-center -mt-5 mb-6">
            <div className="relative z-10 inline-flex items-center gap-2 bg-white/95 text-slate-950 text-[10px] font-semibold uppercase tracking-[0.24em] rounded-full px-4 py-2 shadow-sm border border-white/50">
              <span className="text-lg">🎓</span>
              Professional Development
            </div>
          </div>
          <div className="p-8">
            <h2 className="text-2xl sm:text-3xl font-black leading-tight mb-4 text-white">
              Stop Underpricing Your Talent.
            </h2>
            <p className="text-sm text-slate-200 mb-8 leading-relaxed">
              Being good at your job isn't enough to lead. <strong>Our leadership development for remote professionals</strong> provides the executive presence and management frameworks you need to break your income ceiling and transition into high-impact global roles.
            </p>
            <button className="bg-white text-slate-950 text-[11px] font-semibold uppercase tracking-[0.18em] px-6 py-3 rounded-full hover:bg-slate-100 transition shadow-lg">
              Scale to Leadership
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;

