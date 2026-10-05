"use client";

import { useState } from "react";
import { SEGOE_UI_CLASS } from "@/constants";
import type { FaqLink } from "@/constants/faqs";
import FaqAnswerText from "@/components/faq-answer-text";

export default function FaqItem({
  id,
  question,
  answer,
  links,
  defaultOpen = false,
  questionAs: QuestionTag = "h4",
  fullWidth = false,
  compact = false,
}: {
  id: string;
  question: string;
  answer: string;
  links?: readonly FaqLink[];
  defaultOpen?: boolean;
  /** h4 under FaqsSection (h3); h3 when nested under a content h2 (e.g. blog). */
  questionAs?: "h3" | "h4";
  fullWidth?: boolean;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <li className={`w-full ${fullWidth ? "" : "min-[90rem]:w-[52.1875rem]"}`}>
      <details
        id={id}
        className={`group w-full rounded-[0.875rem] border border-[var(--Divider,#D9E1E2)] bg-[#FFFFFF] shadow-[0px_5px_15px_0px_#00142F0F] sm:rounded-[1rem] ${
          compact
            ? "py-3 sm:py-3.5"
            : "py-5 sm:py-6 md:py-8"
        }`}
        open={open}
        onToggle={(event) => {
          setOpen(event.currentTarget.open);
        }}
      >
        <summary
          className={`flex w-full cursor-pointer list-none items-start justify-between text-left sm:items-center [&::-webkit-details-marker]:hidden ${
            compact
              ? "gap-2.5 px-3.5 sm:gap-3 sm:px-4 md:px-5"
              : "gap-3 px-4 sm:gap-4 sm:px-6 md:gap-6 md:px-8 min-[90rem]:px-10"
          }`}
        >
          <QuestionTag
            className={`${SEGOE_UI_CLASS} min-w-0 flex-1 font-[500] tracking-normal text-[var(--Main-headings,#1c2426)] ${
              compact
                ? "text-[0.875rem] leading-5 sm:text-[0.9375rem] sm:leading-6"
                : "text-[1rem] leading-6 sm:text-[1.125rem] sm:leading-7 md:text-[1.25rem] md:leading-8"
            }`}
          >
            {question}
          </QuestionTag>
          <span
            aria-hidden="true"
            className={`relative flex shrink-0 items-center justify-center rounded-full border border-[var(--Main-CTA-button,#02938c)] bg-transparent ${
              compact
                ? "mt-0 h-7 w-7 sm:mt-0"
                : "mt-0.5 h-8 w-8 sm:mt-0"
            }`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className={`group-open:hidden ${compact ? "h-3 w-3" : ""}`}
            >
              <path
                d="M2.5 7H11.5M7 2.5V11.5"
                stroke="var(--Main-CTA-button, #02938c)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span
              className={`hidden rounded-full bg-[var(--Main-CTA-button,#02938c)] group-open:block ${
                compact ? "h-0.5 w-3" : "h-0.5 w-3.5"
              }`}
            />
          </span>
        </summary>
        {/* Always in the DOM so crawlers see full answers even when collapsed */}
        <FaqAnswerText
          text={answer}
          links={links}
          className={`${SEGOE_UI_CLASS} font-[400] tracking-normal text-[var(--faq-answer,#121212A6)] ${
            compact
              ? "mt-2.5 px-3.5 text-[0.8125rem] leading-5 sm:mt-3 sm:px-4 sm:text-[0.875rem] sm:leading-5 md:px-5"
              : "mt-4 px-4 text-[0.9375rem] leading-6 sm:mt-5 sm:px-6 sm:text-[1rem] md:mt-6 md:px-8 min-[90rem]:px-10"
          } ${fullWidth || compact ? "" : "[&_p]:min-[90rem]:max-w-[47.1875rem]"}`}
        />
      </details>
    </li>
  );
}
