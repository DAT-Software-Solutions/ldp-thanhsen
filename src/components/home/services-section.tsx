import {
    AcademicCapIcon,
    CurrencyDollarIcon,
    DocumentTextIcon,
    PencilSquareIcon,
    ScaleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

import clsx from "clsx";

export type ServiceCardProps = {
    href: string;
    iconKey: ServiceIconKey;
    title: string;
    content?: string;
};

type ServiceIconKey =
    | "lawyer"
    | "bailiff"
    | "arbitration"
    | "valuation"
    | "auction";

const cardFocus =
    "rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export const iconClass = "size-7 text-primary";

const SERVICE_ICONS: Record<
    ServiceIconKey,
    ComponentType<SVGProps<SVGSVGElement>>
> = {
    lawyer: AcademicCapIcon,
    bailiff: PencilSquareIcon,
    arbitration: ScaleIcon,
    valuation: CurrencyDollarIcon,
    auction: DocumentTextIcon,
};

const ServiceCardInner = ({
    iconKey,
    title,
    content,
    revealContentOnHover = false,
}: {
    iconKey: ServiceIconKey;
    title: string;
    content?: string;
    revealContentOnHover?: boolean;
}) => {
    const Icon = SERVICE_ICONS[iconKey];
    return (
        <div
            className={clsx(
                "flex flex-1 flex-col gap-y-4",
                revealContentOnHover && "relative h-full",
            )}>
            <div
                className={clsx(
                    "flex flex-col gap-y-6 transition-transform duration-500 ease-out",
                    revealContentOnHover &&
                        "group-hover:-translate-y-28 group-focus-visible:-translate-y-28",
                )}>
                <div className='relative h-14'>
                    <div className='absolute top-1.5 left-3 w-12.5 h-12.25 rounded-sm rounded-tl-2xl rounded-br-2xl bg-rose-100 p-2.5'></div>
                    <Icon
                        className={clsx(
                            iconClass,
                            "absolute z-50 h-10 w-10 font-light",
                        )}
                        aria-hidden
                    />
                </div>
                <h4 className='font-serif text-heading-4 font-semibold text-neutral-black'>
                    {title}
                </h4>
            </div>

            <div
                className={clsx(
                    "h-1 w-10 rounded-full bg-primary not-last:duration-300 ease-out mt-auto group-hover:opacity-0 group-focus-visible:opacity-0",
                )}
                aria-hidden
            />

            {content && (
                <p
                    className={clsx(
                        "font-sans text-mobile-body-2 font-normal text-[#4D4D4D] sm:text-body-2",
                        revealContentOnHover &&
                            "absolute inset-x-0 top-3 max-h-64 translate-y-76 overflow-hidden transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0",
                    )}>
                    {content}
                </p>
            )}
        </div>
    );
};

const ServiceCard = ({
    href,
    iconKey,
    title,
    content,
    revealContentOnHover = false,
}: {
    href: string;
    iconKey: ServiceIconKey;
    title: string;
    content?: string;
    revealContentOnHover?: boolean;
}) => {
    const className = clsx(
        "interactive-card group flex flex-col self-start rounded-lg bg-white px-4 py-6 shadow-md transition-[transform,box-shadow,border-color] duration-500 ease-out",
        revealContentOnHover && "h-64 overflow-hidden",
        cardFocus,
    );

    if (href.startsWith("/")) {
        return (
            <Link href={href} className={className}>
                <ServiceCardInner
                    iconKey={iconKey}
                    title={title}
                    content={content}
                    revealContentOnHover={revealContentOnHover}
                />
            </Link>
        );
    }

    return (
        <a href={href} className={className}>
            <ServiceCardInner
                iconKey={iconKey}
                title={title}
                content={content}
                revealContentOnHover={revealContentOnHover}
            />
        </a>
    );
};

export const ServicesSection = ({
    services,
    revealContentOnHover = false,
}: {
    services: ServiceCardProps[];
    revealContentOnHover?: boolean;
}) => (
    <section aria-labelledby='services-heading' className='bg-white'>
        <div className='custom-container px-4 sm:px-0 py-12 lg:py-16 flex flex-col gap-y-8'>
            <header className='flex flex-col gap-y-2 mx-auto max-w-2xl items-center text-center'>
                <h2
                    id='services-heading'
                    className='font-serif text-mobile-heading-2 md:text-heading-2 font-bold text-neutral-black'>
                    Dịch vụ của <span className='text-primary'>chúng tôi</span>
                </h2>
                <p className='font-sans w-full text-neutral-600 font-normal md:text-body-1 text-mobile-body-1'>
                    Thành Sen Group luôn sẵn sàng đem lại các dịch vụ pháp lý
                    chất lượng cao tới quý khách hàng
                </p>
            </header>

            <div className='grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
                {services.map((service) => (
                    <ServiceCard
                        key={service.title}
                        href={service.href}
                        iconKey={service.iconKey}
                        title={service.title}
                        content={service.content}
                        revealContentOnHover={revealContentOnHover}
                    />
                ))}
            </div>
        </div>
    </section>
);
