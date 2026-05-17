import type { FC } from "react";
import img1 from "../../../assets/Girl_Typing.webp";
import img2 from "../../../assets/Man_Point.png";


const WhoWeHelp: FC = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-16 w-full">
      <div className="max-w-7xl mx-auto">
      <div className="gap-8 grid xl:grid-cols-2">
        <div className="bg-white shadow-[0_22px_80px_rgba(15,32,73,0.12)] hover:shadow-[0_30px_100px_rgba(15,32,73,0.15)] border border-slate-200 rounded-4xl overflow-hidden transition">
          <div className="relative bg-slate-100 h-72 overflow-hidden">
            <img
              src={img1}
              alt="Intern working remotely"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center -mt-5 mb-6">
            <div className="inline-flex z-10 relative items-center gap-2 bg-white/95 shadow-sm backdrop-blur-sm px-4 py-2 border border-white/50 rounded-full font-semibold text-[10px] text-slate-950 uppercase tracking-[0.24em]">
              <span className="text-[20px]">🎓</span>
              Interns Programs
            </div>
          </div>
          <div className="p-8">
            <h2 className="mb-4 font-black text-2xl sm:text-3xl text-slate-950 leading-tight">
              Stop the "No Experience" Cycle
            </h2>
            <p className="mb-8 text-slate-600 text-[15px] sm:text-base leading-relaxed">
              Your degree is a start, but employers want proof. <strong>We offer a remote internship with portfolio building that replaces application fatigue with real-world results.</strong> Stop sending CVs into the void and start building your global track record today.
            </p>
            <button className="bg-[#081331] hover:bg-slate-100 shadow-lg px-6 py-3 rounded-lg font-semibold text-[11px] text-white hover:text-slate-950 uppercase tracking-[0.18em] transition cursor-pointer">Get My Portfolio Started</button>
          </div>
        </div>

        <div className="bg-slate-950 shadow-[0_22px_80px_rgba(15,32,73,0.2)] hover:shadow-[0_30px_100px_rgba(15,32,73,0.25)] border border-white/15 rounded-4xl overflow-hidden text-white transition">
          <div className="relative bg-slate-900 h-72 overflow-hidden">
            <img
              src={img2}
              alt="Professional development" 
              className="opacity-85 w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center -mt-5 mb-6">
            <div className="inline-flex z-10 relative items-center gap-2 bg-white/95 shadow-sm px-4 py-2 border border-white/50 rounded-full font-semibold text-[10px] text-slate-950 uppercase tracking-[0.24em]">
              <span className="text-lg">🎓</span>
              Professional Development
            </div>
          </div>
          <div className="p-8">
            <h2 className="mb-4 font-black text-white text-2xl sm:text-3xl leading-tight">
              Stop Underpricing Your Talent.
            </h2>
            <p className="mb-8 text-slate-200 text-[15px] sm:text-base leading-relaxed">
              Being good at your job isn't enough to lead. <strong>Our leadership development for remote professionals</strong> provides the executive presence and management frameworks you need to break your income ceiling and transition into high-impact global roles.
            </p>
            <button className="bg-white hover:bg-slate-100 shadow-lg px-6 py-3 rounded-lg font-semibold text-[11px] text-slate-950 uppercase tracking-[0.18em] transition cursor-pointer">
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

