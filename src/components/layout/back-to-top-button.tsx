"use client";

import { ChevronUpIcon } from "@heroicons/react/24/outline";

export const BackToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            type='button'
            onClick={scrollToTop}
            className='fixed right-5 md:bottom-6 bottom-24 z-50 flex size-12 items-center justify-center rounded-full bg-primary text-white shadow-[0_12px_26px_rgb(15_23_42/0.18)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:right-7 sm:bottom-8'
            aria-label='Cuộn lên đầu trang'>
            <ChevronUpIcon className='size-6 stroke-2' aria-hidden />
        </button>
    );
};
