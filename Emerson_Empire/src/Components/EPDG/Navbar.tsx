import type { FC } from "react";
import logo from "../../assets/EPDG_LOGO.webp";

export const darkBtn =
  "bg-[#081331] text-white text-[11px] font-semibold px-5 py-3 rounded-full tracking-[0.18em] shadow-[0_12px_30px_-20px_rgba(0,0,0,0.8)] cursor-pointer transition hover:bg-[#0f2049]";

interface BrandLogoProps {
  size?: "md" | "lg";
}

export const BrandLogo: FC<BrandLogoProps> = ({ size = "md" }) => {
  const cls = size === "lg" ? "text-3xl" : "text-xl";

  return (
    <div className="flex items-center gap-3">
      <div className={`text-[#0f2049] font-black tracking-tight ${cls}`}><img src={logo} alt="Brand Logo" className="h-15 w-full" /></div>
      
    </div>
  );
};

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Program", href: "#program" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <BrandLogo size="md" />

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[18px] font-medium text-slate-700 hover:text-slate-900 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="bg-[#ffffff] text-black text-[16px] font-semibold tracking-[0.22em] px-5 py-2 rounded-[8px] shadow-lg shadow-slate-900/10"
          >
            Log in
          </a>
          <button className="bg-[#0f2049] text-white text-[16px] font-semibold tracking-[0.22em] px-5 py-2 rounded-[8px] shadow-lg shadow-slate-900/10 cursor-pointer">
            Create an account
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

