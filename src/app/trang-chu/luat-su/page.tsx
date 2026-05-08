import type { Metadata } from "next";

import { siteName } from "@/lib/site-seo";

const pageTitle = "Luật sư";

const pageDescription =
  "Dịch vụ luật sư Thành Sen Group: tư vấn pháp luật, đại diện pháp lý và hỗ trợ bảo vệ quyền lợi hợp pháp cho cá nhân và doanh nghiệp.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/trang-chu/luat-su" },
  openGraph: {
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    url: "/trang-chu/luat-su",
  },
};

export default function LuatSuPage() {
  return <main className="flex-1" />;
}
