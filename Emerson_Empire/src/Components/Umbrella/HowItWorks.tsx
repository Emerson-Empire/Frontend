import React from 'react';
import { motion } from 'framer-motion';

const AGENCY_STEPS = [
  {
    number: '01',
    title: 'Book a Free Consultation',
    description:
      "Start with a no-obligation call. We learn about your situation — whether it's insurance needs or tax filing — and map out the best path forward.",
  },
  {
    number: '02',
    title: 'We Build Your Plan',
    description:
      'Our team crafts a personalised insurance or tax strategy tailored to your life or business goals, with full transparency on costs and coverage.',
  },
  {
    number: '03',
    title: 'We Handle Everything',
    description:
      'From paperwork to filing to renewals, we manage the process end-to-end so you never have to chase deadlines or decode complex jargon.',
  },
  {
    number: '04',
    title: 'You Stay Protected & Compliant',
    description:
      'Enjoy ongoing support, annual reviews, and proactive advice that keeps you covered and compliant all year round — not just at tax season.',
  },
];

const EPDG_STEPS = [
  {
    number: '01',
    title: 'Apply to the Programme',
    description:
      'Submit a short application outlining your goals and background. We accept driven individuals at all stages — students, graduates, and career-changers.',
  },
  {
    number: '02',
    title: 'Get Matched & Onboarded',
    description:
      'We match you to the right track — internship, mentorship, or training — and onboard you into the Emerson ecosystem with a dedicated guide.',
  },
  {
    number: '03',
    title: 'Learn, Build & Execute',
    description:
      'Work on real projects, attend workshops, and receive coaching that challenges you to apply skills immediately in professional environments.',
  },
  {
    number: '04',
    title: 'Graduate & Get Placed',
    description:
      'Complete your programme with a verified portfolio, a strong network, and direct access to our employer partner pipeline for placement opportunities.',
  },
];

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

interface StepProps {
  step: (typeof AGENCY_STEPS)[0];
  index: number;
  accent: string;
  isLast: boolean;
}

const Step: React.FC<StepProps> = ({ step, index, accent, isLast }) => (
  <motion.div
    custom={index}
    // variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    className="relative flex gap-6"
  >
    {/* Left — number + connector line */}
    <div className="flex flex-col items-center">
      <div
        className="flex justify-center items-center rounded-sm w-11 h-11 font-serif font-bold text-[15px]"
        style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}35` }}
      >
        {step.number}
      </div>
      {!isLast && (
        <div className="flex-1 mt-3 w-px" style={{ background: `${accent}20` }} />
      )}
    </div>

    {/* Right — content */}
    <div className="pb-10">
      <h4 className="mb-2 font-semibold text-[#F5F0E8] text-[17px] leading-snug tracking-wide heading">
        {step.title}
      </h4>
      <p className="text-[13px] text-purple-300/80 leading-[1.9] body">
        {step.description}
      </p>
    </div>
  </motion.div>
);

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-[#0E0120] px-6 sm:px-10 lg:px-16 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <p className="mb-4 font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[4px]">
          The Process
        </p>
        <h2 className="mb-4 text-[#F5F0E8] text-[36px] sm:text-[44px] leading-[1.1] tracking-wide heading">
          How It Works
        </h2>
        <p className="mx-auto max-w-xl text-[15px] text-purple-300 leading-[1.8] body">
          Two divisions. One streamlined experience. Here is exactly what happens
          when you partner with Emerson Empire.
        </p>
        <div className="bg-[#C9A84C]/40 mx-auto mt-6 w-12 h-px" />
      </motion.div>

      {/* Two columns */}
      <div className="gap-12 lg:gap-20 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-5xl">
        {/* Agency */}
        <div>
          <p className="flex items-center gap-3 mb-8 font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[4px]">
            <span className="block bg-[#C9A84C] opacity-60 w-6 h-px" />
            Division 01 — Agency
          </p>
          {AGENCY_STEPS.map((step, i) => (
            <Step
              key={step.number}
              step={step}
              index={i}
              accent="#C9A84C"
              isLast={i === AGENCY_STEPS.length - 1}
            />
          ))}
        </div>

        {/* EPDG */}
        <div>
          <p className="flex items-center gap-3 mb-8 font-semibold text-[#9B7FD4] text-[9px] uppercase tracking-[4px]">
            <span className="block bg-[#9B7FD4] opacity-60 w-6 h-px" />
            Division 02 — EPDG
          </p>
          {EPDG_STEPS.map((step, i) => (
            <Step
              key={step.number}
              step={step}
              index={i}
              accent="#9B7FD4"
              isLast={i === EPDG_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
