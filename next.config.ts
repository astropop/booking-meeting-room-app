import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images : {
    remotePatterns: [new URL('https://lh3.googleusercontent.com/**')],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  
};
// module.exports = {
//   images: {
//     remotePatterns: [new URL('https://lh3.googleusercontent.com/**')],
//   },
//   pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
// }
export default nextConfig;
