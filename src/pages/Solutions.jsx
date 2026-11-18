import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTABanner from '../components/CTABanner';
import { SOLUTIONS_DATA } from '../data/offeringsData';

/* ============================================
   Solutions Hub Page
   Automotive, SDV, ADAS, IVI, BMS, Safety/Cyber,
   Vision & Agentic AI, Robotics & IoT Solutions
   ============================================ */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay },
  }),
};

const HERO_METRICS = [
  { value: '8 Domains', label: 'Turnkey Solutions' },
  { value: '6-Layer', label: 'SDV & AI Stacks' },
  { value: 'ASIL D / SIL 3', label: 'Safety Engineered' },
  { value: 'OEM & Tier-1', label: 'Production Proven' },
];

const TECH_ECOSYSTEM = [
  {
    category: 'Operating Systems & Middleware',
    items: ['QNX & QNX Hypervisor', 'Android Automotive (AAOS)', 'Automotive Grade Linux (AGL)', 'Classic & Adaptive AUTOSAR', 'ROS 1 & ROS 2', 'FreeRTOS / Zephyr'],
  },
  {
    category: 'AUTOSAR & Verification Toolchains',
    items: ['Vector DaVinci / CANoe', 'Siemens (VSA)', 'ETAS', 'Elektrobit EB tresos', 'dSPACE / VEOS', 'Lauterbach & iSYSTEM'],
  },
  {
    category: 'Silicon & Compute Platforms',
    items: ['Infineon TriCore & Traveo II', 'NXP S32G / S32K', 'Qualcomm Snapdragon', 'NVIDIA Orin & Jetson', 'ARM Cortex & Neoverse', 'STMicroelectronics'],
  },
  {
    category: 'AI, Simulation & Cloud Infrastructure',
    items: ['PyTorch & TensorFlow', 'ONNX & TensorRT', 'OpenCV · CARLA · Gazebo', 'LangGraph · vLLM · MCP', 'AWS · Azure · GCP', 'Docker · K3s · Jenkins'],
  },
];

export default function Solutions() {
  return (
    <>
      {/* ── Section 1: Full-Bleed Hero ── */}
      <section className="relative pt-[96px] pb-18 lg:pt-[116px] lg:pb-24 bg-navy-950 overflow-hidden text-white min-h-[560px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/services-hero.jpg"
            alt="NEXZORA Integrated Engineering Solutions"
            className="w-full h-full object-cover object-right lg:object-center opacity-55"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(6,27,46,0.98) 0%, rgba(6,27,46,0.92) 45%, rgba(6,27,46,0.55) 75%, rgba(6,27,46,0.25) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(6,27,46,0.4) 0%, transparent 30%, transparent 70%, rgba(6,27,46,0.75) 100%)',
            }}
          />
        </div>

        <div className="relative z-[2] mx-auto max-w-[1320px] px-6 lg:px-10 w-full">
          <div className="max-w-[740px]">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-4"
            >
              NEXZORA Solutions
            </motion.span>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.05}
              className="font-display text-[clamp(2.1rem,4.2vw,3.45rem)] font-bold leading-[1.08] tracking-display text-white"
            >
              Production-Ready{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zenith-400 via-zenith-200 to-white">
                Engineering Solutions
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.12}
              className="mt-5 text-[16px] lg:text-[17.5px] leading-relaxed text-white/75 max-w-[640px]"
            >
              End-to-end technology stacks across Software-Defined Vehicles, ADAS, Digital Cockpits, EV Powertrain &amp; BMS, Functional Safety, Vision &amp; Agentic AI, Robotics, and Connected IoT.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.18}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#solutions-catalog"
                className="px-6 py-3.5 rounded-lg bg-zenith hover:bg-zenith-500 text-white text-[14px] font-semibold tracking-wide shadow-[0_4px_20px_rgba(217,106,26,0.35)] transition-all duration-300 hover:translate-y-[-1px]"
              >
                Explore Solutions
              </a>
              <Link
                to="/company#contact"
                className="px-6 py-3.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white text-[14px] font-medium tracking-wide backdrop-blur-sm transition-all duration-300"
              >
                Schedule Technical Briefing
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.26}
              className="mt-10 pt-7 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-[700px]"
            >
              {HERO_METRICS.map((metric) => (
                <div key={metric.label} className="min-w-0">
                  <div className="font-display text-[18px] sm:text-[20px] font-bold text-white tracking-tight whitespace-nowrap">
                    {metric.value}
                  </div>
                  <div className="text-[10.5px] text-white/55 uppercase tracking-wider mt-0.5 font-medium whitespace-nowrap truncate">
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Solutions Catalog Grid (All 8 Solutions -> Subpages) ── */}
      <section className="py-16 lg:py-22 bg-surface" id="solutions-catalog">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="max-w-[720px] mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-2"
            >
              Solution Portfolio
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.6rem,3.2vw,2.35rem)] font-bold tracking-display text-navy-950 leading-tight mb-3"
            >
              Specialized Technology Stacks &amp; Platforms
            </motion.h2>
            <p className="text-[15px] text-text-secondary leading-relaxed">
              Select any solution below to explore architecture layers, capabilities, reference deployments, and standards coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SOLUTIONS_DATA.map((solution, i) => (
              <motion.div
                key={solution.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: (i % 4) * 0.05 }}
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-navy-100 bg-white hover:border-zenith/40 hover:shadow-[0_14px_38px_rgba(6,27,46,0.08)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="font-display text-[15px] font-bold text-zenith">
                      0{i + 1}
                    </span>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-navy-50 text-navy-700 border border-navy-100">
                      {solution.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-[20px] sm:text-[22px] font-bold text-navy-950 mb-2.5 group-hover:text-zenith transition-colors">
                    <Link to={`/solutions/${solution.slug}`} className="focus:outline-none">
                      {solution.title}
                    </Link>
                  </h3>

                  <p className="text-[14px] leading-relaxed text-text-secondary mb-6">
                    {solution.tagline}
                  </p>

                  {/* Key Pillars preview */}
                  <ul className="space-y-2 mb-6 pt-4 border-t border-navy-50">
                    {solution.capabilities.map((cap) => (
                      <li key={cap.title} className="text-[13px] text-navy-800 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-zenith mt-1.5 shrink-0" />
                        <span className="font-medium">{cap.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-navy-100/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {solution.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-alt text-navy-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/solutions/${solution.slug}`}
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-navy-950 group-hover:text-zenith transition-colors shrink-0"
                  >
                    <span>Explore Solution</span>
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Stacks, Controllers & Technology Ecosystem (Dark Accent) ── */}
      <section className="py-16 lg:py-22 bg-navy-950 text-white relative overflow-hidden" id="ecosystem">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,106,26,0.08),transparent_60%)] pointer-events-none" />
        <div className="relative z-[2] mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center max-w-[700px] mx-auto mb-14">
            <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3">
              Techs, Standards &amp; Controllers
            </span>
            <h2 className="font-display text-[clamp(1.6rem,3.2vw,2.35rem)] font-bold tracking-display text-white leading-tight mb-3">
              Built on Industry-Standard Stacks &amp; Silicon
            </h2>
            <p className="text-[14.5px] leading-relaxed text-white/65">
              Production engineering expertise across leading automotive microcontrollers, HPC SoCs, AUTOSAR stacks, robotics simulators, and cloud-native AI infrastructure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TECH_ECOSYSTEM.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-xl bg-white/[0.04] border border-white/10 hover:border-zenith/40 transition-colors"
              >
                <h3 className="text-[13px] font-bold uppercase tracking-wider text-zenith mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-2.5">
                  {group.items.map((tech) => (
                    <li key={tech} className="text-[13.5px] text-white/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zenith/80 shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: CTA ── */}
      <CTABanner
        label="Partner With Us"
        title="Ready to Accelerate Your Product Roadmap?"
        subtitle="Combine our turnkey solutions with dedicated global engineering squads to ship safely and faster."
        primaryText="Get in Touch"
        primaryHref="/company#contact"
        secondaryText="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
