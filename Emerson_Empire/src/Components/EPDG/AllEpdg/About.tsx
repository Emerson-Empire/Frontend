import type { FC } from "react";
import logo from "../../../assets/EPDG_LOGO.webp";

const About: FC = () => {
  return (
    <section id="about-us" className="py-16 text-white bg-slate-50">
      <div className="items-start gap-12 grid xl:grid-cols-[1.1fr_0.9fr] mx-auto px-6 sm:px-8 max-w-screen-7xl">
        <div className="bg-[#08142e] shadow-[0_40px_120px_-70px_rgba(0,0,0,0.7)] p-10 border border-white/10 rounded-[20px]">
          <p className="mb-6 font-bold text-slate-300 text-4xl tracking-[0.32em]">About Us</p>
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Brand Logo" className="object-contain w-28 h-28" />
          </div>
          <h2 className="mb-6 text-3xl font-black leading-tight text-white">
            Building the Next Generation of Global Leaders.
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-slate-300">
            Part of the prestigious The Emerson Empire, EPDG is the definitive accelerator for ambitious talent. We specialize in elite leadership development for remote professionals and a specialized remote internship with portfolio building program. Our mission is clear: transforming academic knowledge into verifiable global success and six-figure career trajectories.
          </p>
          <button className="flex justify-center bg-white hover:bg-slate-300 shadow-lg shadow-slate-950/10 mx-auto px-11 py-5 rounded-lg font-bold text-[#081331] text-[11px] uppercase tracking-[0.18em] transition cursor-pointer">
            Learn More
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { value: "+100", label: "Interns", desc: "Remote interns placed in global roles with verified portfolio results." },
            { value: "+20",  label: "Programs", desc: "Specialized tracks covering leadership, tech, business, and finance." },
            { value: "+50",  label: "Countries", desc: "Our network spans professionals and opportunities across 50+ countries." },
            { value: "95%",  label: "Success Rate", desc: "Of graduates report career advancement within 6 months of completion." },
          ].map((stat, index) => (
            <div key={index} className="bg-white shadow-[0_24px_70px_-45px_rgba(15,32,73,0.2)] p-6 border border-slate-200 rounded-[28px]">
              <p className="mb-3 text-4xl font-extrabold text-slate-950">{stat.value}</p>
              <p className="mb-3 text-slate-500 text-xs uppercase tracking-[0.22em]">{stat.label}</p>
              <p className="text-sm leading-relaxed text-slate-600">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

