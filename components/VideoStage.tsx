'use client';

import { useEffect, useRef } from 'react';

/**
 * Plays the source video UNFILTERED — no hue-rotate, no desaturation.
 *
 * Time model:
 *  - `currentTime` is bound 1:1 to scroll position. Scroll 0% = 0s,
 *    scroll 100% = 1.55s.
 *  - The video only plays while the user is scrolling. When idle
 *    the video pauses (frozen at the user's last position).
 */
const VIDEO_DURATION = 5.64;       // seconds (hero-bowl-v1.mp4)
const SCROLL_BIND_FACTOR = 0.97;   // use 0-97% of the video for the scroll

export default function VideoStage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetTimeRef = useRef<number>(0);
  const lastScrollTime = useRef<number>(performance.now());
  const isScrolling = useRef<boolean>(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.playsInline = true;
    v.preload = 'auto';

    const setReady = () => { v.dataset.ready = 'true'; };
    v.addEventListener('loadeddata', setReady);
    v.addEventListener('canplay', setReady);

    const computeTarget = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      return progress * SCROLL_BIND_FACTOR * VIDEO_DURATION;
    };

    const onScroll = () => {
      lastScrollTime.current = performance.now();
      isScrolling.current = true;
      // Set target immediately on scroll
      targetTimeRef.current = computeTarget();
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Sentinel: 100ms after last scroll event, mark as idle
    let idleCheck: number | null = null;

    let lastT = performance.now();
    const tick = () => {
      const now = performance.now();
      lastT = now;

      // Check if still scrolling (within 100ms of last scroll)
      const isActive = (now - lastScrollTime.current) < 100;

      // Smoothly move video.currentTime toward the target
      const cur = v.currentTime;
      const tgt = targetTimeRef.current;
      const next = cur + (tgt - cur) * 0.32;
      v.currentTime = Math.max(0, Math.min(SCROLL_BIND_FACTOR * VIDEO_DURATION, next));

      // Schedule idle check
      if (isActive) {
        if (idleCheck !== null) {
          window.clearTimeout(idleCheck);
          idleCheck = null;
        }
        isScrolling.current = true;
      } else {
        if (idleCheck === null) {
          idleCheck = window.setTimeout(() => {
            isScrolling.current = false;
            idleCheck = null;
          }, 100);
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (idleCheck !== null) window.clearTimeout(idleCheck);
    };
  }, []);

  return (
    <div className="video-stage" aria-hidden="true">
      <video
        ref={videoRef}
        src="/videos/scroll-bg.mp4"
        muted
        playsInline
        preload="auto"
        loop={false}
      />
    </div>
  );
}
