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

function AnimatedHeadline({ text }) {
  const words = text.split(' ');
  return (
    <motion.h1
      variants={textVariants}
      initial="hidden"
      animate="visible"
      className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold leading-[1.15] tracking-display text-navy-950"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariant}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      className="relative min-h-[55vh] flex items-center pt-[72px] overflow-hidden"
      id="hero"
    >
      {/* ── Background Visual Layer ── */}
      <div className="absolute inset-0">
        {HERO_MODE === 'image' ? (
          /* Static hero image — place at /public/hero-bg.png */
          <>
            {/* Image covers the right 80% of the hero */}
            <div className="absolute top-0 bottom-0 right-0" style={{ left: '20%' }}>
              <img
                src="/hero-bg.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Gradient fades image into the surface on the left */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, var(--color-surface) 0%, var(--color-surface) 35%, rgba(250,250,248,0.92) 45%, rgba(250,250,248,0.6) 55%, rgba(250,250,248,0.15) 70%, transparent 85%)',
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
                background: 'linear-gradient(to right, var(--color-surface) 0%, var(--color-surface) 20%, rgba(250,250,248,0.85) 35%, rgba(250,250,248,0.4) 48%, transparent 62%)',
              }}
            />
          </>
        )}
      </div>

      {/* ── Content Layer ──
          pointer-events-none on the container so the spotlight
          works through the text. Interactive elements opt back in. */}
      <div className="relative z-[2] pointer-events-none mx-auto max-w-[1320px] w-full px-6 lg:px-10 py-12 lg:py-16">
        <div className="max-w-[600px]">
          {/* Pre-heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-6"
          >
            <span className="text-[14px] font-bold uppercase tracking-[0.15em] text-zenith">
              NEXZORA TECHNOLOGIES
            </span>
          </motion.div>

          {/* Headline */}
          {mounted && (
            <AnimatedHeadline text="The Next Zenith of Innovation — Engineering a New Era of Technology" />
          )}

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="mt-6 text-[16.5px] leading-relaxed text-text-secondary max-w-[480px]"
          >
            Precision-engineered solutions across embedded systems, semiconductor design, AI, and next-generation mobility platforms.
          </motion.p>

          {/* CTAs — pointer-events-auto so buttons stay clickable */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
            className="mt-10 flex flex-wrap gap-4 pointer-events-auto"
          >
            <a
              href="#capabilities"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-zenith text-white text-[14px] font-semibold rounded-[6px] transition-all duration-200 hover:bg-zenith-600 hover:shadow-[0_8px_24px_rgba(217,106,26,0.2)] active:scale-[0.98]"
              id="cta-explore"
            >
              Explore Our Solutions
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
              className="inline-flex items-center px-7 py-3.5 border-[1.5px] border-navy-200 text-navy-900 text-[14px] font-semibold rounded-[6px] transition-all duration-200 hover:border-navy-400 hover:bg-navy-50 active:scale-[0.98]"
              id="cta-discover"
            >
              Discover NEXZORA
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom edge accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200/60 to-transparent z-[3]" />
    </section>
  );
}
