"use client";

import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { HASH_LINK } from "@/components/layout/site-urls";

import { HOME_PRESS_FEATURED_IMAGE_SRC } from "./home-urls";

const btnOutlineFocus =
    "rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const PressFeaturedSlide = () => (
    <article className='overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] ring-1 ring-neutral-200/70'>
        <div className='flex flex-col lg:min-h-[min(22rem,52vh)] lg:flex-row lg:items-stretch'>
            <div className='relative aspect-16/10 w-full shrink-0 bg-neutral-200 lg:order-2 lg:aspect-auto lg:h-auto lg:min-h-[280px] lg:w-[55%] lg:flex-none'>
                <Image
                    src={HOME_PRESS_FEATURED_IMAGE_SRC}
                    alt='Lễ khai trương văn phòng Thành Sen Group'
                    fill
                    className='object-cover'
                    sizes='(max-width: 1023px) 100vw, 50vw'
                />
            </div>

            <div className='flex flex-1 flex-col justify-center gap-4 px-6 py-8 sm:px-9 sm:py-10 lg:order-1 lg:min-w-0 lg:flex-1 lg:basis-[45%] lg:px-10 lg:py-12'>
                <p className='text-mobile-body-3 text-[#888888] sm:text-body-3'>
                    Báo Hà Tĩnh • 14/07/2025
                </p>
                <h3 className=' text-mobile-heading-3 font-bold leading-snug text-[#2D3436] sm:text-heading-3 lg:text-[26px] lg:leading-8'>
                    Khai trương văn phòng thừa phát lại đầu tiên tại Hà Tĩnh
                </h3>
                <p className='text-mobile-body-1 leading-relaxed text-[#666666] line-clamp-4 sm:text-body-2 sm:leading-normal lg:line-clamp-none'>
                    Văn phòng Thừa phát lại Hà Tĩnh hướng đến xây dựng một địa
                    chỉ pháp lý chuyên nghiệp – minh bạch – tận tâm.
                </p>
                <div className='pt-1'>
                    <Link
                        href={HASH_LINK}
                        className={`inline-flex min-h-10 items-center justify-center rounded-lg border-2 border-primary px-5 py-2.5 text-sm font-medium text-primary transition-opacity hover:opacity-85 sm:text-base ${btnOutlineFocus}`}>
                        Xem bài viết
                    </Link>
                </div>
            </div>
        </div>
    </article>
);

export const HomePressSection = () => (
    <section
        aria-labelledby='home-press-heading'
        className='bg-[#F5F6F7] py-12 sm:py-14 lg:py-20'>
        <div className='custom-container px-4 sm:px-6'>
            <header className='mx-auto max-w-3xl text-center'>
                <h2
                    id='home-press-heading'
                    className=' text-mobile-heading-2 font-semibold leading-snug text-[#2D3436] sm:text-heading-3 lg:text-heading-2'>
                    <span className='lg:hidden'>
                        <span className='block'>Báo chí viết gì về</span>
                        <span className='block font-bold text-primary'>
                            Thành Sen Group?
                        </span>
                    </span>
                    <span className='hidden lg:inline'>
                        Báo chí viết gì về{" "}
                        <span className='text-primary'>Thành Sen Group</span>?
                    </span>
                </h2>
                <p className='mx-auto mt-3 max-w-xl text-mobile-body-1 text-[#666666] sm:mt-4 sm:text-body-2'>
                    Góc nhìn từ báo chí về chúng tôi
                </p>
            </header>

            <div className='mx-auto mt-10 max-w-5xl lg:mt-12'>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className='home-press-swiper pb-0!'>
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
