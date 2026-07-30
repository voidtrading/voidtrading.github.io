"use client";

import { useEffect, useState } from "react";
import { SiteFooter, SiteHeader } from "../site-chrome";
import {
  noticeScopeList,
  noticeScopes,
  sortedNotices,
  type NoticeScope,
} from "../notices";

type Filter = NoticeScope | "all";

function formatDate(date: string) {
  return date.replaceAll("-", ".");
}

export default function NoticeArchive() {
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      setFilter(hash in noticeScopes ? (hash as NoticeScope) : "all");
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const selectFilter = (next: Filter) => {
    setFilter(next);
    window.history.replaceState(
      null,
      "",
      next === "all" ? "/notice/" : `/notice/#${next}`,
    );
  };

  const entries =
    filter === "all"
      ? sortedNotices
      : sortedNotices.filter((notice) => notice.scope === filter);

  return (
    <main className="archive-page">
      <SiteHeader active="notice" />

      <section className="archive-body">
        <div className="chapter-divider" aria-hidden="true">
          <i />
          <span />
          <small>NOTICE / ARCHIVE</small>
        </div>

        <div className="archive-heading">
          <p className="eyebrow">NOTICE ARCHIVE</p>
          <h1>공지사항</h1>
          <p className="section-lede">
            VOID TRADING의 공식 소식과 채용 안내를 전합니다.
          </p>
        </div>

        <div className="archive-tabs" role="tablist" aria-label="공지 카테고리">
          <button
            type="button"
            role="tab"
            aria-selected={filter === "all"}
            onClick={() => selectFilter("all")}
          >
            <span>00</span>
            <strong>All</strong>
            <small>{sortedNotices.length}</small>
          </button>
          {noticeScopeList.map((item) => (
            <button
              key={item.scope}
              type="button"
              role="tab"
              aria-selected={filter === item.scope}
              onClick={() => selectFilter(item.scope)}
            >
              <span>{item.code}</span>
              <strong>{item.title}</strong>
              <small>
                {
                  sortedNotices.filter((notice) => notice.scope === item.scope)
                    .length
                }
              </small>
            </button>
          ))}
        </div>

        {entries.length > 0 ? (
          <ol className="archive-list">
            {entries.map((notice, index) => (
              <li key={notice.slug}>
                <div className="archive-entry-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="archive-entry-body">
                  <div className="archive-entry-meta">
                    <span>{noticeScopes[notice.scope].tag}</span>
                    <time dateTime={notice.date}>
                      {formatDate(notice.date)}
                    </time>
                    <span className="archive-entry-author">
                      작성 · {notice.authors.join(", ")}
                    </span>
                  </div>
                  <h2>{notice.title}</h2>
                  <p>{notice.description}</p>
                  {notice.appendixPath && (
                    <a
                      className="text-link"
                      href={notice.appendixPath}
                      target="_blank"
                      rel="noreferrer"
                    >
                      첨부파일
                      {notice.appendixName ? ` (${notice.appendixName})` : ""}{" "}
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div className="archive-empty">
            <span className="mono-label">NO ENTRIES YET</span>
            <p>이 카테고리에는 아직 게시된 공지가 없습니다.</p>
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
