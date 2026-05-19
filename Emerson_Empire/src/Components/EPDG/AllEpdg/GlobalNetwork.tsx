import { type FC } from "react";
import Global3d from "./Global3d";
// // Globe SVG
// import globeSvgUrl from "../../../assets/Globe.svg";

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
      <div className="left-0 z-10 absolute inset-y-0 bg-gradient-to-r from-white to-transparent w-16 pointer-events-none" />

      <div className="right-0 z-10 absolute inset-y-0 bg-gradient-to-l from-white to-transparent w-16 pointer-events-none" />

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
    if (onNodeClick) {
      onNodeClick(nodeId);
    } else if (typeof window !== "undefined") {
      console.log("Clicked node:", nodeId);
    }
  };

  return (
    <section className="relative bg-slate-950 py-16 w-full overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="top-[-20%] left-[-10%] absolute bg-blue-500 blur-3xl rounded-full w-[600px] h-[600px] animate-blob" />

        <div className="right-[-10%] bottom-[-20%] absolute bg-purple-500 blur-3xl rounded-full w-[600px] h-[600px] animate-blob animation-delay-2000" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div
        className="z-10 relative mx-auto w-full"
        style={{
          aspectRatio: "1356 / 1543",
          maxWidth: "1356px",
        }}
      >
        {/* Globe */}
        {/* <img
          src={globeSvgUrl}
          alt="Global Network — The Emerson Empire"
          className="absolute inset-0 w-full h-full animate-globe-float select-none"
          draggable={false}
        /> */}
        <div className="absolute inset-0">
  <Global3d/>
</div>

        {/* Heading */}
        <div
          className="left-1/2 z-20 absolute -translate-x-1/2 -translate-y-1/2"
          style={{ top: "27%" }}
        >
          <div className="bg-slate-950/90 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.55)] backdrop-blur-md px-7 py-3 border border-white/10 rounded-md font-bold text-[13px] text-white uppercase tracking-[0.14em] whitespace-nowrap">
            GLOBAL NETWORK - THE EMERSON EMPIRE
          </div>
        </div>

        {/* Logo Bands */}
        <div
          className="right-0 left-0 z-10 absolute px-4 sm:px-8"
          style={{ top: "60%" }}
        >
          <LogoBand />
        </div>

        <div
          className="right-0 left-0 z-10 absolute px-4 sm:px-8"
          style={{ top: "80%" }}
        >
          <LogoBand reverse />
        </div>

        {/* Network Nodes */}
        {NETWORK_NODES.map((node) => (
          <button
            key={node.id}
            type="button"
            onClick={() => handleNodeClick(node.id)}
            aria-label={node.label}
            className="z-30 absolute rounded-full -translate-x-1/2 -translate-y-1/2 animate-node-pulse globe-hit-area"
            style={{
              left: `${node.xPct}%`,
              top: `${node.yPct}%`,
              width: "18px",
              height: "18px",
            }}
          >
            <span className="absolute inset-0 bg-blue-500 rounded-full" />

            <span className="absolute inset-[-8px] opacity-60 border border-blue-400 rounded-full" />
          </button>
        ))}
      </div>

      <style>{`
        /* =========================
           MARQUEE
        ========================= */

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeReverse {
          0% {
            transform: translateX(-50%);
          }

          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marqueeReverse 40s linear infinite;
        }

        /* =========================
           FLOATING GLOBE
        ========================= */

        @keyframes globeFloat {
          0% {
            transform: translateY(0px) rotate(0deg);
          }

          50% {
            transform: translateY(-12px) rotate(0.5deg);
          }

          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        .animate-globe-float {
          animation: globeFloat 8s ease-in-out infinite;
        }

        /* =========================
           NODE PULSE
        ========================= */

        @keyframes nodePulse {
          0% {
            box-shadow: 0 0 0 0 rgba(59,130,246,0.7);
            transform: translate(-50%, -50%) scale(1);
          }

          70% {
            box-shadow: 0 0 0 18px rgba(59,130,246,0);
            transform: translate(-50%, -50%) scale(1.08);
          }

          100% {
            box-shadow: 0 0 0 0 rgba(59,130,246,0);
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .animate-node-pulse {
          animation: nodePulse 2.5s infinite;
        }

        /* =========================
           BACKGROUND BLOBS
        ========================= */

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }

          33% {
            transform: translate(30px, -50px) scale(1.1);
          }

          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }

          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 12s infinite ease-in-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* =========================
           NODE INTERACTION
        ========================= */

        .globe-hit-area {
          cursor: pointer;
          background: transparent;
          border: none;
          transition:
            transform 200ms ease,
            background 150ms ease-out;
        }

        .globe-hit-area:hover {
          transform: translate(-50%, -50%) scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default GlobalNetwork;