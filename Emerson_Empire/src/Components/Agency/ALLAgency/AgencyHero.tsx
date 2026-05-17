import React from "react";
import { hero } from "../../../assets";

const AgencyHero: React.FC = () => {
  return (
    <section className="w-full pt-16 px-4 sm:px-6 lg:px-10">
      <div
        className="relative min-h-[520px] flex items-center bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden p-6 sm:p-10 lg:p-16"
        style={{ backgroundImage: `url(${hero})` }}
      >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-full max-w-5xl mx-auto py-10">

        {/* Badge pills */}
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="px-4 py-1 rounded-full border border-white/30 text-white text-[11px] font-semibold uppercase tracking-[0.18em]">
            Financial Services
          </span>
          <span className="px-4 py-1 rounded-full border border-white/30 text-white text-[11px] font-semibold uppercase tracking-[0.18em]">
            Business Consulting
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
          Professional Financial Support That Finally Feels Personal.
        </h1>

        {/* Subtext */}
        <p className="mt-5 text-white/70 text-sm sm:text-base leading-relaxed max-w-xl">
          Whether you are filing 1099 worker, managing a small business, or just
          trying to get organized, we bring enterprise-level expertise without the
          corporate price tag.
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center mt-8 px-7 py-3 bg-[#C9A84C] hover:bg-[#E8C97A] text-[#12022A] text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm transition-colors duration-200"
        >
          Book a Consultation
        </a>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-white/20">
          {[
            { value: "+100", label: "Clients Advised" },
            { value: "+20",  label: "Business Programs" },
            { value: "+50",  label: "Tax Returns Completed" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl sm:text-3xl font-bold text-white">{value}</p>
              <p className="mt-1 text-xs text-white/50 uppercase tracking-[0.15em]">{label}</p>
            </div>
          ))}
        </div>

      </div>
      </div>
    </section>
  );
};

export default AgencyHero;
