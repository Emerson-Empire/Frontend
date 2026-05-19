import type { FC } from "react";
import poster from "../../../assets/H1.png";
import CountUp from '../../shared/CountUp';

const Hero: FC = () => {
  return (
    <section
      id="program"
      className="relative shadow-[#4B1E91] shadow-md m-3 sm:m-6 pt-5 border border-white/20 rounded-[28px] overflow-hidden text-white"
    >
      {/* ── Video background ── */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          className="m-1 w-full h-full object-center object-cover shaow-md"
        >
          <source src="/videos/hero-epdg.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay so text stays readable over the video */}
        <div className="absolute inset-0 bg-[#07101f]/60" />
      </div>

      {/* ── Content ── */}
      <div className="z-10 relative mx-auto px-5 sm:px-8 lg:px-10 py-10 sm:py-20 max-w-screen-7xl">
        <div className="items-start gap-6 sm:gap-10 grid xl:grid-cols-[1.5fr_0.9fr]">

          <div className="space-y-5 sm:space-y-8">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['Entry-Level Growth', 'Executive Scaling'].map((label) => (
                <span
                  key={label}
                  className="bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 rounded-[28px] font-semibold text-[11px] text-white sm:text-[15px] uppercase tracking-[0.2em]"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="space-y-4 sm:space-y-6 max-w-3xl">
              <h1 className="font-semibold text-main-heading leading-tight tracking-[-0.04em]">
                Secure Your Future with a Global Remote Internship and Leadership Development Programs
              </h1>
              <p className="hidden sm:block max-w-2xl text-slate-100/90 text-sm sm:text-base leading-relaxed">
                Whether you are launching your career via a <strong>remote internship</strong> with
                portfolio building to secure global experience, or seeking leadership development
                for remote professionals to break the income ceiling and command executive status,
                our ecosystem delivers the frameworks to win.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="bg-[#4B1E91] hover:bg-white/10 px-4 sm:px-5 py-2.5 sm:py-3 border border-white/30 rounded-lg font-semibold text-[10px] text-white sm:text-[11px] uppercase tracking-[0.18em] transition cursor-pointer">
                Build My Global Portfolio
              </button>
              <button className="bg-white hover:bg-white/10 px-4 sm:px-5 py-2.5 sm:py-3 border border-white/30 rounded-lg font-semibold text-[#0f2049] text-[10px] sm:text-[11px] hover:text-white uppercase tracking-[0.18em] transition cursor-pointer">
                Claim Management Authority
              </button>
            </div>
          </div>

          <div className="gap-3 sm:gap-5 grid grid-cols-2 xl:grid-cols-1">
            <div className="gap-2 sm:gap-4 grid bg-white/10 shadow-2xl shadow-slate-950/20 backdrop-blur-xl p-4 sm:p-6 border border-white/20 rounded-[18px]">
              <div className="text-[10px] text-slate-200 sm:text-xs uppercase tracking-[0.2em]">Remote Internship</div>
              <div className="font-black text-white text-3xl sm:text-5xl"><CountUp value={100} prefix="+" /></div>
              <p className="hidden sm:block text-[12px] text-slate-100 leading-relaxed">
                Remote internships with global certification of success
              </p>
            </div>

            <div className="gap-2 sm:gap-4 grid bg-white/10 shadow-2xl shadow-slate-950/20 backdrop-blur-xl p-4 sm:p-6 border border-white/20 rounded-[18px]">
              <div className="text-[10px] text-slate-200 sm:text-xs uppercase tracking-[0.2em]">Advisory Tracks</div>
              <div className="font-black text-white text-3xl sm:text-5xl"><CountUp value={20} prefix="+" /></div>
              <p className="hidden sm:block text-[12px] text-slate-100 leading-relaxed">
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
