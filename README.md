# ⚡️VOID-TRADING with Next.js⚡️

VOID TRADING 공식 웹사이트 — **https://www.void-trading.com**

- Next.js (App Router, `output: "export"`)
- Tailwind CSS v4
- GitHub Pages (`gh-pages` 브랜치 배포)

# Steps ▶️

```
# Clone this repository
$ git clone https://github.com/voidtrading/voidtrading.github.io
```

```
# Go into the repository
$ cd voidtrading.github.io
```

```
# Install dependencies
$ npm install
```

```
# Start the project in development
$ npm run dev
```

```
# Build the static site into out/
$ npm run build
```

# Deploy with gh-pages 🚀

`main`에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가 자동으로
빌드해 `gh-pages` 브랜치로 배포합니다. 수동 실행이 필요하면 Actions 탭에서
"Deploy to GitHub Pages"를 workflow_dispatch로 실행하세요.

# Notice 작성 📝

`app/notices.ts`의 `notices` 배열에 아래 형식의 블록을 추가하고 `main`에
push하면 끝입니다. 홈 NOTICE 섹션(대표 공지·건수)과 `/notice` 아카이브에
자동 반영되고, 날짜 기준 최신 글이 대표 공지가 됩니다.

```ts
{
  slug: "quant-developer-hiring",        // 고유 영문 id (중복 금지)
  scope: "career",                       // "company" | "career" | "official"
  title: "퀀트 개발자 채용",
  date: "2026-08-01",                    // YYYY-MM-DD, 정렬 기준
  authors: ["Admin"],
  description: "시스템 트레이딩 인프라를 함께 만들 퀀트 개발자를 찾습니다.",
  appendixName: "job-description.pdf",   // 첨부파일 (선택)
  appendixPath: "/appendix/job-description.pdf",
},
```

- `scope` 매핑: `company` → Company news, `career` → Careers,
  `official` → Official notice
- 첨부파일은 `public/appendix/` 폴더에 넣고 `appendixPath`에
  `"/appendix/파일명"`을 지정하세요 (없으면 두 필드 생략)

## Previous version 📦

리뉴얼 이전 SvelteKit 사이트는 `v1-sveltekit` 태그로 보존되어 있습니다.

- svelte-icons
- @sveltejs/adapter-gh-pages

## Authors ❤️

- Jayden.Lee
- blueish
