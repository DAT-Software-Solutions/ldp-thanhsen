export type ServiceIconKey =
  | "lawyer"
  | "bailiff"
  | "arbitration"
  | "valuation"
  | "auction";

export type ServiceItem = {
  title: string;
  href: string;
  iconKey: ServiceIconKey;
};

export const SERVICES: ServiceItem[] = [
  { title: "Dịch vụ", href: "/dich-vu", iconKey: "lawyer" },
  { title: "Thừa phát lại", href: "#", iconKey: "bailiff" },
  { title: "Trọng tài thương mại", href: "#", iconKey: "arbitration" },
  { title: "Thẩm định giá", href: "#", iconKey: "valuation" },
  { title: "Đấu giá", href: "#", iconKey: "auction" },
];

export const SERVICES_SUBTITLE =
  "Thành Sen Group luôn sẵn sàng đem lại các dịch vụ pháp lý chất lượng cao tới quý khách hàng";
