export type ServicePageSectionKey = "cta" | "news";

export type ServicePage = {
    id: number;
    title: string;
    slug: string;
    parentTitle?: string;
    parentSlug?: string;
    category: "legal-consulting" | "bailiff" | "valuation" | "auction";
    description: string;
    content: string;
    faqs: {
        question: string;
        answer: string;
    }[];
    sections?: ServicePageSectionKey[];
};

export type ServiceNavGroup = {
    title: string;
    href?: string;
    children?: {
        title: string;
        slug: string;
        href: string;
    }[];
};

const servicePages: ServicePage[] = [
    {
        id: 1,
        title: "Luật sư",
        slug: "luat-su",
        parentTitle: "Tư vấn pháp luật",
        parentSlug: "tu-van-phap-luat",
        category: "legal-consulting",
        description:
            "Thanh Sen Group cung cấp dịch vụ pháp lý toàn diện, bao gồm tư vấn, đại diện và tham gia tố tụng trong các lĩnh vực dân sự, hình sự, đất đai, kinh doanh thương mại.",
        content: `
            <p>Với đội ngũ luật sư có chuyên môn sâu, kinh nghiệm thực tiễn phong phú, Thanh Sen Group đồng hành cùng khách hàng trong quá trình nhận diện rủi ro, lựa chọn phương án pháp lý phù hợp và bảo vệ quyền lợi hợp pháp một cách hiệu quả.</p>

            <h2>1. Vai trò của luật sư bảo chữa trong vụ án hình sự?</h2>
            <p>Trong lĩnh vực hình sự, đội ngũ luật sư của Thanh Sen Group tham gia bảo chữa cho người bị buộc tội, với tinh thần thượng tôn pháp luật và bảo vệ quyền con người. Luật sư tham gia ngay từ giai đoạn đầu của quá trình tố tụng để tiếp cận hồ sơ, gặp gỡ thân chủ, phân tích chứng cứ và xây dựng phương án bào chữa phù hợp.</p>
            <p>Vai trò của luật sư không chỉ là tranh luận tại phiên tòa mà còn bao gồm việc kiến nghị cơ quan tiến hành tố tụng thu thập, đánh giá chứng cứ đúng quy định, bảo vệ quyền lợi hợp pháp của thân chủ và hạn chế tối đa các rủi ro pháp lý phát sinh.</p>

            <h2>2. Luật sư hỗ trợ gì trong tranh chấp hợp đồng?</h2>
            <p>Trong các tranh chấp hợp đồng, luật sư giúp rà soát căn cứ pháp lý, xác định quyền và nghĩa vụ của các bên, đánh giá khả năng thương lượng, hòa giải hoặc khởi kiện. Thanh Sen Group ưu tiên các giải pháp xử lý phù hợp với mục tiêu kinh doanh của khách hàng, đồng thời chuẩn bị hồ sơ chứng cứ chặt chẽ nếu vụ việc cần đưa ra cơ quan có thẩm quyền.</p>
            <p>Chúng tôi hỗ trợ khách hàng trong toàn bộ quá trình từ tư vấn chiến lược, soạn thảo văn bản, đại diện làm việc với đối tác, tham gia hòa giải, trọng tài thương mại hoặc tố tụng tại Tòa án.</p>

            <h2>3. Thông tin khách hàng có được bảo mật không?</h2>
            <p>Việc bảo mật thông tin khách hàng là một trong những nguyên tắc quan trọng trong hoạt động hành nghề luật sư. Thanh Sen Group thiết lập quy trình tiếp nhận và lưu trữ hồ sơ nhằm bảo đảm thông tin vụ việc, tài liệu và dữ liệu cá nhân của khách hàng được bảo vệ theo quy định pháp luật.</p>
            <p>Chỉ những nhân sự trực tiếp tham gia xử lý vụ việc mới được tiếp cận thông tin cần thiết. Mọi trao đổi, tài liệu và dữ liệu liên quan được sử dụng đúng phạm vi công việc đã thống nhất với khách hàng.</p>
        `,
        faqs: [
            {
                question: "Luật sư hỗ trợ gì trong tranh chấp hợp đồng?",
                answer: "Luật sư rà soát hồ sơ, đánh giá căn cứ pháp lý, đề xuất phương án thương lượng hoặc tố tụng và đại diện khách hàng làm việc với các bên liên quan.",
            },
            {
                question: "Thông tin khách hàng có được bảo mật không?",
                answer: "Có. Thông tin khách hàng và tài liệu vụ việc được bảo mật theo quy định pháp luật và chỉ sử dụng trong phạm vi công việc đã thống nhất.",
            },
            {
                question:
                    "Vì sao nên chọn giải quyết tranh chấp bằng trọng tài thương mại?",
                answer: "Trọng tài thương mại thường linh hoạt, bảo mật và phù hợp với các tranh chấp kinh doanh cần phương án xử lý nhanh gọn ngoài Tòa án.",
            },
        ],
        sections: ["cta", "news"],
    },
    {
        id: 2,
        title: "Trọng tài thương mại",
        slug: "trong-tai-thuong-mai",
        parentTitle: "Tư vấn pháp luật",
        parentSlug: "tu-van-phap-luat",
        category: "legal-consulting",
        description:
            "Dịch vụ hỗ trợ giải quyết tranh chấp kinh doanh bằng trọng tài thương mại, từ tư vấn điều khoản trọng tài đến tham gia tố tụng trọng tài.",
        content: `
            <p>Thanh Sen Group hỗ trợ doanh nghiệp lựa chọn cơ chế trọng tài phù hợp, chuẩn bị hồ sơ tranh chấp, xây dựng chiến lược chứng cứ và tham gia quá trình tố tụng trọng tài nhằm bảo vệ quyền lợi hợp pháp của khách hàng.</p>
            <h2>1. Khi nào nên chọn trọng tài thương mại?</h2>
            <p>Trọng tài thương mại phù hợp với các tranh chấp phát sinh từ hoạt động kinh doanh khi các bên có thỏa thuận trọng tài hợp lệ. Cơ chế này thường được doanh nghiệp lựa chọn nhờ tính linh hoạt, bảo mật và khả năng lựa chọn trọng tài viên có chuyên môn.</p>
            <h2>2. Thanh Sen Group hỗ trợ những gì?</h2>
            <p>Chúng tôi tư vấn hiệu lực điều khoản trọng tài, chuẩn bị đơn kiện hoặc bản tự bảo vệ, thu thập chứng cứ, tham gia phiên họp giải quyết tranh chấp và hỗ trợ thi hành phán quyết trọng tài theo quy định.</p>
        `,
        faqs: [
            {
                question: "Tranh chấp nào có thể giải quyết bằng trọng tài?",
                answer: "Các tranh chấp thương mại có thỏa thuận trọng tài hợp lệ thường có thể được giải quyết tại trọng tài thương mại.",
            },
            {
                question: "Phán quyết trọng tài có giá trị thi hành không?",
                answer: "Phán quyết trọng tài là chung thẩm và được thi hành theo quy định pháp luật về trọng tài thương mại và thi hành án.",
            },
        ],
    },
    {
        id: 3,
        title: "Thừa phát lại",
        slug: "thua-phat-lai",
        category: "bailiff",
        description:
            "Dịch vụ lập vi bằng, tống đạt, xác minh điều kiện thi hành án và hỗ trợ thi hành án theo quy định pháp luật.",
        content: `
            <p>Thanh Sen Group cung cấp dịch vụ thừa phát lại nhằm hỗ trợ cá nhân, tổ chức ghi nhận sự kiện pháp lý, chuyển giao văn bản và xác minh thông tin phục vụ quá trình bảo vệ quyền lợi hợp pháp.</p>
            <h2>1. Vi bằng được dùng để làm gì?</h2>
            <p>Vi bằng ghi nhận sự kiện, hành vi có thật do Thừa phát lại trực tiếp chứng kiến. Đây là nguồn chứng cứ để Tòa án, cơ quan có thẩm quyền xem xét trong quá trình giải quyết vụ việc.</p>
            <h2>2. Khi nào cần lập vi bằng?</h2>
            <p>Khách hàng thường lập vi bằng khi cần ghi nhận hiện trạng tài sản, giao nhận tiền, giao nhận hồ sơ, hành vi vi phạm hợp đồng, nội dung làm việc hoặc các sự kiện pháp lý có khả năng phát sinh tranh chấp.</p>
        `,
        faqs: [
            {
                question: "Vi bằng có thay thế văn bản công chứng không?",
                answer: "Không. Vi bằng ghi nhận sự kiện, hành vi có thật và không thay thế văn bản công chứng, chứng thực hoặc văn bản hành chính.",
            },
            {
                question: "Thừa phát lại có tống đạt văn bản được không?",
                answer: "Có. Thừa phát lại thực hiện tống đạt giấy tờ, hồ sơ, văn bản theo phạm vi và trình tự pháp luật quy định.",
            },
        ],
    },
    {
        id: 4,
        title: "Thẩm định giá",
        slug: "tham-dinh-gia",
        category: "valuation",
        description:
            "Dịch vụ xác định giá trị tài sản khách quan, chính xác, phục vụ giao dịch, tranh chấp, vay vốn, mua bán, góp vốn và quản trị tài sản.",
        content: `
            <p>Thanh Sen Group cung cấp giải pháp thẩm định giá tài sản với quy trình làm việc minh bạch, tuân thủ tiêu chuẩn nghề nghiệp và phù hợp mục đích sử dụng kết quả của khách hàng.</p>
            <h2>1. Tài sản nào có thể thẩm định giá?</h2>
            <p>Chúng tôi hỗ trợ thẩm định bất động sản, máy móc thiết bị, phương tiện vận tải, hàng hóa, tài sản vô hình và các loại tài sản khác theo nhu cầu của cá nhân, doanh nghiệp.</p>
            <h2>2. Kết quả thẩm định giá dùng trong trường hợp nào?</h2>
            <p>Kết quả thẩm định giá có thể phục vụ mua bán, chuyển nhượng, vay vốn, góp vốn, xử lý tranh chấp, phân chia tài sản, đấu giá hoặc các mục đích quản trị nội bộ.</p>
        `,
        faqs: [
            {
                question: "Thời gian thẩm định giá mất bao lâu?",
                answer: "Thời gian phụ thuộc vào loại tài sản, hồ sơ pháp lý và phạm vi khảo sát. Thanh Sen Group sẽ báo tiến độ cụ thể sau khi tiếp nhận yêu cầu.",
            },
            {
                question: "Cần chuẩn bị hồ sơ gì?",
                answer: "Thông thường cần giấy tờ pháp lý của tài sản, thông tin kỹ thuật, hiện trạng sử dụng và mục đích thẩm định giá.",
            },
        ],
    },
    {
        id: 5,
        title: "Đấu giá",
        slug: "dau-gia",
        category: "auction",
        description:
            "Dịch vụ tổ chức đấu giá tài sản chuyên nghiệp, minh bạch, hỗ trợ khách hàng xây dựng phương án đấu giá và xử lý hồ sơ liên quan.",
        content: `
            <p>Thanh Sen Group hỗ trợ khách hàng trong quá trình chuẩn bị, công bố, tổ chức và hoàn thiện thủ tục đấu giá tài sản theo hướng rõ ràng, minh bạch và tuân thủ quy định pháp luật.</p>
            <h2>1. Dịch vụ đấu giá phù hợp với ai?</h2>
            <p>Dịch vụ phù hợp với tổ chức, cá nhân cần bán tài sản thông qua phương thức đấu giá, bao gồm tài sản thi hành án, tài sản bảo đảm, bất động sản, phương tiện, máy móc và các tài sản hợp pháp khác.</p>
            <h2>2. Quy trình được thực hiện ra sao?</h2>
            <p>Chúng tôi tiếp nhận hồ sơ, tư vấn phương án đấu giá, niêm yết và công khai thông tin, tổ chức cuộc đấu giá, lập biên bản kết quả và hỗ trợ hoàn tất các thủ tục sau đấu giá.</p>
        `,
        faqs: [
            {
                question: "Đấu giá tài sản có bắt buộc công khai không?",
                answer: "Có. Việc công khai thông tin đấu giá được thực hiện theo quy định để bảo đảm minh bạch và quyền tiếp cận của người tham gia.",
            },
            {
                question: "Thanh Sen Group có hỗ trợ sau đấu giá không?",
                answer: "Có. Chúng tôi hỗ trợ hoàn thiện biên bản, hồ sơ kết quả và các thủ tục liên quan sau cuộc đấu giá.",
            },
        ],
    },
];

export const serviceNavGroups: ServiceNavGroup[] = [
    {
        title: "Tư vấn pháp luật",
        children: servicePages
            .filter((page) => page.category === "legal-consulting")
            .map((page) => ({
                title: page.title,
                slug: page.slug,
                href: `/dich-vu/${page.parentSlug}/${page.slug}`,
            })),
    },
    {
        title: "Thẩm định giá",
        href: "/dich-vu/tham-dinh-gia",
    },
    {
        title: "Thừa phát lại",
        href: "/dich-vu/thua-phat-lai",
    },
    {
        title: "Đấu giá",
        href: "/dich-vu/dau-gia",
    },
];

export const getServicePages = () => servicePages;

export const getServicePageHref = (page: ServicePage) =>
    page.parentSlug
        ? `/dich-vu/${page.parentSlug}/${page.slug}`
        : `/dich-vu/${page.slug}`;

export const getServicePageByRoute = ({
    parentSlug,
    slug,
}: {
    parentSlug?: string;
    slug: string;
}) =>
    servicePages.find(
        (page) => page.slug === slug && page.parentSlug === parentSlug,
    );

export default getServicePages;
