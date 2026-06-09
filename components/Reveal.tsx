'use client';

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';

/**
 * Wraps content in a fade reveal triggered by entering the viewport.
 * Merges caller-provided style with the reveal's own opacity
 * transition. Does NOT touch transform — caller owns transform so
 * 3D positions can be driven by per-frame JS.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setShown(true);
              observer?.disconnect();
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
      );
      observer.observe(el);
    } else {
      setShown(true);
    }

    const fallback = window.setTimeout(() => setShown(true), 1500);
    return () => {
      observer?.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transition: `opacity 0.8s cubic-bezier(0.2, 0.65, 0.2, 1) ${delay}ms`,
        willChange: 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
