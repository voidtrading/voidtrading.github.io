import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.void-trading.com"),
  title: "VOID TRADING — Market Insight. Engineered.",
  description:
    "정량 리서치와 소프트웨어 엔지니어링을 결합해 시장의 복잡성을 검증 가능한 시스템으로 전환합니다.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "VOID TRADING",
    title: "VOID TRADING — Market Insight. Engineered.",
    description:
      "Research, engineering, and execution—designed as one systematic trading loop.",
    images: [
      {
        url: "/og-v5.png",
        width: 1536,
        height: 1024,
        alt: "VOID TRADING — Market Insight. Engineered.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VOID TRADING — Market Insight. Engineered.",
    description:
      "Research, engineering, and execution—designed as one systematic trading loop.",
    images: ["/og-v5.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          precedence="default"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {children}
      </body>
    </html>
  );
}
