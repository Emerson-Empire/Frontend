import { type FC } from "react";
 
// Static SVG of the globe (orbits + pixels + node markers).
// Adjust the import path / asset URL to match your bundler setup.
import globeSvgUrl from "../../assets/Globe.svg";
 
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
  <div className="inline-flex min-w-[220px] items-center justify-center whitespace-nowrap rounded-full border border-slate-200 bg-white px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-sm">
    {label}
  </div>
);
 
const LogoBand: FC<{ reverse?: boolean }> = ({ reverse = false }) => (
  <div className="pointer-events-auto w-full overflow-hidden rounded-[28px] border border-slate-200 bg-white/85 py-5 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.18)] backdrop-blur-md">
    <div className="relative overflow-hidden px-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-white/0" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-white/0" />
      <div
        className={`flex items-center gap-6 whitespace-nowrap px-4 ${
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
    <section className="relative w-full overflow-hidden bg-slate-50 py-12">
      <div
        className="relative mx-auto w-full"
        style={{ aspectRatio: "1356 / 1543", maxWidth: "1356px" }}
      >
        {/* Globe SVG — base layer */}
        <img
          src={globeSvgUrl}
          alt="Global Network — The Emerson Empire"
          className="absolute inset-0 h-full w-full select-none"
          draggable={false}
        />
 
        {/* Heading badge — sits in the upper portion of the globe */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ top: "27%" }}
        >
          <div className="rounded-md bg-slate-950 px-7 py-3 text-[13px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_10px_30px_-10px_rgba(15,23,42,0.55)] whitespace-nowrap">
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
            className="globe-hit-area absolute z-30 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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