import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const HERO_BG_IMAGE = "/images/contact-hero-bg.jpg";
const HERO_BG_ALT = "Phông nền kệ sách pháp lý";

export type PageHeroBreadcrumbItem = {
  label: string;
  /** Bỏ qua ở mục cuối — luôn hiển thị dạng trang hiện tại (vàng). */
  href?: string;
};

export type PageHeroProps = {
  title: string;
  breadcrumbItems: PageHeroBreadcrumbItem[];
  /** Mặc định `page-hero-heading`; đặt khác nếu cần unique trên trang. */
  headingId?: string;
};

export const PageHero = ({
  title,
  breadcrumbItems,
  headingId = "page-hero-heading",
}: PageHeroProps) => (
  <section
    aria-labelledby={headingId}
    className="relative min-h-[220px] w-full overflow-hidden sm:min-h-[280px] lg:min-h-[320px]"
  >
    <Image
      src={HERO_BG_IMAGE}
      alt={HERO_BG_ALT}
      fill
      priority
      className="object-cover"
      sizes="100vw"
    />
    <div className="absolute inset-0 bg-black/55" aria-hidden />
    <div className="relative z-10 flex flex-col items-center justify-center px-4 py-14 text-center sm:py-16 lg:py-20">
      <h1
        id={headingId}
        className="font-serif text-mobile-heading-1 font-bold text-white sm:text-heading-3 lg:text-heading-2"
      >
        {title}
      </h1>
      <nav
        aria-label="Breadcrumb"
        className="mt-3 text-mobile-body-2 text-white/95 sm:text-body-3"
      >
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          return (
            <Fragment key={`${item.label}-${index}`}>
              {index > 0 ? (
                <span className="mx-1.5 text-white/80" aria-hidden>
                  /
                </span>
              ) : null}
              {isLast ? (
                <span className="text-footer-gold">{item.label}</span>
              ) : item.href ? (
                <Link href={item.href} className="transition-opacity hover:opacity-90">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </Fragment>
          );
        })}
      </nav>
    </div>
  </section>
);
