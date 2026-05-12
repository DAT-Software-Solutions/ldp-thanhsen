import Image from "next/image";
import Link from "next/link";

import { PAGE_GIOI_THIEU } from "@/components/layout/site-urls";

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
        className='bg-surface-muted py-12 sm:py-14 lg:py-20'>
        <div className='custom-container px-4 sm:px-0'>
            <div className='flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16'>
                <div className='flex flex-col gap-y-2 items-start text-left lg:py-4'>
                    <h2
                        id='home-about-intro-heading'
                        className='font-serif text-mobile-heading-2 font-bold leading-snug text-neutral-black md:text-heading-3 lg:text-heading-2'>
                        Giới thiệu về{" "}
                        <span className='text-primary'>chúng tôi</span>
                    </h2>
                    <p className='font-sans max-w-xl text-mobile-body-1 leading-relaxed font-normal text-[#717171] sm:text-body-2 md:mt-5'>
                        Tiền thân của Thành Sen là hãng luật Thành Sen được
                        thành lập vào năm 2011. Sau gần 15 năm hình thành và
                        phát triển, hiện nay hãng luật Thành Sen đã có hàng chục
                        chi nhánh trên toàn quốc và không ngừng phát triển nhằm
                        đáp ứng nhu cầu về pháp lý của doanh nghiệp và người
                        dân.
                    </p>
                    <Link
                        href={PAGE_GIOI_THIEU}
                        className={`interactive-button mt-6 inline-flex min-h-14 min-w-43.25 items-center justify-center rounded-lg bg-primary px-6 py-3 md:text-body-2 text-mobile-body-1 font-medium text-white sm:mt-8 sm:text-base ${btnFocus}`}>
                        Tìm hiểu thêm
                    </Link>
                </div>

                <div className='relative w-full'>
                    <div
                        className={`relative aspect-4/3 w-full lg:hidden ${roundedFigure}`}>
                        <Image
                            src={HOME_ABOUT_IMAGE_SRC_MOBILE}
                            alt='Không gian làm việc và họp chuyên nghiệp tại Thành Sen Group'
                            fill
                            className='object-cover'
                            sizes='100vw'
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
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);
