import type { Metadata } from "next";

import { HeroThanhSen } from "@/components/home/hero-thanh-sen";
import { HomeAboutIntroSection } from "@/components/home/home-about-intro-section";
import { HomePressSection } from "@/components/home/home-press-section";
import { HomeWhyChooseSection } from "@/components/home/home-why-choose-section";
import {
    ServiceCardProps,
    ServicesSection,
} from "@/components/home/services-section";
import { defaultDescription, siteName } from "@/lib/site-seo";
import { GioiThieuNewsSection } from "@/components/gioi-thieu/gioi-thieu-news-section";
import { BranchesMapSection } from "@/components/lien-he/branches-map-section";
import {
    PAGE_DAU_GIA,
    PAGE_LUAT_SU,
    PAGE_THAM_DINH_GIA,
    PAGE_THUA_PHAT_LAI,
    PAGE_TRONG_TAI_THUONG_MAI,
} from "@/components/layout/site-urls";

const homeTitle = `${siteName} — Tư vấn pháp lý toàn diện tại Việt Nam`;

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

export const metadata: Metadata = {
    title: { absolute: homeTitle },
    description: defaultDescription,
    alternates: { canonical: "/" },
    openGraph: {
        title: homeTitle,
        description: defaultDescription,
        url: "/",
    },
};

export default function Home() {
    return (
        <>
            <HeroThanhSen />
            <ServicesSection services={services} revealContentOnHover />
            <HomeAboutIntroSection />
            <HomeWhyChooseSection />
            <HomePressSection />
            <GioiThieuNewsSection />
            <BranchesMapSection />
        </>
    );
}
