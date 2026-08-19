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
            {/* Social links */}
            <div className="flex gap-2.5 sm:gap-3 mt-5 sm:mt-6">
              {['LinkedIn', 'Twitter', 'GitHub'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-navy-900/60 text-navy-300 hover:bg-zenith hover:text-white transition-all duration-200 text-[12px] font-medium"
                  aria-label={platform}
                >
                  {platform[0] + platform[1]}
                </a>
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
