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
      <div className="mb-4 w-fit rounded-lg bg-rose-100 p-2.5">
        <Icon className={iconClass} aria-hidden />
      </div>
      <h3 className="font-serif text-base font-semibold text-[#2D3436] sm:text-lg">
        {title}
      </h3>
      <div className="mt-3 h-1 w-10 rounded-full bg-primary" aria-hidden />
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
  const className = `block h-full rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md ${cardFocus}`;

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
  <section aria-labelledby="services-heading" className="bg-[#F8F9FA]">
    <div className="custom-container px-4 py-12 sm:px-6 lg:py-16">
      <header className="mx-auto max-w-2xl text-center">
        <h2
          id="services-heading"
          className="font-serif text-2xl font-semibold tracking-tight text-[#2D3436] sm:text-3xl"
        >
          Dịch vụ của <span className="text-primary">chúng tôi</span>
        </h2>
        <p className="mt-4 text-sm text-neutral-600 sm:text-base">
          Thành Sen Group luôn sẵn sàng đem lại các dịch vụ pháp lý chất lượng cao tới quý khách hàng
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5">
        <ServiceCard href={PAGE_DICH_VU} iconKey="lawyer" title="Dịch vụ" />
        <ServiceCard href={HASH_LINK} iconKey="bailiff" title="Thừa phát lại" />
        <ServiceCard
          href={HASH_LINK}
          iconKey="arbitration"
          title="Trọng tài thương mại"
        />
        <ServiceCard href={HASH_LINK} iconKey="valuation" title="Thẩm định giá" />
        <ServiceCard href={HASH_LINK} iconKey="auction" title="Đấu giá" />
      </div>
    </div>
  </section>
);
