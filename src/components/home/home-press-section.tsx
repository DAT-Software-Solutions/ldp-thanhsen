"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { HASH_LINK } from "@/components/layout/site-urls";

import { HOME_PRESS_FEATURED_IMAGE_SRC } from "./home-urls";

const btnOutlineFocus =
    "rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const PressFeaturedSlide = () => (
    <article className='overflow-hidden rounded-xl bg-white ring-1 ring-neutral-200/70'>
        <div className='flex flex-col lg:min-h-[min(22rem,52vh)] sm:flex-row lg:items-stretch gap-x-0 sm:gap-x-20 '>
            <div className='relative aspect-16/10 w-full shrink-0 bg-neutral-200 lg:order-2 lg:aspect-auto lg:h-auto lg:min-h-70 lg:w-[55%] lg:flex-none'>
                <Image
                    src={HOME_PRESS_FEATURED_IMAGE_SRC}
                    alt='Lễ khai trương văn phòng Thành Sen Group'
                    fill
                    className='object-cover'
                    sizes='(max-width: 1023px) 100vw, 50vw'
                />
            </div>

            <div className='flex flex-1 flex-col justify-center gap-6 sm:gap-8 sm:px-8 p-6 sm:py-0 lg:order-1 lg:min-w-0 lg:flex-1 lg:basis-[45%] lg:px-10 lg:py-12'>
                <div className='flex flex-col sm:gap-y-4 gap-y-2'>
                    <p className='font-sans text-mobile-body-3 text-[#717171] sm:text-body-3'>
                        Báo Hà Tĩnh • 14/07/2025
                    </p>
                    <h3 className='font-serif text-mobile-heading-4 font-bold leading-snug text-neutral-black sm:text-heading-3 md:text-heading-4'>
                        Khai trương văn phòng thừa phát lại đầu tiên tại Hà Tĩnh
                    </h3>
                    <p className='font-sans text-mobile-body-2 leading-relaxed text-[#717171] line-clamp-4 sm:text-body-2 sm:leading-normal lg:line-clamp-none'>
                        Văn phòng Thừa phát lại Hà Tĩnh hướng đến xây dựng một
                        địa chỉ pháp lý chuyên nghiệp – minh bạch – tận tâm.
                    </p>
                </div>
                <Link
                    href={HASH_LINK}
                    className={`interactive-button-outline w-fit rounded-md font-sans inline-flex min-h-10 items-center justify-center border border-primary px-5 py-2.5 font-medium text-primary sm:text-body-2 text-mobile-body-1 ${btnOutlineFocus}`}>
                    Xem bài viết
                </Link>
            </div>
        </div>
    </article>
);

export const HomePressSection = () => (
    <section
        aria-labelledby='home-press-heading'
        className='bg-[#F5F6F7] py-12 sm:py-16'>
        <div className='custom-container flex flex-col gap-y-8 px-4 sm:px-0'>
            <header className='flex flex-col gap-y-2 mx-auto max-w-3xl text-center'>
                <h2
                    id='home-press-heading'
                    className='font-serif text-mobile-heading-2 font-semibold leading-snug text-neutral-black sm:text-heading-3 md:text-heading-2'>
                    <span className='lg:hidden'>
                        <span className='block'>Báo chí viết gì về</span>
                        <span className='block font-bold text-primary'>
                            Thành Sen Group?
                        </span>
                    </span>
                    <span className='hidden lg:inline'>
                        Báo chí viết gì về{" "}
                        <span className='text-primary'>Thành Sen Group?</span>
                    </span>
                </h2>
                <p className='font-sans mx-auto max-w-xl text-mobile-body-1 text-[#717171] sm:text-body-2'>
                    Góc nhìn từ báo chí về chúng tôi
                </p>
            </header>

            <div className='mx-auto max-w-full'>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={12}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className={clsx(
                        "home-press-swiper pb-0!",
                        "[&_.swiper-pagination]:!static",
                        "[&_.swiper-pagination]:!bottom-auto",
                        "[&_.swiper-pagination]:!top-auto",
                        "[&_.swiper-pagination]:flex",
                        "[&_.swiper-pagination]:h-14",
                        "[&_.swiper-pagination]:items-center",
                        "[&_.swiper-pagination]:justify-center",
                        "[&_.swiper-pagination-bullet]:h-2",
                        "[&_.swiper-pagination-bullet]:w-2",
                        "[&_.swiper-pagination-bullet]:!mx-[5px]",
                        "[&_.swiper-pagination-bullet]:bg-[#dec8c8]",
                        "[&_.swiper-pagination-bullet]:opacity-100",
                        "[&_.swiper-pagination-bullet-active]:bg-primary",
                    )}>
                    <SwiperSlide>
                        <PressFeaturedSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PressFeaturedSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PressFeaturedSlide />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
);
