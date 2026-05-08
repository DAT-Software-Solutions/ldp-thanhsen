import {
    AcademicCapIcon,
    ClipboardDocumentCheckIcon,
    HeartIcon,
    TrophyIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

const iconBox =
    "flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary bg-[#fdecec] sm:size-12";

const iconGlyph = "size-6 text-primary";

const FeatureRow = ({
    icon: Icon,
    title,
    body,
}: {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    title: string;
    body: string;
}) => (
    <li className='flex gap-4 py-7 first:pt-0 last:pb-0 sm:gap-5 sm:py-8 lg:py-9'>
        <div className={iconBox}>
            <Icon className={iconGlyph} aria-hidden />
        </div>
        <div className='min-w-0'>
            <h3 className='text-mobile-heading-4 font-bold leading-snug text-neutral-black sm:text-heading-4'>
                {title}
            </h3>
            <p className='mt-2 text-mobile-body-2 leading-relaxed text-[#666666] sm:text-body-3 sm:leading-normal'>
                {body}
            </p>
        </div>
    </li>
);

export const HomeWhyChooseSection = () => (
    <section
        aria-labelledby='home-why-choose-heading'
        className='bg-white py-12 sm:py-14 lg:py-20'>
        <div className='custom-container px-4 sm:px-6'>
            <header className='mx-auto max-w-2xl text-center'>
                <h2
                    id='home-why-choose-heading'
                    className=' text-mobile-heading-2 font-bold text-[#2D3436] sm:text-heading-3 lg:text-heading-2'>
                    Vì sao chọn{" "}
                    <span className='text-primary'>Thành Sen Group</span>?
                </h2>
                <p className='mt-3 text-mobile-body-1 text-[#666666] sm:text-body-2'>
                    Những giá trị tạo nên sự khác biệt
                </p>
            </header>

            <div className='mt-10 lg:mt-12'>
                <ul className='divide-y divide-[#e8e0e0] lg:hidden'>
                    <FeatureRow
                        icon={AcademicCapIcon}
                        title='Năng lực chuyên môn vững vàng'
                        body='Đội ngũ luật sư, thẩm định viên và thừa phát lại có trình độ cao, giàu kinh nghiệm thực tiễn, am hiểu sâu sắc quy định pháp luật và thị trường.'
                    />
                    <FeatureRow
                        icon={TrophyIcon}
                        title='Hiệu quả và giá trị thực tiễn'
                        body='Đảm bảo mang lại kết quả rõ ràng, khả thi và bền vững trong từng vụ việc cụ thể. Luôn hướng đến tối ưu lợi ích và giá trị thực tiễn lâu dài cho khách hàng.'
                    />
                    <FeatureRow
                        icon={HeartIcon}
                        title='Phục vụ linh hoạt, chuyên nghiệp'
                        body='Quy trình làm việc linh hoạt, rõ ràng và tối ưu theo nhu cầu khách hàng. Đội ngũ luôn phản hồi nhanh chóng, phục vụ tận tâm và đảm bảo hiệu quả cao.'
                    />
                    <FeatureRow
                        icon={ClipboardDocumentCheckIcon}
                        title='Tính minh bạch và chuẩn mực pháp lý'
                        body='Mọi hoạt động đều tuân thủ quy định pháp luật, đảm bảo tính khách quan, trung thực và độ tin cậy cao trong từng dịch vụ.'
                    />
                    <FeatureRow
                        icon={UsersIcon}
                        title='Uy tín và trách nhiệm'
                        body='Chúng tôi xây dựng uy tín trên nền tảng minh bạch, chuẩn mực nghề nghiệp, đặt quyền lợi của khách hàng làm trọng tâm và bảo mật tuyệt đối thông tin.'
                    />
                </ul>

                <div className='hidden lg:flex lg:items-stretch lg:gap-0'>
                    <ul className='min-w-0 flex-1 divide-y divide-[#e8e0e0] lg:pr-12'>
                        <FeatureRow
                            icon={AcademicCapIcon}
                            title='Năng lực chuyên môn vững vàng'
                            body='Đội ngũ luật sư, thẩm định viên và thừa phát lại có trình độ cao, giàu kinh nghiệm thực tiễn, am hiểu sâu sắc quy định pháp luật và thị trường.'
                        />
                        <FeatureRow
                            icon={TrophyIcon}
                            title='Hiệu quả và giá trị thực tiễn'
                            body='Đảm bảo mang lại kết quả rõ ràng, khả thi và bền vững trong từng vụ việc cụ thể. Luôn hướng đến tối ưu lợi ích và giá trị thực tiễn lâu dài cho khách hàng.'
                        />
                        <FeatureRow
                            icon={HeartIcon}
                            title='Phục vụ linh hoạt, chuyên nghiệp'
                            body='Quy trình làm việc linh hoạt, rõ ràng và tối ưu theo nhu cầu khách hàng. Đội ngũ luôn phản hồi nhanh chóng, phục vụ tận tâm và đảm bảo hiệu quả cao.'
                        />
                    </ul>

                    <div
                        className='w-px shrink-0 self-stretch bg-[#e8e0e0]'
                        aria-hidden
                    />

                    <ul className='flex min-w-0 flex-1 flex-col justify-center divide-y divide-[#e8e0e0] lg:pl-12'>
                        <FeatureRow
                            icon={ClipboardDocumentCheckIcon}
                            title='Tính minh bạch và chuẩn mực pháp lý'
                            body='Mọi hoạt động đều tuân thủ quy định pháp luật, đảm bảo tính khách quan, trung thực và độ tin cậy cao trong từng dịch vụ.'
                        />
                        <FeatureRow
                            icon={UsersIcon}
                            title='Uy tín và trách nhiệm'
                            body='Chúng tôi xây dựng uy tín trên nền tảng minh bạch, chuẩn mực nghề nghiệp, đặt quyền lợi của khách hàng làm trọng tâm và bảo mật tuyệt đối thông tin.'
                        />
                    </ul>
                </div>
            </div>
        </div>
    </section>
);
