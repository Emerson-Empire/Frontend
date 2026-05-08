import React from 'react';
import { motion } from 'framer-motion';

// ── Types ──────────────────────────────────────────────────────────────────
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Division {
  tag: string;
  number: string;
  heading: string;
  subheading: string;
  accent: string;
  features: Feature[];
}

// ── Icons ──────────────────────────────────────────────────────────────────
const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const FileTextIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const CalculatorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="10" x2="8" y2="10" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="10" x2="12" y2="10" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="10" x2="16" y2="10" strokeWidth="2" strokeLinecap="round" />
    <line x1="8" y1="14" x2="8" y2="14" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="14" x2="12" y2="14" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="14" x2="16" y2="14" strokeWidth="2" strokeLinecap="round" />
    <line x1="8" y1="18" x2="16" y2="18" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ClipboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <line x1="12" y1="11" x2="12" y2="17" />
    <line x1="9" y1="14" x2="15" y2="14" />
  </svg>
);

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const AwardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────
const DIVISIONS: Division[] = [
  {
    tag: 'Division 01',
    number: '01',
    heading: 'Emerson Agency',
    subheading: 'Insurance & Tax Solutions Built for Growth',
    accent: '#C9A84C',
    features: [
      {
        icon: <ShieldIcon />,
        title: 'Personal Insurance',
        description:
          'Life, health, auto and home coverage tailored to protect what matters most — with plans that fit every stage of life.',
      },
     {
  icon: <BriefcaseIcon />,
  title: 'Business Insurance',
  description:
    "Comprehensive commercial coverage including liability, property, and workers' compensation to keep your business secure.",
},
      {
        icon: <FileTextIcon />,
        title: 'Individual Tax Filing',
        description:
          'Accurate, stress-free personal tax preparation. We maximise your refund and ensure full compliance every year.',
      },
      {
        icon: <CalculatorIcon />,
        title: 'Business Tax & Accounting',
        description:
          'End-to-end corporate tax filing, bookkeeping, and financial reporting so you can focus on running your business.',
      },
      {
        icon: <ClipboardIcon />,
        title: 'Tax Planning & Advisory',
        description:
          'Proactive tax strategy throughout the year — not just at filing season — to minimise liability and build financial clarity.',
      },
      {
        icon: <GlobeIcon />,
        title: 'Compliance & Regulation',
        description:
          'Stay ahead of changing tax laws and insurance regulations with expert guidance that protects you from costly penalties.',
      },
    ],
  },
  {
    tag: 'Division 02',
    number: '02',
    heading: 'Emerson EPDG',
    subheading: 'A Development Program That Builds Leaders',
    accent: '#9B7FD4',
    features: [
      {
        icon: <UsersIcon />,
        title: 'Internship Programme',
        description:
          'Hands-on placements inside real business divisions. Interns work on live projects and leave with portfolio-ready experience.',
      },
      {
        icon: <TrendingUpIcon />,
        title: 'Entrepreneurship Training',
        description:
          'Structured workshops covering business planning, financial literacy, and go-to-market strategy for aspiring founders.',
      },
      {
        icon: <AwardIcon />,
        title: 'Mentorship & Coaching',
        description:
          'One-on-one sessions with seasoned professionals who guide your growth, sharpen your vision, and accelerate your path.',
      },
      {
        icon: <BookIcon />,
        title: 'Professional Development',
        description:
          'Soft-skills bootcamps, leadership intensives, and career readiness programmes designed for the modern professional.',
      },
      {
        icon: <BriefcaseIcon />,
        title: 'Job Placement Support',
        description:
          'Resume reviews, interview coaching, and a direct pipeline to employer partners actively looking for EPDG graduates.',
      },
      {
        icon: <GlobeIcon />,
        title: 'Community & Network',
        description:
          'Lifetime access to the Emerson alumni network — events, collaborations, and a community of builders across industries.',
      },
    ],
  },
];

// ── Animation variants ─────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ── Feature Card ───────────────────────────────────────────────────────────
const FeatureCard: React.FC<{ feature: Feature; index: number; accent: string }> = ({
  feature,
  index,
  accent,
}) => (
  <motion.div
    custom={index}
   
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
    className="group relative flex flex-col gap-4 bg-white/[0.03] hover:bg-white/[0.07] p-6 border border-white/8 hover:border-[#C9A84C]/30 rounded-lg transition-all duration-300 cursor-default"
  >
    {/* Number watermark */}
    <span
      className="top-4 right-5 absolute font-serif text-[36px] leading-none pointer-events-none select-none"
      style={{ color: accent, opacity: 0.06 }}
    >
      {String(index + 1).padStart(2, '0')}
    </span>

    {/* Icon */}
    <div
      className="flex flex-shrink-0 justify-center items-center rounded-sm w-10 h-10 text-[#C9A84C] transition-colors duration-300"
      style={{
        background: `${accent}15`,
        color: accent,
      }}
    >
      {feature.icon}
    </div>

    {/* Text */}
    <div className="flex flex-col gap-1.5">
      <h4 className="font-semibold text-[#F5F0E8] text-[24px] leading-snug tracking-wide heading">
        {feature.title}
      </h4>
      <p className="text-[16px] text-purple-300/80 leading-[1.8] body body">
        {feature.description}
      </p>
    </div>

    {/* Hover accent line */}
    <div
      className="right-6 bottom-0 left-6 absolute opacity-0 group-hover:opacity-100 h-px transition-opacity duration-300"
      style={{ background: `linear-gradient(90deg, transparent, ${accent}60, transparent)` }}
    />
  </motion.div>
);

// ── Division Block ─────────────────────────────────────────────────────────
const DivisionBlock: React.FC<{ division: Division; flip?: boolean }> = ({
  division,
  flip = false,
}) => (
  <div className={`py-20 px-6 sm:px-10 lg:px-16 ${flip ? 'bg-[#0E0120]' : 'bg-[#12022A]'}`}>
    {/* Section header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14 max-w-2xl"
    >
      {/* Tag */}
      <p className="flex items-center gap-3 mb-5 font-semibold text-[9px] uppercase tracking-[4px]" style={{ color: division.accent }}>
        <span className="block opacity-60 w-8 h-px" style={{ background: division.accent }} />
        {division.tag}
      </p>

      {/* Heading */}
      <h2
        className="mb-4 font-serif text-[#F5F0E8] text-[36px] sm:text-[44px] leading-[1.1] tracking-wide heading"
      >
        {division.heading}
      </h2>

      {/* Subheading */}
      <p className="text-[16px] text-purple-300 leading-[1.8] tracking-wide body">
        {division.subheading}
      </p>

      {/* Gold rule */}
      <div className="opacity-40 mt-6 w-12 h-px" style={{ background: division.accent }} />
    </motion.div>

    {/* Feature grid */}
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {division.features.map((feature, i) => (
        <FeatureCard
          key={feature.title}
          feature={feature}
          index={i}
          accent={division.accent}
        />
      ))}
    </div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-12"
    >
      <a
        href={`/${division.heading.split(' ')[1].toLowerCase()}`}
        className="inline-flex items-center gap-2 hover:gap-3 px-7 py-3 border rounded-sm font-semibold text-[13px] uppercase tracking-[3px] transition-all duration-200 body"
        style={{
          borderColor: `${division.accent}50`,
          color: division.accent,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.borderColor = division.accent;
          (e.currentTarget as HTMLAnchorElement).style.background = `${division.accent}10`;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.borderColor = `${division.accent}50`;
          (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
        }}
      >
        Learn more about {division.heading}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  </div>
);

// ── Main Component ─────────────────────────────────────────────────────────
const Features: React.FC = () => {
  return (
    <section>
      {/* Thin divider */}
      <div className="bg-[#C9A84C]/10 w-full h-px" />

      {DIVISIONS.map((division, i) => (
        <React.Fragment key={division.number}>
          <DivisionBlock division={division} flip={i % 2 !== 0} />
          {i < DIVISIONS.length - 1 && (
            <div className="bg-[#C9A84C]/10 w-full h-px" />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Features;
