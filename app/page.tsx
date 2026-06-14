import HeroOrbit from '@/components/HeroOrbit';
import Marquee from '@/components/Marquee';
import ServicesSimple from '@/components/ServicesSimple';
import ProcessSimple from '@/components/ProcessSimple';
import WorkSimple from '@/components/WorkSimple';
import ContactSimple from '@/components/ContactSimple';

export default function HomePage() {
  return (
    <>
      <HeroOrbit />
      <Marquee />
      <main>
        <ServicesSimple />
        <ProcessSimple />
        <WorkSimple />
        <ContactSimple />
      </main>
      <footer
        style={{
          padding: '2.5rem 5rem',
          background: '#ffffff',
          borderTop: '1px solid rgba(5, 30, 64, 0.08)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.2em',
          color: 'var(--text-dim)',
          textTransform: 'uppercase',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <span>© Bold And Digital · 2026</span>
        <span>Hamburg · Remote</span>
        <span>v6.0 / HeroOrbit</span>
      </footer>
    </>
  );
}
