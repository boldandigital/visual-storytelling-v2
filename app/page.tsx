import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HeroScene from '@/components/HeroScene';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollVideo from '@/components/ScrollVideo';
import LogoOverlay from '@/components/LogoOverlay';

export default function HomePage() {
  return (
    <>
      <ScrollVideo />
      <HeroScene />
      <LogoOverlay />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
