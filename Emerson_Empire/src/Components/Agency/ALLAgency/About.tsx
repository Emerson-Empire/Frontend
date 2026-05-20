import React from "react";
import { Helena, Agency } from "../../../assets";

const About: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-16" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* ── Left: photo + logo overlay ── */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden h-[480px]">
            <img
              src={Helena}
              alt="Emerson Agency professional"
              className="w-full h-full object-cover object-top"
            />
            {/* dark gradient so logo pops */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
          </div>

          {/* Agency logo badge bottom-left */}
          <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-xl px-4 py-3">
            <img src={Agency} alt="Emerson Agency LLC logo" className="w-14 h-14 object-contain" />
            <div className="text-white text-xs leading-tight">
              <p className="font-black uppercase tracking-wide">Emerson</p>
              <p className="font-black uppercase tracking-wide">Agency LLC</p>
            </div>
          </div>
        </div>

        {/* ── Right: copy ── */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9A84C] mb-4">
            We Are Part of The Emerson Empire
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight mb-6 uppercase">
            Comprehensive Financial Solutions Backed by a Global Vision
          </h2>

          <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
            <p>
              At The Emerson Agency LLC, we don't just offer services; we provide a gateway
              to the Emerson Ecosystem. By being part of The Emerson Empire, we combine local
              expertise in tax and insurance with a global network of professional development
              and business strategy.
            </p>
            <p>
              When you work with us, you aren't just hiring an agency — you are joining a
              community dedicated to your financial growth, document readiness, and long-term
              stability.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#12022A] hover:bg-[#1e0440] text-white text-[11px] font-bold uppercase tracking-[0.2em] px-7 py-3 rounded-sm transition-colors duration-200"
            >
              Secure Your Services Today
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center border-2 border-[#12022A] hover:bg-[#12022A] hover:text-white text-[#12022A] text-[11px] font-bold uppercase tracking-[0.2em] px-7 py-3 rounded-sm transition-colors duration-200"
            >
              Explore Our Ecosystem
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
