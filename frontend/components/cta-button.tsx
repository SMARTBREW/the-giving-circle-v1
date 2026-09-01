"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { SEGOE_UI_CLASS } from "@/constants";

const easeOut = (t: number) => 1 - (1 - t) ** 3;

function scrollToId(id: string, duration: number) {
  const el = document.getElementById(id);
  if (!el) return;

  const start = window.scrollY;
  const end = el.getBoundingClientRect().top + window.scrollY;
  const t0 = performance.now();

  const tick = (now: number) => {
    const t = Math.min(1, (now - t0) / duration);
    window.scrollTo(0, start + (end - start) * easeOut(t));
    if (t < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

export default function CtaButton({
  href,
  children,
  className = "",
  labelClassName = "",
  onClick,
  variant = "solid",
  smoothScroll = false,
}: {
  href: string;
  children: string;
  className?: string;
  labelClassName?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
  smoothScroll?: boolean;
}) {
  const isOutline = variant === "outline";

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (smoothScroll) {
      e.preventDefault();
      const id = href.split("#")[1];
      if (id) {
        scrollToId(id, 300);
        window.history.pushState(null, "", href);
      }
    }
    onClick?.();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-[6.25rem] ${
        isOutline
          ? "border border-[var(--Main-CTA-button,#00A3BE)] bg-[#F6F3EF]"
          : "bg-[var(--Main-CTA-button,#00A3BE)]"
      } ${className}`}
    >
      <span
        className={`${SEGOE_UI_CLASS} flex h-[1.5rem] items-center justify-center text-center text-[1.125rem] leading-none whitespace-nowrap ${
          isOutline
            ? "text-[var(--Secondary-outlined-button,#00A3BE)]"
            : "text-[#FFFFFF]"
        } ${labelClassName}`}
      >
        {children}
      </span>
    </Link>
  );
}
