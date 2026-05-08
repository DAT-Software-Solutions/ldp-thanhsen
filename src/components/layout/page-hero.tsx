import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { PAGE_HERO_BACKGROUND_IMAGE_SRC } from "./page-hero-urls";

export type PageHeroBreadcrumbItem = {
    label: string;
    /** Bỏ qua ở mục cuối — luôn hiển thị dạng trang hiện tại (vàng). */
    href?: string;
};

export type PageHeroProps = {
    title: string;
    breadcrumbItems: PageHeroBreadcrumbItem[];
    /** Mặc định `page-hero-heading`; đặt khác nếu cần unique trên trang. */
    headingId?: string;
};

export const PageHero = ({
    title,
    breadcrumbItems,
    headingId = "page-hero-heading",
}: PageHeroProps) => (
    <section
        aria-labelledby={headingId}
        className='relative h-[166px] w-full shrink-0 overflow-hidden lg:h-[292px]'>
        <Image
            src={PAGE_HERO_BACKGROUND_IMAGE_SRC}
            alt='Phông nền kệ sách pháp lý'
            fill
            priority
            className='object-cover'
            sizes='100vw'
        />
        <div className='absolute inset-0 bg-black/15' aria-hidden />
        <div className='relative z-10 flex h-full min-h-0 flex-col items-center justify-center px-4 py-4 text-center lg:py-8'>
            <h1
                id={headingId}
                className=' text-[22px] font-bold leading-snug text-white sm:text-mobile-heading-1 sm:leading-tight lg:text-heading-3 lg:leading-tight xl:text-heading-2'>
                {title}
            </h1>
            <nav
                aria-label='Breadcrumb'
                className='mt-1.5 text-mobile-body-3 text-white/95 sm:mt-3 sm:text-mobile-body-2 lg:text-body-3'>
                {breadcrumbItems.map((item, index) => {
                    const isLast = index === breadcrumbItems.length - 1;
                    return (
                        <Fragment key={`${item.label}-${index}`}>
                            {index > 0 ? (
                                <span
                                    className='mx-1.5 text-white/80'
                                    aria-hidden>
                                    /
                                </span>
                            ) : null}
                            {isLast ? (
                                <span className='text-footer-gold'>
                                    {item.label}
                                </span>
                            ) : item.href ? (
                                <Link
                                    href={item.href}
                                    className='transition-opacity hover:opacity-90'>
                                    {item.label}
                                </Link>
                            ) : (
                                <span>{item.label}</span>
                            )}
                        </Fragment>
                    );
                })}
            </nav>
        </div>
    </section>
);
