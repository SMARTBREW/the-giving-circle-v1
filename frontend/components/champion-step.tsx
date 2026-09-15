import Image from "next/image";
import { SEGOE_UI_CLASS } from "@/constants";

export default function ChampionStep({
  iconSrc,
  title,
  body,
}: {
  iconSrc: string;
  title: string;
  body: string;
}) {
  return (
    <li className="group flex flex-row items-start gap-3 sm:gap-3.5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.75rem] border-2 border-[#00A98F40] bg-[#FFFFFF] transition-colors duration-300 group-hover:border-[#00A3BE] group-hover:bg-[#00A3BE14] sm:h-12 sm:w-12 md:h-12 md:w-12 lg:h-[3.25rem] lg:w-[3.25rem] min-[90rem]:h-14 min-[90rem]:w-14 min-[90rem]:rounded-[0.875rem]">
        <Image
          src={iconSrc}
          alt=""
          width={48}
          height={48}
          className="h-6 w-6 object-contain sm:h-7 sm:w-7 lg:h-8 lg:w-8 min-[90rem]:h-9 min-[90rem]:w-9"
        />
      </span>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span
          className={`${SEGOE_UI_CLASS} block w-full text-[0.9375rem] leading-5 font-[500] tracking-normal text-[var(--Neutral-Black,#000000)] sm:text-[1.0625rem] sm:leading-6 md:text-[1.0625rem] lg:text-[1.125rem] lg:leading-6 min-[90rem]:text-[1.25rem] min-[90rem]:leading-7`}
        >
          {title}
        </span>
        <span
          className={`${SEGOE_UI_CLASS} block w-full text-[0.8125rem] leading-5 font-[400] tracking-normal text-[var(--Paragraph,#5F6D64)] sm:text-[0.875rem] sm:leading-5 md:text-[0.875rem] lg:text-[0.9375rem] lg:leading-5 min-[90rem]:text-[1rem] min-[90rem]:leading-6`}
        >
          {body}
        </span>
      </span>
    </li>
  );
}
