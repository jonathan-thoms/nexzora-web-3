import Hero from '../components/Hero';
import Capabilities from '../components/Capabilities';
import Industries from '../components/Industries';
import Stats from '../components/Stats';
import WhyNexzora from '../components/WhyNexzora';
import ClientLogos from '../components/ClientLogos';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Industries />
      <Stats />
      <WhyNexzora />
      <ClientLogos />
      <Contact />
    </>
  );
}
