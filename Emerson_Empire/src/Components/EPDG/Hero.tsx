import type { FC } from "react";
import { EPDG, EPDGAvif, EPDGWebp } from "../../assets";
import { darkBtn } from "./Navbar";

const Hero: FC = () => {
  return (
    <section
      id="program"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      <div className="absolute inset-0">
        <picture>
          <source srcSet={EPDGAvif} type="image/avif" />
          <source srcSet={EPDGWebp} type="image/webp" />
          <img
            src={EPDG}
            alt="Remote internship leadership"
            className="h-full w-full object-cover opacity-40 brightness-75"
          />
        </picture>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#020814]/90 via-[#071331]/80 to-[#0b1d3c]/85" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        <div className="grid gap-10 xl:grid-cols-[1.5fr_0.9fr] items-start">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              {['Entry-Level Growth', 'Executive Scaling'].map((label) => (
                <span
                  key={label}
                  className="text-[11px] font-semibold uppercase tracking-[0.24em] bg-white/10 border border-white/20 text-white rounded-full px-4 py-2"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.04em]">
                Secure Your Future with a Global Remote Internship and leadership development programs
              </h1>
              <p className="text-sm sm:text-base max-w-2xl leading-relaxed text-slate-100/90">
                Whether you are launching your career via a remote internship with portfolio building to secure global experience, or seeking leadership development for remote professionals to break the income ceiling and command executive status, our ecosystem delivers the frameworks to win.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className={darkBtn}>Build My Global Portfolio</button>
              <button className="border border-white/30 text-white text-[11px] font-semibold uppercase tracking-[0.18em] px-5 py-3 rounded-full hover:bg-white/10 transition">
                Claim Management Authority
              </button>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-6 shadow-2xl shadow-slate-950/20">
              <div className="text-xs uppercase tracking-[0.24em] text-slate-200">
                Remote Internship
              </div>
              <div className="text-5xl font-black text-white">+100</div>
              <p className="text-[12px] text-slate-100 leading-relaxed">
                Remote internship with global certification of success
              </p>
            </div>

            <div className="grid gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-6 shadow-2xl shadow-slate-950/20">
              <div className="text-xs uppercase tracking-[0.24em] text-slate-200">
                Advisory Tracks
              </div>
              <div className="text-5xl font-black text-white">+20</div>
              <p className="text-[12px] text-slate-100 leading-relaxed">
                Tools and advisory tracks to scale your leadership to achieve international salaries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

