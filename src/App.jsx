import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

/* Pages */
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import IndustriesPage from './pages/Industries';
import OfferingDetail from './pages/OfferingDetail';
import Quality from './pages/Quality';
// import Innovation from './pages/Innovation'; // Hidden per client request
import Company from './pages/Company';
import Careers from './pages/Careers';
import HomeMockup from './pages/HomeMockup';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

/* Scroll to top or hash anchor on route change */
function ScrollToTopOnNav() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const timeoutId = setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
      return () => clearTimeout(timeoutId);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, key]);
  return null;
}

export default function App() {
  const { pathname, search, hash } = useLocation();
  const isMockupRoute =
    pathname === '/mockup' ||
    pathname === '/home-mockup' ||
    search.includes('mockup') ||
    hash.includes('mockup');

  if (isMockupRoute) {
    return (
      <>
        <ScrollToTopOnNav />
        <HomeMockup />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <ScrollToTopOnNav />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/cloud-devops" element={<Navigate to="/services/cloud-digital-platforms" replace />} />
          <Route path="/services/:slug" element={<OfferingDetail type="service" />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/industrial" element={<Navigate to="/solutions/industrial-automation" replace />} />
          <Route path="/solutions/:slug" element={<OfferingDetail type="solution" />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/industrial" element={<Navigate to="/solutions/industrial-automation" replace />} />
          <Route path="/industries/cloud-digital" element={<Navigate to="/services/cloud-digital-platforms" replace />} />
          <Route path="/industries/:slug" element={<OfferingDetail type="industry" />} />
          <Route path="/quality" element={<Quality />} />
          {/* Innovation page hidden per client request — can be re-enabled later */}
          {/* <Route path="/innovation" element={<Innovation />} /> */}
          <Route path="/innovation" element={<Navigate to="/" replace />} />
          <Route path="/company" element={<Company />} />
          <Route path="/about-us" element={<Company />} />
          <Route path="/about" element={<Navigate to="/about-us" replace />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/terms" element={<Navigate to="/terms-of-service" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
