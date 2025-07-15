import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // folder after build
  output: "standalone",
  // accept external image from setting url
  images: {
    remotePatterns: [new URL("https://lh3.googleusercontent.com/**")],
  },
  // index.page.tsx... or index.api.tsx..
  pageExtensions: [
    "page.tsx",
    "page.ts",
    "page.jsx",
    "page.js",
    "api.tsx",
    "api.ts",
    "api.jsx",
    "api.js",
  ],
  basePath: "/meeting",
};

export default nextConfig;
