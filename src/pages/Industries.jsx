import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CTABanner from '../components/CTABanner';
import { INDUSTRIES_DATA } from '../data/offeringsData';

/* ============================================
   Industries Hub Page — Bespoke Domain Engineering
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
  { value: '3 Core Sectors', label: 'Safety-Critical & Regulated' },
  { value: 'ASIL D / SIL 3', label: 'Safety Integrity' },
  { value: 'Tier-1 & OEM', label: 'Production Grade' },
  { value: '100%', label: 'IP Transferred' },
];

const COMPLIANCE_FRAMEWORKS = [
  {
    domain: 'Automotive',
    standard: 'ISO 26262, ASPICE & ISO/SAE 21434',
    level: 'ASIL A–D · L2',
    scope: 'HARA, safety concept architecture, FMEDA/FTA, ASPICE V3.1 process execution, TARA, and chip-to-cloud cybersecurity.',
  },
  {
    domain: 'Quality & Security',
    standard: 'ISO 9001:2015 & TISAX®',
    level: 'Globally Certified',
    scope: 'Process efficiency, continuous improvement, IP protection, GDPR/VDA data privacy, and prototype security for OEMs and Tier-1s.',
  },
  {
    domain: 'Robotics & Autonomous',
    standard: 'ROS 2, IEC 61508 & ISO 13849',
    level: 'SIL 1–4 / Cat 4',
    scope: 'Autonomous navigation, optical telemetry, safe-state transitions, fault injection, and real-time control validation.',
  },
  {
    domain: 'Energy & EV Infrastructure',
    standard: 'ISO 15118, OCPP 2.0.1 & BESS',
    level: 'V2G & High Voltage',
    scope: 'Plug & Charge TLS 1.3 key exchange, EVCC charging control, multi-rack BESS masters, and grid-forming power inverters.',
  },
];

const CASE_HIGHLIGHTS = [
  {
    sector: 'Automotive & Mobility',
    slug: 'automotive',
    title: 'AUTOSAR HPC ECU & 800V Powertrain BMS',
    metric: 'ASIL D Ready',
    metricLabel: 'Classic & Adaptive AUTOSAR',
    description:
      'Delivered multi-core HPC cluster/infotainment consolidation and high-efficiency EV battery management firmware with full MIL/SIL/HIL verification.',
  },
  {
    sector: 'Robotics & Autonomous Systems',
    slug: 'robotics',
    title: '200m Subsea ROV, AUV & Wireless Docking Skid',
    metric: '200m Depth',
    metricLabel: 'Stereo Vision & Optical Comms',
    description:
      'Engineered an integrated subsea robotic platform featuring autonomous visual survey, wireless underwater charging, acoustic telemetry, and ROS control.',
  },
  {
    sector: 'Energy & EV Infrastructure',
    slug: 'energy',
    title: 'ISO 15118 Plug & Charge & Grid BESS Master',
    metric: 'ISO 15118-20',
    metricLabel: 'Bidirectional V2G & BESS',
    description:
      'Engineered intelligent EVSE fast-charging control stacks, TLS 1.3 certificate handshakes, and multi-rack grid battery management controllers.',
  },
];

export default function IndustriesPage() {
  const { hash } = useLocation();
  const [activeSectorId, setActiveSectorId] = useState(INDUSTRIES_DATA[0].id);

  useEffect(() => {
    if (hash) {
      const targetId = hash.slice(1);
      const match = INDUSTRIES_DATA.find((ind) => ind.id === targetId || ind.slug === targetId);
      if (match) {
        setActiveSectorId(match.id);
      }
    }
  }, [hash]);

  const currentSector =
    INDUSTRIES_DATA.find((ind) => ind.id === activeSectorId) || INDUSTRIES_DATA[0];

  return (
    <>
      {/* ── Section 1: Full-Bleed Hero with Left-to-Right Directional Gradient ── */}
      <section className="relative pt-[96px] pb-18 lg:pt-[116px] lg:pb-24 bg-navy-950 overflow-hidden text-white min-h-[580px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/industries-hero.jpg"
            alt="Advanced Multidisciplinary Engineering Laboratory"
            className="w-full h-full object-cover object-right lg:object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(6,27,46,0.98) 0%, rgba(6,27,46,0.92) 42%, rgba(6,27,46,0.45) 65%, rgba(6,27,46,0.05) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(6,27,46,0.4) 0%, transparent 30%, transparent 70%, rgba(6,27,46,0.65) 100%)',
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
              Industries We Operate In
            </motion.span>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.05}
              className="font-display text-[clamp(2.1rem,4.2vw,3.45rem)] font-bold leading-[1.08] tracking-display text-white"
            >
              Mission-Critical Engineering Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zenith-400 via-zenith-200 to-white">
                Global Industries
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.12}
              className="mt-5 text-[16px] lg:text-[17.5px] leading-relaxed text-white/75 max-w-[640px]"
            >
              Domain-specialized engineering squads and safety-critical architectures spanning Automotive &amp; Mobility, Robotics &amp; Autonomy, and Energy &amp; EV Infrastructure.
            </motion.p>

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
              <Link
                to="/about-us#contact"
                className="px-6 py-3.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white text-[14px] font-medium tracking-wide backdrop-blur-sm transition-all duration-300"
              >
                Consult Domain Architect
              </Link>
            </motion.div>

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

      {/* ── Section 2: Interactive Sector Spotlight (All 8 Industries + Subpage Deep-Dive Links) ── */}
      <section className="py-16 lg:py-24 bg-surface" id="sectors">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
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

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Vertical Selector */}
            <div className="lg:col-span-4 space-y-2">
              {INDUSTRIES_DATA.map((ind) => {
                const isActive = activeSectorId === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveSectorId(ind.id)}
                    className={`w-full text-left px-5 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                      isActive
                        ? 'bg-navy-950 text-white border-navy-950 shadow-md font-semibold'
                        : 'bg-white text-navy-800 border-navy-100/90 hover:border-zenith/40 hover:bg-surface-alt font-medium'
                    }`}
                  >
                    <span className="text-[14.5px]">{ind.label}</span>
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-200 shrink-0 ${
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
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                    <h3 className="font-display text-[22px] lg:text-[26px] font-bold text-navy-950">
                      {currentSector.label}
                    </h3>
                    <span className="px-3.5 py-1 text-[11.5px] font-mono font-medium rounded-full bg-zenith-50 text-zenith border border-zenith-200">
                      {currentSector.badge}
                    </span>
                  </div>

                  <p className="text-[16px] lg:text-[17px] font-medium text-navy-900 leading-relaxed mb-8">
                    {currentSector.headline}
                  </p>

                  {/* 3 Key Pillars */}
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

                  {/* Standards + Deep-Dive Subpage CTA */}
                  <div className="pt-6 border-t border-navy-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11.5px] font-bold uppercase tracking-wider text-navy-900 mr-1">
                        Core Frameworks:
                      </span>
                      {currentSector.standards.slice(0, 4).map((standard) => (
                        <span
                          key={standard}
                          className="px-3 py-1 text-[12px] font-medium rounded-md bg-surface-alt text-navy-800 border border-navy-200/70"
                        >
                          {standard}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/industries/${currentSector.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-950 hover:bg-zenith text-white text-[13px] font-semibold transition-colors shrink-0"
                    >
                      <span>Explore {currentSector.shortTitle}</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Regulatory & Safety Standards Matrix ── */}
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
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zenith">
                      {framework.domain}
                    </span>
                    <span className="text-[10.5px] font-mono font-medium px-2 py-0.5 rounded bg-navy-50 text-navy-700 border border-navy-100 whitespace-nowrap">
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
              The NEXZORA Advantage
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
              How our multidisciplinary expertise across automotive, robotics, AI, and cloud accelerates delivery and raises system reliability.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Model-Based Verification Rigor',
                desc: 'We apply automated MIL/SIL/HIL simulation pipelines, virtual ECUs, and deterministic RTOS profiling across automotive and industrial controllers.',
                pill: 'Simulation → Hardware',
              },
              {
                title: 'Safety-Critical Fault Tolerance',
                desc: 'We carry dual-channel safety supervision, fail-operational design, and ISO 26262 / IEC 61508 discipline into robotics and EV energy systems.',
                pill: 'Safety → Autonomy',
              },
              {
                title: 'Domain-Robust Edge AI',
                desc: 'We quantize foundation vision models and governed AI agents to run reliably across unseen environments on resource-constrained edge SoCs.',
                pill: 'Research → Edge SoC',
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

      {/* ── Section 5: Proven Domain Deployments ── */}
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
                className="group p-6 rounded-xl border border-navy-100 bg-white hover:border-zenith/40 hover:shadow-[0_12px_36px_rgba(6,27,46,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zenith block mb-2">
                    {item.sector}
                  </span>
                  <h3 className="text-[17px] font-bold text-navy-950 mb-3 group-hover:text-zenith transition-colors">
                    <Link to={`/industries/${item.slug}`}>{item.title}</Link>
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
                  <Link
                    to={`/industries/${item.slug}`}
                    className="w-8 h-8 rounded-full bg-navy-50 group-hover:bg-zenith/10 flex items-center justify-center text-zenith transition-colors"
                    aria-label={`Explore ${item.sector}`}
                  >
                    →
                  </Link>
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
        primaryHref="/about-us#contact"
        secondaryText="Explore Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
