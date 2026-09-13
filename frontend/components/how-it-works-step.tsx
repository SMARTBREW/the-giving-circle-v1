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
      <span className="relative z-10 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[#00A3BE] bg-[#FFFFFF] sm:h-20 sm:w-20 lg:h-24 lg:w-24 min-[90rem]:h-[6.25rem] min-[90rem]:w-[6.25rem]">
        <Image
          src={iconSrc}
          alt=""
          width={120}
          height={120}
          className="h-10 w-10 object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14 min-[90rem]:h-[3.75rem] min-[90rem]:w-[3.75rem]"
        />
      </span>
      <h3
        className={`${SEGOE_UI_CLASS} mt-4 text-center text-[1.125rem] leading-7 font-[700] tracking-normal text-[#FFFFFF] sm:mt-5 sm:text-[1.25rem] lg:mt-6 lg:text-[1.375rem] lg:leading-8 min-[90rem]:mt-[2.1875rem] min-[90rem]:h-8 min-[90rem]:text-[1.5rem] min-[90rem]:leading-none min-[90rem]:whitespace-nowrap`}
      >
        {title}
      </h3>
      <p
        className={`${SEGOE_UI_CLASS} mt-2 max-w-[18rem] text-center text-[0.9375rem] leading-6 font-[400] tracking-normal text-[#FFFFFF] sm:mt-3 sm:max-w-[20rem] sm:text-[1rem] sm:leading-7 lg:mt-3 lg:max-w-[16rem] lg:text-[1.0625rem] lg:leading-7 min-[90rem]:mt-4 min-[90rem]:h-[3.5rem] min-[90rem]:w-[16.125rem] min-[90rem]:max-w-none min-[90rem]:text-[1.125rem] min-[90rem]:leading-[1.75rem]`}
      >
        {body}
      </p>
      {showConnector ? (
        <span
          aria-hidden
          className="mt-5 mb-5 h-10 w-0 border-l-2 border-dashed border-white/60 sm:mt-6 sm:mb-6 sm:h-12 lg:hidden"
        />
      ) : null}
    </li>
  );
}
