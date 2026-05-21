import React, { useState } from "react";
import { A_Step1, A_Step2, A_Step3, A_Step4 } from "../../../assets";

const SERVICES = [
  {
    id: 0,
    title: "Insurance Literacy & Policy Review",
    image: A_Step1,
    description:
      "We demystify insurance so you can make confident decisions. From life and health to business liability — we review your current policies and identify gaps or overpayments.",
    points: [
      "Life & health policy review",
      "Business liability assessment",
      "Coverage gap identification",
      "Carrier comparison & recommendations",
    ],
  },
  {
    id: 1,
    title: "Tax Preparation for 1099 & Gig Workers",
    image: A_Step2,
    description:
      "Self-employment taxes are complex. We specialize in maximizing deductions for freelancers, contractors, and gig workers so you keep more of what you earn.",
    points: [
      "Schedule C preparation",
      "Quarterly estimated tax planning",
      "Home office & vehicle deductions",
      "Retirement account strategies for self-employed",
    ],
  },
  {
    id: 2,
    title: "Small Business Financial Consultant",
    image: A_Step3,
    description:
      "From startup to scaling — we provide the financial strategy and operational clarity your business needs to grow sustainably and profitably.",
    points: [
      "Business structure optimization",
      "Cash flow analysis & forecasting",
      "Operational audit & workflow design",
      "S-Corp election & payroll strategy",
    ],
  },
  {
    id: 3,
    title: "Financial Literacy Workshops for Families",
    image: A_Step4,
    description:
      "We believe financial education is a family affair. Our workshops help households build budgets, eliminate debt, and create generational wealth.",
    points: [
      "Household budgeting frameworks",
      "Debt elimination strategies",
      "Credit building & repair",
      "Generational wealth planning",
    ],
  },
];

const WhoWeHelp: React.FC = () => {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <section className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-16" id="services">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#C9A84C] text-[11px] font-bold uppercase tracking-[0.25em] mb-3">
            Our Core Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight">
            Financial Education &amp; Tax Preparation Services
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── Tab list ── */}
          <div className="lg:w-2/5 flex flex-col gap-3">
            {SERVICES.map((svc) => (
              <button
                key={svc.id}
                onClick={() => setActive(svc.id)}
                className={`text-left px-6 py-5 rounded-xl border-2 transition-all duration-200 ${
                  active === svc.id
                    ? "border-[#C9A84C] bg-[#12022A] text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                }`}
              >
                <p className={`cursor-pointer text-sm font-bold leading-snug ${active === svc.id ? "text-white" : "text-black"}`}>
                  {svc.title}
                </p>
              </button>
            ))}
          </div>

          {/* ── Detail panel ── */}
          <div className="lg:w-3/5 bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="h-56 overflow-hidden">
              <img
                key={current.id}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl sm:text-[28px] font-bold text-black mb-3">{current.title}</h3>
              <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed mb-6">{current.description}</p>

              <ul className="space-y-3 mb-8">
                {current.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-[15px] sm:text-base text-gray-700">
                    <span className="mt-0.5 w-4 h-4 shrink-0 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#C9A84C] hover:bg-[#E8C97A] text-[#12022A] text-[11px] font-bold uppercase tracking-[0.2em] px-7 py-3 rounded-sm transition-colors duration-200"
              >
                Get Started
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
