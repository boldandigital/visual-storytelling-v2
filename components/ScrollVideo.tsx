'use client';

import { useEffect, useRef } from 'react';
import styles from './ScrollVideo.module.css';

/**
 * Fixed full-viewport scroll-bound video background.
 * - currentTime bound to document scroll progress (snaps only when delta > 0.05s)
 * - Cinematic post-fx: chromatic aberration, scanlines, vignette
 * - Subtle film grain
 * - Falls back to a black void + wireframe grid if video can't load
 * - Respects prefers-reduced-motion
 */
export default function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const grainRef = useRef<HTMLDivElement | null>(null);
  const vignetteRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const readyRef = useRef(false);
  const progressRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      video.pause();
      return;
    }

    const onReady = () => {
      readyRef.current = true;
      syncToScroll();
    };

    const syncToScroll = () => {
      if (!readyRef.current || !video.duration || !isFinite(video.duration)) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      progressRef.current = progress;
      const target = Math.max(0, Math.min(video.duration - 0.05, progress * video.duration));
      if (Math.abs(video.currentTime - target) > 0.05) {
        video.currentTime = target;
      }
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        syncToScroll();
      });
    };

    const animateFx = () => {
      rafRef.current = requestAnimationFrame(animateFx);
      const p = progressRef.current;

      // Chromatic aberration intensifies as you scroll deeper
      if (vignetteRef.current) {
        const intensity = 1 + p * 2.5;
        vignetteRef.current.style.setProperty(
          '--chroma',
          String(intensity.toFixed(2))
        );
      }

      // Subtle film grain rotation
      if (grainRef.current) {
        grainRef.current.style.transform = `translate(${(Math.random() - 0.5) * 2}px, ${(Math.random() - 0.5) * 2}px)`;
        grainRef.current.style.opacity = String(0.07 + Math.random() * 0.03);
      }
    };

    video.addEventListener('loadedmetadata', onReady);
    video.addEventListener('canplay', onReady);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    video.play().catch(() => {
      /* autoplay blocked */
    });

    animateFx();

    return () => {
      video.removeEventListener('loadedmetadata', onReady);
      video.removeEventListener('canplay', onReady);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      video.pause();
    };
  }, []);

  return (
    <div className={styles.wrap} aria-hidden="true">
      <video
        ref={videoRef}
        className={styles.video}
        src="/videos/scroll-bg.mp4"
        muted
        playsInline
        loop={false}
        preload="auto"
        controls={false}
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* Chromatic aberration — RGB-split copies of the video */}
      <div className={styles.chroma} style={{ filter: 'url(#chromaRgb)' }} />
      <div className={styles.chromaR} />
      <div className={styles.chromaB} />

      {/* Cinematic scanlines */}
      <div className={styles.scanlines} />

      {/* Film grain */}
      <div ref={grainRef} className={styles.grain} />

      {/* Vignette + edge fade */}
      <div ref={vignetteRef} className={styles.vignette} />

      {/* SVG filter for the chromatic aberration */}
      <svg className={styles.svgFilters} aria-hidden="true">
        <defs>
          <filter id="chromaRgb">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
