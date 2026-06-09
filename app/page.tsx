import VideoStage from '@/components/VideoStage';
import HUD from '@/components/HUD';
import EndOfTransmission from '@/components/EndOfTransmission';
import Scene1 from '@/components/Scene1';
import Scene2 from '@/components/Scene2';
import Scene3 from '@/components/Scene3';
import Scene4 from '@/components/Scene4';
import Scene5 from '@/components/Scene5';

export default function HomePage() {
  return (
    <>
      <VideoStage />
      <HUD />
      <EndOfTransmission />
      <main className="scenes">
        <section id="top" className="scene"><Scene1 /></section>
        <section id="services" className="scene"><Scene2 /></section>
        <section id="work" className="scene"><Scene3 /></section>
        <section id="process" className="scene"><Scene4 /></section>
        <section id="contact" className="scene"><Scene5 /></section>
      </main>
    </>
  );
}
