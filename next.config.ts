import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL("https://cdn.baohatinh.vn/images/**")],
    },
};

export default nextConfig;
