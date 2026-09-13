import React from 'react';

const stats = [
  { value: '12+', label: 'Years of industry experience' },
  { value: '30+', label: 'Countries supplied' },
  { value: '11', label: 'Automotive brands supplied' },
  { value: '2,000+', label: 'Shipments' },
];

const highlights = [
  '100% genuine parts through OEM and authorised distributor channels',
  'Dubai-based consolidation and worldwide export',
  'Multi-currency quotations and multilingual sales support',
];

export default function About() {
  return (
    <section id="about" className="w-full bg-cream py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left — narrative */}
          <div className="rounded-3xl bg-white p-8 sm:p-9 lg:p-10 lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              About Magnum Auto
            </p>

            <h2 className="mt-6 max-w-xl text-3xl sm:text-4xl lg:text-[2.5rem] font-medium leading-[1.15] tracking-[-0.02em] text-navy">
              Proven supply across brands, borders and market cycles.
            </h2>

            <div className="mt-6 space-y-4 text-ink text-[15px] leading-[1.65]">
              <p className="font-semibold">
                Magnum Auto is led by a management team with more than 12 years of
                experience in international automotive parts trading.
              </p>
              <p>
                Our established commercial relationships within global OEM supply channels
                and authorised distributor networks broaden our access across brands and
                markets.
              </p>
              <p>
                By adapting sourcing routes and responding quickly to supply-chain
                disruptions, we continued supporting customers throughout the COVID-19
                pandemic, global parts shortages and periods of geopolitical disruption.
                We maintained clear, realistic commitments on quantities, lead times and
                delivery schedules.
              </p>
              <p className="font-semibold">
                We aim to become the first-choice Dubai-based supplier for international
                automotive parts buyers by simplifying sourcing, consolidating multi-brand
                orders and providing continuous support from enquiry through delivery.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#send-rfq"
                className="inline-flex items-center justify-between gap-8 min-w-[15.5rem] border border-espresso bg-espresso px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-transparent hover:text-espresso"
              >
                Send your RFQ
                <span aria-hidden="true">↗︎</span>
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-between gap-8 min-w-[15.5rem] border border-navy/25 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy transition duration-300 hover:bg-navy hover:text-white"
              >
                See what we supply
                <span aria-hidden="true">→︎</span>
              </a>
            </div>
          </div>

          {/* Right — track record */}
          <div className="rounded-3xl bg-bark p-8 sm:p-9 lg:p-10 lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Our track record
            </p>

            <p className="mt-6 text-xl sm:text-2xl leading-snug text-white">
              International supply, measured in numbers.
            </p>

            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-4xl sm:text-[2.75rem] font-bold leading-none tracking-[-0.02em] text-gold">
                      {stat.value}
                    </span>
                    <span className="mt-3 block text-sm font-semibold text-white/85">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-8 space-y-4 border-t border-white/10 pt-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border border-gold"
                  ></span>
                  <span className="text-sm font-semibold leading-relaxed text-white/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
