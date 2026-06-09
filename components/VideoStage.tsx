'use client';

import { useEffect, useRef } from 'react';

/**
 * The site is the video. This component:
 * 1. Mounts the scroll-bg.mp4 as a fixed full-viewport background
 * 2. Syncs video.currentTime to window.scrollY progress
 * 3. Fades the video in once metadata is ready
 *
 * The page content scrolls over this; each section is a "moment" of the
 * video's arc (abyss → dive → cyberspace → reveal).
 */
export default function VideoStage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const readyRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncToScroll = () => {
      if (!readyRef.current || !video.duration || !isFinite(video.duration)) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      const target = progress * (video.duration - 0.05);
      if (Math.abs(video.currentTime - target) > 0.04) {
        video.currentTime = target;
      }
    };

    const onReady = () => {
      readyRef.current = true;
      video.dataset.ready = 'true';
      syncToScroll();
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        syncToScroll();
      });
    };

    // The video may have already loaded by the time the React effect
    // runs (Next.js SSR + hydration race). Check readyState directly
    // so we don't depend on events that already fired and were lost.
    // readyState >= 1 = HAVE_METADATA, enough to read duration.
    let pollId: number | null = null;
    const ensureReady = () => {
      if (video.readyState >= 1) {
        onReady();
        if (pollId !== null) {
          window.clearInterval(pollId);
          pollId = null;
        }
      }
    };
    ensureReady();
    if (video.readyState < 1) {
      video.addEventListener('loadedmetadata', onReady);
      video.addEventListener('canplay', onReady);
      // Fallback poll in case events are eaten
      let polls = 0;
      pollId = window.setInterval(() => {
        polls++;
        if (video.readyState >= 1) {
          onReady();
          if (pollId !== null) {
            window.clearInterval(pollId);
            pollId = null;
          }
        } else if (polls > 25) {
          if (pollId !== null) {
            window.clearInterval(pollId);
            pollId = null;
          }
        }
      }, 200);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll(); // initial sync

    video.play().catch(() => { /* autoplay may be blocked */ });

    return () => {
      video.removeEventListener('loadedmetadata', onReady);
      video.removeEventListener('canplay', onReady);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (pollId !== null) window.clearInterval(pollId);
      video.pause();
    };
  }, []);

  return (
    <div className="video-stage" aria-hidden="true">
      <video
        ref={videoRef}
        src="/videos/scroll-bg.mp4"
        muted
        playsInline
        loop={false}
        preload="auto"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}
