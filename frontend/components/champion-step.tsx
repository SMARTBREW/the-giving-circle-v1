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
    <li className="group flex flex-row items-start gap-3 sm:gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.75rem] border-2 border-[#00A98F40] bg-[#FFFFFF] transition-colors duration-300 group-hover:border-[#00A3BE] group-hover:bg-[#00A3BE14] sm:h-14 sm:w-14 min-[90rem]:h-[4.5rem] min-[90rem]:w-[4.5rem] min-[90rem]:rounded-[1rem]">
        <Image
          src={iconSrc}
          alt=""
          width={48}
          height={48}
          className="h-7 w-7 object-contain sm:h-8 sm:w-8 min-[90rem]:h-12 min-[90rem]:w-12"
        />
      </span>
      <span className="flex flex-col gap-0.5 sm:gap-1 min-[90rem]:gap-2">
        <span
          className={`${SEGOE_UI_CLASS} block w-full text-[0.9375rem] leading-6 font-[500] tracking-normal text-[var(--Neutral-Black,#000000)] sm:text-[1.125rem] sm:leading-7 md:text-[1.25rem] min-[90rem]:h-[2rem] min-[90rem]:w-[30.5rem] min-[90rem]:text-[1.5rem] min-[90rem]:leading-[2rem]`}
        >
          {title}
        </span>
        <span
          className={`${SEGOE_UI_CLASS} block w-full text-[0.8125rem] leading-5 font-[400] tracking-normal text-[var(--Paragraph,#5F6D64)] sm:text-[0.9375rem] sm:leading-6 md:text-[1rem] min-[90rem]:h-[2rem] min-[90rem]:w-[28.25rem] min-[90rem]:text-[1.125rem] min-[90rem]:leading-[2rem]`}
        >
          {body}
        </span>
      </span>
    </li>
  );
}
