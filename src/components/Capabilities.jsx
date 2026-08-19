import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ============================================
   Engineering Capabilities — Tabbed Interface
   ============================================ */

/* Inline SVG icons — sized for the larger tabs */
const Icons = {
  embedded: (
    <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </svg>
  ),
  automotive: (
    <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17h14M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h8l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M5 17a2 2 0 0 0-2 2v1h4v-1a2 2 0 0 0-2-2ZM19 17a2 2 0 0 0-2 2v1h4v-1a2 2 0 0 0-2-2Z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  semiconductor: (
    <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18L18 6M6 6l12 12" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  'ai-robotics': (
    <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
      <circle cx="9" cy="10" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  cybersecurity: (
    <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  'ai-systems': (
    <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 5.5V16a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1.5C6.5 13.5 5 11.5 5 9a7 7 0 0 1 7-7Z" />
      <path d="M9 21h6M10 18v3M14 18v3" />
      <path d="M10 9h.01M14 9h.01M10 12a2 2 0 0 0 4 0" />
    </svg>
  ),
  'cloud-digital': (
    <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 19a4.5 4.5 0 0 1-.42-8.98A7 7 0 0 1 19.5 11a4.5 4.5 0 0 1-1 8.98" />
      <path d="M12 13v6M9 17l3 3 3-3" />
    </svg>
  ),
};

const CAPABILITIES = [
  {
    id: 'embedded',
    label: 'Embedded Engineering',
    tabLabel: 'Embedded\nEngineering',
    description:
      'Full-stack embedded system design — from bare-metal firmware to RTOS-driven architectures. We engineer deeply optimized solutions for safety-critical and performance-intensive applications across industrial, automotive, and consumer domains.',
    image: '/capabilities/embedded.jpg',
  },
  {
    id: 'automotive',
    label: 'Automotive & Mobility',
    tabLabel: 'Automotive\n& Mobility',
    description:
      'Next-generation automotive engineering spanning ADAS, vehicle electrification, connectivity platforms, and autonomous driving stacks. Compliant with AUTOSAR, ISO 26262, and emerging SDV standards.',
    image: '/capabilities/automotive.jpg',
  },
  {
    id: 'semiconductor',
    label: 'Semiconductor & Chip Engineering',
    tabLabel: 'Semiconductor\n& Chip',
    description:
      'End-to-end semiconductor design services — from RTL design and verification to physical design and post-silicon validation. Expertise across leading-edge process nodes and advanced packaging technologies.',
    image: '/capabilities/semiconductor.jpg',
  },
  {
    id: 'ai-robotics',
    label: 'Robotics & Connected Technologies',
    tabLabel: 'Robotics &\nConnected Tech',
    description:
      'End-to-end robotics engineering — from industrial automation and autonomous mobile robots to IoT-enabled connected systems. We design perception pipelines, motion control architectures, and edge-to-cloud connectivity for real-world deployment at scale.',
    image: '/capabilities/ai-robotics.jpg',
  },
  {
    id: 'ai-systems',
    label: 'AI & Intelligent Systems',
    tabLabel: 'AI & Intelligent\nSystems',
    description:
      'Enterprise AI solutions powered by machine learning, deep learning, and generative AI. We build intelligent decision engines, computer vision systems, NLP pipelines, and predictive analytics platforms that drive measurable business outcomes.',
    image: '/capabilities/ai-systems.jpg',
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity',
    tabLabel: 'Cyber\nsecurity',
    description:
      'Enterprise-grade security engineering — from threat modeling and penetration testing to secure architecture design and compliance frameworks. Protecting critical infrastructure across OT and IT environments.',
    image: '/capabilities/cybersecurity.jpg',
  },
  {
    id: 'cloud-digital',
    label: 'Cloud & Digital Engineering',
    tabLabel: 'Cloud & Digital\nEngineering',
    description:
      'Full-spectrum cloud and digital transformation services — from cloud-native application development and DevOps automation to data platform engineering and microservices architecture. We help enterprises modernize their technology stack and accelerate digital innovation.',
    image: '/capabilities/cloud-digital.jpg',
  },
];

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const textSlide = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 150, damping: 22, delay: 0.08 },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.12 } },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);
  const tabsContainerRef = useRef(null);

  const handleSelectTab = (index) => {
    setActiveTab(index);
    if (tabRefs.current[index]) {
      tabRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  };

  return (
    <section className="relative py-12 lg:py-16 bg-surface-alt" id="capabilities">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-6 lg:mb-8 text-center">
          {/* Pre-label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="inline-block text-[11.5px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-2 sm:mb-3"
          >
            What we do
          </motion.span>
          {/* Headline */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } },
            }}
            className="font-display text-[clamp(1.45rem,3.5vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight"
          >
            {'Engineering Capabilities'.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: { type: 'spring', stiffness: 120, damping: 16 },
                  },
                }}
                className="inline-block"
                style={{ minWidth: char === ' ' ? '0.3em' : undefined }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        {/* Unified Tabbed Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
          className="rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(10,37,64,0.08)] border border-navy-800/20"
        >
          {/* Tab Row — touch swipeable with active centering */}
          <div
            ref={tabsContainerRef}
            className="flex overflow-x-auto scrollbar-hide no-scrollbar bg-navy-950 scroll-smooth touch-pan-x"
          >
            {CAPABILITIES.map((cap, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={cap.id}
                  ref={(el) => (tabRefs.current[index] = el)}
                  onClick={() => handleSelectTab(index)}
                  className={`group relative flex-1 min-w-[105px] sm:min-w-[125px] flex flex-col items-center justify-center gap-2 sm:gap-3 px-2.5 sm:px-3 py-4 sm:py-6 lg:py-7 transition-colors duration-200 cursor-pointer border-r border-navy-800/40 last:border-r-0 select-none ${
                    isActive
                      ? 'bg-[#fafaf8] text-navy-950'
                      : 'text-navy-300 hover:text-white hover:bg-navy-900/60 active:bg-navy-900'
                  }`}
                  id={`tab-${cap.id}`}
                >
                  {/* Icon */}
                  <span className={`shrink-0 transition-colors duration-200 ${isActive ? 'text-zenith' : 'text-navy-400 group-hover:text-navy-200'}`}>
                    {Icons[cap.id]}
                  </span>
                  {/* Label — multi-line */}
                  <span className="text-[11px] sm:text-[12.5px] lg:text-[13.5px] font-semibold leading-tight text-center whitespace-pre-line">
                    {cap.tabLabel}
                  </span>
                  {/* Active indicator at the seam */}
                  {isActive && (
                    <motion.div
                      layoutId="active-tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-zenith"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detail Panel — full-width bg image with responsive gradient overlay */}
          <div className="relative bg-navy-950 min-h-[420px] sm:min-h-[360px] lg:min-h-[400px] overflow-hidden flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={CAPABILITIES[activeTab].id}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0 flex flex-col justify-center"
              >
                {/* Background image — full width */}
                <motion.img
                  variants={imageReveal}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  src={CAPABILITIES[activeTab].image}
                  alt={CAPABILITIES[activeTab].label}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Dark gradient overlay — desktop: left-to-right, mobile: bottom/top coverage */}
                <div
                  className="hidden lg:block absolute inset-0 z-[1]"
                  style={{
                    background: 'linear-gradient(to right, rgba(6,27,46,0.96) 0%, rgba(6,27,46,0.88) 35%, rgba(6,27,46,0.5) 60%, rgba(6,27,46,0.15) 85%, transparent 100%)',
                  }}
                />
                <div
                  className="block lg:hidden absolute inset-0 z-[1]"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(6,27,46,0.96) 0%, rgba(6,27,46,0.92) 55%, rgba(6,27,46,0.97) 100%)',
                  }}
                />

                {/* Text content — on top of the gradient */}
                <motion.div
                  variants={textSlide}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative z-[2] flex flex-col justify-center p-6 sm:p-8 lg:p-12 xl:p-16 h-full overflow-y-auto"
                >
                  <h3 className="font-display text-[20px] sm:text-[24px] lg:text-[32px] xl:text-[36px] font-bold tracking-display text-white leading-[1.18] mb-3 sm:mb-5">
                    {CAPABILITIES[activeTab].label}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed text-navy-200 max-w-[500px] mb-6 sm:mb-8">
                    {CAPABILITIES[activeTab].description}
                  </p>
                  <div>
                    <a
                      href="#contact"
                      className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-zenith text-white text-[14px] font-semibold rounded-[6px] transition-all duration-200 hover:bg-zenith-600 hover:shadow-[0_8px_24px_rgba(255,90,0,0.3)] active:scale-[0.98] w-full sm:w-auto text-center"
                    >
                      <span>Get in touch</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Section bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200/40 to-transparent" />
    </section>
  );
}
