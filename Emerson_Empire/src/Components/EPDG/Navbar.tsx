import type { FC } from "react";

/* Shared dark button class — exported for reuse across sections */
export const darkBtn =
  "bg-gray-500 text-gray-100 text-[10px] font-bold px-4 py-2 rounded tracking-wide";

interface BrandLogoProps {
  size?: "md" | "lg";
}

/* L/UI italic logo — exported because Footer and About also use it */
export const BrandLogo: FC<BrandLogoProps> = ({ size = "md" }) => {
  const cls = size === "lg" ? "text-4xl" : "text-lg";
  
  return (
    <div className="flex items-start leading-none">
      <span className={`text-gray-900 font-black tracking-tighter ${cls}`}>
        <span className="opacity-70"></span>Logo
      </span>
    </div>
  );
};

const NAV = ["Menu 1", "Menu 2", "Menu 3", "Menu 4", "Menu 5"];

const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-200 border-b border-gray-300">
      <div className="max-w-screen-lg mx-auto px-6 h-12 grid grid-cols-[auto_1fr_auto] items-center gap-14">
        <BrandLogo />
        <nav className="hidden md:flex items-center justify-around">
          {NAV.map((n, i) => (
            <a key={i} href="#" className="text-xs text-gray-800 hover:text-black">
              {n}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="text-[10px] font-bold text-gray-800 tracking-widest">
            LOG IN
          </a>
          <button className="bg-gray-400 text-gray-900 text-[10px] font-bold px-3 py-1.5 rounded tracking-widest">
            APPLY NOW
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

