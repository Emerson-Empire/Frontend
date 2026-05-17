import type { FC } from "react"; 

const NAV = ["Home", "Program", "How it works", "Reviews", "About Us", "Contact"];

const Footer: FC = () => {
  return (
    <footer className="bg-[#081331] text-slate-200">
      <div className="max-w-screen-xl px-6 py-12 mx-auto sm:px-8">
        <div className="items-start gap-10 grid lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            
            <p className="max-w-xl text-sm leading-relaxed text-slate-400">
              Stop applying, start executing. Build your global portfolio today. Your talent deserves more. Unlock global leadership opportunities today.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-white shadow-black/10 shadow-lg px-5 py-3 rounded-full font-semibold text-[#081331] text-[11px] uppercase tracking-[0.18em]">
                Get My Portfolio Started
              </button>
              <button className="hover:bg-slate-900 px-5 py-3 border border-slate-500 rounded-full font-semibold text-[11px] text-slate-200 uppercase tracking-[0.18em] transition">
                Scale to Leadership
              </button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="mb-4 text-[11px] text-slate-400 uppercase tracking-[0.24em]">Navigation</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                {NAV.map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="transition hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-[11px] text-slate-400 uppercase tracking-[0.24em]">Contact</h4>
              <p className="text-sm text-slate-300">mail@emersonempire.com</p>
              <p className="mt-2 text-sm text-slate-300">+1 (123) 456-7890</p>
              <p className="mt-2 text-sm text-slate-300">United States</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-4 mx-auto px-6 sm:px-8 py-4 max-w-screen-xl text-[11px] text-slate-500">
          <p>© 2026 The Emerson Empire. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
            <a href="#" className="transition hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

