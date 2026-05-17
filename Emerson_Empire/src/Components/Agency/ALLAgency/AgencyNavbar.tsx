import React, { useState } from 'react';
import { Agency } from '../../../assets';

const NAV_LINKS = [
  { label: 'HOME',         href: '/' },
  { label: 'Services',     href: '#choose' },
  { label: 'Tax Education', href: '#team' },
  { label: 'About Us',     href: '#about' },
  { label: 'Reviews',      href: '#testimony' },
];

const AgencyNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="top-0 z-50 fixed bg-[#12022A] border-[#C9A84C]/20 border-b w-full"
    >
      {/* ── Main bar ── */}
      <div className="flex items-center justify-between w-full h-16 sm:h-20 px-4 sm:px-10 lg:px-16 mx-auto max-w-7xl">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0 group active:scale-95 transition-transform duration-200">
          <img
            src={Agency}
            alt="The Emerson Agency Logo"
            width={44}
            height={44}
            className="object-contain w-9 h-9 sm:w-11 sm:h-11 group-hover:scale-105 transition-transform duration-200"
          />
          <p className="font-bold text-[#C9A84C] text-[12px] sm:text-[16px] leading-tight group-hover:opacity-80 transition-opacity duration-200">
            THE <br /><span className="text-[#E8C97A]">EMERSON</span> AGENCY
          </p>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 m-0 p-0 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-200 ${
                  link.label === 'HOME' ? 'text-[#C9A84C]' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-[#C9A84C] hover:bg-[#E8C97A] px-5 py-2 rounded-sm font-bold text-[#12022A] text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 shrink-0"
        >
          Contact Us
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-[#12022A] border-t border-[#C9A84C]/15 px-4 pb-5 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 border-b border-[#C9A84C]/10 font-medium text-[12px] text-white/60 hover:text-[#C9A84C] uppercase tracking-[0.2em] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex justify-center bg-[#C9A84C] hover:bg-[#E8C97A] px-5 py-3 rounded-sm font-bold text-[#12022A] text-[12px] uppercase tracking-[0.2em] transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default AgencyNavbar;
