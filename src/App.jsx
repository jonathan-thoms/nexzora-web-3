import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

/* Pages */
import Home from './pages/Home';
import Services from './pages/Services';
import IndustriesPage from './pages/Industries';
import Innovation from './pages/Innovation';
import Company from './pages/Company';
import Careers from './pages/Careers';

/* Scroll to top on route change */
function ScrollToTopOnNav() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <ScrollToTopOnNav />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/company" element={<Company />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
