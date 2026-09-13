import React from 'react';

export default function ReadyToSource() {
  return (
    /* Deeper than the footer's bark on purpose. Both were flat bark, so the
       closing CTA and the footer ran together as one navy block; dropping this
       band to cocoa and giving it more air separates the two. */
    <section className="w-full bg-cocoa py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <span aria-hidden="true" className="block h-px w-10 bg-gold"></span>

        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
          Ready to source?
        </p>

        <div className="mt-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <h2 className="lg:col-span-5 font-medium text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.08] tracking-[-0.01em] text-white">
            Have an RFQ ready?
          </h2>

          <p className="lg:col-span-4 max-w-sm text-[14px] leading-[1.7] text-white/70">
            Send your part-number list and let our team check availability, pricing and
            lead time.
          </p>

          <div className="lg:col-span-3 lg:justify-self-end">
            <a
              href="#send-rfq"
              className="inline-flex items-center justify-between gap-10 min-w-[15.5rem] bg-shell px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal transition duration-300 hover:bg-white"
            >
              Send your RFQ
              <span aria-hidden="true">↗︎</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
