import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ============================================
   Industries We Serve
   ============================================ */

const INDUSTRIES = [
  {
    id: 'automotive',
    label: 'Automotive &\nMobility',
    description: 'ADAS, electrification, connectivity platforms, and autonomous driving solutions.',
    iconType: 'img',
    iconSrc: '/industries/automotive.svg',
  },
  {
    id: 'semiconductor',
    label: 'Semiconductor',
    description: 'RTL design, verification, physical design, and post-silicon validation across leading-edge nodes.',
    iconType: 'inline',
    icon: (
      <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="16" width="32" height="32" rx="2" />
        <rect x="24" y="24" width="16" height="16" rx="1.5" />
        <path d="M28 28l3 3M36 28l-3 3M28 36l3-3M36 36l-3-3" strokeWidth={1} />
        <circle cx="32" cy="32" r="2" />
        <path d="M22 16v-6M26 16v-6M30 16v-4M34 16v-4M38 16v-6M42 16v-6" />
        <path d="M22 48v6M26 48v6M30 48v4M34 48v4M38 48v6M42 48v6" />
        <path d="M16 22h-6M16 26h-6M16 30h-4M16 34h-4M16 38h-6M16 42h-6" />
        <path d="M48 22h6M48 26h6M48 30h4M48 34h4M48 38h6M48 42h6" />
      </svg>
    ),
  },
  {
    id: 'robotics',
    label: 'Industrial &\nRobotics',
    description: 'Industrial automation, autonomous mobile robots, and IoT-enabled connected systems.',
    iconType: 'img',
    iconSrc: '/industries/robotics.svg',
  },
  {
    id: 'technology',
    label: 'Technology',
    description: 'Cloud-native platforms, DevOps, microservices, and digital transformation solutions.',
    iconType: 'inline',
    icon: (
      <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="10" width="48" height="32" rx="3" />
        <rect x="12" y="14" width="40" height="24" rx="1" />
        <path d="M24 22l-5 5 5 5" strokeWidth={1.8} />
        <path d="M40 22l5 5-5 5" strokeWidth={1.8} />
        <path d="M30 33l4-12" strokeWidth={1.3} />
        <path d="M26 42h12" strokeWidth={2} />
        <path d="M32 42v6" strokeWidth={1.5} />
        <path d="M22 48h20" strokeWidth={2} />
        <path d="M24 48v2M40 48v2" />
        <circle cx="15" cy="17" r="0.8" fill="currentColor" stroke="none" opacity={0.3} />
        <circle cx="18" cy="17" r="0.8" fill="currentColor" stroke="none" opacity={0.3} />
        <circle cx="21" cy="17" r="0.8" fill="currentColor" stroke="none" opacity={0.3} />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay },
  }),
};

function IndustryCard({ industry, index }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.1 + index * 0.08 }}
      className={`relative flex flex-col items-center text-center group cursor-pointer py-6 sm:py-8 px-3 sm:px-4 rounded-lg transition-colors duration-200 min-h-[160px] md:min-h-[225px] justify-start ${
        isActive ? 'bg-navy-900/40' : 'hover:bg-navy-900/20'
      } ${index < INDUSTRIES.length - 1 ? 'md:border-r md:border-white/10' : ''}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
    >
      {/* Icon + Title wrapper — shifts up on hover */}
      <motion.div
        animate={{ y: isActive ? -8 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="flex flex-col items-center"
      >
        {/* Icon */}
        <div className="mb-3 sm:mb-4">
          {industry.iconType === 'img' ? (
            <img
              src={industry.iconSrc}
              alt={industry.label}
              className="w-12 h-12 sm:w-16 sm:h-16 transition-all duration-300"
              style={{
                filter: isActive
                  ? 'brightness(0) saturate(100%) invert(44%) sepia(98%) saturate(2000%) hue-rotate(360deg) brightness(102%) contrast(101%)'
                  : 'brightness(0) invert(1) opacity(0.55)',
              }}
            />
          ) : (
            <div className={`transition-colors duration-300 ${isActive ? 'text-zenith' : 'text-white/55'}`}>
              {industry.icon}
            </div>
          )}
        </div>

        {/* Label */}
        <span className={`text-[13px] sm:text-[14px] font-medium leading-snug whitespace-pre-line transition-colors duration-300 ${
          isActive ? 'text-white' : 'text-white/80'
        }`}>
          {industry.label}
        </span>
      </motion.div>

      {/* Description — out of document flow on desktop to prevent layout jerking */}
      <AnimatePresence>
        {isActive && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 md:mt-0 md:absolute md:left-2 md:right-2 md:top-[160px] text-[12px] sm:text-[12.5px] leading-relaxed text-navy-200 text-center"
          >
            {industry.description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Industries() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20 bg-navy-950 overflow-hidden" id="industries">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

          {/* Left — Copy */}
          <div className="lg:max-w-[340px] shrink-0 text-center lg:text-left">
            {/* Label with line */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-6"
            >
              <span className="text-[11.5px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith">
                Industries We Serve
              </span>
              <span className="w-12 lg:flex-1 h-[1.5px] bg-zenith/40 rounded-full" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3.2vw,2.25rem)] font-bold tracking-display text-white leading-tight mb-3 sm:mb-4"
            >
              Engineering Solutions Across Industries
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.15}
              className="text-[14.5px] sm:text-[15px] leading-relaxed text-white/65 mb-6 sm:mb-8 max-w-[500px] mx-auto lg:mx-0"
            >
              We partner with forward-thinking companies across industries to build intelligent, safe, and reliable products that shape the future.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.25}
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 border-[1.5px] border-zenith text-zenith text-[14px] font-semibold rounded-[6px] transition-all duration-200 hover:bg-zenith hover:text-white active:scale-[0.98] w-full sm:w-auto text-center"
              >
                <span>View All Industries</span>
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
            </motion.div>
          </div>

          {/* Right — Industry Cards */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-0">
            {INDUSTRIES.map((industry, i) => (
              <IndustryCard key={industry.id} industry={industry} index={i} />
            ))}
          </div>

        </div>
      </div>

      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
}
