import type { ServiceCardProps } from "@/components/home/services-section";
import {
    PAGE_DAU_GIA,
    PAGE_LUAT_SU,
    PAGE_THAM_DINH_GIA,
    PAGE_THUA_PHAT_LAI,
    PAGE_TRONG_TAI_THUONG_MAI,
} from "@/components/layout/site-urls";

export const services: ServiceCardProps[] = [
    {
        href: PAGE_LUAT_SU,
        iconKey: "lawyer",
        title: "Luật sư",
        content:
            "Thành Sen Group cung cấp dịch vụ pháp lý toàn diện, bao gồm tư vấn, đại diện và tham gia tố tụng trong các lĩnh vực dân sự, hình sự, đất đai, kinh doanh thương mại. Với đội ngũ luật sư có chuyên môn sâu, kinh nghiệm thực tiễn phong phú, Thành Sen Group không chỉ hỗ trợ khách hàng giải quyết tranh chấp mà còn đưa ra các giải pháp phòng ngừa rủi ro pháp lý hiệu quả. Mỗi vụ việc đều được nghiên cứu kỹ lưỡng, xây dựng chiến lược phù hợp nhằm bảo vệ tối đa quyền và lợi ích hợp pháp của khách hàng.",
    },
    {
        href: PAGE_THUA_PHAT_LAI,
        iconKey: "bailiff",
        title: "Thừa phát lại",
        content:
            "Thành Sen Group cung cấp các dịch vụ hỗ trợ tư pháp chuyên nghiệp như lập vi bằng, tống đạt văn bản, xác minh điều kiện thi hành án và tổ chức thi hành án theo quy định pháp luật. Với quy trình làm việc chặt chẽ, khách quan và tuân thủ nghiêm ngặt các quy định pháp lý, các dịch vụ thừa phát lại giúp khách hàng ghi nhận sự kiện, hành vi có giá trị chứng cứ, bảo vệ quyền lợi hợp pháp và hạn chế rủi ro trong các quan hệ pháp luật. Thành Sen Group cam kết mang đến sự minh bạch, chính xác và hiệu quả trong từng hoạt động, góp phần nâng cao hiệu quả giải quyết tranh chấp và thi hành án.",
    },
    {
        href: PAGE_TRONG_TAI_THUONG_MAI,
        iconKey: "arbitration",
        title: "Trọng tài thương mại",
        content:
            "Thành Sen Group phối hợp với Trung tâm Trọng tài Quốc tế BigBoss (BBIAC) để cung cấp dịch vụ giải quyết tranh chấp nhanh chóng, linh hoạt và hiệu quả ngoài Tòa án. Thông qua cơ chế trọng tài, các tranh chấp trong lĩnh vực kinh doanh – thương mại, đầu tư, hợp đồng được xử lý trên cơ sở bảo mật, chuyên nghiệp và tôn trọng thỏa thuận của các bên.",
    },
    {
        href: PAGE_THAM_DINH_GIA,
        iconKey: "valuation",
        title: "Thẩm định giá",
        content:
            "Thành Sen Group cung cấp dịch vụ xác định giá trị tài sản một cách khách quan, chính xác và phù hợp với quy định pháp luật. Hoạt động thẩm định được thực hiện đối với nhiều loại tài sản như bất động sản, máy móc thiết bị, doanh nghiệp, phục vụ hiệu quả cho các mục đích mua bán, thế chấp, góp vốn, cổ phần hóa và giải quyết tranh chấp. Với đội ngũ thẩm định viên giàu kinh nghiệm và quy trình chặt chẽ, Thành Sen Group cam kết mang đến kết quả tin cậy, đáp ứng yêu cầu của khách hàng và các cơ quan, tổ chức liên quan.",
    },
    {
        href: PAGE_DAU_GIA,
        iconKey: "auction",
        title: "Đấu giá",
        content:
            "Thành Sen Group cung cấp dịch vụ tổ chức đấu giá tài sản chuyên nghiệp, minh bạch và tuân thủ chặt chẽ quy định pháp luật. Các loại tài sản được đấu giá đa dạng như bất động sản, phương tiện, máy móc thiết bị, quyền tài sản và các tài sản thi hành án. Với quy trình tổ chức khoa học, công khai và cạnh tranh, Thành Sen Group góp phần tối đa hóa giá trị tài sản, bảo đảm quyền và lợi ích hợp pháp của các bên liên quan. Đội ngũ đấu giá viên giàu kinh nghiệm, tác phong chuyên nghiệp cùng hệ thống vận hành hiệu quả là nền tảng để mang đến các phiên đấu giá công bằng, uy tín và thành công.",
    },
];

export const getServiceByHref = (href: string) =>
    services.find((service) => service.href === href);
