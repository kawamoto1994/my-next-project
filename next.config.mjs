/** @type {import('next').NextConfig} */

import { hostname } from "os";
// const nextConfig = {}

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.microcms-assets.io" },
    ],
  },
};

export default nextConfig;
