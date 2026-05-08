import { PageHero } from "@/components/layout/page-hero";

export const GioiThieuHero = () => (
  <PageHero
    title="Giới thiệu"
    breadcrumbItems={[{ label: "Trang chủ", href: "/" }, { label: "Giới thiệu" }]}
    headingId="gioi-thieu-hero-heading"
  />
);
