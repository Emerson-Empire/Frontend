import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  division: 'Agency' | 'EPDG' | 'General';
}

const FAQS: FAQItem[] = [
  {
    division: 'General',
    question: 'What exactly is Emerson Empire?',
    answer:
      "Emerson Empire is a dual-division company. The Agency division provides professional insurance and tax filing services for individuals and businesses. EPDG — our Entrepreneurial and Professional Development Group — runs internship placements and training programmes for people looking to grow their careers or launch businesses.",
  },
  {
    division: 'Agency',
    question: 'What types of insurance do you offer?',
    answer:
      "We offer a full range of personal and commercial insurance products including life insurance, health insurance, auto insurance, home and property insurance, business liability, and workers compensation. Our advisors assess your specific situation and recommend the most appropriate coverage at the best available rates.",
  },
  {
    division: 'Agency',
    question: 'Can you help if I have not filed taxes in multiple years?',
    answer:
      "Absolutely — this is one of the most common situations we handle. We help clients file back taxes, negotiate penalty relief where applicable, and set up a clean system going forward. There is no judgement here; our job is to get you compliant and keep you that way.",
  },
  {
    division: 'Agency',
    question: 'Do you handle business tax filing as well as personal?',
    answer:
      "Yes. We manage both individual and corporate tax filing, including for sole traders, LLCs, partnerships, and incorporated businesses. We also offer ongoing bookkeeping and quarterly financial reporting for businesses that want full year-round support.",
  },
  {
    division: 'EPDG',
    question: 'Who can apply to the EPDG internship programme?',
    answer:
      "We welcome applications from students, recent graduates, and career-changers at any stage. There is no strict academic requirement — we look for drive, curiosity, and a genuine desire to learn. If you are willing to work hard and grow, we want to hear from you.",
  },
  {
    division: 'EPDG',
    question: 'Is the internship paid or unpaid?',
    answer:
      "Our internship structure varies by placement. Some positions are stipend-based and others are unpaid but carry significant value through mentorship, certification, and direct employer introductions at completion. All details are clearly outlined before you commit to a track.",
  },
  {
    division: 'EPDG',
    question: 'How long does the programme take?',
    answer:
      "The Internship Track runs for three months. The Leadership and Entrepreneurship Track is a six-month programme. Both are structured around your existing schedule — we work with you whether you are studying full-time, working, or in transition.",
  },
  {
    division: 'General',
    question: 'How do I get started?',
    answer:
      "Simply book a free consultation through our website. For Agency enquiries, one of our insurance or tax advisors will reach out within 24 hours. For EPDG, you will be directed to our programme application form. Either way, you will have a real conversation with a real person — no automated funnels.",
  },
];

const DIVISIONS = ['All', 'Agency', 'EPDG', 'General'] as const;
type Filter = (typeof DIVISIONS)[number];

const FAQRow: React.FC<{ item: FAQItem; index: number }> = ({ item, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="border-white/8 last:border-0 border-b"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="group flex justify-between items-start gap-6 py-5 w-full text-left"
      >
        <div className="flex items-start gap-3">
          <span
            className="mt-0.5 px-2 py-0.5 rounded-sm font-semibold text-[9px] uppercase tracking-[2px]"
            style={{
              background: item.division === 'Agency' ? '#C9A84C15' : item.division === 'EPDG' ? '#9B7FD415' : '#ffffff10',
              color: item.division === 'Agency' ? '#C9A84C' : item.division === 'EPDG' ? '#9B7FD4' : '#888',
            }}
          >
            {item.division}
          </span>
          <span className="font-medium text-[#F5F0E8] text-[15px] group-hover:text-[#C9A84C] leading-snug transition-colors duration-200 heading">
            {item.question}
          </span>
        </div>

        <span
          className="flex justify-center items-center mt-0.5 border rounded-sm w-7 h-7 transition-all duration-300"
          style={{
            borderColor: open ? '#C9A84C50' : 'rgba(255,255,255,0.1)',
            color: open ? '#C9A84C' : '#9B7FD4',
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
            <p className="pr-8 pb-6 pl-16 text-[14px] text-purple-300/80 leading-[1.9] body">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('All');

  const visible = filter === 'All' ? FAQS : FAQS.filter((f) => f.division === filter);

  return (
    <section  id="faq"  className="bg-[#12022A] px-6 sm:px-10 lg:px-16 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <p className="mb-4 font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[4px]">
          FAQ
        </p>
        <h2 className="mb-4 text-[#F5F0E8] text-[36px] sm:text-[44px] leading-[1.1] tracking-wide heading">
          Common Questions
        </h2>
        <p className="mx-auto max-w-lg text-[15px] text-purple-300 leading-[1.8] body">
          Everything you need to know before taking the next step with Emerson Empire.
        </p>
        <div className="bg-[#C9A84C]/40 mx-auto mt-6 w-12 h-px" />
      </motion.div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {DIVISIONS.map((d) => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className="px-4 py-1.5 rounded-sm font-semibold text-[11px] uppercase tracking-[2.5px] transition-all duration-200 body"
            style={{
              background: filter === d ? '#C9A84C' : 'rgba(255,255,255,0.04)',
              color: filter === d ? '#12022A' : '#9B7FD4',
              border: `1px solid ${filter === d ? '#C9A84C' : 'rgba(255,255,255,0.08)'}`,
            }}
          >
            {d}
          </button>
        ))}
      </div>

      {/* FAQ list */}
      <div className="mx-auto px-6 sm:px-8 border border-white/8 rounded-xl max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {visible.map((item, i) => (
              <FAQRow key={item.question} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Still have questions */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-10 text-[13px] text-purple-400 text-center body"
      >
        Still have questions?{' '}
        <a href="/contact" className="text-[#C9A84C] hover:underline underline-offset-4 transition-all">
          Reach out to us directly
        </a>
      </motion.p>
    </section>
  );
};

export default FAQ;
