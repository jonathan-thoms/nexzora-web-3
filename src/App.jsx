import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Capabilities from './components/Capabilities';
import Industries from './components/Industries';
import WhyNexzora from './components/WhyNexzora';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Industries />
        <Stats />
        <WhyNexzora />
        <ClientLogos />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
