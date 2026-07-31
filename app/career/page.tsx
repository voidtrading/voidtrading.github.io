import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";
import CareerSection from "./career-section";

export const metadata: Metadata = {
  title: "VOID-TRADING — Career",
  description:
    "작은 팀, 깊은 오너십, 실제 시스템. 리서치와 엔지니어링의 경계를 넘나들며 판단의 근거를 코드와 수치로 남기는 동료를 찾습니다.",
};

export default function CareerPage() {
  return (
    <main>
      <SiteHeader active="career" />
      <CareerSection />
      <SiteFooter />
    </main>
  );
}
