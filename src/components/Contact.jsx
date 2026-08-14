import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay },
  }),
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-navy-950 overflow-hidden" id="contact">
      {/* Subtle geometric background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700/40 to-transparent" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-zenith/[0.04] blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-navy-600/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 items-start">
          {/* Left — Messaging */}
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0}
              className="inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-label text-zenith mb-5"
            >
              <span className="w-8 h-[1.5px] bg-zenith rounded-full" />
              Get in Touch
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0.08}
              className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold tracking-display text-white leading-[1.12] mb-6"
            >
              Let's engineer your
              <br />
              next breakthrough
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0.16}
              className="text-[16px] leading-relaxed text-navy-300 max-w-[420px] mb-10"
            >
              Whether you're exploring a partnership, scoping a project, or need engineering expertise — we'd like to hear from you.
            </motion.p>

            {/* Contact details */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0.24}
              className="space-y-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-800/60 text-zenith shrink-0">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.5 12.5c0 7-9.5 11-9.5 11s-9.5-4-9.5-11a9.5 9.5 0 1 1 19 0Z" />
                    <circle cx="12" cy="12.5" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-navy-400 uppercase tracking-label mb-1">Office</p>
                  <p className="text-[15px] text-navy-200">Nexzora Technologies HQ</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-800/60 text-zenith shrink-0">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-navy-400 uppercase tracking-label mb-1">Email</p>
                  <a href="mailto:contact@nexzora.com" className="text-[15px] text-navy-200 hover:text-zenith transition-colors">
                    contact@nexzora.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-800/60 text-zenith shrink-0">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-navy-400 uppercase tracking-label mb-1">Phone</p>
                  <a href="tel:+1234567890" className="text-[15px] text-navy-200 hover:text-zenith transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={0.12}
          >
            <div className="bg-navy-900/50 border border-navy-800/60 rounded-xl p-8 lg:p-10 backdrop-blur-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="text-center py-12"
                >
                  <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-zenith/10 text-zenith">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <h3 className="font-display text-[22px] font-bold text-white mb-2">Message sent</h3>
                  <p className="text-[15px] text-navy-300">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-first" className="block text-[12.5px] font-semibold text-navy-300 uppercase tracking-label mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="contact-first"
                        required
                        className="w-full px-4 py-3 bg-navy-950/80 border border-navy-700/50 rounded-lg text-[14.5px] text-white placeholder-navy-500 outline-none transition-all duration-200 focus:border-zenith/60 focus:ring-1 focus:ring-zenith/20"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-last" className="block text-[12.5px] font-semibold text-navy-300 uppercase tracking-label mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="contact-last"
                        required
                        className="w-full px-4 py-3 bg-navy-950/80 border border-navy-700/50 rounded-lg text-[14.5px] text-white placeholder-navy-500 outline-none transition-all duration-200 focus:border-zenith/60 focus:ring-1 focus:ring-zenith/20"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-[12.5px] font-semibold text-navy-300 uppercase tracking-label mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      className="w-full px-4 py-3 bg-navy-950/80 border border-navy-700/50 rounded-lg text-[14.5px] text-white placeholder-navy-500 outline-none transition-all duration-200 focus:border-zenith/60 focus:ring-1 focus:ring-zenith/20"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="contact-company" className="block text-[12.5px] font-semibold text-navy-300 uppercase tracking-label mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      className="w-full px-4 py-3 bg-navy-950/80 border border-navy-700/50 rounded-lg text-[14.5px] text-white placeholder-navy-500 outline-none transition-all duration-200 focus:border-zenith/60 focus:ring-1 focus:ring-zenith/20"
                      placeholder="Company name"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-[12.5px] font-semibold text-navy-300 uppercase tracking-label mb-2">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-navy-950/80 border border-navy-700/50 rounded-lg text-[14.5px] text-white placeholder-navy-500 outline-none transition-all duration-200 focus:border-zenith/60 focus:ring-1 focus:ring-zenith/20 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-zenith text-white text-[14.5px] font-semibold rounded-lg transition-all duration-200 hover:bg-zenith-600 hover:shadow-[0_8px_24px_rgba(255,90,0,0.3)] active:scale-[0.99] cursor-pointer"
                    id="contact-submit"
                  >
                    Send Message
                  </button>

                  <p className="text-[12px] text-navy-500 text-center">
                    By submitting, you agree to our Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
