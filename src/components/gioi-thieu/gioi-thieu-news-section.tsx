"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";

import { SOFT_IMAGE_PLACEHOLDER } from "@/components/layout/image-placeholders";
import { Reveal } from "@/components/motion/landing-motion";
import {
    getNewsHref,
    getNewsSummary,
    newsData,
    type NewsItem,
} from "@/mock/news";

const cardShell =
    "group relative flex h-full flex-col rounded-xl bg-[#f4f6f9] transition-colors duration-300 ease-out";

const cardFocus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500";

const NEWS_PAGE_SIZE = 6;

type CardProps = {
    item: NewsItem;
};

export default function NewsCard({ item }: CardProps) {
    return (
        <Link href={getNewsHref(item)} className={clsx(cardShell, cardFocus)}>
            <span className='pointer-events-none absolute inset-0 z-10 rounded-xl border border-transparent transition-colors duration-300 group-hover:border-primary/30' />

            <div className='relative aspect-5/3 w-full shrink-0 overflow-hidden rounded-t-xl bg-[#f4f6f9]'>
                <div className='absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.035]'>
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className='md:w-90.75 md:h-47.5'
                        sizes='(max-width: 639px) 50vw, 33vw'
                        loading='lazy'
                        placeholder={SOFT_IMAGE_PLACEHOLDER}
                        decoding='async'
                    />
                </div>
            </div>

            <div className='relative z-0 flex min-h-33 flex-1 flex-col gap-2 p-3 sm:min-h-37 sm:p-4 lg:p-5'>
                <h3 className='font-serif text-mobile-heading-4 font-bold leading-snug text-neutral-black sm:text-heading-4'>
                    {item.title}
                </h3>

                <p className='font-sans line-clamp-2 text-mobile-body-2 leading-snug text-[#717171] sm:text-body-3 sm:leading-normal'>
                    {getNewsSummary(item)}
                </p>
            </div>
        </Link>
    );
}

export const GioiThieuNewsSection = () => {
    const [visibleCount, setVisibleCount] = useState(NEWS_PAGE_SIZE);
    const visibleNews = newsData.slice(0, visibleCount);
    const hasMoreNews = visibleCount < newsData.length;

    return (
        <section
            id='tin-tuc'
            aria-labelledby='gioi-thieu-news-heading'
            className='bg-white py-12 sm:py-16 px-4 sm:px-0'>
            <div className='custom-container flex flex-col gap-y-8'>
                <Reveal
                    as='header'
                    className='text-center sm:text-left flex flex-col gap-y-2'>
                    <h2
                        id='gioi-thieu-news-heading'
                        className='font-serif text-mobile-heading-2 font-semibold text-neutral-black sm:text-heading-3 lg:text-heading-2'>
                        Tin tức <span className='text-primary'>mới nhất</span>
                    </h2>
                    <p className='font-sans mx-auto max-w-2xl text-mobile-body-1 font-medium text-[#717171] sm:text-body-1 md:font-normal lg:mx-0'>
                        Cập nhật các thông tin mới nhất về luật pháp từ chúng
                        tôi
                    </p>
                </Reveal>

                <div className='grid grid-cols-2 sm:grid-cols-3 sm:gap-8 gap-4'>
                    {visibleNews.map((item) => (
                        <div key={`gioi-thieu-news-${item.id}`}>
                            <NewsCard item={item} />
                        </div>
                    ))}
                </div>

                {hasMoreNews && (
                    <div className='flex justify-center'>
                        <button
                            type='button'
                            onClick={() =>
                                setVisibleCount((count) =>
                                    Math.min(
                                        count + NEWS_PAGE_SIZE,
                                        newsData.length,
                                    ),
                                )
                            }
                            className='inline-flex min-h-11 items-center justify-center rounded px-6 py-3 font-sans text-mobile-body-2 font-semibold text-primary ring-1 ring-primary/30 transition-colors hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-body-3'>
                            Xem thêm
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};
