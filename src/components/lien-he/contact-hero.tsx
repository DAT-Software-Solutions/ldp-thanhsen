import { PageHero } from "@/components/layout/page-hero";
import { PAGE_HOME } from "@/components/layout/site-urls";

export const ContactHero = () => (
  <PageHero
    title="Liên hệ"
    breadcrumbItems={[{ label: "Trang chủ", href: PAGE_HOME }, { label: "Liên hệ" }]}
    headingId="contact-hero-heading"
  />
);
