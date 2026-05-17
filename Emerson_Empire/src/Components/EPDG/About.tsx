import type { FC } from "react";
import logo from "../../assets/EPDG_LOGO.webp";

const About: FC = () => {
  return (
    <section id="about-us" className="bg-slate-50 text-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 grid gap-12 xl:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="rounded-[20px] bg-[#08142e] shadow-[0_40px_120px_-70px_rgba(0,0,0,0.7)] border border-white/10 p-10">
          <p className="text-4xl text-slate-300 font-bold tracking-[0.32em] mb-6">About Us</p>
          <div className="mb-6 justify-center flex">
            <img src={logo} alt="Brand Logo" className="h-50px w-50px" />
          </div>
          <h2 className="text-3xl font-black leading-tight text-white mb-6">
            Building the Next Generation of Global Leaders.
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-8">
            Part of the prestigious The Emerson Empire, EPDG is the definitive accelerator for ambitious talent. We specialize in elite leadership development for remote professionals and a specialized remote internship with portfolio building program. Our mission is clear: transforming academic knowledge into verifiable global success and six-figure career trajectories.
          </p>
          <button className="font-bold justify-center mx-auto flex bg-white text-[#081331] text-[11px] uppercase tracking-[0.18em] px-11 py-5 rounded-[8px] shadow-lg shadow-slate-950/10 transition cursor-pointer hover:bg-slate-300">
            Learn More
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { value: "+100", label: "interns" },
            { value: "+100", label: "interns" },
            { value: "+100", label: "interns" },
            { value: "+100", label: "interns" },
          ].map((stat, index) => (
            <div key={index} className="rounded-[28px] bg-white p-6 shadow-[0_24px_70px_-45px_rgba(15,32,73,0.2)] border border-slate-200">
              <p className="text-4xl font-extrabold text-slate-950 mb-3">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 mb-3">{stat.label}</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

