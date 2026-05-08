import Image from "next/image";
import Link from "next/link";

import { HASH_LINK } from "@/components/layout/site-urls";

import { GIOI_THIEU_NEWS_IMAGE_SRCS } from "./gioi-thieu-urls";

const cardShell =
  "flex h-full flex-col overflow-hidden rounded-xl bg-[#f4f6f9] shadow-sm ring-1 ring-neutral-200/60 transition-shadow hover:shadow-md";

const cardFocus =
  "rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export const GioiThieuNewsSection = () => (
  <section
    aria-labelledby="gioi-thieu-news-heading"
    className="bg-white py-12 sm:py-14 lg:py-20"
  >
    <div className="custom-container px-4 sm:px-6">
      <header className="mb-8 text-center lg:mb-10 lg:text-left">
        <h2
          id="gioi-thieu-news-heading"
          className="font-serif text-mobile-heading-2 font-semibold text-[#2D3436] sm:text-heading-3 lg:text-heading-2"
        >
          Tin tức <span className="text-primary">mới nhất</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-mobile-body-1 text-[#666666] sm:text-body-2 lg:mx-0">
          Cập nhật các thông tin mới nhất về luật pháp từ chúng tôi
        </p>
      </header>

      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-6">
        {GIOI_THIEU_NEWS_IMAGE_SRCS.map((src, index) => (
          <li key={`gioi-thieu-news-${index}`}>
            <Link
              href={HASH_LINK}
              className={`${cardShell} ${cardFocus} block`}
            >
              <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden bg-neutral-200">
                <Image
                  src={src}
                  alt="Minh họa tin tức"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 45vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4 lg:p-5">
                <h3 className="font-serif text-mobile-heading-4 font-bold leading-snug text-[#2D3436] sm:text-heading-4">
                  Tiêu đề 1
                </h3>
                <p className="line-clamp-3 text-mobile-body-2 leading-snug text-[#666666] sm:text-body-3 sm:leading-normal">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
