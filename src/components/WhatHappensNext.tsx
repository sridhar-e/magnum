import React from 'react';

const steps = [
  {
    number: '01',
    title: 'RFQ review',
    body: 'Brands, part numbers, quantities and sourcing requirements are checked.',
  },
  {
    number: '02',
    title: 'Pricing & availability',
    body: 'Available lines are quoted with quantities and expected lead times.',
  },
  {
    number: '03',
    title: 'Order & shipment',
    body: 'Once confirmed, consolidation, packing and dispatch are coordinated.',
  },
];

export default function WhatHappensNext() {
  return (
    <section className="w-full bg-sand py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
          What happens next
        </p>

        <div className="mt-8 grid grid-cols-1 gap-10 border-t border-charcoal/20 pt-12 sm:grid-cols-3 sm:gap-14">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="italic text-xs text-charcoal/45">
                {step.number}
              </span>

              <h3 className="mt-8 font-medium text-2xl lg:text-[1.75rem] leading-[1.2] text-charcoal">
                {step.title}
              </h3>

              <p className="mt-4 max-w-sm text-[14px] leading-[1.7] text-ink">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
