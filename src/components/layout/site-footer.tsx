import {
  ClockIcon,
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

import {
  FOOTER_BRANCHES,
  FOOTER_EXPLORE_LINKS,
  FOOTER_HOURS,
  FOOTER_HOTLINE,
  FOOTER_SOCIAL_LINKS,
} from "./footer-data";

const linkFocus =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

const sectionTitle = "font-serif text-lg font-semibold text-footer-gold";

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.25-.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
);

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M14.23 4h3.15l-6.88 7.87 8.1 9.55h-6.34l-4.97-5.8-5.69 5.8H2.96l7.36-8.47L2.59 4h6.5l4.5 5.28L14.23 4ZM12.48 18.13h1.75L7.44 5.8H5.45l7.03 12.33Z" />
  </svg>
);

const YouTubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M21.8 8.001a2.75 2.75 0 0 0-1.945-1.957C18.125 5.75 12 5.75 12 5.75s-6.125 0-7.855.294A2.75 2.75 0 0 0 2.2 8.05C1.9 9.8 1.9 12 1.9 12s0 2.2.3 3.999a2.75 2.75 0 0 0 1.945 1.957c1.73.294 7.855.294 7.855.294s6.125 0 7.855-.294a2.75 2.75 0 0 0 1.945-1.957c.3-1.8.3-3.999.3-3.999s0-2.2-.3-3.999ZM10.2 14.25v-4.5L15.125 12 10.2 14.25Z" />
  </svg>
);

const socialIconClass = "size-5";

const SocialIcon = ({ label }: { label: string }) => {
  if (label === "Instagram") {
    return <InstagramIcon className={socialIconClass} />;
  }
  if (label === "Website") {
    return <GlobeAltIcon className={socialIconClass} />;
  }
  if (label === "X (Twitter)") {
    return <XIcon className={socialIconClass} />;
  }
  if (label === "YouTube") {
    return <YouTubeIcon className={socialIconClass} />;
  }
  return <GlobeAltIcon className={socialIconClass} />;
};

const ExploreLinks = () => (
  <nav aria-label="Khám phá">
    <h2 className={sectionTitle}>Khám phá</h2>
    <ul className="mt-3 flex flex-col gap-2 text-sm text-white sm:text-base">
      {FOOTER_EXPLORE_LINKS.map((item) => (
        <li key={item.label}>
          {item.href.startsWith("/") ? (
            <Link
              href={item.href}
              className={`transition-opacity hover:opacity-80 ${linkFocus}`}
            >
              {item.label}
            </Link>
          ) : (
            <a href={item.href} className={`${linkFocus} hover:opacity-80`}>
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

const ContactBlock = () => (
  <section aria-label="Liên hệ" className="mt-8 lg:mt-10">
    <h2 className={sectionTitle}>Liên hệ</h2>
    <ul className="mt-3 flex flex-col gap-3 text-sm text-white sm:text-base">
      <li className="flex gap-2">
        <PhoneIcon
          className="mt-0.5 size-5 shrink-0 text-white"
          aria-hidden
        />
        <span>Hotline: {FOOTER_HOTLINE}</span>
      </li>
      <li className="flex gap-2">
        <ClockIcon
          className="mt-0.5 size-5 shrink-0 text-white"
          aria-hidden
        />
        <span>{FOOTER_HOURS}</span>
      </li>
    </ul>
  </section>
);

const BranchesBlock = () => (
  <section aria-label="Các chi nhánh">
    <h2 className={sectionTitle}>Các chi nhánh</h2>
    <ul className="mt-3 flex flex-col gap-3 text-sm text-white sm:text-base">
      {FOOTER_BRANCHES.map((line) => (
        <li key={line} className="flex gap-2">
          <MapPinIcon
            className="mt-0.5 size-5 shrink-0 text-white"
            aria-hidden
          />
          <span>{line}</span>
        </li>
      ))}
    </ul>
  </section>
);

const CopyrightAndSocial = () => (
  <div className="flex flex-col gap-4">
    <p className="text-xs leading-relaxed text-white/90 sm:text-sm">
      Copyright © 2020 Thanh Sen Group. All rights reserved
    </p>
    <ul className="flex flex-wrap gap-3">
      {FOOTER_SOCIAL_LINKS.map((item) => {
        const isExternal = item.href.startsWith("http");
        return (
          <li key={item.label}>
            <a
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={item.label}
              className={`flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-opacity hover:opacity-90 ${linkFocus}`}
            >
              <SocialIcon label={item.label} />
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

export const SiteFooter = () => (
  <footer
    aria-label="Chân trang"
    className="mt-auto bg-primary text-white"
  >
    <div className="custom-container px-4 py-10 sm:px-6">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8 lg:items-start">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className={`relative block h-16 w-16 shrink-0 sm:h-[72px] sm:w-[72px] ${linkFocus}`}
          >
            <Image
              src="/images/logo.svg"
              alt="Thành Sen Group"
              fill
              className="object-contain object-left"
              sizes="72px"
            />
          </Link>
          <p className="font-serif text-2xl font-bold text-footer-gold sm:text-[1.75rem]">
            Thành Sen Group
          </p>
          <div className="hidden lg:block">
            <CopyrightAndSocial />
          </div>
        </div>

        <div>
          <ExploreLinks />
          <ContactBlock />
        </div>

        <BranchesBlock />

        <div className="col-span-full border-t border-white/20 pt-8 lg:hidden">
          <CopyrightAndSocial />
        </div>
      </div>
    </div>
  </footer>
);
