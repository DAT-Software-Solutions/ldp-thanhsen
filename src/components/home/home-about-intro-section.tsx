import Image from "next/image";
import Link from "next/link";

import { PAGE_GIOI_THIEU } from "@/components/layout/site-urls";

import {
  HOME_ABOUT_IMAGE_SRC_DESKTOP,
  HOME_ABOUT_IMAGE_SRC_MOBILE,
} from "./home-urls";

const btnFocus =
  "rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

const roundedFigure = "overflow-hidden rounded-xl sm:rounded-2xl";

export const HomeAboutIntroSection = () => (
  <section
    aria-labelledby="home-about-intro-heading"
    className="bg-[#F8F9FA] py-12 sm:py-14 lg:py-20"
  >
    <div className="custom-container px-4 sm:px-6">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
        <div className="flex flex-col items-start text-left lg:py-4">
          <h2
            id="home-about-intro-heading"
            className="font-serif text-mobile-heading-2 font-bold leading-snug text-[#2D3436] sm:text-heading-3 lg:text-heading-2"
          >
            Giới thiệu về <span className="text-primary">chúng tôi</span>
          </h2>
          <p className="mt-4 max-w-xl text-mobile-body-1 leading-relaxed text-[#555555] sm:text-body-2 lg:mt-5">
            Tiền thân của Thành Sen là hãng luật Thành Sen được thành lập vào
            năm 2011. Sau gần 15 năm hình thành và phát triển, hiện nay hãng
            luật Thành Sen đã có hàng chục chi nhánh trên toàn quốc và không
            ngừng phát triển nhằm đáp ứng nhu cầu về pháp lý của doanh nghiệp và
            người dân.
          </p>
          <Link
            href={PAGE_GIOI_THIEU}
            className={`mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-95 sm:mt-8 sm:text-base ${btnFocus}`}
          >
            Tìm hiểu thêm
          </Link>
        </div>

        <div className="relative w-full">
          <div
            className={`relative aspect-4/3 w-full lg:hidden ${roundedFigure}`}
          >
            <Image
              src={HOME_ABOUT_IMAGE_SRC_MOBILE}
              alt="Không gian làm việc và họp chuyên nghiệp tại Thành Sen Group"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div
            className={`relative hidden aspect-4/3 w-full lg:block ${roundedFigure}`}
          >
            <Image
              src={HOME_ABOUT_IMAGE_SRC_DESKTOP}
              alt="Không gian làm việc và họp chuyên nghiệp tại Thành Sen Group"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
