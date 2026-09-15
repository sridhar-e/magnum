import type { Metadata } from 'next';

/* Routes that exist but are still being built and are not linked from the
   menus. They are disallowed in app/robots.ts and marked noindex here, so
   crawlers neither fetch nor list them. When a page goes live, remove it from
   this list and drop the `robots: underConstruction` line from its metadata. */
export const hiddenRoutes = [
  '/about',
  '/what-we-do',
  '/brands',
  '/contact',
  '/resources',
  '/resources/lorem-ipsum-dolor-sit-amet',
  '/resources/sed-ut-perspiciatis-unde-omnis',
  '/resources/at-vero-eos-et-accusamus',
];

export const underConstruction: Metadata['robots'] = {
  index: false,
  follow: false,
  googleBot: { index: false, follow: false },
};
