import { useState } from 'react';
import { motion } from 'framer-motion';

/* ============================================
   Client Logos — Infinite Marquee
   ============================================
   Place your 5 PNG logo files inside:
   /public/clients/
   
   Default expected filenames:
   - client-1.png
   - client-2.png
   - client-3.png
   - client-4.png
   - client-5.png
   
   You can also customize the names and file paths
   below to match your exact filenames.
   ============================================ */

const CLIENTS = [
  { name: 'Cognizant', logo: '/clients/cognizant.png' },
  { name: 'Panasonic', logo: '/clients/Panasonic-logo.png', className: 'scale-130' },
  { name: 'Tata Elxsi', logo: '/clients/talaelxsilogo.png' },
  { name: 'Amentum', logo: '/clients/Amentum_Logo-RGB-Full_Color_H.png' },
  { name: 'UST', logo: '/clients/partner-3979-logo.png' },
];

/* Single logo tile — renders image with graceful fallback */
function LogoTile({ client }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="flex-shrink-0 flex items-center justify-center h-16 px-6 sm:px-10 lg:px-12 select-none">
      {client.logo && !hasError ? (
        <img
          src={client.logo}
          alt={client.name}
          onError={() => setHasError(true)}
          className={`h-8 sm:h-9 md:h-10 max-w-[140px] sm:max-w-[170px] w-auto object-contain opacity-65 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 filter drop-shadow-sm cursor-pointer ${client.className || ''}`}
        />
      ) : (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-alt/70 border border-navy-200/40 text-navy-950/50 hover:text-navy-950 hover:border-zenith/40 transition-colors">
          <span className="text-[13px] sm:text-[14px] font-medium tracking-wide whitespace-nowrap">
            {client.name}
          </span>
        </div>
      )}
    </div>
  );
}

export default function ClientLogos() {
  /* Repeat the 5 clients to ensure a seamless continuous loop on all screens */
  const sequence = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];
  const doubled = [...sequence, ...sequence];

  return (
    <section className="relative py-10 sm:py-12 lg:py-16 bg-surface overflow-hidden border-y border-navy-100/50" id="clients">
      {/* Section label */}
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10 mb-6 sm:mb-8 text-center">
        <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-zenith mb-1.5">
          Clients We Work With
        </p>
        <h3 className="text-lg sm:text-xl font-display font-medium text-navy-950/80">
          Trusted by Innovative Leaders & Industry Pioneers
        </h3>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 lg:w-40 z-10 bg-gradient-to-r from-surface to-transparent pointer-events-none" />
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 lg:w-40 z-10 bg-gradient-to-l from-surface to-transparent pointer-events-none" />

        {/* Sliding track */}
        <motion.div
          className="flex items-center will-change-transform py-2"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 32,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          style={{ width: 'max-content' }}
        >
          {doubled.map((client, i) => (
            <LogoTile key={`${client.name}-${i}`} client={client} />
          ))}
        </motion.div>
      </div>

      {/* Bottom accent glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200/50 to-transparent" />
    </section>
  );
}
