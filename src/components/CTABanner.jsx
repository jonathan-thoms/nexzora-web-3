import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ============================================
   Reusable CTA Banner — placed before footer
   on every inner page
   ============================================ */

export default function CTABanner({
  label = 'Get Started',
  title = 'Ready to Engineer the Future?',
  subtitle = 'Let\'s discuss how NEXZORA can accelerate your next project.',
  primaryText = 'Contact Us',
  primaryHref = '/company#contact',
  secondaryText = 'Explore Capabilities',
  secondaryHref = '/#capabilities',
}) {
  return (
    <section className="relative py-20 lg:py-24 bg-navy-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-zenith/[0.04] blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-navy-600/10 blur-[80px]" />
      </div>

      <div className="relative z-[2] mx-auto max-w-[1320px] px-6 lg:px-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-4"
        >
          {label}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.05 }}
          className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-white leading-tight mb-4 max-w-[600px] mx-auto"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
          className="text-[15px] text-white/50 mb-8 max-w-[480px] mx-auto"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to={primaryHref}
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-zenith text-white text-[14px] font-semibold rounded-[6px] transition-all duration-200 hover:bg-zenith-600 hover:shadow-[0_8px_24px_rgba(255,90,0,0.3)] active:scale-[0.98]"
          >
            {primaryText}
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            to={secondaryHref}
            className="inline-flex items-center px-7 py-3.5 border-[1.5px] border-white/30 text-white text-[14px] font-semibold rounded-[6px] transition-all duration-200 hover:border-white/60 hover:bg-white/5 active:scale-[0.98]"
          >
            {secondaryText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
