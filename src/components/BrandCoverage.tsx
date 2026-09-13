import React from 'react';
import Image from 'next/image';
import { coverage } from '@/lib/brands';

export default function BrandCoverage() {
  return (
    <section id="brands" className="w-full bg-cream py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading row */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
              Brands we supply
            </p>
          </div>

          <div className="lg:col-span-6 border-l border-espresso/35 pl-6">
            <p className="max-w-lg text-[15px] leading-[1.7] text-charcoal">
              Our brand coverage reflects the vehicle lines we regularly source and supply
              to international parts buyers.
            </p>
          </div>
        </div>

        {/* Coverage cards — vehicle photo behind, region and marques over it.
            All five sit on one row from lg up, so the type is sized for a
            narrow column. */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {coverage.map((row) => (
            <article
              key={row.region}
              className="group relative isolate flex aspect-square flex-col justify-end overflow-hidden bg-cocoa"
            >
              {/* Decorative, so the alt is empty — the region name beside it
                  already carries the meaning. `sizes` matches the five-up
                  desktop row so phones never fetch a full-width file. A row
                  without a photo keeps the navy card underneath instead of
                  requesting a file that is not there. */}
              {row.image && (
                <Image
                  src={row.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className="-z-10 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              )}

              {/* Navy tint, then a gradient weighted to the bottom where the
                  type sits. Kept off the top two thirds so the photo is
                  actually readable; the number up there carries its own text
                  shadow rather than needing the whole card darkened. */}
              <div className="absolute inset-0 -z-10 bg-bark/30 mix-blend-color" aria-hidden="true"></div>
              <div
                className="absolute inset-0 -z-10 bg-gradient-to-t from-pitch/92 via-pitch/45 to-pitch/10 transition-colors duration-500 group-hover:via-pitch/55"
                aria-hidden="true"
              ></div>

              <span className="absolute left-5 top-5 text-[13px] font-bold tracking-[0.22em] text-white [text-shadow:0_1px_3px_rgb(3_10_28/0.9)]">
                {row.number}
              </span>

              <div className="px-5 pb-6">
                <h3 className="text-2xl font-bold leading-none tracking-[-0.02em] text-white [text-shadow:0_2px_6px_rgb(3_10_28/0.75)] sm:text-[1.75rem]">
                  {row.region}
                </h3>

                <p className="mt-3 text-[15px] font-medium leading-[1.55] tracking-[0.02em] text-white/90 [text-shadow:0_1px_3px_rgb(3_10_28/0.9)]">
                  {row.brands.join(' · ')}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Consolidated export */}
        <div className="grid grid-cols-1 gap-4 px-6 py-8 sm:px-8 lg:grid-cols-12 lg:gap-10">
          <p className="lg:col-span-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
            Consolidated export
          </p>

          <p className="lg:col-span-9 border-l border-charcoal/20 pl-6 text-[15px] leading-[1.7] text-charcoal">
            Multiple brands can be repacked and combined into one consolidated shipment
            from Dubai.
          </p>
        </div>
      </div>
    </section>
  );
}
