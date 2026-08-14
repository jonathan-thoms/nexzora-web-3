import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Capabilities from './components/Capabilities';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Stats />
        <ClientLogos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
