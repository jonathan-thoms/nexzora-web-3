import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ============================================================================
   INTERACTIVE 3D PARTICLE WAVE MESH CANVAS (Hero Background)
   Replicates the glowing cyan & warm-amber dotted 3D wave terrain from the mockup
   ============================================================================ */
function HeroWaveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const cols = 78;
      const rows = 28;
      const spacingX = w / (cols - 1);
      const spacingZ = 14;

      for (let r = 0; r < rows; r++) {
        const depthRatio = r / rows; // 0 = back, 1 = front
        ctx.beginPath();

        for (let c = 0; c < cols; c++) {
          const xNorm = c / (cols - 1); // 0 to 1 left-to-right
          const x = c * spacingX;

          // Multi-layered flowing wave height
          const wave1 = Math.sin(xNorm * Math.PI * 3.2 + time * 0.9 + r * 0.22) * 38;
          const wave2 = Math.cos(xNorm * Math.PI * 5.0 - time * 0.65 + r * 0.35) * 20;
          const centerDip = Math.sin(xNorm * Math.PI) * 28; // slightly lower in the middle behind text
          const yBase = h * 0.46 + (r - rows / 2) * spacingZ * (0.55 + depthRatio * 0.65);
          const y = yBase + wave1 + wave2 + centerDip;

          // Color transitions from electric cyan on left/center to warm orange-gold on right
          const isRightSide = xNorm > 0.58;
          const alpha = (0.12 + depthRatio * 0.55) * (1 - Math.abs(xNorm - 0.5) * 0.35);

          // Draw glowing dot at grid vertex
          ctx.fillStyle = isRightSide
            ? `rgba(255, 148, 66, ${alpha * 0.95})`
            : `rgba(56, 214, 255, ${alpha})`;

          const dotRadius = 0.8 + depthRatio * 1.15;
          ctx.fillRect(x - dotRadius / 2, y - dotRadius / 2, dotRadius, dotRadius);

          if (c === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Subtle connecting wireframe line per row
        const grad = ctx.createLinearGradient(0, 0, w, 0);
        grad.addColorStop(0, `rgba(20, 184, 255, ${0.04 + depthRatio * 0.14})`);
        grad.addColorStop(0.5, `rgba(36, 94, 254, ${0.03 + depthRatio * 0.08})`);
        grad.addColorStop(1, `rgba(255, 138, 56, ${0.04 + depthRatio * 0.14})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.75;
        ctx.stroke();
      }

      time += 0.014;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-85"
    />
  );
}

/* ============================================================================
   NAVIGATION DATA (Current Nexzora Nav Structure, Non-Functional on Click)
   ============================================================================ */
const MOCKUP_NAV_ITEMS = [
  {
    label: 'Services',
    dropdown: [
      'System Design & Architecture',
      'Automotive Software & AUTOSAR',
      'Connected IoT Platforms',
      'Robotics & ROS 2 Middleware',
      'AI & Machine Learning',
      'Cloud & Cybersecurity',
    ],
  },
  {
    label: 'Industries',
    dropdown: [
      'Automotive & Mobility',
      'Energy & CleanTech',
      'Industrial & Automation',
      'Technology & Smart Devices',
    ],
  },
  { label: 'Company' },
  { label: 'Careers' },
];

/* ============================================================================
   MAIN REIMAGINED HOMEPAGE MOCKUP COMPONENT
   ============================================================================ */
export default function HomeMockup() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent navigation on all buttons & links while keeping hover/click feedback
  const handleNoOp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#090a14] text-white font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      {/* Scoped Custom Styles for CairoMotive Visual Effects */}
      <style>{`
        .cm-pill-btn {
          background: linear-gradient(92deg, #1de2ff 0%, #5eead4 42%, #fb923c 100%);
          color: #070913;
          box-shadow: 0 0 28px rgba(45, 212, 255, 0.38), 0 0 42px rgba(251, 146, 60, 0.22);
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s ease, filter 0.28s ease;
        }
        .cm-pill-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 0 38px rgba(45, 212, 255, 0.6), 0 0 55px rgba(251, 146, 60, 0.38);
          filter: brightness(1.06);
        }
        .cm-pill-btn:active {
          transform: translateY(0) scale(0.98);
        }

        .cm-text-gradient {
          background: linear-gradient(92deg, #22d3ee 0%, #67e8f9 38%, #f59e0b 82%, #fb923c 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cm-service-card {
          background: linear-gradient(180deg, rgba(32, 36, 52, 0.72) 0%, rgba(16, 18, 28, 0.88) 100%);
          border: 1px solid rgba(255, 255, 255, 0.11);
          box-shadow: 0 18px 40px -15px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(16px);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .cm-service-card:hover {
          transform: translateY(-8px) scale(1.025);
          border-color: rgba(56, 214, 255, 0.45);
          box-shadow: 0 26px 55px -12px rgba(0, 0, 0, 0.85), 0 0 32px -6px rgba(34, 211, 238, 0.28);
        }

        .cm-bento-card {
          background: linear-gradient(180deg, rgba(220, 223, 223, 0.14) -80%, rgba(255, 255, 255, 0.03) 100%);
          border: 1px solid rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(14px);
          transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.32s ease, box-shadow 0.32s ease;
        }
        .cm-bento-card:hover {
          transform: translateY(-5px);
          border-color: rgba(56, 214, 255, 0.35);
          box-shadow: 0 20px 44px -15px rgba(0, 0, 0, 0.75), 0 0 28px -8px rgba(34, 211, 238, 0.2);
        }

        @keyframes floatPyramid {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1.2deg); }
        }
        .animate-pyramid-slow {
          animation: floatPyramid 6s ease-in-out infinite;
        }
        .animate-pyramid-delayed {
          animation: floatPyramid 7.5s ease-in-out 1.5s infinite;
        }
      `}</style>

      {/* ====================================================================
          STICKY CAIROMOTIVE-STYLE GLASS NAVBAR
          ==================================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 transition-all duration-300">
        <div
          className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-300 px-5 sm:px-8 ${
            scrolled
              ? 'bg-[#0e1120]/90 border-white/15 shadow-[0_14px_40px_rgba(0,0,0,0.65)] backdrop-blur-xl py-3'
              : 'bg-[#121626]/70 border-white/10 backdrop-blur-md py-3.5'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Original NEXZORA Logo (with wordmark included, no redundant text) */}
            <a
              href="#top"
              onClick={handleNoOp}
              className="flex items-center shrink-0 focus:outline-none group"
            >
              <img
                src="/logo-dark.png"
                alt="NEXZORA"
                className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </a>

            {/* Center Navigation Links: Services, Industries, Company, Careers */}
            <nav className="hidden md:flex items-center gap-9">
              {MOCKUP_NAV_ITEMS.map((item, idx) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={handleNoOp}
                    className="relative py-1.5 text-[14.5px] font-medium text-gray-200 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer group"
                  >
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <svg
                        className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
                          activeDropdown === idx ? 'rotate-180 text-cyan-400' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-orange-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-full" />
                  </button>

                  {/* Animated Hover Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute left-0 top-full pt-2 w-60 z-50"
                      >
                        <div className="rounded-xl bg-[#0e1122]/95 border border-white/12 backdrop-blur-xl py-2 shadow-2xl">
                          {item.dropdown.map((subLabel) => (
                            <button
                              key={subLabel}
                              type="button"
                              onClick={handleNoOp}
                              className="w-full text-left px-4 py-2 text-[13.5px] text-gray-300 hover:text-white hover:bg-white/[0.06] transition-colors flex items-center justify-between group/item cursor-pointer"
                            >
                              <span>{subLabel}</span>
                              <span className="text-cyan-400 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-xs">
                                →
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right CTA Button */}
            <div className="hidden md:block">
              <button
                type="button"
                onClick={handleNoOp}
                className="cm-pill-btn rounded-full px-6 py-2 text-[13.5px] font-semibold tracking-wide cursor-pointer"
              >
                Get in touch
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden border-t border-white/10 mt-3 pt-3 pb-2 space-y-2"
              >
                {MOCKUP_NAV_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={handleNoOp}
                    className="block w-full text-left py-2 px-2 text-sm font-medium text-gray-200 hover:text-cyan-400 transition"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleNoOp}
                    className="cm-pill-btn w-full rounded-full py-2.5 text-sm font-semibold"
                  >
                    Get in touch
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* ====================================================================
          SECTION 1: HERO BANNER (Centered 3D Wave Mesh & Glowing Typography)
          ==================================================================== */}
      <section className="relative min-h-[92vh] w-full flex flex-col items-center justify-center text-center px-5 pt-32 pb-20 overflow-hidden">
        {/* Ambient Radial Glows */}
        <div
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[260px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(34,211,238,0.22) 0%, rgba(11,11,22,0) 70%)',
            filter: 'blur(90px)',
          }}
        />
        <div
          className="absolute top-1/3 right-1/5 w-[480px] h-[240px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(251,146,60,0.18) 0%, rgba(11,11,22,0) 70%)',
            filter: 'blur(95px)',
          }}
        />

        {/* Animated 3D Dotted Wave Terrain Canvas */}
        <HeroWaveCanvas />

        {/* Bottom Vignette Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090a14]/30 via-transparent to-[#090a14] pointer-events-none" />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
        >
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-[68px] leading-[1.1] tracking-tight text-white mb-6">
            Smart Engineering
            <br />
            <span>Seamlessly </span>
            <span className="cm-text-gradient">Connected</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300/90 max-w-xl font-normal leading-relaxed mb-10">
            NEXZORA is a technology company at the forefront of automotive
            software, robotics, IoT, and AI-driven innovations
          </p>

          <button
            type="button"
            onClick={handleNoOp}
            className="cm-pill-btn rounded-full px-9 py-3.5 text-sm sm:text-base font-semibold tracking-wide cursor-pointer"
          >
            Get in touch
          </button>
        </motion.div>
      </section>

      {/* ====================================================================
          SECTION 2: TWO-COLUMN INNOVATION HUB INTRO & GLOWING 3D GEOMETRY
          (No "At NEXZORA" or "Intro & Geometry" headers — direct clean layout)
          ==================================================================== */}
      <section className="relative w-full py-24 sm:py-32 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-14">
          {/* Left Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[52%]"
          >
            <p className="text-2xl sm:text-3xl lg:text-[34px] font-light text-gray-100 leading-[1.42] tracking-tight">
              NEXZORA is a trusted innovation hub where businesses can think,
              plan, develop, prototype, test, and integrate new products with
              cutting-edge engineering
            </p>
          </motion.div>

          {/* Right Glowing 3D Geometric Tetrahedrons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 32 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[48%] flex justify-center items-center relative"
          >
            {/* Ambient Dual-Tone Backlight behind Pyramids */}
            <div
              className="absolute w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(34,211,238,0.26) 0%, rgba(251,146,60,0.22) 55%, rgba(9,10,20,0) 75%)',
                filter: 'blur(55px)',
              }}
            />

            <svg
              className="w-full max-w-[440px] h-auto overflow-visible"
              viewBox="0 0 460 360"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="edgeCyanOrange" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="55%" stopColor="#67e8f9" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
                <linearGradient id="faceFillMain" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(34, 211, 238, 0.22)" />
                  <stop offset="100%" stopColor="rgba(15, 23, 42, 0.55)" />
                </linearGradient>
                <linearGradient id="faceFillRight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(251, 146, 60, 0.24)" />
                  <stop offset="100%" stopColor="rgba(15, 23, 42, 0.65)" />
                </linearGradient>
                <filter id="neonGlow" x="-25%" y="-25%" width="150%" height="150%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Center Large 3D Tetrahedron */}
              <g className="animate-pyramid-slow" filter="url(#neonGlow)">
                {/* Left Face */}
                <polygon
                  points="265,65 185,215 255,190"
                  fill="url(#faceFillMain)"
                  stroke="url(#edgeCyanOrange)"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
                {/* Right Face */}
                <polygon
                  points="265,65 255,190 315,235"
                  fill="url(#faceFillRight)"
                  stroke="url(#edgeCyanOrange)"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
                {/* Bottom Base Edge */}
                <line
                  x1="185"
                  y1="215"
                  x2="315"
                  y2="235"
                  stroke="url(#edgeCyanOrange)"
                  strokeWidth="2.2"
                />
              </g>

              {/* Left Medium 3D Tetrahedron */}
              <g className="animate-pyramid-delayed" filter="url(#neonGlow)">
                <polygon
                  points="135,145 70,200 130,205"
                  fill="url(#faceFillMain)"
                  stroke="url(#edgeCyanOrange)"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <polygon
                  points="135,145 130,205 155,248"
                  fill="url(#faceFillRight)"
                  stroke="url(#edgeCyanOrange)"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <line
                  x1="70"
                  y1="200"
                  x2="155"
                  y2="248"
                  stroke="url(#edgeCyanOrange)"
                  strokeWidth="1.8"
                />
              </g>

              {/* Bottom-Left 3D Tetrahedron */}
              <g className="animate-pyramid-slow" filter="url(#neonGlow)">
                <polygon
                  points="162,238 175,325 202,282"
                  fill="url(#faceFillMain)"
                  stroke="url(#edgeCyanOrange)"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <polygon
                  points="162,238 202,282 246,272"
                  fill="url(#faceFillRight)"
                  stroke="url(#edgeCyanOrange)"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <line
                  x1="175"
                  y1="325"
                  x2="246"
                  y2="272"
                  stroke="url(#edgeCyanOrange)"
                  strokeWidth="1.8"
                />
              </g>

              {/* Bottom-Right 3D Tetrahedron */}
              <g className="animate-pyramid-delayed" filter="url(#neonGlow)">
                <polygon
                  points="355,222 315,242 330,305"
                  fill="url(#faceFillMain)"
                  stroke="url(#edgeCyanOrange)"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <polygon
                  points="355,222 330,305 385,285"
                  fill="url(#faceFillRight)"
                  stroke="url(#edgeCyanOrange)"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </g>

              {/* Top-Right Medium Tetrahedron */}
              <g className="animate-pyramid-slow">
                <polygon
                  points="330,108 320,175 352,155"
                  fill="url(#faceFillMain)"
                  stroke="url(#edgeCyanOrange)"
                  strokeWidth="1.4"
                />
                <polygon
                  points="330,108 352,155 380,148"
                  fill="url(#faceFillRight)"
                  stroke="url(#edgeCyanOrange)"
                  strokeWidth="1.4"
                />
                <line
                  x1="320"
                  y1="175"
                  x2="380"
                  y2="148"
                  stroke="url(#edgeCyanOrange)"
                  strokeWidth="1.4"
                />
              </g>

              {/* Top-Left Small Floating Tetrahedron */}
              <g className="animate-pyramid-delayed">
                <polygon
                  points="206,75 170,108 198,112"
                  fill="url(#faceFillMain)"
                  stroke="url(#edgeCyanOrange)"
                  strokeWidth="1.3"
                />
                <polygon
                  points="206,75 198,112 216,130"
                  fill="url(#faceFillRight)"
                  stroke="url(#edgeCyanOrange)"
                  strokeWidth="1.3"
                />
                <line
                  x1="170"
                  y1="108"
                  x2="216"
                  y2="130"
                  stroke="url(#edgeCyanOrange)"
                  strokeWidth="1.3"
                />
              </g>

              {/* Bottom Small Floating Accent */}
              <g className="animate-pyramid-slow" opacity="0.8">
                <polygon
                  points="282,282 252,306 284,324"
                  fill="url(#faceFillMain)"
                  stroke="#67e8f9"
                  strokeWidth="1.2"
                />
                <line x1="282" y1="282" x2="274" y2="308" stroke="#67e8f9" strokeWidth="1.1" />
              </g>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 3: FULL-VIEWPORT KEYWORD-HIGHLIGHTED MANIFESTO
          ==================================================================== */}
      <section className="relative w-full py-28 sm:py-36 px-6 sm:px-16 lg:px-32 flex items-center justify-center text-center overflow-hidden">
        {/* Soft Top Center Radial Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[620px] h-[240px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.16) 0%, rgba(9,10,20,0) 70%)',
            filter: 'blur(80px)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto px-4 sm:px-10 py-8"
        >
          {/* CairoMotive Signature Angled Corner Bracket SVG */}
          <svg
            className="absolute -top-2 right-0 sm:right-2 w-10 h-10 sm:w-12 sm:h-12 pointer-events-none"
            viewBox="0 0 48 48"
            fill="none"
          >
            <defs>
              <linearGradient id="cornerBracketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
            <path
              d="M6 6 H42 V42"
              stroke="url(#cornerBracketGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-2xl sm:text-4xl lg:text-[44px] leading-[1.35] tracking-tight font-normal text-[#8e96a8]">
            <span>We aspire to drive transformation in </span>
            <span className="text-white font-bold">embedded systems</span>
            <span> and </span>
            <span className="text-white font-bold">intelligent software</span>
            <span> delivering </span>
            <span className="text-[#38e8ff] font-bold">innovative scalable</span>
            <span> solutions that empower our clients to achieve their goals with </span>
            <span className="text-[#38e8ff] font-bold">agility</span>
            <span>, </span>
            <span className="text-[#38e8ff] font-bold">excellence</span>
            <span>, and </span>
            <span className="text-[#38e8ff] font-bold">impact</span>
            <span>.</span>
          </p>
        </motion.div>
      </section>

      {/* ====================================================================
          SECTION 4: GLASSMORPHIC SERVICES CARDS GRID
          (No "Services" pill tag or heading text above the cards)
          ==================================================================== */}
      <section className="relative w-full pt-8 pb-28 px-6 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Automotive */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            onClick={handleNoOp}
            className="cm-service-card rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer group"
          >
            <div className="w-full h-40 flex items-center justify-center mb-4 relative">
              <div className="absolute w-28 h-28 rounded-full bg-cyan-400/15 blur-2xl group-hover:bg-cyan-400/25 transition-all" />
              {/* Isometric Glowing Wireframe Car + ECU Chip Illustration */}
              <svg className="w-36 h-32 overflow-visible" viewBox="0 0 160 120" fill="none">
                {/* Wireframe Vehicle Silhouette */}
                <path
                  d="M22 72 L45 42 L95 34 L128 48 L138 66 L78 88 L22 72 Z"
                  fill="rgba(34,211,238,0.12)"
                  stroke="#38e8ff"
                  strokeWidth="1.6"
                />
                <path
                  d="M48 44 L88 38 L112 49 L68 58 Z"
                  fill="rgba(34,211,238,0.22)"
                  stroke="#67e8f9"
                  strokeWidth="1.2"
                />
                <ellipse cx="46" cy="78" rx="10" ry="10" fill="#0d1526" stroke="#38e8ff" strokeWidth="1.8" />
                <ellipse cx="96" cy="78" rx="10" ry="10" fill="#0d1526" stroke="#38e8ff" strokeWidth="1.8" />
                {/* Foreground ECU Microchip */}
                <polygon
                  points="108,76 132,66 150,76 126,86"
                  fill="#0f172a"
                  stroke="#67e8f9"
                  strokeWidth="1.5"
                />
                <line x1="104" y1="80" x2="98" y2="84" stroke="#38e8ff" strokeWidth="1.4" />
                <line x1="112" y1="84" x2="106" y2="88" stroke="#38e8ff" strokeWidth="1.4" />
                <line x1="120" y1="88" x2="114" y2="92" stroke="#38e8ff" strokeWidth="1.4" />
                <line x1="136" y1="84" x2="144" y2="89" stroke="#38e8ff" strokeWidth="1.4" />
                <line x1="144" y1="80" x2="152" y2="85" stroke="#38e8ff" strokeWidth="1.4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Automotive</h3>
            <p className="text-xs sm:text-[13px] font-medium text-gray-200 mb-3 leading-snug">
              Autonomous vehicles &amp; smart mobility solutions
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              End-to-end automotive software, AUTOSAR architecture, digital cockpits, ADAS, and functional safety for modern vehicles.
            </p>
          </motion.div>

          {/* Card 2: IoT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onClick={handleNoOp}
            className="cm-service-card rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer group"
          >
            <div className="w-full h-40 flex items-center justify-center mb-4 relative">
              <div className="absolute w-28 h-28 rounded-full bg-cyan-400/15 blur-2xl group-hover:bg-cyan-400/25 transition-all" />
              {/* Glowing Isometric Cloud Node Cube Network */}
              <svg className="w-36 h-32 overflow-visible" viewBox="0 0 160 120" fill="none">
                {/* Outer Hexagon Node Ring */}
                <polygon
                  points="80,14 128,38 128,86 80,110 32,86 32,38"
                  stroke="#38e8ff"
                  strokeWidth="1.4"
                  fill="rgba(34,211,238,0.04)"
                />
                <line x1="80" y1="14" x2="80" y2="110" stroke="#38e8ff" strokeWidth="0.9" strokeDasharray="3 3" opacity="0.6" />
                <line x1="32" y1="38" x2="128" y2="86" stroke="#38e8ff" strokeWidth="0.9" strokeDasharray="3 3" opacity="0.6" />
                <line x1="128" y1="38" x2="32" y2="86" stroke="#38e8ff" strokeWidth="0.9" strokeDasharray="3 3" opacity="0.6" />
                {/* Corner Node Cubes */}
                {[
                  [80, 14],
                  [128, 38],
                  [128, 86],
                  [80, 110],
                  [32, 86],
                  [32, 38],
                ].map(([cx, cy], idx) => (
                  <rect
                    key={idx}
                    x={cx - 5}
                    y={cy - 5}
                    width="10"
                    height="10"
                    rx="2"
                    fill="#0d1b2a"
                    stroke="#67e8f9"
                    strokeWidth="1.5"
                  />
                ))}
                {/* Center Glowing Cloud */}
                <path
                  d="M62 70 H98 A12 12 0 0 0 100 47 A16 16 0 0 0 69 43 A13 13 0 0 0 62 70 Z"
                  fill="rgba(56,232,255,0.22)"
                  stroke="#67e8f9"
                  strokeWidth="1.8"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">IoT</h3>
            <p className="text-xs sm:text-[13px] font-medium text-gray-200 mb-3 leading-snug">
              Connected devices &amp; cloud data networks
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Interconnected smart nodes, sensor integration, and secure cloud telemetry that automate operations in real time.
            </p>
          </motion.div>

          {/* Card 3: Robotics */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            onClick={handleNoOp}
            className="cm-service-card rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer group"
          >
            <div className="w-full h-40 flex items-center justify-center mb-4 relative">
              <div className="absolute w-28 h-28 rounded-full bg-cyan-400/15 blur-2xl group-hover:bg-cyan-400/25 transition-all" />
              {/* Glowing Articulated Robotic Arm & LiDAR Puck */}
              <svg className="w-36 h-32 overflow-visible" viewBox="0 0 160 120" fill="none">
                {/* Base Pedestal */}
                <ellipse cx="62" cy="96" rx="22" ry="8" fill="#112236" stroke="#38e8ff" strokeWidth="1.6" />
                <path d="M46 94 L50 76 H74 L78 94" fill="rgba(34,211,238,0.16)" stroke="#38e8ff" strokeWidth="1.5" />
                {/* Lower Arm */}
                <path d="M56 74 L48 40 L62 34 L70 72" fill="rgba(34,211,238,0.2)" stroke="#67e8f9" strokeWidth="1.6" />
                <circle cx="56" cy="36" r="7" fill="#0d1b2a" stroke="#67e8f9" strokeWidth="1.8" />
                {/* Upper Forearm */}
                <path d="M62 32 L98 20 L103 29 L64 41" fill="rgba(34,211,238,0.22)" stroke="#67e8f9" strokeWidth="1.6" />
                <circle cx="100" cy="25" r="5" fill="#0d1b2a" stroke="#67e8f9" strokeWidth="1.6" />
                {/* Gripper Claw */}
                <path d="M102 28 L108 46 M108 46 L102 55 M108 46 L114 55" stroke="#67e8f9" strokeWidth="1.8" strokeLinecap="round" />
                {/* LiDAR / Sensor Cylinder */}
                <ellipse cx="110" cy="84" rx="13" ry="5" fill="#38e8ff" opacity="0.8" />
                <path d="M97 84 V98 C97 101 123 101 123 98 V84" fill="rgba(34,211,238,0.18)" stroke="#38e8ff" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Robotics</h3>
            <p className="text-xs sm:text-[13px] font-medium text-gray-200 mb-3 leading-snug">
              Industrial automation &amp; motion control
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Advanced robotic systems, ROS 2 middleware, autonomous navigation, and precision sensor fusion for smart machines.
            </p>
          </motion.div>

          {/* Card 4: AI */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            onClick={handleNoOp}
            className="cm-service-card rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer group"
          >
            <div className="w-full h-40 flex items-center justify-center mb-4 relative">
              <div className="absolute w-28 h-28 rounded-full bg-cyan-400/15 blur-2xl group-hover:bg-cyan-400/25 transition-all" />
              {/* Glowing Isometric AI Processor Chip & Neural Mesh */}
              <svg className="w-36 h-32 overflow-visible" viewBox="0 0 160 120" fill="none">
                {/* Neural Mesh Dome */}
                <path
                  d="M42 58 C42 26, 118 26, 118 58"
                  stroke="#67e8f9"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                  fill="rgba(56,232,255,0.08)"
                />
                <path
                  d="M54 54 C54 32, 106 32, 106 54"
                  stroke="#fb923c"
                  strokeWidth="1.1"
                  strokeDasharray="2 3"
                  opacity="0.75"
                />
                {/* Isometric AI Processor Base */}
                <polygon
                  points="80,46 124,68 80,92 36,68"
                  fill="rgba(15,23,42,0.9)"
                  stroke="#38e8ff"
                  strokeWidth="1.8"
                />
                <polygon
                  points="80,52 112,68 80,85 48,68"
                  fill="rgba(34,211,238,0.18)"
                  stroke="#67e8f9"
                  strokeWidth="1.4"
                />
                <text
                  x="80"
                  y="73"
                  textAnchor="middle"
                  fill="#e0f2fe"
                  fontSize="14"
                  fontWeight="bold"
                  letterSpacing="1"
                >
                  AI
                </text>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI</h3>
            <p className="text-xs sm:text-[13px] font-medium text-gray-200 mb-3 leading-snug">
              Artificial intelligence &amp; machine learning
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Deep neural networks, computer vision, and edge AI processing solutions that turn complex data into intelligent action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5: CORE VALUES (5-CARD ASYMMETRIC BENTO GRID)
          ==================================================================== */}
      <section className="relative w-full py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
        {/* Ambient Right Blur */}
        <div
          className="absolute top-12 right-0 w-[440px] h-[220px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(36,94,254,0.24) 0%, rgba(9,10,20,0) 70%)',
            filter: 'blur(90px)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="text-sm sm:text-base font-medium text-[#38e8ff] mb-2">
            What we Stand for
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Our core values are
          </h2>
        </motion.div>

        <div className="mx-auto max-w-6xl space-y-6">
          {/* Top Row: 3 Vertical Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 01 Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="cm-bento-card rounded-2xl p-7 h-[270px] flex flex-col justify-between"
            >
              <div className="flex justify-center pt-2">
                <svg className="w-24 h-24 text-[#38e8ff]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="50,12 88,50 50,88 12,50" fill="rgba(56,232,255,0.08)" />
                  <polygon points="50,24 76,50 50,76 24,50" strokeDasharray="3 3" />
                  <line x1="50" y1="12" x2="50" y2="88" opacity="0.5" />
                  <line x1="12" y1="50" x2="88" y2="50" opacity="0.5" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#38e8ff] mb-1">01</div>
                <div className="text-xl font-bold text-white mb-1.5">Commitment</div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Dedicated ownership of every client roadmap, engineering milestone, and long-term success.
                </p>
              </div>
            </motion.div>

            {/* 02 Trust */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="cm-bento-card rounded-2xl p-7 h-[270px] flex flex-col justify-between"
            >
              <div className="flex justify-center pt-2">
                <svg className="w-24 h-24 text-[#38e8ff]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="20" y="20" width="38" height="38" rx="4" fill="rgba(56,232,255,0.08)" />
                  <rect x="42" y="42" width="38" height="38" rx="4" fill="rgba(56,232,255,0.08)" />
                  <line x1="20" y1="20" x2="80" y2="80" strokeDasharray="3 3" opacity="0.6" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#38e8ff] mb-1">02</div>
                <div className="text-xl font-bold text-white mb-1.5">Trust</div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Built on transparency, predictable delivery, and open collaboration at every stage.
                </p>
              </div>
            </motion.div>

            {/* 03 Agility */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="cm-bento-card rounded-2xl p-7 h-[270px] flex flex-col justify-between"
            >
              <div className="flex justify-center pt-2">
                <svg className="w-24 h-24 text-[#38e8ff]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="50,14 86,76 14,76" fill="rgba(56,232,255,0.08)" />
                  <polygon points="50,30 72,68 28,68" strokeDasharray="3 3" />
                  <circle cx="50" cy="54" r="5" fill="currentColor" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#38e8ff] mb-1">03</div>
                <div className="text-xl font-bold text-white mb-1.5">Agility</div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Moving rapidly from concept to prototype and adapting seamlessly to evolving requirements.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: 2 Wide Horizontal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 04 Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="cm-bento-card rounded-2xl p-7 min-h-[185px] flex items-center justify-between gap-6"
            >
              <div className="max-w-xs">
                <div className="text-xs font-semibold text-[#38e8ff] mb-1">04</div>
                <div className="text-xl font-bold text-white mb-2">Excellence</div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Uncompromising engineering quality, safety compliance, and precision across hardware and software.
                </p>
              </div>
              <svg className="w-28 h-28 text-[#38e8ff] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="50,10 86,30 86,70 50,90 14,70 14,30" fill="rgba(56,232,255,0.08)" />
                <polygon points="50,24 74,38 74,62 50,76 26,62 26,38" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="5" fill="currentColor" />
              </svg>
            </motion.div>

            {/* 05 Knowledge Sharing */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="cm-bento-card rounded-2xl p-7 min-h-[185px] flex items-center justify-between gap-6"
            >
              <div className="max-w-xs">
                <div className="text-xs font-semibold text-[#38e8ff] mb-1">05</div>
                <div className="text-xl font-bold text-white mb-2">Knowledge Sharing</div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Empowering client and internal teams through shared expertise, documentation, and hands-on mentorship.
                </p>
              </div>
              <svg className="w-28 h-28 text-[#38e8ff] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="38" cy="52" r="22" fill="rgba(56,232,255,0.06)" />
                <circle cx="62" cy="52" r="22" fill="rgba(56,232,255,0.06)" />
                <circle cx="50" cy="34" r="22" strokeDasharray="3 3" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 6: WATERMARKED "WANT TO KNOW MORE?" CTA BANNER
          ==================================================================== */}
      <section className="w-full py-20 px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-6xl rounded-3xl bg-[#181b28] border border-white/10 px-6 py-20 sm:py-24 flex flex-col items-center justify-center text-center overflow-hidden shadow-2xl"
        >
          {/* Repeating Subtle Geometric Monogram Watermark Pattern */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-around">
            <svg className="w-72 h-72" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="2">
              <path d="M15 85V15L35 15L65 65V15H85V85L65 85L35 35V85H15Z" />
            </svg>
            <svg className="w-72 h-72 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="2">
              <path d="M15 85V15L35 15L65 65V15H85V85L65 85L35 35V85H15Z" />
            </svg>
            <svg className="w-72 h-72 hidden lg:block" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="2">
              <path d="M15 85V15L35 15L65 65V15H85V85L65 85L35 35V85H15Z" />
            </svg>
          </div>

          <div className="relative z-10 max-w-xl space-y-4">
            <div className="text-base sm:text-lg font-semibold text-[#38e8ff]">
              Want to know more?
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Send us and we will get back to you
            </h3>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleNoOp}
                className="cm-pill-btn rounded-full px-10 py-3.5 text-sm sm:text-base font-semibold cursor-pointer"
              >
                Get in touch
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ====================================================================
          SECTION 7: CAIROMOTIVE-STYLE DARK FOOTER
          ==================================================================== */}
      <footer className="bg-[#070811] border-t border-white/10 pt-16 pb-10 px-6 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Column 1: Original Nexzora Logo */}
          <div className="space-y-4">
            <a href="#top" onClick={handleNoOp} className="inline-block">
              <img
                src="/logo-dark.png"
                alt="NEXZORA"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </a>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              Smart engineering seamlessly connected across automotive software, IoT, robotics, and AI.
            </p>
          </div>

          {/* Column 2: Industries */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Industries</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {['Automotive', 'IoT', 'Robotics', 'AI'].map((item) => (
                <li key={item}>
                  <a
                    href="#industries"
                    onClick={handleNoOp}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {['Services', 'Industries', 'Company', 'Careers'].map((item) => (
                <li key={item}>
                  <a
                    href="#links"
                    onClick={handleNoOp}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-2.5 text-xs text-gray-400">
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <div>
              <a
                href="#email"
                onClick={handleNoOp}
                className="text-gray-200 hover:text-cyan-400 transition-colors"
              >
                info@nexzora.com
              </a>
            </div>
            <div>Kochi, Kerala, India</div>
            <div>Dallas, TX, USA</div>
            <div className="pt-2 flex items-center gap-3">
              {/* Social Icons (Non-functional) */}
              {['LinkedIn', 'X', 'GitHub'].map((net) => (
                <button
                  key={net}
                  type="button"
                  onClick={handleNoOp}
                  aria-label={net}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400/50 transition cursor-pointer"
                >
                  <span className="text-[11px] font-bold">{net[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <span>© 2026 NEXZORA Technologies. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#privacy" onClick={handleNoOp} className="hover:text-gray-300 transition">
              Privacy Policy
            </a>
            <a href="#terms" onClick={handleNoOp} className="hover:text-gray-300 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

