import type { Metadata } from "next";

import { BranchesMapSection } from "@/components/lien-he/branches-map-section";
import { ContactHero } from "@/components/lien-he/contact-hero";
import { ContactInfoForm } from "@/components/lien-he/contact-info-form";
import { JsonLd } from "@/components/seo/json-ld";
import {
  defaultOgImagePath,
  getAbsoluteUrl,
  organizationJsonLd,
  siteBranches,
  siteName,
  websiteJsonLd,
} from "@/lib/site-seo";

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
    images: [{ url: defaultOgImagePath, width: 1200, height: 630 }],
  },
  twitter: {
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    images: [defaultOgImagePath],
  },
};

export default function LienHePage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${getAbsoluteUrl("/lien-he")}/#webpage`,
    url: getAbsoluteUrl("/lien-he"),
    name: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    inLanguage: "vi",
    isPartOf: {
      "@id": websiteJsonLd["@id"],
    },
    about: {
      "@id": organizationJsonLd["@id"],
    },
    mainEntity: {
      "@id": organizationJsonLd["@id"],
      location: siteBranches.map((branch) => ({
        "@type": "Place",
        name: branch.name,
        address: branch.address,
      })),
    },
  };

  return (
    <>
      <JsonLd data={contactJsonLd} />
      <ContactHero />
      <ContactInfoForm />
      <BranchesMapSection />
    </>
  );
}
