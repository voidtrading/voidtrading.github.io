import type { Metadata } from "next";
import "./globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VOID TRADING",
  alternateName: ["보이드트레이딩", "VOID-TRADING"],
  legalName: "VOID TRADING Co., Ltd.",
  url: "https://www.void-trading.com/",
  logo: "https://www.void-trading.com/logo.png",
  image: "https://www.void-trading.com/og-v5.png",
  description:
    "보이드트레이딩(VOID TRADING)은 정량 리서치와 소프트웨어 엔지니어링을 결합해 시장의 복잡성을 검증 가능한 시스템으로 전환하는 시스템 트레이딩 회사입니다. 알고리즘 트레이딩, ETP 유동성 공급·마켓메이킹, 주문·집행 인프라를 다룹니다.",
  email: "void@void-trading.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "봉은사로 125 리스트빌딩 2층 217호",
    addressLocality: "강남구",
    addressRegion: "서울",
    addressCountry: "KR",
  },
  sameAs: ["https://github.com/voidtrading"],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.void-trading.com"),
  title: "VOID-TRADING",
  description:
    "보이드트레이딩(VOID TRADING)은 정량 리서치와 소프트웨어 엔지니어링을 결합해 시장의 복잡성을 검증 가능한 시스템으로 전환하는 시스템 트레이딩 회사입니다.",
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
        <link
          rel="stylesheet"
          precedence="default"
          href="https://cdn.jsdelivr.net/npm/@fontsource/montserrat@5.2.8/800.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
