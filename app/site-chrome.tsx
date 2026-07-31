"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import { BrandMark } from "./brand";

export const navigation = [
  { id: "home", label: "Home", href: "/", anchor: "/#top" },
  { id: "about", label: "About", href: "/about/", anchor: "/#about" },
  { id: "systems", label: "Systems", href: "/systems/", anchor: "/#systems" },
  { id: "career", label: "Career", href: "/career/", anchor: "/#career" },
  { id: "notice", label: "Notice", href: "/notice/", anchor: "/#notice" },
  { id: "contact", label: "Contact", href: "/contact/", anchor: "/#contact" },
];

const spyIds = ["about", "systems", "career", "notice", "contact"];

/**
 * Shared page header.
 * Desktop nav links to the per-menu routes; the mobile menu anchors into the
 * continuous one-page flow on the home page. With `spy`, the mobile label and
 * highlight follow the scroll position (home only).
 */
export function SiteHeader({
  active,
  spy = false,
}: {
  active: string;
  spy?: boolean;
}) {
  const [spyActive, setSpyActive] = useState<string | null>(null);

  useEffect(() => {
    if (!spy) return;

    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker =
          window.scrollY + Math.min(window.innerHeight * 0.32, 260);
        let current = "home";

        for (const id of spyIds) {
          const section = document.getElementById(id);
          if (!section) continue;

          const sectionTop =
            section.getBoundingClientRect().top + window.scrollY;
          if (sectionTop <= marker) current = id;
        }

        setSpyActive((previous) =>
          previous === current ? previous : current,
        );
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [spy]);

  const current = spyActive ?? active;
  const activeLabel =
    navigation.find((item) => item.id === current)?.label ?? "Home";

  const closeMenu = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.closest("details")?.removeAttribute("open");
  };

  const scrollTopOnHome = (event: MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="site-header">
      <Link
        className="logo-link"
        href="/"
        aria-label="VOID TRADING 홈"
        aria-current={active === "home" ? "page" : undefined}
        onClick={scrollTopOnHome}
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
              href={item.anchor}
              aria-current={current === item.id ? "page" : undefined}
              onClick={closeMenu}
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
