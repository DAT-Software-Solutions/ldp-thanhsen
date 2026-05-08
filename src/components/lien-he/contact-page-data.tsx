import { FOOTER_HOURS, FOOTER_HOTLINE } from "@/components/layout/footer-data";

/** Cập nhật khi có email chính thức. */
export const CONTACT_EMAIL = "sample@gmail.com";

export const CONTACT_PHONE_DISPLAY = FOOTER_HOTLINE;

export const CONTACT_HOURS_DISPLAY = FOOTER_HOURS;

export const CONTACT_INFO_HEADING = (
  <>
    Chúng tôi luôn sẵn sàng giải đáp{" "}
    <span className="text-primary">mọi thắc mắc</span>
  </>
);

export const BRANCHES_HEADING = (
  <>
    Hệ thống chi nhánh <span className="text-primary">trên toàn quốc</span>
  </>
);

export const BRANCHES_SUBTITLE =
  "Mạng lưới văn phòng rộng khắp cả nước, đáp ứng nhu cầu pháp lý nhanh chóng ở mọi khu vực";

/** Embed OSM — có thể thay bằng Google Maps khi có URL chính thức. */
export const CONTACT_MAP_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=106.622%2C10.758%2C106.648%2C10.778&layer=mapnik&marker=10.768%2C106.635";
