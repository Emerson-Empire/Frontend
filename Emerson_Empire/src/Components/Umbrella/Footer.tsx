import React from 'react';
import { Emason } from '../../assets';

const NAV_SECTIONS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Testimonials', href: '#Testimony' },
];

const ABOUT_LINKS = [
  { label: 'Our Story', href: '#about' },
  { label: 'Our Team', href: '#team' },
  { label: 'Mission', href: '#about' },
  { label: 'Values', href: '#about' },
];

const CONTACT_LINKS = [
  { label: 'hello@emersonempire.com', href: 'mailto:hello@emersonempire.com' },
  { label: '+1 (800) 000-0000', href: 'tel:+18000000000' },
  { label: '123 Empire Avenue, Suite 400', href: '#contact' },
  { label: 'Contact Form', href: '#contact' },
];

const EMPIRE_LINKS = [
  { label: 'EPDG', href: '#epdg' },
  { label: 'Emerson Agency LLC', href: '#agency' },
];

const POLICIES = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Disclaimer', href: '#' },
];

const ColHeader = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 font-bold text-[#F5F0E8] text-[10px] uppercase tracking-[0.25em]">
    {children}
  </p>
);

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <a
      href={href}
      className="text-[#F5F0E8]/50 text-[12px] hover:text-[#C9A84C] tracking-wide transition-colors duration-200"
    >
      {label}
    </a>
  </li>
);

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0118] border-white/8 border-t">
      {/* ── Main grid ── */}
      <div className="mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-10 max-w-7xl">
        <div className="gap-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">

          {/* Logo + description */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <img
              src={Emason}
              alt="Emerson Empire"
              className="mb-4 w-20 h-20 object-contain"
            />
            <p className="max-w-55 text-[#F5F0E8]/45 text-[12px] leading-[1.85] tracking-wide">
              Empowering individuals and businesses through financial guidance,
              insurance solutions, and professional development.
            </p>
          </div>

          {/* Sections */}
          <div>
            <ColHeader>Sections</ColHeader>
            <ul className="flex flex-col gap-2.5">
              {NAV_SECTIONS.map(l => <FooterLink key={l.label} {...l} />)}
            </ul>
          </div>

          {/* About */}
          <div>
            <ColHeader>About</ColHeader>
            <ul className="flex flex-col gap-2.5">
              {ABOUT_LINKS.map(l => <FooterLink key={l.label} {...l} />)}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <ColHeader>Contact Us</ColHeader>
            <ul className="flex flex-col gap-2.5">
              {CONTACT_LINKS.map(l => <FooterLink key={l.label} {...l} />)}
            </ul>
          </div>

          {/* Emerson Empire */}
          <div>
            <ColHeader>Emerson Empire</ColHeader>
            <ul className="flex flex-col gap-2.5">
              {EMPIRE_LINKS.map(l => <FooterLink key={l.label} {...l} />)}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-white/8 border-t">
        <div className="flex sm:flex-row flex-col justify-between items-center gap-3 mx-auto px-6 sm:px-10 lg:px-16 py-5 max-w-7xl">
          <p className="text-[#F5F0E8]/30 text-[11px] tracking-wide">
            © {year} The Emerson Empire. All rights reserved.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {POLICIES.map(p => (
              <li key={p.label}>
                <a
                  href={p.href}
                  className="text-[#F5F0E8]/30 text-[11px] hover:text-[#C9A84C] tracking-wide transition-colors duration-200"
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
