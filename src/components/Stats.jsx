import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/* ============================================
   Stats Strip — Company metrics
   ============================================ */

const STATS = [
  { value: 500, suffix: '+', label: 'Engineers Worldwide' },
  { value: 12, suffix: '+', label: 'Years of Excellence' },
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Enterprise Clients' },
];

/* Animated counter hook */
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ value, suffix, label, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });
  const count = useCountUp(value, 2200, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay }}
      className="flex flex-col items-center text-center px-2 sm:px-4"
    >
      <span className="font-display text-[clamp(1.9rem,5.5vw,3.25rem)] font-bold tracking-tight text-navy-950 leading-none">
        {count}
        <span className="text-zenith">{suffix}</span>
      </span>
      <span className="mt-2 text-[12.5px] sm:text-[14px] font-medium text-text-secondary tracking-wide">
        {label}
      </span>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-20 bg-surface" id="stats">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200/50 to-transparent" />

      <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-4">
          {STATS.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200/50 to-transparent" />
    </section>
  );
}
