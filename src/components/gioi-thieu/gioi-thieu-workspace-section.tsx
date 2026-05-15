"use client";

import Image from "next/image";

import { SOFT_IMAGE_PLACEHOLDER } from "@/components/layout/image-placeholders";
import { Reveal, RevealItem } from "@/components/motion/landing-motion";

import { GIOI_THIEU_WORKSPACE_IMAGES } from "./gioi-thieu-urls";

const workspaceImageClass =
    "relative min-h-52 overflow-hidden rounded-lg bg-neutral-200 sm:min-h-64 lg:min-h-0";

export const GioiThieuWorkspaceSection = () => (
    <section
        aria-labelledby='gioi-thieu-workspace-heading'
        className='bg-white py-12 sm:py-16'>
        <div className='custom-container px-4 sm:px-0 flex flex-col gap-y-8'>
            <Reveal
                as='header'
                className='mx-auto flex max-w-3xl flex-col items-center gap-y-2 text-center'>
                <h2
                    id='gioi-thieu-workspace-heading'
                    className='font-serif text-mobile-heading-2 font-bold leading-tight text-neutral-black sm:text-heading-2'>
                    <span className='block'>
                        Không Gian{" "}
                        <span className='text-primary'>Chuyên Nghiệp</span>
                    </span>
                    <span className='block'>
                        Dịch Vụ <span className='text-primary'>Tận Tâm</span>
                    </span>
                </h2>
                <p className='font-sans text-mobile-body-2 text-[#717171] sm:text-body-2'>
                    Không gian làm việc tại Thành Sen Group
                </p>
            </Reveal>

            <div className='grid md:grid-cols-2 gap-4'>
                <div className='flex flex-col gap-y-4'>
                    <RevealItem
                        className={`${workspaceImageClass} aspect-16/10 lg:aspect-auto md:h-87.25`}>
                        <Image
                            src={GIOI_THIEU_WORKSPACE_IMAGES[0].src}
                            alt={GIOI_THIEU_WORKSPACE_IMAGES[0].alt}
                            fill
                            className='object-cover'
                            placeholder={SOFT_IMAGE_PLACEHOLDER}
                            decoding='async'
                        />
                    </RevealItem>

                    <RevealItem
                        className={`${workspaceImageClass} aspect-16/10 lg:aspect-auto lg:row-span-1 md:h-65`}>
                        <Image
                            src={GIOI_THIEU_WORKSPACE_IMAGES[2].src}
                            alt={GIOI_THIEU_WORKSPACE_IMAGES[2].alt}
                            fill
                            className='object-cover'
                            placeholder={SOFT_IMAGE_PLACEHOLDER}
                            decoding='async'
                        />
                    </RevealItem>
                </div>

                <div className='flex flex-col gap-y-4'>
                    <RevealItem
                        className={`${workspaceImageClass} aspect-16/10 lg:aspect-auto md:h-65`}>
                        <Image
                            src={GIOI_THIEU_WORKSPACE_IMAGES[1].src}
                            alt={GIOI_THIEU_WORKSPACE_IMAGES[1].alt}
                            fill
                            className='object-cover'
                            placeholder={SOFT_IMAGE_PLACEHOLDER}
                            decoding='async'
                        />
                    </RevealItem>

                    <RevealItem
                        className={`${workspaceImageClass} aspect-16/10 lg:aspect-auto md:h-87.25`}>
                        <Image
                            src={GIOI_THIEU_WORKSPACE_IMAGES[3].src}
                            alt={GIOI_THIEU_WORKSPACE_IMAGES[3].alt}
                            fill
                            className='object-cover'
                            placeholder={SOFT_IMAGE_PLACEHOLDER}
                            decoding='async'
                        />
                    </RevealItem>
                </div>
            </div>
        </div>
    </section>
);
