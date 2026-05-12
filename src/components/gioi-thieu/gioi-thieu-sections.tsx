import Image from "next/image";

import { SOFT_IMAGE_PLACEHOLDER } from "@/components/layout/image-placeholders";
import { Reveal } from "@/components/motion/landing-motion";

import {
    GIOI_THIEU_INTRO_IMAGE_SRC,
    GIOI_THIEU_MISSION_IMAGE_SRC,
    GIOI_THIEU_QUOTE_IMAGE_SRC,
} from "./gioi-thieu-urls";
import clsx from "clsx";

const sectionShell = "bg-white";
const proseTitle =
    "font-serif text-mobile-heading-3 font-bold text-neutral-black sm:text-heading-2";
const proseBody =
    "text-mobile-body-1 text-[#717171] font-normal sm:text-body-2";

const roundedMedia = "overflow-hidden rounded-xl";

const ImageTextRow = ({
    imageSrc,
    imageAlt,
    title,
    body,
}: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    body: string;
}) => (
    <section className={`${sectionShell} py-12 sm:py-16`}>
        <div className='custom-container px-4 sm:px-0'>
            <div className='grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 xl:gap-16'>
                <Reveal
                    className={`relative aspect-4/3 w-full max-md:mx-auto max-md:max-w-2xl ${roundedMedia}`}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className='object-cover'
                        sizes='(max-width: 1024px) 100vw, 50vw'
                        loading='lazy'
                        placeholder={SOFT_IMAGE_PLACEHOLDER}
                        decoding='async'
                    />
                </Reveal>
                <Reveal className='text-left flex flex-col gap-y-4' delay={0.08}>
                    <h2 className={clsx(proseTitle)}>{title}</h2>
                    <p className={proseBody}>{body}</p>
                </Reveal>
            </div>
        </div>
    </section>
);

const QuoteOverlapSection = () => (
    <section className='relative overflow-hidden bg-surface-muted'>
        <div className='custom-container relative px-4 md:px-0 md:flex md:items-center'>
            <Reveal className='relative aspect-16/11 w-full overflow-hidden md:order-2 md:h-132 md:w-201.5 rounded-none'>
                <Image
                    src={GIOI_THIEU_QUOTE_IMAGE_SRC}
                    alt='Lãnh đạo Thành Sen Group trong môi trường làm việc chuyên nghiệp'
                    fill
                    className='object-cover object-[center_25%]'
                    sizes='(max-width: 1023px) 100vw, 806px'
                    loading='lazy'
                    placeholder={SOFT_IMAGE_PLACEHOLDER}
                    decoding='async'
                />
            </Reveal>

            <Reveal
                className='relative z-10 -mt-18 pb-10 md:order-1 md:mt-0 md:flex md:flex-1 md:items-center md:py-0'
                delay={0.08}>
                <div className='w-[90%] mx-auto md:absolute md:w-140'>
                    <figure className='flex min-h-60 flex-col justify-between rounded-xl bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)] md:p-8 md:h-100'>
                        <blockquote className={clsx(proseTitle)}>
                            “Thành Sen luôn giữ chữ tín hàng đầu, bảo vệ chữ tín
                            như bảo vệ chính mình”
                        </blockquote>

                        <figcaption className={clsx(proseBody)}>
                            Luật sư Lê Minh Hải – Chủ tịch HĐQT - TGĐ Thành Sen
                            Group
                        </figcaption>
                    </figure>
                </div>
            </Reveal>
        </div>
    </section>
);

export const GioiThieuSections = () => (
    <>
        <ImageTextRow
            imageSrc={GIOI_THIEU_INTRO_IMAGE_SRC}
            imageAlt='Đội ngũ Thành Sen Group'
            title='Thành Sen là đơn vị đầu tiên trong khu vực được Bộ Tài chính cấp giấy phép hoạt động trong lĩnh vực thẩm định giá'
            body='Thành Sen Group là quần thể dịch vụ chuyên nghiệp trong lĩnh vực pháp lý và tư pháp, hướng tới các giải pháp toàn diện, uy tín và hiệu quả cho khách hàng.'
        />
        <QuoteOverlapSection />
        <ImageTextRow
            imageSrc={GIOI_THIEU_MISSION_IMAGE_SRC}
            imageAlt='Không gian phục vụ khách hàng tại Thành Sen'
            title='Hướng đến xây dựng một địa chỉ pháp lý đảm bảo sự chuyên nghiệp – minh bạch – tận tâm.'
            body='Thẩm định giá Thành Sen được thành lập nhằm đáp ứng nhu cầu của các cơ quan, đối tác trên địa bàn tỉnh Hà Tĩnh, góp phần minh bạch thị trường và định giá tài sản đúng giá trị.'
        />
    </>
);
