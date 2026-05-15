import type { FC } from "react";
import { BrandLogo } from "./Navbar";

const NAV = ["Home", "Program", "How it works", "Reviews", "About Us", "Contact"];

const Footer: FC = () => {
  return (
    <footer className="bg-[#081331] text-slate-200">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-6">
            <BrandLogo size="lg" />
            <p className="max-w-xl text-sm leading-relaxed text-slate-400">
              Stop applying, start executing. Build your global portfolio today. Your talent deserves more. Unlock global leadership opportunities today.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-white text-[#081331] text-[11px] font-semibold uppercase tracking-[0.18em] px-5 py-3 rounded-full shadow-lg shadow-black/10">
                Get My Portfolio Started
              </button>
              <button className="border border-slate-500 text-slate-200 text-[11px] font-semibold uppercase tracking-[0.18em] px-5 py-3 rounded-full hover:bg-slate-900 transition">
                Scale to Leadership
              </button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.24em] text-slate-400 mb-4">Navigation</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                {NAV.map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.24em] text-slate-400 mb-4">Contact</h4>
              <p className="text-sm text-slate-300">mail@emersonempire.com</p>
              <p className="text-sm text-slate-300 mt-2">+1 (123) 456-7890</p>
              <p className="text-sm text-slate-300 mt-2">United States</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-[11px] text-slate-500">
          <p>© 2026 The Emerson Empire. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

