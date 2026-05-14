import React from 'react';

const NAVIGATE = [
  { label: 'Home',     href: '/' },
  { label: 'Your Path', href: '/agency' },
  { label: 'Our Team', href: '#team' },
  { label: 'About Us', href: '#About' },
  { label: 'Contact',  href: '#contact' },
];

const SERVICES = [
  { label: 'Internships',      href: '/epdg' },
  { label: 'Tax Preparation',  href: '/agency' },
  { label: 'Consultation',     href: '/agency' },
  { label: 'Coaching',         href: '/epdg' },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0118] text-white">

      {/* ── Main content ── */}
      <div className="mx-auto px-6 sm:px-10 lg:px-16 pt-14 pb-10 max-w-7xl">
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div>
            {/* EE text logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex justify-center items-center bg-[#C9A84C] rounded-sm w-9 h-9 shrink-0">
                <span className="font-bold text-[#0D0118] text-[14px] leading-none tracking-tight">EE</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[8px] text-white/50 uppercase tracking-[3px]">The</span>
                <span className="font-bold text-[14px] text-white uppercase tracking-[2px]">Emerson</span>
                <span className="text-[#C9A84C] text-[9px] uppercase tracking-[3px]">Empire</span>
              </div>
            </div>

            {/* Description */}
            <p className="mb-7 max-w-55 text-[12px] text-white/45 italic leading-[1.85]">
              We turn potential into proof by giving you the skills, experience, and support to move forward.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="flex justify-center items-center bg-white/8 hover:bg-[#C9A84C]/20 border border-white/10 hover:border-[#C9A84C]/30 rounded-md w-9 h-9 transition-colors duration-200">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="flex justify-center items-center bg-white/8 hover:bg-[#C9A84C]/20 border border-white/10 hover:border-[#C9A84C]/30 rounded-md w-9 h-9 transition-colors duration-200">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:mail@emersonempire.com" aria-label="Email" className="flex justify-center items-center bg-white/8 hover:bg-[#C9A84C]/20 border border-white/10 hover:border-[#C9A84C]/30 rounded-md w-9 h-9 transition-colors duration-200">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="mb-5 font-bold text-[11px] text-white uppercase tracking-[0.2em]">Navigate</p>
            <ul className="flex flex-col gap-3">
              {NAVIGATE.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13px] text-white/45 hover:text-[#C9A84C] tracking-wide transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-5 font-bold text-[11px] text-white uppercase tracking-[0.2em]">Services</p>
            <ul className="flex flex-col gap-3">
              {SERVICES.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13px] text-white/45 hover:text-[#C9A84C] tracking-wide transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 font-bold text-[11px] text-white uppercase tracking-[0.2em]">Contact</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:mail@emersonempire.com" className="text-[13px] text-white/45 hover:text-[#C9A84C] break-all tracking-wide transition-colors duration-200">
                  mail@emersonempire.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.27-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-[13px] text-white/45 tracking-wide">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-[13px] text-white/45 tracking-wide">United States</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-white/8 border-t">
        <div className="flex sm:flex-row flex-col justify-between items-center gap-3 mx-auto px-6 sm:px-10 lg:px-16 py-5 max-w-7xl">
          <p className="text-[11px] text-white/30 tracking-wide">
            © {year} The Emerson Empire. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-[11px] text-white/30 hover:text-[#C9A84C] tracking-wide transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-[11px] text-white/30 hover:text-[#C9A84C] tracking-wide transition-colors duration-200">
              Terms of Use
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
