import { motion } from 'framer-motion';
import CTABanner from '../components/CTABanner';

/* ============================================
   Services Page — Precision Engineering & Consulting
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
  { value: '40+', label: 'Silicon Tape-outs' },
  { value: '99.4%', label: 'First-Pass Success' },
  { value: '< 2 Wks', label: 'Squad Ramp-up' },
  { value: 'ISO 26262', label: 'Safety Certified' },
];

const ECOSYSTEM_TOOLS = [
  'Synopsys EDA',
  'Cadence Innovus',
  'ARM Neoverse',
  'RISC-V ISA',
  'AUTOSAR Adaptive',
  'FreeRTOS / Zephyr',
  'PyTorch & TensorRT',
  'ROS 2 & Robotics',
];

const ENGINEERING_SERVICES = [
  {
    id: 'system-design',
    badge: 'Architecture',
    title: 'System Design & Architecture',
    description: 'End-to-end system design from requirements capture to detailed hardware-software partitioning and functional safety architectures.',
    deliverables: ['System Architecture Specification', 'Hardware-Software Partitioning', 'ASIL / Safety Concept Design'],
    tools: ['SysML', 'Enterprise Architect', 'Simulink', 'SystemC'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
      </svg>
    ),
  },
  {
    id: 'vlsi-chip',
    badge: 'Silicon 3nm–28nm',
    title: 'VLSI & Chip Development',
    description: 'Full-flow digital and mixed-signal ASIC/SoC design from RTL coding, logic synthesis, and DFT to physical design and tape-out.',
    deliverables: ['RTL Microarchitecture & IP Integration', 'Static Timing Analysis (STA)', 'GDSII Sign-off & Tape-out'],
    tools: ['Synopsys Fusion', 'Cadence Innovus', 'Verilog/SystemVerilog', 'PrimeTime'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="12" height="12" rx="1.5" />
        <rect x="9" y="9" width="6" height="6" rx="0.5" />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
      </svg>
    ),
  },
  {
    id: 'firmware-embedded',
    badge: 'RTOS & Bare-Metal',
    title: 'Firmware & Embedded Software',
    description: 'Low-level device drivers, custom BSPs, bootloaders, and RTOS ports engineered for high reliability, deterministic timing, and low power.',
    deliverables: ['Custom Board Support Packages (BSP)', 'AUTOSAR MCAL & BSW Layers', 'Zero-Latency Interrupt Handlers'],
    tools: ['C/C++', 'Rust Embedded', 'FreeRTOS', 'Zephyr', 'ARM TrustZone'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
        <path d="M13 5l-2 14" />
      </svg>
    ),
  },
  {
    id: 'verification-validation',
    badge: 'UVM & Formal',
    title: 'Verification & Validation',
    description: 'Comprehensive pre-silicon UVM verification, formal proofs, hardware emulation on FPGA platforms, and automated regression pipelines.',
    deliverables: ['UVM Testbench Architecture', 'Formal Assertion Verification', 'FPGA Prototyping & Emulation'],
    tools: ['Cadence Xcelium', 'Synopsys VCS', 'JasperGold', 'UVM 1.2'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    id: 'ai-ml-engineering',
    badge: 'Edge Acceleration',
    title: 'AI & Edge Machine Learning',
    description: 'Quantization, pruning, and deployment of computer vision and deep learning models onto resource-constrained edge NPUs and MCUs.',
    deliverables: ['Model Quantization (INT8/FP8)', 'Edge Inference Acceleration Engine', 'Real-time Computer Vision Pipelines'],
    tools: ['TensorRT', 'PyTorch', 'ONNX Runtime', 'NVIDIA DeepStream', 'OpenVINO'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 5.5V16a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1.5C6.5 13.5 5 11.5 5 9a7 7 0 0 1 7-7Z" />
        <path d="M9 21h6M10 18v3M14 18v3" />
      </svg>
    ),
  },
  {
    id: 'cloud-devops',
    badge: 'Cloud & Telemetry',
    title: 'Cloud & DevOps Engineering',
    description: 'Cloud-native IoT backends, secure OTA update infrastructure, containerized microservices, and automated CI/CD for embedded systems.',
    deliverables: ['Secure OTA Update Infrastructure', 'IoT Telemetry Pipelines', 'Infrastructure as Code (Terraform)'],
    tools: ['AWS IoT Core', 'Azure IoT', 'Kubernetes', 'Docker', 'Terraform'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 19a4.5 4.5 0 0 1-.42-8.98A7 7 0 0 1 19.5 11a4.5 4.5 0 0 1-1 8.98" />
      </svg>
    ),
  },
];

const LIFECYCLE_STEPS = [
  {
    step: '01',
    phase: 'Architecture & Modeling',
    title: 'System Requirements & Co-Design',
    description: 'Defining PPA targets, hardware-software partitioning, safety concepts, and cycle-accurate architectural modeling.',
    badge: 'Phase 1',
  },
  {
    step: '02',
    phase: 'Implementation',
    title: 'RTL & Firmware Engineering',
    description: 'Digital logic coding, IP subsystem integration, RTOS configuration, and bare-metal driver development.',
    badge: 'Phase 2',
  },
  {
    step: '03',
    phase: 'Verification',
    title: 'UVM & Emulation Closure',
    description: 'Constrained-random testbenches, formal proofs, hardware co-emulation on FPGA, and safety metrics sign-off.',
    badge: 'Phase 3',
  },
  {
    step: '04',
    phase: 'Validation',
    title: 'Silicon Bring-Up & Lab Testing',
    description: 'Post-silicon lab bring-up, signal integrity testing, thermal validation, and hardware-in-the-loop (HIL) testing.',
    badge: 'Phase 4',
  },
  {
    step: '05',
    phase: 'Deployment',
    title: 'Production & Fleet Telemetry',
    description: 'Industrialization support, mass production test vectors, secure OTA deployment, and continuous field telemetry.',
    badge: 'Phase 5',
  },
];

const ENGAGEMENT_MODELS = [
  {
    id: 'dedicated',
    badge: 'Most Popular',
    title: 'Dedicated Engineering Squads',
    tagline: 'Autonomous, cross-functional squads integrated into your roadmap.',
    idealFor: 'Complex multi-year product development and continuous scaling.',
    timeline: 'Ramped up in < 2 weeks',
    features: [
      'Dedicated Tech Lead, RTL, Firmware, and QA Engineers',
      'Direct integration into your Jira, Slack, and Git repositories',
      'Flexible sprint allocation with transparent velocity metrics',
      'IP ownership 100% transferred to client',
    ],
  },
  {
    id: 'project',
    badge: 'Fixed Scope',
    title: 'Turnkey Project Delivery',
    tagline: 'Milestone-based delivery with guaranteed timeline & deliverables.',
    idealFor: 'Well-defined IP blocks, driver development, or tape-out sprints.',
    timeline: 'Milestone-based schedule',
    features: [
      'Fixed-scope contract with defined acceptance criteria',
      'End-to-end management by Nexzora senior architects',
      'Comprehensive documentation and testbench sign-off',
      'Post-delivery warranty and ongoing maintenance support',
    ],
  },
  {
    id: 'staff-aug',
    badge: 'High Flexibility',
    title: 'Specialized Staff Augmentation',
    tagline: 'Elite domain engineers to bridge immediate capability gaps.',
    idealFor: 'Surge capacity during critical tape-outs or tight deadlines.',
    timeline: 'Rapid onboarding (3–7 days)',
    features: [
      'Top senior verification, physical design, and embedded talent',
      'Seamless collaboration with your internal engineering leads',
      'No overhead — full flexibility to scale up or down',
      'Direct timesheet and contribution transparency',
    ],
  },
  {
    id: 'advisory',
    badge: 'Strategic',
    title: 'Architecture & Safety Advisory',
    tagline: 'High-level guidance from seasoned industry fellows.',
    idealFor: 'Pre-silicon architecture review, ISO 26262 audits, & technology strategy.',
    timeline: 'Retainer or 2–6 week audit',
    features: [
      'Independent technical risk assessment and bottleneck analysis',
      'ISO 26262 ASIL D / DO-178C compliance readiness roadmaps',
      'Vendor and foundry selection advisory (TSMC, Intel, Samsung)',
      'Executive engineering council presentations',
    ],
  },
];

const AUDIT_SERVICES = [
  {
    standard: 'ISO 26262 / ASIL A–D',
    domain: 'Automotive Functional Safety',
    description: 'Gap analysis, Hazard Analysis and Risk Assessment (HARA), safety manuals, and independent safety audits for ECUs and automotive SoCs.',
  },
  {
    standard: 'DO-178C & DO-254',
    domain: 'Aerospace & Avionics',
    description: 'Design assurance level (DAL A–E) compliance reviews, structural coverage analysis, and verification artifacts for flight software and silicon.',
  },
  {
    standard: 'IEC 61508 / SIL 1–4',
    domain: 'Industrial & Robotics',
    description: 'Functional safety assessments for industrial automation controllers, robotic workcells, and high-integrity instrumentation.',
  },
  {
    standard: 'Automotive SPICE (A-SPICE)',
    domain: 'Process Maturity',
    description: 'Capability level assessments, process definition, and engineering workflow optimization for automotive software development.',
  },
];

export default function Services() {
  return (
    <>
      {/* ── Section 1: Full-Bleed Image Hero with Gradient Overlay ── */}
      <section className="relative pt-[96px] pb-18 lg:pt-[116px] lg:pb-24 bg-navy-950 overflow-hidden text-white min-h-[580px] flex items-center">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/services-hero.jpg"
            alt="Silicon & Embedded Engineering Laboratory"
            className="w-full h-full object-cover object-right lg:object-center"
          />
          {/* Directional Gradient Overlay: solid navy on the left for text contrast, feathering into high transparency on the right half */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(6,27,46,0.98) 0%, rgba(6,27,46,0.92) 42%, rgba(6,27,46,0.45) 65%, rgba(6,27,46,0.05) 100%)',
            }}
          />
          {/* Soft top/bottom edge blend */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(6,27,46,0.4) 0%, transparent 30%, transparent 70%, rgba(6,27,46,0.65) 100%)',
            }}
          />
        </div>

        <div className="relative z-[2] mx-auto max-w-[1320px] px-6 lg:px-10 w-full">
          <div className="max-w-[720px]">
            {/* Main Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.05}
              className="font-display text-[clamp(2.1rem,4.2vw,3.45rem)] font-bold leading-[1.08] tracking-display text-white"
            >
              From Silicon Architecture to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zenith-400 via-zenith-200 to-white">
                Intelligent Systems
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.12}
              className="mt-5 text-[16px] lg:text-[17.5px] leading-relaxed text-white/75 max-w-[620px]"
            >
              We build dedicated engineering squads and provide strategic technology advisory across VLSI chip design, embedded firmware, real-time edge AI, and mission-critical cloud platforms.
            </motion.p>

            {/* Hero Action Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#engineering"
                className="px-6 py-3.5 rounded-lg bg-zenith hover:bg-zenith-500 text-white text-[14px] font-semibold tracking-wide shadow-[0_4px_20px_rgba(217,106,26,0.35)] transition-all duration-300 hover:translate-y-[-1px]"
              >
                Explore Capabilities
              </a>
              <a
                href="/company#contact"
                className="px-6 py-3.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white text-[14px] font-medium tracking-wide backdrop-blur-sm transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </motion.div>

            {/* Hero Key Metrics Strip */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.28}
              className="mt-10 pt-7 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-[700px]"
            >
              {HERO_METRICS.map((metric) => (
                <div key={metric.label} className="min-w-0">
                  <div className="font-display text-[18px] sm:text-[20px] lg:text-[22px] font-bold text-white tracking-tight whitespace-nowrap">
                    {metric.value}
                  </div>
                  <div className="text-[10.5px] lg:text-[11px] text-white/55 uppercase tracking-wider mt-0.5 font-medium whitespace-nowrap truncate">
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Toolchain & Ecosystem Ribbon (Single Clean Line on Desktop) ── */}
      <section className="py-4.5 bg-surface-alt border-b border-navy-100 overflow-hidden">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6 justify-between">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy-950 shrink-0 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zenith" />
              Toolchains & Ecosystem:
            </div>
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 overflow-x-auto no-scrollbar">
              {ECOSYSTEM_TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="whitespace-nowrap px-2.5 py-1 text-[11.5px] font-medium text-navy-800 bg-white rounded-md border border-navy-200/70 shadow-xs hover:border-zenith/40 hover:text-zenith transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Core Engineering Capabilities Matrix (All 6 Shown Directly) ── */}
      <section className="py-16 lg:py-20 bg-surface" id="engineering">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          {/* Section Header */}
          <div className="max-w-[700px] mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-2"
            >
              Core Engineering Capabilities
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.6rem,3.2vw,2.35rem)] font-bold tracking-display text-navy-950 leading-tight"
            >
              Full-Stack Technical Capabilities
            </motion.h2>
          </div>

          {/* Cards Grid — All 6 cards displayed together */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENGINEERING_SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group relative flex flex-col justify-between p-6 rounded-xl border border-navy-100 bg-white hover:border-zenith/40 hover:shadow-[0_12px_36px_rgba(6,27,46,0.08)] transition-all duration-300"
              >
                {/* Top Bar inside card */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-navy-50 flex items-center justify-center text-navy-900 group-hover:bg-zenith-50 group-hover:text-zenith transition-colors duration-300">
                      {service.icon}
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-navy-50 text-navy-700 border border-navy-100/80">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-[17px] font-bold text-navy-950 mb-2 group-hover:text-zenith transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-text-secondary mb-5">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="mb-5 pt-4 border-t border-navy-50">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-navy-900 block mb-2">
                      Core Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item) => (
                        <li key={item} className="text-[12.5px] text-text-secondary flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-zenith mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tool Tags */}
                <div className="pt-3 border-t border-navy-50 flex flex-wrap gap-1.5">
                  {service.tools.map((t) => (
                    <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-alt text-navy-700">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Engineering Lifecycle / V-Cycle (Dark Accent Section) ── */}
      <section className="py-16 lg:py-22 bg-navy-950 text-white relative overflow-hidden" id="lifecycle">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,106,26,0.08),transparent_60%)] pointer-events-none" />

        <div className="relative z-[2] mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center max-w-[700px] mx-auto mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Delivery Methodology
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.6rem,3.2vw,2.35rem)] font-bold tracking-display text-white leading-tight mb-4"
            >
              The Nexzora Engineering Lifecycle
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              className="text-[14.5px] leading-relaxed text-white/65"
            >
              A disciplined, hardware-software co-design flow engineered to compress tape-out cycles and guarantee safety compliance.
            </motion.p>
          </div>

          {/* 5-Step Process Pipeline */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {LIFECYCLE_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.08 }}
                className="relative p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-zenith/40 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-[22px] font-bold text-zenith-400">
                      {step.step}
                    </span>
                    <span className="text-[10.5px] uppercase tracking-wider font-semibold text-white/50 bg-white/[0.06] px-2 py-0.5 rounded">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-[14.5px] font-semibold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[12.5px] leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-zenith-300/80 font-mono">
                  {step.phase}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Flexible Engagement Models (Informational Matrix, No Buttons) ── */}
      <section className="py-16 lg:py-20 bg-surface-alt border-y border-navy-100" id="engagement-models">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center max-w-[650px] mx-auto mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Collaboration Formats
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.6rem,3.2vw,2.35rem)] font-bold tracking-display text-navy-950 leading-tight mb-3"
            >
              Flexible Engagement Models
            </motion.h2>
            <p className="text-[14.5px] text-text-secondary">
              Whether you require a complete turnkey squad or deep architectural advisory, we tailor our delivery to your roadmap.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGAGEMENT_MODELS.map((model, i) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.06 }}
                className="flex flex-col justify-between p-6 rounded-xl border border-navy-200/70 bg-white hover:border-zenith/50 hover:shadow-[0_8px_30px_rgba(6,27,46,0.06)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10.5px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-zenith-50 text-zenith border border-zenith-200">
                      {model.badge}
                    </span>
                    <span className="text-[11px] font-medium text-navy-400">
                      {model.timeline}
                    </span>
                  </div>

                  <h3 className="text-[16px] font-bold text-navy-950 mb-2">
                    {model.title}
                  </h3>
                  <p className="text-[13px] text-text-secondary leading-relaxed mb-4">
                    {model.tagline}
                  </p>

                  <div className="p-3 rounded-lg bg-surface-alt border border-navy-100/80 mb-5">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-navy-900 block mb-1">
                      Ideal For
                    </span>
                    <p className="text-[12px] text-navy-700 leading-snug">
                      {model.idealFor}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {model.features.map((feature) => (
                      <div key={feature} className="text-[12px] text-text-secondary flex items-start gap-2 leading-relaxed">
                        <svg className="w-4 h-4 text-zenith shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Safety Compliance Audits & Advisory (Light Surface) ── */}
      <section className="py-16 lg:py-20 bg-surface" id="compliance">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Col */}
            <div className="lg:col-span-5">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
              >
                Governance & Safety
              </motion.span>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.05}
                className="font-display text-[clamp(1.5rem,3vw,2.15rem)] font-bold tracking-display text-navy-950 leading-tight mb-4"
              >
                Independent Technical Audits & Compliance
              </motion.h2>
              <p className="text-[14.5px] leading-relaxed text-text-secondary mb-6">
                We perform comprehensive safety and architectural audits to de-risk certification and ensure compliance with strict industry safety standards before tape-out or market release.
              </p>
              <div className="p-4 rounded-xl bg-navy-50 border border-navy-100 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-zenith/15 text-zenith flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[13.5px] font-semibold text-navy-950">Zero-Finding Audit Readiness</h4>
                  <p className="text-[12px] text-text-secondary mt-0.5">
                    Detailed gap assessment reports accompanied by actionable remediation work packages.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Col: 4 Audit Cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {AUDIT_SERVICES.map((audit, i) => (
                <motion.div
                  key={audit.standard}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.05 }}
                  className="p-5 rounded-xl bg-white border border-navy-100 hover:border-zenith/30 transition-all shadow-xs"
                >
                  <span className="inline-block text-[11px] font-bold text-zenith tracking-wider uppercase mb-1">
                    {audit.domain}
                  </span>
                  <h3 className="text-[15px] font-bold text-navy-950 mb-2">
                    {audit.standard}
                  </h3>
                  <p className="text-[12.5px] leading-relaxed text-text-secondary">
                    {audit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: CTA ── */}
      <CTABanner
        label="Start a Project"
        title="Let's Build Something Exceptional"
        subtitle="Tell us about your engineering challenge. We'll assemble the right team and engagement model."
        primaryText="Get in Touch"
        primaryHref="/company#contact"
        secondaryText="View Industries"
        secondaryHref="/industries"
      />
    </>
  );
}
