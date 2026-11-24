import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const SECTIONS = [
  { id: 'introduction', title: '1. Introduction & Overview' },
  { id: 'information-collected', title: '2. Information We Collect' },
  { id: 'use-of-information', title: '3. How We Use Information' },
  { id: 'confidentiality-ip', title: '4. Enterprise Confidentiality & IP' },
  { id: 'disclosure-sharing', title: '5. Information Sharing & Disclosures' },
  { id: 'data-security', title: '6. Security & Infrastructure Safeguards' },
  { id: 'international-transfers', title: '7. International Data Transfers' },
  { id: 'data-retention', title: '8. Data Retention' },
  { id: 'privacy-rights', title: '9. Your Privacy Rights (GDPR / CCPA)' },
  { id: 'cookies', title: '10. Cookies & Tracking Technologies' },
  { id: 'contact', title: '11. Contact & Privacy Inquiries' },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-surface">
      <PageHero
        label="Legal & Compliance"
        title="Privacy Policy"
        subtitle="How Nexzora LLC collects, safeguards, and responsibly processes personal and technical inquiry data."
      />

      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        {/* Document Header Metadata */}
        <div className="mb-10 p-6 rounded-2xl bg-surface-alt/70 border border-navy-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold text-zenith mb-1">
              Official Corporate Policy
            </p>
            <h2 className="text-base sm:text-lg font-display font-semibold text-navy-950">
              Nexzora LLC Data Protection Standard
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-navy-600 space-y-1 sm:text-right">
            <div><strong>Effective Date:</strong> January 1, 2026</div>
            <div><strong>Entity:</strong> Nexzora LLC (Irving, TX, USA)</div>
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
            <section id="introduction" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                1. Introduction & Overview
              </h2>
              <p>
                Nexzora LLC (&ldquo;Nexzora&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to safeguarding the privacy and confidentiality of individuals who visit our website, communicate with us, or explore our engineering and technology consulting services.
              </p>
              <p>
                This Privacy Policy outlines our principles and practices regarding the collection, handling, storage, and protection of information obtained through <strong>nexzora.com</strong> and any related digital communication channels.
              </p>
            </section>

            {/* Section 2 */}
            <section id="information-collected" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                2. Information We Collect
              </h2>
              <p>
                Depending on how you interact with our website, we may collect the following categories of information:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-navy-700">
                <li>
                  <strong>Contact & Professional Inquiries:</strong> Full name, corporate email address, phone number, company/organization name, job title, and project details submitted through our contact and consultation forms.
                </li>
                <li>
                  <strong>Career Application Data:</strong> Resumes, employment history, portfolios, and professional references submitted for open engineering or administrative positions.
                </li>
                <li>
                  <strong>Automated Technical Usage Data:</strong> IP address, browser type and version, operating system, referrer URL, pages visited, time spent on pages, and device diagnostic indicators collected via server logs and privacy-respecting analytics.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="use-of-information" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                3. How We Use Information
              </h2>
              <p>
                Nexzora processes collected data strictly for legitimate business, contractual, and technical operational purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-navy-700">
                <li>Evaluating project requirements, preparing technical proposals, and responding to RFPs and consulting inquiries.</li>
                <li>Fulfilling Master Services Agreements (MSAs), Statements of Work (SOWs), and engineering staffing arrangements.</li>
                <li>Maintaining the security, performance, and operational integrity of our digital platforms.</li>
                <li>Assessing candidate qualifications for recruitment and employment opportunities.</li>
                <li>Complying with statutory, regulatory, and legal governance mandates.</li>
              </ul>
              <p className="font-semibold text-navy-950">
                Nexzora does not sell, rent, or trade your personal or corporate data to third-party data brokers or marketing aggregators under any circumstances.
              </p>
            </section>

            {/* Section 4 */}
            <section id="confidentiality-ip" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                4. Enterprise Confidentiality & Intellectual Property
              </h2>
              <p>
                As a specialized engineering firm serving automotive, industrial automation, and deep-tech sectors, we treat all client inquiries, architectural schematics, codebases, and technical specifications under strict confidentiality protocols.
              </p>
              <p>
                Formal engineering engagements are governed by bespoke Non-Disclosure Agreements (NDAs) and Master Services Agreements that supersede general web terms, ensuring complete intellectual property protection and compliance with automotive standards (such as TISAX&reg; and ISO 9001:2015 frameworks).
              </p>
            </section>

            {/* Section 5 */}
            <section id="disclosure-sharing" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                5. Information Sharing & Disclosures
              </h2>
              <p>
                We only share personal data with external entities under the following circumscribed circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-navy-700">
                <li>
                  <strong>Trusted Infrastructure Providers:</strong> Secure hosting environments, cloud platforms, and internal enterprise communication tools operating under binding data protection contracts.
                </li>
                <li>
                  <strong>Legal & Regulatory Mandates:</strong> Where required by valid subpoenas, court orders, or applicable governmental laws.
                </li>
                <li>
                  <strong>Corporate Transactions:</strong> In connection with any merger, corporate restructuring, or acquisition, subject to standard confidentiality protections.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="data-security" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                6. Security & Infrastructure Safeguards
              </h2>
              <p>
                We enforce industry-standard technical and organizational security controls to protect information against unauthorized access, loss, alteration, or disclosure. These include:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-navy-700">
                <li>TLS/HTTPS encryption for all data in transit across public networks.</li>
                <li>Role-based access controls and multi-factor authentication for internal systems.</li>
                <li>Routine vulnerability monitoring, audit logging, and incident response procedures.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="international-transfers" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                7. International Data Transfers
              </h2>
              <p>
                Nexzora operates globally across engineering centers in the United States, Egypt, Japan, and India. Information collected on this site may be stored or processed in any jurisdiction where we operate or maintain infrastructure. All cross-border data transfers comply with applicable data protection mechanisms, including standard contractual clauses (SCCs) where required.
              </p>
            </section>

            {/* Section 8 */}
            <section id="data-retention" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                8. Data Retention
              </h2>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes for which it was gathered, satisfy client contractual obligations, resolve disputes, or comply with legal retention requirements.
              </p>
            </section>

            {/* Section 9 */}
            <section id="privacy-rights" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                9. Your Privacy Rights (GDPR / CCPA / CPRA)
              </h2>
              <p>
                Depending on your geographic location and applicable regional laws, you may be entitled to specific data privacy rights, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-navy-700">
                <li><strong>Access:</strong> Request confirmation and copies of personal data held about you.</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete information.</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data (&ldquo;right to be forgotten&rdquo;).</li>
                <li><strong>Restriction & Objection:</strong> Object to or restrict specific processing activities.</li>
                <li><strong>Data Portability:</strong> Receive your data in a structured, commonly used format.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact our compliance desk at <a href="mailto:info@nexzora.com" className="text-zenith font-semibold hover:underline">info@nexzora.com</a>.
              </p>
            </section>

            {/* Section 10 */}
            <section id="cookies" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                10. Cookies & Tracking Technologies
              </h2>
              <p>
                Our website utilizes necessary cookies to ensure basic navigation and security, alongside optional analytical cookies to measure aggregate traffic patterns. You can review, customize, or revoke your cookie choices at any time using the <strong>Cookie Settings</strong> link in our website footer.
              </p>
            </section>

            {/* Section 11 */}
            <section id="contact" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-navy-950 border-b border-navy-100 pb-2">
                11. Contact & Privacy Inquiries
              </h2>
              <p>
                If you have questions, comments, or requests regarding this Privacy Policy or our data protection measures, please reach out to us:
              </p>
              <div className="p-5 rounded-xl bg-surface-alt border border-navy-100 text-sm text-navy-800 space-y-1">
                <p className="font-semibold text-navy-950">Nexzora LLC</p>
                <p>Attention: Legal & Data Privacy</p>
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
              <Link to="/terms-of-service" className="inline-flex items-center gap-2 text-zenith font-semibold text-sm hover:underline">
                View Terms of Service &rarr;
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
