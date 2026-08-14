import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  {
    label: 'Products',
    megaMenu: {
      columns: [
        { heading: 'Platforms', items: ['Embedded OS Suite', 'AutoDrive SDK', 'CyberShield Pro'] },
        { heading: 'Tools', items: ['ChipForge IDE', 'RoboSim Studio', 'SecureNet Analyzer'] },
      ],
    },
  },
  {
    label: 'Services',
    megaMenu: {
      columns: [
        { heading: 'Engineering', items: ['System Design', 'VLSI Development', 'Firmware Engineering'] },
        { heading: 'Consulting', items: ['Architecture Review', 'Compliance Audits', 'Digital Transformation'] },
      ],
    },
  },
  {
    label: 'Industries',
    megaMenu: {
      columns: [
        { heading: 'Sectors', items: ['Automotive & Mobility', 'Aerospace & Defense', 'Industrial IoT', 'Healthcare Tech'] },
      ],
    },
  },
  {
    label: 'Innovation',
    megaMenu: {
      columns: [
        { heading: 'R&D', items: ['Research Labs', 'Patent Portfolio', 'Open Source'] },
        { heading: 'Insights', items: ['Whitepapers', 'Case Studies', 'Tech Blog'] },
      ],
    },
  },
  { label: 'Company' },
  { label: 'Careers' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const timeoutRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fafaf8]/95 backdrop-blur-md shadow-[0_1px_3px_rgba(6,27,46,0.06)]'
          : 'bg-[#fafaf8]'
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0" id="header-logo">
            <img
              src="/logo.png"
              alt="NEXZORA Technologies"
              className="h-9 w-auto"
            />
          </a>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-1" id="header-nav">
            {NAV_ITEMS.map((item, index) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <button
                  className={`relative px-4 py-2.5 text-[15px] font-medium tracking-wide transition-colors duration-200 ${
                    activeMenu === index
                      ? 'text-navy-900'
                      : 'text-text-secondary hover:text-navy-900'
                  }`}
                  id={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                  {/* Active underline */}
                  {activeMenu === index && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-zenith"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  {/* Hover underline — always rendered, scales in on hover */}
                  {activeMenu !== index && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-zenith/70 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-navy-900 text-white text-[13.5px] font-semibold tracking-wide rounded-[6px] transition-all duration-200 hover:bg-navy-800 hover:shadow-[0_4px_16px_rgba(10,37,64,0.2)] active:scale-[0.98]"
            id="header-cta"
          >
            Contact Us
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            <span className="w-5 h-[1.5px] bg-navy-900 rounded-full" />
            <span className="w-4 h-[1.5px] bg-navy-900 rounded-full" />
            <span className="w-5 h-[1.5px] bg-navy-900 rounded-full" />
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu !== null && NAV_ITEMS[activeMenu]?.megaMenu && (
          <motion.div
            key="mega-menu"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="absolute top-full left-0 right-0 bg-[#fafaf8] border-t border-navy-100 shadow-[0_12px_40px_rgba(6,27,46,0.06)]"
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
                      {col.items.map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="text-[14px] font-medium text-navy-800 hover:text-zenith transition-colors duration-150"
                          >
                            {item}
                          </a>
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
    </header>
  );
}
