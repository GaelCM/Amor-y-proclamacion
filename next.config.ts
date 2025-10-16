import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.fmtt1-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fmtt1-2.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.xx.fbcdn.net', // opcional, a veces FB cambia
      },
    ],
  },
};

export default nextConfig;
