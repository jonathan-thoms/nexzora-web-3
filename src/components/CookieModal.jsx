import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieModal({ isOpen, onClose }) {
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    analytics: true,
    functional: true,
  });
  const [savedAlert, setSavedAlert] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('nexzora_cookie_preferences');
      if (stored) {
        const parsed = JSON.parse(stored);
        setPreferences((prev) => ({ ...prev, ...parsed, necessary: true }));
      }
    } catch (e) {
      // Ignore localStorage read errors
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleToggle = (key) => {
    if (key === 'necessary') return; // Cannot toggle necessary
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = (customPrefs) => {
    const toSave = customPrefs || preferences;
    try {
      localStorage.setItem('nexzora_cookie_preferences', JSON.stringify(toSave));
    } catch (e) {}
    setSavedAlert(true);
    setTimeout(() => {
      setSavedAlert(false);
      onClose();
    }, 600);
  };

  const handleAcceptAll = () => {
    const all = { necessary: true, analytics: true, functional: true };
    setPreferences(all);
    handleSave(all);
  };

  const handleRejectNonEssential = () => {
    const minimal = { necessary: true, analytics: false, functional: false };
    setPreferences(minimal);
    handleSave(minimal);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-navy-100 overflow-hidden z-10 my-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
          >
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-navy-100 flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-zenith block mb-0.5">
                  Privacy Preferences
                </span>
                <h3 id="cookie-settings-title" className="text-lg sm:text-xl font-display font-bold text-navy-950">
                  Cookie & Privacy Settings
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-navy-400 hover:text-navy-900 hover:bg-navy-100/60 transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Description */}
            <div className="p-5 sm:p-6 space-y-4 max-h-[60vh] overflow-y-auto text-sm">
              <p className="text-navy-600 text-[13.5px] leading-relaxed">
                Nexzora uses cookies and similar technologies to ensure site security, analyze performance, and optimize technical consultation inquiries. Choose which categories you permit below.
              </p>

              {/* Cookie Types */}
              <div className="space-y-3 pt-2">
                {/* 1. Necessary */}
                <div className="p-4 rounded-xl bg-surface-alt/80 border border-navy-100 flex items-start justify-between gap-3">
                  <div className="space-y-1 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-navy-950 text-[14px]">Strictly Necessary Cookies</span>
                      <span className="text-[10px] font-bold uppercase tracking-wide bg-navy-200/70 text-navy-800 px-2 py-0.5 rounded">
                        Required
                      </span>
                    </div>
                    <p className="text-[12.5px] text-navy-600 leading-normal">
                      Essential for the website to function properly, maintaining security, load balancing, and form validation.
                    </p>
                  </div>
                  <div className="shrink-0 pt-0.5">
                    <span className="text-[12px] font-semibold text-zenith">Always Active</span>
                  </div>
                </div>

                {/* 2. Analytics */}
                <div className="p-4 rounded-xl bg-surface-alt/80 border border-navy-100 flex items-start justify-between gap-3">
                  <div className="space-y-1 pr-2">
                    <span className="font-semibold text-navy-950 text-[14px] block">Analytics & Performance</span>
                    <p className="text-[12.5px] text-navy-600 leading-normal">
                      Aggregated, privacy-respecting metrics that help us evaluate page load speeds, popular engineering offerings, and technical navigation flows.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleToggle('analytics')}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-zenith focus:ring-offset-2 mt-0.5 ${
                      preferences.analytics ? 'bg-zenith' : 'bg-navy-200'
                    }`}
                    role="switch"
                    aria-checked={preferences.analytics}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        preferences.analytics ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* 3. Functional */}
                <div className="p-4 rounded-xl bg-surface-alt/80 border border-navy-100 flex items-start justify-between gap-3">
                  <div className="space-y-1 pr-2">
                    <span className="font-semibold text-navy-950 text-[14px] block">Functional & Preferences</span>
                    <p className="text-[12.5px] text-navy-600 leading-normal">
                      Enables enhanced personalization, remembering chosen regional units and language settings.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleToggle('functional')}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-zenith focus:ring-offset-2 mt-0.5 ${
                      preferences.functional ? 'bg-zenith' : 'bg-navy-200'
                    }`}
                    role="switch"
                    aria-checked={preferences.functional}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        preferences.functional ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-4 sm:p-5 bg-navy-50/70 border-t border-navy-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="w-full sm:w-auto px-4 py-2 text-[13px] font-semibold text-navy-700 hover:text-navy-950 hover:bg-navy-100/60 rounded-lg transition-colors"
              >
                Reject Non-Essential
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleSave()}
                  className="w-full sm:w-auto px-4 py-2.5 text-[13px] font-semibold text-navy-800 bg-white border border-navy-200 rounded-lg hover:bg-navy-50 shadow-xs transition-colors"
                >
                  {savedAlert ? 'Preferences Saved!' : 'Save Preferences'}
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-5 py-2.5 text-[13px] font-semibold text-white bg-zenith hover:bg-zenith-600 rounded-lg shadow-sm transition-colors whitespace-nowrap"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
