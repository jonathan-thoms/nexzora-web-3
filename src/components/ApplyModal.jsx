import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ApplyModal({ isOpen, onClose, job }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    resumeUrl: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Lock body scroll and handle ESC key when open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset form when modal closes or opens for a new job
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setErrorMessage('');
    }
  }, [isOpen, job]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '92c6bd1f-9402-4d40-9ff9-81395980ce61';

    const positionTitle = job?.title || 'General Application / Talent Pool';

    try {
      const payload = {
        access_key: accessKey,
        subject: `Job Application: ${positionTitle} — ${formData.name}`,
        from_name: 'NEXZORA Careers Portal',
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        position: positionTitle,
        department: job?.department || 'General',
        location: job?.location || 'Any',
        portfolio: formData.portfolio || 'Not provided',
        resume_link: formData.resumeUrl,
        message: formData.message || 'No additional note provided',
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
          name: '',
          email: '',
          phone: '',
          portfolio: '',
          resumeUrl: '',
          message: '',
        });
      } else {
        setErrorMessage(
          result.message || 'Failed to submit application. Please email info@nexzora.com directly.'
        );
      }
    } catch (err) {
      setErrorMessage(
        'A network error occurred. Please try again or email your CV to info@nexzora.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const jobTitle = job?.title || 'General Application';
  const mailtoSubject = encodeURIComponent(`Job Application: ${jobTitle}`);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="relative w-full max-w-xl my-8 bg-navy-900 border border-navy-700/80 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="relative px-6 py-5 sm:px-8 sm:py-6 border-b border-navy-800 bg-navy-950/60">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-semibold text-zenith uppercase tracking-wider bg-zenith/10 px-2.5 py-0.5 rounded-full">
                      {job?.department || 'Careers'}
                    </span>
                    {job?.location && (
                      <span className="text-[12px] text-navy-400">
                        {job.location}
                      </span>
                    )}
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-white font-display">
                    {job?.isGeneral
                      ? 'Submit Your Resume'
                      : job
                      ? `Apply for ${job.title}`
                      : 'Submit Your Resume'}
                  </h3>
                  <p className="text-[13px] text-navy-400 mt-0.5">
                    {job?.isGeneral
                      ? "We're always looking for exceptional talent. Submit your profile below."
                      : 'Join our global engineering team at NEXZORA.'}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  className="p-1.5 rounded-lg text-navy-400 hover:text-white hover:bg-navy-800 transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 max-h-[calc(85vh-120px)] overflow-y-auto">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-zenith/15 text-zenith">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-display text-[20px] font-bold text-white mb-2">
                    Application Submitted!
                  </h4>
                  <p className="text-[14px] text-navy-300 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you for applying to NEXZORA Technologies. Our talent acquisition team will review your qualifications and reach out if there's a strong alignment.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-zenith text-white text-[13.5px] font-semibold hover:bg-zenith-600 transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot Spam Protection */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {/* Full Name */}
                  <div>
                    <label className="block text-[12px] font-semibold text-navy-300 uppercase tracking-label mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-navy-700/60 rounded-lg text-[14px] text-white placeholder-navy-500 outline-none focus:border-zenith/60 focus:ring-1 focus:ring-zenith/20 disabled:opacity-50"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-semibold text-navy-300 uppercase tracking-label mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        placeholder="jane@example.com"
                        className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-navy-700/60 rounded-lg text-[14px] text-white placeholder-navy-500 outline-none focus:border-zenith/60 focus:ring-1 focus:ring-zenith/20 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold text-navy-300 uppercase tracking-label mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-navy-700/60 rounded-lg text-[14px] text-white placeholder-navy-500 outline-none focus:border-zenith/60 focus:ring-1 focus:ring-zenith/20 disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Resume / CV Link */}
                  <div>
                    <label className="block text-[12px] font-semibold text-navy-300 uppercase tracking-label mb-1.5">
                      Resume / CV Link *
                    </label>
                    <input
                      type="url"
                      name="resumeUrl"
                      required
                      value={formData.resumeUrl}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Google Drive, Dropbox, or OneDrive shareable link"
                      className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-navy-700/60 rounded-lg text-[14px] text-white placeholder-navy-500 outline-none focus:border-zenith/60 focus:ring-1 focus:ring-zenith/20 disabled:opacity-50"
                    />
                    <p className="text-[11.5px] text-navy-400 mt-1">
                      Please ensure the link is set to "Anyone with the link can view".
                    </p>
                  </div>

                  {/* LinkedIn / Portfolio */}
                  <div>
                    <label className="block text-[12px] font-semibold text-navy-300 uppercase tracking-label mb-1.5">
                      LinkedIn or Portfolio URL
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="https://linkedin.com/in/username or https://github.com/..."
                      className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-navy-700/60 rounded-lg text-[14px] text-white placeholder-navy-500 outline-none focus:border-zenith/60 focus:ring-1 focus:ring-zenith/20 disabled:opacity-50"
                    />
                  </div>

                  {/* Note / Message */}
                  <div>
                    <label className="block text-[12px] font-semibold text-navy-300 uppercase tracking-label mb-1.5">
                      Brief Introduction / Note
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Tell us a little about your experience, notable projects, and what interests you at NEXZORA..."
                      className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-navy-700/60 rounded-lg text-[14px] text-white placeholder-navy-500 outline-none focus:border-zenith/60 focus:ring-1 focus:ring-zenith/20 resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Error Banner */}
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-200 text-[12.5px] text-center">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-5 min-h-[46px] bg-zenith text-white text-[14px] font-semibold rounded-lg hover:bg-zenith-600 transition-all duration-200 shadow-lg hover:shadow-[0_8px_20px_rgba(255,90,0,0.3)] active:scale-[0.99] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        <span>Submitting application...</span>
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>

                  {/* Email alternative option */}
                  <div className="pt-2 text-center border-t border-navy-800/80">
                    <p className="text-[12px] text-navy-400">
                      Prefer to email your resume directly?{' '}
                      <a
                        href={`mailto:info@nexzora.com?subject=${mailtoSubject}`}
                        className="text-zenith hover:underline font-medium"
                      >
                        Email info@nexzora.com
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
