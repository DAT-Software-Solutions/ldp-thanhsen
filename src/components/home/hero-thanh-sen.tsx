import Link from "next/link";
import clsx from "clsx";

import { CTA_HREF, ZALO_CHAT_HREF } from "@/components/layout/site-urls";
import { Reveal } from "@/components/motion/landing-motion";

import { HERO_ILLUSTRATION_SRC } from "./home-urls";

const btnFocus =
    "rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export const HeroThanhSen = () => (
    <section
        aria-labelledby='hero-heading'
        className='bg-surface-muted text-[#2D3436]'
        style={{
            minHeight: "clamp(620px, 82vh, 780px)",
            backgroundImage: `url("${HERO_ILLUSTRATION_SRC}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}>
        <div className='custom-container flex min-h-[inherit] items-start px-4 py-16 sm:px-0 sm:py-20 lg:items-center lg:py-24'>
            <Reveal className='flex max-w-xl flex-col gap-y-8 items-center sm:justify-center text-center lg:items-start lg:text-left'>
                <div className='flex flex-col gap-y-6 sm:gap-y-4'>
                    <h1
                        id='hero-heading'
                        className='font-serif md:text-heading-1 text-mobile-heading-1 uppercase font-bold'>
                        <span className='text-primary'>Thành Sen </span>
                        <span className='text-[#EDD161]'>Group</span>
                    </h1>
                    <p className='font-sans max-w-full md:text-body-2 text-mobile-body-1 text-neutral-black sm:text-base'>
                        Là đơn vị tiên phong trong lĩnh vực pháp lý tại Việt
                        Nam, Thành Sen Group cam kết mang đến giải pháp toàn
                        diện, bảo vệ tối đa quyền lợi của khách hàng bằng sự tận
                        tâm và chuyên nghiệp.
                    </p>
                </div>
                <div className='flex w-full justify-center gap-3 sm:w-auto lg:justify-start'>
                    <Link
                        href={CTA_HREF}
                        className={`interactive-button font-sans inline-flex w-full md:min-w-46.5 items-center justify-center rounded-sm bg-primary px-5 py-3 md:text-body-2 text-mobile-body-1 font-medium text-white sm:w-auto ${btnFocus}`}>
                        Liên hệ ngay
                    </Link>
                    <a
                        href={ZALO_CHAT_HREF}
                        className={clsx(
                            `interactive-button-outline font-sans inline-flex w-full md:min-w-40.25 h-14 items-center justify-center rounded-sm border border-primary bg-transparent px-5 py-3 md:text-body-2 text-mobile-body-1 font-medium text-primary sm:w-auto`,
                            btnFocus,
                        )}>
                        Tư vấn qua Zalo
                    </a>
                </div>
            </Reveal>
        </div>
    </section>
);
