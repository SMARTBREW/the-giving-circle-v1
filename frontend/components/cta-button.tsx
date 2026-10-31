"use client";

import type { MouseEvent, ReactNode } from "react";
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
  hoverFill = false,
  wrap = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  labelClassName?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
  smoothScroll?: boolean;
  hoverFill?: boolean;
  wrap?: boolean;
}) {
  const isOutline = variant === "outline";

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (smoothScroll) {
      const id = href.split("#")[1];
      if (id && document.getElementById(id)) {
        e.preventDefault();
        scrollToId(id, 300);
        window.history.pushState(null, "", href.includes("#") ? `#${id}` : href);
      }
    }
    onClick?.();
  };

  return (
    <Link
      href={href}
      prefetch={false}
      onClick={handleClick}
      className={`${isOutline ? "tgc-btn-outline" : "tgc-btn-primary"} ${
        hoverFill
          ? "group [transition:background-color_400ms_cubic-bezier(0.22,1,0.36,1),color_400ms_cubic-bezier(0.22,1,0.36,1),border-color_400ms_cubic-bezier(0.22,1,0.36,1)] hover:bg-circle hover:text-white"
          : ""
      } ${className}`}
    >
      <span
        className={`${SEGOE_UI_CLASS} relative z-[1] flex min-h-[1.5rem] min-w-0 shrink origin-center items-center justify-center gap-2 text-center text-[length:inherit] font-semibold tracking-normal text-current ${
          wrap
            ? "gap-1.5 text-balance leading-snug whitespace-normal"
            : "leading-none whitespace-normal min-[90rem]:whitespace-nowrap"
        } ${
          hoverFill
            ? "[transition:transform_500ms_cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            : ""
        } ${labelClassName}`}
      >
        {children}
      </span>
    </Link>
  );
}
