import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  {
    label: 'Products',
    href: '/#capabilities',
    megaMenu: {
      columns: [
        { heading: 'Platforms', items: [
          { label: 'Embedded OS Suite', href: '/#capabilities' },
          { label: 'AutoDrive SDK', href: '/#capabilities' },
          { label: 'CyberShield Pro', href: '/#capabilities' },
        ]},
        { heading: 'Tools', items: [
          { label: 'ChipForge IDE', href: '/#capabilities' },
          { label: 'RoboSim Studio', href: '/#capabilities' },
          { label: 'SecureNet Analyzer', href: '/#capabilities' },
        ]},
      ],
    },
  },
  {
    label: 'Services',
    href: '/services',
    megaMenu: {
      columns: [
        { heading: 'Engineering', items: [
          { label: 'System Design', href: '/services#engineering' },
          { label: 'VLSI Development', href: '/services#engineering' },
          { label: 'Firmware Engineering', href: '/services#engineering' },
        ]},
        { heading: 'Consulting', items: [
          { label: 'Architecture Review', href: '/services#consulting' },
          { label: 'Compliance Audits', href: '/services#consulting' },
          { label: 'Digital Transformation', href: '/services#consulting' },
        ]},
      ],
    },
  },
  {
    label: 'Industries',
    href: '/industries',
    megaMenu: {
      columns: [
        { heading: 'Sectors', items: [
          { label: 'Automotive & Mobility', href: '/industries#automotive' },
          { label: 'Semiconductor', href: '/industries#semiconductor' },
          { label: 'Industrial & Robotics', href: '/industries#robotics' },
          { label: 'Technology', href: '/industries#technology' },
        ]},
      ],
    },
  },
  {
    label: 'Innovation',
    href: '/innovation',
    megaMenu: {
      columns: [
        { heading: 'R&D', items: [
          { label: 'Research Labs', href: '/innovation#research' },
          { label: 'Patent Portfolio', href: '/innovation#patents' },
          { label: 'Open Source', href: '/innovation#opensource' },
        ]},
        { heading: 'Insights', items: [
          { label: 'Whitepapers', href: '/innovation#insights' },
          { label: 'Case Studies', href: '/innovation#insights' },
          { label: 'Tech Blog', href: '/innovation#insights' },
        ]},
      ],
    },
  },
  { label: 'Company', href: '/company' },
  { label: 'Careers', href: '/careers' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState(null);
  const timeoutRef = useRef(null);
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
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveMenu(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    if (NAV_ITEMS[index].megaMenu) {
      setActiveMenu(index);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const handleMenuPanelEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const toggleMobileAccordion = (index) => {
    setMobileExpandedIndex((prev) => (prev === index ? null : index));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileExpandedIndex(null);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#fafaf8]/95 backdrop-blur-md ${
        scrolled || mobileMenuOpen ? 'shadow-[0_1px_3px_rgba(6,27,46,0.06)]' : ''
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[68px] sm:h-[72px]">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-zenith rounded-md"
            id="header-logo"
          >
            <img
              src="/logo.png"
              alt="NEXZORA Technologies"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Center Navigation */}
          <nav className="hidden lg:flex items-center gap-1" id="header-nav">
            {NAV_ITEMS.map((item, index) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
              >
                {item.megaMenu ? (
                  <Link
                    to={item.href || '#'}
                    className={`relative px-4 py-2.5 text-[15px] font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                      activeMenu === index
                        ? 'text-navy-900'
                        : 'text-text-secondary hover:text-navy-900'
                    }`}
                    id={`nav-${item.label.toLowerCase()}`}
                    onClick={() => setActiveMenu(null)}
                  >
                    {item.label}
                    {activeMenu === index && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-zenith"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                    {activeMenu !== index && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-zenith/70 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    )}
                  </Link>
                ) : (
                  <Link
                    to={item.href || '#'}
                    className="relative px-4 py-2.5 text-[15px] font-medium tracking-wide transition-colors duration-200 text-text-secondary hover:text-navy-900"
                    id={`nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-zenith/70 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/company#contact"
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

      {/* Desktop Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu !== null && NAV_ITEMS[activeMenu]?.megaMenu && (
          <motion.div
            key="mega-menu"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="hidden lg:block absolute top-full left-0 right-0 bg-[#fafaf8] border-t border-navy-100 shadow-[0_12px_40px_rgba(6,27,46,0.06)]"
            onMouseEnter={handleMenuPanelEnter}
            onMouseLeave={handleMouseLeave}
            id="mega-menu-panel"
          >
            <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-8">
              <div className="flex gap-16">
                {NAV_ITEMS[activeMenu].megaMenu.columns.map((col) => (
                  <div key={col.heading}>
                    <h4 className="text-[11px] font-semibold uppercase tracking-label text-text-tertiary mb-4">
                      {col.heading}
                    </h4>
                    <ul className="space-y-2.5">
                      {col.items.map((menuItem) => (
                        <li key={menuItem.label}>
                          <Link
                            to={menuItem.href}
                            onClick={() => setActiveMenu(null)}
                            className="text-[14px] font-medium text-navy-800 hover:text-zenith transition-colors duration-150"
                          >
                            {menuItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {/* Featured callout */}
                <div className="ml-auto max-w-[240px] p-5 bg-surface-alt rounded-lg border border-navy-100">
                  <p className="text-[11px] font-semibold uppercase tracking-label text-zenith mb-2">
                    Featured
                  </p>
                  <p className="text-[14px] font-medium text-navy-900 leading-snug">
                    Explore our latest innovations in engineering excellence.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center mt-3 text-[13px] font-semibold text-zenith hover:text-zenith-600 transition-colors"
                  >
                    Learn more
                    <svg className="ml-1.5 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              {NAV_ITEMS.map((item, index) => {
                const isExpandable = !!item.megaMenu;
                const isExpanded = mobileExpandedIndex === index;

                return (
                  <div key={item.label} className="border-b border-navy-100/60 last:border-b-0 pb-1">
                    {isExpandable ? (
                      <div>
                        <button
                          onClick={() => toggleMobileAccordion(index)}
                          className="w-full flex items-center justify-between py-3.5 text-left text-[16px] font-semibold text-navy-950 hover:text-zenith transition-colors active:text-zenith"
                          aria-expanded={isExpanded}
                        >
                          <span>{item.label}</span>
                          <motion.svg
                            animate={{ rotate: isExpanded ? 180 : 0 }}
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
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                              className="overflow-hidden bg-navy-50/50 rounded-lg px-4 py-3 mb-2 space-y-4"
                            >
                              {item.megaMenu.columns.map((col) => (
                                <div key={col.heading}>
                                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zenith block mb-2">
                                    {col.heading}
                                  </span>
                                  <ul className="space-y-2">
                                    {col.items.map((subItem) => (
                                      <li key={subItem.label}>
                                        <Link
                                          to={subItem.href}
                                          onClick={closeMobileMenu}
                                          className="block py-1 text-[14px] text-navy-800 hover:text-zenith active:text-zenith transition-colors"
                                        >
                                          {subItem.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href || '#'}
                        onClick={closeMobileMenu}
                        className="block py-3.5 text-[16px] font-semibold text-navy-950 hover:text-zenith active:text-zenith transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="p-5 bg-surface-alt border-t border-navy-100 space-y-4 safe-bottom">
              <Link
                to="/company#contact"
                onClick={closeMobileMenu}
                className="w-full flex items-center justify-center py-3.5 px-6 bg-zenith text-white text-[15px] font-semibold rounded-lg shadow-[0_4px_16px_rgba(217,106,26,0.25)] hover:bg-zenith-600 active:scale-[0.99] transition-all"
              >
                Contact Us
              </Link>

              <div className="pt-2 flex flex-col gap-2 text-center text-[13px] text-text-secondary">
                <a href="mailto:contact@nexzora.com" className="hover:text-zenith transition-colors">
                  contact@nexzora.com
                </a>
                <a href="tel:+1234567890" className="hover:text-zenith transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
