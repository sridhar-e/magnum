import type { MetadataRoute } from 'next';
import { hiddenRoutes } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: hiddenRoutes,
    },
  };
}
