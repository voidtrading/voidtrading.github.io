export type NoticeScope = "company" | "career" | "official";

export const noticeScopes: Record<
  NoticeScope,
  { code: string; tag: string; title: string; blurb: string }
> = {
  company: {
    code: "01",
    tag: "COMPANY",
    title: "Company news",
    blurb: "회사의 주요 변화와 공식 소식을 기록합니다.",
  },
  career: {
    code: "02",
    tag: "CAREER",
    title: "Careers",
    blurb: "채용 포지션과 팀에 관한 안내를 전합니다.",
  },
  official: {
    code: "03",
    tag: "OFFICIAL",
    title: "Official notice",
    blurb: "회사의 주요 공식 안내를 전달합니다.",
  },
};

export const noticeScopeList = (
  Object.keys(noticeScopes) as NoticeScope[]
).map((scope) => ({ scope, ...noticeScopes[scope] }));

export interface Notice {
  slug: string;
  scope: NoticeScope;
  title: string;
  date: string; // YYYY-MM-DD
  authors: string[];
  description: string;
  appendixName?: string;
  appendixPath?: string;
}

/*
 * 공지 추가 방법: 아래 형식의 { } 블록을 배열에 추가하면 홈페이지 NOTICE
 * 섹션(대표 공지·건수)과 /notice 아카이브에 자동 반영됩니다.
 * scope는 "company" | "career" | "official" 중 하나입니다.
 * 첨부파일은 public/appendix/ 폴더에 넣고 appendixPath에 "/appendix/파일명"을
 * 지정하세요.
 */
export const notices: Notice[] = [
  {
    slug: "website-launch",
    scope: "company",
    title: "웹사이트 개설",
    date: "2024-09-05",
    authors: ["Admin"],
    description:
      "VOID TRADING의 회사 소개와 주요 활동, 연락처를 확인할 수 있는 공식 웹사이트를 개설했습니다.",
  },
];

export const sortedNotices = [...notices].sort((a, b) =>
  b.date.localeCompare(a.date),
);
