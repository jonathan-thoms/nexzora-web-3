import { motion } from 'framer-motion';

const FOOTER_LINKS = {
  Solutions: ['Embedded Engineering', 'Automotive & Mobility', 'Semiconductor', 'AI & Robotics', 'Cybersecurity'],
  Company: ['About Us', 'Leadership', 'Careers', 'Partners', 'Newsroom'],
  Resources: ['Case Studies', 'Whitepapers', 'Tech Blog', 'Documentation', 'Events'],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800/40" id="footer">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/logo.png"
              alt="NEXZORA Technologies"
              className="h-8 w-auto brightness-0 invert mb-4 sm:mb-5"
            />
            <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-navy-300 max-w-[320px] lg:max-w-[280px]">
              The Next Zenith of Innovation — Engineering precision solutions
              for the technologies that define tomorrow.
            </p>

            {/* Quick Contact Info */}
            <div className="mt-5 space-y-2 text-[13px] text-navy-300">
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-zenith shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 12.5c0 7-9.5 11-9.5 11s-9.5-4-9.5-11a9.5 9.5 0 1 1 19 0Z" />
                  <circle cx="12" cy="12.5" r="3" />
                </svg>
                <span>Dallas, Texas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-zenith shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:info@nexzora.com" className="hover:text-zenith transition-colors">info@nexzora.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-zenith shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                <a href="tel:4692644242" className="hover:text-zenith transition-colors">469-264-4242</a>
              </div>
              <div className="flex items-center gap-2.5 text-navy-400">
                <svg className="w-4 h-4 text-zenith shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>8:00 AM – 6:00 PM CST</span>
              </div>
            </div>

            {/* Social links (unlinked) */}
            <div className="flex gap-2.5 sm:gap-3 mt-5 sm:mt-6">
              {[
                {
                  name: 'LinkedIn',
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  ),
                },
                {
                  name: 'Twitter / X',
                  icon: (
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  name: 'GitHub',
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  ),
                },
              ].map(({ name, icon }) => (
                <span
                  key={name}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-900/80 text-navy-400 hover:text-white hover:bg-navy-800 transition-all duration-200 cursor-default select-none"
                  aria-label={name}
                  title={`${name} (unlinked)`}
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-label text-navy-400 mb-3 sm:mb-5">
                {heading}
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13.5px] sm:text-[14px] text-navy-300 hover:text-zenith transition-colors duration-150 inline-block py-0.5"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-navy-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left safe-bottom">
          <p className="text-[12px] sm:text-[12.5px] text-navy-400">
            © {new Date().getFullYear()} NEXZORA Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[12px] sm:text-[12.5px] text-navy-400 hover:text-zenith transition-colors duration-150 py-1"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
