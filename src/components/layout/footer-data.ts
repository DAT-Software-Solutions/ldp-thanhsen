import type { NavLink } from "./header-nav";

/** Menu “Khám phá” — thứ tự theo design. */
export const FOOTER_EXPLORE_LINKS: NavLink[] = [
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Tin tức", href: "#" },
  { label: "Liên hệ", href: "/lien-he" },
  { label: "Dịch vụ", href: "/dich-vu" },
  { label: "Thẩm định giá", href: "#" },
  { label: "Thừa phát lại", href: "#" },
];

export const FOOTER_HOTLINE = "0913.294.683";

export const FOOTER_HOURS =
  "Giờ làm việc: 08:00 - 17:00 từ thứ 2 đến thứ 6";

export const FOOTER_BRANCHES: string[] = [
  "Trụ sở chính: số 20 Tiền Giang, Tân Sơn Hòa, Hồ Chí Minh",
  "CN Hà Tĩnh: Số 2, ngõ 1, Xuân Diệu, Phường Thành Sen, Hà Tĩnh",
  "CN Hà Nội: Số 01 ngõ 33 Phạm Tuấn Tài, Phường Cầu Giấy, Hà Nội",
  "CN Vũng Tàu: 1C Vòng xoay cửa lấp, Phước Thắng, Hồ Chí Minh",
  "CN Quy Nhơn: số 30B Tăng Bạt Hổ, Phường Quy Nhơn, Gia Lai",
  "CN Đồng Nai: Quốc lộ 13, Phường Bình Long, Tỉnh Đồng Nai",
];

export type SocialNavItem = {
  label: string;
  href: string;
};

/** Thay bằng URL thật khi có — hiện dùng `#` làm placeholder. */
export const FOOTER_SOCIAL_LINKS: SocialNavItem[] = [
  { label: "Instagram", href: "#" },
  { label: "Website", href: "#" },
  { label: "X (Twitter)", href: "#" },
  { label: "YouTube", href: "#" },
];
