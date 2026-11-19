import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTABanner from '../components/CTABanner';
import { SERVICES_DATA } from '../data/offeringsData';

/* ============================================
   Services Hub Page — Precision Engineering,
   Dedicated Squads & Consulting
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
  { value: '8 Core Practices', label: 'Full-Stack Engineering' },
  { value: '99.4%', label: 'First-Pass Success' },
  { value: '< 2 Wks', label: 'Squad Ramp-up' },
  { value: 'ISO 9001 & TISAX®', label: 'Certified Delivery' },
];

const LIFECYCLE_STEPS = [
  {
    step: '01',
    phase: 'Architecture & Modeling',
    title: 'System Requirements & Co-Design',
    description: 'Defining compute targets, hardware-software partitioning, safety concepts, and MATLAB/Simulink architectural models.',
    badge: 'Phase 1',
  },
  {
    step: '02',
    phase: 'Implementation',
    title: 'AUTOSAR, Firmware & Platform Build',
    description: 'MCAL/BSW integration, bare-metal/RTOS drivers, hypervisor services, web/mobile apps, and cloud backends.',
    badge: 'Phase 2',
  },
  {
    step: '03',
    phase: 'Verification',
    title: 'MIL / SIL / HIL & Safety Closure',
    description: 'Requirements-based test suites, virtual ECUs, fault injection, static analysis, and ASPICE/ISO 26262 sign-off.',
    badge: 'Phase 3',
  },
  {
    step: '04',
    phase: 'Validation',
    title: 'Hardware Bring-Up & Bench Testing',
    description: 'Target board bring-up, bus-load and timing verification, penetration testing, and real-time HIL lab validation.',
    badge: 'Phase 4',
  },
  {
    step: '05',
    phase: 'Deployment',
    title: 'Production, CI/CD & Fleet OTA',
    description: 'Automated DevOps release pipelines, signed A/B OTA updates, cloud observability, and continuous lifecycle support.',
    badge: 'Phase 5',
  },
];

const ENGAGEMENT_MODELS = [
  {
    id: 'dedicated',
    badge: 'Autonomous Squads',
    title: 'Dedicated Engineering Squads',
    tagline: 'Fully managed, cross-functional squads embedded directly into your product roadmap.',
    timeline: '< 2 Wks Ramp-up',
    highlights: [
      'Dedicated Tech Lead, Embedded, AUTOSAR, AI & V&V',
      'Direct integration into your toolchains & repos',
      '100% IP ownership & complete transfer',
    ],
  },
  {
    id: 'project',
    badge: 'Fixed Scope',
    title: 'Turnkey Project Delivery',
    tagline: 'Milestone-based execution from architecture and prototyping through production sign-off.',
    timeline: 'Milestone Schedule',
    highlights: [
      'Guaranteed scope & acceptance criteria',
      'Managed by NEXZORA senior architects',
      'Comprehensive V&V evidence & warranty support',
    ],
  },
  {
    id: 'staff-aug',
    badge: 'Flexible Scale',
    title: 'Specialized Resource Staffing',
    tagline: 'Pre-vetted automotive, embedded, AI, robotics, and cloud specialists integrated directly into your team.',
    timeline: '3–7 Days Onboarding',
    highlights: [
      'Senior AUTOSAR, FuSa, ADAS, Cyber & Cloud talent',
      'Global delivery across US, Egypt, Japan & India',
      'On-demand scale up or down without overhead',
    ],
  },
  {
    id: 'consulting',
    badge: 'Strategic Consulting',
    title: 'Architecture & Delivery Consulting',
    tagline: 'Independent architecture reviews and strategic roadmaps from seasoned engineering leaders.',
    timeline: 'Retainer or 2–6 Wks',
    highlights: [
      'System bottleneck & risk assessments',
      'SDV, AI, Cloud & Industrial DevOps roadmaps',
      'SoC, stack & toolchain selection guidance',
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* ── Section 1: Full-Bleed Image Hero with Gradient Overlay ── */}
      <section className="relative pt-[96px] pb-18 lg:pt-[116px] lg:pb-24 bg-navy-950 overflow-hidden text-white min-h-[580px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/services-hero.jpg"
            alt="NEXZORA Engineering Services"
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
              NEXZORA Engineering Services
            </motion.span>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.05}
              className="font-display text-[clamp(2.1rem,4.2vw,3.45rem)] font-bold leading-[1.08] tracking-display text-white"
            >
              From Silicon &amp; AUTOSAR to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zenith-400 via-zenith-200 to-white">
                Intelligent Systems
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.12}
              className="mt-5 text-[16px] lg:text-[17.5px] leading-relaxed text-white/75 max-w-[640px]"
            >
              We deliver dedicated engineering squads, specialized resource staffing, and end-to-end software development across embedded firmware, AUTOSAR, XIL testing, digital platforms, cloud DevOps, Android, and consulting.
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
                Explore Services
              </a>
              <Link
                to="/solutions"
                className="px-6 py-3.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white text-[14px] font-medium tracking-wide backdrop-blur-sm transition-all duration-300"
              >
                View Turnkey Solutions
              </Link>
            </motion.div>

            {/* Hero Key Metrics Strip */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.28}
              className="mt-10 pt-7 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-[740px]"
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

      {/* ── Section 2: Core Engineering & Consulting Services Matrix (All 8 -> Subpages) ── */}
      <section className="py-16 lg:py-22 bg-surface" id="engineering">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-[700px]">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-2"
              >
                Core Engineering &amp; Consulting Services
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
            <div className="flex flex-wrap gap-3">
              <Link
                to="/solutions"
                className="px-4 py-2 rounded-lg border border-navy-200 bg-white text-[13px] font-semibold text-navy-900 hover:border-zenith hover:text-zenith transition-colors"
              >
                Explore Solutions →
              </Link>
              <Link
                to="/industries"
                className="px-4 py-2 rounded-lg border border-navy-200 bg-white text-[13px] font-semibold text-navy-900 hover:border-zenith hover:text-zenith transition-colors"
              >
                Explore Industries →
              </Link>
            </div>
          </div>

          {/* 8 Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: (i % 4) * 0.05 }}
                className="group relative flex flex-col justify-between p-6 rounded-2xl border border-navy-100 bg-white hover:border-zenith/40 hover:shadow-[0_14px_38px_rgba(6,27,46,0.08)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-display text-[14px] font-bold text-zenith">
                      0{i + 1}
                    </span>
                    <span className="text-[10.5px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-navy-50 text-navy-700 border border-navy-100/80 truncate">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-[17.5px] font-bold text-navy-950 mb-2.5 group-hover:text-zenith transition-colors duration-200 leading-snug">
                    <Link to={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-[13px] leading-relaxed text-text-secondary mb-5">
                    {service.tagline}
                  </p>

                  {/* Core Deliverables preview */}
                  <div className="mb-5 pt-4 border-t border-navy-50">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-navy-900 block mb-2">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.slice(0, 3).map((item) => (
                        <li key={item} className="text-[12px] text-text-secondary flex items-start gap-2 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-zenith mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Tool Tags */}
                  <div className="pb-4 mb-4 border-b border-navy-50 flex flex-wrap gap-1.5">
                    {service.tools.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10.5px] font-medium px-2 py-0.5 rounded bg-surface-alt text-navy-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy-950 group-hover:text-zenith transition-colors"
                  >
                    <span>Explore Service</span>
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Engineering Lifecycle / V-Cycle (Dark Accent Section) ── */}
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
              The NEXZORA Engineering Lifecycle
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              className="text-[14.5px] leading-relaxed text-white/65"
            >
              A disciplined, ASPICE-aligned engineering flow designed to compress delivery cycles and guarantee safety and security compliance.
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

      {/* ── Section 4: Flexible Engagement Models & Resource Staffing ── */}
      <section className="py-16 lg:py-20 bg-surface-alt border-y border-navy-100" id="engagement-models">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center max-w-[680px] mx-auto mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Collaboration &amp; Staffing Formats
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
              Whether you need a complete turnkey squad, specialized engineering staffing, or strategic consulting, we tailor delivery to your roadmap.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGAGEMENT_MODELS.map((model, i) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="p-6 rounded-2xl border border-navy-100 bg-white hover:border-zenith/40 hover:shadow-[0_8px_30px_rgba(6,27,46,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded bg-navy-50 text-navy-800 border border-navy-100">
                      {model.badge}
                    </span>
                    <span className="text-[11px] font-mono text-zenith font-medium whitespace-nowrap">
                      {model.timeline}
                    </span>
                  </div>

                  <h3 className="text-[16.5px] font-bold text-navy-950 mb-2.5 leading-snug">
                    {model.title}
                  </h3>
                  <p className="text-[13px] text-text-secondary leading-relaxed mb-6">
                    {model.tagline}
                  </p>

                  <div className="pt-4 border-t border-navy-50 space-y-2.5">
                    {model.highlights.map((item) => (
                      <div key={item} className="text-[12.5px] text-navy-800 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-zenith mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: CTA ── */}
      <CTABanner
        label="Start a Project"
        title="Let's Build Something Exceptional"
        subtitle="Tell us about your engineering or staffing requirements. We'll assemble the right team and engagement model."
        primaryText="Get in Touch"
        primaryHref="/about-us#contact"
        secondaryText="Explore Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
