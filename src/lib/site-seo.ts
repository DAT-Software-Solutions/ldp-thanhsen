const trimTrailingSlash = (value: string) =>
  value.endsWith("/") ? value.slice(0, -1) : value;

/** Đặt NEXT_PUBLIC_SITE_URL trong production (vd: https://thanhsen.vn) để Open Graph & canonical đúng. */
export const getSiteOrigin = () =>
  trimTrailingSlash(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  );

export const siteName = "Thành Sen Group";

export const defaultDescription =
  "Thành Sen Group — đơn vị tiên phong tư vấn pháp luật tại Việt Nam: luật sư, thừa phát lại, trọng tài thương mại, thẩm định giá, đấu giá. Giải pháp pháp lý toàn diện, bảo vệ quyền lợi khách hàng chuyên nghiệp và tận tâm.";

export const siteKeywords = [
  "Thành Sen Group",
  "tư vấn pháp luật",
  "luật sư",
  "thừa phát lại",
  "trọng tài thương mại",
  "thẩm định giá",
  "đấu giá",
  "dịch vụ pháp lý",
  "pháp lý Việt Nam",
] as const;

export const defaultOgImagePath = "/images/logo.svg";
