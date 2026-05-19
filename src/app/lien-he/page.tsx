import { BranchesMapSection } from "@/components/lien-he/branches-map-section";
import { ContactHero } from "@/components/lien-he/contact-hero";
import { ContactInfoForm } from "@/components/lien-he/contact-info-form";
import { PAGE_HOME } from "@/components/layout/site-urls";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildSeoMetadata,
  getAbsoluteUrl,
  organizationJsonLd,
  siteBranches,
  siteName,
  websiteJsonLd,
} from "@/lib/site-seo";

const pageTitle = "Liên hệ";

const pageDescription =
  "Liên hệ Thành Sen Group để được tư vấn pháp lý. Đội ngũ sẵn sàng hỗ trợ quý khách với các dịch vụ pháp luật chuyên nghiệp và kịp thời.";

export const metadata = buildSeoMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/lien-he",
});

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
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chá»§",
        item: getAbsoluteUrl(PAGE_HOME),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageTitle,
        item: getAbsoluteUrl("/lien-he"),
      },
    ],
  };

  return (
    <>
      <JsonLd data={[contactJsonLd, breadcrumbJsonLd]} />
      <ContactHero />
      <ContactInfoForm />
      <BranchesMapSection />
    </>
  );
}
