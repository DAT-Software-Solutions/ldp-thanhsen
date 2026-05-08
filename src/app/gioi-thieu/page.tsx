import type { Metadata } from "next";

import { GioiThieuHero } from "@/components/gioi-thieu/gioi-thieu-hero";
import { GioiThieuSections } from "@/components/gioi-thieu/gioi-thieu-sections";
import { siteName } from "@/lib/site-seo";
import { ServicesSection } from "@/components/home/services-section";
import { GioiThieuCtaSection } from "@/components/gioi-thieu/gioi-thieu-cta-section";

const pageTitle = "Giới thiệu";

const pageDescription =
  "Tìm hiểu Thành Sen Group — định hướng phát triển và cam kết đồng hành cùng khách hàng trong các giải pháp pháp lý toàn diện tại Việt Nam.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/gioi-thieu" },
  openGraph: {
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    url: "/gioi-thieu",
  },
};

export default function GioiThieuPage() {
  return (
    <>
      <GioiThieuHero />
      <GioiThieuSections />
      <ServicesSection />
      <GioiThieuCtaSection />
    </>
  );
}
