import Link from "next/link";

import { CTA_HREF } from "@/components/layout/site-urls";
import { Reveal } from "@/components/motion/landing-motion";

const btnFocus =
    "rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export const GioiThieuCtaSection = () => (
    <section
        aria-labelledby='gioi-thieu-cta-heading'
        className="min-h-[620px] bg-surface-muted bg-[image:url('/images/thanhsen_bg-cta2-mobile.png')] bg-cover bg-center bg-no-repeat text-[#2D3436] md:min-h-[clamp(420px,52vw,560px)] md:bg-[image:url('/images/thanhsen_bg-cta2.png')]">
        <div className='custom-container flex min-h-[inherit] md:items-center items-start px-4 py-12 sm:px-0 sm:py-16'>
            <Reveal className='flex max-w-2xl flex-col items-start text-left'>
                <h2
                    id='gioi-thieu-cta-heading'
                    className='font-serif text-mobile-heading-2 font-bold leading-snug tracking-tight text-[#2D3436] sm:text-heading-2 lg:leading-tight'>
                    Liên hệ với chúng tôi để được nhận tư vấn về mọi vấn đề liên
                    quan đến pháp luật từ chuyên gia
                </h2>
                <Link
                    href={CTA_HREF}
                    className={`interactive-button font-sans mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-white sm:min-h-12 sm:text-body-2 ${btnFocus}`}>
                    Tìm hiểu thêm
                </Link>
            </Reveal>
        </div>
    </section>
);
