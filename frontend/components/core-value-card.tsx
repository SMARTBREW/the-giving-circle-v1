import CldImage from "@/components/cld-image";
import { SEGOE_UI_CLASS } from "@/constants";

export default function CoreValueCard({
  title,
  body,
  iconSrc,
}: {
  title: string;
  body: string;
  iconSrc: string;
}) {
  return (
    <li className="group flex h-full w-full flex-col items-center rounded-[1rem] border border-[#d9e1e2] bg-[#FFFFFF] px-5 py-5 shadow-[0px_4px_20px_0px_#0000000F] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_8px_30px_0px_rgba(0,0,0,0.08)] sm:px-6 sm:py-6 md:px-7 md:py-7 min-[90rem]:px-8 min-[90rem]:py-8">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16 min-[90rem]:h-[4.5rem] min-[90rem]:w-[4.5rem]">
        <CldImage
          src={iconSrc}
          alt=""
          width={144}
          height={144}
          className="h-full w-full object-contain"
        />
      </span>
      <h3
        className={`${SEGOE_UI_CLASS} mt-3 text-center text-[1.375rem] leading-none font-[700] tracking-normal text-[var(--Dark-Charcoal,#1c2426)] sm:mt-4 sm:text-[1.5rem] md:text-[1.625rem] min-[90rem]:text-[1.75rem]`}
      >
        {title}
      </h3>
      <p
        className={`${SEGOE_UI_CLASS} mt-2.5 text-center text-[0.9375rem] leading-6 font-[400] tracking-normal text-[var(--Subheading,#4a5558)] sm:mt-3 sm:text-[1rem] sm:leading-7 min-[90rem]:text-[1.125rem] min-[90rem]:leading-7`}
      >
        {body}
      </p>
    </li>
  );
}
