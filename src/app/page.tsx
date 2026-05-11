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
    PAGE_DICH_VU,
    PAGE_THAM_DINH_GIA,
    PAGE_THUA_PHAT_LAI,
    PAGE_TRONG_TAI_THUONG_MAI,
} from "@/components/layout/site-urls";

const homeTitle = `${siteName} — Tư vấn pháp lý toàn diện tại Việt Nam`;

const services: ServiceCardProps[] = [
    {
        href: PAGE_DICH_VU,
        iconKey: "lawyer",
        title: "Dịch vụ",
    },
    {
        href: PAGE_THUA_PHAT_LAI,
        iconKey: "bailiff",
        title: "Thừa phát lại",
    },
    {
        href: PAGE_TRONG_TAI_THUONG_MAI,
        iconKey: "arbitration",
        title: "Trọng tài thương mại",
    },
    {
        href: PAGE_THAM_DINH_GIA,
        iconKey: "valuation",
        title: "Thẩm định giá",
    },
    {
        href: PAGE_DAU_GIA,
        iconKey: "auction",
        title: "Đấu giá",
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
            <ServicesSection services={services} />
            <HomeAboutIntroSection />
            <HomeWhyChooseSection />
            <HomePressSection />
            <GioiThieuNewsSection />
            <BranchesMapSection />
        </>
    );
}
