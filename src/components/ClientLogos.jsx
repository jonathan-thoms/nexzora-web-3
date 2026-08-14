import { motion } from 'framer-motion';

/* ============================================
   Client Logos — Infinite Marquee
   ============================================
   Replace placeholder names/logos with actual
   client logos by updating the CLIENTS array.
   Place logo images in /public/clients/.
   ============================================ */

const CLIENTS = [
  { name: 'Bosch', logo: null },
  { name: 'Continental', logo: null },
  { name: 'Qualcomm', logo: null },
  { name: 'NXP Semiconductors', logo: null },
  { name: 'Denso', logo: null },
  { name: 'Infineon', logo: null },
  { name: 'Texas Instruments', logo: null },
  { name: 'ZF Group', logo: null },
  { name: 'Aptiv', logo: null },
  { name: 'Valeo', logo: null },
];

/* Single logo tile — renders image if provided, otherwise text placeholder */
function LogoTile({ client }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center h-12 px-8 lg:px-10 select-none">
      {client.logo ? (
        <img
          src={client.logo}
          alt={client.name}
          className="h-8 w-auto object-contain opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-300"
        />
      ) : (
        <span className="text-[15px] font-semibold tracking-wide text-navy-950/25 whitespace-nowrap">
          {client.name}
        </span>
      )}
    </div>
  );
}

export default function ClientLogos() {
  /* Duplicate the list to create a seamless loop */
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="relative py-10 lg:py-14 bg-surface overflow-hidden" id="clients">
      {/* Section label */}
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 mb-6">
        <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-text-secondary/50 text-center">
          Trusted by industry leaders
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 z-10 bg-gradient-to-r from-surface to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 z-10 bg-gradient-to-l from-surface to-transparent pointer-events-none" />

        {/* Sliding track */}
        <motion.div
          className="flex items-center gap-2"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 30,
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

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200/40 to-transparent" />
    </section>
  );
}
