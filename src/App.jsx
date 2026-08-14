import Header from './components/Header';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
