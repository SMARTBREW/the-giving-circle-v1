import Image from "next/image";
import { SEGOE_UI_CLASS } from "@/constants";

function OptionRadio({ selected }: { selected: boolean }) {
  return (
    <span
      aria-hidden
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 sm:h-6 sm:w-6 ${
        selected
          ? "border-[var(--Main-CTA-button,#02938c)]"
          : "border-[#d9e1e2]"
      }`}
    >
      {selected ? (
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--Main-CTA-button,#02938c)] sm:h-3 sm:w-3" />
      ) : null}
    </span>
  );
}

export default function ApplyOptionCard({
  selected,
  label,
  iconSrc,
  onClick,
}: {
  selected: boolean;
  label: string;
  iconSrc: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex h-14 w-full items-center gap-3 rounded-xl border px-3.5 text-left outline-none transition-[border-color,background-color,box-shadow] sm:h-16 sm:gap-4 sm:rounded-2xl sm:px-4 focus-visible:border-[var(--Main-CTA-button,#02938c)] focus-visible:shadow-[0_0_0_1px_var(--Main-CTA-button,#02938c)] ${
        selected
          ? "border-[var(--Main-CTA-button,#02938c)] bg-[var(--brand-selected,#e8f5f3)]"
          : "border-[#D9E1E2] bg-[#FFFFFF] shadow-[0_1px_2px_rgba(16,24,40,0.04)] hover:border-[#4A5558]"
      }`}
    >
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden sm:h-10 sm:w-10">
        <Image
          src={iconSrc}
          alt=""
          width={40}
          height={40}
          unoptimized
          className="h-full w-full object-contain"
        />
      </span>
      <span
        className={`${SEGOE_UI_CLASS} min-w-0 flex-1 text-[1rem] leading-none font-[600] text-[#060710] sm:text-[1.125rem]`}
      >
        {label}
      </span>
      <OptionRadio selected={selected} />
    </button>
  );
}
