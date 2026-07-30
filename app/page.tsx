import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";

export default function Home() {
  return (
    <main>
      <SiteHeader active="home" />

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-rail">
          <div className="rail-rule">
            <i />
            <span />
          </div>
          <p className="mono-label">SEOUL / KOREA</p>
          <p className="rail-copy">
            시장을 관찰하고,
            <br />
            가설을 검증하며,
            <br />
            시스템으로 집행합니다.
          </p>
          <p className="rail-descriptor">
            ALGORITHMIC TRADING <b>·</b> LIQUIDITY ENGINEERING
            <br />
            EXECUTION TECHNOLOGY
          </p>
        </div>

        <div className="hero-main">
          <div className="hero-stage" aria-hidden="true">
            <div className="stage-grid" />
            <i className="stage-orbit orbit-one" />
            <i className="stage-orbit orbit-two" />
            <i className="stage-orbit orbit-three" />
            <span className="stage-node node-one" />
            <span className="stage-node node-two" />
            <span className="stage-node node-three" />
            <span className="stage-node node-four" />
            <div className="stage-scan" />
            <p>HYPOTHESIS / SIGNAL FIELD / 01</p>
          </div>

          <div className="hero-copy-layer">
            <p className="eyebrow">SYSTEMATIC TRADING / SEOUL</p>
            <h1 id="hero-title">
              Market insight.
              <br />
              Engineered.
            </h1>
            <div className="headline-rule" aria-hidden="true" />
            <p className="hero-ko">
              시장의 복잡성을 연구하고, 검증 가능한 시스템으로 전환합니다
            </p>
            <div className="hero-detail">
              <p>
                VOID TRADING은 정량 리서치와 소프트웨어 엔지니어링을
                결합합니다. 데이터 관찰과 가설 수립부터 모델 검증, 주문 집행,
                사후 분석까지 하나의 흐름으로 연결합니다.
              </p>
              <div className="hero-data-readout" aria-label="통합 시스템 흐름">
                <span>01 / DATA</span>
                <span>02 / MODEL</span>
                <span>03 / EXECUTE</span>
              </div>
            </div>
            <div className="hero-actions">
              <Link className="text-link" href="/systems/">
                Explore our systems <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link muted-link" href="/contact/">
                Start a conversation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
