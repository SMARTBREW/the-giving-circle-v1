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
    <div className="flex flex-wrap justify-center gap-3">
      {filters.map((label) => {
        const isActive = value === label;

        return (
          <button
            key={label}
            type="button"
            onClick={() => onChange(label)}
            className={`${SEGOE_UI_CLASS} rounded-[6.25rem] border px-6 py-3 text-[1.125rem] leading-none font-[400] whitespace-nowrap ${
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
