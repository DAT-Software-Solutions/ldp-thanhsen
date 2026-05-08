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

type ServiceIconKey =
    | "lawyer"
    | "bailiff"
    | "arbitration"
    | "valuation"
    | "auction";

const cardFocus =
    "rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

const iconClass = "size-7 text-primary";

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
}: {
    iconKey: ServiceIconKey;
    title: string;
}) => {
    const Icon = SERVICE_ICONS[iconKey];
    return (
        <>
            <div className='flex-1 flex flex-col gap-y-3'>
                <div className='relative h-14'>
                    <div className='absolute top-1.5 left-3.5 w-12.5 h-12.25 rounded-sm rounded-tl-2xl rounded-br-2xl shadow bg-rose-100 p-2.5'></div>
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
                className='mt-auto h-1 w-10 rounded-full bg-primary'
                aria-hidden
            />
        </>
    );
};

const ServiceCard = ({
    href,
    iconKey,
    title,
}: {
    href: string;
    iconKey: ServiceIconKey;
    title: string;
}) => {
    const className = `flex flex-col h-full min-h-60 rounded-lg bg-white px-4 py-6 shadow transition-shadow hover:shadow-md ${cardFocus}`;

    if (href.startsWith("/")) {
        return (
            <Link href={href} className={className}>
                <ServiceCardInner iconKey={iconKey} title={title} />
            </Link>
        );
    }

    return (
        <a href={href} className={className}>
            <ServiceCardInner iconKey={iconKey} title={title} />
        </a>
    );
};

export const ServicesSection = () => (
    <section aria-labelledby='services-heading' className='bg-white'>
        <div className='custom-container px-4 py-12 sm:px-6 lg:py-16'>
            <header className='flex flex-col gap-y-2 mx-auto max-w-2xl items-center text-center'>
                <h2
                    id='services-heading'
                    className='font-serif text-heading-2 lg:text-heading-2 font-bold text-neutral-black'>
                    Dịch vụ của <span className='text-primary'>chúng tôi</span>
                </h2>
                <p className='font-sans w-full text-neutral-600 font-regular text-body-1'>
                    Thành Sen Group luôn sẵn sàng đem lại các dịch vụ pháp lý
                    chất lượng cao tới quý khách hàng
                </p>
            </header>

            <div className='mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-5'>
                <ServiceCard
                    href={PAGE_DICH_VU}
                    iconKey='lawyer'
                    title='Dịch vụ'
                />
                <ServiceCard
                    href={HASH_LINK}
                    iconKey='bailiff'
                    title='Thừa phát lại'
                />
                <ServiceCard
                    href={HASH_LINK}
                    iconKey='arbitration'
                    title='Trọng tài thương mại'
                />
                <ServiceCard
                    href={HASH_LINK}
                    iconKey='valuation'
                    title='Thẩm định giá'
                />
                <ServiceCard
                    href={HASH_LINK}
                    iconKey='auction'
                    title='Đấu giá'
                />
            </div>
        </div>
    </section>
);
