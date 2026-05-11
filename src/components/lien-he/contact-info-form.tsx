"use client";

import type { FormEvent } from "react";

import { SITE_TEL_HREF } from "@/components/layout/site-urls";

import { CONTACT_MAILTO_URL } from "./contact-urls";

const fieldFocus =
    "rounded-sm focus:border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30";

const btnFocus =
    "rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export const ContactInfoForm = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: nối Server Action hoặc API gửi form khi có yêu cầu.
    };

    return (
        <section
            aria-labelledby='contact-info-heading'
            className='bg-background text-neutral-900'>
            <div className='custom-container px-4 py-12 sm:px-6 sm:py-14 lg:py-16'>
                <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:gap-x-14'>
                    <div>
                        <h2
                            id='contact-info-heading'
                            className='font-serif text-mobile-heading-2 font-bold text-neutral-black sm:text-heading-2'>
                            Chúng tôi luôn sẵn sàng giải đáp{" "}
                            <span className='text-primary'>mọi thắc mắc</span>
                        </h2>
                        <dl className='mt-8 space-y-6'>
                            <div>
                                <dt className='text-mobile-body-2 font-normal text-[#64748B] sm:text-body-2'>
                                    Email
                                </dt>
                                <dd className='font-sans mt-1 text-mobile-body-2 font-medium text-[#0F172A] sm:text-body-2'>
                                    <a
                                        href={CONTACT_MAILTO_URL}
                                        className='decoration-neutral-400 transition-colors hover:text-primary'>
                                        sample@gmail.com
                                    </a>
                                </dd>
                            </div>
                            <div>
                                <dt className='font-sans text-mobile-body-2 font-normal text-[#64748B] sm:text-body-2'>
                                    Điện thoại
                                </dt>
                                <dd className='font-sans mt-1 text-mobile-body-2 font-medium text-[#0F172A] sm:text-body-2'>
                                    <a
                                        href={SITE_TEL_HREF}
                                        className='transition-colors hover:text-primary'>
                                        0913.294.683
                                    </a>
                                </dd>
                            </div>
                            <div>
                                <dt className='font-sans text-mobile-body-2 font-normal text-[#64748B] sm:text-body-2'>
                                    Giờ làm việc
                                </dt>
                                <dd className='font-sans mt-1 text-mobile-body-2 font-medium text-[#0F172A] sm:text-body-2'>
                                    Giờ làm việc: 08:00 - 17:00 từ thứ 2 đến thứ
                                    6
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div>
                        <form
                            onSubmit={handleSubmit}
                            className='flex flex-col gap-6'
                            noValidate>
                            <div>
                                <label
                                    htmlFor='contact-name'
                                    className='font-sans text-mobile-body-2 font-medium text-neutral-black sm:text-body-2'>
                                    Họ và tên
                                </label>
                                <input
                                    id='contact-name'
                                    name='name'
                                    type='text'
                                    autoComplete='name'
                                    placeholder='John Doe'
                                    className={`mt-1.5 w-full border-0 border-b border-neutral-300 bg-transparent py-2 text-mobile-body-1 text-[#0F172A] placeholder:text-[#89939E] sm:placeholder:text-body-2 placeholder:text-mobile-body-2 placeholder:font-normal sm:text-body-2 ${fieldFocus}`}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='contact-phone'
                                    className='font-sans text-mobile-body-2 font-medium text-neutral-black sm:text-body-2'>
                                    Số điện thoại
                                </label>
                                <input
                                    id='contact-phone'
                                    name='phone'
                                    type='tel'
                                    autoComplete='tel'
                                    placeholder='0987654321'
                                    className={`mt-1.5 w-full border-0 border-b border-neutral-300 bg-transparent py-2 text-mobile-body-1 text-[#0F172A] placeholder:text-[#89939E] sm:placeholder:text-body-2 placeholder:text-mobile-body-2 placeholder:font-normal sm:text-body-2 ${fieldFocus}`}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='contact-email'
                                    className='font-sans text-mobile-body-2 font-medium text-neutral-black  sm:text-body-2'>
                                    Email
                                </label>
                                <input
                                    id='contact-email'
                                    name='email'
                                    type='email'
                                    autoComplete='email'
                                    placeholder='johndoe@gmail.com'
                                    className={`mt-1.5 w-full border-0 border-b border-neutral-300 bg-transparent py-2 text-mobile-body-1 sm:placeholder:text-body-2 placeholder:text-mobile-body-2 placeholder:font-normal text-[#0F172A] placeholder:text-[#89939E] sm:text-body-2 ${fieldFocus}`}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='contact-message'
                                    className='font-sans text-mobile-body-2 font-medium text-neutral-black sm:text-body-2'>
                                    Câu hỏi của bạn dành cho chúng tôi
                                </label>
                                <textarea
                                    id='contact-message'
                                    name='message'
                                    rows={4}
                                    placeholder='Hãy nhập gì đó'
                                    className={`mt-1.5 w-full resize-y border-0 border-b border-neutral-300 bg-transparent py-2 text-mobile-body-1 text-[#0F172A] placeholder:text-[#89939E] sm:placeholder:text-body-2 placeholder:text-mobile-body-2 placeholder:font-normal sm:text-body-2 ${fieldFocus}`}
                                />
                            </div>
                            <button
                                type='submit'
                                className={`font-sans mt-2 inline-flex max-w-40 items-center justify-center rounded-md bg-primary px-6 py-3 sm:text-body-2 text-mobile-body-2 font-medium text-white transition-opacity hover:opacity-95 sm:w-auto ${btnFocus}`}>
                                Gửi tin nhắn
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
