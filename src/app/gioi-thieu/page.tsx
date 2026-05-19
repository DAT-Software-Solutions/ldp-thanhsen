import { GioiThieuHero } from "@/components/gioi-thieu/gioi-thieu-hero";
import { GioiThieuNewsSection } from "@/components/gioi-thieu/gioi-thieu-news-section";
import { GioiThieuSections } from "@/components/gioi-thieu/gioi-thieu-sections";
import { JsonLd } from "@/components/seo/json-ld";
import {
    buildSeoMetadata,
    getAbsoluteUrl,
    siteName,
    websiteJsonLd,
} from "@/lib/site-seo";
import { ServicesSection } from "@/components/home/services-section";
import { GioiThieuCtaSection } from "@/components/gioi-thieu/gioi-thieu-cta-section";
import { GioiThieuWorkspaceSection } from "@/components/gioi-thieu/gioi-thieu-workspace-section";
import { PAGE_HOME } from "@/components/layout/site-urls";
import { services } from "@/mock/services";

const pageTitle = "Giới thiệu";

const pageDescription =
    "Tìm hiểu Thành Sen Group — định hướng phát triển và cam kết đồng hành cùng khách hàng trong các giải pháp pháp lý toàn diện tại Việt Nam.";

export const metadata = buildSeoMetadata({
    title: pageTitle,
    description: pageDescription,
    path: "/gioi-thieu",
});

export default function GioiThieuPage() {
    const aboutJsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${getAbsoluteUrl("/gioi-thieu")}/#webpage`,
        url: getAbsoluteUrl("/gioi-thieu"),
        name: `${pageTitle} | ${siteName}`,
        description: pageDescription,
        inLanguage: "vi",
        isPartOf: {
            "@id": websiteJsonLd["@id"],
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
                item: getAbsoluteUrl("/gioi-thieu"),
            },
        ],
    };

    return (
        <>
            <JsonLd data={[aboutJsonLd, breadcrumbJsonLd]} />
            <GioiThieuHero />
            <GioiThieuSections />
            <ServicesSection
                services={services}
                revealContentOnHover
                background='bg-surface-muted'
            />
            <GioiThieuWorkspaceSection />
            <GioiThieuCtaSection />
            <GioiThieuNewsSection />
        </>
    );
}
