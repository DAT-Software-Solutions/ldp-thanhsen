import { ServicesSection } from "@/components/home/services-section";
import { PageHero } from "@/components/layout/page-hero";
import { PAGE_HOME } from "@/components/layout/site-urls";
import { JsonLd } from "@/components/seo/json-ld";
import {
    buildSeoMetadata,
    getAbsoluteUrl,
    siteName,
    websiteJsonLd,
} from "@/lib/site-seo";
import { services } from "@/mock/services";

const pageTitle = "Dịch vụ";

const pageDescription =
    "Các dịch vụ pháp lý, thừa phát lại, trọng tài thương mại, thẩm định giá và đấu giá của Thành Sen Group.";

export const metadata = buildSeoMetadata({
    title: pageTitle,
    description: pageDescription,
    path: "/dich-vu",
});

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
                item: getAbsoluteUrl("/dich-vu"),
            },
        ],
    };

    return (
        <>
            <JsonLd data={[serviceListingJsonLd, breadcrumbJsonLd]} />
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
