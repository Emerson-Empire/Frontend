import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AGENCY_FAQS = [
  {
    question: 'What types of insurance do you offer?',
    answer:
      'We provide guidance on a range of personal and commercial insurance options including life insurance, health insurance, auto insurance, home and property insurance, business liability, and workers compensation. Our team assesses your specific situation and helps identify the most appropriate coverage for your needs.',
  },
  {
    question: 'Can you help if I have not filed taxes in multiple years?',
    answer:
      'Yes — this is one of the most common situations we help with. We support clients in organizing back tax filings, understanding their options for penalty relief where applicable, and setting up a clearer system going forward. There is no judgment here; our goal is to help you move forward with clarity.',
  },
  {
    question: 'Do you handle business tax filing as well as personal?',
    answer:
      'We support both individual and business tax filing, including for sole proprietors, LLCs, partnerships, and incorporated businesses. We also provide bookkeeping support and financial organization assistance for businesses that need year-round help.',
  },
  {
    question: 'How do I submit an inquiry for Agency services?',
    answer:
      'You can submit an inquiry through our contact form on this site. A member of our team will follow up within 24 hours to learn more about your needs and help determine the right next step.',
  },
  {
    question: 'Are your services currently available?',
    answer:
      'The Emerson Agency is in its development stage and actively building out its service offerings. We encourage you to submit an inquiry so we can understand your needs, communicate what is currently available, and keep you informed as new services become accessible.',
  },
  {
    question: 'Will I work with a dedicated team member?',
    answer:
      'Our goal is to ensure every client has a clear point of contact throughout the process. As our team grows, we are building systems to provide organized, personalized support for each client we work with.',
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
        <span className="font-medium text-[#F5F0E8] text-[15px] group-hover:text-[#C9A84C] leading-snug transition-colors duration-200 heading">
          {question}
        </span>
        <span
          className="flex justify-center items-center mt-0.5 border rounded-sm w-7 h-7 shrink-0 transition-all duration-300"
          style={{
            borderColor: open ? '#C9A84C50' : 'rgba(255,255,255,0.1)',
            color: open ? '#C9A84C' : '#C9A84C80',
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

const AgencyFAQ: React.FC = () => (
  <section id="agency-faq" className="bg-[#12022A] px-6 sm:px-10 lg:px-16 py-20">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <p className="mb-4 font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[4px]">
        Emerson Agency — FAQs
      </p>
      <h2 className="mb-4 text-[#F5F0E8] text-[36px] sm:text-[44px] leading-[1.1] tracking-wide heading">
        Agency Questions
      </h2>
      <p className="mx-auto max-w-lg text-[15px] text-purple-300 leading-[1.8] body">
        Common questions about insurance guidance, tax support, and Agency services.
      </p>
      <div className="bg-[#C9A84C]/40 mx-auto mt-6 w-12 h-px" />
    </motion.div>

    {/* FAQ list */}
    <div className="mx-auto px-6 sm:px-8 border border-white/8 rounded-xl max-w-3xl">
      {AGENCY_FAQS.map((item, i) => (
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
      Have a specific question?{' '}
      <a href="#contact" className="text-[#C9A84C] hover:underline underline-offset-4 transition-all">
        Submit an inquiry
      </a>
    </motion.p>
  </section>
);

export default AgencyFAQ;
