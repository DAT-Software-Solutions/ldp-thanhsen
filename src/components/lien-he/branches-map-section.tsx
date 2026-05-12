"use client";

import { useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

type Branch = {
    id: string;
    name: string;
    address: string;
    mapSrc: string;
};

type BranchGroup = {
    title: string;
    branches: Branch[];
};

const createGoogleMapEmbedUrl = (query: string) =>
    `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

const branchGroups: BranchGroup[] = [
    {
        title: "Chi nhánh miền Nam",
        branches: [
            {
                id: "ho-chi-minh",
                name: "Trụ sở chính",
                address: "Số 20 Tiền Giang, Tân Sơn Hòa, Hồ Chí Minh",
                mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.039453284104!2d106.66338807570354!3d10.808290258603813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529234276f557%3A0x37e4113f8a420ca8!2zU-G7kSAyMCBUaeG7gW4gR2lhbmcsIFTDom4gU8ahbiBIw7JhLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1778571660527!5m2!1svi!2s",
            },
            {
                id: "vung-tau",
                name: "CN Vũng Tàu",
                address: "1C Vòng xoay cửa lấp, Phước Thắng, Hồ Chí Minh",
                mapSrc: createGoogleMapEmbedUrl(
                    "1C Vòng xoay cửa lấp, Phước Thắng, Hồ Chí Minh",
                ),
            },
            {
                id: "dong-nai",
                name: "CN Đồng Nai",
                address: "Quốc lộ 13, Phường Bình Long, Tỉnh Đồng Nai",
                mapSrc: createGoogleMapEmbedUrl(
                    "Quốc lộ 13, Phường Bình Long, Tỉnh Đồng Nai",
                ),
            },
        ],
    },
    {
        title: "Chi nhánh miền Trung",
        branches: [
            {
                id: "ha-tinh",
                name: "CN Hà Tĩnh",
                address: "Số 2, ngõ 1, Xuân Diệu, Phường Thành Sen, Hà Tĩnh",
                mapSrc: createGoogleMapEmbedUrl(
                    "Số 2, ngõ 1, Xuân Diệu, Phường Thành Sen, Hà Tĩnh",
                ),
            },
            {
                id: "quy-nhon",
                name: "CN Quy Nhơn",
                address: "Số 30B Tăng Bạt Hổ, Phường Quy Nhơn, Gia Lai",
                mapSrc: createGoogleMapEmbedUrl(
                    "Số 30B Tăng Bạt Hổ, Phường Quy Nhơn, Gia Lai",
                ),
            },
        ],
    },
    {
        title: "Chi nhánh miền Bắc",
        branches: [
            {
                id: "ha-noi",
                name: "CN Hà Nội",
                address: "Số 01 ngõ 33 Phạm Tuấn Tài, Phường Cầu Giấy, Hà Nội",
                mapSrc: createGoogleMapEmbedUrl(
                    "Số 01 ngõ 33 Phạm Tuấn Tài, Phường Cầu Giấy, Hà Nội",
                ),
            },
        ],
    },
];

const branches = branchGroups.flatMap((group) => group.branches);

export const BranchesMapSection = () => {
    const [selectedBranchId, setSelectedBranchId] = useState(branches[0].id);
    const selectedBranch =
        branches.find((branch) => branch.id === selectedBranchId) ??
        branches[0];

    return (
        <section
            aria-labelledby='branches-heading'
            className='bg-surface-muted text-neutral-900'>
            <div className='custom-container py-12 sm:py-16 px-4 sm:px-0'>
                <header className='flex flex-col gap-y-2 mx-auto max-w-2xl text-center'>
                    <h2
                        id='branches-heading'
                        className='font-serif text-mobile-heading-2 font-semibold text-neutral-black sm:text-heading-3 md:text-heading-2'>
                        Hệ thống chi nhánh{" "}
                        <span className='text-primary'>trên toàn quốc</span>
                    </h2>
                    <p className='font-sans text-mobile-body-1 text-[#717171] sm:text-body-1 font-normal'>
                        Mạng lưới văn phòng rộng khắp cả nước, đáp ứng nhu cầu
                        pháp lý nhanh chóng ở mọi khu vực
                    </p>
                </header>

                <div className='mt-10 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200/80 lg:mt-12'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-stretch'>
                        <div className='border-b border-neutral-100 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:border-neutral-100'>
                            <div className='flex flex-col gap-y-4 sm:gap-y-8'>
                                {branchGroups.map((group) => (
                                    <div key={group.title}>
                                        <h3 className='font-serif text-mobile-heading-4 font-semibold text-neutral-black sm:text-heading-4'>
                                            {group.title}
                                        </h3>
                                        <ul className='mt-4 space-y-3'>
                                            {group.branches.map((branch) => {
                                                const isSelected =
                                                    branch.id ===
                                                    selectedBranch.id;

                                                return (
                                                    <li key={branch.id}>
                                                        <button
                                                            type='button'
                                                            aria-pressed={
                                                                isSelected
                                                            }
                                                            onClick={() =>
                                                                setSelectedBranchId(
                                                                    branch.id,
                                                                )
                                                            }
                                                            className={clsx(
                                                                "group flex w-full gap-2 rounded-xl border p-3 text-left transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                                                                isSelected
                                                                    ? "border-primary/30 bg-primary/5"
                                                                    : "border-transparent hover:border-primary/20 hover:bg-primary/5",
                                                            )}>
                                                            <MapPinIcon
                                                                className={clsx(
                                                                    "mt-0.5 size-5 shrink-0 transition-colors",
                                                                    isSelected
                                                                        ? "text-primary"
                                                                        : "text-primary/75 group-hover:text-primary",
                                                                )}
                                                                aria-hidden
                                                            />
                                                            <span className='font-sans text-mobile-body-2 text-neutral-700 sm:text-body-2'>
                                                                <span className='font-medium text-neutral-black'>
                                                                    {
                                                                        branch.name
                                                                    }
                                                                    :{" "}
                                                                </span>
                                                                {branch.address}
                                                            </span>
                                                        </button>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='relative min-h-80 min-w-0 bg-neutral-100 lg:min-h-105'>
                            <iframe
                                key={selectedBranch.id}
                                title={`Bản đồ vị trí ${selectedBranch.name}`}
                                src={selectedBranch.mapSrc}
                                className='absolute inset-0 h-full w-full border-0 grayscale-35 contrast-[0.95]'
                                allowFullScreen
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
