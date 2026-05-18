import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import type { ComponentType } from "react";

import { GioiThieuCtaSection } from "@/components/gioi-thieu/gioi-thieu-cta-section";
import { GioiThieuNewsSection } from "@/components/gioi-thieu/gioi-thieu-news-section";
import {
    Reveal,
    RevealItem,
    RevealList,
} from "@/components/motion/landing-motion";
import {
    getServicePageHref,
    type ServicePage,
    type ServicePageSectionKey,
    serviceNavGroups,
} from "@/mock/data";
import { getServiceByHref } from "@/mock/services";

type ServiceContentPageProps = {
    page: ServicePage;
};

const navLinkFocus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const SERVICE_EXTRA_SECTIONS: Record<ServicePageSectionKey, ComponentType> = {
    cta: GioiThieuCtaSection,
    news: GioiThieuNewsSection,
};

export const ServiceContentPage = ({ page }: ServiceContentPageProps) => {
    const service = getServiceByHref(getServicePageHref(page));
    const summaryContent = service?.content;

    return (
        <>
        <section className='bg-white py-10 sm:py-12 lg:py-16'>
            <div className='custom-container grid gap-8 px-4 sm:px-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12'>
                <Reveal
                    as='aside'
                    ariaLabel='Các dịch vụ'
                    className='lg:sticky lg:top-28 lg:self-start'>
                    <h2 className='font-serif text-mobile-heading-4 font-semibold text-neutral-black sm:text-heading-4'>
                        Các dịch vụ
                    </h2>

                    <nav className='mt-5 flex flex-col gap-1 text-mobile-body-2 text-[#4D4D4D] sm:text-body-3'>
                        {serviceNavGroups.map((group) => {
                            const groupActive =
                                group.href === getServicePageHref(page) ||
                                group.children?.some(
                                    (child) => child.slug === page.slug,
                                );

                            if (group.children) {
                                return (
                                    <div key={group.title}>
                                        <div
                                            className={clsx(
                                                "flex items-center justify-between py-2 font-medium",
                                                groupActive
                                                    ? "text-primary"
                                                    : "text-neutral-black",
                                            )}>
                                            <span>{group.title}</span>
                                            <ChevronDownIcon
                                                className='size-4 shrink-0'
                                                aria-hidden
                                            />
                                        </div>
                                        <div className='ml-3 flex flex-col border-l border-neutral-200 pl-4'>
                                            {group.children.map((child) => {
                                                const active =
                                                    child.slug === page.slug;
                                                return (
                                                    <Link
                                                        key={child.slug}
                                                        href={child.href}
                                                        aria-current={
                                                            active
                                                                ? "page"
                                                                : undefined
                                                        }
                                                        className={clsx(
                                                            "py-2 transition-colors hover:text-primary",
                                                            navLinkFocus,
                                                            active
                                                                ? "font-semibold text-primary"
                                                                : "text-[#4D4D4D]",
                                                        )}>
                                                        {child.title}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            }

                            if (!group.href) {
                                return (
                                    <span
                                        key={group.title}
                                        className={clsx(
                                            "flex items-center justify-between py-2",
                                            groupActive
                                                ? "font-semibold text-primary"
                                                : "text-neutral-black",
                                        )}>
                                        {group.title}
                                    </span>
                                );
                            }

                            return (
                                <Link
                                    key={group.title}
                                    href={group.href}
                                    aria-current={
                                        groupActive ? "page" : undefined
                                    }
                                    className={clsx(
                                        "flex items-center justify-between py-2 transition-colors hover:text-primary",
                                        navLinkFocus,
                                        groupActive
                                            ? "font-semibold text-primary"
                                            : "text-neutral-black",
                                    )}>
                                    <span>{group.title}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </Reveal>

                <Reveal
                    as='article'
                    className='min-w-0'
                    delay={0.08}
                    viewportAmount={0.01}>
                    <p
                        id='service-page-heading'
                        className='font-sans text-mobile-body-1 font-normal leading-7 text-[#4d4d4d] sm:text-body-1'>
                        {summaryContent ?? page.description}
                    </p>

                    {!summaryContent && (
                        <div
                            className={clsx(
                                "mt-5 font-sans text-[#4d4d4d]",
                                "[&_p]:mt-4 [&_p]:text-mobile-body-2 [&_p]:font-normal [&_p]:leading-6 sm:[&_p]:text-body-2",
                                "[&_ul]:mt-4 [&_ul]:space-y-2 [&_ul]:pl-0 [&_li]:relative [&_li]:list-none [&_li]:pl-5 [&_li]:text-mobile-body-2 [&_li]:font-normal [&_li]:leading-6 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:content-['-'] sm:[&_li]:text-body-2",
                                "[&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-mobile-heading-4 [&_h2]:font-bold [&_h2]:leading-7 [&_h2]:text-neutral-black sm:[&_h2]:text-heading-3 sm:[&_h2]:leading-9",
                                "[&_h2:first-child]:mt-0 [&_p:first-child]:mt-0",
                            )}
                            dangerouslySetInnerHTML={{ __html: page.content }}
                        />
                    )}

                    {!summaryContent && (
                        <section
                            aria-labelledby='service-faq-heading'
                            className='mt-10 border-t border-neutral-200 pt-8'>
                            <h2
                                id='service-faq-heading'
                                className='font-serif text-mobile-heading-4 font-semibold text-neutral-black sm:text-heading-4'>
                                Câu hỏi thường gặp
                            </h2>

                            <RevealList className='mt-5 divide-y divide-neutral-200 border-y border-neutral-200'>
                                {page.faqs.map((faq, index) => (
                                    <RevealItem
                                        key={`${page.slug}-faq-${index}`}>
                                        <details className='group'>
                                            <summary className='flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-mobile-body-2 font-medium text-neutral-black transition-colors hover:text-primary sm:text-body-3'>
                                                <span>{faq.question}</span>
                                                <ChevronDownIcon
                                                    className='size-4 shrink-0 transition-transform group-open:rotate-180'
                                                    aria-hidden
                                                />
                                            </summary>
                                            <p className='pb-4 text-mobile-body-2 leading-6 text-[#717171] sm:text-body-3'>
                                                {faq.answer}
                                            </p>
                                        </details>
                                    </RevealItem>
                                ))}
                            </RevealList>
                        </section>
                    )}
                </Reveal>
            </div>
        </section>

        {page.sections?.map((section) => {
            const Section = SERVICE_EXTRA_SECTIONS[section];
            return <Section key={`${page.slug}-${section}`} />;
        })}
        </>
    );
};
