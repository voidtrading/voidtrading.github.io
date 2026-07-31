import { ChapterDivider } from "../site-chrome";

export default function ContactSection() {
  return (
    <>
      <section className="contact-section" id="contact">
        <ChapterDivider label="05 / CONTACT" />
        <div className="contact-grid">
          <div>
            <p className="eyebrow">CONTACT / SEOUL</p>
            <h2>
              Let&apos;s build
              <br />
              with clarity.
            </h2>
          </div>
          <div className="contact-copy">
            <p>
              트레이딩 시스템 구축, 기술 협업, 채용에 관한 문의를 기다립니다.
              시스템 구축 문의 시 대상 상품과 현재 운영 환경을 함께 알려주시면
              더 구체적으로 답변드릴 수 있습니다.
            </p>
            <a className="contact-email" href="mailto:void@void-trading.com">
              void@void-trading.com <span aria-hidden="true">↗</span>
            </a>
          </div>
          <dl>
            <div>
              <dt>WEB</dt>
              <dd>
                <a href="https://www.void-trading.com">www.void-trading.com</a>
              </dd>
            </div>
            <div>
              <dt>ADDRESS</dt>
              <dd>서울 강남구 봉은사로 125 리스트빌딩 2층 217호</dd>
            </div>
            <div>
              <dt>ENTITY</dt>
              <dd>VOID TRADING Co., Ltd. (보이드트레이딩)</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
