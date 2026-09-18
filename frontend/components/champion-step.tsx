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
    <li className="group flex flex-row items-start gap-2.5 sm:gap-3">
      {/*
        One CSS border only (Figma). Icon art is scaled slightly so the
        baked-in teal frame is clipped — hover just recolors this border + fill.
      */}
      <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[0.625rem] border-2 border-[#02938c40] bg-[#FFFFFF] transition-colors duration-300 group-hover:border-[#0ba5bb] group-hover:bg-[#0ba5bb14] sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-[3.25rem] lg:w-[3.25rem] min-[90rem]:h-14 min-[90rem]:w-14 min-[90rem]:rounded-[0.875rem]">
        <Image
          src={iconSrc}
          alt=""
          fill
          sizes="56px"
          className="scale-[1.08] object-cover"
        />
      </span>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span
          className={`${SEGOE_UI_CLASS} block w-full text-[0.875rem] leading-5 font-[500] tracking-normal text-[var(--Neutral-Black,#000000)] sm:text-[0.9375rem] sm:leading-5 md:text-[0.9375rem] md:leading-5 lg:text-[1.125rem] lg:leading-6 min-[90rem]:text-[1.25rem] min-[90rem]:leading-7`}
        >
          {title}
        </span>
        <span
          className={`${SEGOE_UI_CLASS} block w-full text-[0.75rem] leading-4 font-[400] tracking-normal text-[var(--Paragraph,#4a5558)] sm:text-[0.8125rem] sm:leading-5 md:text-[0.8125rem] md:leading-5 lg:text-[0.9375rem] lg:leading-5 min-[90rem]:text-[1rem] min-[90rem]:leading-6`}
        >
          {body}
        </span>
      </span>
    </li>
  );
}
