import type { Metadata } from "next";

import { ServicesSection } from "@/components/home/services-section";
import { PageHero } from "@/components/layout/page-hero";
import { PAGE_HOME } from "@/components/layout/site-urls";
import { JsonLd } from "@/components/seo/json-ld";
import {
    defaultOgImagePath,
    getAbsoluteUrl,
    siteName,
    websiteJsonLd,
} from "@/lib/site-seo";
import { services } from "@/mock/services";

const pageTitle = "Dịch vụ";

const pageDescription =
    "Các dịch vụ pháp lý, thừa phát lại, trọng tài thương mại, thẩm định giá và đấu giá của Thành Sen Group.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: "/dich-vu" },
    openGraph: {
        title: `${pageTitle} | ${siteName}`,
        description: pageDescription,
        url: "/dich-vu",
        images: [{ url: defaultOgImagePath, width: 1200, height: 630 }],
    },
    twitter: {
        title: `${pageTitle} | ${siteName}`,
        description: pageDescription,
        images: [defaultOgImagePath],
    },
};

export default function DichVuPage() {
    const serviceListingJsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${getAbsoluteUrl("/dich-vu")}/#webpage`,
        url: getAbsoluteUrl("/dich-vu"),
        name: `${pageTitle} | ${siteName}`,
        description: pageDescription,
        inLanguage: "vi",
        isPartOf: {
            "@id": websiteJsonLd["@id"],
        },
        mainEntity: services.map((service) => ({
            "@type": "Service",
            name: service.title,
            description: service.content,
            url: getAbsoluteUrl(service.href),
        })),
    };

    return (
        <>
            <JsonLd data={serviceListingJsonLd} />
            <PageHero
                title={pageTitle}
                breadcrumbItems={[
                    { label: "Trang chủ", href: PAGE_HOME },
                    { label: pageTitle },
                ]}
            />
            <ServicesSection services={services} background='bg-surface-muted' />
        </>
    );
}
