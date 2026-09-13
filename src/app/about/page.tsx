import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadyToSource from '@/components/ReadyToSource';

export const metadata: Metadata = {
  title: 'About | MAGNUM AUTO',
  description:
    'Magnum Auto FZE has supplied genuine spare parts and lubricants to trade buyers from Dubai since 2014, sourcing across 15+ vehicle brands and shipping to 40+ countries.',
};


const timeline = [
  {
    year: '2014',
    title: 'Foundation',
    body: 'Established with a focus on genuine spare parts and honest trade.',
  },
  {
    year: '2018',
    title: 'Regional growth',
    body: 'Built a stronger international supplier and logistics network.',
  },
  {
    year: '2021',
    title: 'OEM depth',
    body: 'Deepened genuine sourcing and documentation standards.',
  },
  {
    year: '2025',
    title: 'Global reach',
    body: 'Serving trade buyers across the GCC, US and Latin America.',
  },
];

const values = [
  {
    title: 'Genuine only',
    body: 'Bought from manufacturers and authorised distributors, with authenticity paperwork on request.',
  },
  {
    title: 'Accuracy',
    body: 'Part numbers checked against the order, and shipping documents prepared before dispatch.',
  },
  {
    title: 'Reach',
    body: 'Shipping to 40+ countries by air, sea and multimodal, coordinated in-house.',
  },
];

const eyebrowClass =
  'text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso';

export default function About() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      <Header />

      <main className="flex-1">
        {/* Company story — dark band keeps the fixed header legible */}
        <section
          className="relative w-full bg-bark bg-cover bg-center px-6 pb-14 pt-32 sm:pb-16 sm:pt-36"
          style={{ backgroundImage: 'url(/about/gallery1.webp)' }}
        >
          {/* Tint keeps the band on-palette and the copy readable */}
          <div className="absolute inset-0 bg-bark/85"></div>

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
              Company Story
            </p>

            <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <h1 className="lg:col-span-6 font-medium text-4xl leading-[1.12] tracking-[-0.01em] text-white sm:text-5xl">
                Twelve years supplying genuine parts out of Dubai.
              </h1>

              <div className="lg:col-span-6 lg:self-end">
                <p className="max-w-xl text-[15px] leading-[1.8] text-white/75">
                  Magnum Auto FZE started in 2014 supplying genuine spare parts and
                  lubricants to trade buyers. Today we source across 15+ vehicle brands,
                  consolidate multi-brand orders into single shipments, and ship to more
                  than 40 countries from our Dubai base.
                </p>

                <div className="mt-8 border-t border-white/20 pt-6">
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                    OEM Background
                  </h2>
                  <p className="mt-4 max-w-xl text-[15px] leading-[1.8] text-white/75">
                    We buy from manufacturers and authorised distributors, so parts are
                    traceable to source and authenticity paperwork is available on
                    request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Timeline */}
        <section className="w-full bg-sand px-6 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-7xl">
            <p className={eyebrowClass}>Timeline</p>
            <h2 className="mt-6 max-w-2xl font-medium text-3xl leading-[1.12] tracking-[-0.01em] text-charcoal sm:text-4xl">
              From a single supply desk to 40+ export markets.
            </h2>

            <ol className="mt-12 grid grid-cols-1 gap-10 border-t border-charcoal/20 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              {timeline.map((item) => (
                <li key={item.year}>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-clay">
                    {item.year}
                  </span>
                  <h3 className="mt-4 font-medium text-xl leading-snug text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-[14px] leading-[1.7] text-ink">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Values */}
        <section className="w-full bg-shell px-6 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-7xl">
            <p className={eyebrowClass}>Values</p>
            <h2 className="mt-6 max-w-2xl font-medium text-3xl leading-[1.12] tracking-[-0.01em] text-charcoal sm:text-4xl">
              The standards that shape the business.
            </h2>

            <div className="mt-12 grid grid-cols-1 border border-charcoal/15 md:grid-cols-3 md:divide-x md:divide-charcoal/15 divide-y divide-charcoal/15 md:divide-y-0">
              {values.map((value) => (
                <article key={value.title} className="p-8 lg:p-10">
                  <h3 className="font-medium text-2xl leading-[1.25] text-charcoal">
                    {value.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-[15px] leading-[1.7] text-ink">
                    {value.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="w-full bg-sand px-6 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-7xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
              Leadership
            </p>

            <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <h2 className="lg:col-span-6 max-w-lg font-medium text-3xl leading-[1.12] tracking-[-0.01em] text-charcoal sm:text-4xl">
                The people who price and place your order.
              </h2>

              <div className="lg:col-span-6 lg:self-end">
                <p className="max-w-xl text-[15px] leading-[1.8] text-ink">
                  Our team runs supplier relationships, quotes RFQs, and oversees
                  consolidation and freight, so the person pricing your order is the one
                  who follows it to dispatch.
                </p>

                <div className="mt-8 border-t border-charcoal/20 pt-6">
                  <h3 className="font-medium text-xl leading-snug text-charcoal">
                    Executive oversight
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.8] text-ink">
                    Commercial strategy, operations, and buyer support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ReadyToSource />
      </main>

      <Footer />
    </div>
  );
}
