import type { Metadata } from "next";

import { HeroThanhSen } from "@/components/home/hero-thanh-sen";
import { HomeAboutIntroSection } from "@/components/home/home-about-intro-section";
import { HomePressSection } from "@/components/home/home-press-section";
import { HomeWhyChooseSection } from "@/components/home/home-why-choose-section";
import { ServicesSection } from "@/components/home/services-section";
import { JsonLd } from "@/components/seo/json-ld";
import {
    defaultDescription,
    defaultOgImagePath,
    getAbsoluteUrl,
    siteName,
    websiteJsonLd,
} from "@/lib/site-seo";
import { GioiThieuNewsSection } from "@/components/gioi-thieu/gioi-thieu-news-section";
import { BranchesMapSection } from "@/components/lien-he/branches-map-section";
import { services } from "@/mock/services";

const homeTitle = `${siteName} — Tư vấn pháp lý toàn diện tại Việt Nam`;

export const metadata: Metadata = {
    title: { absolute: homeTitle },
    description: defaultDescription,
    alternates: { canonical: "/" },
    openGraph: {
        title: homeTitle,
        description: defaultDescription,
        url: "/",
        images: [{ url: defaultOgImagePath, width: 1200, height: 630 }],
    },
    twitter: {
        title: homeTitle,
        description: defaultDescription,
        images: [defaultOgImagePath],
    },
};

export default function Home() {
    const homeJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${getAbsoluteUrl("/")}/#webpage`,
        url: getAbsoluteUrl("/"),
        name: homeTitle,
        description: defaultDescription,
        inLanguage: "vi",
        isPartOf: {
            "@id": websiteJsonLd["@id"],
        },
        about: {
            "@id": `${getAbsoluteUrl("/")}/#organization`,
        },
    };

    return (
        <>
            <JsonLd data={homeJsonLd} />
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
