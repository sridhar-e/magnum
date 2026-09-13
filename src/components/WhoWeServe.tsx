import React from 'react';
/* Imported from /ssr so the icons stay renderable in a Server Component;
   the default entry point needs the client-side icon context. */
import {
  GlobeHemisphereWest,
  ShieldCheck,
  Storefront,
  Warehouse,
  Wrench,
} from '@phosphor-icons/react/dist/ssr';

const audiences = [
  {
    icon: Warehouse,
    title: 'Wholesalers & Stockists',
    body: 'Parts wholesalers and stockists purchasing for inventory, regular supply and resale.',
  },
  {
    icon: Wrench,
    title: 'Service & Workshop Networks',
    body: 'Service and workshop groups sourcing genuine parts for maintenance and mechanical repair.',
  },
  {
    icon: ShieldCheck,
    title: 'Insurance Parts Procurement Specialists',
    body: 'Specialist buyers coordinating genuine spare parts for insurer-approved accident-repair requirements.',
  },
  {
    icon: Storefront,
    title: 'Multi-Brand Franchise Dealers',
    body: 'Franchise dealer groups requiring genuine spare parts across multiple vehicle brands and locations.',
  },
  {
    icon: GlobeHemisphereWest,
    title: 'Parts Traders & Distributors',
    body: 'Importers, exporters, distributors and trading companies supplying parts within and across their markets.',
  },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="w-full bg-shell py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Label left, standfirst set against it on the right, on the same
            row. Same header rhythm the other sections use. */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
              Who we serve
            </p>
          </div>

          <p className="max-w-xl border-l border-espresso/40 pl-6 text-[15px] leading-[1.7] text-ink lg:col-span-6">
            Supplying genuine automotive spare parts to trade, dealer, service and
            specialist procurement networks worldwide.
          </p>
        </div>

        {/* Five separate cards, each its own bordered surface with a gap
            between, rather than one continuous hairline strip. */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map((item) => {
            const Icon = item.icon;

            return (
            <a
              key={item.title}
              href="#send-rfq"
              className="group flex min-h-[19rem] flex-col border border-charcoal/15 bg-cream p-6 transition duration-300 hover:border-charcoal/30 hover:bg-[#f1e7dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-charcoal/40"
            >
              <div className="flex items-start justify-between gap-4">
                {/* Decorative, the title names the audience. One weight across
                    all five so the row reads as a set. */}
                <Icon
                  size={30}
                  weight="light"
                  aria-hidden="true"
                  className="text-bark transition-colors duration-300 group-hover:text-cocoa"
                />

                <span
                  aria-hidden="true"
                  className="translate-y-1 text-sm text-charcoal/50 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  ↗︎
                </span>
              </div>

              {/* mt-auto bottom-anchors the title block, so a three-line card
                  still lines its last line up with the others. */}
              <h3 className="mt-auto pt-10 font-bold text-xl leading-[1.2] tracking-[-0.01em] text-charcoal">
                {item.title}
              </h3>

              <p className="mt-4 text-[13px] leading-[1.65] text-charcoal/65">
                {item.body}
              </p>
            </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
