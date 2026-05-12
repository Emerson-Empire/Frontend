import type { FC } from "react";
import { BrandLogo } from "./Navbar";

interface FooterCol {
  heading: string;
  items: string[];
}

const FOOTER_COLS: FooterCol[] = [
  {
    heading: "SECTIONS",
    items: ["Sections", "Sections", "Sections", "Sections", "Sections", "Sections"],
  },
  { heading: "ABOUT", items: ["Sections", "Sections", "Sections"] },
  { heading: "CONTAC US", items: ["Sections", "Sections", "Sections"] },
  { heading: "EMERSON EMPIRE", items: ["CFOS", "EMERSON AGENCY LLC"] },
];

const Footer: FC = () => {
  return (
    <footer className="bg-gray-200">
      <div className="max-w-screen-lg mx-auto px-6 py-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <BrandLogo size="lg" />
            <p className="text-[10px] text-gray-700 leading-relaxed max-w-[220px] mt-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.heading} className="col-span-2">
              <h4 className="text-[10px] font-extrabold text-gray-900 uppercase tracking-wider mb-3">
                {col.heading}
              </h4>
              <ul className="space-y-1.5">
                {col.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-[10px] text-gray-700 hover:text-gray-900">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-300">
        <div className="max-w-screen-lg mx-auto px-6 py-3 flex items-center justify-between">
          <p className="text-[10px] text-gray-700">
            2024® Emerson Professional Development Group
          </p>
          <div className="flex gap-5">
            {["Policy 1", "Policy 2", "Policy 3", "Policy 4"].map((p) => (
              <a key={p} href="#" className="text-[10px] text-gray-700 hover:text-gray-900">
                {p}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
er;
