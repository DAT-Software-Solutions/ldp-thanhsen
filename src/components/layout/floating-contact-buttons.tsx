import { PhoneIcon } from "@heroicons/react/24/solid";

import { SITE_TEL_HREF, ZALO_CHAT_HREF } from "./site-urls";

const labelClass =
    "pointer-events-none absolute left-17 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-white px-4 py-3 font-sans text-sm font-semibold italic text-neutral-800 opacity-0 shadow-[0_14px_30px_rgb(15_23_42/0.16)] transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block";

const buttonClass =
    "group relative block size-14 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";

const buttonFaceClass =
    "flex size-14 animate-[contact-shake_4.8s_ease-in-out_infinite] items-center justify-center rounded-full text-white shadow-[0_12px_26px_rgb(15_23_42/0.18)] transition-transform duration-200 group-hover:scale-110 group-hover:[animation-play-state:paused] group-focus-visible:scale-110 group-focus-visible:[animation-play-state:paused]";

export const FloatingContactButtons = () => (
    <>
        <aside
            aria-label='Liên hệ nhanh'
            className='fixed bottom-6 left-5 z-50 hidden flex-col items-start gap-4 sm:bottom-8 sm:left-6 sm:flex'>
            <a
                href={SITE_TEL_HREF}
                className={`${buttonClass} focus-visible:outline-[#22C55E]`}
                aria-label='Gọi điện tư vấn miễn phí'>
                <span className={`${buttonFaceClass} bg-[#22C55E]`}>
                    <PhoneIcon className='size-7' aria-hidden />
                </span>
                <span className={labelClass}>Liên hệ tư vấn miễn phí!</span>
            </a>

            <a
                href={ZALO_CHAT_HREF}
                target='_blank'
                rel='noreferrer'
                className={`${buttonClass} focus-visible:outline-[#0068FF]`}
                aria-label='Liên hệ qua Zalo'>
                <span
                    className={`${buttonFaceClass} bg-[#0068FF] font-sans text-base font-bold [animation-delay:2.4s]`}>
                    Zalo
                </span>
                <span className={labelClass}>Nhận báo giá ngay!</span>
            </a>
        </aside>

        <nav
            aria-label='Liên hệ nhanh trên di động'
            className='fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-neutral-200 bg-white shadow-[0_-8px_24px_rgb(15_23_42/0.12)] sm:hidden'>
            <a
                href={SITE_TEL_HREF}
                className='flex min-h-17 flex-col items-center justify-center gap-1 border-r border-neutral-200 font-sans md:text-body-3 text-mobile-body-3 font-bold text-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#22C55E]'
                aria-label='Gọi hotline'>
                <span className='flex size-8 items-center justify-center rounded-full bg-[#DCFCE7] text-[#22C55E]'>
                    <PhoneIcon className='size-5' aria-hidden />
                </span>
                Hotline
            </a>

            <a
                href={ZALO_CHAT_HREF}
                target='_blank'
                rel='noreferrer'
                className='flex min-h-17 flex-col items-center justify-center gap-1 font-sans md:text-body-3 text-mobile-body-3 font-bold text-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0068FF]'
                aria-label='Liên hệ Zalo nhận báo giá'>
                <span className='flex size-8 items-center justify-center rounded-full bg-[#0068FF] text-[0.65rem] font-bold text-white'>
                    Zalo
                </span>
                Báo giá
            </a>
        </nav>
    </>
);
