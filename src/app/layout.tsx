import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";

import { SiteFooter, SiteHeader } from "@/components/layout";
import {
    defaultDescription,
    defaultOgImagePath,
    getSiteOrigin,
    siteKeywords,
    siteName,
} from "@/lib/site-seo";
import "./globals.css";

const openSans = Open_Sans({
    subsets: ["latin", "vietnamese"],
    variable: "--font-open-sans",
});

const roboto = Roboto({
    subsets: ["latin", "vietnamese"],
    variable: "--font-roboto",
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
            className={`${openSans.variable} ${roboto.variable} h-full antialiased`}>
            <body className='flex min-h-full flex-col'>
                <SiteHeader />
                <main className='flex-1'>{children}</main>
                <SiteFooter />
            </body>
        </html>
    );
}
