import React, { useState } from "react";

const SERVICE_TAGS = [
  "Financial Services",
  "Operational Audits",
  "Tax Preparation",
  "More Services +",
];

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    urgency: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-gray-100 py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-3">
            Let's Connect
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-black uppercase leading-tight">
            We Want To Talk To You
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">
            Send Us A Message!
          </p>
        </div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-black uppercase leading-tight text-black mb-6">
              Take The First Step Towards Financial Clarity
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-md">
              Whether you need help with taxes, business consulting, or just figuring out
              where to start, we are here to help you get organized and move forward with
              confidence.
            </p>

            {/* Service tags */}
            <div className="grid grid-cols-2 gap-3">
              {SERVICE_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="border border-black/30 rounded-sm px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-black text-center"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name:"
              value={form.firstName}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#C9A84C] transition-colors"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name:"
              value={form.lastName}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#C9A84C] transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email:"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#C9A84C] transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number:"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#C9A84C] transition-colors"
            />
            <input
              type="text"
              name="urgency"
              placeholder="Urgency:"
              value={form.urgency}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#C9A84C] transition-colors"
            />
            <input
              type="text"
              name="service"
              placeholder="Service Needed"
              value={form.service}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#C9A84C] transition-colors"
            />
            <textarea
              name="message"
              placeholder="More information or description:"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#C9A84C] transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-black hover:bg-[#12022A] text-white font-semibold text-sm uppercase tracking-[0.15em] px-8 py-4 rounded-lg transition-colors duration-200 w-full sm:w-auto self-start"
            >
              Request a Consultation
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
