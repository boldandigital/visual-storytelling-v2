'use client';

import { useEffect, useRef } from 'react';
import styles from './AmbientBowl.module.css';

/**
 * AmbientBowl — bowl video on a slow, infinite loop. No scroll binding.
 * Plays the whole video, then loops. Designed to feel like a still
 * moment with subtle motion, not a scrubbed scene.
 */
const VIDEO_SRC = '/videos/scroll-bg.mp4';

export default function AmbientBowl() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.playsInline = true;
    v.loop = true;
    v.autoplay = true;
    v.preload = 'auto';

    const setReady = () => { v.dataset.ready = 'true'; };
    v.addEventListener('loadeddata', setReady);
    v.addEventListener('canplay', setReady);

    // Try to play (some browsers block autoplay without a user gesture)
    v.play().catch(() => {
      // silent fail — the user can press play
    });
  }, []);

  return (
    <div className={styles.wrap} aria-hidden="true">
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
      />
      {/* soft cyan glow behind the bowl, brand-only accent */}
      <div className={styles.glow} />
    </div>
  );
}
