import {
    AcademicCapIcon,
    CurrencyDollarIcon,
    DocumentTextIcon,
    PencilSquareIcon,
    PhoneIcon,
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
import { PAGE_LIEN_HE } from "@/components/layout/site-urls";

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
    "rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

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
                <div className='relative h-14 w-16.25 shrink-0'>
                    <div className={styles.iconBackplate} aria-hidden></div>
                    <Icon
                        className={clsx(
                            styles.icon,
                            iconClass,
                            "absolute z-50 h-10 w-10 font-light thin-icon",
                        )}
                        aria-hidden
                    />
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

const ServiceCtaCard = () => (
    <Link
        href={PAGE_LIEN_HE}
        className={clsx(styles.ctaCard, cardFocus)}
        aria-label='Liên hệ tư vấn dịch vụ'>
        <div className={styles.ctaInner}>
            <div className='flex flex-col gap-y-4'>
                <div className='relative h-14 w-16.25 shrink-0'>
                    <div className={styles.ctaIconBackplate} aria-hidden></div>
                    <PhoneIcon
                        className='absolute z-5 h-10 w-10 font-light text-white thin-icon'
                        aria-hidden
                    />
                </div>
                <h4 className='font-serif md:text-heading-4 text-mobile-heading-4 font-semibold leading-snug text-white'>
                    Cần được tư vấn hỗ trợ về các dịch vụ?
                    <br />
                    Liên hệ ngay với chúng tôi
                </h4>
            </div>

            <button
                className={clsx(styles.ctaButton, "md:mt-auto cursor-pointer mt-4")}>
                Liên hệ ngay
            </button>
        </div>
    </Link>
);

export const ServicesSection = ({
    services,
    revealContentOnHover = false,
    background = "bg-white",
}: {
    services: ServiceCardProps[];
    revealContentOnHover?: boolean;
    background?: "bg-white" | "bg-surface-muted";
}) => (
    <section aria-labelledby='services-heading' className={clsx(background)}>
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

            <RevealList className='grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3'>
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
                <RevealItem className='h-full'>
                    <ServiceCtaCard />
                </RevealItem>
            </RevealList>
        </div>
    </section>
);
