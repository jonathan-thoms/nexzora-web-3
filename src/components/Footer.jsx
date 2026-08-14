import { motion } from 'framer-motion';

const FOOTER_LINKS = {
  Solutions: ['Embedded Engineering', 'Automotive & Mobility', 'Semiconductor', 'AI & Robotics', 'Cybersecurity'],
  Company: ['About Us', 'Leadership', 'Careers', 'Partners', 'Newsroom'],
  Resources: ['Case Studies', 'Whitepapers', 'Tech Blog', 'Documentation', 'Events'],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white" id="footer">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-12 lg:gap-8">
          {/* Brand Column */}
          <div>
            <img
              src="/logo.png"
              alt="NEXZORA Technologies"
              className="h-8 w-auto brightness-0 invert mb-5"
            />
            <p className="text-[14px] leading-relaxed text-navy-300 max-w-[280px]">
              The Next Zenith of Innovation — Engineering precision solutions
              for the technologies that define tomorrow.
            </p>
            {/* Social links placeholder */}
            <div className="flex gap-3 mt-6">
              {['LinkedIn', 'Twitter', 'GitHub'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-md bg-navy-900/50 text-navy-400 hover:bg-navy-800 hover:text-white transition-all duration-200 text-[12px] font-medium"
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
              <h4 className="text-[11.5px] font-semibold uppercase tracking-label text-navy-400 mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] text-navy-300 hover:text-white transition-colors duration-150"
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
        <div className="py-6 border-t border-navy-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12.5px] text-navy-400">
            © {new Date().getFullYear()} NEXZORA Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[12.5px] text-navy-400 hover:text-navy-200 transition-colors duration-150"
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
