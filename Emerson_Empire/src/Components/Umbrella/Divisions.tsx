import React from 'react';
import { motion } from 'framer-motion';
import EmersonStudents from '../../assets/emerson_students_web.webp';
import EmersonAgencyWeb from '../../assets/emerson_agency_web.webp';

interface RichFeature {
  title: string;
  description: string;
}

interface DivisionCardProps {
  side: 'left' | 'right';
  bgSrc: string;
  bgSrcWebp?: string;
  title: string;
  tagline?: React.ReactNode;
  sectionLabel: string;
  description?: string;
  features: string[] | RichFeature[];
  ctaLabel: string;
  ctaHref: string;
  ctaVariant: 'dark' | 'gold' | 'purple';
  ctaFullWidth?: boolean;
}

const isRichFeatures = (f: string[] | RichFeature[]): f is RichFeature[] =>
  f.length > 0 && typeof f[0] === 'object';

const Checkmark: React.FC = () => (
  <span className="flex justify-center items-center bg-[#C9A84C]/15 border border-[#C9A84C] rounded-full w-5 h-5 shrink-0 mt-0.5">
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <polyline points="2,5 4,7.5 8,3" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const DivisionCard: React.FC<DivisionCardProps> = ({
  side, bgSrc, bgSrcWebp,
  title, tagline, sectionLabel, description, features, ctaLabel, ctaHref, ctaVariant, ctaFullWidth,
}) => (
  <motion.div
    initial={{ opacity: 0, x: side === 'left' ? -24 : 24 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex flex-col bg-white shadow-xl rounded-2xl overflow-hidden"
  >
    {/* Photo */}
    <div className="w-full">
      <picture>
        {bgSrcWebp && <source srcSet={bgSrcWebp} type="image/webp" />}
        <img src={bgSrc} alt="" aria-hidden="true" loading="lazy" decoding="async" className="w-full h-auto block" />
      </picture>
    </div>

    {/* Text panel */}
    <div className="flex flex-col flex-1 px-7 py-7">
      <h3 className="mb-3 font-bold text-[#12022A] text-[22px] sm:text-[26px] uppercase leading-tight heading">{title}</h3>
      <div className="bg-[#C9A84C] mb-4 w-10 h-0.5" />

      {tagline && <div className="mb-5 text-[#12022A]/70 text-[13px] leading-[1.9]">{tagline}</div>}

      <p className="mb-3 font-bold text-[#12022A] text-[15px]">{sectionLabel}</p>

      {description && <p className="mb-5 text-[#12022A]/60 text-[13px] leading-[1.85]">{description}</p>}

      <ul className="flex flex-col gap-4 mb-7">
        {isRichFeatures(features)
          ? features.map((f) => (
              <li key={f.title} className="flex items-start gap-3">
                <Checkmark />
                <div>
                  <p className="font-bold text-[#12022A] text-[13px] leading-snug">{f.title}</p>
                  <p className="mt-0.5 text-[#12022A]/60 text-[12px] leading-[1.75]">{f.description}</p>
                </div>
              </li>
            ))
          : (features as string[]).map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[#12022A]/70 text-[12px]">
                <span className="bg-[#C9A84C] mt-1.5 rounded-full w-1 h-1 shrink-0" />
                {f}
              </li>
            ))}
      </ul>

      <a
        href={ctaHref}
        className={`inline-flex items-center justify-center mt-auto px-6 py-3.5 rounded-sm font-bold text-[11px] uppercase tracking-[2px] transition-colors duration-200 ${
          ctaFullWidth ? 'w-full' : 'self-start'
        } ${
          ctaVariant === 'gold'
            ? 'bg-[#C9A84C] hover:bg-[#E8C97A] text-[#12022A]'
            : ctaVariant === 'purple'
              ? 'bg-[#4B1E91] hover:bg-[#5D2AAD] text-white'
              : 'bg-[#12022A] hover:bg-[#1E0A4A] text-white'
        }`}
      >
        {ctaLabel}
      </a>
    </div>
  </motion.div>
);

const EPDG_FEATURES: RichFeature[] = [
  {
    title: 'Experiential learning that counts',
    description: 'You will work on live projects in web development, marketing, or sales, giving you a tangible portfolio that proves your skills to future employers.',
  },
  {
    title: 'Confidence built through action.',
    description: 'We move beyond theory by providing direct mentorship and career coaching, ensuring you are not just ready for the job, but ready to lead in it.',
  },
];

const AGENCY_FEATURES: RichFeature[] = [
  {
    title: 'Enterprise-level expertise for everyone',
    description: 'We provide boutique tax preparation and business consulting that meets the highest professional standards, ensuring your compliance is handled with precision and care.',
  },
  {
    title: 'Strategic growth through partnership.',
    description: 'From professional writing to tailored business coaching, we offer the executive support you need to turn your goals into sustainable results without the corporate coldness.',
  },
];

const Divisions: React.FC = () => (
  <section className="bg-white px-6 sm:px-10 lg:px-16 py-20">
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

    <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-7xl">
      <DivisionCard
        side="left"
        bgSrc={EmersonStudents}
        title="Emerson Professional Development Group"
        tagline={
          <>
            Many students and career changers{' '}
            <strong className="font-semibold text-[#12022A]">
              feel stuck in a loop of having the degree but lacking the real-world evidence to get hired.
            </strong>{' '}
            The anxiety of facing an empty portfolio or a high-stakes interview often stops great talent before they even start.
          </>
        }
        sectionLabel="What we offer."
        features={EPDG_FEATURES}
        ctaLabel="Apply for Internships"
        ctaHref="/epdg"
        ctaVariant="dark"
        ctaFullWidth
      />
      <DivisionCard
        side="right"
        bgSrc={EmersonAgencyWeb}
        title="The Emerson Agency LLC"
        tagline={
          <>
            High-level financial and consulting services are often out of reach for everyday people and small business owners.{' '}
            <strong className="font-semibold text-[#12022A]">
              Many face the stress of complex tax compliance and strategic growth alone,
            </strong>{' '}
            without a trusted partner who treats their vision with the professional rigor it deserves.
          </>
        }
        sectionLabel="What we offer."
        features={AGENCY_FEATURES}
        ctaLabel="Get Expert Support."
        ctaHref="/agency"
        ctaVariant="purple"
        ctaFullWidth
      />
    </div>
  </section>
);

export default Divisions;
