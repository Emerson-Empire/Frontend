import React from 'react';
import { motion } from 'framer-motion';
import { EPDG, EPDGWebp, EPDGAvif, Agency, AgencyWebp, AgencyAvif, empire, empireWebp, empireAvif, Hosea } from '../../assets';

const EPDG_FEATURES = [
  'Experiential learning that counts',
  'Real-world tasks across the full internship program',
  'Mentorship and structured professional development',
  'A global network of emerging leaders',
];

const AGENCY_FEATURES = [
  'Enterprise-level expertise for every client',
  'Financial guidance and insurance solutions',
  'Personalized business development support',
  'Compliance and tax strategy consulting',
];

interface DivisionCardProps {
  side: 'left' | 'right';
  bgSrc: string;
  bgSrcWebp?: string;
  bgSrcAvif?: string;
  logoSrc: string;
  logoSrcWebp?: string;
  logoSrcAvif?: string;
  logoAlt: string;
  divisionLabel: string;
  title: string;
  sectionLabel: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaVariant: 'dark' | 'gold';
}

const DivisionCard: React.FC<DivisionCardProps> = ({
  side, bgSrc, bgSrcWebp, bgSrcAvif, logoSrc, logoSrcWebp, logoSrcAvif, logoAlt,
  divisionLabel, title, sectionLabel, description, features, ctaLabel, ctaHref, ctaVariant,
}) => (
  <motion.div
    initial={{ opacity: 0, x: side === 'left' ? -24 : 24 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex flex-col rounded-2xl overflow-hidden shadow-xl"
  >
    {/* Photo section with badge overlay */}
    <div className="relative h-64 overflow-hidden">
      <picture>
        {bgSrcAvif && <source srcSet={bgSrcAvif} type="image/avif" />}
        {bgSrcWebp && <source srcSet={bgSrcWebp} type="image/webp" />}
        <img src={bgSrc} alt="" aria-hidden="true" className="w-full h-full object-cover" />
      </picture>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#12022A]/55" />
      {/* Badge at bottom-left of photo */}
      <div className="absolute bottom-4 left-5 w-14 h-14">
        <picture>
          {logoSrcAvif && <source srcSet={logoSrcAvif} type="image/avif" />}
          {logoSrcWebp && <source srcSet={logoSrcWebp} type="image/webp" />}
          <img src={logoSrc} alt={logoAlt} width={56} height={56} className="w-14 h-14 object-contain drop-shadow-lg" />
        </picture>
      </div>
    </div>

    {/* Text panel */}
    <div className="flex flex-col flex-1 bg-[#12022A] p-7">
      <p className="mb-1 font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[3px]">{divisionLabel}</p>
      <h3 className="mb-5 font-bold text-[#F5F0E8] text-[20px] leading-tight heading">{title}</h3>

      <p className="mb-1.5 font-semibold text-[#C9A84C] text-[10px] uppercase tracking-[3px]">{sectionLabel}</p>
      <p className="mb-5 text-[#F5F0E8]/65 text-[13px] leading-[1.85]">{description}</p>

      <ul className="flex flex-col gap-2 mb-7">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[#F5F0E8]/75 text-[12px]">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className={`inline-flex items-center justify-center mt-auto self-start px-6 py-3 rounded-sm font-bold text-[11px] uppercase tracking-[2px] transition-colors duration-200 ${
          ctaVariant === 'gold'
            ? 'bg-[#C9A84C] hover:bg-[#E8C97A] text-[#12022A]'
            : 'bg-white hover:bg-gray-100 text-[#12022A]'
        }`}
      >
        {ctaLabel}
      </a>
    </div>
  </motion.div>
);

const Divisions: React.FC = () => (
  <section className="bg-white px-6 sm:px-10 lg:px-16 py-20">
    {/* Heading — dark text on white */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      <h2 className="mb-4 font-bold text-[#12022A] text-[36px] sm:text-[44px] leading-[1.1] tracking-tight heading">
        Decide where you grow.
      </h2>
      <p className="mx-auto max-w-xl text-[#12022A]/55 text-[15px] leading-[1.85]">
        Your ambition deserves a clear direction. Whether you are mastering a new craft or securing your legacy, we provide the path.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-7xl">
      <DivisionCard
        side="left"
        bgSrc={empire}
        bgSrcWebp={empireWebp}
        bgSrcAvif={empireAvif}
        logoSrc={EPDG}
        logoSrcWebp={EPDGWebp}
        logoSrcAvif={EPDGAvif}
        logoAlt="EPDG logo"
        divisionLabel="Division 01"
        title="Emerson Professional Development Group"
        sectionLabel="Who we serve"
        description="Visionary students and career changers who feel stuck — having the degree but lacking real-world skills. You will work on transformational tasks across the internship program with the goal of becoming who you need to become."
        features={EPDG_FEATURES}
        ctaLabel="Apply for Internships"
        ctaHref="/epdg"
        ctaVariant="dark"
      />
      <DivisionCard
        side="right"
        bgSrc={Hosea}
        logoSrc={Agency}
        logoSrcWebp={AgencyWebp}
        logoSrcAvif={AgencyAvif}
        logoAlt="Emerson Agency logo"
        divisionLabel="Division 02"
        title="The Emerson Agency LLC"
        sectionLabel="What we offer"
        description="High-level financial guidance and small business advisory — because compliance, growth, and protection are not optional. We deliver enterprise-level expertise for every client we serve."
        features={AGENCY_FEATURES}
        ctaLabel="Get Expert Support"
        ctaHref="/agency"
        ctaVariant="gold"
      />
    </div>
  </section>
);

export default Divisions;
