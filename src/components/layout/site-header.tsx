"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";

import {
    CTA_HREF,
    PAGE_GIOI_THIEU,
    PAGE_HOME,
    PAGE_LIEN_HE,
    PAGE_LUAT_SU,
    PAGE_THAM_DINH_GIA,
    PAGE_THUA_PHAT_LAI,
} from "./site-urls";

const linkFocus =
    "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

/** Thứ tự menu giống bản thiết kế — `href` lấy từ `site-urls`. */
const MAIN_NAV_ITEMS = [
    { href: PAGE_GIOI_THIEU, label: "Giới thiệu" },
    { href: PAGE_LUAT_SU, label: "Tư vấn pháp luật" },
    { href: PAGE_THAM_DINH_GIA, label: "Thẩm định giá" },
    { href: PAGE_THUA_PHAT_LAI, label: "Thừa phát lại" },
    { href: PAGE_LIEN_HE, label: "Liên hệ" },
] as const;

const HeaderCtaLink = ({
    className,
    onNavigate,
}: {
    className?: string;
    onNavigate?: () => void;
}) => (
    <Link href={CTA_HREF} className={className} onClick={onNavigate}>
        <span className='font-medium uppercase text-mobile-body-2'>
            Liên hệ nhận tư vấn
        </span>
    </Link>
);

const MainNavLinks = ({
    className,
    linkClassName,
    onNavigate,
}: {
    className?: string;
    linkClassName: string;
    onNavigate?: () => void;
}) => (
    <nav aria-label='Chính' className={className}>
        {MAIN_NAV_ITEMS.map(({ href, label }) => (
            <Link
                key={label}
                href={href}
                className={linkClassName}
                onClick={onNavigate}>
                {label}
            </Link>
        ))}
    </nav>
);

export const SiteHeader = () => {
    const reduceMotion = useReducedMotion();
    const [mobileOpen, setMobileOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const mobileOpenRef = useRef(mobileOpen);
    const [belowHeaderPx, setBelowHeaderPx] = useState(0);

    const closeMobile = useCallback(() => setMobileOpen(false), []);

    useEffect(() => {
        mobileOpenRef.current = mobileOpen;
    }, [mobileOpen]);

    const overlayTransition = reduceMotion
        ? { duration: 0 }
        : { duration: 0.28, ease: [0.33, 1, 0.68, 1] as const };

    const panelTransition = reduceMotion
        ? { duration: 0.15, ease: [0.33, 1, 0.68, 1] as const }
        : {
              type: "spring" as const,
              stiffness: 420,
              damping: 34,
              mass: 0.82,
          };

    const handleMobileExitComplete = useCallback(() => {
        if (!mobileOpenRef.current) {
            document.body.style.overflow = "";
        }
    }, []);

    const handleMobileMenuToggle = useCallback(() => {
        setMobileOpen((prev) => !prev);
    }, []);

    useLayoutEffect(() => {
        const el = headerRef.current;
        if (!el) return;
        const ro = new ResizeObserver(() => setBelowHeaderPx(el.offsetHeight));
        ro.observe(el);
        setBelowHeaderPx(el.offsetHeight);
        return () => ro.disconnect();
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeMobile();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [closeMobile]);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        }
    }, [mobileOpen]);

    const desktopLinkClass = `whitespace-nowrap transition-opacity hover:opacity-80 ${linkFocus}`;
    const mobileLinkClass = `border-b border-white/10 py-3 text-base font-medium text-white transition-opacity last:border-b-0 hover:opacity-80 ${linkFocus}`;

    return (
        <>
            <header
                ref={headerRef}
                className='z-50 bg-primary sticky sm:top-0 -top-px'>
                <div className='flex h-16 shrink-0 items-center gap-3 border-b border-white/10 px-4 py-3 md:h-20.5 md:px-0 md:py-4 custom-container'>
                    <Link
                        href={PAGE_HOME}
                        className='relative block h-10 w-11.25 shrink-0 md:h-12.5 md:w-14'
                        onClick={closeMobile}>
                        <Image
                            src='/images/logo.svg'
                            alt='Thanh Sơn Group'
                            fill
                            className='object-contain object-left'
                            priority
                            sizes='(max-width: 767px) 45px, 56px'
                        />
                    </Link>

                    <div className='ml-auto hidden items-center gap-6 md:flex lg:gap-8'>
                        <MainNavLinks
                            className='flex min-w-0 items-center gap-6 text-sm font-medium text-white lg:gap-8'
                            linkClassName={desktopLinkClass}
                        />

                        <HeaderCtaLink className='rounded-md bg-white px-4 py-2 text-center sm:text-body-2 text-mobile-body-2  font-medium tracking-tight text-primary transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white sm:text-x' />
                    </div>

                    <div className='ml-auto flex shrink-0 items-center gap-2 md:hidden'>
                        <HeaderCtaLink
                            onNavigate={closeMobile}
                            className='flex h-8 w-44.25 shrink-0 items-center justify-center rounded-md bg-white text-center text-[9px] font-semibold tracking-tight text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white sm:text-[10px]'
                        />
                        <button
                            type='button'
                            className='-mr-2 flex size-10 items-center justify-center rounded-sm p-2 text-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white'
                            aria-expanded={mobileOpen}
                            aria-controls='mobile-menu'
                            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
                            onClick={handleMobileMenuToggle}>
                            {mobileOpen ? (
                                <XMarkIcon
                                    className='size-6 shrink-0'
                                    aria-hidden
                                />
                            ) : (
                                <Bars3Icon
                                    className='size-6 shrink-0'
                                    aria-hidden
                                />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence onExitComplete={handleMobileExitComplete}>
                {mobileOpen ? (
                    <>
                        <motion.button
                            key='mobile-backdrop'
                            type='button'
                            tabIndex={-1}
                            aria-hidden
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={overlayTransition}
                            className='fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] md:hidden'
                            onClick={closeMobile}
                        />

                        <motion.div
                            key='mobile-menu-panel'
                            id='mobile-menu'
                            role='dialog'
                            aria-modal='true'
                            aria-label='Menu điều hướng'
                            initial={{ opacity: 0, y: -16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={panelTransition}
                            className='fixed inset-x-0 bottom-0 z-50 overflow-y-auto bg-primary pb-[max(1rem,env(safe-area-inset-bottom))] will-change-transform md:hidden'
                            style={{ top: belowHeaderPx }}>
                            <MainNavLinks
                                className='flex flex-col border-t border-white/10 px-4 py-4'
                                linkClassName={mobileLinkClass}
                                onNavigate={closeMobile}
                            />
                        </motion.div>
                    </>
                ) : null}
            </AnimatePresence>
        </>
    );
};
