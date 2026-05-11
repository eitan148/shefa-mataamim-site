import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      { protocol: "https", hostname: "www.wigig.co.il" },
      { protocol: "https", hostname: "wigig.co.il" },
    ],
  },
  async redirects() {
    return [
      { source: "/%d7%a6%d7%95%d7%a8", destination: "/contact", permanent: true },
      { source: "/%d7%a6%d7%95%d7%a8/", destination: "/contact", permanent: true },
      { source: "/thx", destination: "/thank-you", permanent: true },
      { source: "/thx/", destination: "/thank-you", permanent: true },
      { source: "/%d7%aa%d7%a0%d7%90%d7%99-%d7%a9%d7%99%d7%9e%d7%95%d7%a9-%d7%91%d7%90%d7%aa%d7%a8-%d7%96%d7%94", destination: "/terms", permanent: true },
      { source: "/%d7%aa%d7%a0%d7%90%d7%99-%d7%a9%d7%99%d7%9e%d7%95%d7%a9-%d7%91%d7%90%d7%aa%d7%a8-%d7%96%d7%94/", destination: "/terms", permanent: true },
      { source: "/%d7%94%d7%a6%d7%94%d7%a8%d7%aa-%d7%a0%d7%92%d7%99%d7%a9%d7%95%d7%aa", destination: "/accessibility", permanent: true },
      { source: "/%d7%94%d7%a6%d7%94%d7%a8%d7%aa-%d7%a0%d7%92%d7%99%d7%a9%d7%95%d7%aa/", destination: "/accessibility", permanent: true },
    ];
  },
};

export default nextConfig;
