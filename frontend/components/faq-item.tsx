import { SEGOE_UI_CLASS } from "@/constants";

export default function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <li
      className={`w-full rounded-[1rem] border border-[var(--Divider,#D9E1EC)] bg-[#FFFFFF] shadow-[0px_5px_15px_0px_#00142F0F] min-[90rem]:w-[52.1875rem] ${
        isOpen ? "py-5 sm:py-6 md:py-8" : "py-5 sm:py-6 md:py-8"
      }`}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-3 px-4 text-left sm:items-center sm:gap-4 sm:px-6 md:gap-6 md:px-8 min-[90rem]:px-10"
      >
        <span
          className={`${SEGOE_UI_CLASS} min-w-0 flex-1 text-[1rem] leading-6 font-[500] tracking-normal text-[var(--Main-headings,#000000)] sm:text-[1.125rem] sm:leading-7 md:text-[1.25rem] md:leading-8`}
        >
          {question}
        </span>
        <span
          aria-hidden="true"
          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--Main-CTA-button,#00A3BE)] bg-transparent sm:mt-0"
        >
          {isOpen ? (
            <span className="block h-0.5 w-3.5 rounded-full bg-[var(--Main-CTA-button,#00A3BE)]" />
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 7H11.5M7 2.5V11.5"
                stroke="var(--Main-CTA-button, #00A3BE)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen ? (
        <p
          className={`${SEGOE_UI_CLASS} mt-4 px-4 text-[0.9375rem] leading-6 font-[400] tracking-normal text-[var(--faq-answer,#121212A6)] sm:mt-5 sm:px-6 sm:text-[1rem] md:mt-6 md:px-8 min-[90rem]:px-10`}
        >
          <span className="block min-[90rem]:w-[47.1875rem]">{answer}</span>
        </p>
      ) : null}
    </li>
  );
}
