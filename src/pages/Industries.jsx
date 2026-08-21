import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

/* ============================================
   Industries Page
   ============================================ */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay },
  }),
};

const INDUSTRIES = [
  {
    id: 'automotive',
    label: 'Automotive & Mobility',
    tagline: 'Driving the future of intelligent transportation',
    description: 'We deliver end-to-end engineering for next-generation vehicles — from ADAS and autonomous driving platforms to electrification systems and connected vehicle architectures. Our teams support OEMs, Tier-1 suppliers, and mobility startups across the entire V-cycle.',
    capabilities: [
      'ADAS & Autonomous Driving',
      'EV Powertrain & Battery Management',
      'In-Vehicle Networking (CAN, Ethernet)',
      'Vehicle Connectivity & Telematics',
      'Functional Safety (ISO 26262)',
      'AUTOSAR Classic & Adaptive',
    ],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17h14M5 17a2 2 0 01-2-2v-3a2 2 0 012-2h1l2-4h8l2 4h1a2 2 0 012 2v3a2 2 0 01-2 2" />
        <circle cx="7.5" cy="17" r="2" />
        <circle cx="16.5" cy="17" r="2" />
      </svg>
    ),
  },
  {
    id: 'semiconductor',
    label: 'Semiconductor',
    tagline: 'Silicon engineering from concept to production',
    description: 'Deep expertise across the semiconductor lifecycle — RTL design, verification, physical design, DFT, and post-silicon validation. We partner with leading fabless and IDM companies to deliver complex SoC, ASIC, and FPGA solutions at advanced process nodes.',
    capabilities: [
      'RTL Design & Microarchitecture',
      'UVM / Formal Verification',
      'Physical Design & Timing Closure',
      'DFT & ATPG',
      'Post-Silicon Validation',
      'FPGA Prototyping',
    ],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="12" height="12" rx="1" />
        <rect x="9" y="9" width="6" height="6" rx="0.5" />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
      </svg>
    ),
  },
  {
    id: 'robotics',
    label: 'Industrial & Robotics',
    tagline: 'Intelligent automation for the modern factory',
    description: 'We engineer industrial automation and robotics solutions — from autonomous mobile robots and collaborative arms to IoT-enabled factory systems. Our solutions span motion control, sensor fusion, real-time processing, and edge computing for Industry 4.0.',
    capabilities: [
      'Autonomous Mobile Robots (AMR)',
      'Robotic Arm Control Systems',
      'Industrial IoT Platforms',
      'Motion Control & Motor Drives',
      'Sensor Fusion & Perception',
      'Real-time Edge Computing',
    ],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20v-6m0 0l-4-6m4 6l4-6" />
        <circle cx="12" cy="8" r="2" />
        <rect x="6" y="20" width="12" height="2" rx="1" />
      </svg>
    ),
  },
  {
    id: 'technology',
    label: 'Technology',
    tagline: 'Scalable digital platforms and cloud-native solutions',
    description: 'We build cloud-native applications, microservices architectures, and DevOps pipelines for technology companies. From SaaS platforms and data engineering to developer tools and API ecosystems, we deliver scalable, resilient digital solutions.',
    capabilities: [
      'Cloud-Native Applications (AWS, Azure, GCP)',
      'Microservices & API Architectures',
      'Data Engineering & Analytics',
      'DevOps & CI/CD Pipelines',
      'Platform Engineering',
      'SaaS Product Development',
    ],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
        <path d="M9 9l-2 2 2 2M15 9l2 2-2 2" />
      </svg>
    ),
  },
  {
    id: 'aerospace',
    label: 'Aerospace & Defense',
    tagline: 'Mission-critical engineering for extreme environments',
    description: 'We deliver safety-critical embedded systems, avionics software, and hardware design for aerospace and defense programs. Our engineers hold domain expertise in DO-178C, DO-254, and MIL-STD compliance for airborne, ground, and space systems.',
    capabilities: [
      'Avionics Software (DO-178C)',
      'Hardware Design (DO-254)',
      'Mission-Critical Embedded Systems',
      'Radar & EW Signal Processing',
      'Satellite Communication Systems',
      'Ground Station Software',
    ],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 8l8 4 8-4-8-6Z" />
        <path d="M4 14l8 4 8-4" />
        <path d="M4 8v6M20 8v6" />
      </svg>
    ),
  },
  {
    id: 'energy',
    label: 'Energy & EV Infrastructure',
    tagline: 'Powering the clean energy transition',
    description: 'We support the energy sector with engineering for EV charging infrastructure, smart grid systems, renewable energy platforms, and battery management solutions. From power electronics design to cloud-based fleet management platforms.',
    capabilities: [
      'EV Charging Station Firmware',
      'Battery Management Systems (BMS)',
      'Smart Grid & AMI Solutions',
      'Power Electronics Design',
      'OCPP & Charging Protocols',
      'Fleet & Energy Management Platforms',
    ],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
];

function IndustryDetail({ industry }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden"
    >
      <div className="pt-6 pb-8 px-1">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
          {/* Left — Description */}
          <div className="lg:max-w-[480px]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-2">
              {industry.tagline}
            </p>
            <p className="text-[15px] leading-relaxed text-text-secondary">
              {industry.description}
            </p>
          </div>

          {/* Right — Capabilities List */}
          <div className="flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-label text-text-tertiary mb-3">
              Key Capabilities
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {industry.capabilities.map((cap) => (
                <div key={cap} className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-zenith shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[14px] text-navy-900">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function IndustriesPage() {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <PageHero
        label="Industries"
        title="Engineering Solutions Across Industries"
        subtitle="Deep domain expertise tailored to the unique engineering challenges of each sector we serve."
      />

      {/* ── Industries Accordion ── */}
      <section className="py-16 lg:py-20 bg-surface" id="sectors">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Sectors
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight"
            >
              Industries We Serve
            </motion.h2>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {INDUSTRIES.map((industry, i) => {
              const isOpen = expanded === industry.id;
              return (
                <motion.div
                  key={industry.id}
                  id={industry.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.04 }}
                  className={`rounded-lg border transition-colors duration-200 ${
                    isOpen ? 'border-zenith/30 bg-white shadow-[0_4px_20px_rgba(4,30,66,0.05)]' : 'border-navy-100 bg-white hover:border-navy-200'
                  }`}
                >
                  {/* Header row */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : industry.id)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left cursor-pointer"
                  >
                    <div className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                      isOpen ? 'bg-zenith/10 text-zenith' : 'bg-navy-950/5 text-navy-950/50'
                    }`}>
                      {industry.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[16px] font-semibold text-navy-950">{industry.label}</h3>
                      <p className="text-[13px] text-text-secondary mt-0.5 truncate">{industry.tagline}</p>
                    </div>
                    <motion.svg
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-5 h-5 text-navy-400 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </motion.svg>
                  </button>

                  {/* Expandable detail */}
                  <AnimatePresence>
                    {isOpen && (
                      <div className="px-6">
                        <div className="border-t border-navy-100" />
                        <IndustryDetail industry={industry} />
                      </div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Nexzora for Your Industry ── */}
      <section className="py-16 lg:py-20 bg-navy-950" id="why-industry">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Our Approach
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-white leading-tight"
            >
              Engineered for Your Domain
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Domain-First Teams',
                description: 'Engineers with years of hands-on experience in your specific industry — not generalists learning on the job.',
              },
              {
                title: 'Standards Compliance',
                description: 'Built-in expertise in industry standards — ISO 26262, DO-178C, IEC 61508, AUTOSAR, MISRA, and more.',
              },
              {
                title: 'End-to-End Delivery',
                description: 'From architecture and design through verification, validation, and production support — we own the full lifecycle.',
              },
              {
                title: 'Global Scale, Local Presence',
                description: 'Engineering centers across time zones, enabling 24/7 development cycles and responsive local partnerships.',
              },
              {
                title: 'Proven Track Record',
                description: 'Trusted by Fortune 500 companies and innovative startups alike. Delivering complex engineering programs on time, on budget.',
              },
              {
                title: 'Innovation Embedded',
                description: 'We integrate emerging technologies — AI, digital twins, edge computing — into domain-specific solutions.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.05 }}
                className="p-6 rounded-lg border border-white/10 bg-white/[0.03] hover:border-zenith/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                <h3 className="text-[15px] font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-white/50">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        label="Partner With Us"
        title="Engineering Expertise for Your Industry"
        subtitle="Tell us about your domain-specific engineering challenges."
        primaryText="Start a Conversation"
        primaryHref="/company#contact"
        secondaryText="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
