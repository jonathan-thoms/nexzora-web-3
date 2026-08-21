import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

/* ============================================
   Services Page
   ============================================ */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay },
  }),
};

const ENGINEERING_SERVICES = [
  {
    title: 'System Design & Architecture',
    description: 'End-to-end system design from requirements capture to detailed architecture. We build scalable, modular, and safety-compliant system architectures for complex products.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
      </svg>
    ),
  },
  {
    title: 'VLSI & Chip Development',
    description: 'RTL design, logic synthesis, physical design, DFT, and post-silicon validation. Expertise across advanced process nodes from 28nm to 3nm.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="12" height="12" rx="1" />
        <rect x="9" y="9" width="6" height="6" rx="0.5" />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
      </svg>
    ),
  },
  {
    title: 'Firmware & Embedded Software',
    description: 'Bare-metal and RTOS-based firmware engineering. BSP development, device drivers, bootloaders, and middleware for ARM, RISC-V, and custom SoCs.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
        <path d="M13 5l-2 14" />
      </svg>
    ),
  },
  {
    title: 'Verification & Validation',
    description: 'UVM-based verification, formal verification, hardware-software co-simulation, and system-level validation with automated regression frameworks.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: 'AI & Machine Learning Engineering',
    description: 'ML model development, edge AI deployment, computer vision pipelines, NLP systems, and MLOps infrastructure for production-ready intelligent systems.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 5.5V16a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1.5C6.5 13.5 5 11.5 5 9a7 7 0 0 1 7-7Z" />
        <path d="M9 21h6M10 18v3M14 18v3" />
      </svg>
    ),
  },
  {
    title: 'Cloud & DevOps Engineering',
    description: 'Cloud-native application development, CI/CD pipelines, infrastructure-as-code, containerization, and platform engineering on AWS, Azure, and GCP.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 19a4.5 4.5 0 0 1-.42-8.98A7 7 0 0 1 19.5 11a4.5 4.5 0 0 1-1 8.98" />
      </svg>
    ),
  },
];

const CONSULTING_SERVICES = [
  {
    title: 'Architecture Review',
    description: 'Independent technical assessment of your system architecture, identifying risks, bottlenecks, and optimization opportunities.',
  },
  {
    title: 'Compliance & Safety Audits',
    description: 'ISO 26262, IEC 61508, DO-178C, and automotive SPICE compliance assessments with remediation roadmaps.',
  },
  {
    title: 'Digital Transformation',
    description: 'Strategic technology modernization — from legacy system migration to cloud-first architectures and agile engineering practices.',
  },
  {
    title: 'Engineering Process Optimization',
    description: 'Streamline engineering workflows, implement best-in-class tooling, and establish metrics-driven development practices.',
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: 'Dedicated Teams',
    description: 'Fully managed engineering teams embedded in your workflow. Scaled up or down as your project evolves.',
    icon: '01',
  },
  {
    title: 'Project-Based',
    description: 'Fixed-scope engagements with defined milestones, deliverables, and timelines. Ideal for well-defined projects.',
    icon: '02',
  },
  {
    title: 'Staff Augmentation',
    description: 'Skilled engineers integrated into your existing teams to fill capability gaps and accelerate delivery.',
    icon: '03',
  },
  {
    title: 'Consulting & Advisory',
    description: 'Strategic guidance from domain experts to help you make informed technology and architecture decisions.',
    icon: '04',
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        label="Services"
        title="Engineering & Consulting Services"
        subtitle="Deep technical expertise delivered through flexible engagement models — from embedded engineering teams to strategic consulting."
      />

      {/* ── Engineering Services Grid ── */}
      <section className="py-16 lg:py-20 bg-surface" id="engineering">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Engineering
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight"
            >
              Core Engineering Services
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENGINEERING_SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.05 }}
                className="group p-6 rounded-lg border border-navy-100 bg-white hover:border-zenith/30 hover:shadow-[0_8px_32px_rgba(4,30,66,0.06)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-950/5 flex items-center justify-center text-navy-950/60 group-hover:bg-zenith/10 group-hover:text-zenith transition-colors duration-300 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-[16px] font-semibold text-navy-950 mb-2">{service.title}</h3>
                <p className="text-[14px] leading-relaxed text-text-secondary">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consulting Services ── */}
      <section className="py-16 lg:py-20 bg-surface-alt" id="consulting">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left — Copy */}
            <div className="lg:max-w-[400px] shrink-0">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
              >
                Consulting
              </motion.span>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.05}
                className="font-display text-[clamp(1.4rem,2.8vw,2rem)] font-bold tracking-display text-navy-950 leading-tight mb-4"
              >
                Strategic Consulting & Advisory
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.1}
                className="text-[15px] leading-relaxed text-text-secondary"
              >
                Beyond engineering delivery, we provide strategic guidance to help organizations navigate complex technology decisions and optimize their engineering operations.
              </motion.p>
            </div>

            {/* Right — Cards */}
            <div className="flex-1 grid sm:grid-cols-2 gap-6">
              {CONSULTING_SERVICES.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.06 }}
                  className="p-6 rounded-lg bg-white border border-navy-100"
                >
                  <h3 className="text-[15px] font-semibold text-navy-950 mb-2">{item.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-text-secondary">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Engagement Models ── */}
      <section className="py-16 lg:py-20 bg-surface" id="engagement-models">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              How We Work
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight"
            >
              Flexible Engagement Models
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGAGEMENT_MODELS.map((model, i) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.06 }}
                className="relative p-6 rounded-lg border border-navy-100 bg-white overflow-hidden group hover:border-zenith/30 transition-colors duration-300"
              >
                {/* Number */}
                <span className="text-[48px] font-black text-navy-950/[0.04] absolute top-2 right-4 leading-none group-hover:text-zenith/10 transition-colors duration-300">
                  {model.icon}
                </span>
                <h3 className="text-[16px] font-semibold text-navy-950 mb-2 relative">{model.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-text-secondary relative">{model.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
