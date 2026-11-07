import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

/* Pages */
import Home from './pages/Home';
import Services from './pages/Services';
import IndustriesPage from './pages/Industries';
// import Innovation from './pages/Innovation'; // Hidden per client request
import Company from './pages/Company';
import Careers from './pages/Careers';
import HomeMockup from './pages/HomeMockup';

/* Scroll to top on route change */
function ScrollToTopOnNav() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const isMockupRoute = pathname === '/mockup' || pathname === '/home-mockup';

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
          <Route path="/industries" element={<IndustriesPage />} />
          {/* Innovation page hidden per client request — can be re-enabled later */}
          {/* <Route path="/innovation" element={<Innovation />} /> */}
          <Route path="/innovation" element={<Navigate to="/" replace />} />
          <Route path="/company" element={<Company />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
