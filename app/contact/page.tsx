import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";
import ContactSection from "./contact-section";

export const metadata: Metadata = {
  title: "VOID-TRADING — Contact",
  description:
    "트레이딩 시스템 구축, 기술 협업, 채용 문의 — VOID TRADING(보이드트레이딩), 서울 강남구.",
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader active="contact" />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
