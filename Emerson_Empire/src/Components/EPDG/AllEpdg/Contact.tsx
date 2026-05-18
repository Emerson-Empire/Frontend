import { useState } from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import axios from "axios";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  trackInterest: string;
  message: string;
}

const INITIAL: FormState = {
  fullName: "",
  email: "",
  phone: "",
  trackInterest: "",
  message: "",
};

const Contact: FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const canSubmit = !!(form.fullName && form.email);

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setLoading(true);
    setError("");
    try {
      await axios.post(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-consultation-email`,
        {
          fullName: form.fullName,
          email: form.email,
          phone: form.phone || null,
          trackInterest: form.trackInterest || null,
          message: form.message || null,
          division: "epdg",
          divisionLabel: "The Emerson Professional Development Group",
        },
        { headers: { apikey: import.meta.env.VITE_SUPABASE_ANON_KEY } }
      );
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "w-full border border-gray-200 rounded-md px-4 py-3 text-[#12022A] text-base outline-none focus:border-[#12022A]/50 transition-colors duration-200 bg-white";
  const labelClass = "text-[#12022A]/55 text-[13px] mb-1 block";

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
            Fill out the form and we'll be in touch<br className="hidden sm:block" /> within 24 hours.
          </p>
        </div>

        <div className="grid items-start grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2">

          {/* Left text */}
          <div className="order-2 lg:order-1">
            <h3 className="mb-5 font-bold text-[#12022A] text-[30px] sm:text-[56px] leading-[1.15]">
              Take the first step toward your new career.
            </h3>
            <p className="text-[#12022A]/55 text-[24px] leading-[1.9]">
              Stop wondering if you are ready and start proving it.{" "}
              <strong className="font-semibold text-[#12022A]/80">
                Send us a message to learn more about our internship tracks and
                how we can help you build a portfolio that actually gets you hired.
              </strong>
            </p>
          </div>

          {/* Right: form */}
          <div className="order-1 lg:order-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-5 py-12 text-center"
              >
                <div className="flex justify-center items-center bg-[#12022A]/8 border border-[#12022A]/15 rounded-full w-14 h-14">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#12022A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#12022A] text-[22px] heading">Message Received</h4>
                <p className="max-w-xs text-[#12022A]/50 text-[14px] leading-[1.8]">
                  Thank you, {form.fullName.split(" ")[0]}. We'll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(INITIAL); }}
                  className="text-[#12022A] text-[11px] hover:underline underline-offset-4 uppercase tracking-[3px]"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-4 p-6 rounded-md">
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
                  <select id="trackInterest" name="trackInterest" required aria-required="true" value={form.trackInterest} onChange={handleChange} className={`${fieldClass} cursor-pointer`}>
                    <option value="" disabled>Select a track…</option>
                    <option value="web_development">Web Development</option>
                    <option value="digital_marketing">Digital Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="leadership">Leadership</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className={labelClass}>Description</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us a bit about yourself and your goals…" className={`${fieldClass} resize-none`} />
                </div>

                {error && (
                  <p role="alert" className="text-[12px] text-red-600 leading-snug">{error}</p>
                )}

                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={loading || !canSubmit}
                  aria-disabled={loading || !canSubmit}
                  className="bg-[#12022A] hover:bg-[#1E0A4A] disabled:opacity-40 mt-1 py-4 rounded-md focus-visible:outline-none focus-visible:ring-[#12022A] focus-visible:ring-2 focus-visible:ring-offset-2 w-full font-bold text-[12px] text-white uppercase tracking-[3px] transition-colors duration-200 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Submit"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
