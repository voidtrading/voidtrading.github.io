import type { Metadata } from "next";
import { ChapterDivider, SectionHeading, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "VOID-TRADING — Systems",
  description:
    "알고리즘 트레이딩, ETF LP·마켓메이킹(Market Making), 차익거래, 가상자산 주문 시스템 — 리서치부터 실행까지 하나의 구조로 설계합니다.",
};

const systems = [
  {
    number: "01",
    title: "Algorithmic Trading",
    subtitle: "자기자본 매매",
    items: [
      "국내외 거래소 다중 연결",
      "검증을 통과한 전략만 실거래 투입",
      "차익거래 전략 시스템 운용",
      "규칙 기반 한도와 포지션 통제",
    ],
  },
  {
    number: "02",
    title: "Liquidity Engineering",
    subtitle: "ETP LP · 마켓메이킹",
    items: [
      "ETF·ETN 유동성 공급 시스템 (ETF LP)",
      "마켓메이킹(Market Making) 호가 자동화",
      "스프레드와 헤지 비율 실시간 산출",
      "의무 이행 지표 상시 모니터링",
    ],
  },
  {
    number: "03",
    title: "Execution Technology",
    subtitle: "주문 · 집행 인프라",
    items: [
      "저지연 주문 파이프라인",
      "OMS와 리스크 엔진",
      "가상자산 거래소 주문 시스템",
      "백테스트와 실거래의 동일 코드 경로",
    ],
  },
];

export default function SystemsPage() {
  return (
    <main>
      <SiteHeader active="systems" />

      <section className="section systems-section" id="systems">
        <ChapterDivider label="02 / SYSTEMS" />
        <SectionHeading
          index="02"
          eyebrow="SYSTEMS"
          title={
            <>
              리서치부터 실행까지,
              <br />
              하나의 구조로 설계합니다
            </>
          }
          description="자기자본 트레이딩 시스템을 직접 개발하고 운용합니다. 리서치에서 집행까지 축적한 기술을 바탕으로 기관의 주문·집행 인프라도 실제 운영 환경에 맞게 구축합니다."
        />

        <div className="system-grid">
          {systems.map((system) => (
            <article key={system.title}>
              <div className="system-topline">
                <span>{system.number}</span>
                <i />
              </div>
              <h3>{system.title}</h3>
              <p className="system-subtitle">{system.subtitle}</p>
              <ul>
                {system.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
