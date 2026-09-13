'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gallerySlides } from '@/lib/gallery';

const AUTOPLAY_MS = 5000;

/* Sits at ~55% of the viewport on desktop, full width below that —
   this keeps next/image from shipping a larger source than the slot needs. */
const SIZES = '(min-width: 1024px) 55vw, 100vw';

/* True for the slide before, at, and after the current one. */
function isNear(i: number, current: number, total: number): boolean {
  return i === current || i === (current + 1) % total || i === (current - 1 + total) % total;
}

export default function WhyMagnumSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  /* Autoplay waits until the section is actually on screen. */
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const go = (next: number) => setIndex((next + gallerySlides.length) % gallerySlides.length);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '200px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !visible) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % gallerySlides.length),
      AUTOPLAY_MS
    );
    return () => window.clearInterval(timer);
  }, [paused, visible]);

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Magnum Auto operations"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative flex min-h-[22rem] flex-col justify-end overflow-hidden lg:min-h-[34rem]"
    >
      {gallerySlides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Only the outgoing, current and next slides carry a real <Image>:
              the first keeps the fade intact, the last is prefetched so the
              next transition never lands on an empty frame. */}
          {isNear(i, index, gallerySlides.length) && (
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes={SIZES}
              placeholder={slide.blurDataURL ? 'blur' : 'empty'}
              blurDataURL={slide.blurDataURL}
              className="object-cover"
            />
          )}
        </div>
      ))}

      <div className="absolute inset-0 bg-black/25"></div>

      {/* Caption bar — controls sit between the two labels */}
      <div className="relative z-10 px-8 pb-8 sm:px-12 sm:pb-10">
        <div className="border-t border-white/25 pt-5">
          <div className="flex items-center justify-between gap-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
            <span>Dubai, UAE</span>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
                className="text-white/70 transition-colors hover:text-white focus:outline-none focus-visible:text-white"
              >
                <span aria-hidden="true">←︎</span>
              </button>

              <div className="flex items-center gap-2">
                {gallerySlides.map((slide, i) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next slide"
                className="text-white/70 transition-colors hover:text-white focus:outline-none focus-visible:text-white"
              >
                <span aria-hidden="true">→︎</span>
              </button>
            </div>

            <span>Export operations</span>
          </div>
        </div>
      </div>
    </div>
  );
}
