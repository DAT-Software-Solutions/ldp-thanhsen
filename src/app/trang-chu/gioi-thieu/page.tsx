import type { Metadata } from "next";

import { siteName } from "@/lib/site-seo";

const pageTitle = "Giới thiệu";

const pageDescription =
  "Tìm hiểu Thành Sen Group — định hướng phát triển và cam kết đồng hành cùng khách hàng trong các giải pháp pháp lý toàn diện tại Việt Nam.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/trang-chu/gioi-thieu" },
  openGraph: {
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    url: "/trang-chu/gioi-thieu",
  },
};

export default function GioiThieuPage() {
  return <main className="flex-1" />;
}
