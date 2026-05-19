import React, { useState } from 'react';
import epdgLogo from '../../../assets/EPDG_LOGO.webp';

const NAV_LINKS = [
  { label: 'HOME',         href: '/' },
  { label: 'Program',      href: '#program' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Reviews',      href: '#reviews' },
  { label: 'About Us',     href: '#about-us' },
];

const EPDGNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="top-0 z-50 fixed justify-center bg-[#12022A] mb-2 border-[#C9A84C]/20 border-b w-full h-25"
   >
      {/* ── Main bar ── */}
      <div className="flex justify-between items-center mx-auto w-full max-w-7xl h-16 sm:h-20 text-center">

        {/* Logo */}
        <a href="/" className="group flex items-center gap-2 active:scale-95 transition-transform duration-200 shrink-0">
          <img
            src={epdgLogo}
            alt="EPDG — Emerson Professional Development Group"
            width={44}
            height={44}
            className="w-9 sm:w-11 h-9 sm:h-11 object-contain group-hover:scale-105 transition-transform duration-200"
          />
          <p className="group-hover:opacity-80 font-bold text-[12px] text-white sm:text-[15px] leading-tight transition-opacity duration-200">
            <span className="text-slate-300">EMERSON</span><br />PROFESSIONAL
          </p>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-7 m-0 p-0 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-[15px] font-semibold uppercase tracking-[0.15em] transition-colors duration-200 ${
                  link.label === 'HOME' ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop action buttons */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center px-4 py-2 border border-slate-600 hover:border-white rounded-md font-semibold text-[15px] text-slate-300 hover:text-white uppercase tracking-[0.15em] transition-colors duration-200"
          >
            Log In
          </a>
          <a
            href="#contact"
            className="inline-flex items-center bg-white hover:bg-slate-200 px-4 py-2 rounded-md font-bold text-[#081331] text-[15px] uppercase tracking-[0.15em] transition-colors duration-200"
          >
            Create Account
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.25 shadow-md shadow-white rounded-b-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white w-10 h-10 shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-1.75' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-1.75' : ''}`} />
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-[#12022A] px-4 pb-5 border-[#C9A84C]/15 border-t max-h-[calc(100vh-4rem)] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 border-[#C9A84C]/10 border-b font-medium text-[12px] text-white/60 hover:text-[#C9A84C] uppercase tracking-[0.2em] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex justify-center px-5 py-3 border border-slate-600 hover:border-white rounded-md font-semibold text-[12px] text-slate-300 hover:text-white uppercase tracking-[0.15em] transition-colors duration-200"
            >
              Log In
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex justify-center bg-white hover:bg-slate-200 px-5 py-3 rounded-md font-bold text-[#081331] text-[12px] uppercase tracking-[0.15em] transition-colors duration-200"
            >
              Create Account
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default EPDGNavbar;
