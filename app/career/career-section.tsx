import { ChapterDivider, SectionHeading } from "../site-chrome";

export default function CareerSection() {
  return (
    <>
      <section className="section career-section" id="career">
        <ChapterDivider label="03 / CAREER" />
        <SectionHeading
          index="03"
          eyebrow="CAREER"
          title="깊게 생각하고, 끝까지 구현하는 사람들"
          description="작은 팀이기에 한 사람이 문제 정의부터 운영까지 폭넓게 책임집니다. 리서치와 엔지니어링의 경계를 넘나들며, 판단의 근거를 코드와 수치로 남기는 동료를 찾습니다."
        />

        <div className="career-grid">
          <div className="career-callout">
            <p className="big-copy">
              Small team.
              <br />
              Deep ownership.
              <br />
              <em>Real systems.</em>
            </p>
            <a className="text-link" href="mailto:void@void-trading.com">
              Send your work <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="career-values">
            <article>
              <span>01</span>
              <div>
                <h3>자율과 책임 / Autonomy</h3>
                <p>맥락을 이해하고 스스로 판단합니다. 맡은 영역의 결과까지 책임집니다.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>엄밀함 / Rigor</h3>
                <p>주장보다 근거를, 속도보다 검증을 우선합니다.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>솔직함 / Candor</h3>
                <p>틀렸음을 빠르게 인정하고 더 나은 답으로 이동합니다.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
