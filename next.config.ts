import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for modern browsers - reduces bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
