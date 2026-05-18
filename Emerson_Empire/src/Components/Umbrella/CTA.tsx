import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

import EpdgBottom from '../../assets/LOG 3.webp';
import AgencyBottom from '../../assets/LOG 1.webp';

type Division = 'epdg' | 'agency' | '';

interface FormState {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  urgency: string;
  intentDescription: string;
  trackInterest: string;
  serviceInterest: string;
}

const INITIAL: FormState = {
  firstName: '',
  lastName: '',
  fullName: '',
  email: '',
  phone: '',
  message: '',
  urgency: '',
  intentDescription: '',
  trackInterest: '',
  serviceInterest: '',
};

const DIVISION_LABELS: Record<Exclude<Division, ''>, string> = {
  epdg: 'The Emerson Professional Development Group',
  agency: 'The Emerson Agency',
};

const CTA: React.FC = () => {
  const [division, setDivision] = useState<Division>('');
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const isAgency = division === 'agency';
  const canSubmit = isAgency
    ? !!(form.firstName && form.lastName && form.email && form.serviceInterest && form.urgency && form.intentDescription)
    : !!(form.fullName && form.email);

  const handleSubmit = async () => {
    if (!canSubmit) return;

    setLoading(true);
    setError('');

    try {
      await axios.post(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-consultation-email`,
        {
          firstName: form.firstName || null,
          lastName: form.lastName || null,
          fullName: form.fullName || null,
          email: form.email,
          phone: form.phone || null,
          message: form.message || null,
          serviceInterest: form.serviceInterest || null,
          urgency: form.urgency || null,
          intentDescription: form.intentDescription || null,
          trackInterest: form.trackInterest || null,
          division: division || null,
          divisionLabel: division ? DIVISION_LABELS[division] : null,
        },
        { headers: { apikey: import.meta.env.VITE_SUPABASE_ANON_KEY } }
      );

      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    'w-full border border-gray-200 rounded-md px-4 py-3 text-[#12022A] text-[13px] outline-none focus:border-[#12022A]/50 transition-colors duration-200 bg-white';
  const labelClass = 'text-[#12022A]/55 text-[12px] mb-1 block';

  return (
    <section id="contact" className="px-6 py-20 bg-white sm:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow + Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold text-[#12022A]/45 text-[24px] uppercase tracking-[4px]">
            Let's Connect
          </p>
          <h2 className="mb-4 font-bold text-[#12022A] text-[56px] uppercase tracking-tight heading">
            We Want to Talk to You
          </h2>
          <p className="text-[#12022A]/50 text-[32px] leading-[1.8]">
            Please choose your area of interest<br className="hidden sm:block" /> and fill out the form.
          </p>
        </div>

        {/* Two-column: text (left) | buttons + form (right) */}
        <div className="grid items-start grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2">

          {/* Left text — order 2 on mobile (shows below form), order 1 on desktop */}
          <div className="order-2 lg:order-1">
            {division === 'agency' ? (
              <>
                <h3 className="mb-5 font-bold text-[#12022A] text-[30px] sm:text-[56px] leading-[1.15]">
                  Get sharp financial solutions working for your business.
                </h3>
                <p className="text-[#12022A]/55 text-[24px] leading-[1.9]">
                  Stop letting administrative burdens slow your growth.{' '}
                  <strong className="font-semibold text-[#12022A]/80">
                    Reach out to learn how our tax preparation, insurance education,
                    and business consulting services can turn your financial chaos
                    into structured, lasting results.
                  </strong>
                </p>
              </>
            ) : (
              <>
                <h3 className="mb-5 font-bold text-[#12022A] text-[30px] sm:text-[56px] leading-[1.15]">
                  Take the first step toward your new career.
                </h3>
                <p className="text-[#12022A]/55 text-[24px] leading-[1.9]">
                  Stop wondering if you are ready and start proving it.{' '}
                  <strong className="font-semibold text-[#12022A]/80">
                    Send us a message to learn more about our internship tracks and
                    how we can help you build a portfolio that actually gets you hired.
                  </strong>
                </p>
              </>
            )}
          </div>

          {/* Right: division buttons + form — order 1 on mobile (shows first) */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">

            {/* Division selector buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => { setDivision('epdg'); setForm(INITIAL); setError(''); }}
                aria-pressed={division === 'epdg'}
                aria-label="Select Emerson Professional Development Group"
                className={`flex-1 flex items-center gap-3 px-4 py-4 border-2 rounded-xl text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12022A] ${
                  division === 'epdg' ? 'border-[#12022A] bg-[#12022A]/5' : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <img src={EpdgBottom} alt="EPDG" width={40} height={40} loading="lazy" decoding="async" className="object-contain w-10 h-10 shrink-0" />
                <p className="font-bold text-[#12022A] text-[11px] uppercase leading-snug tracking-[0.5px]">
                  The Emerson Professional<br />Development Group
                </p>
              </button>
              <button
                type="button"
                onClick={() => { setDivision('agency'); setForm(INITIAL); setError(''); }}
                aria-pressed={division === 'agency'}
                aria-label="Select The Emerson Agency"
                className={`flex-1 flex items-center gap-3 px-4 py-4 border-2 rounded-xl text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12022A] ${
                  division === 'agency' ? 'border-[#12022A] bg-[#12022A]/5' : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <img src={AgencyBottom} alt="Emerson Agency" width={40} height={40} loading="lazy" decoding="async" className="object-contain w-10 h-10 shrink-0" />
                <p className="font-bold text-[#12022A] text-[11px] uppercase leading-snug tracking-[0.5px]">
                  The Emerson<br />Agency
                </p>
              </button>
            </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center gap-5 py-12 text-center"
            >
              <div className="flex justify-center items-center bg-[#12022A]/8 border border-[#12022A]/15 rounded-full w-14 h-14">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#12022A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h4 className="font-bold text-[#12022A] text-[22px] heading">
                Message Received
              </h4>
              <p className="max-w-xs text-[#12022A]/50 text-[14px] leading-[1.8]">
                Thank you, {form.firstName}. We'll be in touch within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm(INITIAL);
                  setDivision('');
                }}
                className="text-[#12022A] text-[11px] hover:underline underline-offset-4 uppercase tracking-[3px]"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-4 p-6 rounded-md">

              {isAgency ? (
                /* ── Agency fields ── */
                <>
                  <div className="flex gap-3">
                    <div className="flex flex-col flex-1">
                      <label htmlFor="firstName" className={labelClass}>First Name <span aria-hidden="true">*</span></label>
                      <input id="firstName" name="firstName" placeholder="First Name"
                      autoComplete="given-name" required aria-required="true" value={form.firstName} onChange={handleChange} className={fieldClass} />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label htmlFor="lastName" className={labelClass}>Last Name <span aria-hidden="true">*</span></label>
                      <input id="lastName" name="lastName" placeholder="Last Name"
                      autoComplete="family-name" required aria-required="true" value={form.lastName} onChange={handleChange} className={fieldClass} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className={labelClass}>Email <span aria-hidden="true">*</span></label>
                    <input id="email" name="email"  type="email" placeholder="Email Address" autoComplete="email" required aria-required="true" value={form.email} onChange={handleChange} className={fieldClass} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="serviceInterest" className={labelClass}>Service Interest <span aria-hidden="true">*</span></label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      required
                      aria-required="true"
                      value={form.serviceInterest}
                      onChange={handleChange}
                      className={`${fieldClass} cursor-pointer`}
                    >
                      <option value="" disabled>What are you interested in?</option>
                      <option value="insurance">Insurance</option>
                      <option value="tax">Tax</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="urgency" className={labelClass}>Urgency <span aria-hidden="true">*</span></label>
                    <select
                      id="urgency"
                      name="urgency"
                      required
                      aria-required="true"
                      value={form.urgency}
                      onChange={handleChange}
                      className={`${fieldClass} cursor-pointer`}
                    >
                      <option value="" disabled>Select urgency level…</option>
                      <option value="immediate">Immediate — I need help now</option>
                      <option value="this_week">This week</option>
                      <option value="this_month">Within the next month</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="intentDescription" className={labelClass}>Intent Description <span aria-hidden="true">*</span></label>
                    <textarea
                      id="intentDescription"
                      name="intentDescription"
                      required
                      aria-required="true"
                      value={form.intentDescription}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Briefly describe what you need help with…"
                      className={`${fieldClass} resize-none`}
                    />
                  </div>
                </>
              ) : (
                /* ── EPDG fields ── */
                <>
                  <div className="flex flex-col">
                    <label htmlFor="fullName" className={labelClass}>Full Name <span aria-hidden="true">*</span></label>
                    <input id="fullName" name="fullName" autoComplete="name" placeholder="Full Name" required aria-required="true" value={form.fullName} onChange={handleChange} className={fieldClass} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className={labelClass}>Email Address <span aria-hidden="true">*</span></label>
                    <input id="email" name="email" type="email" autoComplete="email" placeholder="Email Address" required aria-required="true" value={form.email} onChange={handleChange} className={fieldClass} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className={labelClass}>Phone Number</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange} className={fieldClass} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="trackInterest" className={labelClass}>Track Interest <span aria-hidden="true">*</span></label>
                    <select
                      id="trackInterest"
                      name="trackInterest"
                      required
                      aria-required="true"
                      value={form.trackInterest}
                      onChange={handleChange}
                      className={`${fieldClass} cursor-pointer`}
                    >
                      <option value="" disabled>Select a track…</option>
                      <option value="web_development">Web Development</option>
                      <option value="digital_marketing">Digital Marketing</option>
                      <option value="sales">Sales</option>
                      <option value="leadership">Leadership</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="message" className={labelClass}>Description</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us a bit about yourself and your goals…"
                      className={`${fieldClass} resize-none`}
                    />
                  </div>
                </>
              )}

              {/* Error banner */}
              {error && (
                <p role="alert" className="text-[12px] text-red-600 leading-snug">
                  {error}
                </p>
              )}

              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading || !canSubmit}
                aria-disabled={loading || !canSubmit}
                className="bg-[#12022A] hover:bg-[#1E0A4A] disabled:opacity-40 mt-1 py-4 rounded-md focus-visible:outline-none focus-visible:ring-[#12022A] focus-visible:ring-2 focus-visible:ring-offset-2 w-full font-bold text-[12px] text-white uppercase tracking-[3px] transition-colors duration-200 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending…' : division === 'agency' ? 'Book a Consultation' : 'Submit'}
              </button>
            </div>
          )}
          </div>{/* end right column */}
        </div>{/* end two-column grid */}

      </div>
    </section>
  );
};

export default CTA;
