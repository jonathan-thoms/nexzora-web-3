import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

/* ============================================
   Innovation Page
   ============================================ */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay },
  }),
};

const RESEARCH_AREAS = [
  {
    title: 'Autonomous Systems',
    description: 'Advancing perception, planning, and control algorithms for next-generation autonomous vehicles and robotic platforms.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'Edge AI & TinyML',
    description: 'Deploying high-performance inference models on resource-constrained MCUs and edge processors for real-time intelligent systems.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9zM4 12h5M15 12h5M12 4v5M12 15v5" />
      </svg>
    ),
  },
  {
    title: 'Cybersecurity',
    description: 'Researching zero-trust architectures, secure boot chains, and post-quantum cryptography for embedded and connected systems.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V6l8-4Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Digital Twins',
    description: 'Building high-fidelity virtual replicas of physical systems for simulation, predictive maintenance, and design optimization.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="9" height="9" rx="1" />
        <rect x="13" y="9" width="9" height="9" rx="1" />
        <path d="M11 10h2M11 13h2" />
      </svg>
    ),
  },
  {
    title: 'Next-Gen Connectivity',
    description: 'Exploring 5G-V2X, satellite-terrestrial integration, and mesh networking protocols for ultra-reliable communications.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 16.5a5 5 0 017 0M5 13a10 10 0 0114 0M2 10a15 15 0 0120 0" />
        <circle cx="12" cy="19" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Sustainable Engineering',
    description: 'Developing energy-efficient hardware architectures and green computing methods to reduce the environmental footprint of technology.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4-4 8-7.5 8-12A8 8 0 004 10c0 4.5 4 8 8 12Z" />
        <path d="M12 12V8M10 10l2 2 2-2" />
      </svg>
    ),
  },
];

const PATENTS = [
  { number: '50+', label: 'Patents Filed' },
  { number: '12', label: 'Active Research Programs' },
  { number: '30+', label: 'Published Papers' },
  { number: '8', label: 'University Partnerships' },
];

const INSIGHTS = [
  {
    type: 'Whitepaper',
    title: 'The Future of ADAS: From L2+ to Full Autonomy',
    description: 'A comprehensive analysis of the technological and regulatory roadmap toward fully autonomous driving.',
    date: '2025',
  },
  {
    type: 'Case Study',
    title: 'Reducing Verification Time by 60% with AI-Driven Testbench Automation',
    description: 'How we helped a leading semiconductor company transform their UVM verification workflow with ML-powered stimulus generation.',
    date: '2025',
  },
  {
    type: 'Tech Brief',
    title: 'Edge AI Deployment on Cortex-M: Challenges and Solutions',
    description: 'Practical strategies for deploying TinyML models on ARM Cortex-M microcontrollers with sub-10ms inference latency.',
    date: '2024',
  },
  {
    type: 'Whitepaper',
    title: 'Zero-Trust Security for Automotive ECU Architectures',
    description: 'A framework for implementing defense-in-depth cybersecurity strategies in modern vehicle electronic architectures.',
    date: '2024',
  },
  {
    type: 'Case Study',
    title: 'Building a Cloud-Native Digital Twin Platform for Industrial IoT',
    description: 'End-to-end architecture of a real-time digital twin system processing 1M+ sensor events per second on AWS.',
    date: '2024',
  },
  {
    type: 'Tech Brief',
    title: 'RISC-V Custom Extensions for Domain-Specific Acceleration',
    description: 'Designing custom ISA extensions on RISC-V for signal processing and ML inference workloads.',
    date: '2024',
  },
];

const OPEN_SOURCE = [
  {
    name: 'EmbedBench',
    description: 'A standardized benchmarking framework for embedded ML inference across MCUs and edge processors.',
    language: 'C / Python',
    stars: '1.2k',
  },
  {
    name: 'SafetyLint',
    description: 'Static analysis rules and CI integrations for MISRA C/C++ and AUTOSAR C++ compliance checking.',
    language: 'C++',
    stars: '890',
  },
  {
    name: 'CloudForge CLI',
    description: 'Infrastructure-as-code templates and CLI tooling for rapidly provisioning cloud-native engineering environments.',
    language: 'Go / YAML',
    stars: '650',
  },
];

export default function Innovation() {
  return (
    <>
      <PageHero
        label="Innovation"
        title="Engineering the Future, Today"
        subtitle="Our R&D labs push the boundaries of what's possible — from autonomous systems and edge AI to cybersecurity and sustainable engineering."
      />

      {/* ── Research Labs ── */}
      <section className="py-16 lg:py-20 bg-surface" id="research">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Research Labs
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight"
            >
              Active Research Areas
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESEARCH_AREAS.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.05 }}
                className="group p-6 rounded-lg border border-navy-100 bg-white hover:border-zenith/30 hover:shadow-[0_8px_32px_rgba(4,30,66,0.06)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-navy-950/5 flex items-center justify-center text-navy-950/50 group-hover:bg-zenith/10 group-hover:text-zenith transition-colors duration-300 mb-4">
                  {area.icon}
                </div>
                <h3 className="text-[16px] font-semibold text-navy-950 mb-2">{area.title}</h3>
                <p className="text-[14px] leading-relaxed text-text-secondary">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Patents & Numbers ── */}
      <section className="py-14 lg:py-16 bg-navy-950" id="patents">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {PATENTS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.06 }}
                className="text-center"
              >
                <span className="block text-[clamp(2rem,4vw,3rem)] font-black text-zenith leading-none mb-1">
                  {stat.number}
                </span>
                <span className="text-[13px] font-medium text-white/50 uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Insights ── */}
      <section className="py-16 lg:py-20 bg-surface-alt" id="insights">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Insights
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight"
            >
              Whitepapers, Case Studies & Tech Briefs
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSIGHTS.map((item, i) => (
              <motion.a
                key={item.title}
                href="#"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.05 }}
                className="group block p-6 rounded-lg border border-navy-100 bg-white hover:border-zenith/30 hover:shadow-[0_8px_32px_rgba(4,30,66,0.06)] transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zenith bg-zenith/10 px-2.5 py-1 rounded-full">
                    {item.type}
                  </span>
                  <span className="text-[12px] text-text-tertiary">{item.date}</span>
                </div>
                <h3 className="text-[15px] font-semibold text-navy-950 mb-2 group-hover:text-zenith transition-colors duration-200 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-text-secondary">{item.description}</p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-zenith opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Read more
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Source ── */}
      <section className="py-16 lg:py-20 bg-surface" id="opensource">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left — Copy */}
            <div className="lg:max-w-[360px] shrink-0">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
              >
                Open Source
              </motion.span>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.05}
                className="font-display text-[clamp(1.4rem,2.8vw,2rem)] font-bold tracking-display text-navy-950 leading-tight mb-4"
              >
                Contributing to the Community
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.1}
                className="text-[15px] leading-relaxed text-text-secondary"
              >
                We believe in giving back. Our engineering teams actively maintain and contribute to open-source tools that benefit the broader engineering community.
              </motion.p>
            </div>

            {/* Right — Project Cards */}
            <div className="flex-1 space-y-4">
              {OPEN_SOURCE.map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.06 }}
                  className="group p-5 rounded-lg border border-navy-100 bg-white hover:border-zenith/30 transition-colors duration-300 flex items-start gap-4"
                >
                  {/* Icon */}
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-navy-950/5 flex items-center justify-center text-navy-950/40 group-hover:bg-zenith/10 group-hover:text-zenith transition-colors duration-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3M23 19V14a2 2 0 00-2-2H13l-3-3H3a2 2 0 00-2 2v8a2 2 0 002 2h17a3 3 0 003-3Z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-[15px] font-semibold text-navy-950">{project.name}</h3>
                      <span className="text-[11px] font-medium text-text-tertiary bg-surface-alt px-2 py-0.5 rounded">
                        {project.language}
                      </span>
                    </div>
                    <p className="text-[13.5px] leading-relaxed text-text-secondary">{project.description}</p>
                  </div>
                  {/* Stars */}
                  <div className="shrink-0 flex items-center gap-1 text-[13px] text-text-tertiary">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                    </svg>
                    {project.stars}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        label="Collaborate With Us"
        title="Let's Push Boundaries Together"
        subtitle="Interested in our research or open-source work? We'd love to hear from you."
        primaryText="Get in Touch"
        primaryHref="/company#contact"
        secondaryText="View Careers"
        secondaryHref="/careers"
      />
    </>
  );
}
