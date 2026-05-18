import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  serviceInterest: string;
  urgency: string;
  intentDescription: string;
}

const INITIAL: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  serviceInterest: "",
  urgency: "",
  intentDescription: "",
};

const Contact: React.FC = () => {
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

  const canSubmit = !!(
    form.firstName && form.lastName && form.email &&
    form.serviceInterest && form.urgency && form.intentDescription
  );

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setLoading(true);
    setError("");
    try {
      await axios.post(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-consultation-email`,
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          serviceInterest: form.serviceInterest,
          urgency: form.urgency,
          intentDescription: form.intentDescription,
          division: "agency",
          divisionLabel: "The Emerson Agency",
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
            Please fill out the form and we'll<br className="hidden sm:block" /> get back to you shortly.
          </p>
        </div>

        <div className="grid items-start grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2">

          {/* Left text */}
          <div className="order-2 lg:order-1">
            <h3 className="mb-5 font-bold text-[#12022A] text-[30px] sm:text-[56px] leading-[1.15]">
              Get sharp financial solutions working for your business.
            </h3>
            <p className="text-[#12022A]/55 text-[24px] leading-[1.9]">
              Stop letting administrative burdens slow your growth.{" "}
              <strong className="font-semibold text-[#12022A]/80">
                Reach out to learn how our tax preparation, insurance education,
                and business consulting services can turn your financial chaos
                into structured, lasting results.
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
                  Thank you, {form.firstName}. We'll be in touch within 24 hours.
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
                <div className="flex gap-3">
                  <div className="flex flex-col flex-1">
                    <label htmlFor="firstName" className={labelClass}>First Name <span aria-hidden="true">*</span></label>
                    <input id="firstName" name="firstName" placeholder="First Name" autoComplete="given-name" required aria-required="true" value={form.firstName} onChange={handleChange} className={fieldClass} />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label htmlFor="lastName" className={labelClass}>Last Name <span aria-hidden="true">*</span></label>
                    <input id="lastName" name="lastName" placeholder="Last Name" autoComplete="family-name" required aria-required="true" value={form.lastName} onChange={handleChange} className={fieldClass} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className={labelClass}>Email <span aria-hidden="true">*</span></label>
                  <input id="email" name="email" type="email" placeholder="Email Address" autoComplete="email" required aria-required="true" value={form.email} onChange={handleChange} className={fieldClass} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="serviceInterest" className={labelClass}>Service Interest <span aria-hidden="true">*</span></label>
                  <select id="serviceInterest" name="serviceInterest" required aria-required="true" value={form.serviceInterest} onChange={handleChange} className={`${fieldClass} cursor-pointer`}>
                    <option value="" disabled>What are you interested in?</option>
                    <option value="insurance">Insurance</option>
                    <option value="tax">Tax</option>
                    <option value="both">Both</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="urgency" className={labelClass}>Urgency <span aria-hidden="true">*</span></label>
                  <select id="urgency" name="urgency" required aria-required="true" value={form.urgency} onChange={handleChange} className={`${fieldClass} cursor-pointer`}>
                    <option value="" disabled>Select urgency level…</option>
                    <option value="immediate">Immediate — I need help now</option>
                    <option value="this_week">This week</option>
                    <option value="this_month">Within the next month</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="intentDescription" className={labelClass}>Intent Description <span aria-hidden="true">*</span></label>
                  <textarea id="intentDescription" name="intentDescription" required aria-required="true" value={form.intentDescription} onChange={handleChange} rows={4} placeholder="Briefly describe what you need help with…" className={`${fieldClass} resize-none`} />
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
                  {loading ? "Sending…" : "Book a Consultation"}
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
