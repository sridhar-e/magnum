import React from 'react';
import Image from 'next/image';
import RfqForm from '@/components/RfqForm';

/* 16px inline preview of the band image, so the tint has something to sit on
   before the file lands. */
const RFQ_BLUR =
  'data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAQCdASoQAAsAA4BaJZACdACRq/SwAP5g/KNSWfdCk4mBuxWmBUuZUDUhW+QiHcSEvYkjgB9RkAaL2IEU+4qqHGUAAA==';

type Variant = 'dark' | 'light';

/* 'light' is used on the contact page, where the section sits on cream. */
const theme = {
  dark: {
    section: 'bg-bark',
    image: '/RFQ.webp',
    overlay: 'bg-bark/85',
    eyebrow: 'text-white/60',
    heading: 'text-white',
    body: 'text-white/70',
    rule: 'border-white/20',
    contact: 'text-white',
    card: 'bg-shell',
  },
  light: {
    section: 'bg-cream',
    image: null,
    overlay: null,
    eyebrow: 'text-espresso',
    heading: 'text-charcoal',
    body: 'text-ink',
    rule: 'border-charcoal/20',
    contact: 'text-charcoal',
    card: 'bg-white border border-charcoal/10',
  },
};

export default function SendRfq({ variant = 'dark' }: { variant?: Variant }) {
  const t = theme[variant];

  return (
    <section
      id="send-rfq"
      className={`relative w-full overflow-hidden ${t.section} py-14 sm:py-16`}
    >
      {t.image && (
        <Image
          src={t.image}
          alt=""
          aria-hidden="true"
          fill
          /* Full-bleed band, so the browser picks by viewport width. */
          sizes="100vw"
          placeholder="blur"
          blurDataURL={RFQ_BLUR}
          className="object-cover"
        />
      )}

      {/* Tint keeps the band on-palette and the copy readable */}
      {t.overlay && <div className={`absolute inset-0 ${t.overlay}`}></div>}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — pitch and contact */}
          <div className="lg:col-span-5">
            <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${t.eyebrow}`}>
              Send your RFQ
            </p>

            <h2 className={`mt-6 max-w-sm font-medium text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-[-0.01em] ${t.heading}`}>
              Already have a part-number list?
            </h2>

            <p className={`mt-5 max-w-md text-[15px] leading-[1.7] ${t.body}`}>
              Upload it directly. Our sales team will review the brands, quantities,
              availability and expected lead times.
            </p>


            <div className={`mt-8 space-y-2 border-t ${t.rule} pt-6 font-medium text-xl ${t.contact}`}>
              <p>
                <a href="mailto:trade@magnumautofz.com" className="hover:underline">
                  trade@magnumautofz.com
                </a>
              </p>
              <p>
                <a href="tel:+971569009877" className="hover:underline">
                  +971 56 900 9877
                </a>
              </p>
            </div>
          </div>

          {/* Right — RFQ form */}
          <div className="lg:col-span-7">
            <RfqForm cardClass={t.card} />
          </div>
        </div>
      </div>
    </section>
  );
}
