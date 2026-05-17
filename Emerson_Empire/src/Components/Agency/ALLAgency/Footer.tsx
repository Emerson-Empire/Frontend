import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Agency } from "../../../assets";

const NAV_LINKS = [
  { label: "Home",                    href: "/" },
  { label: "Services",                href: "#choose" },
  { label: "Tax and Financial Education", href: "#team" },
  { label: "About Us",                href: "#about" },
  { label: "Reviews",                 href: "#testimony" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#12022A] border-t border-[#C9A84C]/20 px-6 sm:px-10 lg:px-16 pt-16 pb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ── Col 1: Brand ── */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src={Agency} alt="The Emerson Agency logo" className="w-16 h-16 object-contain" />
            <div>
              <p className="text-white font-bold text-lg leading-tight">THE EMERSON AGENCY</p>
              <p className="text-white/50 text-xs italic">Where your financial chaos finally meets its solution.</p>
            </div>
          </div>

          <p className="text-white/60 text-sm leading-relaxed mt-4">
            THE EMERSON AGENCY LLC provides high-impact tax preparation, insurance education,
            and business operations consulting.{" "}
            <span className="text-white font-bold">WE ARE PART OF THE EMERSON EMPIRE</span>, a global
            ecosystem focused on professional excellence. We turn administrative burdens into
            structured growth for small business owners and families.
          </p>
        </div>

        {/* ── Col 2: Navigate ── */}
        <div>
          <h4 className="text-[#C9A84C] font-bold uppercase tracking-[0.2em] text-sm mb-6">
            Navigate
          </h4>
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    link.label === "Home"
                      ? "text-[#C9A84C] font-semibold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 3: Contact ── */}
        <div>
          <h4 className="text-[#C9A84C] font-bold uppercase tracking-[0.2em] text-sm mb-6">
            Contact
          </h4>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-white/70 text-sm">
              <Mail size={16} className="text-[#C9A84C] shrink-0" />
              <a href="mailto:mail@emersonempire.com" className="hover:text-white transition-colors duration-200">
                mail@emersonempire.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/70 text-sm">
              <Phone size={16} className="text-[#C9A84C] shrink-0" />
              <a href="tel:+11234567890" className="hover:text-white transition-colors duration-200">
                +1 (123) 456-7890
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/70 text-sm">
              <MapPin size={16} className="text-[#C9A84C] shrink-0" />
              <span>United States</span>
            </li>
          </ul>

          {/* Social icons */}
          <div className="flex gap-4">
            {[
              {
                label: "Facebook",
                href: "#",
                svg: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: "#",
                svg: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
              },
              {
                label: "Instagram",
                href: "#",
                svg: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                ),
              },
            ].map(({ label, href, svg }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-md border border-[#C9A84C]/30 flex items-center justify-center text-white/70 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors duration-200"
              >
                {svg}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto border-t border-[#C9A84C]/15 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>© 2026 The Emerson Empire. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white/70 transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-white/70 transition-colors duration-200">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
