"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { SOFT_IMAGE_PLACEHOLDER } from "@/components/layout/image-placeholders";
import { HASH_LINK } from "@/components/layout/site-urls";
import {
    Reveal,
    RevealItem,
    RevealList,
} from "@/components/motion/landing-motion";

import { GIOI_THIEU_NEWS_IMAGE_SRCS } from "./gioi-thieu-urls";

const cardShell =
    "group relative flex h-full flex-col rounded-xl bg-[#f4f6f9] transition-colors duration-300 ease-out";

const cardFocus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500";

const NewsCard = ({ src }: { src: string }) => {
    return (
        <Link href={HASH_LINK} className={clsx(cardShell, cardFocus)}>
            <span className='pointer-events-none absolute inset-0 z-10 rounded-xl border border-transparent transition-colors duration-300 group-hover:border-primary/30' />

            <div className='relative aspect-5/3 w-full shrink-0 overflow-hidden rounded-t-xl bg-[#f4f6f9]'>
                <div className='absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.035]'>
                    <Image
                        src={src}
                        alt='Minh họa tin tức'
                        fill
                        className='object-cover'
                        sizes='(max-width: 640px) 50vw, 33vw'
                        loading='lazy'
                        placeholder={SOFT_IMAGE_PLACEHOLDER}
                        decoding='async'
                    />
                </div>
            </div>

            <div className='relative z-0 flex min-h-33 flex-1 flex-col gap-2 p-3 sm:min-h-37 sm:p-4 lg:p-5'>
                <h3 className='font-serif text-mobile-heading-4 font-bold leading-snug text-neutral-black sm:text-heading-4'>
                    Tiêu đề 1
                </h3>

                <p className='font-sans line-clamp-3 text-mobile-body-2 leading-snug text-[#717171] sm:text-body-3 sm:leading-normal'>
                    Our membership management software provides full automation
                    of membership renewals and payments
                </p>
            </div>
        </Link>
    );
};

export const GioiThieuNewsSection = () => (
    <section
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
                    Cập nhật các thông tin mới nhất về luật pháp từ chúng tôi
                </p>
            </Reveal>

            <RevealList className='grid grid-cols-2 sm:grid-cols-3 sm:gap-8 gap-4'>
                {GIOI_THIEU_NEWS_IMAGE_SRCS.map((src, index) => (
                    <RevealItem key={`gioi-thieu-news-${index}`}>
                        <NewsCard src={src} />
                    </RevealItem>
                ))}
            </RevealList>
        </div>
    </section>
);
