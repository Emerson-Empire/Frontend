import React, { useState } from 'react';
import { Emason, EmasonWebp, EmasonAvif } from '../../assets';

const NAV_LINKS = [
  { label: 'HOME',     href: '/' },
  { label: 'Your Path', href: '#choose' },
  { label: 'Our Team', href: '#team' },
  { label: 'About Us', href: '#about' },
  { label: 'Reviews',  href: '#testimony' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="top-0 z-50 fixed bg-[#12022A] border-[#C9A84C]/20 border-b w-full"
    >
      {/* ── Main bar ── */}
      <div className="flex items-center justify-between w-full h-16 px-4 mx-auto sm:px-10 lg:px-16 max-w-7xl sm:h-20">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 transition-transform duration-200 group active:scale-95 shrink-0">
          <picture>
            <source srcSet={EmasonAvif} type="image/avif" />
            <source srcSet={EmasonWebp} type="image/webp" />
            <img
              src={Emason}
              alt="Emerson Empire Logo"
              width={44}
              height={44}
              className="object-contain transition-transform duration-200 w-9 sm:w-11 h-9 sm:h-11 group-hover:scale-105"
            />
          </picture>
          <p className="group-hover:opacity-80 font-bold text-[#C9A84C] text-[12px] sm:text-[16px] leading-tight transition-opacity duration-200">
            THE <br /><span className="text-[#E8C97A]">EMERSON</span> EMPIRE
          </p>
        </a>

        {/* Desktop nav links */}
        <ul className="items-center hidden gap-6 p-0 m-0 list-none md:flex lg:gap-8">
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
          className="md:hidden flex flex-col justify-center items-center gap-1.25 shadow-md shadow-white rounded-b-3xl focus-visible:outline-none focus-visible:ring-[#C9A84C] focus-visible:ring-2 w-10 h-10 shrink-0"
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
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex justify-center bg-[#C9A84C] hover:bg-[#E8C97A] mt-4 px-5 py-3 rounded-sm font-bold text-[#12022A] text-[12px] uppercase tracking-[0.2em] transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
