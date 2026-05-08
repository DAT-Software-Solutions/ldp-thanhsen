import { PageHero } from "@/components/layout/page-hero";

export const ContactHero = () => (
  <PageHero
    title="Liên hệ"
    breadcrumbItems={[{ label: "Trang chủ", href: "/" }, { label: "Liên hệ" }]}
    headingId="contact-hero-heading"
  />
);
