import Link from "next/link";
import { noticeScopeList, noticeScopes, sortedNotices } from "../notices";
import { ChapterDivider, SectionHeading } from "../site-chrome";

export default function NoticeBoardSection() {
  const featured = sortedNotices[0];

  return (
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
        {featured && (
          <Link className="notice-feature" href="/notice/">
            <div className="notice-feature-index">01</div>
            <div className="notice-feature-copy">
              <div>
                <span>{noticeScopes[featured.scope].tag}</span>
                <time dateTime={featured.date}>
                  {featured.date.replaceAll("-", ".")}
                </time>
              </div>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
            </div>
            <i aria-hidden="true">↗</i>
          </Link>
        )}
        <div className="notice-scopes">
          {noticeScopeList.map((item) => (
            <Link key={item.scope} href={`/notice/#${item.scope}`}>
              <span>
                {item.code} / {item.tag}
              </span>
              <h3>{item.title}</h3>
              <p>{item.blurb}</p>
              <i aria-hidden="true">↗</i>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
