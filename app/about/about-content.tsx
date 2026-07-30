"use client";

import { useState } from "react";
import { ChapterDivider, SectionHeading } from "../site-chrome";

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

export default function AboutSection() {
  const [aboutView, setAboutView] = useState<"company" | "members">("company");

  return (
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
          <div className="about-panel" id="about-company" role="tabpanel">
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
          <div className="about-panel" id="about-members" role="tabpanel">
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
  );
}
