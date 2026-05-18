import { GIOI_THIEU_NEWS_IMAGE_SRCS } from "@/components/gioi-thieu/gioi-thieu-urls";

export type NewsItem = {
    id: number;
    title: string;
    slug: string;
    image: string;
    content?: string;
    steps?: string[];
    benefits?: string[];
    cases?: string[];
};

export const newsData: NewsItem[] = [
    {
        id: 1,
        title: "Vai trò của luật sư bào chữa trong vụ án hình sự",
        slug: "vai-tro-cua-luat-su-bao-chua-trong-vu-an-hinh-su",
        image: GIOI_THIEU_NEWS_IMAGE_SRCS[0],
        content: `Trong lĩnh vực hình sự, đội ngũ luật sư của Thành Sen Group tham gia bào chữa cho người bị buộc tội. Với tính chất nhạy cảm và phức tạp của các vụ án hình sự, sự tham gia của luật sư ngay từ giai đoạn đầu có ý nghĩa đặc biệt quan trọng, giúp định hướng chiến lược pháp lý, thu thập và đánh giá chứng cứ, đồng thời hạn chế những rủi ro pháp lý có thể phát sinh.

Trước hết, luật sư bào chữa là người bảo vệ quyền và lợi ích hợp pháp của bị can, bị cáo trong suốt quá trình giải quyết vụ án hình sự. Khi tham gia tố tụng, luật sư có trách nhiệm giải thích cho thân chủ hiểu rõ các quyền và nghĩa vụ của mình theo quy định pháp luật. Đồng thời, luật sư giúp bảo đảm người bị buộc tội không bị ép cung, mớm cung, dùng nhục hình hoặc bị xâm phạm các quyền cơ bản khác.

Ngoài ra, tại phiên tòa, luật sư bào chữa đóng vai trò quan trọng trong hoạt động tranh tụng. Luật sư tham gia xét hỏi, tranh luận với kiểm sát viên và đưa ra các lập luận pháp lý để bảo vệ cho thân chủ. Trên cơ sở các quy định của pháp luật và chứng cứ thu thập được, luật sư có thể đề nghị Hội đồng xét xử xem xét lại tội danh, mức hình phạt hoặc áp dụng các tình tiết giảm nhẹ trách nhiệm hình sự cho bị cáo. Hoạt động tranh tụng của luật sư giúp phiên tòa diễn ra dân chủ, khách quan và bảo đảm nguyên tắc công bằng trong xét xử.`,
    },
    {
        id: 2,
        title: "Luật sư hỗ trợ gì trong tranh chấp hợp đồng",
        slug: "luat-su-ho-tro-gi-trong-tranh-chap-hop-dong",
        image: GIOI_THIEU_NEWS_IMAGE_SRCS[0],
        content: `Trong các tranh chấp hợp đồng, luật sư đóng vai trò quan trọng trong việc bảo vệ quyền và lợi ích hợp pháp của cá nhân, tổ chức và doanh nghiệp.

Luật sư tham gia đàm phán và hòa giải giữa các bên tranh chấp. Trong nhiều trường hợp, việc thương lượng thành công có thể giúp các bên tiết kiệm thời gian, chi phí và duy trì mối quan hệ hợp tác.

Khi tranh chấp không thể giải quyết bằng thương lượng, luật sư sẽ hỗ trợ khách hàng thực hiện các thủ tục tố tụng tại Tòa án hoặc Trọng tài thương mại. Luật sư có thể soạn thảo đơn khởi kiện, chuẩn bị hồ sơ, đại diện tham gia tố tụng, trình bày quan điểm và tranh luận để bảo vệ quyền lợi cho khách hàng.

Không chỉ hỗ trợ giải quyết tranh chấp, luật sư còn giúp khách hàng phòng ngừa rủi ro pháp lý ngay từ giai đoạn ký kết hợp đồng.`,
    },
    {
        id: 3,
        title: "Thông tin khách hàng có được bảo mật không?",
        slug: "thong-tin-khach-hang-co-duoc-bao-mat-khong",
        image: GIOI_THIEU_NEWS_IMAGE_SRCS[0],
        content: `Việc bảo mật thông tin khách hàng là một trong những nguyên tắc quan trọng hàng đầu trong hoạt động hành nghề của Thành Sen Group.

Chúng tôi cam kết không tiết lộ thông tin của khách hàng cho bất kỳ cá nhân hoặc tổ chức nào nếu không có sự đồng ý của khách hàng, trừ trường hợp pháp luật có quy định khác.

Các hồ sơ, tài liệu và dữ liệu liên quan đến vụ việc đều được lưu trữ và quản lý cẩn trọng nhằm bảo đảm an toàn thông tin ở mức cao nhất.`,
    },
    {
        id: 4,
        title: "Quy trình thẩm định giá",
        slug: "quy-trinh-tham-dinh-gia",
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
        slug: "cac-truong-hop-lap-vi-bang-tham-dinh-gia-tieu-bieu",
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
        slug: "thoi-gian-thuc-hien-tham-dinh-gia-mat-bao-lau",
        image: GIOI_THIEU_NEWS_IMAGE_SRCS[0],
        content: `Thời gian thực hiện thẩm định giá phụ thuộc vào loại tài sản, mức độ phức tạp của hồ sơ và mục đích thẩm định.

Thông thường thời gian thực hiện dao động từ 07-14 ngày làm việc kể từ khi khách hàng cung cấp đầy đủ hồ sơ.

Đối với tài sản đơn giản như nhà ở, căn hộ hoặc phương tiện thông dụng, thời gian thực hiện sẽ nhanh hơn.

Khách hàng cần gấp có thể sử dụng dịch vụ thẩm định nhanh tùy hồ sơ cụ thể.`,
    },
    {
        id: 7,
        title: "Chứng thư thẩm định giá có được sử dụng tại Tòa án không?",
        slug: "chung-thu-tham-dinh-gia-co-duoc-su-dung-tai-toa-an-khong",
        image: GIOI_THIEU_NEWS_IMAGE_SRCS[0],
        content: `Chứng thư thẩm định giá có thể được sử dụng tại Tòa án như một nguồn tài liệu, chứng cứ phục vụ giải quyết vụ án.

Giá trị chứng minh sẽ được Tòa án xem xét cùng với các chứng cứ khác.

Trong trường hợp có căn cứ cho rằng kết quả chưa khách quan, các bên có quyền yêu cầu thẩm định lại.`,
    },
    {
        id: 9,
        title: "Sau khi trúng đấu giá bao lâu được sang tên tài sản?",
        slug: "sau-khi-trung-dau-gia-bao-lau-duoc-sang-ten-tai-san",
        image: GIOI_THIEU_NEWS_IMAGE_SRCS[0],
        content: `Thông thường, sau khi thanh toán đầy đủ tiền mua tài sản và hoàn thiện hồ sơ, thủ tục sang tên có thể được thực hiện trong khoảng 30 ngày làm việc.

Đối với bất động sản cần thực hiện thêm nghĩa vụ tài chính như thuế, lệ phí trước bạ và đăng ký biến động đất đai.

Các loại tài sản khác có thể thay đổi tùy từng trường hợp cụ thể.`,
    },
    {
        id: 10,
        title: "Vì sao nên chọn giải quyết tranh chấp bằng trọng tài thương mại",
        slug: "vi-sao-nen-chon-giai-quyet-tranh-chap-bang-trong-tai-thuong-mai",
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

export const getNewsHref = (item: NewsItem) => `/${item.slug}`;

export const getNewsBySlug = (slug: string) =>
    newsData.find((item) => item.slug === slug);

export const getNewsSummary = (item: NewsItem) =>
    item.content ||
    item.steps?.join(". ") ||
    item.cases?.join(". ") ||
    item.benefits?.join(". ") ||
    "";
