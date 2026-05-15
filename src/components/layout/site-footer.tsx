import {
    ClockIcon,
    MapPinIcon,
    EnvelopeIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

import {
    HASH_LINK,
    PAGE_GIOI_THIEU,
    PAGE_HOME,
    PAGE_LIEN_HE,
    PAGE_LUAT_SU,
    PAGE_THAM_DINH_GIA,
    PAGE_THUA_PHAT_LAI,
    SITE_TEL_HREF,
} from "./site-urls";

const linkFocus =
    "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

const sectionTitle =
    "font-serif text-mobile-heading-4 font-semibold text-white sm:text-heading-4";

const MessengerIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden {...props}>
        <path d='M12 2C6.477 2 2 6.145 2 11.26c0 2.914 1.452 5.514 3.723 7.212V22l3.401-1.864c.908.251 1.873.386 2.876.386 5.523 0 10-4.146 10-9.261C22 6.145 17.523 2 12 2Zm.994 12.47-2.55-2.724-4.974 2.724 5.463-5.8 2.613 2.724 4.91-2.724-5.462 5.8Z' />
    </svg>
);

const FACEBOOK_PROFILE_HREF =
    "https://www.facebook.com/profile.php?id=61577345438215";
const FOOTER_EMAIL = "thuaphatlaihatinh@gmail.com";
const FOOTER_EMAIL_HREF = `mailto:${FOOTER_EMAIL}`;
const socialIconClass = "size-5";

const ExploreLinks = () => (
    <nav aria-label='Khám phá'>
        <h2 className={sectionTitle}>Khám phá</h2>
        <ul className='mt-3 flex flex-col gap-2 text-sm text-white sm:text-base'>
            <li>
                <Link
                    href={PAGE_GIOI_THIEU}
                    className={`font-sans sm:text-body-3 text-mobile-body-2 transition-opacity hover:opacity-80 ${linkFocus}`}>
                    Giới thiệu
                </Link>
            </li>
            <li>
                <a
                    href={HASH_LINK}
                    className={`${linkFocus} font-sans sm:text-body-3 text-mobile-body-2  hover:opacity-80`}>
                    Tin tức
                </a>
            </li>
            <li>
                <Link
                    href={PAGE_LIEN_HE}
                    className={`transition-opacity hover:opacity-80 font-sans sm:text-body-3 text-mobile-body-2 ${linkFocus}`}>
                    Liên hệ
                </Link>
            </li>
            <li>
                <Link
                    href={PAGE_LUAT_SU}
                    className={`transition-opacity hover:opacity-80 font-sans sm:text-body-3 text-mobile-body-2 ${linkFocus}`}>
                    Luật sư
                </Link>
            </li>
            <li>
                <Link
                    href={PAGE_THAM_DINH_GIA}
                    className={`${linkFocus} font-sans sm:text-body-3 text-mobile-body-2 hover:opacity-80`}>
                    Thẩm định giá
                </Link>
            </li>
            <li>
                <Link
                    href={PAGE_THUA_PHAT_LAI}
                    className={`${linkFocus} font-sans sm:text-body-3 text-mobile-body-2 hover:opacity-80`}>
                    Thừa phát lại
                </Link>
            </li>
        </ul>
    </nav>
);

const ContactBlock = () => (
    <section aria-label='Liên hệ' className='mt-8 lg:mt-10'>
        <h2 className={sectionTitle}>Liên hệ</h2>
        <ul className='mt-3 flex flex-col gap-3 text-white'>
            <li className='flex gap-2'>
                <PhoneIcon
                    className='mt-0.5 size-5 shrink-0 text-white'
                    aria-hidden
                />
                <span className='font-sans sm:text-body-3 text-mobile-body-2'>
                    Hotline:{" "}
                    <a
                        href={SITE_TEL_HREF}
                        className={`underline-offset-4 transition-opacity hover:opacity-90 ${linkFocus}`}>
                        0972.88.3456 - 0913.294.683
                    </a>
                </span>
            </li>
            <li className='flex gap-2'>
                <ClockIcon
                    className='mt-0.5 size-5 shrink-0 text-white'
                    aria-hidden
                />
                <span className='font-sans sm:text-body-3 text-mobile-body-2 '>
                    Giờ làm việc: 08:00 - 17:00 từ thứ 2 đến thứ 6
                </span>
            </li>
        </ul>
    </section>
);

const BranchesBlock = () => (
    <section aria-label='Các chi nhánh'>
        <h2 className={sectionTitle}>Các chi nhánh</h2>
        <ul className='mt-3 flex flex-col gap-3 text-white sm:text-body-3 text-mobile-body-2'>
            <li className='flex gap-2'>
                <MapPinIcon
                    className='mt-0.5 size-5 shrink-0 text-white'
                    aria-hidden
                />
                <span>
                    Trụ sở chính: số 20 Tiền Giang, Tân Sơn Hòa, Hồ Chí Minh
                </span>
            </li>
            <li className='flex gap-2'>
                <MapPinIcon
                    className='mt-0.5 size-5 shrink-0 text-white'
                    aria-hidden
                />
                <span>
                    CN Hà Tĩnh: Số 2, ngõ 1, Xuân Diệu, Phường Thành Sen, Hà
                    Tĩnh
                </span>
            </li>
            <li className='flex gap-2'>
                <MapPinIcon
                    className='mt-0.5 size-5 shrink-0 text-white'
                    aria-hidden
                />
                <span>
                    CN Hà Nội: Số 01 ngõ 33 Phạm Tuấn Tài, Phường Cầu Giấy, Hà
                    Nội
                </span>
            </li>
            <li className='flex gap-2'>
                <MapPinIcon
                    className='mt-0.5 size-5 shrink-0 text-white'
                    aria-hidden
                />
                <span>
                    CN Vũng Tàu: 1C Vòng xoay cửa lấp, Phước Thắng, Hồ Chí Minh
                </span>
            </li>
            <li className='flex gap-2'>
                <MapPinIcon
                    className='mt-0.5 size-5 shrink-0 text-white'
                    aria-hidden
                />
                <span>
                    CN Quy Nhơn: số 30B Tăng Bạt Hổ, Phường Quy Nhơn, Gia Lai
                </span>
            </li>
            <li className='flex gap-2'>
                <MapPinIcon
                    className='mt-0.5 size-5 shrink-0 text-white'
                    aria-hidden
                />
                <span>
                    CN Đồng Nai: Quốc lộ 13, Phường Bình Long, Tỉnh Đồng Nai
                </span>
            </li>
        </ul>
    </section>
);

const CopyrightAndSocial = () => (
    <div className='flex flex-col gap-4'>
        <p className='font-sans sm:text-body-3 text-mobile-body-2 font-normal text-[#F5F7FA]'>
            Copyright © 2020 Thanh Sen Group. All rights reserved
        </p>
        <ul className='flex flex-wrap gap-3'>
            <li>
                <a
                    href={FACEBOOK_PROFILE_HREF}
                    target='_blank'
                    rel='noreferrer'
                    aria-label='Messenger'
                    className={`flex size-10 items-center justify-center rounded-full! bg-white/10 text-white transition-opacity hover:opacity-90 ${linkFocus}`}>
                    <MessengerIcon className={socialIconClass} />
                </a>
            </li>
            <li>
                <a
                    href={FOOTER_EMAIL_HREF}
                    aria-label={`Email ${FOOTER_EMAIL}`}
                    className={`flex size-10 items-center justify-center rounded-full! bg-white/10 text-white transition-opacity hover:opacity-90 ${linkFocus}`}>
                    <EnvelopeIcon className={socialIconClass} />
                </a>
            </li>
        </ul>
    </div>
);

export const SiteFooter = () => (
    <footer aria-label='Chân trang' className='mt-auto bg-primary text-white'>
        <div className='custom-container sm:px-0 px-4 py-12 sm:py-16'>
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8 lg:items-start'>
                <div className='flex flex-col gap-4'>
                    <Link
                        href={PAGE_HOME}
                        className={`relative block h-16 w-16 shrink-0 sm:h-18 sm:w-18 ${linkFocus}`}>
                        <Image
                            src='/images/logo.svg'
                            alt='Thành Sen Group'
                            fill
                            className='object-contain object-left'
                            sizes='72px'
                        />
                    </Link>
                    <p className='font-serif text-mobile-heading-4 font-bold text-[#F9DE6F] sm:text-heading-4'>
                        Thành Sen Group
                    </p>
                    <div className='hidden lg:block'>
                        <CopyrightAndSocial />
                    </div>
                </div>

                <div>
                    <ExploreLinks />
                    <ContactBlock />
                </div>

                <BranchesBlock />

                <div className='col-span-full border-t border-white/20 pt-8 lg:hidden'>
                    <CopyrightAndSocial />
                </div>
            </div>
        </div>
    </footer>
);
