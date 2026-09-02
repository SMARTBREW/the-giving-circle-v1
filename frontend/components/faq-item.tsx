import { SEGOE_UI_CLASS } from "@/constants";

export default function FaqItem({
  question,
  questionClassName = "",
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  questionClassName?: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <li
      className={`w-full rounded-[1rem] border border-[var(--Divider,#D9E1EC)] bg-[#FFFFFF] shadow-[0px_5px_15px_0px_#00142F0F] md:w-[52.1875rem] ${
        isOpen ? "py-8" : "h-24 py-8"
      }`}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 px-10 text-left"
      >
        <span
          className={`${SEGOE_UI_CLASS} h-8 whitespace-nowrap text-[1.25rem] leading-8 font-[500] tracking-normal text-[var(--Main-headings,#000000)] ${questionClassName}`}
        >
          {question}
        </span>
        <span
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--Main-CTA-button,#00A3BE)] bg-transparent"
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
          className={`${SEGOE_UI_CLASS} mt-6 px-10 text-[1rem] leading-6 font-[400] tracking-normal text-[var(--faq-answer,#121212A6)]`}
        >
          <span className="block md:w-[47.1875rem]">{answer}</span>
        </p>
      ) : null}
    </li>
  );
}
