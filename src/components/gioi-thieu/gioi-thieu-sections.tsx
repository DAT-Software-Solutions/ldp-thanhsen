import Image from "next/image";

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
    <section className={`${sectionShell} py-12 sm:py-14 lg:py-20`}>
        <div className='custom-container px-4 sm:px-6'>
            <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16'>
                <div
                    className={`relative aspect-4/3 w-full max-lg:mx-auto max-lg:max-w-2xl ${roundedMedia}`}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className='object-cover'
                        sizes='(max-width: 1024px) 100vw, 50vw'
                    />
                </div>
                <div className='text-left flex flex-col gap-y-4'>
                    <h2 className={clsx(proseTitle)}>{title}</h2>
                    <p className={proseBody}>{body}</p>
                </div>
            </div>
        </div>
    </section>
);

const QuoteOverlapSection = () => (
    <section className='relative overflow-hidden bg-surface-muted'>
        <div className='custom-container relative px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:items-stretch lg:px-0'>
            <div className='relative aspect-16/11 w-full overflow-hidden rounded-t-xl lg:order-2 lg:h-132 lg:rounded-none'>
                <Image
                    src={GIOI_THIEU_QUOTE_IMAGE_SRC}
                    alt='Lãnh đạo Thành Sen Group trong môi trường làm việc chuyên nghiệp'
                    fill
                    className='object-cover object-[center_25%]'
                    sizes='(max-width: 1023px) 100vw, 806px'
                />
            </div>

            <div className='relative z-10 -mt-18 pb-10 lg:order-1 lg:left-20 lg:mt-0 lg:flex lg:items-center lg:py-0'>
                <div className='sm:w-full w-[90%] mx-auto lg:max-w-xl'>
                    <figure className='flex min-h-60 flex-col justify-between rounded-xl bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:p-8 lg:h-100'>
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
            </div>
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
