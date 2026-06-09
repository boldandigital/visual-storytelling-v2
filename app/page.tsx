import VideoStage from '@/components/VideoStage';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import EndOfTransmission from '@/components/EndOfTransmission';

export default function HomePage() {
  return (
    <>
      <VideoStage />
      <EndOfTransmission />
      <Navbar />

      <main className="site">
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
