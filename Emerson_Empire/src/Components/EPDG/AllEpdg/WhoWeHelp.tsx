import type { FC } from "react";
import { development, meeting } from "../../../assets";


const WhoWeHelp: FC = () => {
  return (
    <section className="bg-white px-6 sm:px-10 lg:px-16 py-20 w-full">
      <div className="mx-auto max-w-7xl">
      <div className="gap-8 grid xl:grid-cols-2">
        <div className="bg-white shadow-[0_22px_80px_rgba(15,32,73,0.12)] hover:shadow-[0_30px_100px_rgba(15,32,73,0.15)] border border-slate-200 rounded-4xl overflow-hidden transition">
          <div className="relative bg-slate-100 m-1.5 p-1.5 h-72 overflow-hidden">
            <img
              src={meeting}
              alt="Intern working remotely"
              className="rounded-md w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center -mt-5 mb-6">
            <div className="inline-flex z-10 relative items-center gap-2 bg-[#081331] shadow-sm backdrop-blur-sm px-4 py-2 border border-white/50 rounded-full font-semibold text-[10px] text-white uppercase tracking-[0.24em] hover:scale-125">
              <span className="text-[20px]">🎓</span>
              Interns Programs
            </div>
          </div>
          <div className="p-8">
            <h2 className="mb-4 font-black text-slate-950 text-2xl sm:text-3xl leading-tight">
              Stop the "No Experience" Cycle
            </h2>
            <p className="mb-8 text-[20px] text-slate-600 sm:text-base leading-relaxed">
              Your degree is a start, but employers want proof. <strong>We offer a remote internship with portfolio building that replaces application fatigue with real-world results.</strong> Stop sending CVs into the void and start building your global track record today.
            </p>
            <button className="bg-[#081331] hover:bg-slate-100 shadow-lg px-6 py-3 rounded-lg font-semibold text-[11px] text-white hover:text-slate-950 uppercase tracking-[0.18em] transition cursor-pointer">Get My Portfolio Started</button>
          </div>
        </div>

        <div className="bg-slate-950 shadow-2xl rounded-4xl overflow-hidden text-white transition">
          <div className="relative bg-slate-900 m-2 p-1.5 h-72 overflow-hidden">
            <img
              src={development}
              alt="Professional development" 
              className="opacity-85 rounded-md w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center -mt-5 mb-6">
            <div className="inline-flex z-10 relative items-center gap-2 bg-white/95 shadow-sm px-4 py-2 border border-white/50 rounded-full font-semibold text-[10px] text-slate-950 uppercase tracking-[0.24em] hover:scale-125">
              <span className="text-lg">🎓</span>
              Professional Development
            </div>
          </div>
          <div className="p-8">
            <h2 className="mb-4 font-black text-white text-2xl sm:text-3xl leading-tight">
              Stop Underpricing Your Talent.
            </h2>
            <p className="mb-8 text-[20px] text-slate-200 sm:text-base leading-relaxed">
              Being good at your job isn't enough to lead. <strong>Our leadership development for remote professionals</strong> provides the executive presence and management frameworks you need to break your income ceiling and transition into high-impact global roles.
            </p>
            <button className="bg-white hover:bg-slate-950 shadow-lg px-6 py-3 rounded-lg font-semibold text-[11px] text-slate-950 hover:text-white uppercase tracking-[0.18em] transition cursor-pointer">
              Scale to Leadership
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;

