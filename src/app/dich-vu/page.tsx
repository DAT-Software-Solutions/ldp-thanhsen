import type { Metadata } from "next";

import {
    type ServiceCardProps,
    ServicesSection,
} from "@/components/home/services-section";
import { PageHero } from "@/components/layout/page-hero";
import { PAGE_HOME } from "@/components/layout/site-urls";
import { siteName } from "@/lib/site-seo";
import { getServicePageHref, getServicePages } from "@/mock/data";

const pageTitle = "Dịch vụ";

const pageDescription =
    "Dịch vụ Thanh Sen Group: tư vấn pháp luật, thừa phát lại, trọng tài thương mại, thẩm định giá và đấu giá.";

const serviceIconMap: Record<string, ServiceCardProps["iconKey"]> = {
    "luat-su": "lawyer",
    "trong-tai-thuong-mai": "arbitration",
    "thua-phat-lai": "bailiff",
    "tham-dinh-gia": "valuation",
    "dau-gia": "auction",
};

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: "/dich-vu" },
    openGraph: {
        title: `${pageTitle} | ${siteName}`,
        description: pageDescription,
        url: "/dich-vu",
    },
};

export default function DichVuPage() {
    const services = getServicePages().map<ServiceCardProps>((page) => ({
        href: getServicePageHref(page),
        iconKey: serviceIconMap[page.slug] ?? "lawyer",
        title: page.title,
        content: page.description,
    }));

    return (
        <>
            <PageHero
                title={pageTitle}
                breadcrumbItems={[
                    { label: "Trang chủ", href: PAGE_HOME },
                    { label: pageTitle },
                ]}
            />
            <ServicesSection services={services} />
        </>
    );
}
