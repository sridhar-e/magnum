'use client';

import React, { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    /* Kept mounted so it can fade; hidden from pointer and assistive tech when idle. */
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-[8.75rem] right-6 sm:bottom-[9.5rem] sm:right-8 z-50 flex h-12 w-12 items-center justify-center bg-bark text-lg text-white shadow-lg transition-all duration-300 hover:bg-cocoa focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
        visible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-3'
      }`}
    >
      <span aria-hidden="true">↑︎</span>
    </button>
  );
}
