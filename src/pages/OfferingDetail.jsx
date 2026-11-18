import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTABanner from '../components/CTABanner';
import {
  getOfferingByTypeAndSlug,
  getOfferingsListByType,
} from '../data/offeringsData';

/* ============================================
   Unified Detail Subpage for:
   - /services/:slug   (type="service")
   - /solutions/:slug  (type="solution")
   - /industries/:slug (type="industry")
   ============================================ */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay },
  }),
};

const TYPE_META = {
  service: {
    parentLabel: 'Services',
    parentHref: '/services',
    heroBg: '/services-hero.jpg',
    otherHeading: 'Explore Other Services',
    ctaLabel: 'Start a Project',
    ctaTitle: 'Need Dedicated Engineering Expertise?',
    ctaSubtitle:
      'From turnkey project delivery to specialized embedded and software staffing, we assemble the right squad for your roadmap.',
    secondaryCtaText: 'All Services',
    secondaryCtaHref: '/services',
  },
  solution: {
    parentLabel: 'Solutions',
    parentHref: '/solutions',
    heroBg: '/services-hero.jpg',
    otherHeading: 'Explore Other Solutions',
    ctaLabel: 'Accelerate Delivery',
    ctaTitle: 'Ready to Deploy This Solution?',
    ctaSubtitle:
      'Partner with our certified global engineering teams to architect, integrate, and validate production-grade systems.',
    secondaryCtaText: 'All Solutions',
    secondaryCtaHref: '/solutions',
  },
  industry: {
    parentLabel: 'Industries',
    parentHref: '/industries',
    heroBg: '/industries-hero.jpg',
    otherHeading: 'Explore Other Industries',
    ctaLabel: 'Domain Partnership',
    ctaTitle: 'Engineering Expertise for Your Industry',
    ctaSubtitle:
      'Tell us about your domain challenges and regulatory targets. We will assemble the right certified team and delivery model.',
    secondaryCtaText: 'All Industries',
    secondaryCtaHref: '/industries',
  },
};

export default function OfferingDetail({ type = 'service' }) {
  const { slug } = useParams();
  const meta = TYPE_META[type] || TYPE_META.service;
  const item = getOfferingByTypeAndSlug(type, slug);

  if (!item) {
    return <Navigate to={meta.parentHref} replace />;
  }

  const allItems = getOfferingsListByType(type);
  const siblings = allItems.filter((entry) => entry.slug !== item.slug).slice(0, 4);
  const title = item.title || item.label;
  const tagline = item.tagline || item.headline;
  const techList = item.tools || item.techStack || [];

  return (
    <>
      {/* ── Section 1: Hero ── */}
      <section className="relative pt-[104px] pb-18 lg:pt-[124px] lg:pb-24 bg-navy-950 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={meta.heroBg}
            alt={title}
            className="w-full h-full object-cover object-right lg:object-center opacity-50"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(6,27,46,0.98) 0%, rgba(6,27,46,0.93) 50%, rgba(6,27,46,0.65) 85%, rgba(6,27,46,0.45) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(6,27,46,0.4) 0%, transparent 30%, transparent 70%, rgba(6,27,46,0.85) 100%)',
            }}
          />
        </div>

        <div className="relative z-[2] mx-auto max-w-[1320px] px-6 lg:px-10">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[12.5px] font-medium text-white/60 mb-6"
          >
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to={meta.parentHref} className="hover:text-zenith transition-colors text-white/80">
              {meta.parentLabel}
            </Link>
            <span>/</span>
            <span className="text-zenith-300">{item.shortTitle || title}</span>
          </nav>

          <div className="max-w-[780px]">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.02}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11.5px] font-mono font-semibold bg-zenith/15 text-zenith-300 border border-zenith/30 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-zenith" />
              {item.badge}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.06}
              className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.1] tracking-display text-white"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.12}
              className="mt-5 text-[16px] lg:text-[17.5px] leading-relaxed text-white/75 max-w-[680px]"
            >
              {tagline}
            </motion.p>

            {/* Hero Actions */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.18}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/company#contact"
                className="px-6 py-3.5 rounded-lg bg-zenith hover:bg-zenith-500 text-white text-[14px] font-semibold tracking-wide shadow-[0_4px_20px_rgba(217,106,26,0.35)] transition-all duration-300 hover:translate-y-[-1px]"
              >
                Discuss Your Project
              </Link>
              <Link
                to={meta.parentHref}
                className="px-6 py-3.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white text-[14px] font-medium tracking-wide backdrop-blur-sm transition-all duration-300"
              >
                ← Back to {meta.parentLabel}
              </Link>
            </motion.div>

            {/* Metrics Strip */}
            {item.metrics && item.metrics.length > 0 && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.24}
                className="mt-10 pt-7 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-[760px]"
              >
                {item.metrics.map((m) => (
                  <div key={m.label} className="min-w-0">
                    <div className="font-display text-[17px] sm:text-[19px] font-bold text-white tracking-tight">
                      {m.value}
                    </div>
                    <div className="text-[10.5px] text-white/55 uppercase tracking-wider mt-0.5 font-medium">
                      {m.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── Section 2: Overview & Core Capabilities / Pillars ── */}
      <section className="py-16 lg:py-22 bg-surface">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          {/* Overview */}
          <div className="max-w-[820px] mb-14">
            <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-2.5">
              Overview
            </span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-bold tracking-display text-navy-950 leading-tight mb-4">
              {type === 'industry'
                ? 'Domain Engineering Capabilities'
                : 'Engineering Scope & Technical Depth'}
            </h2>
            <p className="text-[15.5px] leading-relaxed text-text-secondary">
              {item.overview}
            </p>
          </div>

          {/* Capabilities Cards (for services & solutions) */}
          {item.capabilities && (
            <div className="grid lg:grid-cols-3 gap-6">
              {item.capabilities.map((cap, idx) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="p-7 rounded-2xl bg-white border border-navy-100 shadow-[0_4px_20px_rgba(6,27,46,0.04)] hover:border-zenith/40 hover:shadow-[0_12px_32px_rgba(6,27,46,0.07)] transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block font-display text-[15px] font-bold text-zenith mb-2">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-[18.5px] font-bold text-navy-950 mb-2.5 leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed text-text-secondary mb-5">
                      {cap.description}
                    </p>
                    <ul className="space-y-2.5 pt-4 border-t border-navy-50">
                      {cap.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-[13px] text-navy-800 leading-relaxed">
                          <svg
                            className="w-4 h-4 text-zenith shrink-0 mt-0.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Pillars Cards (for industries) */}
          {item.pillars && (
            <div className="grid lg:grid-cols-3 gap-6">
              {item.pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="p-7 rounded-2xl bg-white border border-navy-100 shadow-[0_4px_20px_rgba(6,27,46,0.04)] hover:border-zenith/40 transition-all"
                >
                  <span className="font-display text-[18px] font-bold text-zenith mb-3 block">
                    {pillar.num}
                  </span>
                  <h3 className="font-display text-[18.5px] font-bold text-navy-950 mb-2.5 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-text-secondary">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Section 3: Deliverables OR Use Cases + Toolchains & Standards ── */}
      <section className="py-16 lg:py-20 bg-surface-alt border-y border-navy-100">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left: Deliverables or Use Cases */}
            <div className="lg:col-span-7">
              {item.deliverables && (
                <>
                  <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-2">
                    What You Receive
                  </span>
                  <h2 className="font-display text-[clamp(1.4rem,2.6vw,2rem)] font-bold tracking-display text-navy-950 mb-6">
                    Key Engineering Deliverables
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {item.deliverables.map((deliv) => (
                      <div
                        key={deliv}
                        className="p-5 rounded-xl bg-white border border-navy-100 flex items-start gap-3"
                      >
                        <div className="w-7 h-7 rounded-lg bg-zenith/10 text-zenith flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-[14px] font-medium text-navy-900 leading-snug">
                          {deliv}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {item.useCases && (
                <>
                  <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-2">
                    Proven Engineering
                  </span>
                  <h2 className="font-display text-[clamp(1.4rem,2.6vw,2rem)] font-bold tracking-display text-navy-950 mb-6">
                    Reference Deployments &amp; Use Cases
                  </h2>
                  <div className="space-y-4">
                    {item.useCases.map((uc) => (
                      <div
                        key={uc.title}
                        className="p-6 rounded-xl bg-white border border-navy-100 hover:border-zenith/35 transition-colors"
                      >
                        <h3 className="font-display text-[17px] font-bold text-navy-950 mb-2">
                          {uc.title}
                        </h3>
                        <p className="text-[14px] leading-relaxed text-text-secondary">
                          {uc.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right: Tools, Standards & Related Offerings */}
            <div className="lg:col-span-5 space-y-6">
              {techList.length > 0 && (
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-navy-100">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-zenith block mb-3">
                    Technologies &amp; Toolchains
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {techList.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-lg bg-surface-alt border border-navy-100 text-[12.5px] font-medium text-navy-900"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.standards && item.standards.length > 0 && (
                <div className="p-6 sm:p-7 rounded-2xl bg-navy-950 text-white border border-navy-800">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-zenith block mb-3">
                    Standards &amp; Compliance
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.standards.map((std) => (
                      <span
                        key={std}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.08] border border-white/10 text-[12.5px] font-medium text-white/90"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.relatedOfferings && item.relatedOfferings.length > 0 && (
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-navy-100">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-zenith block mb-3">
                    Related Services &amp; Solutions
                  </span>
                  <div className="space-y-2">
                    {item.relatedOfferings.map((rel) => (
                      <Link
                        key={rel.href}
                        to={rel.href}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-surface-alt hover:bg-navy-950 hover:text-white text-[13.5px] font-semibold text-navy-900 transition-colors"
                      >
                        <span>{rel.label}</span>
                        <span className="text-zenith">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Explore Other Offerings ── */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-2">
                Continue Exploring
              </span>
              <h2 className="font-display text-[clamp(1.4rem,2.6vw,2rem)] font-bold tracking-display text-navy-950">
                {meta.otherHeading}
              </h2>
            </div>
            <Link
              to={meta.parentHref}
              className="text-[14px] font-semibold text-zenith hover:text-zenith-600 transition-colors"
            >
              View All {meta.parentLabel} →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {siblings.map((sib) => (
              <Link
                key={sib.slug}
                to={`${meta.parentHref}/${sib.slug}`}
                className="group p-6 rounded-xl bg-white border border-navy-100 hover:border-zenith/40 hover:shadow-[0_10px_28px_rgba(6,27,46,0.07)] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[10.5px] font-mono font-semibold px-2.5 py-0.5 rounded bg-navy-50 text-navy-700 mb-3">
                    {sib.badge}
                  </span>
                  <h3 className="font-display text-[16px] font-bold text-navy-950 group-hover:text-zenith transition-colors mb-2 leading-snug">
                    {sib.shortTitle || sib.title || sib.label}
                  </h3>
                  <p className="text-[12.5px] text-text-secondary leading-relaxed line-clamp-3">
                    {sib.tagline || sib.headline}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-navy-900 group-hover:text-zenith transition-colors">
                  Explore
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: CTA ── */}
      <CTABanner
        label={meta.ctaLabel}
        title={meta.ctaTitle}
        subtitle={meta.ctaSubtitle}
        primaryText="Get in Touch"
        primaryHref="/company#contact"
        secondaryText={meta.secondaryCtaText}
        secondaryHref={meta.secondaryCtaHref}
      />
    </>
  );
}
