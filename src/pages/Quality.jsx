import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

/* ============================================
   Quality & Standards Page
   Reference: ISO 9001:2015 & TISAX - ENX Certifications
   ============================================ */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay },
  }),
};

const CERTIFICATIONS = [
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    issuer: 'International Organization for Standardization',
    badge: 'Quality Management System',
    description:
      'Quality Management Systems certification ensuring consistent engineering quality, rigorous process discipline, and continuous improvement across our processes and deliverables.',
    validUntil: '2026',
    scope: 'Global Embedded, Automotive & Software Engineering Services',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z" />
      </svg>
    ),
  },
  {
    id: 'tisax',
    name: 'TISAX – ENX',
    issuer: 'ENX Association',
    badge: 'Automotive Information Security',
    description:
      'Trusted Information Security Assessment Exchange (TISAX) framework tailored for the automotive industry, validating high-level data protection, prototype confidentiality, and supply chain cybersecurity.',
    validUntil: '2027',
    scope: 'High Protection Levels (Assessment Level 2 & 3), Prototype Confidentiality & Cyber Resilience',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const STANDARDS = [
  {
    id: 'sdlc',
    name: 'Software Development Life Cycle',
    code: 'SDLC Standards',
    description: 'Comprehensive SDLC processes following industry best practices for embedded and cloud software development.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    requirements: [
      'Agile/Scrum engineering workflows & milestone tracking',
      'Mandatory peer code review and collaborative pairing',
      'Automated testing pipelines and CI/CD automation',
      'Strict version control, branch protections & documentation',
      'Regular sprint reviews and defect root-cause retrospectives',
    ],
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Standards',
    code: 'ISO 27001, NIST, ISO/SAE 21434',
    description: 'Robust security measures and compliance with international cybersecurity standards across edge, vehicle, and cloud.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    requirements: [
      'Secure coding practices (MISRA-C, CERT C/C++)',
      'Threat Analysis and Risk Assessment (TARA / STRIDE)',
      'Hardware Security Module (HSM) & secure boot enforcement',
      'End-to-end cryptographic data encryption & key lifecycle',
      'Regular penetration testing and incident response protocols',
    ],
  },
  {
    id: 'safety',
    name: 'Automotive Safety Standards',
    code: 'ISO 26262, A-SPICE',
    description: 'Functional safety and process maturity standards for automotive software and electronics development.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    requirements: [
      'Functional safety analysis from ASIL A through ASIL D',
      'Hazard Analysis and Risk Assessment (HARA)',
      'Bi-directional safety requirements traceability',
      'Hardware-in-the-Loop (HIL) & Fault Injection Testing',
      'A-SPICE Level 2/3 engineering process conformity',
    ],
  },
  {
    id: 'qa',
    name: 'Quality Assurance & Testing',
    code: 'IEEE 1012, ISO 29119',
    description: 'Comprehensive QA processes ensuring software determinism, reliability, and peak defect prevention.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    requirements: [
      'Multi-tier test strategy and complete coverage matrices',
      'Automated unit, integration, system, and regression testing',
      'Real-time deterministic timing & latency profiling',
      'Custom hardware simulation and automated test benches',
      'Structured quality metrics reporting and audit trails',
    ],
  },
];

const CHECKLIST = [
  {
    id: 1,
    title: 'Code Quality',
    description: 'Static analysis (Coverity/SonarQube), MISRA compliance, and strict code review gates.',
    status: 'Active',
    icon: (
      <svg className="w-5 h-5 text-zenith" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Testing Coverage',
    description: 'Comprehensive unit, integration, and full HIL/MIL verification for zero-defect delivery.',
    status: 'Active',
    icon: (
      <svg className="w-5 h-5 text-zenith" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Documentation',
    description: 'Complete architectural specifications, hardware register maps, and API interface docs.',
    status: 'Active',
    icon: (
      <svg className="w-5 h-5 text-zenith" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Performance Monitoring',
    description: 'Continuous runtime profiling, sub-microsecond interrupt timing, and memory optimization.',
    status: 'Active',
    icon: (
      <svg className="w-5 h-5 text-zenith" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Security Audits',
    description: 'Regular embedded vulnerability scanning, protocol fuzzing, and threat modeling.',
    status: 'Active',
    icon: (
      <svg className="w-5 h-5 text-zenith" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Compliance Review',
    description: 'Systematic alignment checks against ISO 9001, TISAX, ISO 26262, and UNECE R155/R156.',
    status: 'Active',
    icon: (
      <svg className="w-5 h-5 text-zenith" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Client Feedback',
    description: 'Transparent milestone demonstrations, sprint reviews, and continuous improvement loops.',
    status: 'Active',
    icon: (
      <svg className="w-5 h-5 text-zenith" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Training & Development',
    description: 'Ongoing engineering certifications in functional safety, AUTOSAR, and automotive cybersecurity.',
    status: 'Active',
    icon: (
      <svg className="w-5 h-5 text-zenith" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    id: 9,
    title: 'Risk Management',
    description: 'Proactive failure mode evaluations (FMEA/FMEDA) and disciplined mitigation tracking.',
    status: 'Active',
    icon: (
      <svg className="w-5 h-5 text-zenith" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

export default function Quality() {
  return (
    <>
      <PageHero
        label="Quality & Standards"
        title="Engineering Precision Built on Proven Standards"
        subtitle="Committed to excellence through rigorous quality standards, international certifications, and continuous process improvement."
      />

      {/* ── Section 1: Our Certifications ── */}
      <section className="py-16 lg:py-20 bg-surface" id="certifications">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Our Certifications
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight mb-4"
            >
              Recognized Industry Certifications
            </motion.h2>
            <p className="text-[15px] leading-relaxed text-text-secondary max-w-2xl mx-auto">
              Recognized certifications that demonstrate our commitment to quality, functional safety, and automotive information security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.08 }}
                className="relative p-8 sm:p-9 rounded-2xl bg-white border border-navy-100 shadow-[0_6px_28px_rgba(6,27,46,0.05)] hover:border-zenith/40 hover:shadow-[0_16px_40px_rgba(6,27,46,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-zenith/10 text-zenith flex items-center justify-center">
                      {cert.icon}
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11.5px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Verified • Valid until {cert.validUntil}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-zenith block mb-1">
                    {cert.badge}
                  </span>
                  <h3 className="font-display text-[24px] sm:text-[26px] font-bold text-navy-950 mb-1.5">
                    {cert.name}
                  </h3>
                  <p className="text-[13px] text-text-tertiary mb-4 font-medium">
                    Issued by: {cert.issuer}
                  </p>

                  <p className="text-[14.5px] leading-relaxed text-text-secondary mb-6">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-navy-100 flex items-center justify-between text-[12.5px]">
                  <span className="text-text-tertiary">Scope:</span>
                  <span className="font-semibold text-navy-950 text-right">{cert.scope}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Standards & Compliance ── */}
      <section className="py-16 lg:py-20 bg-surface-alt border-y border-navy-100/60" id="standards">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Standards & Compliance
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight mb-4"
            >
              Rigorous Engineering Frameworks
            </motion.h2>
            <p className="text-[15px] leading-relaxed text-text-secondary max-w-2xl mx-auto">
              We adhere to international standards and best practices to ensure the highest safety, reliability, and engineering discipline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-[1100px] mx-auto">
            {STANDARDS.map((std, i) => (
              <motion.div
                key={std.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.06 }}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-navy-100 shadow-xs hover:border-zenith/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-navy-950/5 flex items-center justify-center text-navy-900">
                      {std.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-[18px] sm:text-[20px] font-bold text-navy-950 leading-snug">
                        {std.name}
                      </h3>
                      <span className="text-[12px] font-mono text-zenith font-semibold">
                        {std.code}
                      </span>
                    </div>
                  </div>

                  <p className="text-[14px] leading-relaxed text-text-secondary mb-5">
                    {std.description}
                  </p>

                  <ul className="space-y-2.5 text-[13.5px] text-text-secondary">
                    {std.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Quality Assurance Checklist ── */}
      <section className="py-16 lg:py-20 bg-surface" id="checklist">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Systematic Quality
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight mb-4"
            >
              Quality Assurance Checklist
            </motion.h2>
            <p className="text-[15px] leading-relaxed text-text-secondary max-w-2xl mx-auto">
              Our comprehensive quality measures active across all engineering and development phases.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
            {CHECKLIST.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.04 }}
                className="p-5 sm:p-6 rounded-xl bg-white border border-navy-100 hover:border-zenith/40 hover:shadow-[0_8px_24px_rgba(6,27,46,0.06)] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-9 h-9 rounded-lg bg-zenith/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="font-display text-[16px] font-bold text-navy-950">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[13px] leading-relaxed text-text-secondary mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[11.5px] font-semibold text-emerald-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>{item.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: CTA ── */}
      <CTABanner
        label="Partner With Us"
        title="Ready to Build With Safety-Critical Precision?"
        subtitle="Partner with our certified engineering teams to accelerate your automotive, embedded, and digital platforms."
        primaryText="Get in Touch"
        primaryHref="/company#contact"
        secondaryText="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
