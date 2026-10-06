"use client";

import { useRef } from "react";
import CldImage from "@/components/cld-image";
import PageSection from "@/components/page-section";
import type { CausePageVoicesContent } from "@/constants/cause-page";
import { CAUSE_SECTION, SEGOE_UI_CLASS } from "@/constants";

const ROLE_TONE = {
  student: "bg-[rgba(230,43,79,0.12)] text-[var(--Giving-Red,#e62b4f)]",
  studentVideo: "bg-[#FFFFFF] text-[var(--Giving-Red,#e62b4f)]",
  parent: "bg-[rgba(11,97,154,0.12)] text-[var(--Giving-Blue,#0b619a)]",
  teacher: "bg-[rgba(2,147,140,0.12)] text-[var(--Circle-Green,#02938c)]",
  counsellor: "bg-[rgba(2,147,140,0.12)] text-[var(--Circle-Green,#02938c)]",
  facilitator: "bg-[rgba(2,147,140,0.12)] text-[var(--Circle-Green,#02938c)]",
} as const;

function NavArrow({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d9e1e2] bg-[#FFFFFF] transition-colors hover:border-[var(--Subheading,#4a5558)] sm:h-11 sm:w-11"
    >
      <svg
        aria-hidden
        viewBox="0 0 14 24"
        fill="none"
        className="h-4 w-2.5 text-[var(--Main-headings,#1c2426)]"
      >
        <path
          d={
            direction === "prev"
              ? "M12.5 2L2 12l10.5 10"
              : "M1.5 2L12 12 1.5 22"
          }
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function PhotoSlot({ onDark = false }: { onDark?: boolean }) {
  return (
    <span
      aria-hidden
      className={`${SEGOE_UI_CLASS} flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-dashed bg-[repeating-linear-gradient(-45deg,#eef2f2,#eef2f2_4px,#e8f4f8_4px,#e8f4f8_8px)] text-[0.6875rem] font-[600] sm:h-14 sm:w-14 sm:text-[0.75rem] ${
        onDark
          ? "border-white/50 text-white/80"
          : "border-[#d9e1e2] text-[var(--Subheading,#4a5558)]"
      }`}
    >
      Photo
    </span>
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" />
    </svg>
  );
}

export default function CausePageVoices({
  content,
}: {
  content: CausePageVoicesContent;
}) {
  const { eyebrow, title, body, footer, items } = content;
  const scrollerRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-voice-card]");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <PageSection tone="alternate" innerClassName={CAUSE_SECTION.pad}>
      <div className="flex w-full flex-col gap-4 sm:gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <div className="min-w-0 flex-1">
          <p className={`${SEGOE_UI_CLASS} ${CAUSE_SECTION.eyebrow}`}>{eyebrow}</p>
          <h2 className={CAUSE_SECTION.title}>{title}</h2>
          <p className={`${SEGOE_UI_CLASS} ${CAUSE_SECTION.body}`}>{body}</p>
        </div>

        <div className="hidden shrink-0 gap-2 lg:flex">
          <NavArrow
            direction="prev"
            onClick={() => scrollByCard(-1)}
            label="Previous voices"
          />
          <NavArrow
            direction="next"
            onClick={() => scrollByCard(1)}
            label="Next voices"
          />
        </div>
      </div>

      <ul
        ref={scrollerRef}
        aria-label="Voices from this cause"
        className="mt-6 flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-8 lg:mt-10 lg:gap-5 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const isVideo = item.variant === "video";
          return (
            <li
              key={`${item.role}-${item.name}-${item.detail}`}
              data-voice-card
              className={`flex h-[20rem] w-[min(100%,19rem)] shrink-0 snap-start flex-col rounded-[0.875rem] border border-[#d9e1e2] p-5 shadow-[0px_4px_20px_0px_#0000000F] sm:w-[min(100%,21rem)] sm:rounded-[1rem] sm:p-6 lg:w-[calc((100%-2.5rem)/3)] ${
                isVideo ? "bg-[#0A1E33]" : "bg-[#FFFFFF]"
              }`}
            >
              <span
                className={`${SEGOE_UI_CLASS} inline-flex w-fit rounded-md px-2.5 py-1 text-[0.6875rem] font-[700] leading-none tracking-[0.06em] uppercase sm:text-[0.75rem] ${ROLE_TONE[item.roleTone]}`}
              >
                {item.role}
              </span>

              <div className="mt-5 flex flex-1 flex-col justify-center sm:mt-6">
                <p
                  className={`text-left font-['Georgia'] text-[1.125rem] leading-7 font-[400] tracking-normal italic sm:text-[1.25rem] sm:leading-8 lg:text-[1.3125rem] lg:leading-8 ${
                    isVideo ? "text-[#FFFFFF]" : "text-[var(--Main-headings,#1c2426)]"
                  }`}
                >
                  “{item.quote}”
                </p>

                {isVideo && item.videoHref ? (
                  <a
                    href={item.videoHref}
                    className={`${SEGOE_UI_CLASS} mt-5 inline-flex items-center gap-2 self-start text-[0.9375rem] font-[600] leading-5 text-[#FFFFFF] transition-opacity hover:opacity-90 sm:mt-6 sm:text-[1rem]`}
                  >
                    <PlayIcon className="h-7 w-7 shrink-0 text-[#7ec8e3]" />
                    Watch her story
                  </a>
                ) : null}
              </div>

              <div className="mt-5 border-t border-[#d9e1e2] pt-4 sm:mt-6 sm:pt-5">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  {item.photoSrc ? (
                    <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full sm:h-14 sm:w-14">
                      <CldImage
                        src={item.photoSrc}
                        alt={item.photoAlt}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </span>
                  ) : (
                    <PhotoSlot onDark={isVideo} />
                  )}
                  <span className="min-w-0">
                    <span
                      className={`${SEGOE_UI_CLASS} block text-[0.9375rem] font-[700] leading-5 tracking-normal sm:text-[1rem] sm:leading-6 ${
                        isVideo
                          ? "text-[#FFFFFF]"
                          : "text-[var(--Main-headings,#1c2426)]"
                      }`}
                    >
                      {item.name}
                    </span>
                    <span
                      className={`${SEGOE_UI_CLASS} mt-0.5 block text-[0.8125rem] font-[400] leading-5 tracking-normal sm:text-[0.875rem] ${
                        isVideo ? "text-white/80" : "text-[var(--Subheading,#4a5558)]"
                      }`}
                    >
                      {item.detail}
                    </span>
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 flex items-center justify-between gap-3 sm:mt-5 lg:mt-6">
        <p
          className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[400] leading-5 tracking-normal text-[var(--Subheading,#4a5558)] sm:text-[0.8125rem]`}
        >
          {footer}
        </p>
        <div className="flex shrink-0 gap-2 lg:hidden">
          <NavArrow
            direction="prev"
            onClick={() => scrollByCard(-1)}
            label="Previous voices"
          />
          <NavArrow
            direction="next"
            onClick={() => scrollByCard(1)}
            label="Next voices"
          />
        </div>
      </div>
    </PageSection>
  );
}
