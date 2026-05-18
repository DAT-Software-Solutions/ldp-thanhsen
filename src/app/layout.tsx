import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import {
    BackToTopButton,
    FloatingContactButtons,
    SiteFooter,
    SiteHeader,
} from "@/components/layout";
import { LandingMotionProvider } from "@/components/motion/landing-motion";
import {
    defaultDescription,
    defaultOgImagePath,
    getSiteOrigin,
    logoPath,
    organizationJsonLd,
    siteLanguage,
    siteLocale,
    siteName,
    websiteJsonLd,
} from "@/lib/site-seo";
import { JsonLd } from "@/components/seo/json-ld";
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
    applicationName: siteName,
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    category: "legal services",
    alternates: {
        canonical: "/",
        languages: {
            vi: "/",
        },
    },
    openGraph: {
        type: "website",
        locale: siteLocale,
        siteName,
        title: `${siteName} — Tư vấn pháp lý & dịch vụ pháp luật`,
        description: defaultDescription,
        url: "/",
        images: [
            {
                url: defaultOgImagePath,
                width: 1200,
                height: 630,
                alt: `${siteName} - Dịch vụ pháp lý toàn diện`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${siteName} — Tư vấn pháp lý & dịch vụ pháp luật`,
        description: defaultDescription,
        images: [
            {
                url: defaultOgImagePath,
                alt: `${siteName} - Dịch vụ pháp lý toàn diện`,
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    icons: {
        icon: "/images/logo.svg",
        shortcut: "/images/logo.svg",
        apple: logoPath,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang={siteLanguage}
            className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}>
            <body
                className={`${inter.className} flex min-h-full flex-col pb-17 sm:pb-0`}>
                <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
                <LandingMotionProvider>
                    <SiteHeader />
                    <main className='flex-1'>{children}</main>
                    <SiteFooter />
                    <FloatingContactButtons />
                    <BackToTopButton />
                </LandingMotionProvider>
            </body>
        </html>
    );
}
