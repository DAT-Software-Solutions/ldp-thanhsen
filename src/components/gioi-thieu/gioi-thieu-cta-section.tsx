import Image from "next/image";
import Link from "next/link";

import { CTA_HREF } from "@/components/layout/site-urls";

import { GIOI_THIEU_CTA_ILLUSTRATION_SRC } from "./gioi-thieu-urls";

const btnFocus =
    "rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export const GioiThieuCtaSection = () => (
    <section
        aria-labelledby='gioi-thieu-cta-heading'
        className='bg-surface-muted text-[#2D3436]'>
        <div className='custom-container px-4 py-12 sm:px-6 sm:py-14 lg:py-16'>
            <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16'>
                <div className='flex flex-col items-start text-left'>
                    <h2
                        id='gioi-thieu-cta-heading'
                        className='font-serif text-mobile-heading-2 font-bold leading-snug tracking-tight text-[#2D3436] sm:text-heading-2 lg:leading-tight'>
                        Liên hệ với chúng tôi để được nhận tư vấn về mọi vấn đề
                        liên quan đến pháp luật từ chuyên gia
                    </h2>
                    <Link
                        href={CTA_HREF}
                        className={`interactive-button font-sans mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-white sm:min-h-12 sm:text-body-2 ${btnFocus}`}>
                        Tìm hiểu thêm
                    </Link>
                </div>

                <div className='flex w-full justify-center lg:justify-end'>
                    <div className='relative w-full max-w-[min(100%,20rem)] sm:max-w-md lg:max-w-lg'>
                        <Image
                            src={GIOI_THIEU_CTA_ILLUSTRATION_SRC}
                            alt='Minh họa sách luật và búa gỗ tòa'
                            width={501}
                            height={376}
                            className='h-auto w-full object-contain'
                            sizes='(max-width: 1023px) 90vw, 40vw'
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);
