import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

/* ============================================
   Careers Page
   ============================================ */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay },
  }),
};

const PERKS = [
  {
    title: 'Remote-First Culture',
    description: 'Work from anywhere. Our teams span 4 countries and multiple time zones — flexibility is built into our DNA.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <ellipse cx="12" cy="12" rx="4" ry="10" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: 'Continuous Learning',
    description: 'Annual learning budgets, conference sponsorships, patent filing support, and dedicated time for research and open-source contributions.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2ZM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7Z" />
      </svg>
    ),
  },
  {
    title: 'Cutting-Edge Projects',
    description: 'Work on autonomous vehicles, next-gen chips, industrial robots, and AI systems — not maintenance projects.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
  {
    title: 'Health & Wellbeing',
    description: 'Comprehensive health coverage, mental health support, wellness stipends, and flexible PTO that we actually encourage you to use.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78Z" />
      </svg>
    ),
  },
  {
    title: 'Equity & Growth',
    description: 'Employee stock options, transparent promotion paths, and leadership development programs for every engineer.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: 'Team & Community',
    description: 'Quarterly team offsites, hackathons, tech talks, and an inclusive culture where diverse perspectives drive better engineering.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

const DEPARTMENTS = ['All', 'Engineering', 'Semiconductor', 'AI & Robotics', 'Cloud', 'Operations'];

const OPENINGS = [
  {
    title: 'Senior Embedded Software Engineer',
    department: 'Engineering',
    location: 'Bangalore, India',
    type: 'Full-time',
    posted: '2 days ago',
  },
  {
    title: 'VLSI Design Engineer — Physical Design',
    department: 'Semiconductor',
    location: 'San Francisco, USA',
    type: 'Full-time',
    posted: '3 days ago',
  },
  {
    title: 'Staff Verification Engineer (UVM)',
    department: 'Semiconductor',
    location: 'Munich, Germany',
    type: 'Full-time',
    posted: '5 days ago',
  },
  {
    title: 'ML Engineer — Edge AI',
    department: 'AI & Robotics',
    location: 'Toronto, Canada',
    type: 'Full-time',
    posted: '1 week ago',
  },
  {
    title: 'Robotics Software Engineer (ROS2)',
    department: 'AI & Robotics',
    location: 'Bangalore, India',
    type: 'Full-time',
    posted: '1 week ago',
  },
  {
    title: 'AUTOSAR Architect',
    department: 'Engineering',
    location: 'Munich, Germany',
    type: 'Full-time',
    posted: '1 week ago',
  },
  {
    title: 'DevOps Platform Engineer',
    department: 'Cloud',
    location: 'Remote',
    type: 'Full-time',
    posted: '2 weeks ago',
  },
  {
    title: 'Cloud Solutions Architect',
    department: 'Cloud',
    location: 'San Francisco, USA',
    type: 'Full-time',
    posted: '2 weeks ago',
  },
  {
    title: 'Technical Recruiter — Engineering',
    department: 'Operations',
    location: 'Bangalore, India',
    type: 'Full-time',
    posted: '3 weeks ago',
  },
];

const CULTURE_STATS = [
  { number: '500+', label: 'Engineers Worldwide' },
  { number: '4', label: 'Global Offices' },
  { number: '15+', label: 'Nationalities' },
  { number: '92%', label: 'Employee Retention' },
];

export default function Careers() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? OPENINGS
    : OPENINGS.filter((job) => job.department === filter);

  return (
    <>
      <PageHero
        label="Careers"
        title="Build What Matters"
        subtitle="Join a global team of engineers solving the hardest problems in automotive, semiconductors, AI, and cloud — with real ownership from day one."
      />

      {/* ── Culture Stats ── */}
      <section className="py-12 lg:py-14 bg-navy-950">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {CULTURE_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.06 }}
                className="text-center"
              >
                <span className="block text-[clamp(2rem,4vw,3rem)] font-black text-zenith leading-none mb-1">
                  {stat.number}
                </span>
                <span className="text-[13px] font-medium text-white/50 uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Join Us ── */}
      <section className="py-16 lg:py-20 bg-surface" id="culture">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Why NEXZORA
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight"
            >
              What Makes Us Different
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.05 }}
                className="group p-6 rounded-lg border border-navy-100 bg-white hover:border-zenith/30 hover:shadow-[0_8px_32px_rgba(4,30,66,0.06)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-navy-950/5 flex items-center justify-center text-navy-950/50 group-hover:bg-zenith/10 group-hover:text-zenith transition-colors duration-300 mb-4">
                  {perk.icon}
                </div>
                <h3 className="text-[16px] font-semibold text-navy-950 mb-2">{perk.title}</h3>
                <p className="text-[14px] leading-relaxed text-text-secondary">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section className="py-16 lg:py-20 bg-surface-alt" id="openings">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Open Positions
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight"
            >
              Find Your Role
            </motion.h2>
          </div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setFilter(dept)}
                className={`px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  filter === dept
                    ? 'bg-navy-950 text-white'
                    : 'bg-white border border-navy-100 text-text-secondary hover:border-navy-300 hover:text-navy-900'
                }`}
              >
                {dept}
              </button>
            ))}
          </motion.div>

          {/* Job listings */}
          <div className="space-y-3 max-w-[860px] mx-auto">
            <AnimatePresence mode="popLayout">
              {filtered.map((job, i) => (
                <motion.div
                  key={job.title}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.03 }}
                  className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-5 rounded-lg border border-navy-100 bg-white hover:border-zenith/30 hover:shadow-[0_4px_16px_rgba(4,30,66,0.04)] transition-all duration-200"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-semibold text-navy-950 group-hover:text-zenith transition-colors duration-200">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                      <span className="text-[12px] font-medium text-zenith bg-zenith/10 px-2 py-0.5 rounded-full">
                        {job.department}
                      </span>
                      <span className="text-[12.5px] text-text-tertiary flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0Z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="text-[12.5px] text-text-tertiary">{job.type}</span>
                      <span className="text-[12px] text-text-tertiary/60">{job.posted}</span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-semibold text-zenith border border-zenith/30 rounded-[6px] hover:bg-zenith hover:text-white transition-all duration-200 active:scale-[0.98]"
                  >
                    Apply
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[15px] text-text-secondary">No openings in this department right now. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Hiring Process ── */}
      <section className="py-16 lg:py-20 bg-surface" id="process">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Our Process
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight"
            >
              How We Hire
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[960px] mx-auto">
            {[
              { step: '01', title: 'Apply', description: 'Submit your application with your resume. We review every single one.' },
              { step: '02', title: 'Technical Screen', description: 'A 45-minute call with an engineer to discuss your experience and a focused technical topic.' },
              { step: '03', title: 'Deep Dive', description: 'A hands-on technical round — system design, coding, or domain-specific problem solving.' },
              { step: '04', title: 'Team Match', description: 'Meet your potential team lead and discuss projects, culture fit, and growth expectations.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.06 }}
                className="relative text-center p-6"
              >
                <span className="text-[40px] font-black text-navy-950/[0.05] leading-none block mb-2">{item.step}</span>
                <h3 className="text-[16px] font-semibold text-navy-950 mb-2">{item.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-text-secondary">{item.description}</p>
                {/* Connector arrow (not on last) */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-navy-200">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        label="Join Us"
        title="Don't See Your Role?"
        subtitle="We're always looking for exceptional engineers. Send us your resume and we'll reach out when there's a match."
        primaryText="Send Your Resume"
        primaryHref="/company#contact"
        secondaryText="View Company"
        secondaryHref="/company"
      />
    </>
  );
}
