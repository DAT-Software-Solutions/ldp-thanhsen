import Link from "next/link";

import { CTA_HREF } from "@/components/layout/site-urls";
import { Reveal } from "@/components/motion/landing-motion";

import { GIOI_THIEU_CTA_ILLUSTRATION_SRC } from "./gioi-thieu-urls";

const btnFocus =
    "rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export const GioiThieuCtaSection = ({ image }: { image?: string }) => (
    <section
        aria-labelledby='gioi-thieu-cta-heading'
        className='bg-surface-muted text-[#2D3436]'
        style={{
            minHeight: "clamp(420px, 52vw, 560px)",
            backgroundImage: `url("${image || GIOI_THIEU_CTA_ILLUSTRATION_SRC}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}>
        <div className='custom-container flex min-h-[inherit] items-center px-4 py-12 sm:px-0 sm:py-16'>
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
