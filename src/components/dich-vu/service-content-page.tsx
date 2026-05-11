import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import type { ComponentType } from "react";

import { GioiThieuCtaSection } from "@/components/gioi-thieu/gioi-thieu-cta-section";
import { GioiThieuNewsSection } from "@/components/gioi-thieu/gioi-thieu-news-section";
import {
    getServicePageHref,
    type ServicePage,
    type ServicePageSectionKey,
    serviceNavGroups,
} from "@/mock/data";

type ServiceContentPageProps = {
    page: ServicePage;
};

const navLinkFocus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const SERVICE_EXTRA_SECTIONS: Record<
    ServicePageSectionKey,
    ComponentType
> = {
    cta: GioiThieuCtaSection,
    news: GioiThieuNewsSection,
};

export const ServiceContentPage = ({ page }: ServiceContentPageProps) => (
    <>
        <section className='bg-white py-10 sm:py-12 lg:py-16'>
            <div className='custom-container grid gap-8 px-4 sm:px-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12'>
                <aside aria-label='Các dịch vụ' className='lg:sticky lg:top-28 lg:self-start'>
                    <h2 className='font-serif text-mobile-heading-4 font-semibold text-neutral-black sm:text-heading-4'>
                        Các dịch vụ
                    </h2>

                    <nav className='mt-5 flex flex-col gap-1 text-mobile-body-2 text-[#4D4D4D] sm:text-body-3'>
                        {serviceNavGroups.map((group) => {
                            const groupActive =
                                group.href === getServicePageHref(page) ||
                                group.children?.some((child) => child.slug === page.slug);

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
                                                const active = child.slug === page.slug;
                                                return (
                                                    <Link
                                                        key={child.slug}
                                                        href={child.href}
                                                        aria-current={active ? "page" : undefined}
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

                            return (
                                <Link
                                    key={group.title}
                                    href={group.href ?? "#"}
                                    aria-current={groupActive ? "page" : undefined}
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
                </aside>

                <article aria-labelledby='service-page-heading' className='min-w-0'>
                    <h1
                        id='service-page-heading'
                        className='font-serif text-mobile-heading-2 font-bold text-neutral-black sm:text-heading-2'>
                        {page.description}
                    </h1>

                    <div
                        className='service-content mt-5'
                        dangerouslySetInnerHTML={{ __html: page.content }}
                    />

                    <section
                        aria-labelledby='service-faq-heading'
                        className='mt-10 border-t border-neutral-200 pt-8'>
                        <h2
                            id='service-faq-heading'
                            className='font-serif text-mobile-heading-4 font-semibold text-neutral-black sm:text-heading-4'>
                            Câu hỏi thường gặp
                        </h2>

                        <div className='mt-5 divide-y divide-neutral-200 border-y border-neutral-200'>
                            {page.faqs.map((faq, index) => (
                                <details key={`${page.slug}-faq-${index}`} className='group'>
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
                            ))}
                        </div>
                    </section>
                </article>
            </div>
        </section>

        {page.sections?.map((section) => {
            const Section = SERVICE_EXTRA_SECTIONS[section];
            return <Section key={`${page.slug}-${section}`} />;
        })}
    </>
);
