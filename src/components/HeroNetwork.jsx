import { useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/* ============================================
   Connected Engineering Network — Hero Visual
   ============================================
   Dense SVG circuit on white. Proximity spotlight
   illuminates traces near the cursor in orange.
   Mouse parallax + touch support.
   ============================================ */

/* ---- Circuit Path Definitions ---- */
const CIRCUIT_PATHS = [
  // === HORIZONTAL BUSES ===
  { id: 'h1', d: 'M -20 80 L 160 80 L 200 40 L 380 40 L 420 80 L 600 80 L 640 40 L 820 40', dur: '6s', delay: '0s' },
  { id: 'h2', d: 'M -20 160 L 100 160 L 140 120 L 340 120 L 380 160 L 520 160 L 560 120 L 820 120', dur: '7s', delay: '1s' },
  { id: 'h3', d: 'M -20 260 L 200 260 L 240 220 L 460 220 L 500 260 L 820 260', dur: '8s', delay: '0.5s' },
  { id: 'h4', d: 'M -20 360 L 140 360 L 180 320 L 400 320 L 440 360 L 600 360 L 640 320 L 820 320', dur: '9s', delay: '2s' },
  { id: 'h5', d: 'M -20 440 L 260 440 L 300 400 L 520 400 L 560 440 L 820 440', dur: '7.5s', delay: '1.5s' },
  { id: 'h6', d: 'M -20 540 L 180 540 L 220 500 L 440 500 L 480 540 L 660 540 L 700 500 L 820 500', dur: '8.5s', delay: '3s' },

  // === VERTICAL TRUNKS ===
  { id: 'v1', d: 'M 200 -20 L 200 80 L 200 260', dur: '4s', delay: '0.5s' },
  { id: 'v2', d: 'M 380 -20 L 380 40 L 380 160', dur: '3s', delay: '1.5s' },
  { id: 'v3', d: 'M 500 80 L 500 260', dur: '3.5s', delay: '2s' },
  { id: 'v4', d: 'M 140 160 L 140 360', dur: '4.5s', delay: '0.8s' },
  { id: 'v5', d: 'M 440 260 L 440 360', dur: '2s', delay: '1.2s' },
  { id: 'v6', d: 'M 560 120 L 560 440', dur: '5.5s', delay: '0s' },
  { id: 'v7', d: 'M 300 400 L 300 540 L 300 620', dur: '4s', delay: '2.5s' },
  { id: 'v8', d: 'M 640 320 L 640 540 L 640 620', dur: '4.5s', delay: '1s' },
  { id: 'v9', d: 'M 700 -20 L 700 40 L 700 500', dur: '7s', delay: '0.5s' },

  // === DIAGONAL CONNECTORS (45°) ===
  { id: 'd1', d: 'M 200 80 L 140 140 L 140 160', dur: '2.5s', delay: '1s' },
  { id: 'd2', d: 'M 420 80 L 500 160 L 500 260', dur: '3.5s', delay: '1.8s' },
  { id: 'd3', d: 'M 240 220 L 180 280 L 180 320', dur: '3s', delay: '0.5s' },
  { id: 'd4', d: 'M 500 260 L 560 320 L 560 360', dur: '2.5s', delay: '2.2s' },
  { id: 'd5', d: 'M 180 360 L 260 440', dur: '2s', delay: '3s' },
  { id: 'd6', d: 'M 440 360 L 520 440', dur: '2s', delay: '1.5s' },
  { id: 'd7', d: 'M 380 160 L 440 220 L 440 260', dur: '2.5s', delay: '2.5s' },
  { id: 'd8', d: 'M 600 80 L 640 120 L 640 320', dur: '4s', delay: '0.3s' },
  { id: 'd9', d: 'M 520 400 L 580 460 L 640 460 L 700 400 L 700 500', dur: '4.5s', delay: '1s' },
  { id: 'd10', d: 'M 220 500 L 300 420 L 300 400', dur: '3s', delay: '2s' },

  // === BRANCH STUBS ===
  { id: 'b1', d: 'M 640 40 L 700 -20', dur: '1.5s', delay: '3s' },
  { id: 'b2', d: 'M 480 540 L 520 580 L 600 580 L 640 540', dur: '3s', delay: '1.5s' },
  { id: 'b3', d: 'M 100 160 L 40 220 L -20 220', dur: '2s', delay: '2s' },
  { id: 'b4', d: 'M 700 500 L 760 560 L 820 560', dur: '2.5s', delay: '0.5s' },
];

/* ---- Junction Nodes ---- */
const JUNCTIONS = [
  { x: 200, y: 80, size: 4 },
  { x: 380, y: 160, size: 4 },
  { x: 500, y: 260, size: 4.5 },
  { x: 140, y: 360, size: 3.5 },
  { x: 560, y: 440, size: 4 },
  { x: 440, y: 360, size: 4 },
  { x: 300, y: 400, size: 3.5 },
  { x: 640, y: 320, size: 4 },
  { x: 700, y: 500, size: 3.5 },
  { x: 420, y: 80, size: 3 },
  { x: 140, y: 160, size: 3 },
  { x: 240, y: 220, size: 3 },
  { x: 560, y: 120, size: 3 },
  { x: 180, y: 320, size: 2.5 },
  { x: 260, y: 440, size: 2.5 },
  { x: 520, y: 400, size: 3 },
  { x: 480, y: 540, size: 2.5 },
  { x: 600, y: 80, size: 2.5 },
  { x: 440, y: 220, size: 3 },
  { x: 380, y: 40, size: 2.5 },
  { x: 220, y: 500, size: 2.5 },
  { x: 640, y: 540, size: 3 },
  { x: 700, y: 40, size: 2.5 },
];

/* ---- Extra data nodes ---- */
const EXTRA_NODES = [
  { pathId: 'h1', dur: '6s', delay: '3s', r: 2 },
  { pathId: 'h3', dur: '8s', delay: '4s', r: 2 },
  { pathId: 'h4', dur: '9s', delay: '4.5s', r: 1.8 },
  { pathId: 'h6', dur: '8.5s', delay: '4.5s', r: 2 },
  { pathId: 'v6', dur: '5.5s', delay: '3s', r: 1.8 },
  { pathId: 'v9', dur: '7s', delay: '3.5s', r: 1.8 },
  { pathId: 'd8', dur: '4s', delay: '2s', r: 1.8 },
  { pathId: 'd9', dur: '4.5s', delay: '2.5s', r: 1.8 },
];

export default function HeroNetwork() {
  const containerRef = useRef(null);
  const svgRef = useRef(null);

  /* ── Parallax motion values ── */
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { stiffness: 40, damping: 18, mass: 1.2 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const translateX = useTransform(springX, [0, 1], [-14, 14]);
  const translateY = useTransform(springY, [0, 1], [-10, 10]);
  const svgScale = useTransform(springX, [0, 0.5, 1], [1.02, 1, 1.02]);

  /* ── Spotlight motion values ── */
  const spotlightRawX = useMotionValue(-200);
  const spotlightRawY = useMotionValue(-200);
  const spotX = useSpring(spotlightRawX, { stiffness: 120, damping: 20 });
  const spotY = useSpring(spotlightRawY, { stiffness: 120, damping: 20 });

  /* Convert client coordinates → SVG viewBox coordinates */
  const updateSpotlight = useCallback(
    (clientX, clientY) => {
      const svg = svgRef.current;
      if (!svg?.getScreenCTM) return;
      const ctm = svg.getScreenCTM();
      if (!ctm) return;
      const pt = new DOMPoint(clientX, clientY);
      const svgPt = pt.matrixTransform(ctm.inverse());
      spotlightRawX.set(svgPt.x);
      spotlightRawY.set(svgPt.y);
    },
    [spotlightRawX, spotlightRawY],
  );

  /* ── Event handlers ── */
  const handlePointerMove = useCallback(
    (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
      updateSpotlight(e.clientX, e.clientY);
    },
    [mouseX, mouseY, updateSpotlight],
  );

  const handlePointerLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    spotlightRawX.set(-200);
    spotlightRawY.set(-200);
  }, [mouseX, mouseY, spotlightRawX, spotlightRawY]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ background: '#FFFFFF', touchAction: 'none' }}
    >
      <motion.svg
        ref={svgRef}
        viewBox="0 0 800 600"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        style={{ x: translateX, y: translateY, scale: svgScale }}
      >
        <defs>
          {/* ── Glow filters ── */}
          <filter id="node-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="junction-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* ── Spotlight mask ── */}
          <filter id="spotlight-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="40" />
          </filter>

          <mask id="spotlight-mask">
            {/* Black = hidden, white = revealed */}
            <rect x="-100" y="-100" width="1000" height="800" fill="black" />
            <motion.circle
              cx={spotX}
              cy={spotY}
              r="130"
              fill="white"
              filter="url(#spotlight-blur)"
            />
          </mask>

          {/* Path definitions for animateMotion */}
          {CIRCUIT_PATHS.map((p) => (
            <path key={`def-${p.id}`} id={p.id} d={p.d} />
          ))}
        </defs>

        {/* ── Layer 1: Faint background grid ── */}
        <g opacity="0.05" stroke="#0B2235">
          {[60, 120, 180, 240, 300, 360, 420, 480, 540].map((y) => (
            <line key={`gh-${y}`} x1="0" y1={y} x2="800" y2={y} strokeWidth="0.4" />
          ))}
          {[80, 160, 240, 320, 400, 480, 560, 640, 720].map((x) => (
            <line key={`gv-${x}`} x1={x} y1="0" x2={x} y2="600" strokeWidth="0.4" />
          ))}
        </g>

        {/* ── Layer 2: Dim circuit traces ── */}
        <g
          stroke="rgba(11, 34, 53, 0.10)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {CIRCUIT_PATHS.map((p) => (
            <path key={`trace-${p.id}`} d={p.d} />
          ))}
        </g>

        {/* ── Layer 3: Animated energy flow dashes ── */}
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {CIRCUIT_PATHS.slice(0, 12).map((p, i) => (
            <path
              key={`flow-${p.id}`}
              d={p.d}
              stroke="#D96A1A"
              strokeWidth="1"
              opacity="0.18"
              strokeDasharray="6 42"
              className="animate-dash-flow"
              style={{
                animationDuration: `${3.5 + i * 0.6}s`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </g>

        {/* ── Layer 4: Moving data nodes ── */}
        <g filter="url(#node-glow)">
          {CIRCUIT_PATHS.map((p) => (
            <circle key={`dn-${p.id}`} r="2.5" fill="#E65C00">
              <animateMotion dur={p.dur} repeatCount="indefinite" begin={p.delay}>
                <mpath href={`#${p.id}`} />
              </animateMotion>
            </circle>
          ))}
          {EXTRA_NODES.map((n, i) => (
            <circle key={`en-${i}`} r={n.r} fill="#D96A1A" opacity="0.6">
              <animateMotion dur={n.dur} repeatCount="indefinite" begin={n.delay}>
                <mpath href={`#${n.pathId}`} />
              </animateMotion>
            </circle>
          ))}
        </g>

        {/* ── Layer 5: Junction nodes with pulse rings ── */}
        <g>
          {JUNCTIONS.map((j, i) => (
            <g key={`jn-${i}`}>
              <circle
                cx={j.x}
                cy={j.y}
                r={j.size}
                fill="none"
                stroke="#D96A1A"
                strokeWidth="0.6"
              >
                <animate
                  attributeName="r"
                  from={String(j.size)}
                  to={String(j.size * 4.5)}
                  dur="4.5s"
                  repeatCount="indefinite"
                  begin={`${i * 0.3}s`}
                />
                <animate
                  attributeName="opacity"
                  from="0.3"
                  to="0"
                  dur="4.5s"
                  repeatCount="indefinite"
                  begin={`${i * 0.3}s`}
                />
              </circle>
              <circle
                cx={j.x}
                cy={j.y}
                r={j.size * 0.5}
                fill="#D96A1A"
                opacity="0.4"
                filter="url(#junction-glow)"
              />
              <circle
                cx={j.x}
                cy={j.y}
                r={j.size * 0.22}
                fill="#E65C00"
                opacity="0.7"
              />
            </g>
          ))}
        </g>

        {/* ── Layer 6: PROXIMITY SPOTLIGHT ──
            A bright orange version of traces + nodes,
            revealed only within a blurred radial mask
            that follows the cursor. */}
        <g mask="url(#spotlight-mask)">
          {/* Bright traces */}
          <g
            stroke="#D96A1A"
            strokeWidth="2.5"
            fill="none"
            opacity="0.55"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {CIRCUIT_PATHS.map((p) => (
              <path key={`bright-${p.id}`} d={p.d} />
            ))}
          </g>

          {/* Bright junction cores */}
          {JUNCTIONS.map((j, i) => (
            <circle
              key={`bright-jn-${i}`}
              cx={j.x}
              cy={j.y}
              r={j.size * 0.8}
              fill="#D96A1A"
              opacity="0.75"
            />
          ))}

          {/* Ambient warm glow behind spotlight */}
          <motion.circle
            cx={spotX}
            cy={spotY}
            r="100"
            fill="#D96A1A"
            opacity="0.035"
          />
        </g>
      </motion.svg>

      {/* Inline keyframes */}
      <style>{`
        @keyframes dashFlowAnim {
          from { stroke-dashoffset: 48; }
          to { stroke-dashoffset: 0; }
        }
        .animate-dash-flow {
          animation-name: dashFlowAnim;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
