import React from "react";
import { Vincent, Malik, Matheous } from "../../../assets";

const REVIEWS = [
  {
    name: "Marcus T.",
    title: "Creative Agency Owner",
    photo: Vincent,
    quote:
      "I was drowning in manual tasks and messy intake forms. The Emerson Agency performed an operational audit that literally gave me back 10 hours a week. They didn't just fix my business; they gave me a system to scale.",
    dark: false,
  },
  {
    name: "Sarah J.",
    title: "Independent Consultant",
    photo: Malik,
    quote:
      "As a 1099 worker, tax season used to be a nightmare of lost receipts and anxiety. TEA cleaned up my bookkeeping and found deductions I never knew existed. I finally feel in control of my money.",
    dark: true,
  },
  {
    name: "Diane R.",
    title: "Small Business Owner",
    photo: Matheous,
    quote:
      "What I love about this team is the atmosphere. Beyond the incredible financial education and support, it's warm and life-changing.",
    dark: false,
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
      </svg>
    ))}
  </div>
);

const Reviews: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-16 overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Success Stories From The Empire
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Real Results for Growing<br />Businesses &amp; Founders
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className={`rounded-2xl p-8 flex flex-col gap-6 ${
                r.dark
                  ? "bg-[#2a2a2a] text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              {/* Person + rating */}
              <div className="flex items-center gap-4">
                <img
                  src={r.photo}
                  alt={r.name}
                  className="w-14 h-14 rounded-full object-cover shrink-0"
                />
                <div className="flex-1">
                  <p className={`font-bold text-sm ${r.dark ? "text-white" : "text-black"}`}>
                    {r.name}
                  </p>
                  <p className={`text-xs ${r.dark ? "text-white/60" : "text-gray-500"}`}>
                    {r.title}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${r.dark ? "text-white/70" : "text-black"}`}>
                    Rate
                  </p>
                  <Stars />
                </div>
              </div>

              {/* Quote */}
              <p className={`text-sm leading-relaxed italic ${r.dark ? "text-white/80" : "text-gray-700"}`}>
                "{r.quote}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
