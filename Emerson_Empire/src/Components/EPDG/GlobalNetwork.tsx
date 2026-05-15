import type { FC } from "react";

const NETWORK_NODES = [
  "Logoipsum",
  "Brand Standard",
  "Creative Agency",
  "Tech Solutions",
  "Global Partners",
  "Market Leaders",
];

const GlobalNetwork: FC = () => {
  const containerSize = 500;
  const radius = 150;
  const centerX = containerSize / 2;
  const centerY = containerSize / 2;

  // Calculate positions for nodes in a circle
  const nodePositions = NETWORK_NODES.map((_, idx) => {
    const angle = (idx / NETWORK_NODES.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
      label: NETWORK_NODES[idx],
    };
  });

  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 shadow-[0_60px_120px_-60px_rgba(15,23,42,0.2)]">
          <div className="p-12 sm:p-16 flex flex-col items-center justify-center min-h-[600px]">
            {/* SVG Network Visualization */}
            <div className="mb-8 relative">
              <svg width={containerSize} height={containerSize} className="drop-shadow-sm">
                {/* Animated grid background */}
                <defs>
                  <pattern id="dots" x="50" y="50" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="50" cy="50" r="2" fill="rgba(203, 213, 225, 0.3)" />
                  </pattern>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Dot grid background */}
                <rect width={containerSize} height={containerSize} fill="url(#dots)" />

                {/* Center circle */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r="50"
                  fill="rgba(15, 23, 42, 0.05)"
                  stroke="rgba(15, 23, 42, 0.1)"
                  strokeWidth="2"
                />

                {/* Connection lines from center to nodes */}
                {nodePositions.map((node, idx) => (
                  <line
                    key={`line-${idx}`}
                    x1={centerX}
                    y1={centerY}
                    x2={node.x}
                    y2={node.y}
                    stroke="rgba(59, 130, 246, 0.2)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                ))}

                {/* Circular orbit line */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={radius}
                  fill="none"
                  stroke="rgba(148, 163, 184, 0.15)"
                  strokeWidth="1"
                  strokeDasharray="8,4"
                />

                {/* Decorative circular elements */}
                {[0.3, 0.6, 1].map((scale, idx) => (
                  <circle
                    key={`orbit-${idx}`}
                    cx={centerX}
                    cy={centerY}
                    r={radius * scale}
                    fill="none"
                    stroke="rgba(203, 213, 225, 0.1)"
                    strokeWidth="1"
                  />
                ))}

                {/* Nodes with glowing effect */}
                {nodePositions.map((node, idx) => (
                  <g key={`node-${idx}`}>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="14"
                      fill="rgba(59, 130, 246, 0.15)"
                      stroke="rgba(59, 130, 246, 0.6)"
                      strokeWidth="2"
                      filter="url(#glow)"
                    />
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="6"
                      fill="rgb(59, 130, 246)"
                    />
                  </g>
                ))}
              </svg>
            </div>

            {/* Center Content */}
            <div className="text-center max-w-2xl">
              <div className="mb-4 inline-block">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-xl shadow-lg">
                  EE
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight mb-4">
                Global Network — The Emerson Empire
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Connected with industry leaders, global partners, and innovative brands. Our network spans across continents, delivering excellence through collaboration and strategic partnerships.
              </p>

              {/* Node Labels */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {NETWORK_NODES.map((node, idx) => (
                  <div
                    key={`label-${idx}`}
                    className="flex items-center justify-center px-4 py-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
                  >
                    <span className="text-sm font-semibold text-slate-700">{node}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
