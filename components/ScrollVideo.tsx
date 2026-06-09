'use client';

import { useEffect, useRef } from 'react';
import styles from './ScrollVideo.module.css';

/**
 * Fixed full-viewport scroll-bound video background.
 * - Plays continuously on autoplay
 * - currentTime is bound to scroll progress across the document
 * - Falls back to a static gradient if the video can't load
 * - Pauses + seeks smoothly using requestAnimationFrame
 * - Reduced-motion users get the static gradient only
 */
export default function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const readyRef = useRef(false);

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
      // Bind to current scroll position on first paint.
      syncToScroll();
    };

    const syncToScroll = () => {
      if (!readyRef.current || !video.duration || !isFinite(video.duration)) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      const target = Math.max(0, Math.min(video.duration - 0.05, progress * video.duration));
      // Snap only when meaningfully off (>0.05s) to avoid jank
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

    video.addEventListener('loadedmetadata', onReady);
    video.addEventListener('canplay', onReady);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // Try to autoplay (muted). If blocked, the poster/gradient will show.
    video.play().catch(() => {
      /* autoplay blocked - gradient fallback is fine */
    });

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
      <div className={styles.gradient} />
      <video
        ref={videoRef}
        className={styles.video}
        src="/videos/scroll-bg.mp4"
        muted
        playsInline
        loop={false}
        preload="auto"
        // Disable native controls and right-click menu
        controls={false}
        onContextMenu={(e) => e.preventDefault()}
      />
      <div className={styles.overlay} />
      <div className={styles.vignette} />
    </div>
  );
}
