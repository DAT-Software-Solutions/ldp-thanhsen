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
import {
    ServiceCardProps,
    ServicesSection,
} from "@/components/home/services-section";
import { GioiThieuCtaSection } from "@/components/gioi-thieu/gioi-thieu-cta-section";
import { GioiThieuWorkspaceSection } from "@/components/gioi-thieu/gioi-thieu-workspace-section";
import {
    PAGE_DAU_GIA,
    PAGE_LUAT_SU,
    PAGE_THAM_DINH_GIA,
    PAGE_THUA_PHAT_LAI,
    PAGE_TRONG_TAI_THUONG_MAI,
} from "@/components/layout/site-urls";

const services: ServiceCardProps[] = [
    {
        href: PAGE_LUAT_SU,
        iconKey: "lawyer",
        title: "Luật sư",
        content:
            "Thành Sen Group cung cấp dịch vụ pháp lý toàn diện, bao gồm tư vấn, đại diện và tham gia tố tụng trong các lĩnh vực dân sự, hình sự, đất đai, kinh doanh thương mại.",
    },
    {
        href: PAGE_THUA_PHAT_LAI,
        iconKey: "bailiff",
        title: "Thừa phát lại",
        content:
            "Thành Sen Group cung cấp các dịch vụ hỗ trợ tư pháp như lập vi bằng, tống đạt văn bản, xác minh điều kiện thi hành án và tổ chức thi hành án theo quy định pháp luật.",
    },
    {
        href: PAGE_TRONG_TAI_THUONG_MAI,
        iconKey: "arbitration",
        title: "Trọng tài thương mại",
        content:
            "Thành Sen Group phối hợp với Trung tâm Trọng tài Quốc tế BigBoss (BBIAC) để cung cấp dịch vụ giải quyết tranh chấp nhanh chóng, linh hoạt và hiệu quả ngoài Tòa án.",
    },
    {
        href: PAGE_THAM_DINH_GIA,
        iconKey: "valuation",
        title: "Thẩm định giá",
        content:
            "Thành Sen Group cung cấp dịch vụ xác định giá trị tài sản một cách khách quan, chính xác và phù hợp với quy định pháp luật.",
    },
    {
        href: PAGE_DAU_GIA,
        iconKey: "auction",
        title: "Đấu giá",
        content:
            "Thành Sen Group cung cấp dịch vụ tổ chức đấu giá tài sản chuyên nghiệp, minh bạch và tuân thủ chặt chẽ quy định pháp luật.",
    },
];

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
