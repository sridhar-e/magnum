'use client';

import React, { useEffect, useRef, useState } from 'react';
import { getImageProps } from 'next/image';
import { Pause, Play } from '@phosphor-icons/react/dist/ssr';

const VIDEO_SRC = '/magnum-hero.mp4';

/* The poster is requested with the page, so it goes through the image
   optimiser: `src` resolves to the 640w variant (AVIF/WebP), which covers the
   ~360–480px frame at typical pixel densities instead of the 1280px original. */
const POSTER_SRC = getImageProps({
  src: '/magnum-hero-poster.webp',
  alt: '',
  width: 320,
  height: 180,
}).props.src;

/* Client leaf so the rest of the hero stays a Server Component. The only state
   here is whether the footage is running, which drives the play mark. Sound is
   left to the native control bar: browsers only autoplay muted video, so it
   starts silent and the viewer unmutes it from the bar. */
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  /* The file is several MB, so it is attached only once the page has finished
     loading. Until then the poster holds the frame, and the download never
     competes with the headline, styles and scripts for the first paint. */
  const attachSource = (video: HTMLVideoElement) => {
    if (!video.getAttribute('src')) video.src = VIDEO_SRC;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const start = () => {
      attachSource(video);
      /* A browser may still refuse to start it (iOS Low Power Mode, for one),
         and the play mark has to reflect that. */
      video.play().catch(() => setPlaying(false));
    };

    /* Load, then the next idle period: by then the first paint and hydration
       are done, so the download starts on a quiet main thread and network. */
    let idleId: number | undefined;
    const schedule = () => {
      idleId = window.requestIdleCallback
        ? window.requestIdleCallback(start, { timeout: 3000 })
        : window.setTimeout(start, 1000);
    };
    const cancel = () => {
      if (idleId === undefined) return;
      if (window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
    };

    if (document.readyState === 'complete') {
      schedule();
      return cancel;
    }
    window.addEventListener('load', schedule, { once: true });
    return () => {
      window.removeEventListener('load', schedule);
      cancel();
    };
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      attachSource(video);
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    /* Same radius as the slab behind, so the two curves are concentric.
       overflow-hidden clips the video and the tint layer to the rounded
       frame. */
    <div className="relative isolate overflow-hidden rounded-xl border border-white/20 shadow-2xl shadow-pitch/50">
      <video
        ref={videoRef}
        className="aspect-[16/9] w-full object-cover lg:aspect-[16/10]"
        width={960}
        height={540}
        poster={POSTER_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        controls
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-label="Genuine parts crated and palletised in the Magnum Auto warehouse in Dubai"
      />

      {/* Ties the footage into the navy palette. Click-through so it never
          sits between the viewer and the native controls. */}
      <div className="pointer-events-none absolute inset-0 bg-bark/25 mix-blend-color" aria-hidden="true"></div>


      {/* Play mark. The wrapper is inert, so the pointer keeps reaching the
          video underneath and the browser's own control bar shows, hides and
          takes clicks exactly as it would on a bare video. Only the centred
          mark is interactive, and only while the footage is stopped: once it
          is running the native bar owns pause, so the mark is decoration that
          fades in on hover. */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {playing ? (
          <span
            aria-hidden="true"
            className="opacity-0 transition-opacity duration-300 group-hover/video:opacity-100"
          >
            <Pause
              size={64}
              weight="fill"
              className="text-[#b28d30] drop-shadow-[0_2px_10px_rgb(3_10_28/0.65)]"
            />
          </span>
        ) : (
          <button
            type="button"
            onClick={toggle}
            aria-label="Play video"
            className="pointer-events-auto rounded-full transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b28d30]"
          >
            <Play
              size={64}
              weight="fill"
              aria-hidden="true"
              className="text-[#b28d30] drop-shadow-[0_2px_10px_rgb(3_10_28/0.65)]"
            />
          </button>
        )}
      </div>
    </div>
  );
}
