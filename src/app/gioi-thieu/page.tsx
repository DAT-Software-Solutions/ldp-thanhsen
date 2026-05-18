import type { Metadata } from "next";

import { GioiThieuHero } from "@/components/gioi-thieu/gioi-thieu-hero";
import { GioiThieuNewsSection } from "@/components/gioi-thieu/gioi-thieu-news-section";
import { GioiThieuSections } from "@/components/gioi-thieu/gioi-thieu-sections";
import { JsonLd } from "@/components/seo/json-ld";
import {
    defaultOgImagePath,
    getAbsoluteUrl,
    siteName,
    websiteJsonLd,
} from "@/lib/site-seo";
import { ServicesSection } from "@/components/home/services-section";
import { GioiThieuCtaSection } from "@/components/gioi-thieu/gioi-thieu-cta-section";
import { GioiThieuWorkspaceSection } from "@/components/gioi-thieu/gioi-thieu-workspace-section";
import { services } from "@/mock/services";

const pageTitle = "Giới thiệu";

const pageDescription =
    "Tìm hiểu Thành Sen Group — định hướng phát triển và cam kết đồng hành cùng khách hàng trong các giải pháp pháp lý toàn diện tại Việt Nam.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: "/gioi-thieu" },
    openGraph: {
        title: `${pageTitle} | ${siteName}`,
        description: pageDescription,
        url: "/gioi-thieu",
        images: [{ url: defaultOgImagePath, width: 1200, height: 630 }],
    },
    twitter: {
        title: `${pageTitle} | ${siteName}`,
        description: pageDescription,
        images: [defaultOgImagePath],
    },
};

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

    return (
        <>
            <JsonLd data={aboutJsonLd} />
            <GioiThieuHero />
            <GioiThieuSections />
            <ServicesSection
                services={services}
                revealContentOnHover
                background='bg-surface-muted'
            />
            <GioiThieuWorkspaceSection />
            <GioiThieuCtaSection image='/images/gioi-thieu-cta-illustration-1.png' />
            <GioiThieuNewsSection />
        </>
    );
}
