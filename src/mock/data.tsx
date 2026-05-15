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
        category: "legal-consulting",
        description:
            "Thành Sen Group cung cấp dịch vụ pháp lý toàn diện, bao gồm tư vấn, đại diện và tham gia tố tụng trong các lĩnh vực dân sự, hình sự, đất đai, kinh doanh thương mại.",
        content: `
            <p>Với đội ngũ luật sư có chuyên môn sâu, kinh nghiệm thực tiễn phong phú, Thành Sen Group không chỉ hỗ trợ khách hàng giải quyết tranh chấp mà còn đưa ra các giải pháp phòng ngừa rủi ro pháp lý hiệu quả. Mỗi vụ việc đều được nghiên cứu kỹ lưỡng, xây dựng chiến lược phù hợp nhằm bảo vệ tối đa quyền và lợi ích hợp pháp của khách hàng.</p>

            <h2>1. Vai trò của luật sư bào chữa trong vụ án hình sự?</h2>
            <p>Trong lĩnh vực hình sự, đội ngũ luật sư của Thành Sen Group tham gia bào chữa cho người bị buộc tội, với tinh thần thượng tôn pháp luật và bảo vệ quyền con người. Luật sư tham gia ngay từ giai đoạn đầu của quá trình tố tụng để tiếp cận hồ sơ, gặp gỡ thân chủ, phân tích chứng cứ và xây dựng phương án bào chữa phù hợp.</p>
            <p>Trước hết, luật sư bào chữa là người bảo vệ quyền và lợi ích hợp pháp của bị can, bị cáo trong suốt quá trình giải quyết vụ án hình sự. Khi tham gia tố tụng, luật sư có trách nhiệm giải thích cho thân chủ hiểu rõ các quyền và nghĩa vụ của mình theo quy định pháp luật. Đồng thời, luật sư giúp bảo đảm người bị buộc tội không bị ép cung, mớm cung, dùng nhục hình hoặc bị xâm phạm các quyền cơ bản khác</p>
            <p>Ngoài ra, tại phiên tòa, luật sư bào chữa đóng vai trò quan trọng trong hoạt động tranh tụng. Luật sư tham gia xét hỏi, tranh luận với kiểm sát viên và đưa ra các lập luận pháp lý để bảo vệ cho thân chủ. Trên cơ sở các quy định của pháp luật và chứng cứ thu thập được, luật sư có thể đề nghị Hội đồng xét xử xem xét lại tội danh, mức hình phạt hoặc áp dụng các tình tiết giảm nhẹ trách nhiệm hình sự cho bị cáo. Hoạt động tranh tụng của luật sư giúp phiên tòa diễn ra dân chủ, khách quan và bảo đảm nguyên tắc công bằng trong xét xử.</p>

            <h2>2. Luật sư hỗ trợ gì trong tranh chấp hợp đồng?</h2>
            <p>Trong các tranh chấp hợp đồng, luật sư đóng vai trò quan trọng trong việc bảo vệ quyền và lợi ích hợp pháp của cá nhân, tổ chức và doanh nghiệp. Sự tham gia của luật sư không chỉ giúp các bên hiểu rõ quyền, nghĩa vụ của mình mà còn góp phần giải quyết tranh chấp hiệu quả, hạn chế rủi ro pháp lý và thiệt hại kinh tế phát sinh.</p>
            <p>Luật sư tham gia đàm phán và hòa giải giữa các bên tranh chấp. Trong nhiều trường hợp, việc thương lượng thành công có thể giúp các bên tiết kiệm thời gian, chi phí và duy trì mối quan hệ hợp tác. Với kiến thức pháp lý và kỹ năng tranh luận, luật sư sẽ đại diện hoặc hỗ trợ khách hàng trong quá trình trao đổi, đưa ra các phương án giải quyết phù hợp nhằm đạt được thỏa thuận có lợi.</p>
            <p>Khi tranh chấp không thể giải quyết bằng thương lượng, luật sư sẽ hỗ trợ khách hàng thực hiện các thủ tục tố tụng tại Tòa án hoặc Trọng tài thương mại. Luật sư có thể soạn thảo đơn khởi kiện, chuẩn bị hồ sơ, đại diện tham gia tố tụng, trình bày quan điểm và tranh luận để bảo vệ quyền lợi cho khách hàng trước cơ quan có thẩm quyền.</p>
            <p>Không chỉ hỗ trợ giải quyết tranh chấp, luật sư còn giúp khách hàng phòng ngừa rủi ro pháp lý ngay từ giai đoạn ký kết hợp đồng. Luật sư có thể tư vấn, rà soát và soạn thảo hợp đồng nhằm bảo đảm các điều khoản rõ ràng, chặt chẽ và phù hợp với quy định pháp luật.</p>

            <h2>3. Thông tin khách hàng có được bảo mật không?</h2>
            <p>Việc bảo mật thông tin khách hàng là một trong những nguyên tắc quan trọng hàng đầu trong hoạt động hành nghề của Thành Sen Group. Mọi thông tin, tài liệu và nội dung trao đổi giữa khách hàng và công ty đều được bảo mật theo quy định pháp luật và đạo đức nghề nghiệp.</p>
            <p>Chúng tôi cam kết không tiết lộ thông tin của khách hàng cho bất kỳ cá nhân hoặc tổ chức nào nếu không có sự đồng ý của khách hàng, trừ trường hợp pháp luật có quy định khác. Các hồ sơ, tài liệu và dữ liệu liên quan đến vụ việc đều được lưu trữ và quản lý cẩn trọng nhằm bảo đảm an toàn thông tin ở mức cao nhất.</p>
            <p>Ngoài ra, đội ngũ nhân sự của công ty luôn tuân thủ nghiêm ngặt quy tắc bảo mật trong suốt quá trình tư vấn và giải quyết vụ việc. Điều này giúp khách hàng yên tâm chia sẻ thông tin và nhận được sự hỗ trợ pháp lý hiệu quả, chuyên nghiệp.</p>

            <h2>4. Quy trình thẩm định giá</h2>
            <ul>
                <li>Tư vấn, giới thiệu về các dịch vụ thẩm định giá miễn phí.</li>
                <li>Tiếp nhận hồ sơ, phân tích, lập báo cáo sơ bộ.</li>
                <li>Ký hợp đồng thẩm định giá.</li>
                <li>Lập kế hoạch chi tiết thẩm định giá: hoàn thiện tài liệu kỹ thuật, tài liệu pháp lý của tài sản thẩm định giá, xác định cơ sở giá trị, lựa chọn phương án thẩm định, khảo sát, nghiên cứu thị trường, thu thập thông tin, so sánh cơ sở dữ liệu, lấy ý kiến chuyên gia, tính toán kết quả, thông báo sơ bộ kết quả thẩm định và lập báo cáo thẩm định.</li>
                <li>Thực hiện nghiệp vụ thẩm định giá.</li>
                <li>Phát hành chứng thư thẩm định.</li>
                <li>Nghiệm thu, thanh lý hợp đồng.</li>
                <li>Hoàn thiện hồ sơ thẩm định giá.</li>
            </ul>

            <h2>5. Các trường hợp lập vi bằng thẩm định giá tiêu biểu</h2>
            <ul>
                <li>Ghi nhận hiện trạng nhà, đất bị lấn chiếm, trước và sau khi xây dựng.</li>
                <li>Ghi nhận tài sản trước và trong thời kỳ hôn nhân.</li>
                <li>Ghi nhận thỏa thuận ly thân giữa hai vợ chồng.</li>
                <li>Ghi nhận, trích xuất dữ liệu điện tử như tin nhắn, hình ảnh, lời nói trong file ghi âm, video hoặc trích xuất tin nhắn, bài đăng trên các trang mạng xã hội.</li>
                <li>Ghi nhận sự chậm trễ trong thi công công trình hoặc trong các giao dịch dân sự.</li>
                <li>Ghi nhận sự kiện giao nhận tiền trong giao dịch mua bán, đặt cọc, cho vay mượn và các giao dịch dân sự khác.</li>
                <li>Ghi nhận việc thỏa thuận góp vốn trong doanh nghiệp, mua bán, đầu tư, kinh doanh.</li>
                <li>Ghi nhận sự kiện giao thông báo, tài liệu; bàn giao tài sản.</li>
                <li>Ghi nhận buổi làm việc giữa các bên hoặc các cuộc họp gia đình, cuộc họp công ty.</li>
            </ul>

            <h2>6. Thời gian thực hiện thẩm định giá mất bao lâu?</h2>
            <p>Thời gian thực hiện thẩm định giá phụ thuộc vào loại tài sản, mức độ phức tạp của hồ sơ và mục đích thẩm định. Thông thường, thời gian thực hiện dao động từ 07-14 ngày làm việc kể từ khi khách hàng cung cấp đầy đủ hồ sơ, tài liệu cần thiết.</p>
            <p>Đối với các tài sản đơn giản như nhà ở, căn hộ, đất ở hoặc phương tiện thông dụng, thời gian thẩm định thường được thực hiện nhanh hơn. Trong khi đó, các tài sản có giá trị lớn hoặc tính chất phức tạp như dự án bất động sản, doanh nghiệp, máy móc chuyên dụng hoặc tài sản tranh chấp có thể cần thêm thời gian để khảo sát, thu thập thông tin và phân tích chuyên sâu.</p>
            <p>Trong trường hợp khách hàng cần gấp, chúng tôi có thể hỗ trợ dịch vụ thẩm định giá nhanh tùy theo từng hồ sơ cụ thể. Đội ngũ thẩm định viên luôn nỗ lực bảo đảm tiến độ thực hiện nhưng vẫn duy trì tính chính xác, khách quan và đúng quy định pháp luật.</p>

            <h2>7. Chứng thư thẩm định giá có được sử dụng tại Tòa án không?</h2>
            <p>Chứng thư thẩm định giá có thể được sử dụng tại Tòa án như một nguồn tài liệu, chứng cứ để phục vụ quá trình giải quyết vụ án theo quy định pháp luật. Trong các vụ việc dân sự, kinh doanh thương mại, tranh chấp hợp đồng, thừa kế, đất đai hoặc thi hành án, chứng thư thẩm định giá thường được dùng để xác định giá trị tài sản đang tranh chấp.</p>
            <p>Tuy nhiên, giá trị chứng minh của chứng thư thẩm định giá sẽ được Tòa án xem xét, đánh giá cùng với các tài liệu, chứng cứ khác trong hồ sơ vụ án. Để được công nhận và sử dụng hiệu quả, chứng thư cần được phát hành bởi doanh nghiệp thẩm định giá có đủ điều kiện hoạt động hợp pháp và thực hiện đúng quy trình, tiêu chuẩn thẩm định giá theo quy định pháp luật.</p>
            <p>Trong trường hợp có căn cứ cho rằng kết quả thẩm định chưa khách quan hoặc chưa phù hợp với thực tế, các bên liên quan có quyền đề nghị thẩm định giá lại hoặc yêu cầu cơ quan có thẩm quyền xem xét lại kết quả thẩm định. Vì vậy, việc lựa chọn đơn vị thẩm định giá uy tín và có kinh nghiệm là yếu tố rất quan trọng nhằm bảo đảm quyền và lợi ích hợp pháp của khách hàng.</p>

            <h2>8. Sau khi trúng đấu giá bao lâu được sang tên tài sản?</h2>
            <p>Thời gian sang tên tài sản sau khi trúng đấu giá phụ thuộc vào loại tài sản, việc hoàn tất nghĩa vụ thanh toán của người trúng đấu giá và thủ tục tại cơ quan nhà nước có thẩm quyền. Thông thường, sau khi người trúng đấu giá thanh toán đầy đủ tiền mua tài sản và hoàn thiện hồ sơ theo quy định, thủ tục sang tên có thể được thực hiện trong khoảng 30 ngày làm việc.</p>
            <p>Đối với tài sản là bất động sản, người trúng đấu giá cần thực hiện các nghĩa vụ tài chính như nộp thuế, lệ phí trước bạ và chuẩn bị hồ sơ đăng ký biến động tại cơ quan đăng ký đất đai. Với các tài sản khác như xe ô tô, máy móc hoặc tài sản thi hành án, thời gian xử lý có thể thay đổi tùy theo tính chất tài sản và cơ quan giải quyết.</p>
            <p>Trong quá trình thực hiện, đơn vị đấu giá hoặc đơn vị có tài sản đấu giá sẽ hỗ trợ bàn giao hồ sơ, biên bản đấu giá, hợp đồng mua bán và các giấy tờ liên quan để người trúng đấu giá hoàn tất thủ tục sang tên theo quy định pháp luật.</p>

            <h2>9. Vì sao nên chọn giải quyết tranh chấp bằng trọng tài thương mại?</h2>
            <p>Thủ tục trọng tài được thiết kế gọn nhẹ, các bên có thể chủ động thỏa thuận về thời gian, địa điểm, ngôn ngữ và cách thức giải quyết, giúp rút ngắn đáng kể thời gian xử lý tranh chấp.</p>
            <p>Không giống như xét xử công khai tại Tòa án, trọng tài thương mại đảm bảo tính riêng tư, giúp bảo vệ bí mật kinh doanh và uy tín của các bên.</p>
            <p>Các bên có quyền lựa chọn trọng tài viên là những chuyên gia am hiểu sâu về lĩnh vực tranh chấp như thương mại, xây dựng, tài chính, từ đó nâng cao chất lượng giải quyết vụ việc.</p>
            <p>Quyết định của trọng tài có giá trị cuối cùng, không bị kháng cáo như tại Tòa án, giúp tranh chấp được giải quyết dứt điểm, tránh kéo dài.</p>
            <p>Quy trình linh hoạt, ít hình thức, giảm thiểu ảnh hưởng đến hoạt động sản xuất - kinh doanh, đặc biệt phù hợp với các doanh nghiệp cần giải quyết tranh chấp nhanh để duy trì vận hành.</p>
            <p>Phán quyết trọng tài có thể được công nhận và thi hành tại nhiều quốc gia, thuận lợi cho các tranh chấp có yếu tố nước ngoài.</p>
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
            {
                question: "Thời gian thực hiện thẩm định giá mất bao lâu?",
                answer: "Thông thường thời gian thực hiện dao động từ 07-14 ngày làm việc kể từ khi khách hàng cung cấp đầy đủ hồ sơ, tài liệu cần thiết. Tài sản phức tạp có thể cần thêm thời gian khảo sát và phân tích.",
            },
            {
                question:
                    "Chứng thư thẩm định giá có được sử dụng tại Tòa án không?",
                answer: "Có thể. Chứng thư thẩm định giá có thể được sử dụng như nguồn tài liệu, chứng cứ để Tòa án xem xét cùng các tài liệu khác trong hồ sơ vụ án.",
            },
            {
                question:
                    "Sau khi trúng đấu giá bao lâu được sang tên tài sản?",
                answer: "Thông thường, sau khi người trúng đấu giá thanh toán đầy đủ và hoàn thiện hồ sơ theo quy định, thủ tục sang tên có thể được thực hiện trong khoảng 30 ngày làm việc.",
            },
        ],
        sections: ["cta", "news"],
    },
    {
        id: 2,
        title: "Trọng tài thương mại",
        slug: "trong-tai-thuong-mai",
        category: "legal-consulting",
        description:
            "Dịch vụ hỗ trợ giải quyết tranh chấp kinh doanh bằng trọng tài thương mại, từ tư vấn điều khoản trọng tài đến tham gia tố tụng trọng tài.",
        content: `
            <p>Thành Sen Group hỗ trợ doanh nghiệp lựa chọn cơ chế trọng tài phù hợp, chuẩn bị hồ sơ tranh chấp, xây dựng chiến lược chứng cứ và tham gia quá trình tố tụng trọng tài nhằm bảo vệ quyền lợi hợp pháp của khách hàng.</p>
            <h2>1. Khi nào nên chọn trọng tài thương mại?</h2>
            <p>Trọng tài thương mại phù hợp với các tranh chấp phát sinh từ hoạt động kinh doanh khi các bên có thỏa thuận trọng tài hợp lệ. Cơ chế này thường được doanh nghiệp lựa chọn nhờ tính linh hoạt, bảo mật và khả năng lựa chọn trọng tài viên có chuyên môn.</p>
            <h2>2. Thành Sen Group hỗ trợ những gì?</h2>
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
            <p>Thành Sen Group cung cấp dịch vụ thừa phát lại nhằm hỗ trợ cá nhân, tổ chức ghi nhận sự kiện pháp lý, chuyển giao văn bản và xác minh thông tin phục vụ quá trình bảo vệ quyền lợi hợp pháp.</p>
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
            <p>Thành Sen Group cung cấp giải pháp thẩm định giá tài sản với quy trình làm việc minh bạch, tuân thủ tiêu chuẩn nghề nghiệp và phù hợp mục đích sử dụng kết quả của khách hàng.</p>
            <h2>1. Tài sản nào có thể thẩm định giá?</h2>
            <p>Chúng tôi hỗ trợ thẩm định bất động sản, máy móc thiết bị, phương tiện vận tải, hàng hóa, tài sản vô hình và các loại tài sản khác theo nhu cầu của cá nhân, doanh nghiệp.</p>
            <h2>2. Kết quả thẩm định giá dùng trong trường hợp nào?</h2>
            <p>Kết quả thẩm định giá có thể phục vụ mua bán, chuyển nhượng, vay vốn, góp vốn, xử lý tranh chấp, phân chia tài sản, đấu giá hoặc các mục đích quản trị nội bộ.</p>
        `,
        faqs: [
            {
                question: "Thời gian thẩm định giá mất bao lâu?",
                answer: "Thời gian phụ thuộc vào loại tài sản, hồ sơ pháp lý và phạm vi khảo sát. Thành Sen Group sẽ báo tiến độ cụ thể sau khi tiếp nhận yêu cầu.",
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
            <p>Thành Sen Group hỗ trợ khách hàng trong quá trình chuẩn bị, công bố, tổ chức và hoàn thiện thủ tục đấu giá tài sản theo hướng rõ ràng, minh bạch và tuân thủ quy định pháp luật.</p>
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
                question: "Thành Sen Group có hỗ trợ sau đấu giá không?",
                answer: "Có. Chúng tôi hỗ trợ hoàn thiện biên bản, hồ sơ kết quả và các thủ tục liên quan sau cuộc đấu giá.",
            },
        ],
    },
];

export const serviceNavGroups: ServiceNavGroup[] = [
    {
        title: "Luật sư",
        href: "/dich-vu/luat-su",
    },
    {
        title: "Trọng tài thương mại",
        href: "/dich-vu/trong-tai-thuong-mai",
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
