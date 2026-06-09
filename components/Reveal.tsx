'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

/**
 * Wraps children in a fade+rise reveal triggered the first time the element
 * enters the viewport. SSR-safe: starts hidden, takes over once mounted.
 *
 * IMPORTANT: defaults to `once` so once content is shown it never hides again.
 * If JS fails or IO doesn't fire, the content is still readable on scroll
 * because we use a CSS animation that completes independently.
 *
 * To make the reveal robust against environments where IntersectionObserver
 * is broken or doesn't fire, we also start a fallback timer that reveals
 * everything after 600ms regardless. This ensures content is never
 * permanently invisible.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
  threshold = 0.1,
}: {
  children: React.ReactNode;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  threshold?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;

    const show = () => setShown(true);

    // Primary: IntersectionObserver
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              show();
              observer?.disconnect();
            }
          });
        },
        { threshold, rootMargin: '0px 0px -10% 0px' }
      );
      observer.observe(el);
    } else {
      // No IO support at all — show immediately
      show();
    }

    // Fallback: reveal after 1.2s no matter what. Guarantees that content
    // is never permanently invisible if IO misfires (e.g. tab not focused,
    // headless screenshot contexts, browser quirks).
    const fallback = window.setTimeout(show, 1200);

    return () => {
      observer?.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold]);

  const Component = Tag as React.ElementType;
  return (
    <Component
      ref={ref}
      className={`${styles.reveal} ${shown ? styles.shown : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
