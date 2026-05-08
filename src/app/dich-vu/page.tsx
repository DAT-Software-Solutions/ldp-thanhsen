import type { Metadata } from "next";

import { siteName } from "@/lib/site-seo";

const pageTitle = "Dịch vụ";

const pageDescription =
  "Dịch vụ Thành Sen Group: tư vấn pháp luật, đại diện pháp lý và hỗ trợ bảo vệ quyền lợi hợp pháp cho cá nhân và doanh nghiệp.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/dich-vu" },
  openGraph: {
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    url: "/dich-vu",
  },
};

export default function DichVuPage() {
  return <main className="flex-1" />;
}
