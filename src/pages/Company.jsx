import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import Contact from '../components/Contact';

/* ============================================
   Company Page
   ============================================ */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay },
  }),
};

const VALUES = [
  {
    title: 'Engineering Excellence',
    description: 'We set the highest bar for technical quality. Every deliverable reflects deep expertise, rigorous methodology, and an uncompromising commitment to craft.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2Z" />
      </svg>
    ),
  },
  {
    title: 'Client Partnership',
    description: 'We don\'t just deliver — we partner. Understanding our clients\' strategic goals allows us to engineer solutions that create lasting impact.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Continuous Innovation',
    description: 'We invest in R&D, adopt emerging technologies early, and foster a culture where engineers are encouraged to explore, experiment, and publish.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 017 7c0 2.5-1.5 4.5-3 5.5V16a2 2 0 01-2 2h-4a2 2 0 01-2-2v-1.5C6.5 13.5 5 11.5 5 9a7 7 0 017-7Z" />
        <path d="M9 21h6" />
      </svg>
    ),
  },
  {
    title: 'Integrity & Trust',
    description: 'Transparency, honesty, and accountability are the foundation of everything we do — with our clients, partners, and within our own teams.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V6l8-4Z" />
      </svg>
    ),
  },
];

const LEADERSHIP = [
  { name: 'Michael Adler', role: 'Founder & CEO', initials: 'MA' },
  { name: 'Priya Sharma', role: 'VP of Engineering', initials: 'PS' },
  { name: 'Daniel Kim', role: 'Head of Semiconductor', initials: 'DK' },
  { name: 'Sarah Mitchell', role: 'Head of AI & Robotics', initials: 'SM' },
  { name: 'Raj Patel', role: 'Head of Automotive', initials: 'RP' },
  { name: 'Emily Chen', role: 'VP of Operations', initials: 'EC' },
];

const LOCATIONS = [
  { city: 'San Francisco', country: 'USA', type: 'Headquarters' },
  { city: 'Bangalore', country: 'India', type: 'Engineering Center' },
  { city: 'Munich', country: 'Germany', type: 'European Office' },
  { city: 'Toronto', country: 'Canada', type: 'R&D Lab' },
];

const MILESTONES = [
  { year: '2018', event: 'Founded in San Francisco with a focus on embedded engineering' },
  { year: '2019', event: 'Opened Bangalore engineering center — 50+ engineers' },
  { year: '2020', event: 'Expanded into semiconductor and VLSI services' },
  { year: '2021', event: 'Launched AI & Robotics practice, Munich office opened' },
  { year: '2022', event: '200+ engineers, first Fortune 500 automotive client' },
  { year: '2023', event: 'Toronto R&D lab established, open-source program launched' },
  { year: '2024', event: '500+ engineers across 4 global centers, 50+ patents filed' },
];

export default function Company() {
  return (
    <>
      <PageHero
        label="Company"
        title="Engineering Intelligence. Powering Mobility."
        subtitle="We are a global engineering services company building the technology platforms that will define the next decade of innovation."
      />

      {/* ── About / Mission ── */}
      <section className="py-16 lg:py-20 bg-surface" id="about">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left — Mission */}
            <div className="lg:max-w-[480px] shrink-0">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
              >
                Our Mission
              </motion.span>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.05}
                className="font-display text-[clamp(1.4rem,2.8vw,2rem)] font-bold tracking-display text-navy-950 leading-tight mb-6"
              >
                Building the Engineering Backbone of Tomorrow's Technology
              </motion.h2>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.1}
                className="space-y-4 text-[15px] leading-relaxed text-text-secondary"
              >
                <p>
                  NEXZORA Technologies was founded on a simple premise: the world's most complex engineering challenges deserve dedicated, deeply specialized teams — not generalists.
                </p>
                <p>
                  We combine domain expertise in embedded systems, semiconductors, AI, and cloud engineering with a relentless focus on quality, to help organizations design, develop, validate, and scale next-generation products.
                </p>
                <p>
                  Today, we serve leading automotive OEMs, semiconductor companies, industrial automation firms, and technology enterprises across four global engineering centers.
                </p>
              </motion.div>
            </div>

            {/* Right — Vision / Key numbers */}
            <div className="flex-1">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.15}
                className="p-8 rounded-xl bg-navy-950 text-white mb-6"
              >
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zenith mb-2 block">Our Vision</span>
                <p className="text-[18px] font-semibold leading-snug text-white/90">
                  "To be the world's most trusted engineering partner for companies building intelligent, connected, and sustainable technology."
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '500+', label: 'Engineers Globally' },
                  { number: '4', label: 'Global Centers' },
                  { number: '100+', label: 'Active Clients' },
                  { number: '6+', label: 'Years of Excellence' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.1 + i * 0.06 }}
                    className="p-5 rounded-lg border border-navy-100 bg-white text-center"
                  >
                    <span className="block text-[28px] font-black text-navy-950 leading-none mb-1">{stat.number}</span>
                    <span className="text-[12px] font-medium text-text-tertiary uppercase tracking-wider">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-16 lg:py-20 bg-surface-alt" id="values">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Our Values
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight"
            >
              What Drives Us
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.06 }}
                className="group p-6 rounded-lg border border-navy-100 bg-white hover:border-zenith/30 hover:shadow-[0_8px_32px_rgba(4,30,66,0.06)] transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-navy-950/5 flex items-center justify-center text-navy-950/50 group-hover:bg-zenith/10 group-hover:text-zenith transition-colors duration-300 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-navy-950 mb-2">{value.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-text-secondary">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-16 lg:py-20 bg-surface" id="timeline">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Our Journey
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight"
            >
              Milestones
            </motion.h2>
          </div>

          <div className="relative max-w-[680px] mx-auto">
            {/* Vertical line */}
            <div className="absolute left-[20px] lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-[2px] bg-navy-100" />

            {MILESTONES.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.04 }}
                className={`relative flex items-start gap-4 mb-8 last:mb-0 ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } lg:text-${i % 2 === 0 ? 'right' : 'left'}`}
              >
                {/* Dot */}
                <div className="absolute left-[14px] lg:left-1/2 lg:-translate-x-1/2 top-1 w-[14px] h-[14px] rounded-full bg-white border-[3px] border-zenith z-[2]" />

                {/* Content — on mobile always right of the line */}
                <div className="ml-12 lg:ml-0 lg:w-1/2 lg:px-8">
                  <span className="text-[13px] font-black text-zenith">{milestone.year}</span>
                  <p className="text-[14px] leading-relaxed text-text-secondary mt-1">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-16 lg:py-20 bg-surface-alt" id="leadership">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Leadership
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight"
            >
              The Team Behind NEXZORA
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {LEADERSHIP.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.05 }}
                className="text-center group"
              >
                {/* Avatar placeholder */}
                <div className="w-20 h-20 mx-auto rounded-full bg-navy-950 flex items-center justify-center mb-3 group-hover:bg-zenith transition-colors duration-300">
                  <span className="text-[18px] font-bold text-white/70 group-hover:text-white transition-colors duration-300">
                    {person.initials}
                  </span>
                </div>
                <h3 className="text-[14px] font-semibold text-navy-950">{person.name}</h3>
                <p className="text-[12px] text-text-tertiary mt-0.5">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Presence ── */}
      <section className="py-14 lg:py-16 bg-navy-950" id="global">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Global Presence
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.4rem,2.8vw,2rem)] font-bold tracking-display text-white leading-tight"
            >
              Engineering Centers Worldwide
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOCATIONS.map((loc, i) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.06 }}
                className="p-5 rounded-lg border border-white/10 bg-white/[0.03] text-center"
              >
                {/* Pin icon */}
                <div className="w-10 h-10 mx-auto rounded-full bg-zenith/10 flex items-center justify-center text-zenith mb-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="text-[15px] font-semibold text-white">{loc.city}</h3>
                <p className="text-[13px] text-white/50">{loc.country}</p>
                <span className="inline-block mt-2 text-[11px] font-semibold uppercase tracking-wider text-zenith bg-zenith/10 px-2.5 py-1 rounded-full">
                  {loc.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact (reused from homepage) ── */}
      <Contact />
    </>
  );
}
