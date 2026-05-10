import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Tab = 'agency' | 'epdg';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
}

const AGENCY_TIERS: PricingTier[] = [
  {
    name: 'Individual Support',
    price: 'Coming Soon',
    period: '',
    description: 'Personal insurance guidance and tax filing support for individuals and families.',
    features: [
      'Personal insurance consultation',
      'Individual tax filing support',
      'Basic tax advisory',
      'Email correspondence',
      'Compliance guidance',
    ],
    cta: 'Submit an Inquiry',
    href: '#contact',
  },
  {
    name: 'Professional Support',
    price: 'Coming Soon',
    period: '',
    description: 'Broader support for freelancers and small business owners navigating insurance and tax needs.',
    features: [
      'Personal and business insurance guidance',
      'Business tax filing support',
      'Tax planning assistance',
      'Dedicated point of contact',
      'Regulatory compliance guidance',
    ],
    cta: 'Submit an Inquiry',
    href: '#contact',
    highlighted: true,
  },
  {
    name: 'Business & Enterprise',
    price: 'Custom Inquiry',
    period: '',
    description: 'Tailored support for growing businesses with more complex financial and insurance needs.',
    features: [
      'Commercial insurance portfolio guidance',
      'Business tax and accounting support',
      'Financial organization assistance',
      'Multi-entity considerations',
      'Dedicated support team',
    ],
    cta: 'Contact Us',
    href: '#contact',
  },
];

const EPDG_TIERS: PricingTier[] = [
  {
    name: 'Internship Program',
    price: 'Coming Soon',
    period: '',
    description: 'Structured internship experience with guided projects, mentorship, and portfolio-building opportunities.',
    features: [
      'Real project contributions',
      'Mentor guidance and feedback',
      'Portfolio-ready work',
      'Resume and LinkedIn support',
      'Program documentation',
    ],
    cta: 'Submit an Application',
    href: '#contact',
    highlighted: true,
  },
  {
    name: 'Leadership Track',
    price: 'Coming Soon',
    period: '',
    description: 'Extended professional development focused on entrepreneurship, leadership, and business readiness.',
    features: [
      'Business planning guidance',
      'Leadership development workshops',
      'Communication and strategy training',
      'Professional portfolio support',
      'Long-term network access',
    ],
    cta: 'Submit an Application',
    href: '#contact',
  },
  {
    name: 'Custom / Enterprise',
    price: 'Custom Inquiry',
    period: '',
    description: 'Custom program structures for organizations, institutions, or groups seeking tailored professional development.',
    features: [
      'Custom program design',
      'Team or cohort onboarding',
      'Dedicated program coordinator',
      'Flexible scheduling and tracks',
      'Organization-level reporting',
    ],
    cta: 'Contact Us',
    href: '#contact',
  },
];

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i: number) => ({
//     opacity: 1, y: 0,
//     transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

const TierCard: React.FC<{ tier: PricingTier; index: number }> = ({ tier, index }) => (
  <motion.div
    custom={index}
    initial="hidden"
    // variants={fadeUp}

    whileInView="visible"
    viewport={{ once: true, margin: '-40px' }}
    className={`relative flex flex-col rounded-xl p-7 border transition-all duration-300 ${
      tier.highlighted
        ? 'bg-[#4B1E91] border-[#C9A84C]/50 shadow-lg shadow-[#C9A84C]/10'
        : '  border-white/8 hover:border-[#C9A84C]/20'
    }`}
  >
    {/* Highlighted badge */}
    {tier.highlighted && (
      <div className="-top-3 left-1/2 absolute -translate-x-1/2">
        <span className="bg-[#C9A84C] px-3 py-1 rounded-sm font-bold text-[#12022A] text-[9px] uppercase tracking-[3px]">
          Recommended
        </span>
      </div>
    )}

    {/* Tier name */}
    <p className="mb-3 font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[3px]">
      {tier.name}
    </p>

    {/* Price */}
    <div className="flex items-baseline gap-1 mb-2">
      <span className="font-bold text-[#F5F0E8] text-[38px] leading-none heading">
        {tier.price}
      </span>
      {tier.period && (
        <span className="text-[13px] text-purple-400 body">{tier.period}</span>
      )}
    </div>

    {/* Description */}
    <p className="mb-6 pb-6 border-white/8 border-b text-[13px] text-purple-300/70 leading-[1.7] body">
      {tier.description}
    </p>

    {/* Features */}
    <ul className="flex flex-col flex-1 gap-3 mb-8">
      {tier.features.map((f) => (
        <li key={f} className="flex items-start gap-3">
          <span className="mt-0.5 text-[#C9A84C]">
            <CheckIcon />
          </span>
          <span className="text-[#F5F0E8]/80 text-[13px] leading-[1.6] body">{f}</span>
        </li>
      ))}
    </ul>

    {/* CTA */}
    <a
      href={tier.href}
      className={`text-center py-3 px-6 rounded-sm text-[12px] font-semibold uppercase tracking-[3px] transition-all duration-200 body ${
        tier.highlighted
          ? 'bg-[#C9A84C] hover:bg-[#E8C97A] text-[#12022A]'
          : 'border border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10'
      }`}
    >
      {tier.cta}
    </a>
  </motion.div>
);

const Pricing: React.FC = () => {
  const [tab, setTab] = useState<Tab>('agency');
  const tiers = tab === 'agency' ? AGENCY_TIERS : EPDG_TIERS;

  return (
    <section className="bg-[#0E0120] px-6 sm:px-10 lg:px-16 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <p className="mb-4 font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[4px]">
          Pricing
        </p>
        <h2 className="mb-4 text-[#F5F0E8] text-[36px] sm:text-[44px] leading-[1.1] tracking-wide heading">
          Service Options Coming Soon
        </h2>
        <p className="mx-auto max-w-lg text-[15px] text-purple-300 leading-[1.8] body">
          We are currently developing clear service options for individuals, families, small businesses, and professional development clients.
        </p>
        <div className="bg-[#C9A84C]/40 mx-auto mt-6 w-12 h-px" />
      </motion.div>

      {/* Tab toggle */}
      <div className="flex justify-center mb-12">
        <div className="flex gap-1 bg-white/5 p-1 border border-white/10 rounded-sm">
          {(['agency', 'epdg'] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2 text-[11px] font-semibold uppercase tracking-[3px] rounded-sm transition-all duration-200 body ${
                tab === t
                  ? 'bg-[#C9A84C] text-[#12022A]'
                  : 'text-purple-400 hover:text-[#F5F0E8]'
              }`}
            >
              {t === 'agency' ? 'Agency' : 'EPDG'}
            </button>
          ))}
        </div>
      </div>

      {/* Tier cards */}
      <div className="gap-5 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-5xl">
        {tiers.map((tier, i) => (
          <TierCard key={tier.name} tier={tier} index={i} />
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-10 text-[12px] text-purple-400/60 text-center tracking-wide body">
        Service details and availability will be communicated directly. Submit an inquiry to learn more.
      </p>
    </section>
  );
};

export default Pricing;
