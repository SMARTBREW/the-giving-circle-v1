"use client";

import { CAUSE_CARDS, CAUSE_FILTER_ALL, SEGOE_UI_CLASS } from "@/constants";

export default function CausesFilters({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const filters = [CAUSE_FILTER_ALL, ...CAUSE_CARDS.map((cause) => cause.label)];

  return (
    <div className="flex w-full flex-wrap justify-center gap-2 sm:gap-3">
      {filters.map((label) => {
        const isActive = value === label;

        return (
          <button
            key={label}
            type="button"
            onClick={() => onChange(label)}
            className={`${SEGOE_UI_CLASS} rounded-[6.25rem] border px-4 py-2.5 text-[0.9375rem] leading-none font-[400] whitespace-nowrap sm:px-5 sm:py-3 sm:text-[1rem] md:px-6 md:text-[1.0625rem] min-[90rem]:text-[1.125rem] ${
              isActive
                ? "border-[var(--Main-CTA-button,#00A3BE)] bg-[var(--Main-CTA-button,#00A3BE)] text-[#FFFFFF]"
                : "border-[var(--Main-CTA-button,#00A3BE)] bg-[#FFFFFF] text-[var(--Secondary-outlined-button,#00A3BE)]"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
