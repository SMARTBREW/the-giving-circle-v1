import Image from "next/image";
import { SEGOE_UI_CLASS } from "@/constants";

export default function HowItWorksStep({
  iconSrc,
  title,
  body,
  showConnector = false,
}: {
  iconSrc: string;
  title: string;
  body: string;
  showConnector?: boolean;
}) {
  return (
    <li className="relative flex w-full flex-col items-center">
      <span className="relative z-10 -translate-y-2 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[#00A3BE] bg-[#FFFFFF] sm:-translate-y-2.5 sm:h-20 sm:w-20 min-[56.25rem]:h-[4.5rem] min-[56.25rem]:w-[4.5rem] lg:-translate-y-3 lg:h-[5rem] lg:w-[5rem] min-[90rem]:h-[6.25rem] min-[90rem]:w-[6.25rem]">
        <Image
          src={iconSrc}
          alt=""
          width={120}
          height={120}
          className="h-[85%] w-[85%] object-contain object-center"
        />
      </span>
      <h3
        className={`${SEGOE_UI_CLASS} mt-6 text-center text-[1.125rem] leading-7 font-[700] tracking-normal text-[#FFFFFF] sm:mt-7 sm:text-[1.25rem] min-[56.25rem]:mt-6 min-[56.25rem]:text-[1.125rem] min-[56.25rem]:leading-6 lg:mt-7 lg:text-[1.25rem] lg:leading-7 min-[90rem]:mt-10 min-[90rem]:h-8 min-[90rem]:text-[1.5rem] min-[90rem]:leading-none min-[90rem]:whitespace-nowrap`}
      >
        {title}
      </h3>
      <p
        className={`${SEGOE_UI_CLASS} mt-3 max-w-[18rem] text-center text-[0.9375rem] leading-6 font-[400] tracking-normal text-[#FFFFFF] sm:mt-3.5 sm:max-w-[20rem] sm:text-[1rem] sm:leading-7 min-[56.25rem]:mt-3 min-[56.25rem]:max-w-[14rem] min-[56.25rem]:text-[0.875rem] min-[56.25rem]:leading-5 lg:mt-3.5 lg:max-w-[15rem] lg:text-[0.9375rem] lg:leading-6 min-[90rem]:mt-4 min-[90rem]:h-[3.5rem] min-[90rem]:w-[16.125rem] min-[90rem]:max-w-none min-[90rem]:text-[1.125rem] min-[90rem]:leading-[1.75rem]`}
      >
        {body}
      </p>
      {showConnector ? (
        <span
          aria-hidden
          className="mt-5 mb-5 h-10 w-0 border-l-2 border-dashed border-white/60 sm:mt-6 sm:mb-6 sm:h-12 min-[56.25rem]:hidden"
        />
      ) : null}
    </li>
  );
}
