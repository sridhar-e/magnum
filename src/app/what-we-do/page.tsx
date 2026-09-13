import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadyToSource from '@/components/ReadyToSource';

export const metadata: Metadata = {
  title: 'What We Do | MAGNUM AUTO',
  description:
    'Sourcing, warehousing and consolidation, packing and global delivery of genuine automotive spare parts, handled end to end from Dubai.',
};

const buyers = [
  {
    number: '01',
    title: 'Importers & distributors',
    body: 'Genuine lines you can rely on, in the quantities your market moves, shipped complete.',
  },
  {
    number: '02',
    title: 'Automotive parts wholesalers',
    body: 'Multi-brand requirements handled as a single RFQ, priced to resell.',
  },
  {
    number: '03',
    title: 'Exporters & trading companies',
    body: 'A dependable Dubai source, with the documentation cross-border trade expects.',
  },
  {
    number: '04',
    title: 'Large workshop / bodyshop groups',
    body: 'Genuine panels, mechanical parts and lubricants for repair programmes, with authenticity paperwork when a job is insurer-backed.',
  },
  {
    number: '05',
    title: 'Fleet & insurance supply partners',
    body: 'Repeat supply for the vehicle lines you run or underwrite, quoted on a schedule you can plan around.',
  },
];

const steps = [
  { number: '01', title: 'Sourcing' },
  { number: '02', title: 'Warehousing & consolidation' },
  { number: '03', title: 'Packing & repacking' },
  { number: '04', title: 'Global delivery' },
];

export default function WhatWeDoPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      <Header />

      <main className="flex-1">
        {/* Commercial focus — dark band keeps the fixed header legible */}
        <section
          className="relative w-full bg-bark bg-cover bg-center px-6 pb-14 pt-32 sm:pb-16 sm:pt-36"
          style={{ backgroundImage: 'url(/about/gallery2.webp)' }}
        >
          {/* Tint keeps the band on-palette and the copy readable */}
          <div className="absolute inset-0 bg-bark/85"></div>

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
              Commercial Focus
            </p>

            <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
              <h1 className="lg:col-span-7 font-medium text-4xl leading-[1.12] tracking-[-0.01em] text-white sm:text-5xl">
                What each type of buyer gets from us.
              </h1>

              <p className="lg:col-span-5 lg:self-end max-w-md text-[15px] leading-[1.8] text-white/75">
                Different buyers need different things from a supplier. Here is what we
                handle for each.
              </p>
            </div>
          </div>
        </section>

        {/* Buyer types */}
        <section className="w-full bg-shell px-6 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-7xl">
            <dl className="border-y border-charcoal/15 divide-y divide-charcoal/15">
              {buyers.map((buyer) => (
                <div
                  key={buyer.number}
                  className="grid grid-cols-1 gap-x-10 gap-y-3 py-8 sm:grid-cols-[3rem_1fr] lg:grid-cols-[3rem_22rem_1fr]"
                >
                  <span className="italic text-xs text-charcoal/40">{buyer.number}</span>

                  <dt className="font-medium text-xl lg:text-2xl leading-snug text-charcoal">
                    {buyer.title}
                  </dt>

                  <dd className="sm:col-start-2 lg:col-start-3 max-w-xl text-[15px] leading-[1.7] text-ink">
                    {buyer.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* How we work */}
        <section className="w-full bg-sand px-6 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-7xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
              How We Work
            </p>

            <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
              <h2 className="lg:col-span-6 font-medium text-3xl leading-[1.12] tracking-[-0.01em] text-charcoal sm:text-4xl">
                End-to-end delivery solution
              </h2>

              <p className="lg:col-span-6 lg:self-end max-w-xl text-[15px] leading-[1.8] text-ink">
                At Magnum Auto, we go beyond just supplying parts, we offer end-to-end
                solutions for all your automotive spare part needs.
              </p>
            </div>

            <ol className="mt-12 grid grid-cols-1 border border-charcoal/15 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-charcoal/15 divide-y divide-charcoal/15 lg:divide-y-0">
              {steps.map((step) => (
                <li key={step.number} className="flex min-h-[11rem] flex-col p-8">
                  <span className="italic text-xs text-charcoal/45">{step.number}</span>
                  <h3 className="mt-auto font-medium text-xl lg:text-2xl leading-[1.25] text-charcoal">
                    {step.title}
                  </h3>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ReadyToSource />
      </main>

      <Footer />
    </div>
  );
}
