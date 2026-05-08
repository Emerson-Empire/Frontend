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
    name: 'Essential',
    price: '$49',
    period: '/ month',
    description: 'Perfect for individuals needing basic insurance and personal tax filing.',
    features: [
      'Personal insurance consultation',
      'Annual personal tax filing',
      'Basic tax advisory',
      'Email support',
      'Compliance checklist',
    ],
    cta: 'Get Started',
    href: '/agency/essential',
  },
  {
    name: 'Professional',
    price: '$129',
    period: '/ month',
    description: 'Ideal for freelancers and small business owners who need more coverage.',
    features: [
      'Personal + business insurance',
      'Quarterly tax filing & review',
      'Proactive tax planning',
      'Dedicated account manager',
      'Priority support',
      'Regulatory compliance monitoring',
    ],
    cta: 'Most Popular',
    href: '/agency/professional',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Full-service insurance and tax management for growing businesses.',
    features: [
      'Full commercial insurance portfolio',
      'Monthly tax & accounting',
      'Annual financial strategy sessions',
      'Multi-entity tax management',
      'Dedicated team',
      '24/7 priority support',
    ],
    cta: 'Contact Us',
    href: '/agency/enterprise',
  },
];

const EPDG_TIERS: PricingTier[] = [
  {
    name: 'Starter',
    price: '$0',
    period: '',
    description: 'Free access to community resources, events, and introductory workshops.',
    features: [
      'Community membership',
      'Monthly networking events',
      'Access to introductory workshops',
      'Career resources library',
      'Alumni newsletter',
    ],
    cta: 'Join Free',
    href: '/epdg/starter',
  },
  {
    name: 'Internship Track',
    price: '$199',
    period: '/ programme',
    description: 'Structured 3-month internship placement with mentorship and job support.',
    features: [
      '3-month live internship placement',
      'Bi-weekly mentor sessions',
      'Portfolio project reviews',
      'Resume & LinkedIn coaching',
      'Employer partner introductions',
      'Programme certificate',
    ],
    cta: 'Apply Now',
    href: '/epdg/internship',
    highlighted: true,
  },
  {
    name: 'Leadership Track',
    price: '$499',
    period: '/ programme',
    description: 'Full entrepreneurship and leadership development for serious builders.',
    features: [
      'Everything in Internship Track',
      '6-month entrepreneur programme',
      'Business plan development',
      'Investor pitch coaching',
      '1-on-1 executive coaching',
      'Lifetime alumni network access',
    ],
    cta: 'Apply Now',
    href: '/epdg/leadership',
  },
];

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const TierCard: React.FC<{ tier: PricingTier; index: number }> = ({ tier, index }) => (
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-40px' }}
    className={`relative flex flex-col rounded-xl p-7 border transition-all duration-300 ${
      tier.highlighted
        ? 'bg-[#4B1E91] border-[#C9A84C]/50 shadow-lg shadow-[#C9A84C]/10'
        : 'bg-white/[0.03] border-white/8 hover:border-[#C9A84C]/20'
    }`}
  >
    {/* Highlighted badge */}
    {tier.highlighted && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="bg-[#C9A84C] text-[#12022A] text-[9px] font-bold uppercase tracking-[3px] px-3 py-1 rounded-sm">
          Recommended
        </span>
      </div>
    )}

    {/* Tier name */}
    <p className="text-[#C9A84C] text-[9px] font-semibold uppercase tracking-[3px] mb-3">
      {tier.name}
    </p>

    {/* Price */}
    <div className="flex items-baseline gap-1 mb-2">
      <span className="heading text-[#F5F0E8] text-[38px] font-bold leading-none">
        {tier.price}
      </span>
      {tier.period && (
        <span className="body text-purple-400 text-[13px]">{tier.period}</span>
      )}
    </div>

    {/* Description */}
    <p className="body text-purple-300/70 text-[13px] leading-[1.7] mb-6 pb-6 border-b border-white/8">
      {tier.description}
    </p>

    {/* Features */}
    <ul className="flex flex-col gap-3 mb-8 flex-1">
      {tier.features.map((f) => (
        <li key={f} className="flex items-start gap-3">
          <span className="text-[#C9A84C] mt-0.5 flex-shrink-0">
            <CheckIcon />
          </span>
          <span className="body text-[#F5F0E8]/80 text-[13px] leading-[1.6]">{f}</span>
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
        className="text-center mb-12"
      >
        <p className="text-[#C9A84C] text-[9px] font-semibold uppercase tracking-[4px] mb-4">
          Pricing
        </p>
        <h2 className="heading text-[#F5F0E8] text-[36px] sm:text-[44px] leading-[1.1] tracking-wide mb-4">
          Simple, Transparent Plans
        </h2>
        <p className="body text-purple-300 text-[15px] leading-[1.8] max-w-lg mx-auto">
          No hidden fees. No surprises. Choose the plan that fits where you are
          today and scale as you grow.
        </p>
        <div className="w-12 h-px bg-[#C9A84C]/40 mx-auto mt-6" />
      </motion.div>

      {/* Tab toggle */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-white/5 border border-white/10 rounded-sm p-1 gap-1">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {tiers.map((tier, i) => (
          <TierCard key={tier.name} tier={tier} index={i} />
        ))}
      </div>

      {/* Footer note */}
      <p className="body text-center text-purple-400/60 text-[12px] mt-10 tracking-wide">
        All plans include a free initial consultation. Cancel or upgrade anytime.
      </p>
    </section>
  );
};

export default Pricing;
