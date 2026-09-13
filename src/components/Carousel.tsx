'use client';

import React, { useState } from 'react';

export type Slide = {
  src: string;
  alt: string;
  caption: string;
  /* Tiny inline preview shown while the full image loads. */
  blurDataURL?: string;
};

export default function Carousel({
  slides,
  className = 'aspect-[16/9] sm:aspect-[16/7]',
}: {
  slides: Slide[];
  /* Aspect ratio utilities — override when the carousel sits in a column. */
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  const go = (next: number) => setIndex((next + slides.length) % slides.length);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Magnum Auto operations"
      className={`relative w-full overflow-hidden ${className}`}
    >
      {slides.map((slide, i) => (
        <div
          key={`${slide.src}-${i}`}
          aria-hidden={i !== index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.src})` }}
        >
          <span className="sr-only">{slide.alt}</span>
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

      {/* Controls */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 sm:bottom-8 sm:right-8">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center border border-white/50 text-white transition-colors hover:bg-white hover:text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span aria-hidden="true">←︎</span>
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center border border-white/50 text-white transition-colors hover:bg-white hover:text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span aria-hidden="true">→︎</span>
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 sm:bottom-10">
        {slides.map((slide, i) => (
          <button
            key={`${slide.src}-${i}`}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
