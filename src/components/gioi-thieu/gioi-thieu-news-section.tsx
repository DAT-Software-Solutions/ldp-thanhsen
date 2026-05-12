"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { HASH_LINK } from "@/components/layout/site-urls";

import { GIOI_THIEU_NEWS_IMAGE_SRCS } from "./gioi-thieu-urls";

const cardShell =
    "group flex h-full flex-col overflow-hidden rounded-xl border border-transparent bg-[#f4f6f9] shadow-sm ring-1 ring-neutral-200/60 transition-[border-color,box-shadow] duration-300 ease-out hover:border-primary/30 hover:shadow-lg hover:ring-neutral-200/80";

const cardFocus =
    "rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500";

const NewsCard = ({ src, index }: { src: string; index: number }) => (
    <Link href={HASH_LINK} className={clsx(cardShell, cardFocus)}>
        <div className='relative aspect-5/3 w-full shrink-0 overflow-hidden bg-[#F5F7FA]'>
            <Image
                src={src}
                alt='Minh họa tin tức'
                fill
                className='object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]'
                sizes='(max-width: 639px) 86vw, (max-width: 1023px) 45vw, 33vw'
                priority={index < 2}
            />
        </div>
        <div className='flex min-h-33 flex-1 flex-col gap-2 p-3 sm:min-h-37 sm:p-4 lg:p-5'>
            <h3 className='font-serif text-mobile-heading-4 font-bold leading-snug text-neutral-black sm:text-heading-4'>
                Tiêu đề 1
            </h3>
            <p className='font-sans line-clamp-3 text-mobile-body-2 leading-snug text-[#717171] sm:text-body-3 sm:leading-normal'>
                Our membership management software provides full automation of
                membership renewals and payments
            </p>
        </div>
    </Link>
);

export const GioiThieuNewsSection = () => (
    <section
        aria-labelledby='gioi-thieu-news-heading'
        className='bg-white py-12 sm:py-16'>
        <div className='custom-container'>
            <header className='mb-8 text-center lg:mb-10 lg:text-left'>
                <h2
                    id='gioi-thieu-news-heading'
                    className='font-serif text-mobile-heading-2 font-semibold text-neutral-black sm:text-heading-3 lg:text-heading-2'>
                    Tin tức <span className='text-primary'>mới nhất</span>
                </h2>
                <p className='font-sans mx-auto mt-3 max-w-2xl text-mobile-body-1 font-medium text-[#717171] sm:text-body-1 md:font-normal lg:mx-0'>
                    Cập nhật các thông tin mới nhất về luật pháp từ chúng tôi
                </p>
            </header>

            <Swiper
                modules={[Pagination]}
                spaceBetween={12}
                slidesPerView={1}
                slidesPerGroup={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        spaceBetween: 16,
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    1024: {
                        spaceBetween: 24,
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                }}
                className={clsx(
                    "gioi-thieu-news-swiper pb-0!",
                    "[&_.swiper-wrapper]:items-stretch",
                    "[&_.swiper-slide]:h-auto",
                    "[&_.swiper-pagination]:relative",
                    "[&_.swiper-pagination]:mt-20",
                    "lg:[&_.swiper-pagination]:mt-20",
                    "[&_.swiper-pagination-bullet]:h-2",
                    "[&_.swiper-pagination-bullet]:w-2",
                    "[&_.swiper-pagination-bullet]:!mx-[5px]",
                    "[&_.swiper-pagination-bullet]:bg-[#dec8c8]",
                    "[&_.swiper-pagination-bullet]:opacity-100",
                    "[&_.swiper-pagination-bullet-active]:bg-primary",
                )}>
                {GIOI_THIEU_NEWS_IMAGE_SRCS.map((src, index) => (
                    <SwiperSlide key={`gioi-thieu-news-${index}`}>
                        <NewsCard src={src} index={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
);
