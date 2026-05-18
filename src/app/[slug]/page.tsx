import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceContentPage } from "@/components/dich-vu/service-content-page";
import { NewsContentPage } from "@/components/gioi-thieu/news-content-page";
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
import {
    getNewsBySlug,
    getNewsHref,
    getNewsSummary,
    newsData,
} from "@/mock/news";
import { getServiceByHref } from "@/mock/services";

type ServiceDetailPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
    return [
        ...getServicePages().map((page) => ({
            slug: page.slug,
        })),
        ...newsData.map((item) => ({
            slug: item.slug,
        })),
    ];
}

export async function generateMetadata({
    params,
}: ServiceDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const page = getServicePageByRoute({ slug });
    const news = page ? undefined : getNewsBySlug(slug);

    if (!page && !news) {
        return {};
    }

    const url = page ? getServicePageHref(page) : getNewsHref(news!);
    const service = page ? getServiceByHref(url) : undefined;
    const title = page ? (service?.title ?? page.title) : news!.title;
    const description = page
        ? (service?.content ?? page.description)
        : getNewsSummary(news!);

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title: `${title} | ${siteName}`,
            description,
            url,
            images: [{ url: defaultOgImagePath, width: 1200, height: 630 }],
        },
        twitter: {
            title: `${title} | ${siteName}`,
            description,
            images: [defaultOgImagePath],
        },
    };
}

export default async function ServiceDetailPage({
    params,
}: ServiceDetailPageProps) {
    const { slug } = await params;
    const page = getServicePageByRoute({ slug });
    const news = page ? undefined : getNewsBySlug(slug);

    if (!page && !news) {
        notFound();
    }

    if (news) {
        const href = getNewsHref(news);
        const url = getAbsoluteUrl(href);
        const description = getNewsSummary(news);
        const newsJsonLd = {
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": `${url}/#article`,
            headline: news.title,
            description,
            image: getAbsoluteUrl(news.image),
            url,
            publisher: {
                "@id": organizationJsonLd["@id"],
            },
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
                    name: "Trang chủ",
                    item: getAbsoluteUrl(PAGE_HOME),
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Tin tức",
                    item: getAbsoluteUrl("/#tin-tuc"),
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: news.title,
                    item: url,
                },
            ],
        };

        return (
            <>
                <JsonLd data={[newsJsonLd, breadcrumbJsonLd]} />
                <PageHero
                    title={news.title}
                    breadcrumbItems={[
                        { label: "Trang chủ", href: PAGE_HOME },
                        { label: news.title },
                    ]}
                />
                <NewsContentPage item={news} />
            </>
        );
    }

    if (!page) {
        notFound();
    }

    const href = getServicePageHref(page);
    const service = getServiceByHref(href);
    const title = service?.title ?? page.title;
    const description = service?.content ?? page.description;
    const url = getAbsoluteUrl(href);
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${url}/#service`,
        name: `${title} | ${siteName}`,
        description,
        url,
        provider: {
            "@id": organizationJsonLd["@id"],
        },
        areaServed: {
            "@type": "Country",
            name: "Việt Nam",
        },
        serviceType: title,
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
                name: title,
                item: url,
            },
        ],
    };
    const jsonLdData = service
        ? [serviceJsonLd, breadcrumbJsonLd]
        : [serviceJsonLd, faqJsonLd, breadcrumbJsonLd];

    return (
        <>
            <JsonLd data={jsonLdData} />
            <PageHero
                title={title}
                breadcrumbItems={[
                    { label: "Trang chủ", href: PAGE_HOME },
                    { label: title },
                ]}
            />
            <ServiceContentPage page={page} />
        </>
    );
}
