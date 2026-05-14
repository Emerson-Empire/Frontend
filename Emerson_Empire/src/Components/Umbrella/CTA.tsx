import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Division = 'Agency' | 'EPDG' | '';

interface FormState {
  name: string;
  email: string;
  phone: string;
  division: Division;
  message: string;
}

const INITIAL: FormState = {
  name: '',
  email: '',
  phone: '',
  division: '',
  message: '',
};

const CTA: React.FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.division) return;
    setLoading(true);
    // Replace with your real API call e.g. axios.post('/api/contact', form)
    await new Promise(res => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 focus:border-[#C9A84C]/60 focus:bg-white/8 rounded-sm px-4 py-3 text-[#F5F0E8] text-[13px] placeholder-purple-400/50 outline-none transition-all duration-200 body';

  return (
    <section id="contact" className="relative bg-[#4B1E91] overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(201,168,76,0.05) 0, rgba(201,168,76,0.05) 1px, transparent 1px, transparent 72px),
            repeating-linear-gradient(0deg, rgba(201,168,76,0.05) 0, rgba(201,168,76,0.05) 1px, transparent 1px, transparent 72px)
          `,
        }}
      />

      {/* Top glow */}
      <div
        className="top-0 left-1/2 absolute -translate-x-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(201,168,76,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="z-10 relative px-6 sm:px-10 lg:px-16 py-24">

        {/* ── Top headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="block bg-[#C9A84C] opacity-50 w-8 h-px" />
            <p className="font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[4px]">
              Take the Next Step
            </p>
            <span className="block bg-[#C9A84C] opacity-50 w-8 h-px" />
          </div>

          <h2 className="mb-5 text-[#F5F0E8] text-[38px] sm:text-[52px] leading-[1.1] tracking-wide heading">
            Ready to Connect With{' '}
            <em className="text-[#E8C97A] italic">The Emerson Empire?</em>
          </h2>

          <p className="mx-auto max-w-xl text-[15px] text-purple-200/80 sm:text-[16px] leading-[1.9] body">
            Whether you are interested in business services, professional development,
            internship opportunities, or collaboration, we welcome your inquiry and
            will help direct you to the right next step.
          </p>

          <div className="bg-[#C9A84C]/40 mx-auto mt-7 w-12 h-px" />
        </motion.div>

        {/* ── Two column layout ── */}
        <div className="items-start gap-12 lg:gap-20 grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-5xl">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-3 font-semibold text-[#F5F0E8] text-[26px] leading-snug tracking-wide heading">
              Get in Touch
            </h3>
            <p className="mb-10 text-[14px] text-purple-300/80 leading-[1.9] body">
              Not sure which division is right for you? Just reach out, and we will
              point you in the right direction.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              {[
                {
                  label: 'Email',
                  value: 'admin@theemersonempire.info',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                },
                {
                  label: 'Phone',
                  value: 'Available by appointment',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.27-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                },
                {
                  label: 'Office',
                  value: 'Remote-first operations',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="flex justify-center items-center rounded-sm w-9 h-9"
                    style={{ background: '#C9A84C15', color: '#C9A84C', border: '1px solid #C9A84C25' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="mb-0.5 font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[3px]">
                      {item.label}
                    </p>
                    <p className="text-[#F5F0E8]/80 text-[14px] body">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="bg-white/8 my-10 w-full h-px" />

            {/* Quick links */}
            <div className="flex flex-col gap-3">
              <p className="mb-1 font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[3px]">
                Jump straight in
              </p>
              <a
                href="/agency"
                className="inline-flex items-center gap-2 hover:gap-3 text-[#F5F0E8]/70 text-[13px] hover:text-[#C9A84C] uppercase tracking-[2.5px] transition-all duration-200 body"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Contact The Emerson Agency
              </a>
              <a
                href="/epdg"
                className="inline-flex items-center gap-2 hover:gap-3 text-[#F5F0E8]/70 text-[13px] hover:text-[#9B7FD4] uppercase tracking-[2.5px] transition-all duration-200 body"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Explore Professional Development
              </a>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#12022A]/60 backdrop-blur-sm p-7 sm:p-9 border border-white/10 rounded-xl"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col justify-center items-center gap-5 py-10 text-center"
              >
                <div
                  className="flex justify-center items-center rounded-sm w-14 h-14"
                  style={{ background: '#C9A84C18', border: '1px solid #C9A84C35' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#F5F0E8] text-[22px] tracking-wide heading">
                  Message Received
                </h4>
                <p className="max-w-xs text-[14px] text-purple-300/80 leading-[1.8] body">
                  Thank you, {form.name.split(' ')[0]}. One of our team will be in
                  touch within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(INITIAL); }}
                  className="mt-2 text-[#C9A84C] text-[11px] hover:underline underline-offset-4 uppercase tracking-[3px] transition-all body"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-5">
                <h3 className="mb-1 font-semibold text-[#F5F0E8] text-[18px] tracking-wide heading">
                  Send us a message
                </h3>

                {/* Name + Email */}
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[3px]">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[3px]">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Phone + Division */}
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[3px]">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (000) 000-0000"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="division" className="font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[3px]">
                      Division <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="division"
                      name="division"
                      value={form.division}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" disabled>Select one…</option>
                      <option value="Agency">Agency — Insurance & Tax</option>
                      <option value="EPDG">EPDG — Development Programme</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[3px]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us a bit about what you need…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={loading || !form.name || !form.email || !form.division}
                  className="flex justify-center items-center gap-2 disabled:opacity-40 py-3.5 rounded-sm w-full font-semibold text-[12px] uppercase tracking-[3px] transition-all duration-200 disabled:cursor-not-allowed body"
                  style={{
                    background: '#C9A84C',
                    color: '#12022A',
                  }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                <p className="text-[11px] text-purple-400/50 text-center tracking-wide body">
                  We respond within 24 hours. No spam, ever.
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Bottom stats */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-[11px] text-purple-300/40 text-center tracking-wide body"
        >
          Founder-led &nbsp;·&nbsp; Intern-built &nbsp;·&nbsp; Developing a global professional ecosystem
        </motion.p>
      </div>
    </section>
  );
};

export default CTA;
