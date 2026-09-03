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
    <li className="group flex flex-row items-start gap-4">
      <span className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-[1rem] border-2 border-[#00A98F40] bg-[#FFFFFF] transition-colors duration-300 group-hover:border-[var(--Main-CTA-button,#00A3BE)] group-hover:bg-[#00A3BE14]">
        <Image
          src={iconSrc}
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 object-contain"
        />
      </span>
      <span className="flex flex-col gap-2">
        <span
          className={`${SEGOE_UI_CLASS} block h-[2rem] w-[30.5rem] text-[1.5rem] leading-[2rem] font-[500] tracking-normal text-[var(--Neutral-Black,#000000)]`}
        >
          {title}
        </span>
        <span
          className={`${SEGOE_UI_CLASS} block h-[2rem] w-[28.25rem] text-[1.125rem] leading-[2rem] font-[400] tracking-normal text-[var(--Paragraph,#5F6D64)]`}
        >
          {body}
        </span>
      </span>
    </li>
  );
}
