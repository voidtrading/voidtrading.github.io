import type { Metadata } from "next";
import NoticeArchive from "./archive";

export const metadata: Metadata = {
  title: "VOID-TRADING — Notice",
  description: "VOID TRADING의 공식 소식과 채용 안내를 전합니다.",
};

export default function NoticePage() {
  return <NoticeArchive />;
}
