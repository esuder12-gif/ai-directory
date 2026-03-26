import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options for Vercel */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
