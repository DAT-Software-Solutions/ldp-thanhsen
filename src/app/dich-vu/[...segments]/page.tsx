import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceContentPage } from "@/components/dich-vu/service-content-page";
import { PageHero } from "@/components/layout/page-hero";
import { PAGE_HOME } from "@/components/layout/site-urls";
import { siteName } from "@/lib/site-seo";
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

    return (
        <>
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
