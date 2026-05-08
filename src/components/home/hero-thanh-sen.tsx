import Image from "next/image";
import Link from "next/link";

import { CTA_HREF } from "@/components/layout/site-urls";

import { HERO_ILLUSTRATION_SRC, ZALO_CHAT_HREF } from "./home-urls";

const btnFocus =
    "rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export const HeroThanhSen = () => (
    <section
        aria-labelledby='hero-heading'
        className='bg-surface-muted text-[#2D3436]'>
        <div className='custom-container px-4 py-12 sm:px-6 sm:py-12 lg:py-16'>
            <div className='flex md:flex-row flex-col gap-x-20 gap-y-8'>
                <div className='w-154.75 shrink-0 flex flex-col gap-y-6 items-center text-center lg:items-start lg:text-left'>
                    <div className='flex flex-col gap-y-3'>
                        <h1
                            id='hero-heading'
                            className='font-serif text-heading-1 uppercase font-bold'>
                            <span className='text-[#2D3436]'>Thành Sen </span>
                            <span className='text-primary'>Group</span>
                        </h1>
                        <p className='max-w-xl text-sm text-neutral-700 sm:text-base'>
                            Là đơn vị tiên phong trong lĩnh vực pháp lý tại Việt
                            Nam, Thành Sen Group cam kết mang đến giải pháp toàn
                            diện, bảo vệ tối đa quyền lợi của khách hàng bằng sự
                            tận tâm và chuyên nghiệp.
                        </p>
                    </div>
                    <div className='flex w-full justify-center gap-3 sm:w-auto lg:justify-start'>
                        <Link
                            href={CTA_HREF}
                            className={`inline-flex w-full min-w-35 items-center justify-center rounded-sm bg-primary px-5 py-3 body-1 font-medium text-white transition-opacity hover:opacity-95 sm:w-auto ${btnFocus}`}>
                            Liên hệ ngay
                        </Link>
                        <a
                            href={ZALO_CHAT_HREF}
                            className={`inline-flex w-full min-w-35 items-center justify-center rounded-sm border border-primary bg-transparent px-5 py-3 body-1 font-medium text-primary transition-opacity hover:opacity-90 sm:w-auto ${btnFocus}`}>
                            Tư vấn qua Zalo
                        </a>
                    </div>
                </div>

                <div className='flex-1 flex justify-center lg:justify-end'>
                    <div className='relative w-full max-w-[min(100%,28rem)] lg:max-w-lg'>
                        <Image
                            src={HERO_ILLUSTRATION_SRC}
                            alt='Minh họa cân công lý, sách luật và búa gỗ'
                            width={501}
                            height={376}
                            priority
                            sizes='(max-width: 1024px) 100vw, 50vw'
                            className='h-auto w-full object-contain'
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);
