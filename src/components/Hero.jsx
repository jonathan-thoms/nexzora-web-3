import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import HeroNetwork from './HeroNetwork';

/* ============================================
   HERO_MODE toggle:
   - 'image'     → Static hero background image
   - 'animation' → Interactive circuit network
   To swap back, change to 'animation' and
   uncomment the HeroNetwork import above.
   ============================================ */
const HERO_MODE = 'image';

/* ============================================
   Hero Section
   ============================================ */

const textVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 18,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay,
    },
  }),
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      className="relative min-h-[80vh] sm:min-h-[70vh] lg:min-h-[45vh] flex items-center pt-[76px] sm:pt-[84px] lg:pt-[72px] pb-12 sm:pb-16 lg:pb-14 overflow-hidden bg-navy-950"
      id="hero"
    >
      {/* ── Background Visual Layer ── */}
      <div className="absolute inset-0">
        {HERO_MODE === 'image' ? (
          /* Static hero image */
          <>
            <img
              src="/hero-bg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center lg:object-right"
            />
            {/* Desktop gradient overlay */}
            <div
              className="hidden lg:block absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, rgba(4,30,66,0.97) 0%, rgba(4,30,66,0.92) 30%, rgba(4,30,66,0.75) 50%, rgba(4,30,66,0.4) 70%, rgba(4,30,66,0.15) 90%)',
              }}
            />
            {/* Mobile & Tablet gradient overlay — dark with full coverage */}
            <div
              className="block lg:hidden absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(4,30,66,0.96) 0%, rgba(4,30,66,0.90) 45%, rgba(4,30,66,0.97) 100%)',
              }}
            />
          </>
        ) : (
          /* Interactive circuit network — swap HERO_MODE to 'animation' */
          <>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, rgba(4,30,66,0.97) 0%, rgba(4,30,66,0.85) 40%, transparent 70%)',
              }}
            />
          </>
        )}
      </div>

      {/* ── Content Layer ── */}
      <div className="relative z-[2] pointer-events-none mx-auto max-w-[1320px] w-full px-5 sm:px-6 lg:px-10">
        <div className="max-w-[620px]">
          {/* Pre-heading — NEXZORA TECHNOLOGIES */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-4 sm:mb-5"
          >
            <span className="text-[11.5px] sm:text-[13px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/75">
              NEXZORA TECHNOLOGIES
            </span>
          </motion.div>

          {/* Headline — split color: white + orange */}
          {mounted && (
            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-[clamp(1.95rem,6.5vw,2.85rem)] font-bold leading-[1.12] tracking-display"
            >
              {['Engineering', 'Intelligence.'].map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariant}
                  className="inline-block mr-[0.25em] text-white"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {['Powering', 'Mobility.'].map((word, i) => (
                <motion.span
                  key={`o-${i}`}
                  variants={wordVariant}
                  className="inline-block mr-[0.25em] text-zenith"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          )}

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="mt-4 sm:mt-5 text-[14.5px] sm:text-[15.5px] leading-relaxed text-white/70 max-w-[500px]"
          >
            NEXZORA develops advanced engineering solutions across embedded systems, automotive technologies, semiconductors, AI, cybersecurity, and connected mobility—from concept to production.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
            className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3.5 sm:gap-4 pointer-events-auto"
          >
            <a
              href="#capabilities"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-zenith text-white text-[14px] font-semibold rounded-[6px] transition-all duration-200 hover:bg-zenith-600 hover:shadow-[0_8px_24px_rgba(255,90,0,0.3)] active:scale-[0.98] text-center"
              id="cta-explore"
            >
              <span>Explore Our Capabilities</span>
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
            <a
              href="#why-nexzora"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 border-[1.5px] border-white/30 text-white text-[14px] font-semibold rounded-[6px] transition-all duration-200 hover:border-white/60 hover:bg-white/5 active:scale-[0.98] text-center"
              id="cta-discover"
            >
              Discover NEXZORA
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom edge accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-[3]" />
    </section>
  );
}
