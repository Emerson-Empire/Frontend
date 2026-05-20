import React from "react";
import { hero } from "../../../assets";
import CountUp from '../../shared/CountUp';

const AgencyHero: React.FC = () => {
  return (
    <section className="w-full px-6 pt-16 sm:px-10 lg:px-16" id="hero">
      <div
        className="relative flex items-center p-6 overflow-hidden bg-center bg-no-repeat bg-cover sm:p-10 lg:p-16 rounded-2xl min-h-130"
        style={{ backgroundImage: `url(${hero})` }}
      >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 w-full max-w-5xl py-10 mx-auto">

        {/* Badge pills */}
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="px-4 py-1 border border-white/30 rounded-full font-semibold text-[11px] text-white uppercase tracking-[0.18em]">
            Financial Services
          </span>
          <span className="px-4 py-1 border border-white/30 rounded-full font-semibold text-[11px] text-white uppercase tracking-[0.18em]">
            Business Consulting
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-2xl text-main-heading font-bold leading-tight text-white">
          Professional Financial Support That Finally Feels Personal.
        </h1>

        {/* Subtext */}
        <p className="max-w-xl mt-5 text-sm leading-relaxed text-white/70 sm:text-base">
          Whether you are filing 1099 worker, managing a small business, or just
          trying to get organized, we bring enterprise-level expertise without the
          corporate price tag.
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex justify-center items-center bg-[#C9A84C] hover:bg-[#E8C97A] mt-8 px-7 py-3 rounded-sm font-bold text-[#12022A] text-[11px] uppercase tracking-[0.2em] transition-colors duration-200"
        >
          Book a Consultation
        </a>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 pt-10 border-t mt-14 border-white/20">
          {[
            { value: "+100", label: "Clients Advised" },
            { value: "+20",  label: "Business Programs" },
            { value: "+50",  label: "Tax Returns Completed" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl font-bold text-white sm:text-3xl">
              {(() => {
                const m = value.match(/^([^0-9]*)([0-9]+)([^0-9]*)$/);
                return m ? <CountUp value={parseInt(m[2])} prefix={m[1]} suffix={m[3]} /> : value;
              })()}
            </p>
              <p className="mt-1 text-white/50 text-xs uppercase tracking-[0.15em]">{label}</p>
            </div>
          ))}
        </div>

      </div>
      </div>
    </section>
  );
};

export default AgencyHero;
