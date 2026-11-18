import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, SOLUTIONS_DATA, INDUSTRIES_DATA } from '../data/offeringsData';

const SERVICES_SUBMENU = [
  {
    key: 'services',
    label: 'Services',
    href: '/services',
    description: 'Engineering, AUTOSAR, XIL, Cloud & Consulting',
    items: SERVICES_DATA.map((s) => ({
      label: s.shortTitle,
      badge: s.badge,
      href: `/services/${s.slug}`,
    })),
  },
  {
    key: 'solutions',
    label: 'Solutions',
    href: '/solutions',
    description: 'SDV, ADAS, IVI, BMS, Vision/Agentic AI & Robotics',
    items: SOLUTIONS_DATA.map((s) => ({
      label: s.shortTitle,
      badge: s.badge,
      href: `/solutions/${s.slug}`,
    })),
  },
  {
    key: 'industries',
    label: 'Industries',
    href: '/industries',
    description: 'Domain-specific safety & embedded engineering',
    items: INDUSTRIES_DATA.map((ind) => ({
      label: ind.shortTitle,
      badge: ind.badge,
      href: `/industries/${ind.slug}`,
    })),
  },
];

const NAV_ITEMS = [
  {
    label: 'Services',
    href: '/services',
    hasCascadingMenu: true,
    categories: SERVICES_SUBMENU,
  },
  { label: 'Quality', href: '/quality' },
  { label: 'Company', href: '/company' },
  { label: 'Careers', href: '/careers' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategoryKey, setActiveCategoryKey] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobileSubExpanded, setMobileSubExpanded] = useState(null);
  const closeTimeoutRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setActiveCategoryKey(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleServicesEnter = () => {
    clearTimeout(closeTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
      setActiveCategoryKey(null);
    }, 160);
  };

  const closeAllMenus = () => {
    clearTimeout(closeTimeoutRef.current);
    setServicesOpen(false);
    setActiveCategoryKey(null);
    setMobileMenuOpen(false);
    setMobileServicesExpanded(false);
    setMobileSubExpanded(null);
  };

  const handleContactClick = (e) => {
    closeAllMenus();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      e.preventDefault();
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeCategory =
    SERVICES_SUBMENU.find((cat) => cat.key === activeCategoryKey) || null;

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#fafaf8]/95 backdrop-blur-md ${
        scrolled || mobileMenuOpen ? 'shadow-[0_1px_3px_rgba(6,27,46,0.06)]' : ''
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[68px] sm:h-[72px]">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeAllMenus}
            className="flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-zenith rounded-md"
            id="header-logo"
          >
            <img
              src="/logo.png"
              alt="NEXZORA Technologies"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) =>
              item.hasCascadingMenu ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <Link
                    to={item.href}
                    onClick={closeAllMenus}
                    className={`relative inline-flex items-center gap-1.5 px-4 py-2.5 text-[15px] font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                      servicesOpen
                        ? 'text-navy-900'
                        : 'text-text-secondary hover:text-navy-900'
                    }`}
                    id="nav-services"
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesOpen ? 'rotate-180 text-zenith' : 'text-navy-400'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    {servicesOpen && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-zenith"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                  </Link>

                  {/* Cascading Level-1 & Level-2 Flyout Menu (Expert Engine Style) */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        key="services-cascading-menu"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-0 top-full pt-2.5 z-50"
                        id="services-dropdown-menu"
                      >
                        <div className="relative flex items-start">
                          {/* Level 1 Panel: Services / Solutions / Industries */}
                          <div className="w-[232px] bg-white border border-navy-100 rounded-xl shadow-[0_16px_44px_rgba(6,27,46,0.12)] py-2">
                            {SERVICES_SUBMENU.map((cat) => {
                              const isHovered = activeCategoryKey === cat.key;
                              return (
                                <div
                                  key={cat.key}
                                  onMouseEnter={() => setActiveCategoryKey(cat.key)}
                                  className="px-1.5"
                                >
                                  <Link
                                    to={cat.href}
                                    onClick={closeAllMenus}
                                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[14.5px] font-semibold transition-all duration-150 ${
                                      isHovered
                                        ? 'bg-navy-950 text-white shadow-xs'
                                        : 'text-navy-900 hover:bg-surface-alt hover:text-zenith'
                                    }`}
                                    id={`nav-tier1-${cat.key}`}
                                  >
                                    <span>{cat.label}</span>
                                    <svg
                                      className={`w-4 h-4 transition-transform duration-150 ${
                                        isHovered
                                          ? 'text-zenith translate-x-0.5'
                                          : 'text-navy-400'
                                      }`}
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2.2}
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                  </Link>
                                </div>
                              );
                            })}
                          </div>

                          {/* Level 2 Flyout Submenu Panel */}
                          <AnimatePresence mode="wait">
                            {activeCategory && (
                              <motion.div
                                key={activeCategory.key}
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -4 }}
                                transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                                className="pl-2"
                                id={`nav-tier2-${activeCategory.key}`}
                              >
                                <div className="w-[320px] bg-white border border-navy-100 rounded-xl shadow-[0_18px_48px_rgba(6,27,46,0.14)] overflow-hidden">
                                  {/* Submenu Header — Clean Main Page Link */}
                                  <Link
                                    to={activeCategory.href}
                                    onClick={closeAllMenus}
                                    className="group px-4 py-3 bg-surface-alt border-b border-navy-100/80 flex items-center justify-between gap-2 hover:bg-navy-950 transition-colors duration-150"
                                  >
                                    <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-zenith group-hover:text-white transition-colors">
                                      {activeCategory.label}
                                    </span>
                                    <svg
                                      className="w-4 h-4 text-zenith group-hover:text-white group-hover:translate-x-0.5 transition-all"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2.2}
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                  </Link>

                                  {/* Submenu Items List */}
                                  <ul className="py-2 px-1.5 max-h-[70vh] overflow-y-auto">
                                    {activeCategory.items.map((subItem) => (
                                      <li key={subItem.href}>
                                        <Link
                                          to={subItem.href}
                                          onClick={closeAllMenus}
                                          className="group flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-alt transition-colors duration-150"
                                        >
                                          <span className="text-[13.5px] font-medium text-navy-900 group-hover:text-zenith transition-colors leading-snug">
                                            {subItem.label}
                                          </span>
                                          <svg
                                            className="w-3.5 h-3.5 text-navy-300 group-hover:text-zenith group-hover:translate-x-0.5 transition-all shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                          >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                          </svg>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.href}
                    onClick={closeAllMenus}
                    className="relative px-4 py-2.5 text-[15px] font-medium tracking-wide transition-colors duration-200 text-text-secondary hover:text-navy-900"
                    id={`nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-zenith/70 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                </div>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/company#contact"
            onClick={handleContactClick}
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-navy-900 text-white text-[13.5px] font-semibold tracking-wide rounded-[6px] transition-all duration-200 hover:bg-navy-800 hover:shadow-[0_4px_16px_rgba(10,37,64,0.2)] active:scale-[0.98]"
            id="header-cta"
          >
            Contact Us
          </Link>

          {/* Mobile menu toggle button (Animated Hamburger to X) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative w-11 h-11 flex flex-col items-center justify-center rounded-lg text-navy-900 hover:bg-navy-100/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zenith"
            id="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`w-5 h-[2px] bg-navy-900 rounded-full transition-all duration-300 ease-out origin-center ${
                mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`w-5 h-[2px] bg-navy-900 rounded-full my-[4px] transition-all duration-200 ease-out ${
                mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-5 h-[2px] bg-navy-900 rounded-full transition-all duration-300 ease-out origin-center ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 68px)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed top-[68px] sm:top-[72px] left-0 right-0 bg-[#fafaf8] border-t border-navy-100 shadow-2xl overflow-y-auto flex flex-col z-40"
            id="mobile-menu-drawer"
          >
            <div className="flex-1 px-5 py-6 space-y-1">
              {NAV_ITEMS.map((item) => {
                if (item.hasCascadingMenu) {
                  return (
                    <div key={item.label} className="border-b border-navy-100/60 pb-1">
                      <button
                        onClick={() => setMobileServicesExpanded((prev) => !prev)}
                        className="w-full flex items-center justify-between py-3.5 text-left text-[16px] font-semibold text-navy-950 hover:text-zenith transition-colors"
                        aria-expanded={mobileServicesExpanded}
                      >
                        <span>{item.label}</span>
                        <motion.svg
                          animate={{ rotate: mobileServicesExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-4 h-4 text-navy-400 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </motion.svg>
                      </button>

                      <AnimatePresence>
                        {mobileServicesExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden pl-2 pb-3 space-y-2"
                          >
                            {SERVICES_SUBMENU.map((cat) => {
                              const isSubOpen = mobileSubExpanded === cat.key;
                              return (
                                <div
                                  key={cat.key}
                                  className="rounded-lg bg-white border border-navy-100/80 overflow-hidden"
                                >
                                  <button
                                    onClick={() =>
                                      setMobileSubExpanded((prev) =>
                                        prev === cat.key ? null : cat.key
                                      )
                                    }
                                    className="w-full flex items-center justify-between px-4 py-3 text-left text-[14.5px] font-semibold text-navy-900 hover:text-zenith transition-colors"
                                    aria-expanded={isSubOpen}
                                  >
                                    <span>{cat.label}</span>
                                    <motion.svg
                                      animate={{ rotate: isSubOpen ? 180 : 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="w-4 h-4 text-zenith shrink-0"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </motion.svg>
                                  </button>

                                  <AnimatePresence>
                                    {isSubOpen && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                                        className="overflow-hidden bg-surface-alt/70 border-t border-navy-100/70 px-4 py-2.5"
                                      >
                                        <Link
                                          to={cat.href}
                                          onClick={closeAllMenus}
                                          className="flex items-center justify-between py-1.5 text-[13px] font-semibold text-zenith mb-1"
                                        >
                                          <span>{cat.label}</span>
                                          <span>→</span>
                                        </Link>
                                        <ul className="space-y-1">
                                          {cat.items.map((subItem) => (
                                            <li key={subItem.href}>
                                              <Link
                                                to={subItem.href}
                                                onClick={closeAllMenus}
                                                className="block py-1.5 text-[13.5px] text-navy-800 hover:text-zenith transition-colors"
                                              >
                                                {subItem.label}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <div key={item.label} className="border-b border-navy-100/60 last:border-b-0 pb-1">
                    <Link
                      to={item.href}
                      onClick={closeAllMenus}
                      className="block py-3.5 text-[16px] font-semibold text-navy-950 hover:text-zenith active:text-zenith transition-colors"
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="p-5 bg-surface-alt border-t border-navy-100 space-y-4 safe-bottom">
              <Link
                to="/company#contact"
                onClick={handleContactClick}
                className="w-full flex items-center justify-center py-3.5 px-6 bg-zenith text-white text-[15px] font-semibold rounded-lg shadow-[0_4px_16px_rgba(217,106,26,0.25)] hover:bg-zenith-600 active:scale-[0.99] transition-all"
              >
                Contact Us
              </Link>

              <div className="pt-2 flex flex-col gap-2 text-center text-[13px] text-text-secondary">
                <a href="mailto:info@nexzora.com" className="hover:text-zenith transition-colors">
                  info@nexzora.com
                </a>
                <a href="tel:+14696466162" className="hover:text-zenith transition-colors">
                  +1 469-646-6162
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
