import Image from "next/image";

import {
  GIOI_THIEU_INTRO,
  GIOI_THIEU_MISSION,
  GIOI_THIEU_QUOTE,
} from "./gioi-thieu-content-data";

const sectionShell = "bg-[#F5F6F7]";
const proseTitle =
  "font-serif text-mobile-heading-3 font-bold text-[#2D3436] sm:text-heading-3";
const proseBody =
  "mt-4 text-mobile-body-1 text-[#555555] sm:text-body-2";

const roundedMedia = "overflow-hidden rounded-[14px] sm:rounded-2xl";

const ImageTextRow = ({
  imageSrc,
  imageAlt,
  title,
  body,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  body: string;
}) => (
  <section className={`${sectionShell} py-12 sm:py-14 lg:py-20`}>
    <div className="custom-container px-4 sm:px-6">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className={`relative aspect-[4/3] w-full max-lg:mx-auto max-lg:max-w-2xl ${roundedMedia}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="text-left">
          <h2 className={proseTitle}>{title}</h2>
          <p className={proseBody}>{body}</p>
        </div>
      </div>
    </div>
  </section>
);

const QuoteOverlapSection = () => (
  <section
    className={`relative overflow-hidden ${sectionShell} py-10 sm:py-12 lg:min-h-[min(90vh,520px)] lg:py-0`}
  >
    <div
      className={`relative z-0 mx-auto aspect-[16/11] w-full max-w-2xl overflow-hidden sm:mx-6 lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:aspect-auto lg:max-w-none lg:h-full lg:w-[min(56vw,840px)] ${roundedMedia} lg:rounded-none lg:rounded-l-2xl`}
    >
      <Image
        src={GIOI_THIEU_QUOTE.imageSrc}
        alt={GIOI_THIEU_QUOTE.imageAlt}
        fill
        className="object-cover object-[center_25%]"
        sizes="(max-width: 1024px) 100vw, 56vw"
      />
    </div>
    <div className="custom-container relative z-10 px-4 sm:px-6 lg:flex lg:min-h-[min(90vh,520px)] lg:items-center">
      <div className="mx-auto w-full max-w-xl max-lg:-mt-12 max-lg:px-0.5 sm:max-lg:-mt-14 lg:mx-0 lg:max-w-[min(100%,30rem)] lg:py-14 xl:max-w-xl">
        <figure className="rounded-[14px] bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:rounded-2xl sm:p-8 lg:p-10">
          <blockquote className="font-serif text-mobile-heading-3 font-bold text-[#2D3436] sm:text-[26px] lg:text-heading-3">
            “{GIOI_THIEU_QUOTE.quote}”
          </blockquote>
          <figcaption className="mt-5 text-mobile-body-2 text-[#666666] sm:text-body-3">
            {GIOI_THIEU_QUOTE.attribution}
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
);

export const GioiThieuSections = () => (
  <>
    <ImageTextRow
      imageSrc={GIOI_THIEU_INTRO.imageSrc}
      imageAlt={GIOI_THIEU_INTRO.imageAlt}
      title={GIOI_THIEU_INTRO.title}
      body={GIOI_THIEU_INTRO.body}
    />
    <QuoteOverlapSection />
    <ImageTextRow
      imageSrc={GIOI_THIEU_MISSION.imageSrc}
      imageAlt={GIOI_THIEU_MISSION.imageAlt}
      title={GIOI_THIEU_MISSION.title}
      body={GIOI_THIEU_MISSION.body}
    />
  </>
);
