import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/trang-ch%E1%BB%A7/:path*",
        destination: "/trang-chu/:path*",
      },
    ];
  },
};

export default nextConfig;
