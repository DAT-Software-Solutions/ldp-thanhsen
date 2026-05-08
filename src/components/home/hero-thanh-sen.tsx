import Image from "next/image";
import Link from "next/link";

import { CTA_HREF } from "@/components/layout/site-urls";

import { HERO_ILLUSTRATION_SRC, ZALO_CHAT_HREF } from "./home-urls";

const btnFocus =
  "rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export const HeroThanhSen = () => (
  <section
    aria-labelledby="hero-heading"
    className="bg-[#F8F9FA] text-[#2D3436]"
  >
    <div className="custom-container px-4 py-12 sm:px-6 sm:py-12 lg:py-16">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1
            id="hero-heading"
            className="font-serif text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl"
          >
            <span className="text-[#2D3436]">Thành Sen </span>
            <span className="text-primary">Group</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm text-neutral-700 sm:text-base">
            Là đơn vị tiên phong trong lĩnh vực pháp lý tại Việt Nam, Thành Sen
            Group cam kết mang đến giải pháp toàn diện, bảo vệ tối đa quyền lợi
            của khách hàng bằng sự tận tâm và chuyên nghiệp.
          </p>
          <div className="mt-8 flex w-full justify-center gap-3 sm:w-auto lg:justify-start">
            <Link
              href={CTA_HREF}
              className={`inline-flex w-full min-w-[140px] items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-95 sm:w-auto ${btnFocus}`}
            >
              Liên hệ ngay
            </Link>
            <a
              href={ZALO_CHAT_HREF}
              className={`inline-flex w-full min-w-[140px] items-center justify-center rounded-lg border border-primary bg-transparent px-5 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90 sm:w-auto ${btnFocus}`}
            >
              Tư vấn qua Zalo
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[min(100%,28rem)] lg:max-w-lg">
            <Image
              src={HERO_ILLUSTRATION_SRC}
              alt="Minh họa cân công lý, sách luật và búa gỗ"
              width={501}
              height={376}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
