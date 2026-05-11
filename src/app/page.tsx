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
import { HASH_LINK, PAGE_DICH_VU } from "@/components/layout/site-urls";

const homeTitle = `${siteName} — Tư vấn pháp lý toàn diện tại Việt Nam`;

const services: ServiceCardProps[] = [
    {
        href: PAGE_DICH_VU,
        iconKey: "lawyer",
        title: "Dịch vụ",
    },
    {
        href: HASH_LINK,
        iconKey: "bailiff",
        title: "Thừa phát lại",
    },
    {
        href: HASH_LINK,
        iconKey: "arbitration",
        title: "Trọng tài thương mại",
    },
    {
        href: HASH_LINK,
        iconKey: "valuation",
        title: "Thẩm định giá",
    },
    {
        href: HASH_LINK,
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
