import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EPDG_FAQS = [
  {
    question: 'Who can apply to the EPDG internship program?',
    answer:
      'Students, early-career professionals, career changers, and emerging leaders may apply. Selection depends on program needs, communication, availability, experience level, and alignment with the current team structure.',
  },
  {
    question: 'Is the internship paid or unpaid?',
    answer:
      'The Summer Internship Program is primarily an educational and professional development experience. Some leadership or performance-based stipend opportunities may become available depending on role, contribution, program needs, and available funding. Any stipend or paid opportunity will be communicated clearly and separately.',
  },
  {
    question: 'How long does the program take?',
    answer:
      'The current summer internship structure is designed as a multi-week professional development experience, with team assignments, guided projects, meetings, and portfolio-building opportunities.',
  },
  {
    question: 'What will I gain from the program?',
    answer:
      'Participants who complete the program may leave with portfolio-ready work, stronger professional skills, leadership experience, and documentation of their contributions. The program is designed to help you build practical experience and professional confidence.',
  },
  {
    question: 'What tracks or areas does the program cover?',
    answer:
      'The program currently includes opportunities across internship placements, entrepreneurship development, mentorship and coaching, and professional readiness training. Participants are matched to tracks based on their goals, skills, and program availability.',
  },
  {
    question: 'How do I apply to the EPDG program?',
    answer:
      'Submit an application through our contact form. Include a brief description of your background, goals, and area of interest. Our team will review your application and follow up with next steps based on current program availability.',
  },
  {
    question: 'Is prior professional experience required?',
    answer:
      'No. The program is designed to be accessible to individuals at various stages — including students, recent graduates, and career changers. What matters most is your commitment, availability, and genuine interest in growing professionally.',
  },
];

const FAQRow: React.FC<{ question: string; answer: string; index: number }> = ({
  question,
  answer,
  index,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="border-b border-white/8 last:border-0"
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="group flex justify-between items-start gap-6 py-5 w-full text-left"
      >
        <span className="font-medium text-[#F5F0E8] text-[15px] group-hover:text-[#9B7FD4] leading-snug transition-colors duration-200 heading">
          {question}
        </span>
        <span
          className="flex justify-center items-center mt-0.5 border rounded-sm w-7 h-7 shrink-0 transition-all duration-300"
          style={{
            borderColor: open ? '#9B7FD450' : 'rgba(255,255,255,0.1)',
            color: open ? '#9B7FD4' : '#9B7FD480',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pr-8 pb-6 text-[14px] text-purple-300/80 leading-[1.9] body">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const EPDGFAQ: React.FC = () => (
  <section id="epdg-faq" className="bg-[#0E0120] px-6 sm:px-10 lg:px-16 py-20">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <p className="mb-4 font-semibold text-[#9B7FD4] text-[9px] uppercase tracking-[4px]">
        EPDG — FAQs
      </p>
      <h2 className="mb-4 text-[#F5F0E8] text-[36px] sm:text-[44px] leading-[1.1] tracking-wide heading">
        Program Questions
      </h2>
      <p className="mx-auto max-w-lg text-[15px] text-purple-300 leading-[1.8] body">
        Common questions about the Emerson Professional Development Group internship program and career tracks.
      </p>
      <div className="bg-[#9B7FD4]/40 mx-auto mt-6 w-12 h-px" />
    </motion.div>

    {/* FAQ list */}
    <div className="mx-auto px-6 sm:px-8 border border-white/8 rounded-xl max-w-3xl">
      {EPDG_FAQS.map((item, i) => (
        <FAQRow key={item.question} question={item.question} answer={item.answer} index={i} />
      ))}
    </div>

    {/* CTA */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="mt-10 text-[13px] text-purple-400 text-center body"
    >
      Ready to apply?{' '}
      <a href="#contact" className="text-[#9B7FD4] hover:underline underline-offset-4 transition-all">
        Submit your application
      </a>
    </motion.p>
  </section>
);

export default EPDGFAQ;
