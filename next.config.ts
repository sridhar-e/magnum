import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* googleapis reaches for Node built-ins, so it is required at runtime
     instead of being bundled into the server build. */
  serverExternalPackages: ["googleapis"],
};

export default nextConfig;
