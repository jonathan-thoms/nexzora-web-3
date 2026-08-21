import { motion } from 'framer-motion';

/* ============================================
   Reusable Page Hero — Dark navy banner
   with title, subtitle, and optional breadcrumb
   ============================================ */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay },
  }),
};

export default function PageHero({ label, title, subtitle }) {
  return (
    <section className="relative pt-[72px] bg-navy-950 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(4,30,66,0.85) 0%, rgba(4,30,66,0.95) 100%)',
          }}
        />
      </div>

      <div className="relative z-[2] mx-auto max-w-[1320px] px-6 lg:px-10 py-16 lg:py-20">
        {/* Label */}
        {label && (
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-block text-[12px] font-semibold uppercase tracking-[0.25em] text-zenith mb-4"
          >
            {label}
          </motion.span>
        )}

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="font-display text-[clamp(1.75rem,3.5vw,2.85rem)] font-bold leading-[1.12] tracking-display text-white max-w-[700px]"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mt-4 text-[16px] leading-relaxed text-white/55 max-w-[560px]"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-[3]" />
    </section>
  );
}
