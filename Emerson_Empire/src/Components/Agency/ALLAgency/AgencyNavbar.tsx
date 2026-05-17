import React, { useState } from 'react';
import {Agency} from "../../../assets" 

const NAV_LINKS = [
  { label: 'HOME',     href: '/' },
  { label: 'Services', href:'#choose' },
  { label: 'Tax Education', href: '#team' },
  { label: 'About Us', href: '#about' },
  { label: 'Reviews',  href: '#testimony' },
];

const AgencyNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="top-0 z-50 fixed bg-[#12022A] border-[#C9A84C]/20 border-b w-full h-24">
      <div className="flex items-center justify-between w-full h-16 px-6 mx-auto sm:px-10 lg:px-16 max-w-7xl">

        {/* Logo */}
       <a href="/" className="flex items-center transition-transform duration-200 group active:scale-95 shrink-0">
     
    <img
      src={Agency}
      alt="Emerson Empire Logo"
      width={48}
      height={48}
      className="object-contain w-12 h-12 transition-transform duration-200 group-hover:scale-x-125"
    />
 
  <p className="group-hover:opacity-80 ml-2 font-bold text-[#C9A84C] text-[18px] transition-opacity duration-200">
   THE  <br/><span className="text-[#E8C97A]">EMERSON</span> AGENCY
  </p>
</a>

        {/* Desktop links */}
        <ul className="items-center hidden gap-8 p-0 m-0 list-none md:flex">
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

export default AgencyNavbar;
