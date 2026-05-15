import type { MetadataRoute } from "next";

import { defaultOgImagePath, getAbsoluteUrl } from "@/lib/site-seo";
import { getServicePageHref, getServicePages } from "@/mock/data";

const lastModified = new Date("2026-05-15T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: getAbsoluteUrl("/"),
            lastModified,
            changeFrequency: "weekly",
            priority: 1,
            images: [
                getAbsoluteUrl(defaultOgImagePath),
                getAbsoluteUrl("/images/thanhsen_gioi-thieu.png"),
            ],
        },
        {
            url: getAbsoluteUrl("/gioi-thieu"),
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
            images: [
                getAbsoluteUrl(defaultOgImagePath),
                getAbsoluteUrl(
                    "/images/thanhsen_don-vi-dau-tien-duoc-cap-phep-tham-dinh-gia.png",
                ),
                getAbsoluteUrl("/images/thanhsen_luat-su-le-minh-hai.png"),
            ],
        },
        {
            url: getAbsoluteUrl("/lien-he"),
            lastModified,
            changeFrequency: "monthly",
            priority: 0.75,
            images: [getAbsoluteUrl(defaultOgImagePath)],
        },
    ];

    const serviceRoutes: MetadataRoute.Sitemap = getServicePages().map(
        (page) => ({
            url: getAbsoluteUrl(getServicePageHref(page)),
            lastModified,
            changeFrequency: "monthly",
            priority: page.slug === "luat-su" ? 0.95 : 0.85,
            images: [getAbsoluteUrl(defaultOgImagePath)],
        }),
    );

    return [...staticRoutes, ...serviceRoutes];
}
