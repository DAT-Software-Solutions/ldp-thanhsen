import type { Metadata } from "next";

import { BranchesMapSection } from "@/components/lien-he/branches-map-section";
import { ContactHero } from "@/components/lien-he/contact-hero";
import { ContactInfoForm } from "@/components/lien-he/contact-info-form";
import { siteName } from "@/lib/site-seo";

const pageTitle = "Liên hệ";

const pageDescription =
  "Liên hệ Thành Sen Group để được tư vấn pháp lý. Đội ngũ sẵn sàng hỗ trợ quý khách với các dịch vụ pháp luật chuyên nghiệp và kịp thời.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/lien-he" },
  openGraph: {
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    url: "/lien-he",
  },
};

export default function LienHePage() {
  return (
    <>
      <ContactHero />
      <ContactInfoForm />
      <BranchesMapSection />
    </>
  );
}
