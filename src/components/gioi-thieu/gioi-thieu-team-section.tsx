"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { GIOI_THIEU_TEAM_CARD_IMAGE_SRC } from "./gioi-thieu-urls";

const TeamMemberCard = () => (
    <article className='flex flex-col items-center text-center'>
        <div className='relative aspect-3/4 w-full overflow-hidden rounded-[14px] sm:rounded-2xl'>
            <Image
                src={GIOI_THIEU_TEAM_CARD_IMAGE_SRC}
                alt='Luật sư Lê Minh Hải — Thành Sen Group'
                fill
                className='object-cover'
                sizes='(max-width: 639px) 88vw, (max-width: 1023px) 45vw, 22vw'
            />
        </div>
        <h3 className='mt-4 font-serif text-mobile-heading-4 font-semibold text-neutral-black sm:mt-5 sm:text-heading-4'>
            Lê Minh Hải
        </h3>
        <p className='font-sans mt-1 text-mobile-body-2 font-normal text-[#4D4D4D] sm:text-body-2'>
            Luật sư
        </p>
    </article>
);

export const GioiThieuTeamSection = () => (
    <section className='bg-[#F5F6F7] py-12 sm:py-14 lg:py-20'>
        <div className='custom-container px-4 sm:px-6'>
            <header className='flex flex-col gap-y-4 mx-auto max-w-3xl text-center'>
                <h2 className='font-serif text-mobile-heading-2 font-bold leading-snug text-neutral-black sm:leading-[1.2] sm:text-heading-2'>
                    <span className='block sm:inline'>
                        Đội ngũ luật sư tại{" "}
                    </span>
                    <span className='font-bold text-primary'>
                        Thành Sen Group
                    </span>
                </h2>
                <p className='font-sans mx-auto max-w-2xl text-mobile-body-1 leading-snug text-[#717171] sm:text-body-1 font-normal'>
                    Chúng tôi cung cấp một đội ngũ có chuyên môn sâu và kinh
                    nghiệm thực tiễn phong phú
                </p>
            </header>

            <div className='mt-10 sm:mt-12 lg:mt-14'>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={16}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            spaceBetween: 20,
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        1024: {
                            spaceBetween: 24,
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                        },
                    }}
                    className='gioi-thieu-team-swiper pb-0!'>
                    <SwiperSlide>
                        <TeamMemberCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMemberCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMemberCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMemberCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMemberCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMemberCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMemberCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMemberCard />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
);
