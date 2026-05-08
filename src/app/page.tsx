import type { Metadata } from "next";

import { HeroThanhSen } from "@/components/home/hero-thanh-sen";
import { ServicesSection } from "@/components/home/services-section";
import { defaultDescription, siteName } from "@/lib/site-seo";

const homeTitle = `${siteName} — Tư vấn pháp lý toàn diện tại Việt Nam`;

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: homeTitle,
    description: defaultDescription,
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroThanhSen />
      <ServicesSection />
    </>
  );
}
