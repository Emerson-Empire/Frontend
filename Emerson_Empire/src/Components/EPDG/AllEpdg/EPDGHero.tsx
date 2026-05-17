import type { FC } from "react";
import poster from "../../../assets/H1.png";

const Hero: FC = () => {
  return (
    <section
      id="program"
      className="relative shadow-2xl shadow-slate-950/20 m-6 pt-5 border border-white/20 rounded-[28px] overflow-hidden text-white"
    >
      {/* ── Video background ── */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/hero-epdg.mp4" type="video/mp4" />
          {/* Fallback: poster image is shown if video fails to load */}
        </video>

        {/* Dark overlay so text stays readable over the video */}
        <div className="absolute inset-0 bg-[#07101f]/60" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 px-6 py-20 mx-auto sm:px-8 lg:px-10 max-w-screen-7xl">
        <div className="items-start gap-10 grid xl:grid-cols-[1.5fr_0.9fr]">

          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              {['Entry-Level Growth', 'Executive Scaling'].map((label) => (
                <span
                  key={label}
                  className="bg-white/10 px-4 py-2 border border-white/20 rounded-[28px] font-semibold text-[15px] text-white uppercase tracking-[0.24em]"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="max-w-3xl space-y-6">
              <h1 className="font-semibold text-main-heading leading-tight tracking-[-0.04em]">
                Secure Your Future with a Global Remote Internship and Leadership Development Programs
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-100/90 sm:text-base">
                Whether you are launching your career via a <strong>remote internship</strong> with
                portfolio building to secure global experience, or seeking leadership development
                for remote professionals to break the income ceiling and command executive status,
                our ecosystem delivers the frameworks to win.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0f2049] hover:bg-white/10 px-5 py-3 border border-white/30 rounded-lg font-semibold text-[11px] text-white uppercase tracking-[0.18em] transition cursor-pointer">
                Build My Global Portfolio
              </button>
              <button className="bg-white hover:bg-white/10 px-5 py-3 border border-white/30 rounded-lg font-semibold text-[#0f2049] text-[11px] hover:text-white uppercase tracking-[0.18em] transition cursor-pointer">
                Claim Management Authority
              </button>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="gap-4 grid bg-white/10 shadow-2xl shadow-slate-950/20 backdrop-blur-xl p-6 border border-white/20 rounded-[18px]">
              <div className="text-slate-200 text-xs uppercase tracking-[0.24em]">Remote Internship</div>
              <div className="text-5xl font-black text-white">+100</div>
              <p className="text-[12px] text-slate-100 leading-relaxed">
                Remote internships with global certification of success
              </p>
            </div>

            <div className="gap-4 grid bg-white/10 shadow-2xl shadow-slate-950/20 backdrop-blur-xl p-6 border border-white/20 rounded-[18px]">
              <div className="text-slate-200 text-xs uppercase tracking-[0.24em]">Advisory Tracks</div>
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
