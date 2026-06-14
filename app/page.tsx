import Hero from '@/components/Hero';
import Sections from '@/components/Sections';
import BrandNav from '@/components/BrandNav';
import FinePrint from '@/components/FinePrint';

/**
 * Home — Mantis-style single-viewport brand site.
 * One hero, one quiet column. No scroll-bound 3D, no scene architecture.
 */
export default function HomePage() {
  return (
    <>
      <BrandNav />
      <main className="page">
        <Hero />
        <Sections />
      </main>
      <FinePrint />
    </>
  );
}
