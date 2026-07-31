import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";
import SystemsSection from "./systems-section";

export const metadata: Metadata = {
  title: "VOID-TRADING — Systems",
  description:
    "알고리즘 트레이딩, ETF LP·마켓메이킹(Market Making), 차익거래, 가상자산 주문 시스템 — 리서치부터 실행까지 하나의 구조로 설계합니다.",
};

export default function SystemsPage() {
  return (
    <main>
      <SiteHeader active="systems" />
      <SystemsSection />
      <SiteFooter />
    </main>
  );
}
