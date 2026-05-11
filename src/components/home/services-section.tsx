import {
    AcademicCapIcon,
    CurrencyDollarIcon,
    DocumentTextIcon,
    PencilSquareIcon,
    ScaleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

import { HASH_LINK, PAGE_DICH_VU } from "@/components/layout/site-urls";
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
}: {
    iconKey: ServiceIconKey;
    title: string;
    content?: string;
}) => {
    const Icon = SERVICE_ICONS[iconKey];
    return (
        <div className='flex-1 flex flex-col gap-y-6'>
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

            <div
                className={clsx(
                    "flex flex-col gap-y-6",
                    !content && "mt-auto",
                )}>
                <div className='h-1 w-10 rounded-full bg-primary' aria-hidden />

                {content && (
                    <p className='font-sans sm:text-body-2 text-mobile-body-2 text-[#4D4D4D] font-normal'>
                        {content}
                    </p>
                )}
            </div>
        </div>
    );
};

const ServiceCard = ({
    href,
    iconKey,
    title,
    content,
}: {
    href: string;
    iconKey: ServiceIconKey;
    title: string;
    content?: string;
}) => {
    const className = `flex flex-col h-full md:min-h-60 min-h-42 rounded-lg bg-white px-4 py-6 shadow-md transition-shadow hover:shadow-md ${cardFocus}`;

    if (href.startsWith("/")) {
        return (
            <Link href={href} className={className}>
                <ServiceCardInner
                    iconKey={iconKey}
                    title={title}
                    content={content}
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
            />
        </a>
    );
};

export const ServicesSection = ({
    services,
}: {
    services: ServiceCardProps[];
}) => (
    <section aria-labelledby='services-heading' className='bg-white'>
        <div className='custom-container px-4 py-12 sm:px-6 lg:py-16'>
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

            <div className='mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-5'>
                {services.map((service) => (
                    <ServiceCard
                        key={service.title}
                        href={service.href}
                        iconKey={service.iconKey}
                        title={service.title}
                        content={service.content}
                    />
                ))}
            </div>
        </div>
    </section>
);
