import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const SECTIONS = [
  { id: 'acceptance', title: '1. Acceptance of Terms' },
  { id: 'scope-services', title: '2. Scope & Description of Services' },
  { id: 'intellectual-property', title: '3. Intellectual Property Rights' },
  { id: 'client-confidentiality', title: '4. Client Materials & Confidentiality' },
  { id: 'acceptable-use', title: '5. Acceptable Use Policy' },
  { id: 'disclaimer-warranties', title: '6. Disclaimer of Warranties' },
  { id: 'limitation-liability', title: '7. Limitation of Liability' },
  { id: 'indemnification', title: '8. Indemnification' },
  { id: 'third-party-links', title: '9. Third-Party Websites & Services' },
  { id: 'governing-law', title: '10. Governing Law & Texas Jurisdiction' },
  { id: 'modifications', title: '11. Modifications to Terms' },
  { id: 'contact', title: '12. Contact Information' },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-surface">
      <PageHero
        label="Legal & Governance"
        title="Terms of Service"
        subtitle="Terms and conditions governing the use of Nexzora's digital platforms, resources, and engineering communications."
      />

      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        {/* Document Header Metadata */}
        <div className="mb-10 p-6 rounded-2xl bg-surface-alt/70 border border-navy-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold text-zenith mb-1">
              Legal Agreement
            </p>
            <h2 className="text-base sm:text-lg font-display font-semibold text-navy-950">
              Nexzora LLC Website & Services Terms
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-navy-600 space-y-1 sm:text-right">
            <div><strong>Last Updated:</strong> January 1, 2026</div>
            <div><strong>Jurisdiction:</strong> State of Texas, United States</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
          {/* Sticky Table of Contents on Desktop */}
          <aside className="hidden lg:block sticky top-24 p-5 rounded-2xl bg-white border border-navy-100 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-3">
              Table of Contents
            </h3>
            <nav className="space-y-1.5 text-[13px]">
              {SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="block py-1 text-navy-700 hover:text-zenith transition-colors leading-snug"
                >
                  {sec.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Legal Content */}
          <article className="prose prose-navy max-w-none space-y-10 text-navy-800 text-[15px] sm:text-[16px] leading-relaxed">
            {/* Section 1 */}
            <section id="acceptance" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing, browsing, or utilizing the website situated at <strong>nexzora.com</strong> (the &ldquo;Site&rdquo;), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service (these &ldquo;Terms&rdquo;) together with our Privacy Policy.
              </p>
              <p>
                If you do not agree to these Terms, you must immediately discontinue using our digital platforms.
              </p>
            </section>

            {/* Section 2 */}
            <section id="scope-services" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                2. Scope & Description of Services
              </h2>
              <p>
                Nexzora LLC (&ldquo;Nexzora&rdquo;) provides high-integrity engineering solutions across automotive embedded systems (AUTOSAR, FuSa ISO 26262), software-defined vehicles (SDV), robotics, IoT, cloud platforms, and enterprise technical staffing.
              </p>
              <p>
                Information displayed on this Site is published for general informational, commercial introduction, and project evaluation purposes. Formal business arrangements, deliverables, engineering milestones, and contractual warranties are strictly governed by executed Master Services Agreements (MSAs), Statements of Work (SOWs), or specialized procurement contracts between Nexzora LLC and our enterprise clients.
              </p>
            </section>

            {/* Section 3 */}
            <section id="intellectual-property" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                3. Intellectual Property Rights
              </h2>
              <p>
                All content, features, and functionality on this Site—including but not limited to text, graphics, proprietary architectural illustrations, icons, code snippets, visual designs, brand marks, and slogans—are the exclusive intellectual property of Nexzora LLC or its content licensors and are protected under United States and international copyright, trademark, patent, and trade secret laws.
              </p>
              <p>
                <strong>Trademarks:</strong> &ldquo;NEXZORA&rdquo;, &ldquo;The Next Zenith of Innovation&rdquo;, and the Nexzora swirl emblem are trademarks of Nexzora LLC. Third-party brand names or client logos appearing on the Site belong to their respective registered proprietors and are displayed for reference purposes to illustrate professional collaboration or certified standard compatibility.
              </p>
            </section>

            {/* Section 4 */}
            <section id="client-confidentiality" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                4. Client Materials & Confidentiality
              </h2>
              <p>
                Nexzora adheres to strict non-disclosure obligations. Any confidential technical documentation, product schematics, or proprietary specifications submitted to Nexzora for RFP evaluation or project scoping shall be held in utmost confidence under mutual NDAs, and will never be shared, repurposed, or publicly displayed.
              </p>
            </section>

            {/* Section 5 */}
            <section id="acceptable-use" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                5. Acceptable Use Policy
              </h2>
              <p>When interacting with the Site, you agree not to:</p>
              <ul className="list-disc pl-5 space-y-2 text-navy-700">
                <li>Engage in any automated web scraping, data extraction, indexing, or harvesting without explicit written consent from Nexzora.</li>
                <li>Attempt to probe, scan, or compromise the vulnerability of our servers, networks, or infrastructure.</li>
                <li>Transmit viruses, worms, malware, or destructive code to our platforms or communication endpoints.</li>
                <li>Submit misleading, fraudulent, or impersonated requests through inquiry or career portals.</li>
                <li>Use the Site in violation of any applicable federal, state, local, or international laws or regulations.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="disclaimer-warranties" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                6. Disclaimer of Warranties
              </h2>
              <p>
                The Site and its contents are provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties of any kind, whether express, statutory, or implied. While we strive to maintain accurate, up-to-date engineering insights and technical capabilities, Nexzora disclaims all warranties, including but not limited to merchantability, fitness for a particular purpose, non-infringement, and uninterrupted or error-free access.
              </p>
            </section>

            {/* Section 7 */}
            <section id="limitation-liability" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                7. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, neither Nexzora LLC nor its directors, officers, employees, affiliates, or agents shall be liable for any direct, indirect, incidental, consequential, special, punitive, or exemplary damages arising out of or in connection with your access to or inability to use this Site, even if advised of the possibility of such damages.
              </p>
            </section>

            {/* Section 8 */}
            <section id="indemnification" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                8. Indemnification
              </h2>
              <p>
                You agree to defend, indemnify, and hold harmless Nexzora LLC, its officers, directors, employees, and successors against any claims, liabilities, losses, damages, judgments, and legal expenses arising from your violation of these Terms or misuse of the Site.
              </p>
            </section>

            {/* Section 9 */}
            <section id="third-party-links" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                9. Third-Party Websites & Services
              </h2>
              <p>
                The Site may contain external links to industry standard consortia, professional networks (such as LinkedIn, GitHub, X), or client references. Nexzora does not control or endorse the content or practices of third-party websites and assumes no responsibility for their operations or privacy policies.
              </p>
            </section>

            {/* Section 10 */}
            <section id="governing-law" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                10. Governing Law & Texas Jurisdiction
              </h2>
              <p>
                These Terms and any dispute or claim arising out of or related to them shall be governed by and construed in accordance with the laws of the <strong>State of Texas, United States</strong>, without giving effect to any choice or conflict of law provision.
              </p>
              <p>
                Any legal suit, action, or proceeding arising out of these Terms shall be instituted exclusively in the federal or state courts situated in Dallas County, Texas.
              </p>
            </section>

            {/* Section 11 */}
            <section id="modifications" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                11. Modifications to Terms
              </h2>
              <p>
                We reserve the right to revise and update these Terms at any time. Any changes become effective immediately upon posting to the Site. Your continued use of the Site following the posting of revised Terms signifies your acceptance of the changes.
              </p>
            </section>

            {/* Section 12 */}
            <section id="contact" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                12. Contact Information
              </h2>
              <p>
                For legal inquiries, copyright notices, or questions concerning these Terms of Service, please contact:
              </p>
              <div className="p-5 rounded-xl bg-surface-alt border border-navy-100 text-sm text-navy-800 space-y-1">
                <p className="font-semibold text-navy-950">Nexzora LLC</p>
                <p>Legal & Corporate Affairs</p>
                <p>7301 N Highway 161, #148</p>
                <p>Irving, TX 75039-2803, United States</p>
                <p className="pt-2">
                  Email:{' '}
                  <a href="mailto:info@nexzora.com" className="text-zenith font-semibold hover:underline">
                    info@nexzora.com
                  </a>
                </p>
                <p>Phone: +1 469-646-6162</p>
              </div>
            </section>

            {/* Return link */}
            <div className="pt-6 border-t border-navy-100 flex items-center justify-between">
              <Link to="/" className="inline-flex items-center gap-2 text-zenith font-semibold text-sm hover:underline">
                &larr; Back to Home
              </Link>
              <Link to="/privacy-policy" className="inline-flex items-center gap-2 text-zenith font-semibold text-sm hover:underline">
                View Privacy Policy &rarr;
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
