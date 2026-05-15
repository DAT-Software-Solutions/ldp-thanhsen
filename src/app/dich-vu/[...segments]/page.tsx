import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceContentPage } from "@/components/dich-vu/service-content-page";
import { PageHero } from "@/components/layout/page-hero";
import { PAGE_HOME } from "@/components/layout/site-urls";
import { JsonLd } from "@/components/seo/json-ld";
import {
    defaultOgImagePath,
    getAbsoluteUrl,
    organizationJsonLd,
    siteName,
    websiteJsonLd,
} from "@/lib/site-seo";
import {
    getServicePageByRoute,
    getServicePageHref,
    getServicePages,
} from "@/mock/data";

type ServiceDetailPageProps = {
    params: Promise<{
        segments: string[];
    }>;
};

const getRouteFromSegments = (segments: string[]) => {
    if (segments.length === 1) {
        return {
            slug: segments[0],
        };
    }

    if (segments.length === 2) {
        return {
            parentSlug: segments[0],
            slug: segments[1],
        };
    }

    return null;
};

export const dynamicParams = false;

export function generateStaticParams() {
    return getServicePages().map((page) => ({
        segments: page.parentSlug ? [page.parentSlug, page.slug] : [page.slug],
    }));
}

export async function generateMetadata({
    params,
}: ServiceDetailPageProps): Promise<Metadata> {
    const { segments } = await params;
    const route = getRouteFromSegments(segments);
    const page = route ? getServicePageByRoute(route) : undefined;

    if (!page) {
        return {};
    }

    const url = getServicePageHref(page);

    return {
        title: page.title,
        description: page.description,
        alternates: { canonical: url },
        openGraph: {
            title: `${page.title} | ${siteName}`,
            description: page.description,
            url,
            images: [{ url: defaultOgImagePath, width: 1200, height: 630 }],
        },
        twitter: {
            title: `${page.title} | ${siteName}`,
            description: page.description,
            images: [defaultOgImagePath],
        },
    };
}

export default async function ServiceDetailPage({
    params,
}: ServiceDetailPageProps) {
    const { segments } = await params;
    const route = getRouteFromSegments(segments);
    const page = route ? getServicePageByRoute(route) : undefined;

    if (!page) {
        notFound();
    }

    const url = getAbsoluteUrl(getServicePageHref(page));
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${url}/#service`,
        name: `${page.title} | ${siteName}`,
        description: page.description,
        url,
        provider: {
            "@id": organizationJsonLd["@id"],
        },
        areaServed: {
            "@type": "Country",
            name: "Việt Nam",
        },
        serviceType: page.title,
        isPartOf: {
            "@id": websiteJsonLd["@id"],
        },
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: page.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Trang chủ",
                item: getAbsoluteUrl(PAGE_HOME),
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Dịch vụ",
                item: getAbsoluteUrl("/dich-vu"),
            },
            {
                "@type": "ListItem",
                position: 3,
                name: page.title,
                item: url,
            },
        ],
    };

    return (
        <>
            <JsonLd data={[serviceJsonLd, faqJsonLd, breadcrumbJsonLd]} />
            <PageHero
                title={page.title}
                breadcrumbItems={[
                    { label: "Trang chủ", href: PAGE_HOME },
                    { label: page.title },
                ]}
            />
            <ServiceContentPage page={page} />
        </>
    );
}
