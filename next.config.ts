import type { NextConfig } from "next";
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false, // 👈 DISABLING THIS TO AVOID DOUBLE RENDER
});

export default nextConfig;
