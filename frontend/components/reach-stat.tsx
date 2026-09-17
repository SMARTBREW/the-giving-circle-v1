import { SEGOE_UI_CLASS } from "@/constants";

export default function ReachStat({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const isRightCol = index % 2 === 1;
  const hasPlus = value.endsWith("+");
  const mainValue = hasPlus ? value.slice(0, -1) : value;

  return (
    <li
      className={`relative flex flex-col items-center justify-center px-3 py-5 sm:px-4 sm:py-6 min-[56.25rem]:px-2 min-[56.25rem]:py-4 lg:px-2 lg:py-4 min-[90rem]:h-[6.75rem] min-[90rem]:py-0 ${
        index > 0 ? "min-[56.25rem]:border-l min-[56.25rem]:border-[#00000026]" : ""
      }`}
    >
      {isRightCol ? (
        <span
          aria-hidden
          className="absolute top-3 bottom-3 left-0 w-px bg-[#00000026] min-[56.25rem]:hidden"
        />
      ) : null}
      <span
        aria-label={value}
        className={`${SEGOE_UI_CLASS} inline-flex items-center justify-center gap-1 text-[1.75rem] leading-none font-[700] tracking-[-0.025em] text-[#00A98F] sm:gap-1.5 sm:text-[2.25rem] min-[56.25rem]:text-[1.75rem] lg:text-[2.25rem] min-[90rem]:text-[2.75rem] min-[90rem]:leading-[3.75rem] min-[90rem]:whitespace-nowrap`}
      >
        <span aria-hidden>{mainValue}</span>
        {hasPlus ? <span aria-hidden>+</span> : null}
      </span>
      <span
        className={`${SEGOE_UI_CLASS} mt-2 text-center text-[0.8125rem] leading-5 font-[400] tracking-normal text-[#121212] capitalize sm:mt-3 sm:text-[1rem] sm:leading-6 min-[56.25rem]:mt-2 min-[56.25rem]:text-[0.8125rem] min-[56.25rem]:leading-5 lg:mt-3 lg:text-[1.125rem] lg:leading-7 min-[90rem]:mt-4 min-[90rem]:h-8 min-[90rem]:text-[1.25rem] min-[90rem]:leading-8 min-[90rem]:whitespace-nowrap`}
      >
        {label}
      </span>
    </li>
  );
}
