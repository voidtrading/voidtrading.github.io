"use client";

import type { MouseEvent, ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { BrandMark } from "./brand";
import { noticeScopeList, noticeScopes, sortedNotices } from "./notices";

const systems = [
  {
    number: "01",
    title: "Algorithmic Trading",
    subtitle: "자기자본 매매",
    items: [
      "국내외 거래소 다중 연결",
      "검증을 통과한 전략만 실거래 투입",
      "규칙 기반 한도와 포지션 통제",
    ],
  },
  {
    number: "02",
    title: "Liquidity Engineering",
    subtitle: "ETP LP · 마켓메이킹",
    items: [
      "ETF·ETN 유동성 공급 시스템",
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
      "백테스트와 실거래의 동일 코드 경로",
    ],
  },
];

const brandWords = [
  {
    word: "Curiosity",
    ko: "질문의 시작",
    copy: "익숙한 설명을 그대로 받아들이지 않습니다. 데이터의 작은 불일치에서 새로운 질문과 가능성을 발견합니다.",
  },
  {
    word: "Passion",
    ko: "구현의 힘",
    copy: "좋은 아이디어를 말하는 데서 멈추지 않습니다. 검증하고 만들고 운영하며, 실제 환경에서 작동할 때까지 다듬습니다.",
  },
  {
    word: "Edge",
    ko: "축적된 차이",
    copy: "연구의 깊이, 코드의 품질, 집행의 정밀도에서 쌓인 작은 차이를 지속 가능한 경쟁력으로 만듭니다.",
  },
];

const members = [
  {
    name: "effacer",
    koreanName: "류환철",
    role: "대표이사 · 공동창업자",
    englishRole: "Chief Executive Officer",
    detail: "Writer",
  },
  {
    name: "blueish",
    koreanName: "이상화",
    role: "이사 · 공동창업자",
    englishRole: "Director",
    detail: "Coding machine",
  },
  {
    name: "jayden",
    koreanName: "이재현",
    role: "이사 · 공동창업자",
    englishRole: "Director",
    detail: "Gadget lover",
  },
];

const navigation = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "systems", label: "Systems" },
  { id: "career", label: "Career" },
  { id: "notice", label: "Notice" },
  { id: "contact", label: "Contact" },
];

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-index" aria-hidden="true">
        <span>{index}</span>
        <i />
      </div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="section-lede">{description}</p>
      </div>
    </div>
  );
}

function ChapterDivider({ label }: { label: string }) {
  return (
    <div className="chapter-divider" aria-hidden="true">
      <i />
      <span />
      <small>{label}</small>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("top");
  const [aboutView, setAboutView] = useState<"company" | "members">("company");
  const navigationTimer = useRef<number | null>(null);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker =
          window.scrollY + Math.min(window.innerHeight * 0.32, 260);
        let current = "top";

        for (const item of navigation) {
          const section = document.getElementById(item.id);
          if (!section) continue;

          const sectionTop =
            section.getBoundingClientRect().top + window.scrollY;
          if (sectionTop <= marker) current = item.id;
        }

        setActiveSection((previous) =>
          previous === current ? previous : current,
        );
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      if (navigationTimer.current !== null) {
        window.clearTimeout(navigationTimer.current);
      }
      document.documentElement.classList.remove("is-menu-scrolling");
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - 88;

    if (navigationTimer.current !== null) {
      window.clearTimeout(navigationTimer.current);
    }

    root.classList.add("is-menu-scrolling");
    setActiveSection(sectionId);
    window.history.replaceState(null, "", `#${sectionId}`);
    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    navigationTimer.current = window.setTimeout(() => {
      root.classList.remove("is-menu-scrolling");
      navigationTimer.current = null;
    }, prefersReducedMotion ? 80 : 900);
  }, []);

  const activeLabel =
    navigation.find((item) => item.id === activeSection)?.label ?? "Home";
  const featuredNotice = sortedNotices[0];

  const navigateToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault();
    scrollToSection(sectionId);
    event.currentTarget.closest("details")?.removeAttribute("open");
  };

  return (
    <main>
      <header className="site-header">
        <a
          className="logo-link"
          href="#top"
          aria-label="VOID TRADING 홈"
          aria-current={activeSection === "top" ? "page" : undefined}
          onClick={(event) => navigateToSection(event, "top")}
        >
          <BrandMark />
        </a>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? "page" : undefined}
              onClick={(event) => navigateToSection(event, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <details className="mobile-nav">
          <summary>Menu / {activeLabel}</summary>
          <nav aria-label="모바일 메뉴">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "page" : undefined}
                onClick={(event) => navigateToSection(event, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </details>
      </header>

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
              <a className="text-link" href="#systems">
                Explore our systems <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link muted-link" href="#contact">
                Start a conversation <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

      </section>

      <section className="section about-section" id="about">
        <ChapterDivider label="01 / ABOUT" />
        <SectionHeading
          index="01"
          eyebrow="ABOUT US"
          title="질문을 발견하고, 끝까지 구현해, 차이를 만듭니다"
          description="Curiosity · Passion · Edge는 VOID TRADING이 시장을 바라보고 일하는 방식을 압축한 세 단어입니다. 그 태도를 실제 시스템으로 만드는 사람들을 소개합니다."
        />

        <div className="about-switcher">
          <div className="about-tabs" role="tablist" aria-label="ABOUT 콘텐츠">
            <button
              type="button"
              role="tab"
              aria-selected={aboutView === "company"}
              aria-controls="about-company"
              onClick={() => setAboutView("company")}
            >
              <span>01</span>
              <strong>Company</strong>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={aboutView === "members"}
              aria-controls="about-members"
              onClick={() => setAboutView("members")}
            >
              <span>02</span>
              <strong>Members</strong>
            </button>
          </div>

          {aboutView === "company" ? (
            <div
              className="about-panel"
              id="about-company"
              role="tabpanel"
            >
              <div className="about-panel-intro">
                <span className="mono-label">COMPANY / WHAT DRIVES US</span>
                <p>
                  호기심은 질문의 시작이고, 열정은 끝까지 구현하는 힘이며,
                  엣지는 그 과정에서 축적된 차이입니다.
                </p>
              </div>
              <div className="principle-grid">
                {brandWords.map((item, index) => (
                  <article key={item.word}>
                    <span className="principle-number">0{index + 1}</span>
                    <h3>{item.word}</h3>
                    <p className="principle-ko">{item.ko}</p>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div
              className="about-panel"
              id="about-members"
              role="tabpanel"
            >
              <div className="about-panel-intro">
                <span className="mono-label">MEMBERS / VOID TRADING</span>
                <p>
                  VOID TRADING은 세 명의 공동창업자가 함께 이끄는 팀입니다.
                  서로 다른 관심과 강점을 바탕으로 리서치, 엔지니어링, 운영의
                  중요한 판단을 함께 내립니다.
                </p>
              </div>
              <div className="member-grid">
                {members.map((member, index) => (
                  <article key={member.name}>
                    <div className="member-number">0{index + 1}</div>
                    <div>
                      <h3>{member.name}</h3>
                      <p className="member-korean-name">{member.koreanName}</p>
                      <p className="member-role">{member.role}</p>
                      <span>
                        {member.englishRole} / {member.detail}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

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

      <section className="section notice-section" id="notice">
        <ChapterDivider label="04 / NOTICE" />
        <SectionHeading
          index="04"
          eyebrow="NOTICE"
          title="회사 소식과 공지"
          description="VOID TRADING의 공식 소식과 채용 안내를 전합니다."
        />

        <div className="notice-board">
          <div className="notice-board-meta">
            <span>NOTICE ARCHIVE</span>
            <span>
              {String(sortedNotices.length).padStart(3, "0")}{" "}
              {sortedNotices.length === 1 ? "ENTRY" : "ENTRIES"}
            </span>
            <span>SEOUL / KOREA</span>
          </div>
          {featuredNotice && (
            <a className="notice-feature" href="/notice/">
              <div className="notice-feature-index">01</div>
              <div className="notice-feature-copy">
                <div>
                  <span>{noticeScopes[featuredNotice.scope].tag}</span>
                  <time dateTime={featuredNotice.date}>
                    {featuredNotice.date.replaceAll("-", ".")}
                  </time>
                </div>
                <h3>{featuredNotice.title}</h3>
                <p>{featuredNotice.description}</p>
              </div>
              <i aria-hidden="true">↗</i>
            </a>
          )}
          <div className="notice-scopes">
            {noticeScopeList.map((item) => (
              <a key={item.scope} href={`/notice/#${item.scope}`}>
                <span>
                  {item.code} / {item.tag}
                </span>
                <h3>{item.title}</h3>
                <p>{item.blurb}</p>
                <i aria-hidden="true">↗</i>
              </a>
            ))}
          </div>
        </div>
      </section>

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
              <dd>VOID TRADING Co., Ltd.</dd>
            </div>
          </dl>
        </div>
      </section>

      <footer>
        <BrandMark />
        <p>Curiosity <b>·</b> Passion <b>·</b> Edge</p>
        <div>
          <span>Algorithmic Trading · Liquidity Engineering · Execution Technology</span>
          <span>© VOID TRADING Co., Ltd. 2026</span>
        </div>
      </footer>
    </main>
  );
}
