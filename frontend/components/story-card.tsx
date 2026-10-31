"use client";

import CldImage from "@/components/cld-image";
import { SEGOE_UI_CLASS, type StoryArticle } from "@/constants";

const META_ICON_CLASS = "h-5 w-5 shrink-0";

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={META_ICON_CLASS}
    >
      <path
        d="M5 19V9.5L12 6l7 3.5V19"
        stroke="var(--color-circle)"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M10 19v-4h4v4M11 11h.01M13 11h.01M11 13.5h.01M13 13.5h.01"
        stroke="var(--color-circle)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PinMetaIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={META_ICON_CLASS}
    >
      <path
        d="M12 19.5s4.25-3.8 4.25-7.6a4.25 4.25 0 1 0-8.5 0c0 3.8 4.25 7.6 4.25 7.6Z"
        stroke="var(--color-subhead)"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="11.9"
        r="1.5"
        stroke="var(--color-subhead)"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={META_ICON_CLASS}
    >
      <rect
        x="5"
        y="6"
        width="14"
        height="13"
        rx="2"
        stroke="var(--color-subhead)"
        strokeWidth="1.75"
      />
      <path
        d="M9 4.5V7M15 4.5V7M5 10h14"
        stroke="var(--color-subhead)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function StoryCard({
  story,
  imageFirst,
  expanded,
  onToggle,
}: {
  story: StoryArticle;
  imageFirst: boolean;
  expanded: boolean;
  onToggle: () => void;
}) {
  const imageBlock = (
    <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-[1rem] border border-line sm:aspect-[16/10] md:aspect-auto md:h-[32rem] md:w-[min(46%,26rem)] md:self-start lg:h-[36rem] lg:w-[min(44%,28rem)] min-[90rem]:aspect-[4/5] min-[90rem]:h-auto min-[90rem]:w-[38%]">
      <CldImage
        src={story.src}
        alt={story.alt}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1439px) 46vw, 38vw"
        loading="lazy"
        className={`object-cover ${story.objectPosition || "object-center"}`}
      />

      <span
        className={`${SEGOE_UI_CLASS} absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-circle px-2.5 py-1 text-[0.75rem] font-bold leading-none tracking-normal text-white sm:top-4 sm:left-4 sm:px-3 sm:py-1.5 sm:text-[0.8125rem]`}
      >
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
          <circle cx="8" cy="8" r="6.5" stroke="#FFFFFF" strokeWidth="1.5" />
          <path
            d="M5 8.2 7 10l4-4.5"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Verified Impact
      </span>

      <span
        className={`${SEGOE_UI_CLASS} absolute top-3 right-3 z-10 inline-flex items-center rounded-full px-2.5 py-1 text-[0.75rem] font-bold leading-none tracking-normal text-white sm:top-4 sm:right-4 sm:px-3 sm:py-1.5 sm:text-[0.8125rem] ${story.tagClassName}`}
      >
        {story.tag}
      </span>

      <span className="absolute bottom-3 left-3 z-10 rounded-[0.75rem] bg-white px-3 py-2 shadow-[0_0.25rem_1rem_0_#00000014] sm:bottom-4 sm:left-4 sm:px-4 sm:py-2.5">
        <span
          className={`${SEGOE_UI_CLASS} block text-[1.125rem] font-bold leading-none tracking-normal text-circle sm:text-[1.25rem]`}
        >
          {story.highlight.value}
        </span>
        <span
          className={`${SEGOE_UI_CLASS} mt-1 block text-[0.75rem] font-medium leading-tight tracking-normal text-subhead sm:text-[0.8125rem]`}
        >
          {story.highlight.label}
        </span>
      </span>
    </div>
  );

  const contentBlock = (
    <div className="flex min-w-0 flex-1 flex-col">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span
          className={`${SEGOE_UI_CLASS} inline-flex items-center gap-1.5 text-[0.875rem] font-semibold leading-none tracking-normal text-circle`}
        >
          <BuildingIcon />
          {story.org}
        </span>
        <span
          className={`${SEGOE_UI_CLASS} inline-flex items-center gap-1.5 text-[0.875rem] font-normal leading-none tracking-normal text-subhead`}
        >
          <PinMetaIcon />
          {story.location}
        </span>
      </div>

      <h3 className="mt-3 font-georgia text-[1.5rem] font-bold leading-[2rem] tracking-normal text-heading sm:mt-4 sm:text-[1.75rem] sm:leading-[2.25rem] md:text-[1.625rem] md:leading-[2.125rem] lg:text-[2.125rem] lg:leading-[2.625rem] min-[90rem]:text-[2.5rem] min-[90rem]:leading-[3rem]">
        {story.title}
      </h3>

      <p
        className={`${SEGOE_UI_CLASS} mt-3 text-[0.9375rem] font-normal leading-6 tracking-normal text-subhead sm:mt-4 sm:text-[1rem] sm:leading-7`}
      >
        {story.summary}
      </p>

      <ul className="mt-5 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-5 min-[56.25rem]:grid-cols-4 min-[56.25rem]:gap-3 min-[90rem]:gap-3">
        {story.stats.map((stat) => (
          <li key={stat.label} className="flex flex-col gap-1">
            <span
              className={`${SEGOE_UI_CLASS} text-[1rem] font-bold leading-none tracking-normal text-heading sm:text-[1.125rem]`}
            >
              {stat.value}
            </span>
            <span
              className={`${SEGOE_UI_CLASS} text-[0.75rem] font-normal leading-snug tracking-normal text-subhead sm:text-[0.8125rem]`}
            >
              {stat.label}
            </span>
          </li>
        ))}
      </ul>

      <blockquote className="mt-5 border-l-[0.1875rem] border-circle pl-4 sm:mt-6 sm:pl-5">
        <p
          className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-normal leading-6 tracking-normal text-subhead italic sm:text-[1rem] sm:leading-7`}
        >
          “{story.quote.text}”
        </p>
        <footer
          className={`${SEGOE_UI_CLASS} mt-2 text-[0.8125rem] font-semibold leading-snug tracking-normal text-subhead sm:text-[0.875rem]`}
        >
          {story.quote.author} - {story.quote.role}
        </footer>
      </blockquote>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#00000014] pt-4 sm:mt-6 sm:pt-5">
        <span
          className={`${SEGOE_UI_CLASS} inline-flex items-center gap-1.5 text-[0.8125rem] font-normal leading-none tracking-normal text-subhead sm:text-[0.875rem]`}
        >
          <CalendarIcon />
          {story.date}
        </span>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          className={`${SEGOE_UI_CLASS} inline-flex h-12 w-full items-center justify-center rounded-full border border-circle bg-white px-6 text-[0.875rem] font-semibold leading-none tracking-normal text-circle transition-colors hover:bg-circle hover:text-white sm:h-14 sm:w-auto sm:px-8 sm:text-[0.9375rem]`}
        >
          {expanded ? "Show Less" : "Read Full Story"}
        </button>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-3 flex flex-col gap-4 border-t border-[#00000014] pt-3 sm:mt-4 sm:pt-4 md:mt-6 md:pt-6">
            {story.body.map((para) => (
              <p
                key={para.slice(0, 48)}
                className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-normal leading-6 tracking-normal text-subhead sm:text-[1rem] sm:leading-7 lg:text-[1.0625rem] lg:leading-8`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <article
      id={story.id}
      className="scroll-mt-24 flex w-full flex-col gap-6 md:items-start md:gap-8 lg:gap-10 min-[90rem]:gap-12"
    >
      <div
        className={`flex w-full flex-col gap-6 md:items-start md:gap-8 lg:gap-10 min-[90rem]:gap-12 ${
          imageFirst ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {imageBlock}
        {contentBlock}
      </div>
    </article>
  );
}
