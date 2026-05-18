import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { SOFT_IMAGE_PLACEHOLDER } from "@/components/layout/image-placeholders";
import { Reveal } from "@/components/motion/landing-motion";
import {
    getNewsHref,
    newsData,
    type NewsItem,
} from "@/mock/news";

type NewsContentPageProps = {
    item: NewsItem;
};

const navLinkFocus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const renderParagraphs = (content: string) =>
    content
        .split(/\n{2,}/)
        .filter(Boolean)
        .map((paragraph) => <p key={paragraph}>{paragraph}</p>);

export const NewsContentPage = ({ item }: NewsContentPageProps) => {
    const listItems = item.steps ?? item.cases ?? item.benefits;

    return (
        <section className='bg-white py-10 sm:py-12 lg:py-16'>
            <div className='custom-container grid gap-8 px-4 sm:px-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12'>
                <Reveal
                    as='aside'
                    ariaLabel='Tin tức'
                    className='lg:sticky lg:top-28 lg:self-start'>
                    <h2 className='font-serif text-mobile-heading-4 font-semibold text-neutral-black sm:text-heading-4'>
                        Tin tức
                    </h2>

                    <nav className='mt-5 flex flex-col gap-1 text-mobile-body-2 text-[#4D4D4D] sm:text-body-3'>
                        {newsData.map((news) => {
                            const active = news.slug === item.slug;

                            return (
                                <Link
                                    key={news.slug}
                                    href={getNewsHref(news)}
                                    aria-current={active ? "page" : undefined}
                                    className={clsx(
                                        "py-2 transition-colors hover:text-primary",
                                        navLinkFocus,
                                        active
                                            ? "font-semibold text-primary"
                                            : "text-[#4D4D4D]",
                                    )}>
                                    {news.title}
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
                    <div className='relative aspect-5/3 w-full overflow-hidden rounded-lg bg-[#f4f6f9]'>
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className='object-cover'
                            sizes='(max-width: 1024px) 100vw, 760px'
                            placeholder={SOFT_IMAGE_PLACEHOLDER}
                            decoding='async'
                        />
                    </div>

                    <div
                        className={clsx(
                            "mt-6 font-sans text-[#4d4d4d]",
                            "[&_p]:mt-4 [&_p]:text-mobile-body-2 [&_p]:font-normal [&_p]:leading-6 sm:[&_p]:text-body-2",
                            "[&_ul]:mt-4 [&_ul]:space-y-2 [&_ul]:pl-0 [&_li]:relative [&_li]:list-none [&_li]:pl-5 [&_li]:text-mobile-body-2 [&_li]:font-normal [&_li]:leading-6 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:content-['-'] sm:[&_li]:text-body-2",
                            "[&_p:first-child]:mt-0 [&_ul:first-child]:mt-0",
                        )}>
                        {item.content ? renderParagraphs(item.content) : null}
                        {listItems ? (
                            <ul>
                                {listItems.map((value) => (
                                    <li key={value}>{value}</li>
                                ))}
                            </ul>
                        ) : null}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
