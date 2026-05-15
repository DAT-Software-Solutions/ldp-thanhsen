import Image from "next/image";
import Link from "next/link";

import { SOFT_IMAGE_PLACEHOLDER } from "@/components/layout/image-placeholders";
import { PAGE_GIOI_THIEU } from "@/components/layout/site-urls";
import { Reveal } from "@/components/motion/landing-motion";

import {
    HOME_ABOUT_IMAGE_SRC_DESKTOP,
    HOME_ABOUT_IMAGE_SRC_MOBILE,
} from "./home-urls";

const btnFocus =
    "rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

const roundedFigure = "overflow-hidden rounded-xl sm:rounded-2xl";

export const HomeAboutIntroSection = () => (
    <section
        aria-labelledby='home-about-intro-heading'
        className='bg-surface-muted py-12 sm:py-16'>
        <div className='custom-container px-4 sm:px-0'>
            <div className='flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center sm:gap-x-20'>
                <Reveal className='relative w-full'>
                    <div
                        className={`relative aspect-4/3 w-full lg:hidden ${roundedFigure}`}>
                        <Image
                            src={HOME_ABOUT_IMAGE_SRC_MOBILE}
                            alt='Không gian làm việc và họp chuyên nghiệp tại Thành Sen Group'
                            fill
                            className='object-cover'
                            sizes='100vw'
                            placeholder={SOFT_IMAGE_PLACEHOLDER}
                            decoding='async'
                        />
                    </div>
                    <div
                        className={`relative hidden aspect-4/3 w-full lg:block ${roundedFigure}`}>
                        <Image
                            src={HOME_ABOUT_IMAGE_SRC_DESKTOP}
                            alt='Không gian làm việc và họp chuyên nghiệp tại Thành Sen Group'
                            fill
                            className='object-cover'
                            sizes='(min-width: 1024px) 50vw, 100vw'
                            placeholder={SOFT_IMAGE_PLACEHOLDER}
                            decoding='async'
                        />
                    </div>
                </Reveal>
                <Reveal className='flex flex-col gap-y-8' delay={0.08}>
                    <div className='flex flex-col gap-y-6 sm:gap-y-4 items-start text-left'>
                        <h2
                            id='home-about-intro-heading'
                            className='font-serif text-mobile-heading-2 font-bold leading-snug text-neutral-black sm:text-heading-2'>
                            Giới thiệu về{" "}
                            <span className='text-primary'>chúng tôi</span>
                        </h2>
                        <p className='font-sans max-w-xl text-mobile-body-1 leading-relaxed font-normal text-[#717171] sm:text-body-2'>
                            Thành Sen Group là tổ hợp dịch vụ chuyên nghiệp hoạt
                            động trong lĩnh vực pháp lý và hỗ trợ tư pháp, với
                            định hướng cung cấp giải pháp toàn diện, uy tín và
                            hiệu quả cho khách hàng cá nhân và doanh nghiệp.
                            Trải qua quá trình xây dựng và phát triển, Thành Sen
                            Group từng bước khẳng định vị thế bằng việc hình
                            thành hệ sinh thái dịch vụ chuyên nghiệp với ba mảng
                            hoạt động cốt lõi: luật sư, thẩm định giá và thừa
                            phát lại.
                        </p>
                    </div>
                    <Link
                        href={PAGE_GIOI_THIEU}
                        className={`interactive-button inline-flex min-h-14 w-fit min-w-43.25 items-center justify-center rounded-md bg-primary px-6 py-3 md:text-body-2 text-mobile-body-1 font-medium text-white sm:text-base ${btnFocus}`}>
                        Tìm hiểu thêm
                    </Link>
                </Reveal>
            </div>
        </div>
    </section>
);
