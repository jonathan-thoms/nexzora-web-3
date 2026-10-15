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
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Access key from environment or fallback
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setErrorMessage(
        'Web3Forms access key is missing. Please add VITE_WEB3FORMS_ACCESS_KEY in your .env file.'
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = {
        access_key: accessKey,
        subject: `New Project Inquiry from ${formData.firstName} ${formData.lastName} (${formData.company || 'Website Inquiry'})`,
        from_name: 'NEXZORA Technologies Contact',
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        company: formData.company || 'Not provided',
        message: formData.message,
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: '',
        });
      } else {
        setErrorMessage(result.message || 'Failed to send message. Please try again or email us directly.');
      }
    } catch (err) {
      setErrorMessage('Network error occurred. Please check your connection or email info@nexzora.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-navy-950 overflow-hidden" id="contact">
      {/* Background image + dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(4,30,66,0.92) 0%, rgba(4,30,66,0.85) 40%, rgba(4,30,66,0.75) 70%, rgba(4,30,66,0.65) 100%)',
          }}
        />
      </div>
      {/* Subtle geometric accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700/40 to-transparent" />
        <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-zenith/[0.04] blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-navy-600/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          {/* Left — Messaging */}
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0}
              className="inline-flex items-center gap-2 text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-label text-zenith mb-4 sm:mb-5"
            >
              <span className="w-6 sm:w-8 h-[1.5px] bg-zenith rounded-full" />
              Get in Touch
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0.08}
              className="font-display text-[clamp(1.65rem,3.8vw,3rem)] font-bold tracking-display text-white leading-[1.14] mb-4 sm:mb-6"
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
              className="text-[14.5px] sm:text-[16px] leading-relaxed text-navy-300 max-w-[420px] mb-8 sm:mb-10"
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
              className="space-y-4 sm:space-y-5"
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-800/60 text-zenith shrink-0">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.5 12.5c0 7-9.5 11-9.5 11s-9.5-4-9.5-11a9.5 9.5 0 1 1 19 0Z" />
                    <circle cx="12" cy="12.5" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] sm:text-[13px] font-semibold text-navy-400 uppercase tracking-label mb-0.5 sm:mb-1">Location</p>
                  <p className="text-[14px] sm:text-[15px] text-navy-200">Dallas, Texas</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-800/60 text-zenith shrink-0">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] sm:text-[13px] font-semibold text-navy-400 uppercase tracking-label mb-0.5 sm:mb-1">Email</p>
                  <a href="mailto:info@nexzora.com" className="text-[14px] sm:text-[15px] text-navy-200 hover:text-zenith active:text-zenith transition-colors">
                    info@nexzora.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-800/60 text-zenith shrink-0">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] sm:text-[13px] font-semibold text-navy-400 uppercase tracking-label mb-0.5 sm:mb-1">Phone</p>
                  <a href="tel:+14696466162" className="text-[14px] sm:text-[15px] text-navy-200 hover:text-zenith active:text-zenith transition-colors">
                    +1 469-646-6162
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-800/60 text-zenith shrink-0">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] sm:text-[13px] font-semibold text-navy-400 uppercase tracking-label mb-0.5 sm:mb-1">Business Hours</p>
                  <p className="text-[14px] sm:text-[15px] text-navy-200">8:00 AM – 6:00 PM CST</p>
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
            <div className="bg-navy-900/60 border border-navy-800/80 rounded-xl p-5 sm:p-8 lg:p-10 backdrop-blur-sm shadow-xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="text-center py-10 sm:py-12"
                >
                  <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-zenith/10 text-zenith">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <h3 className="font-display text-[20px] sm:text-[22px] font-bold text-white mb-2">Message sent</h3>
                  <p className="text-[14.5px] sm:text-[15px] text-navy-300 mb-6">
                    Thank you for reaching out. We will review your inquiry and get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-navy-700 text-white text-[13.5px] font-medium hover:border-zenith/60 hover:text-zenith transition-all cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Honeypot Spam Protection (hidden from real users) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {/* Name row */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="contact-first" className="block text-[12px] sm:text-[12.5px] font-semibold text-navy-300 uppercase tracking-label mb-1.5 sm:mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="contact-first"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 sm:py-3.5 bg-navy-950/80 border border-navy-700/50 rounded-lg text-[16px] sm:text-[14.5px] text-white placeholder-navy-500 outline-none transition-all duration-200 focus:border-zenith/60 focus:ring-1 focus:ring-zenith/20 disabled:opacity-50"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-last" className="block text-[12px] sm:text-[12.5px] font-semibold text-navy-300 uppercase tracking-label mb-1.5 sm:mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="contact-last"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 sm:py-3.5 bg-navy-950/80 border border-navy-700/50 rounded-lg text-[16px] sm:text-[14.5px] text-white placeholder-navy-500 outline-none transition-all duration-200 focus:border-zenith/60 focus:ring-1 focus:ring-zenith/20 disabled:opacity-50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-[12px] sm:text-[12.5px] font-semibold text-navy-300 uppercase tracking-label mb-1.5 sm:mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 sm:py-3.5 bg-navy-950/80 border border-navy-700/50 rounded-lg text-[16px] sm:text-[14.5px] text-white placeholder-navy-500 outline-none transition-all duration-200 focus:border-zenith/60 focus:ring-1 focus:ring-zenith/20 disabled:opacity-50"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="contact-company" className="block text-[12px] sm:text-[12.5px] font-semibold text-navy-300 uppercase tracking-label mb-1.5 sm:mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 sm:py-3.5 bg-navy-950/80 border border-navy-700/50 rounded-lg text-[16px] sm:text-[14.5px] text-white placeholder-navy-500 outline-none transition-all duration-200 focus:border-zenith/60 focus:ring-1 focus:ring-zenith/20 disabled:opacity-50"
                      placeholder="Company name"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-[12px] sm:text-[12.5px] font-semibold text-navy-300 uppercase tracking-label mb-1.5 sm:mb-2">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 sm:py-3.5 bg-navy-950/80 border border-navy-700/50 rounded-lg text-[16px] sm:text-[14.5px] text-white placeholder-navy-500 outline-none transition-all duration-200 focus:border-zenith/60 focus:ring-1 focus:ring-zenith/20 resize-none disabled:opacity-50"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  {/* Error Notification Banner */}
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-200 text-[13px] text-center"
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 min-h-[48px] bg-zenith text-white text-[15px] font-semibold rounded-lg transition-all duration-200 hover:bg-zenith-600 hover:shadow-[0_8px_24px_rgba(255,90,0,0.3)] active:scale-[0.99] cursor-pointer shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    id="contact-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        <span>Sending inquiry...</span>
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  <p className="text-[11.5px] sm:text-[12px] text-navy-400 text-center">
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
