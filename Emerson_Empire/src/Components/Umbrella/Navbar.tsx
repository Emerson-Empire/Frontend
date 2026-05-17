import React, { useState } from 'react';
import { Emason, EmasonWebp, EmasonAvif } from '../../assets';

const NAV_LINKS = [
  { label: 'HOME',     href: '/' },
  { label: 'Your Path', href:'#choose' },
  { label: 'Our Team', href: '#team' },
  { label: 'About Us', href: '#about' },
  { label: 'Reviews',  href: '#testimony' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="top-0 z-50 fixed bg-[#12022A] border-[#C9A84C]/20 border-b w-full">
      <div className="flex justify-between items-center mx-auto px-6 sm:px-10 lg:px-16 w-full max-w-7xl h-16">

        {/* Logo */}
       <a href="/" className="group flex items-center active:scale-95 transition-transform duration-200 shrink-0">
  <picture>
    <source srcSet={EmasonAvif} type="image/avif" />
    <source srcSet={EmasonWebp} type="image/webp" />
    <img
      src={Emason}
      alt="Emerson Empire Logo"
      width={48}
      height={48}
      className="w-12 h-12 object-contain group-hover:scale-x-125 transition-transform duration-200"
    />
  </picture>
  <p className="group-hover:opacity-80 ml-2 font-bold text-[#C9A84C] text-[18px] transition-opacity duration-200">
    THE <br/><span className="text-[#E8C97A]">EMERSON</span> EMPIRE
  </p>
</a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 m-0 p-0 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-200 ${
                  link.label === 'HOME'
                    ? 'text-[#C9A84C]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-[#C9A84C] hover:bg-[#E8C97A] px-5 py-2 rounded-sm font-bold text-[#12022A] text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 shrink-0"
        >
          Contact Us
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 shadow-md shadow-white p-2 rounded-b-3xl focus-visible:outline-none focus-visible:ring-[#C9A84C] focus-visible:ring-2 w-11 h-11"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-px bg-[#C9A84C] transition-transform duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-[#C9A84C] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-[#C9A84C] transition-transform duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-[#12022A] px-6 pb-6 border-[#C9A84C]/15 border-t">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 border-[#C9A84C]/10 border-b font-medium text-[11px] text-white/60 hover:text-[#C9A84C] uppercase tracking-[0.2em] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex justify-center bg-[#C9A84C] hover:bg-[#E8C97A] mt-5 px-5 py-3 rounded-sm font-bold text-[#12022A] text-[11px] uppercase tracking-[0.2em] transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
