import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { SiteFooter, SiteHeader } from "@/components/layout";
import {
    defaultDescription,
    defaultOgImagePath,
    getSiteOrigin,
    siteKeywords,
    siteName,
} from "@/lib/site-seo";
import "./globals.css";

const inter = Inter({
    subsets: ["latin", "vietnamese"],
    variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
    subsets: ["latin", "vietnamese"],
    variable: "--font-playfair-display",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    metadataBase: new URL(getSiteOrigin()),
    title: {
        default: siteName,
        template: `%s | ${siteName}`,
    },
    description: defaultDescription,
    keywords: [...siteKeywords],
    applicationName: siteName,
    authors: [{ name: siteName }],
    creator: siteName,
    openGraph: {
        type: "website",
        locale: "vi_VN",
        siteName,
        title: `${siteName} — Tư vấn pháp lý & dịch vụ pháp luật`,
        description: defaultDescription,
        url: "/",
        images: [{ url: defaultOgImagePath, alt: siteName }],
    },
    twitter: {
        card: "summary_large_image",
        title: `${siteName} — Tư vấn pháp lý & dịch vụ pháp luật`,
        description: defaultDescription,
        images: [defaultOgImagePath],
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: defaultOgImagePath,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='vi'
            className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}>
            <body className={`${inter.className} flex min-h-full flex-col`}>
                <SiteHeader />
                <main className='flex-1'>{children}</main>
                <SiteFooter />
            </body>
        </html>
    );
}
