"use client";

import { SEGOE_UI_CLASS } from "@/constants";

export default function FilterChips({
  options,
  value,
  onChange,
}: {
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex w-full flex-wrap justify-center gap-2 sm:gap-3">
      {options.map((label) => {
        const isActive = value === label;

        return (
          <button
            key={label}
            type="button"
            onClick={() => onChange(label)}
            className={`${SEGOE_UI_CLASS} rounded-[6.25rem] border px-4 py-2.5 text-[0.9375rem] leading-none font-[400] whitespace-nowrap sm:px-5 sm:py-3 sm:text-[1rem] md:px-6 md:text-[1.0625rem] min-[90rem]:text-[1.125rem] ${
              isActive
                ? "border-[var(--Main-CTA-button,#02938c)] bg-[var(--Main-CTA-button,#02938c)] text-[#FFFFFF]"
                : "border-[var(--Main-CTA-button,#02938c)] bg-[#FFFFFF] text-[var(--Secondary-outlined-button,#02938c)]"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
