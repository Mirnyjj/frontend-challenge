import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["cdn2.thecatapi.com"],
  },
  // output: "export",
  // reactStrictMode: true,
};

module.exports = nextConfig;
