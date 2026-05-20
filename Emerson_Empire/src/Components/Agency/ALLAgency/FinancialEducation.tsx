import React, { useState } from "react";
import { EmersonAgency } from "../../../assets";

type FilingStatus = "single" | "married_joint" | "married_separate" | "head_of_household";

const STANDARD_DEDUCTIONS: Record<FilingStatus, number> = {
  single: 14600,
  married_joint: 29200,
  married_separate: 14600,
  head_of_household: 21900,
};

const FILING_OPTIONS: { value: FilingStatus; label: string }[] = [
  { value: "single", label: "Single" },
  { value: "married_joint", label: "Married Filing Jointly" },
  { value: "married_separate", label: "Married Filing Separately" },
  { value: "head_of_household", label: "Head of Household" },
];

function calcTax(taxable: number): number {
  if (taxable <= 0) return 0;
  const brackets: [number, number][] = [
    [11600, 0.1],
    [35550, 0.12],
    [53375, 0.22],
    [91425, 0.24],
    [Infinity, 0.32],
  ];
  let tax = 0;
  let remaining = taxable;
  for (const [size, rate] of brackets) {
    const chunk = Math.min(remaining, size);
    tax += chunk * rate;
    remaining -= chunk;
    if (remaining <= 0) break;
  }
  return tax;
}

function estimateSavings(income1099: number): number {
  const deductionRate = 0.28;
  const taxRate = 0.22;
  return income1099 * deductionRate * taxRate;
}

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const STEPS = ["Filing Status", "Income", "Sources", "Your Results"];

const FinancialEducation: React.FC = () => {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<FilingStatus>("single");
  const [w2, setW2] = useState("");
  const [income1099, setIncome1099] = useState("");
  const [business, setBusiness] = useState("");

  const totalIncome =
    (parseFloat(w2) || 0) + (parseFloat(income1099) || 0) + (parseFloat(business) || 0);
  const stdDeduction = STANDARD_DEDUCTIONS[status];
  const taxableIncome = Math.max(0, totalIncome - stdDeduction);
  const estimatedTax = calcTax(taxableIncome);
  const seTax = (parseFloat(income1099) || 0) * 0.9235 * 0.153;
  const totalOwed = estimatedTax + seTax;
  const savings = estimateSavings(parseFloat(income1099) || 0) + (parseFloat(business) || 0) * 0.12;

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <section className="bg-white py-0 overflow-hidden" id="tax-education">
      <div className="flex flex-col lg:flex-row min-h-[620px]">

        {/* ── Left panel ── */}
        <div className="bg-[#12022A] lg:w-2/5 flex flex-col justify-between p-10 lg:p-14">
          <div>
            <span className="inline-block px-4 py-1 mb-6 rounded-full border border-[#C9A84C]/40 text-[#C9A84C] text-[11px] font-bold uppercase tracking-[0.2em]">
              Financial Education
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              Understanding Your<br />
              <span className="text-[#C9A84C]">Finances Starts Here</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Whether you're a W-2 employee, a 1099 worker, or a small business owner —
              this calculator helps you understand your tax position and discover how much
              The Emerson Agency can save you.
            </p>
          </div>

          <div className="mt-10 rounded-xl overflow-hidden">
            <img
              src={EmersonAgency}
              alt="Financial consultation"
              className="w-full h-52 object-cover opacity-80"
            />
          </div>
        </div>

        {/* ── Right panel: Calculator ── */}
        <div className="lg:w-3/5 flex flex-col bg-gray-50 p-10 lg:p-14">

          {/* Progress */}
          <div className="flex items-center gap-2 mb-10">
            {STEPS.map((label, i) => (
              <React.Fragment key={label}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                      i <= step
                        ? "bg-[#C9A84C] text-[#12022A]"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span className={`text-[10px] mt-1 font-medium ${i <= step ? "text-[#C9A84C]" : "text-gray-400"}`}>
                    {label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`flex-1 h-px mb-4 transition-colors duration-300 ${i < step ? "bg-[#C9A84C]" : "bg-gray-200"}`} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step 0 — Filing Status */}
          {step === 0 && (
            <div className="flex-1">
              <h3 className="text-xl font-bold text-black mb-2">Filing Status</h3>
              <p className="text-gray-500 text-sm mb-6">Select your current tax filing status.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FILING_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setStatus(opt.value)}
                    className={`border-2 rounded-xl px-5 py-4 text-sm font-semibold text-left transition-all duration-200 ${
                      status === opt.value
                        ? "border-[#C9A84C] bg-[#C9A84C]/10 text-[#12022A]"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1 — W-2 & 1099 Income */}
          {step === 1 && (
            <div className="flex-1">
              <h3 className="text-xl font-bold text-black mb-2">Income & Sources</h3>
              <p className="text-gray-500 text-sm mb-6">Enter your estimated annual income from each source.</p>
              <div className="space-y-4">
                {[
                  { label: "W-2 Annual Income", placeholder: "e.g. 55000", value: w2, set: setW2 },
                  { label: "1099 / Freelance Income", placeholder: "e.g. 20000", value: income1099, set: setIncome1099 },
                  { label: "Business Income", placeholder: "e.g. 0", value: business, set: setBusiness },
                ].map(({ label, placeholder, value, set }) => (
                  <div key={label}>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
                      {label}
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                      <input
                        type="number"
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => set(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-xl pl-8 pr-4 py-3 text-sm outline-none focus:border-[#C9A84C] transition-colors"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 — Confirm */}
          {step === 2 && (
            <div className="flex-1">
              <h3 className="text-xl font-bold text-black mb-2">Review Your Information</h3>
              <p className="text-gray-500 text-sm mb-6">Confirm your details before we calculate your estimate.</p>
              <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
                {[
                  { label: "Filing Status", value: FILING_OPTIONS.find((o) => o.value === status)?.label },
                  { label: "W-2 Income", value: fmt(parseFloat(w2) || 0) },
                  { label: "1099 Income", value: fmt(parseFloat(income1099) || 0) },
                  { label: "Business Income", value: fmt(parseFloat(business) || 0) },
                  { label: "Total Income", value: fmt(totalIncome) },
                  { label: "Standard Deduction", value: fmt(stdDeduction) },
                  { label: "Taxable Income", value: fmt(taxableIncome) },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center px-5 py-3 text-sm">
                    <span className="text-gray-500">{label}</span>
                    <span className="font-semibold text-black">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 — Results */}
          {step === 3 && (
            <div className="flex-1">
              <h3 className="text-xl font-bold text-black mb-1">Your Estimated Financial Tax Summary</h3>
              <p className="text-gray-500 text-sm mb-6">Based on your inputs. Consult a tax professional for exact figures.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-[#12022A] rounded-xl p-5 text-center">
                  <p className="text-[#C9A84C] text-[11px] font-bold uppercase tracking-widest mb-2">Est. Tax Owed</p>
                  <p className="text-white text-2xl font-black">{fmt(totalOwed)}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                  <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-2">Taxable Income</p>
                  <p className="text-black text-2xl font-black">{fmt(taxableIncome)}</p>
                </div>
                <div className="bg-[#C9A84C] rounded-xl p-5 text-center">
                  <p className="text-[#12022A] text-[11px] font-black uppercase tracking-widest mb-2">Potential Savings</p>
                  <p className="text-[#12022A] text-2xl font-black">{fmt(savings)}</p>
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-6">
                Most TEA clients in your situation uncover an average of{" "}
                <strong className="text-black">{fmt(savings)}</strong> in additional deductions they weren't taking.
                Book a free consultation to see your full picture.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#12022A] hover:bg-[#1e0440] text-white text-[11px] font-bold uppercase tracking-[0.2em] px-8 py-3 rounded-sm transition-colors duration-200"
              >
                Book Your Free Consultation
              </a>
            </div>
          )}

          {/* Nav buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={back}
              disabled={step === 0}
              className="px-6 py-2 text-sm font-semibold text-gray-500 hover:text-black disabled:opacity-30 transition-colors"
            >
              ← Back
            </button>
            {step < 3 && (
              <button
                onClick={next}
                className="bg-[#C9A84C] hover:bg-[#E8C97A] text-[#12022A] font-bold text-[11px] uppercase tracking-[0.2em] px-8 py-3 rounded-sm transition-colors duration-200"
              >
                {step === 2 ? "Calculate →" : "Next →"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialEducation;
