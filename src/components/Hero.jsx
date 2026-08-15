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
      className="relative min-h-[40vh] flex items-center pt-[72px] overflow-hidden bg-navy-950"
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
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark gradient overlay — solid dark left, fading right */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, rgba(4,30,66,0.97) 0%, rgba(4,30,66,0.92) 30%, rgba(4,30,66,0.75) 50%, rgba(4,30,66,0.4) 70%, rgba(4,30,66,0.15) 90%)',
              }}
            />
          </>
        ) : (
          /* Interactive circuit network — swap HERO_MODE to 'animation' */
          <>
            {/* <div className="absolute top-0 bottom-0" style={{ left: '0%', right: '-5%' }}>
              <HeroNetwork />
            </div> */}
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
      <div className="relative z-[2] pointer-events-none mx-auto max-w-[1320px] w-full px-6 lg:px-10 py-10 lg:py-14">
        <div className="max-w-[620px]">
          {/* Pre-heading — NEXZORA TECHNOLOGIES */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-5"
          >
            <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-white/70">
              NEXZORA TECHNOLOGIES
            </span>
          </motion.div>

          {/* Headline — split color: white + orange */}
          {mounted && (
            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-[clamp(1.75rem,3.5vw,2.85rem)] font-bold leading-[1.12] tracking-display"
            >
              {['Engineering', 'Intelligence.'].map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariant}
                  className="inline-block mr-[0.3em] text-white"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {['Powering', 'Mobility.'].map((word, i) => (
                <motion.span
                  key={`o-${i}`}
                  variants={wordVariant}
                  className="inline-block mr-[0.3em] text-zenith"
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
            className="mt-5 text-[15.5px] leading-relaxed text-white/65 max-w-[500px]"
          >
            NEXZORA develops advanced engineering solutions across embedded systems, automotive technologies, semiconductors, AI, cybersecurity, and connected mobility—from concept to production.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
            className="mt-8 flex flex-wrap gap-4 pointer-events-auto"
          >
            <a
              href="#capabilities"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-zenith text-white text-[14px] font-semibold rounded-[6px] transition-all duration-200 hover:bg-zenith-600 hover:shadow-[0_8px_24px_rgba(255,90,0,0.3)] active:scale-[0.98]"
              id="cta-explore"
            >
              Explore Our Capabilities
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center px-7 py-3.5 border-[1.5px] border-white/30 text-white text-[14px] font-semibold rounded-[6px] transition-all duration-200 hover:border-white/60 hover:bg-white/5 active:scale-[0.98]"
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
