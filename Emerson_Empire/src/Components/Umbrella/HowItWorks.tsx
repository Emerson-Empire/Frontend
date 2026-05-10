import React from 'react';
import { motion } from 'framer-motion';

const AGENCY_STEPS = [
  {
    number: '01',
    title: 'Submit an Inquiry',
    description:
      'Start by submitting an inquiry so we can better understand your needs, goals, and the type of support you are looking for.',
  },
  {
    number: '02',
    title: 'We Identify the Right Support',
    description:
      'Our team helps identify the services, resources, or next steps that may best support your personal, professional, or business goals.',
  },
  {
    number: '03',
    title: 'We Support the Process',
    description:
      'As services become available, our goal is to provide organized, practical support that helps clients move through paperwork, planning, preparation, and follow-up with greater clarity.',
  },
  {
    number: '04',
    title: 'You Stay Informed and Prepared',
    description:
      'Our goal is to help clients stay organized, informed, and prepared through practical education, service support, and clear communication.',
  },
];

const EPDG_STEPS = [
  {
    number: '01',
    title: 'Apply to the Program',
    description:
      'Submit an application outlining your goals, background, and area of interest. The program is designed for students, early-career professionals, career changers, and emerging leaders seeking practical experience.',
  },
  {
    number: '02',
    title: 'Get Matched & Onboarded',
    description:
      'Selected participants are matched with a track or team based on program needs, skills, availability, and professional goals.',
  },
  {
    number: '03',
    title: 'Learn, Build & Execute',
    description:
      'Participants work on guided projects, attend meetings or workshops, and build skills through practical assignments, collaboration, and leadership development.',
  },
  {
    number: '04',
    title: 'Complete the Program & Build Your Portfolio',
    description:
      'Participants who complete the program may leave with portfolio-ready work, stronger professional skills, leadership experience, and documentation of their contributions.',
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
          Two developing divisions. One connected ecosystem. Here is how The Emerson Empire is building pathways for support, training, and professional growth.
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
