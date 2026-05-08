import { PageHero } from "@/components/layout/page-hero";
import { PAGE_HOME } from "@/components/layout/site-urls";

export const GioiThieuHero = () => (
  <PageHero
    title="Giới thiệu"
    breadcrumbItems={[
      { label: "Trang chủ", href: PAGE_HOME },
      { label: "Giới thiệu" },
    ]}
    headingId="gioi-thieu-hero-heading"
  />
);
