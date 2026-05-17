import type { FC } from "react";
import logo from "../../../assets/EPDG_LOGO.webp";

const NAV = [
  { label: "Home",         href: "#home" },
  { label: "Program",      href: "#program" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Reviews",      href: "#reviews" },
  { label: "About Us",     href: "#about-us" },
  { label: "Contact",      href: "#contact" },
];

const Footer: FC = () => {
  return (
    <footer className="bg-[#07101f] text-white">

      {/* ── Main body ── */}
      <div className="grid items-start grid-cols-1 px-6 mx-auto gap-14 lg:grid-cols-2 sm:px-10 py-14 max-w-screen-7xl">

        {/* ── Left: logo + copy + buttons ── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

          {/* Logo */}
          <img
            src={logo}
            alt="EPDG — Emerson Professional Development Group"
            className="object-contain w-24 h-24 mx-auto lg:mx-0"
          />

          {/* Taglines */}
          <div className="space-y-1">
            <p className="text-sm leading-relaxed text-slate-300">
              Stop applying, start executing. Build your global portfolio today.
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Your talent deserves more. Unlock global leadership opportunities today.
            </p>
          </div>

          {/* Empire note */}
          <p className="max-w-sm text-xs leading-relaxed text-slate-500">
            <span className="font-bold tracking-wide uppercase text-slate-400">
              We are part of The Emerson Empire.
            </span>{" "}
            EPDG is a fully integrated accelerator for ambitious talent — combining
            remote internships, portfolio building, and leadership development to
            create verifiable global career trajectories.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex justify-center items-center bg-white hover:bg-slate-200 shadow-black/20 shadow-lg px-6 py-3 rounded-full font-bold text-[#081331] text-[11px] uppercase tracking-[0.18em] transition-colors duration-200"
            >
              Get My Portfolio Started
            </a>
            <a
              href="#program"
              className="inline-flex justify-center items-center px-6 py-3 border border-slate-500 hover:border-white rounded-full font-semibold text-[11px] text-slate-300 hover:text-white uppercase tracking-[0.18em] transition-colors duration-200"
            >
              Scale to Leadership
            </a>
          </div>
        </div>

        {/* ── Right: nav + contact + socials ── */}
        <div className="flex flex-col gap-8 items-center lg:items-start">

          {/* Nav links — horizontal */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
                  item.label === "Home"
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-wrap text-sm gap-x-8 gap-y-2 text-slate-400 justify-center lg:justify-start">
            <a href="mailto:mail@emersonempire.com" className="transition-colors hover:text-white">
              mail@emersonempire.com
            </a>
            <a href="tel:+11234567890" className="transition-colors hover:text-white">
              +1 (123) 456-7890
            </a>
            <span>United States</span>
          </div>

          {/* Social icons */}
          <div className="flex gap-3 justify-center lg:justify-start">
            {[
              {
                label: "Facebook",
                href: "#",
                svg: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: "#",
                svg: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
              },
              {
                label: "Instagram",
                href: "#",
                svg: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                ),
              },
              {
                label: "YouTube",
                href: "#",
                svg: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                  </svg>
                ),
              },
            ].map(({ label, href, svg }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex items-center justify-center transition-colors duration-200 rounded-md bg-slate-800 hover:bg-slate-600 w-9 h-9 text-slate-300 hover:text-white"
              >
                {svg}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-800">
        <div className="flex md:flex-row flex-col justify-between items-center gap-3 mx-auto px-6 sm:px-10 py-4 max-w-screen-7xl text-[11px] text-slate-500 text-center md:text-left">
          <p>© 2026 The Emerson Empire. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
