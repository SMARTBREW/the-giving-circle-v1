import { SEGOE_UI_CLASS } from "@/constants";

type ValueIcon = "transparency" | "accountability" | "integrity" | "community";

function ValueIconMark({ icon }: { icon: ValueIcon }) {
  const stroke = "#00A3BE";

  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--Main-CTA-button,#00A3BE)] bg-[#FFFFFF] sm:h-12 sm:w-12 min-[90rem]:h-14 min-[90rem]:w-14">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="h-5 w-5 sm:h-6 sm:w-6 min-[90rem]:h-7 min-[90rem]:w-7"
      >
        {icon === "transparency" ? (
          <>
            <path
              d="M4 24C8.5 14 16 9 24 9C32 9 39.5 14 44 24C39.5 34 32 39 24 39C16 39 8.5 34 4 24Z"
              stroke={stroke}
              strokeWidth="2.25"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="24" r="6.5" stroke={stroke} strokeWidth="2.25" />
          </>
        ) : null}
        {icon === "accountability" ? (
          <>
            <path
              d="M24 6L38 12V22C38 31.5 32 38.5 24 42C16 38.5 10 31.5 10 22V12L24 6Z"
              stroke={stroke}
              strokeWidth="2.25"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 24L22 28.5L31 19.5"
              stroke={stroke}
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        ) : null}
        {icon === "integrity" ? (
          <>
            <path
              d="M24 8L40 24L24 40L8 24L24 8Z"
              stroke={stroke}
              strokeWidth="2.25"
              strokeLinejoin="round"
            />
            <path
              d="M24 16V32M16 24H32"
              stroke={stroke}
              strokeWidth="2.25"
              strokeLinecap="round"
            />
          </>
        ) : null}
        {icon === "community" ? (
          <>
            <circle cx="16" cy="16" r="5" stroke={stroke} strokeWidth="2.25" />
            <circle cx="32" cy="16" r="5" stroke={stroke} strokeWidth="2.25" />
            <path
              d="M6 38C6 32.5 10.5 28 16 28C18.2 28 20.2 28.7 21.8 29.8"
              stroke={stroke}
              strokeWidth="2.25"
              strokeLinecap="round"
            />
            <path
              d="M26.2 29.8C27.8 28.7 29.8 28 32 28C37.5 28 42 32.5 42 38"
              stroke={stroke}
              strokeWidth="2.25"
              strokeLinecap="round"
            />
            <circle cx="24" cy="22" r="5" stroke={stroke} strokeWidth="2.25" />
            <path
              d="M14 40C14 34.5 18.5 30 24 30C29.5 30 34 34.5 34 40"
              stroke={stroke}
              strokeWidth="2.25"
              strokeLinecap="round"
            />
          </>
        ) : null}
      </svg>
    </span>
  );
}

export default function CoreValueCard({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: ValueIcon;
}) {
  return (
    <li className="flex h-full w-full flex-col items-center rounded-[1rem] border border-[#BDBDBD] bg-[#FFFFFF] px-5 py-5 shadow-[0px_4px_20px_0px_#0000000F] sm:px-6 sm:py-6 md:px-7 md:py-7 min-[90rem]:px-8 min-[90rem]:py-8">
      <ValueIconMark icon={icon} />
      <h3
        className={`${SEGOE_UI_CLASS} mt-3 text-center text-[1.375rem] leading-none font-[700] tracking-normal text-[#000000] sm:mt-4 sm:text-[1.5rem] md:text-[1.625rem] min-[90rem]:text-[1.75rem]`}
      >
        {title}
      </h3>
      <p
        className={`${SEGOE_UI_CLASS} mt-2.5 text-center text-[0.9375rem] leading-6 font-[400] tracking-normal text-[var(--Subheading,#45564B)] sm:mt-3 sm:text-[1rem] sm:leading-7 min-[90rem]:text-[1.125rem] min-[90rem]:leading-7`}
      >
        {body}
      </p>
    </li>
  );
}
