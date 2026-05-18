"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { SOFT_IMAGE_PLACEHOLDER } from "@/components/layout/image-placeholders";
import { PAGE_LUAT_SU } from "@/components/layout/site-urls";
import {
    Reveal,
    RevealItem,
    RevealList,
} from "@/components/motion/landing-motion";

import { GIOI_THIEU_NEWS_IMAGE_SRCS } from "./gioi-thieu-urls";

const newsData = [
    {
        id: 1,
        title: "Vai trò của luật sư bào chữa trong vụ án hình sự",
        image: GIOI_THIEU_NEWS_IMAGE_SRCS[0],
        content: `Trong lĩnh vực hình sự, đội ngũ luật sư của Thành Sen Group tham gia bào chữa cho người bị buộc tội. Với tính chất nhạy cảm và phức tạp của các vụ án hình sự, sự tham gia của luật sư ngay từ giai đoạn đầu có ý nghĩa đặc biệt quan trọng, giúp định hướng chiến lược pháp lý, thu thập và đánh giá chứng cứ, đồng thời hạn chế những rủi ro pháp lý có thể phát sinh.

Trước hết, luật sư bào chữa là người bảo vệ quyền và lợi ích hợp pháp của bị can, bị cáo trong suốt quá trình giải quyết vụ án hình sự. Khi tham gia tố tụng, luật sư có trách nhiệm giải thích cho thân chủ hiểu rõ các quyền và nghĩa vụ của mình theo quy định pháp luật. Đồng thời, luật sư giúp bảo đảm người bị buộc tội không bị ép cung, mớm cung, dùng nhục hình hoặc bị xâm phạm các quyền cơ bản khác.

Ngoài ra, tại phiên tòa, luật sư bào chữa đóng vai trò quan trọng trong hoạt động tranh tụng. Luật sư tham gia xét hỏi, tranh luận với kiểm sát viên và đưa ra các lập luận pháp lý để bảo vệ cho thân chủ. Trên cơ sở các quy định của pháp luật và chứng cứ thu thập được, luật sư có thể đề nghị Hội đồng xét xử xem xét lại tội danh, mức hình phạt hoặc áp dụng các tình tiết giảm nhẹ trách nhiệm hình sự cho bị cáo. Hoạt động tranh tụng của luật sư giúp phiên tòa diễn ra dân chủ, khách quan và bảo đảm nguyên tắc công bằng trong xét xử.`,
    },

    {
        id: 2,
        title: "Luật sư hỗ trợ gì trong tranh chấp hợp đồng",
        image: GIOI_THIEU_NEWS_IMAGE_SRCS[0],
        content: `Trong các tranh chấp hợp đồng, luật sư đóng vai trò quan trọng trong việc bảo vệ quyền và lợi ích hợp pháp của cá nhân, tổ chức và doanh nghiệp.

Luật sư tham gia đàm phán và hòa giải giữa các bên tranh chấp. Trong nhiều trường hợp, việc thương lượng thành công có thể giúp các bên tiết kiệm thời gian, chi phí và duy trì mối quan hệ hợp tác.

Khi tranh chấp không thể giải quyết bằng thương lượng, luật sư sẽ hỗ trợ khách hàng thực hiện các thủ tục tố tụng tại Tòa án hoặc Trọng tài thương mại. Luật sư có thể soạn thảo đơn khởi kiện, chuẩn bị hồ sơ, đại diện tham gia tố tụng, trình bày quan điểm và tranh luận để bảo vệ quyền lợi cho khách hàng.

Không chỉ hỗ trợ giải quyết tranh chấp, luật sư còn giúp khách hàng phòng ngừa rủi ro pháp lý ngay từ giai đoạn ký kết hợp đồng.`,
    },

    {
        id: 3,
        title: "Thông tin khách hàng có được bảo mật không?",
        image: GIOI_THIEU_NEWS_IMAGE_SRCS[0],
        content: `Việc bảo mật thông tin khách hàng là một trong những nguyên tắc quan trọng hàng đầu trong hoạt động hành nghề của Thành Sen Group.

Chúng tôi cam kết không tiết lộ thông tin của khách hàng cho bất kỳ cá nhân hoặc tổ chức nào nếu không có sự đồng ý của khách hàng, trừ trường hợp pháp luật có quy định khác.

Các hồ sơ, tài liệu và dữ liệu liên quan đến vụ việc đều được lưu trữ và quản lý cẩn trọng nhằm bảo đảm an toàn thông tin ở mức cao nhất.`,
    },

    {
        id: 4,
        title: "Quy trình thẩm định giá",
        image: GIOI_THIEU_NEWS_IMAGE_SRCS[0],
        steps: [
            "Tư vấn, giới thiệu về các dịch vụ thẩm định giá (miễn phí)",
            "Tiếp nhận hồ sơ, phân tích, lập báo cáo sơ bộ",
            "Ký hợp đồng thẩm định giá",
            "Lập kế hoạch chi tiết thẩm định giá",
            "Thực hiện nghiệp vụ thẩm định giá",
            "Phát hành chứng thư thẩm định",
            "Nghiệm thu thanh lý hợp đồng",
            "Hoàn thiện hồ sơ thẩm định giá",
        ],
    },

    {
        id: 5,
        title: "Các trường hợp lập vi bằng thẩm định giá tiêu biểu",
        image: GIOI_THIEU_NEWS_IMAGE_SRCS[0],
        cases: [
            "Ghi nhận hiện trạng nhà, đất",
            "Ghi nhận tài sản trước và trong thời kỳ hôn nhân",
            "Ghi nhận thỏa thuận ly thân giữa hai vợ chồng",
            "Ghi nhận, trích xuất dữ liệu điện tử",
            "Ghi nhận sự chậm trễ trong thi công công trình",
            "Ghi nhận sự kiện giao nhận tiền",
            "Ghi nhận việc thỏa thuận góp vốn",
            "Ghi nhận sự kiện giao thông báo, tài liệu",
            "Ghi nhận buổi làm việc giữa các bên",
        ],
    },

    {
        id: 6,
        title: "Thời gian thực hiện thẩm định giá mất bao lâu?",
        image: GIOI_THIEU_NEWS_IMAGE_SRCS[0],
        content: `Thời gian thực hiện thẩm định giá phụ thuộc vào loại tài sản, mức độ phức tạp của hồ sơ và mục đích thẩm định.

Thông thường thời gian thực hiện dao động từ 07–14 ngày làm việc kể từ khi khách hàng cung cấp đầy đủ hồ sơ.

Đối với tài sản đơn giản như nhà ở, căn hộ hoặc phương tiện thông dụng, thời gian thực hiện sẽ nhanh hơn.

Khách hàng cần gấp có thể sử dụng dịch vụ thẩm định nhanh tùy hồ sơ cụ thể.`,
    },

    {
        id: 7,
        title: "Chứng thư thẩm định giá có được sử dụng tại Tòa án không?",
        image: GIOI_THIEU_NEWS_IMAGE_SRCS[0],
        content: `Chứng thư thẩm định giá có thể được sử dụng tại Tòa án như một nguồn tài liệu, chứng cứ phục vụ giải quyết vụ án.

Giá trị chứng minh sẽ được Tòa án xem xét cùng với các chứng cứ khác.

Trong trường hợp có căn cứ cho rằng kết quả chưa khách quan, các bên có quyền yêu cầu thẩm định lại.`,
    },

    {
        id: 9,
        title: "Sau khi trúng đấu giá bao lâu được sang tên tài sản?",
        image: GIOI_THIEU_NEWS_IMAGE_SRCS[0],
        content: `Thông thường, sau khi thanh toán đầy đủ tiền mua tài sản và hoàn thiện hồ sơ, thủ tục sang tên có thể được thực hiện trong khoảng 30 ngày làm việc.

Đối với bất động sản cần thực hiện thêm nghĩa vụ tài chính như thuế, lệ phí trước bạ và đăng ký biến động đất đai.

Các loại tài sản khác có thể thay đổi tùy từng trường hợp cụ thể.`,
    },

    {
        id: 10,
        title: "Vì sao nên chọn giải quyết tranh chấp bằng trọng tài thương mại",
        image: GIOI_THIEU_NEWS_IMAGE_SRCS[0],
        benefits: [
            "Thủ tục gọn nhẹ, xử lý nhanh",
            "Đảm bảo tính riêng tư, bảo mật",
            "Được lựa chọn trọng tài viên chuyên môn",
            "Phán quyết có giá trị cuối cùng",
            "Quy trình linh hoạt, ít hình thức",
            "Phán quyết có thể thi hành ở nhiều quốc gia",
        ],
    },
];
const cardShell =
    "group relative flex h-full flex-col rounded-xl bg-[#f4f6f9] transition-colors duration-300 ease-out";

const cardFocus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500";

type CardProps = {
    item: (typeof newsData)[number];
    src: string;
};

export default function NewsCard({ item, src }: CardProps) {
    return (
        <Link href={PAGE_LUAT_SU} className={clsx(cardShell, cardFocus)}>
            <span className='pointer-events-none absolute inset-0 z-10 rounded-xl border border-transparent transition-colors duration-300 group-hover:border-primary/30' />

            <div className='relative aspect-5/3 w-full shrink-0 overflow-hidden rounded-t-xl bg-[#f4f6f9]'>
                <div className='absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.035]'>
                    <Image
                        src={src}
                        alt={item.title}
                        fill
                        className='object-cover'
                        sizes='(max-width: 640px) 50vw, 33vw'
                        loading='lazy'
                        placeholder={SOFT_IMAGE_PLACEHOLDER}
                        decoding='async'
                    />
                </div>
            </div>

            <div className='relative z-0 flex min-h-33 flex-1 flex-col gap-2 p-3 sm:min-h-37 sm:p-4 lg:p-5'>
                <h3 className='font-serif text-mobile-heading-4 font-bold leading-snug text-neutral-black sm:text-heading-4'>
                    {item.title}
                </h3>

                <p className='font-sans line-clamp-2 text-mobile-body-2 leading-snug text-[#717171] sm:text-body-3 sm:leading-normal'>
                    {item.content ||
                        item.steps?.join(". ") ||
                        item.cases?.join(". ") ||
                        item.benefits?.join(". ")}
                </p>
            </div>
        </Link>
    );
}

export const GioiThieuNewsSection = () => (
    <section
        id='tin-tuc'
        aria-labelledby='gioi-thieu-news-heading'
        className='bg-white py-12 sm:py-16 px-4 sm:px-0'>
        <div className='custom-container flex flex-col gap-y-8'>
            <Reveal
                as='header'
                className='text-center sm:text-left flex flex-col gap-y-2'>
                <h2
                    id='gioi-thieu-news-heading'
                    className='font-serif text-mobile-heading-2 font-semibold text-neutral-black sm:text-heading-3 lg:text-heading-2'>
                    Tin tức <span className='text-primary'>mới nhất</span>
                </h2>
                <p className='font-sans mx-auto max-w-2xl text-mobile-body-1 font-medium text-[#717171] sm:text-body-1 md:font-normal lg:mx-0'>
                    Cập nhật các thông tin mới nhất về luật pháp từ chúng tôi
                </p>
            </Reveal>

            <RevealList className='grid grid-cols-2 sm:grid-cols-3 sm:gap-8 gap-4'>
                {newsData.map((item) => (
                    <RevealItem key={`gioi-thieu-news-${item.id}`}>
                        <NewsCard src={item.image} item={item} />
                    </RevealItem>
                ))}
            </RevealList>
        </div>
    </section>
);
