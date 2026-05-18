import {
    ClipboardDocumentCheckIcon,
    HeartIcon,
} from "@heroicons/react/24/outline";
import { FiAward } from "react-icons/fi";
import { LuBrain } from "react-icons/lu";
import { LuHandshake } from "react-icons/lu";
import clsx from "clsx";
import type { ComponentType, SVGProps } from "react";
import { Reveal } from "@/components/motion/landing-motion";
import { iconClass } from "./services-section";

const FeatureRow = ({
    icon: Icon,
    title,
    body,
}: {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    title: string;
    body: string;
}) => (
    <Reveal
        as='li'
        className='flex gap-6 py-7 first:pt-0 last:pb-0 sm:gap-5 sm:py-6 sm:px-8'>
        <div className='relative h-14 w-16.25 shrink-0'>
            <div className='absolute top-1.5 left-3 w-12.5 h-12.25 rounded-sm rounded-tl-2xl rounded-br-2xl bg-rose-100 p-2.5'></div>
            <Icon
                className={clsx(
                    iconClass,
                    "absolute z-5 h-10 w-10 font-light thin-icon",
                )}
                aria-hidden
            />
        </div>
        <div className='min-w-0 flex flex-col gap-y-2'>
            <h3 className='font-serif text-mobile-heading-4 font-bold leading-snug text-neutral-black sm:text-heading-4'>
                {title}
            </h3>
            <p className='font-sans font-normal text-mobile-body-2 leading-relaxed text-[#717171] sm:text-body-3 sm:leading-normal'>
                {body}
            </p>
        </div>
    </Reveal>
);

export const HomeWhyChooseSection = () => (
    <section
        aria-labelledby='home-why-choose-heading'
        className='bg-white py-12 sm:py-16'>
        <div className='custom-container px-4 sm:px-0 flex flex-col gap-y-8'>
            <Reveal
                as='header'
                className='flex flex-col gap-y-2 mx-auto max-w-2xl text-center'>
                <h2
                    id='home-why-choose-heading'
                    className='font-serif text-mobile-heading-2 font-bold text-neutral-black sm:text-heading-3 lg:text-heading-2'>
                    Vì sao chọn{" "}
                    <span className='text-primary'>Thành Sen Group?</span>
                </h2>
                <p className='font-sans text-mobile-body-1 text-[#717171] sm:text-body-1'>
                    Những giá trị tạo nên sự khác biệt
                </p>
            </Reveal>

            <div className=''>
                <ul className='divide-y divide-primary lg:hidden'>
                    <FeatureRow
                        icon={LuBrain}
                        title='Năng lực chuyên môn vững vàng'
                        body='Đội ngũ luật sư, thẩm định viên và thừa phát lại có trình độ cao, giàu kinh nghiệm thực tiễn, am hiểu sâu sắc quy định pháp luật và thị trường.'
                    />
                    <FeatureRow
                        icon={ClipboardDocumentCheckIcon}
                        title='Tính minh bạch và chuẩn mực pháp lý'
                        body='Mọi hoạt động đều tuân thủ quy định pháp luật, đảm bảo tính khách quan, trung thực và độ tin cậy cao trong từng dịch vụ.'
                    />
                    <FeatureRow
                        icon={FiAward}
                        title='Hiệu quả và giá trị thực tiễn'
                        body='Mang lại kết quả cụ thể, khả thi và bền vững cho khách hàng, Hướng tới kết quả tối ưu cho khách hàng.'
                    />
                    <FeatureRow
                        icon={LuHandshake}
                        title='Uy tín và trách nhiệm'
                        body='Thành Sen Group xây dựng uy tín trên nền tảng minh bạch, chuẩn mực nghề nghiệp. Mỗi công việc đều được thực hiện với tinh thần trách nhiệm cao, đặt quyền lợi của khách hàng làm trọng tâm và bảo mật tuyệt đối thông tin.'
                    />
                    <FeatureRow
                        icon={HeartIcon}
                        title='Phục vụ linh hoạt, chuyên nghiệp'
                        body='Quy trình làm việc rõ ràng, nhanh chóng, thái độ phục vụ tận tâm, đáp ứng kịp thời nhu cầu của khách hàng.'
                    />
                </ul>

                <div className='hidden lg:flex lg:items-stretch lg:gap-0'>
                    <ul className='min-w-0 flex-1 divide-y divide-primary lg:pr-12'>
                        <FeatureRow
                            icon={LuBrain}
                            title='Năng lực chuyên môn vững vàng'
                            body='Đội ngũ luật sư, thẩm định viên và thừa phát lại có trình độ cao, giàu kinh nghiệm thực tiễn, am hiểu sâu sắc quy định pháp luật và thị trường.'
                        />
                        <FeatureRow
                            icon={FiAward}
                            title='Hiệu quả và giá trị thực tiễn'
                            body='Mang lại kết quả cụ thể, khả thi và bền vững cho khách hàng, Hướng tới kết quả tối ưu cho khách hàng.'
                        />
                        <FeatureRow
                            icon={HeartIcon}
                            title='Phục vụ linh hoạt, chuyên nghiệp'
                            body='Quy trình làm việc rõ ràng, nhanh chóng, thái độ phục vụ tận tâm, đáp ứng kịp thời nhu cầu của khách hàng.'
                        />
                    </ul>

                    <div
                        className='w-[0.5px] shrink-0 self-stretch bg-primary'
                        aria-hidden
                    />

                    <ul className='flex min-w-0 flex-1 flex-col justify-center divide-y divide-primary lg:pl-12'>
                        <FeatureRow
                            icon={ClipboardDocumentCheckIcon}
                            title='Tính minh bạch và chuẩn mực pháp lý'
                            body='Mọi hoạt động đều tuân thủ quy định pháp luật, đảm bảo tính khách quan, trung thực và độ tin cậy cao trong từng dịch vụ.'
                        />
                        <FeatureRow
                            icon={LuHandshake}
                            title='Uy tín và trách nhiệm'
                            body='Thành Sen Group xây dựng uy tín trên nền tảng minh bạch, chuẩn mực nghề nghiệp. Mỗi công việc đều được thực hiện với tinh thần trách nhiệm cao, đặt quyền lợi của khách hàng làm trọng tâm và bảo mật tuyệt đối thông tin.'
                        />
                    </ul>
                </div>
            </div>
        </div>
    </section>
);
