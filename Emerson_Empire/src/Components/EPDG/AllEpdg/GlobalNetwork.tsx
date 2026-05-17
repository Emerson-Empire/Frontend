import { type FC } from "react";
 
// Static SVG of the globe (orbits + pixels + node markers).
// Adjust the import path / asset URL to match your bundler setup.
import globeSvgUrl from "../../../assets/Globe.svg";
 
// Brand logos to scroll across the two ribbon bands.
// Swap the text entries for actual logo components / images as needed.
const BRAND_LOGOS: string[] = [
  "Logoipsum",
  "Logoipsum Brand",
  "Logoipsum",
  "Logoipsum Brand",
  "Logoipsum",
  "Logoipsum Brand",
  "Logoipsum",
  "Logoipsum Brand",
];
 
// Clickable network nodes — coordinates as % of the SVG (1356 × 1543).
type NetworkNode = {
  id: string;
  xPct: number;
  yPct: number;
  label: string;
};
 
const NETWORK_NODES: NetworkNode[] = [
  { id: "us-west", xPct: 21, yPct: 13, label: "US West" },
  { id: "us-east", xPct: 48, yPct: 7, label: "US East" },
  { id: "europe", xPct: 72, yPct: 12, label: "Europe" },
  { id: "africa", xPct: 78, yPct: 25, label: "Africa" },
  { id: "asia", xPct: 18, yPct: 31, label: "Asia" },
  { id: "latam", xPct: 22, yPct: 36, label: "Latin America" },
  { id: "oceania", xPct: 68, yPct: 35, label: "Oceania" },
  { id: "middle-east", xPct: 79, yPct: 32, label: "Middle East" },
  { id: "antarctica", xPct: 52, yPct: 40, label: "Antarctica" },
];
 
type GlobalNetworkProps = {
  onNodeClick?: (nodeId: string) => void;
};
 
const LogoChip: FC<{ label: string }> = ({ label }) => (
  <div className="inline-flex justify-center items-center bg-white shadow-sm px-6 py-4 border border-slate-200 rounded-full min-w-[220px] font-semibold text-[13px] text-slate-950 uppercase tracking-[0.18em] whitespace-nowrap">
    {label}
  </div>
);
 
const LogoBand: FC<{ reverse?: boolean }> = ({ reverse = false }) => (
  <div className="bg-white/85 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.18)] backdrop-blur-md py-5 border border-slate-200 rounded-[28px] w-full overflow-hidden pointer-events-auto">
    <div className="relative px-2 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-16 pointer-events-none bg-gradient-to-r from-white to-white/0" />
      <div className="absolute inset-y-0 right-0 w-16 pointer-events-none bg-gradient-to-l from-white to-white/0" />
      <div
        className={`flex items-center gap-6 whitespace-nowrap px-5 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {BRAND_LOGOS.concat(BRAND_LOGOS).map((label, idx) => (
          <LogoChip key={`${label}-${idx}`} label={label} />
        ))}
      </div>
    </div>
  </div>
);
 
const GlobalNetwork: FC<GlobalNetworkProps> = ({ onNodeClick }) => {
  const handleNodeClick = (nodeId: string): void => {
    if (onNodeClick) onNodeClick(nodeId);
    else if (typeof window !== "undefined") {
       
      console.log("Clicked node:", nodeId);
    }
  };
 
  return (
    <section className="relative w-full py-12 overflow-hidden bg-slate-50">
      <div
        className="relative w-full mx-auto"
        style={{ aspectRatio: "1356 / 1543", maxWidth: "1356px" }}
      >
        {/* Globe SVG — base layer */}
        <img
          src={globeSvgUrl}
          alt="Global Network — The Emerson Empire"
          className="absolute inset-0 w-full h-full select-none"
          draggable={false}
        />
 
        {/* Heading badge — sits in the upper portion of the globe */}
        <div
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2 left-1/2"
          style={{ top: "27%" }}
        >
          <div className="bg-slate-950 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.55)] px-7 py-3 rounded-md font-bold text-[13px] text-white uppercase tracking-[0.14em] whitespace-nowrap">
            GLOBAL NETWORK - THE EMERSON EMPIRE
          </div>
        </div>
 
        {/* Logo bands — cross the lower half of the globe */}
        <div
          className="absolute left-0 right-0 z-10 px-4 sm:px-8"
          style={{ top: "60%" }}
        >
          <LogoBand />
        </div>
        <div
          className="absolute left-0 right-0 z-10 px-4 sm:px-8"
          style={{ top: "80%" }}
        >
          <LogoBand reverse />
        </div>
 
        {/* Clickable hit areas overlaid on each network node */}
        {NETWORK_NODES.map((node) => (
          <button
            key={node.id}
            type="button"
            onClick={() => handleNodeClick(node.id)}
            aria-label={node.label}
            className="absolute z-30 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 globe-hit-area"
            style={{
              left: `${node.xPct}%`,
              top: `${node.yPct}%`,
              width: "44px",
              height: "44px",
            }}
          />
        ))}
      </div>
 
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee { animation: marquee 40s linear infinite; }
        .animate-marquee-reverse { animation: marqueeReverse 40s linear infinite; }
 
        .globe-hit-area {
          cursor: pointer;
          background: transparent;
          border: none;
          transition: background 150ms ease-out;
        }
        .globe-hit-area:hover {
          background: rgba(59, 130, 246, 0.15);
        }
      `}</style>
    </section>
  );
};
 
export default GlobalNetwork;