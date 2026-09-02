import Image from "next/image";
import { SEGOE_UI_CLASS } from "@/constants";

export default function HowItWorksStep({
  iconSrc,
  title,
  body,
}: {
  iconSrc: string;
  title: string;
  body: string;
}) {
  return (
    <li className="relative flex flex-col items-center">
      <span className="relative z-10 flex h-[6.25rem] w-[6.25rem] items-center justify-center overflow-hidden rounded-full border border-[var(--Main-CTA-button,#00A3BE)] bg-[#FFFFFF]">
        <Image
          src={iconSrc}
          alt=""
          width={120}
          height={120}
          className="h-[3.75rem] w-[3.75rem] object-contain"
        />
      </span>
      <h3
        className={`${SEGOE_UI_CLASS} mt-[2.1875rem] h-8 text-center text-[1.5rem] leading-none font-[700] tracking-normal whitespace-nowrap text-[#FFFFFF]`}
      >
        {title}
      </h3>
      <p
        className={`${SEGOE_UI_CLASS} mt-4 h-[3.5rem] w-[16.125rem] text-center text-[1.125rem] leading-[1.75rem] font-[400] tracking-normal text-[#FFFFFF]`}
      >
        {body}
      </p>
    </li>
  );
}
