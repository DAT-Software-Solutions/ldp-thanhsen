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

import {
    Reveal,
    RevealItem,
    RevealList,
} from "@/components/motion/landing-motion";

import styles from "./services-section.module.css";

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
        <div className={styles.cardInner}>
            <div className={styles.summary}>
                <div className={styles.iconWrap}>
                    <div className={styles.iconBackplate} aria-hidden />
                    <Icon className={styles.icon} aria-hidden />
                </div>
                <h4
                    className={clsx(
                        styles.title,
                        "font-serif text-heading-4 font-semibold",
                    )}>
                    {title}
                </h4>
            </div>

            <div className={styles.underline} aria-hidden />

            {content && (
                <p
                    className={clsx(
                        styles.content,
                        "font-sans text-mobile-body-2 font-normal sm:text-body-2",
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
        styles.card,
        revealContentOnHover && styles.reveal,
        cardFocus,
    );

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
    revealContentOnHover = false,
}: {
    services: ServiceCardProps[];
    revealContentOnHover?: boolean;
}) => (
    <section aria-labelledby='services-heading' className='bg-white'>
        <div className='custom-container px-4 sm:px-0 py-12 lg:py-16 flex flex-col gap-y-8'>
            <Reveal
                as='header'
                className='flex flex-col gap-y-2 mx-auto max-w-2xl items-center text-center'>
                <h2
                    id='services-heading'
                    className='font-serif text-mobile-heading-2 md:text-heading-2 font-bold text-neutral-black'>
                    Dịch vụ của <span className='text-primary'>chúng tôi</span>
                </h2>
                <p className='font-sans w-full text-neutral-600 font-normal md:text-body-1 text-mobile-body-1'>
                    Thành Sen Group luôn sẵn sàng đem lại các dịch vụ pháp lý
                    chất lượng cao tới quý khách hàng
                </p>
            </Reveal>

            <RevealList className='grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
                {services.map((service) => (
                    <RevealItem key={service.title} className='h-full'>
                        <ServiceCard
                            href={service.href}
                            iconKey={service.iconKey}
                            title={service.title}
                            content={service.content}
                            revealContentOnHover={revealContentOnHover}
                        />
                    </RevealItem>
                ))}
            </RevealList>
        </div>
    </section>
);
