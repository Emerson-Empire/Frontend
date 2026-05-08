import React, { useState } from 'react';
import { Emason } from '../../assets';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <nav className="top-0 z-50 fixed bg-[#12022A]/80 backdrop-blur-md border-[#C9A84C]/30 border-b w-full">
      {/* Main bar */}
      <div className="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl h-30">
        {/* max-w-7xl */}

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src={Emason}
            alt="Emerson Empire Logo"
            className="w-12 h-12 object-contain"
          />
          <div className="flex flex-col leading-none">
            <span className="font-semibold text-[#E8C97A] text-lg uppercase tracking-widest body">
              Emerson
            </span>
            <span className="mt-0.5 text-[12px] text-white uppercase tracking-[0.3em] body">
              Lead · Build · Expand
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 m-0 p-0 list-none">
          {[
            { label: 'Agency', href: '/agency' },
            { label: 'EPDG', href: '/epdg' },
            { label: 'About', href: '/about' },
            {label:"faq", href:"#faq"},
            {label:"Testimony", href:"#Testimony"}
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-medium text-[11px] text-white/60 hover:text-[#E8C97A] uppercase tracking-[0.2em] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a        
         href="#contact"   
              className="hover:bg-[#C9A84C]/10 px-5 py-2 border border-[#C9A84C]/50 hover:border-[#C9A84C] rounded-sm font-medium text-[#E8C97A] text-[10px] uppercase tracking-[0.2em] transition-all duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col gap-1.5 bg-[#451E91] p-2 rounded-b-full focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          
        >
          <span
            className={`block w-5 h-px bg-[#C9A84C] transition-transform duration-300 origin-center ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#C9A84C] transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#C9A84C] transition-transform duration-300 origin-center ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-0 bg-[#12022A] px-6 pt-2 pb-6 border-[#C9A84C]/15 border-t">
          {[
            { label: 'Agency', href: '/agency' },
            { label: 'EPDG', href: '/epdg' },
            { label: 'About', href: '/about' },
             {label:"faq", href:"#faq"},
             {label:"Testimony",href:"#Testimony"}
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-4 border-[#C9A84C]/10 border-b font-medium text-[11px] text-white/60 hover:text-[#E8C97A] uppercase tracking-[0.2em] transition-colors duration-200"
            >
            {link.label}
            </a>
          ))}
          <a
          href="#contact"   
            className="hover:bg-[#C9A84C]/10 mt-5 px-5 py-3 border border-[#C9A84C]/50 rounded-sm font-medium text-[#E8C97A] text-[10px] text-center uppercase tracking-[0.2em] transition-all duration-200"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
