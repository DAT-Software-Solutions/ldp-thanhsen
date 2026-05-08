import Image from "next/image";

import {
    GIOI_THIEU_INTRO_IMAGE_SRC,
    GIOI_THIEU_MISSION_IMAGE_SRC,
    GIOI_THIEU_QUOTE_IMAGE_SRC,
} from "./gioi-thieu-urls";

const sectionShell = "bg-white";
const proseTitle =
    "font-serif text-mobile-heading-3 font-bold text-[#2D3436] sm:text-heading-3";
const proseBody = "mt-4 text-mobile-body-1 text-[#555555] sm:text-body-2";

const roundedMedia = "overflow-hidden rounded-[14px] sm:rounded-2xl";

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
                <div className='text-left'>
                    <h2 className={proseTitle}>{title}</h2>
                    <p className={proseBody}>{body}</p>
                </div>
            </div>
        </div>
    </section>
);

const QuoteOverlapSection = () => (
    <section
        className={`relative overflow-hidden py-10 sm:py-12 lg:h-[528px] lg:min-h-0 lg:py-0 bg-surface-muted`}>
        <div className='custom-container relative z-0 px-4 sm:px-6 lg:h-full lg:min-h-0'>
            <div
                className={`relative z-0 mx-auto aspect-16/11 w-full max-w-2xl overflow-hidden sm:mx-6 max-lg:-mb-2 ${roundedMedia} lg:absolute lg:right-0 lg:top-0 lg:mx-0 lg:mb-0 lg:h-[528px] lg:w-[806px] lg:max-w-none lg:rounded-none lg:rounded-l-2xl`}>
                <Image
                    src={GIOI_THIEU_QUOTE_IMAGE_SRC}
                    alt='Lãnh đạo Thành Sen Group trong môi trường làm việc chuyên nghiệp'
                    fill
                    className='object-cover object-[center_25%]'
                    sizes='(max-width: 1023px) 100vw, 806px'
                />
            </div>
            <div className='relative z-10 flex min-h-0 lg:h-full lg:items-center lg:overflow-hidden lg:py-0'>
                <div className='mx-auto w-full max-w-xl max-lg:-mt-12 max-lg:px-0.5 sm:max-lg:-mt-14 lg:mx-0 lg:max-w-[min(100%,30rem)] xl:max-w-xl'>
                    <figure className='rounded-[14px] bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:rounded-2xl sm:p-8 lg:p-10'>
                        <blockquote className=' text-mobile-heading-3 font-bold text-[#2D3436] sm:text-[26px] lg:text-heading-3'>
                            “Thành Sen luôn giữ chữ tín hàng đầu, bảo vệ chữ tín
                            như bảo vệ chính mình”
                        </blockquote>
                        <figcaption className='mt-5 text-mobile-body-2 text-[#666666] sm:text-body-3'>
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
