const trimTrailingSlash = (value: string) =>
  value.endsWith("/") ? value.slice(0, -1) : value;

/** Đặt NEXT_PUBLIC_SITE_URL trong production nếu domain chính khác giá trị mặc định. */
export const getSiteOrigin = () =>
  trimTrailingSlash(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://thanhsen.vn",
  );

export const siteName = "Thành Sen Group";
export const siteLegalName = "Công ty Thành Sen Group";
export const siteLocale = "vi_VN";
export const siteLanguage = "vi";

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

export const defaultOgImagePath = "/opengraph-image";
export const logoPath = "/images/logo.svg";
export const primaryPhone = "0913294683";
export const secondaryPhone = "0972883456";
export const primaryEmail = "thuaphatlaihatinh@gmail.com";
export const facebookProfileUrl =
  "https://www.facebook.com/profile.php?id=61577345438215";

export const siteBranches = [
  {
    name: "Trụ sở chính",
    address: "Số 20 Tiền Giang, Tân Sơn Hòa, Hồ Chí Minh",
    region: "Hồ Chí Minh",
  },
  {
    name: "CN Hà Tĩnh",
    address: "Số 2, ngõ 1, Xuân Diệu, Phường Thành Sen, Hà Tĩnh",
    region: "Hà Tĩnh",
  },
  {
    name: "CN Hà Nội",
    address: "Số 01 ngõ 33 Phạm Tuấn Tài, Phường Cầu Giấy, Hà Nội",
    region: "Hà Nội",
  },
  {
    name: "CN Vũng Tàu",
    address: "1C Vòng xoay cửa lấp, Phước Thắng, Hồ Chí Minh",
    region: "Hồ Chí Minh",
  },
  {
    name: "CN Quy Nhơn",
    address: "Số 30B Tăng Bạt Hổ, Phường Quy Nhơn, Gia Lai",
    region: "Gia Lai",
  },
  {
    name: "CN Đồng Nai",
    address: "Quốc lộ 13, Phường Bình Long, Tỉnh Đồng Nai",
    region: "Đồng Nai",
  },
] as const;

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteOrigin()}${normalizedPath}`;
};

export const getCanonicalUrl = (path = "/") => getAbsoluteUrl(path);

export const jsonLdScriptProps = (data: unknown) => ({
  __html: JSON.stringify(data).replace(/</g, "\\u003c"),
});

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LegalService"],
  "@id": `${getSiteOrigin()}/#organization`,
  name: siteName,
  legalName: siteLegalName,
  url: getSiteOrigin(),
  logo: getAbsoluteUrl(logoPath),
  image: getAbsoluteUrl(defaultOgImagePath),
  description: defaultDescription,
  telephone: [`+84${primaryPhone.slice(1)}`, `+84${secondaryPhone.slice(1)}`],
  email: primaryEmail,
  sameAs: [facebookProfileUrl],
  areaServed: {
    "@type": "Country",
    name: "Việt Nam",
  },
  address: siteBranches.map((branch) => ({
    "@type": "PostalAddress",
    name: branch.name,
    streetAddress: branch.address,
    addressRegion: branch.region,
    addressCountry: "VN",
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${getSiteOrigin()}/#website`,
  name: siteName,
  url: getSiteOrigin(),
  inLanguage: siteLanguage,
  publisher: {
    "@id": `${getSiteOrigin()}/#organization`,
  },
};
