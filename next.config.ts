import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* googleapis reaches for Node built-ins, so it is required at runtime
     instead of being bundled into the server build. */
  serverExternalPackages: ["googleapis"],
  /* AVIF first: the hero and gallery photographs come out roughly a third
     smaller than WebP, with WebP kept for browsers that lack AVIF. */
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    /* Tailwind output is ~10KB gzipped, so shipping it inside the HTML costs
       little and removes the render-blocking stylesheet round trip before the
       first paint. */
    inlineCss: true,
  },
};

export default nextConfig;
