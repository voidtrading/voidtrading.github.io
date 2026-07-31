import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";
import AboutSection from "./about-content";

export const metadata: Metadata = {
  description:
    "Curiosity · Passion · Edge — VOID TRADING(보이드트레이딩)이 시장을 바라보고 일하는 방식과 팀을 소개합니다.",
};

export default function AboutPage() {
  return (
    <main>
      <SiteHeader active="about" />
      <AboutSection />
      <SiteFooter />
    </main>
  );
}
