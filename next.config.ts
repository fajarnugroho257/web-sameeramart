import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: "export", // penting
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "ag-bata.com",
      },
      {
        protocol: "https",
        hostname: "demoapps.online",
      },
      {
        protocol: "https",
        hostname: "sameeramart.com",
      },
    ],
  },
};

export default nextConfig;
