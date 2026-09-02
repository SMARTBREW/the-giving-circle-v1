import { SEGOE_UI_CLASS } from "@/constants";

export default function ReachStat({
  value,
  label,
  showDivider = false,
}: {
  value: string;
  label: string;
  showDivider?: boolean;
}) {
  return (
    <li className="relative flex h-[6.75rem] w-full flex-col items-center">
      {showDivider ? (
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 hidden h-[6.75rem] w-px bg-[#00000026] md:block"
        />
      ) : null}
      <span
        className={`${SEGOE_UI_CLASS} h-[3.75rem] text-center text-[2.75rem] leading-[3.75rem] font-[700] tracking-[-0.025em] whitespace-nowrap text-[#00A98F]`}
      >
        {value}
      </span>
      <span
        className={`${SEGOE_UI_CLASS} mt-4 h-8 text-center text-[1.25rem] leading-8 font-[300] tracking-normal whitespace-nowrap text-[#121212] capitalize`}
      >
        {label}
      </span>
    </li>
  );
}
