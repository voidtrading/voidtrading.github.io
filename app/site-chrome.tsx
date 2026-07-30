import Link from "next/link";
import type { ReactNode } from "react";
import { BrandMark } from "./brand";

export const navigation = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about/" },
  { id: "systems", label: "Systems", href: "/systems/" },
  { id: "career", label: "Career", href: "/career/" },
  { id: "notice", label: "Notice", href: "/notice/" },
  { id: "contact", label: "Contact", href: "/contact/" },
];

export function SiteHeader({ active }: { active: string }) {
  const activeLabel =
    navigation.find((item) => item.id === active)?.label ?? "Home";

  return (
    <header className="site-header">
      <Link
        className="logo-link"
        href="/"
        aria-label="VOID TRADING 홈"
        aria-current={active === "home" ? "page" : undefined}
      >
        <BrandMark />
      </Link>

      <nav className="desktop-nav" aria-label="주요 메뉴">
        {navigation.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            aria-current={active === item.id ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <details className="mobile-nav">
        <summary>Menu / {activeLabel}</summary>
        <nav aria-label="모바일 메뉴">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={active === item.id ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <p>
        Curiosity <b>·</b> Passion <b>·</b> Edge
      </p>
      <div>
        <span>
          Algorithmic Trading · Liquidity Engineering · Execution Technology
        </span>
        <span>© VOID TRADING Co., Ltd. 2026</span>
      </div>
    </footer>
  );
}

export function SectionHeading({
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

export function ChapterDivider({ label }: { label: string }) {
  return (
    <div className="chapter-divider" aria-hidden="true">
      <i />
      <span />
      <small>{label}</small>
    </div>
  );
}
