import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTABanner from '../components/CTABanner';

/* ============================================
   Industries Page — Bespoke Domain Engineering
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
  { value: '6+', label: 'Regulated Domains' },
  { value: 'ASIL D / DAL A', label: 'Safety Integrity' },
  { value: 'Tier-1 & OEM', label: 'Production Grade' },
  { value: '100%', label: 'IP Transferred' },
];

const INDUSTRIES_DATA = [
  {
    id: 'automotive',
    label: 'Automotive & Mobility',
    badge: 'ISO 26262 ASIL D',
    headline: 'Software-defined vehicles, ADAS perception, and 800V electrification.',
    pillars: [
      {
        num: '01',
        title: 'ADAS & Sensor Fusion',
        desc: 'Deterministic multi-camera and radar perception pipelines on heterogenous SoCs.',
      },
      {
        num: '02',
        title: '800V Powertrain & BMS',
        desc: 'High-voltage safety monitoring and state estimation firmware for EV battery packs.',
      },
      {
        num: '03',
        title: 'AUTOSAR Stacks & OTA',
        desc: 'Classic & Adaptive MCAL integration with secure SOME/IP over-the-air update flows.',
      },
    ],
    chips: ['ISO 26262 ASIL D', 'AUTOSAR 4.4', 'CAN-FD / SOME/IP', 'A-SPICE Level 3'],
  },
  {
    id: 'semiconductor',
    label: 'Semiconductor & Silicon',
    badge: '3nm to 28nm Nodes',
    headline: 'Silicon engineering from microarchitecture to physical design & tape-out.',
    pillars: [
      {
        num: '01',
        title: 'RTL & Microarchitecture',
        desc: 'High-throughput RISC-V and ARM SoC subsystems with AMBA AXI/CHI interconnects.',
      },
      {
        num: '02',
        title: 'UVM Verification Closure',
        desc: 'Constrained-random testbenches, formal proofs, and hardware emulation on FPGA farms.',
      },
      {
        num: '03',
        title: 'Physical Design & Timing',
        desc: 'CTS, power grid synthesis, and sign-off timing closure at advanced FinFET & GAA nodes.',
      },
    ],
    chips: ['TSMC 3nm–28nm', 'UVM 1.2', 'PCIe Gen 5/6', 'Synopsys & Cadence'],
  },
  {
    id: 'robotics',
    label: 'Industrial & Robotics',
    badge: 'IEC 61508 SIL 3',
    headline: 'Real-time motion control, autonomous robotics, and smart edge IoT.',
    pillars: [
      {
        num: '01',
        title: 'Autonomous Mobile Robots',
        desc: 'LiDAR SLAM navigation, 3D obstacle avoidance, and multi-robot fleet dispatching.',
      },
      {
        num: '02',
        title: 'Multi-Axis Motion Control',
        desc: 'Field-Oriented Control (FOC) for PMSM/BLDC motors with sub-millisecond servo sync.',
      },
      {
        num: '03',
        title: 'Industrial Fieldbus & IIoT',
        desc: 'Deterministic EtherCAT slave nodes, OPC-UA gateways, and edge predictive telemetry.',
      },
    ],
    chips: ['ROS 2 Humble', 'EtherCAT & OPC-UA', 'IEC 61508 SIL 3', 'ISO 13849 PL e'],
  },
  {
    id: 'aerospace',
    label: 'Aerospace & Defense',
    badge: 'DO-178C DAL A',
    headline: 'Deterministic flight-critical avionics and radiation-tolerant computing.',
    pillars: [
      {
        num: '01',
        title: 'Flight Control Software',
        desc: 'Deterministic Level A control loops with ARINC 653 space-and-time partitioned RTOS.',
      },
      {
        num: '02',
        title: 'DO-254 FPGA Hardware',
        desc: 'Safety-critical FPGA logic for flight computers and displays with full artifact traceability.',
      },
      {
        num: '03',
        title: 'Spacecraft Telemetry & Comms',
        desc: 'Software-Defined Radio waveforms and SpaceWire bus firmware for orbital systems.',
      },
    ],
    chips: ['DO-178C DAL A', 'DO-254 Hardware', 'ARINC 429 / 653', 'MIL-STD-1553'],
  },
  {
    id: 'energy',
    label: 'Energy & EV Infrastructure',
    badge: 'ISO 15118 V2G',
    headline: 'Megawatt EV charging, grid-scale storage, and power conversion firmware.',
    pillars: [
      {
        num: '01',
        title: 'DC Fast Charging (EVSE)',
        desc: 'ISO 15118 Plug & Charge software stacks and OCPP 2.0.1 cloud fleet management.',
      },
      {
        num: '02',
        title: 'Grid-Scale BESS Master',
        desc: 'Multi-rack BMS master controllers with thermal runaway prediction algorithms.',
      },
      {
        num: '03',
        title: 'SiC & GaN Power Inverters',
        desc: 'High-frequency switching control, grid-forming algorithms, and bidirectional V2G.',
      },
    ],
    chips: ['ISO 15118-20', 'OCPP 2.0.1', 'IEC 61850', 'Silicon Carbide (SiC)'],
  },
  {
    id: 'technology',
    label: 'Cloud & Digital Platforms',
    badge: 'Enterprise SOC 2',
    headline: 'Cloud-native backends, streaming IoT telemetry, and DevOps platform scale.',
    pillars: [
      {
        num: '01',
        title: 'High-Scale IoT Ingestion',
        desc: 'Distributed event streaming pipelines handling billions of device telemetry events.',
      },
      {
        num: '02',
        title: 'Microservices & Mesh',
        desc: 'Kubernetes orchestration, zero-trust Istio service meshes, and automated canary rollouts.',
      },
      {
        num: '03',
        title: 'Fleet Management & OTA',
        desc: 'Cryptographically signed delta firmware distribution and remote diagnostics.',
      },
    ],
    chips: ['Kubernetes & Go', 'Apache Kafka', 'Terraform IaC', 'SOC 2 Type II'],
  },
];

const COMPLIANCE_FRAMEWORKS = [
  {
    domain: 'Automotive',
    standard: 'ISO 26262 & A-SPICE',
    level: 'ASIL A to ASIL D',
    scope: 'Hazard analysis (HARA), safety manuals, safety concept architecture, FMEDA, and independent functional safety audits.',
  },
  {
    domain: 'Aerospace & Defense',
    standard: 'DO-178C & DO-254',
    level: 'DAL A to DAL E',
    scope: 'Structural code coverage (Statement, Decision, MC/DC), high-level/low-level requirement tracing, and FAA/EASA certification artifacts.',
  },
  {
    domain: 'Industrial Automation',
    standard: 'IEC 61508 & ISO 13849',
    level: 'SIL 1–4 / PL a–e',
    scope: 'Safety integrity level calculation, safe state transition mechanisms, hardware fault tolerance (HFT), and redundant voting logic.',
  },
  {
    domain: 'EV Infrastructure',
    standard: 'ISO 15118 & OCPP 2.0.1',
    level: 'Plug & Charge V2G',
    scope: 'TLS 1.3 cryptographic key exchange, automated contract certificate billing, grid synchronization, and charge point interoperability.',
  },
];

const CASE_HIGHLIGHTS = [
  {
    sector: 'Automotive & Mobility',
    title: '800V Silicon Carbide Inverter BMS Firmware',
    metric: '40% Latency Reduction',
    metricLabel: 'ISO 26262 ASIL D Certified',
    description:
      'Engineered an ultra-fast battery management firmware stack with sub-microsecond fault detection and real-time state estimation across 192 battery cells.',
  },
  {
    sector: 'Semiconductor',
    title: '5nm Edge AI Vision NPU Verification',
    metric: '99.8% Coverage',
    metricLabel: 'Zero Silicon Respins',
    description:
      'Delivered full-chip UVM testbench and formal assertion suites for a multi-core neural processing unit, accelerating tape-out by 4 months.',
  },
  {
    sector: 'Aerospace & Avionics',
    title: 'DO-178C Level A Flight Control Actuator',
    metric: '100% MC/DC',
    metricLabel: 'DAL A Sign-Off',
    description:
      'Architected dual-redundant primary flight control actuator firmware with zero-jitter deterministic execution and full FAA compliance artifact package.',
  },
];

export default function IndustriesPage() {
  const [activeSectorId, setActiveSectorId] = useState(INDUSTRIES_DATA[0].id);

  const currentSector =
    INDUSTRIES_DATA.find((ind) => ind.id === activeSectorId) || INDUSTRIES_DATA[0];

  return (
    <>
      {/* ── Section 1: Full-Bleed Hero with Left-to-Right Directional Gradient ── */}
      <section className="relative pt-[96px] pb-18 lg:pt-[116px] lg:pb-24 bg-navy-950 overflow-hidden text-white min-h-[580px] flex items-center">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/industries-hero.jpg"
            alt="Advanced Multidisciplinary Engineering Laboratory"
            className="w-full h-full object-cover object-right lg:object-center"
          />
          {/* Directional Gradient Overlay */}
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
              Mission-Critical Engineering Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zenith-400 via-zenith-200 to-white">
                Regulated Industries
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
              Domain-specific engineering squads and safety-critical architectures built to comply with the most stringent global standards—from ISO 26262 ASIL D to DO-178C DAL A.
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
                href="#sectors"
                className="px-6 py-3.5 rounded-lg bg-zenith hover:bg-zenith-500 text-white text-[14px] font-semibold tracking-wide shadow-[0_4px_20px_rgba(217,106,26,0.35)] transition-all duration-300 hover:translate-y-[-1px]"
              >
                Explore Sectors
              </a>
              <a
                href="/company#contact"
                className="px-6 py-3.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white text-[14px] font-medium tracking-wide backdrop-blur-sm transition-all duration-300"
              >
                Consult Domain Architect
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
                  <div className="font-display text-[17px] sm:text-[19px] lg:text-[21px] font-bold text-white tracking-tight whitespace-nowrap">
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

      {/* ── Section 2: Sector Spotlight — Clean, Design-Focused (Light Surface) ── */}
      <section className="py-16 lg:py-24 bg-surface" id="sectors">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          {/* Section Heading */}
          <div className="max-w-[700px] mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-2"
            >
              Sector Expertise
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.6rem,3.2vw,2.35rem)] font-bold tracking-display text-navy-950 leading-tight"
            >
              Tailored Engineering by Industry
            </motion.h2>
          </div>

          {/* Clean Split Showcase */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Vertical Selector */}
            <div className="lg:col-span-4 space-y-2">
              {INDUSTRIES_DATA.map((ind) => {
                const isActive = activeSectorId === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveSectorId(ind.id)}
                    className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                      isActive
                        ? 'bg-navy-950 text-white border-navy-950 shadow-md font-semibold'
                        : 'bg-white text-navy-800 border-navy-100/90 hover:border-zenith/40 hover:bg-surface-alt font-medium'
                    }`}
                  >
                    <span className="text-[15px]">{ind.label}</span>
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        isActive ? 'bg-zenith scale-125' : 'bg-navy-200'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Clean Domain Canvas */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSector.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 lg:p-10 rounded-2xl bg-white border border-navy-100 shadow-[0_8px_30px_rgba(6,27,46,0.05)]"
                >
                  {/* Top Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <h3 className="font-display text-[22px] lg:text-[26px] font-bold text-navy-950">
                      {currentSector.label}
                    </h3>
                    <span className="px-3.5 py-1 text-[11.5px] font-mono font-medium rounded-full bg-zenith-50 text-zenith border border-zenith-200">
                      {currentSector.badge}
                    </span>
                  </div>

                  {/* Headline Statement */}
                  <p className="text-[16px] lg:text-[17px] font-medium text-navy-900 leading-relaxed mb-8">
                    {currentSector.headline}
                  </p>

                  {/* 3 Clean Key Pillars */}
                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    {currentSector.pillars.map((pillar) => (
                      <div
                        key={pillar.title}
                        className="p-5 rounded-xl bg-surface border border-navy-100/80 hover:border-zenith/30 transition-colors"
                      >
                        <span className="font-display text-[16px] font-bold text-zenith mb-2 block">
                          {pillar.num}
                        </span>
                        <h4 className="text-[14px] font-bold text-navy-950 mb-1.5 leading-snug">
                          {pillar.title}
                        </h4>
                        <p className="text-[12.5px] text-text-secondary leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Key Standards Bar */}
                  <div className="pt-6 border-t border-navy-100 flex flex-wrap items-center gap-2">
                    <span className="text-[11.5px] font-bold uppercase tracking-wider text-navy-900 mr-2">
                      Core Frameworks:
                    </span>
                    {currentSector.chips.map((chip) => (
                      <span
                        key={chip}
                        className="px-3 py-1 text-[12px] font-medium rounded-md bg-surface-alt text-navy-800 border border-navy-200/70"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Regulatory & Safety Standards Matrix (Light Surface-Alt) ── */}
      <section className="py-16 lg:py-20 bg-surface-alt border-y border-navy-100" id="standards">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Regulatory Compliance
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.6rem,3.2vw,2.35rem)] font-bold tracking-display text-navy-950 leading-tight mb-3"
            >
              Engineered to Global Safety Standards
            </motion.h2>
            <p className="text-[14.5px] text-text-secondary">
              We design, document, and certify safety-critical systems with complete audit traceability across tier-1 standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPLIANCE_FRAMEWORKS.map((framework, i) => (
              <motion.div
                key={framework.standard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.06 }}
                className="p-6 rounded-xl border border-navy-200/80 bg-white hover:border-zenith/40 hover:shadow-[0_8px_30px_rgba(6,27,46,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zenith">
                      {framework.domain}
                    </span>
                    <span className="text-[10.5px] font-mono font-medium px-2 py-0.5 rounded bg-navy-50 text-navy-700 border border-navy-100">
                      {framework.level}
                    </span>
                  </div>

                  <h3 className="text-[16px] font-bold text-navy-950 mb-2">
                    {framework.standard}
                  </h3>
                  <p className="text-[12.5px] leading-relaxed text-text-secondary">
                    {framework.scope}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Cross-Domain Architecture Synergy (Dark Accent Section) ── */}
      <section className="py-16 lg:py-22 bg-navy-950 text-white relative overflow-hidden" id="synergy">
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
              The Nexzora Advantage
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.6rem,3.2vw,2.35rem)] font-bold tracking-display text-white leading-tight mb-4"
            >
              Cross-Domain Technology Transfer
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              className="text-[14.5px] leading-relaxed text-white/65"
            >
              How our multidisciplinary expertise accelerates delivery and improves system reliability.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Silicon-to-System Verification Rigor',
                desc: 'We transfer pre-silicon UVM verification methodologies and formal assertion proofs into automotive and aerospace ECU software pipelines.',
                pill: 'Silicon → System',
              },
              {
                title: 'Aerospace-Grade Fault Tolerance',
                desc: 'We apply triple-modular redundancy, fail-operational concepts, and deterministic RTOS partitioning into robotics and industrial controllers.',
                pill: 'Avionics → Industrial',
              },
              {
                title: 'Low-Latency Edge AI Acceleration',
                desc: 'We quantize and compile deep neural networks to run at sub-10ms latency on resource-constrained automotive and robotic edge processors.',
                pill: 'Cloud AI → Edge MCU',
              },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-white/[0.04] border border-white/10 hover:border-zenith/40 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10.5px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-zenith/20 text-zenith-300 mb-3 inline-block">
                    {pillar.pill}
                  </span>
                  <h3 className="text-[16px] font-bold text-white mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-white/65">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Proven Domain Deployments (Light Surface) ── */}
      <section className="py-16 lg:py-20 bg-surface" id="milestones">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="max-w-[700px] mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-2"
            >
              Proven Deployments
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.6rem,3.2vw,2.35rem)] font-bold tracking-display text-navy-950 leading-tight"
            >
              Domain Engineering Milestones
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {CASE_HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="p-6 rounded-xl border border-navy-100 bg-white hover:border-zenith/40 hover:shadow-[0_12px_36px_rgba(6,27,46,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zenith block mb-2">
                    {item.sector}
                  </span>
                  <h3 className="text-[17px] font-bold text-navy-950 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-text-secondary mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-navy-50 flex items-center justify-between">
                  <div>
                    <div className="font-display text-[18px] font-bold text-navy-950">
                      {item.metric}
                    </div>
                    <div className="text-[11px] text-navy-500 font-medium">
                      {item.metricLabel}
                    </div>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-navy-50 flex items-center justify-center text-navy-700">
                    <svg className="w-4 h-4 text-zenith" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: CTA ── */}
      <CTABanner
        label="Partner With Us"
        title="Engineering Expertise for Your Industry"
        subtitle="Tell us about your domain-specific engineering challenges. We'll assemble the right team and engagement model."
        primaryText="Start a Conversation"
        primaryHref="/company#contact"
        secondaryText="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
