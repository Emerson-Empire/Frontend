import React, { useState } from 'react';
import { motion } from 'framer-motion';
 
 import EpdgBottom from '../../assets/LOG 3.webp';
import AgencyBottom from '../../assets/LOG 1.webp'; 

type Division = 'epdg' | 'agency' | '';

interface FormState {
  firstName: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL: FormState = { firstName: '', email: '', phone: '', message: '' };

const CTA: React.FC = () => {
  const [division, setDivision] = useState<Division>('');
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.firstName || !form.email) return;
    setLoading(true);
    await new Promise(res => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const fieldClass =
    'w-full border border-gray-200 rounded-md px-4 py-3 text-[#12022A] text-[13px] outline-none focus:border-[#12022A]/50 transition-colors duration-200 bg-white';
  const labelClass = 'text-[#12022A]/55 text-[12px] mb-1 block';

  return (
    <section id="contact" className="bg-white px-6 sm:px-10 lg:px-16 py-20">
      <div className="mx-auto max-w-5xl">

        {/* Eyebrow + Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold text-[#12022A]/45 text-[10px] uppercase tracking-[4px]">
            Let's Connect
          </p>
          <h2 className="mb-4 font-bold text-[#12022A] text-[30px] sm:text-[42px] uppercase tracking-tight heading">
            We Want to Talk to You
          </h2>
          <p className="text-[#12022A]/50 text-[14px] leading-[1.8]">
            Please choose your area of interest<br className="hidden sm:block" /> and fill out the form.
          </p>
        </div>

        {/* Division selector */}
        <div className="flex sm:flex-row flex-col gap-4 mb-14">
          {/* EPDG */}
          <button
            type="button"
            onClick={() => setDivision('epdg')}
            aria-pressed={division === 'epdg'}
            aria-label="Select Emerson Professional Development Group"
            className={`flex-1 flex items-center gap-4 px-5 py-4 border-2 rounded-xl text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12022A] ${
              division === 'epdg'
                ? 'border-[#12022A] bg-[#12022A]/5'
                : 'border-gray-200 hover:border-gray-400'
            }`}
          >
             
              <img src={EpdgBottom } alt="EPDG" width={48} height={48} loading="lazy" decoding="async" className="w-12 h-12 object-contain shrink-0" />
            
            <p className="font-bold text-[#12022A] text-[11px] uppercase leading-snug tracking-[0.5px]">
              The Emerson Professional<br />Development Group
            </p>
          </button>

          {/* Agency */}
          <button
            type="button"
            onClick={() => setDivision('agency')}
            aria-pressed={division === 'agency'}
            aria-label="Select The Emerson Agency"
            className={`flex-1 flex items-center gap-4 px-5 py-4 border-2 rounded-xl text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12022A] ${
              division === 'agency'
                ? 'border-[#12022A] bg-[#12022A]/5'
                : 'border-gray-200 hover:border-gray-400'
            }`}
          >
            <img src={AgencyBottom } alt="Emerson Agency" width={48} height={48} loading="lazy" decoding="async" className="w-12 h-12 object-contain shrink-0" />
            <p className="font-bold text-[#12022A] text-[11px] uppercase leading-snug tracking-[0.5px]">
              The Emerson<br />Agency
            </p>
          </button>
        </div>

        {/* Two-column: text | form */}
        <div className="items-start gap-12 lg:gap-20 grid grid-cols-1 lg:grid-cols-2">

          {/* Left text */}
          <div>
            <h3 className="mb-5 font-bold text-[#12022A] text-[30px] sm:text-[36px] leading-[1.15] heading">
              Take the first step toward your new career.
            </h3>
            <p className="text-[#12022A]/55 text-[14px] leading-[1.9]">
              Stop wondering if you are ready and start proving it.{' '}
              <strong className="font-semibold text-[#12022A]/80">
                Send us a message to learn more about our internship tracks and how we can help you build a portfolio that actually gets you hired.
              </strong>
            </p>
          </div>

          {/* Right: form */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col justify-center items-center gap-5 py-12 text-center"
            >
              <div className="flex justify-center items-center bg-[#12022A]/8 border border-[#12022A]/15 rounded-full w-14 h-14">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#12022A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h4 className="font-bold text-[#12022A] text-[22px] heading">Message Received</h4>
              <p className="max-w-xs text-[#12022A]/50 text-[14px] leading-[1.8]">
                Thank you, {form.firstName}. We'll be in touch within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm(INITIAL); setDivision(''); }}
                className="text-[#12022A] text-[11px] hover:underline underline-offset-4 uppercase tracking-[3px]"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="firstName" className={labelClass}>First Name: <span aria-hidden="true">*</span></label>
                <input id="firstName" name="firstName" autoComplete="given-name" required aria-required="true" value={form.firstName} onChange={handleChange} className={fieldClass} />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className={labelClass}>Email: <span aria-hidden="true">*</span></label>
                <input id="email" name="email" type="email" autoComplete="email" required aria-required="true" value={form.email} onChange={handleChange} className={fieldClass} />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className={labelClass}>Phone Number:</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange} className={fieldClass} />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className={labelClass}>Send us a message:</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} className={`${fieldClass} resize-none`} />
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading || !form.firstName || !form.email}
                aria-disabled={loading || !form.firstName || !form.email}
                className="bg-[#12022A] hover:bg-[#1E0A4A] disabled:opacity-40 mt-1 py-4 rounded-md focus-visible:outline-none focus-visible:ring-[#12022A] focus-visible:ring-2 focus-visible:ring-offset-2 w-full font-bold text-[12px] text-white uppercase tracking-[3px] transition-colors duration-200 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending…' : 'Apply Now'}
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default CTA;
