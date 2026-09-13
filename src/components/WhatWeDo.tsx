import React from 'react';

const capabilities = [
  {
    number: '01',
    title: 'Direct sourcing',
    body: 'Our access to manufacturer and authorised-distributor channels helps us secure the best available pricing and lead times while maintaining high fill rates across our core brands.',
    caption: 'Best available price · Lead time · Fill rate',
  },
  {
    number: '02',
    title: 'Logistics capability',
    body: 'Our in-house logistics team manages repacking, multi-brand consolidation, documentation and worldwide export by air and sea.',
    caption: 'Repacking · Consolidation · Worldwide export',
  },
  {
    number: '03',
    title: 'Customer service',
    body: 'Our multilingual team provides end-to-end support, regular order updates and multi-currency quotations throughout the purchasing process.',
    caption: 'End-to-end · Multilingual · Multi-currency',
  },
];

export default function WhatWeDo() {
  return (
    <section id="capabilities" className="w-full bg-sand py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading row — copy sits on the heading's last line */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
              What we do
            </p>
            <h2 className="mt-6 font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.01em] text-charcoal">
              From your parts enquiry
              <br />
              to shipment.
            </h2>
          </div>

          <p className="lg:col-span-5 lg:self-end lg:pb-3 max-w-md border-l border-espresso/35 pl-6 text-[15px] leading-[1.7] text-ink">
            We manage genuine auto spare parts orders through direct supply access,
            in-house logistics and responsive customer service&mdash;all coordinated from
            Dubai.
          </p>
        </div>

        {/* Capability grid — shared hairline borders, no rounding */}
        <div className="mt-14 grid grid-cols-1 border border-charcoal/15 md:grid-cols-3 md:divide-x md:divide-charcoal/15 divide-y divide-charcoal/15 md:divide-y-0">
          {capabilities.map((item) => (
            <article key={item.number} className="flex flex-col p-10 lg:p-12 lg:min-h-[22rem]">
              <span className="italic text-sm text-charcoal/45">
                {item.number}
              </span>

              <h3 className="mt-6 lg:mt-8 font-medium text-2xl lg:text-[1.75rem] leading-[1.25] text-charcoal">
                {item.title}
              </h3>

              <p className="mt-5 max-w-sm text-[15px] leading-[1.7] text-ink">
                {item.body}
              </p>

              <div className="mt-auto pt-8">
                <div className="border-t border-charcoal/15 pt-6">
                  <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/80">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-clay"
                    ></span>
                    {item.caption}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
