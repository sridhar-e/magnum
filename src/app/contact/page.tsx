import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SendRfq from '@/components/SendRfq';

export const metadata: Metadata = {
  title: 'Contact | MAGNUM AUTO',
  description:
    'Send the brands, part numbers and quantities you need. Magnum Auto FZE comes back with availability, pricing and lead times from Dubai.',
};

const ADDRESS =
  '4203E, 42nd floor, Aspin commercial tower, Sheikh Zayed Road, Dubai, UAE';

const contactDetails = [
  { label: '+971 56 900 9877', href: 'tel:+971569009877' },
  { label: 'trade@magnumautofz.com', href: 'mailto:trade@magnumautofz.com' },
  { label: 'prosupply@magnumautofz.com', href: 'mailto:prosupply@magnumautofz.com' },
  { label: 'WhatsApp: +971 56 900 9877', href: 'https://wa.me/971569009877' },
];

export default function Contact() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      <Header />

      <main className="flex-1">
        {/* Dark band keeps the fixed header legible */}
        <section
          className="relative w-full bg-bark bg-cover bg-center px-6 pb-14 pt-32 sm:pb-16 sm:pt-36"
          style={{ backgroundImage: 'url(/about/gallery5.webp)' }}
        >
          {/* Tint keeps the band on-palette and the copy readable */}
          <div className="absolute inset-0 bg-bark/85"></div>

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
              Get in touch
            </p>

            <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <h1 className="lg:col-span-6 font-medium text-4xl leading-[1.12] tracking-[-0.01em] text-white sm:text-5xl">
                Trade enquiries, answered by the team who price them.
              </h1>

              <div className="lg:col-span-6 lg:self-end">
                <p className="max-w-xl text-[15px] leading-[1.8] text-white/75">
                  Send the brands, part numbers and quantities you need. We come back with
                  availability, pricing and lead times.
                </p>

                <ul className="mt-8 space-y-3 border-t border-white/20 pt-6 text-[15px] leading-[1.8] text-white">
                  {contactDetails.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="underline-offset-4 hover:underline"
                        {...(item.href.startsWith('http')
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-[13px] uppercase tracking-[0.12em] text-white/60">
                  Mon – Fri • 9:00 – 18:00 • UAE Time (UTC+4)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RFQ form, reused from the homepage */}
        <SendRfq variant="light" />

        {/* Office location */}
        <section className="w-full bg-shell px-6 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
                  Office Location
                </p>

                <address className="mt-6 not-italic text-[15px] leading-[1.8] text-ink">
                  {ADDRESS}
                </address>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-between gap-8 min-w-[15.5rem] border border-espresso px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-espresso transition duration-300 hover:bg-espresso hover:text-white"
                >
                  Open in Google Maps
                  <span aria-hidden="true">↗︎</span>
                </a>
              </div>

              <div className="lg:col-span-8">
                <iframe
                  title="Magnum Auto FZE office location on Google Maps"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-[16/9] w-full border border-charcoal/15 sm:aspect-[16/8]"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
