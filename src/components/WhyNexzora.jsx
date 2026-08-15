import { motion } from 'framer-motion';

/* ============================================
   Why Nexzora — Value Pillars
   ============================================ */

const PILLARS = [
  {
    title: 'Domain Expertise',
    description:
      'Deep knowledge across embedded, automotive, semiconductor, AI, and cloud technologies.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round">
        {/* People / expertise */}
        <circle cx="24" cy="14" r="5" />
        <path d="M16 28c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        <circle cx="12" cy="18" r="3.5" />
        <path d="M6 30c0-3.3 2.7-6 6-6" />
        <circle cx="36" cy="18" r="3.5" />
        <path d="M42 30c0-3.3-2.7-6-6-6" />
        {/* Connecting arc */}
        <path d="M10 34h28" strokeWidth={0.8} strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: 'Innovation Driven',
    description:
      'We engineer with future in mind—driving innovation through research, tools, and emerging tech.',
    iconType: 'img',
    iconSrc: '/benefits/innovation.svg',
  },
  {
    title: 'Quality & Reliability',
    description:
      'Built-in quality, functional safety, and security in everything we deliver.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round">
        {/* Shield */}
        <path d="M24 4l14 6v10c0 10-6 16.5-14 20C16 36.5 10 30 10 20V10l14-6Z" />
        {/* Checkmark */}
        <path d="M17 24l5 5 9-10" strokeWidth={2} />
      </svg>
    ),
  },
  {
    title: 'Global Delivery',
    description:
      'Global talent. Local partnership. Seamless delivery across the product lifecycle.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round">
        {/* Globe */}
        <circle cx="24" cy="24" r="16" />
        {/* Meridians */}
        <ellipse cx="24" cy="24" rx="7" ry="16" />
        {/* Latitude lines */}
        <path d="M8 24h32" />
        <path d="M10 16h28" />
        <path d="M10 32h28" />
        {/* Top/bottom poles */}
        <path d="M24 8v0M24 40v0" />
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

export default function WhyNexzora() {
  return (
    <section className="relative bg-navy-950 overflow-hidden" id="why-nexzora">
      {/* Top orange accent line */}
      <div className="h-[2px] bg-gradient-to-r from-zenith/0 via-zenith to-zenith/0" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-14 lg:py-18">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left — Copy */}
          <div className="lg:max-w-[280px] shrink-0">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-4"
            >
              Why Nexzora
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.05}
              className="font-display text-[clamp(1.4rem,2.8vw,2rem)] font-bold tracking-display text-white leading-tight"
            >
              Engineering Beyond the Expected
            </motion.h2>
          </div>

          {/* Right — Pillars */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.1 + i * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="mb-4 scale-[1.35]">
                  {pillar.iconType === 'img' ? (
                    <img
                      src={pillar.iconSrc}
                      alt={pillar.title}
                      className="w-12 h-12"
                      style={{ filter: 'brightness(0) invert(1) opacity(0.5)' }}
                    />
                  ) : (
                    <div className="text-white/50">
                      {pillar.icon}
                    </div>
                  )}
                </div>

                {/* Title with underline */}
                <h3 className="text-[15px] font-semibold text-zenith mb-2 pb-1 border-b border-zenith/40">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] leading-relaxed text-white/45">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
