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
}: {
  id: string;
  question: string;
  answer: string;
  links?: readonly FaqLink[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <li className="w-full min-[90rem]:w-[52.1875rem]">
      <details
        id={id}
        className="group w-full rounded-[1rem] border border-[var(--Divider,#D9E1E2)] bg-[#FFFFFF] py-5 shadow-[0px_5px_15px_0px_#00142F0F] sm:py-6 md:py-8"
        open={open}
        onToggle={(event) => {
          setOpen(event.currentTarget.open);
        }}
      >
        <summary className="flex w-full cursor-pointer list-none items-start justify-between gap-3 px-4 text-left sm:items-center sm:gap-4 sm:px-6 md:gap-6 md:px-8 min-[90rem]:px-10 [&::-webkit-details-marker]:hidden">
          <h3
            className={`${SEGOE_UI_CLASS} min-w-0 flex-1 text-[1rem] leading-6 font-[500] tracking-normal text-[var(--Main-headings,#1c2426)] sm:text-[1.125rem] sm:leading-7 md:text-[1.25rem] md:leading-8`}
          >
            {question}
          </h3>
          <span
            aria-hidden="true"
            className="relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--Main-CTA-button,#02938c)] bg-transparent sm:mt-0"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="group-open:hidden"
            >
              <path
                d="M2.5 7H11.5M7 2.5V11.5"
                stroke="var(--Main-CTA-button, #02938c)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="hidden h-0.5 w-3.5 rounded-full bg-[var(--Main-CTA-button,#02938c)] group-open:block" />
          </span>
        </summary>
        {/* Always in the DOM so crawlers see full answers even when collapsed */}
        <FaqAnswerText
          text={answer}
          links={links}
          className={`${SEGOE_UI_CLASS} mt-4 px-4 text-[0.9375rem] leading-6 font-[400] tracking-normal text-[var(--faq-answer,#121212A6)] sm:mt-5 sm:px-6 sm:text-[1rem] md:mt-6 md:px-8 min-[90rem]:px-10 [&_p]:min-[90rem]:max-w-[47.1875rem]`}
        />
      </details>
    </li>
  );
}
