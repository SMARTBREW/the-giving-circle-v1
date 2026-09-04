import Image from "next/image";
import { SEGOE_UI_CLASS } from "@/constants";

export default function VolunteerCard({
  name,
  role,
  src,
  alt,
}: {
  name: string;
  role: string;
  src: string;
  alt: string;
}) {
  return (
    <li className="relative w-full min-[90rem]:h-[24.1875rem] min-[90rem]:w-[18.5rem]">
      <div className="flex w-full flex-col overflow-hidden rounded-[12px] border border-[#BDBDBD] bg-[#FFFFFF] min-[90rem]:border-0 min-[90rem]:bg-transparent">
        <div className="relative aspect-[4/3] w-full overflow-hidden min-[90rem]:aspect-auto min-[90rem]:h-[21.0625rem] min-[90rem]:rounded-[12px]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1439px) 50vw, 18.5rem"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-1 px-4 py-4 sm:gap-2 sm:py-5 min-[90rem]:absolute min-[90rem]:top-[17.9375rem] min-[90rem]:left-[1.5625rem] min-[90rem]:z-10 min-[90rem]:h-[6.25rem] min-[90rem]:w-[15.4375rem] min-[90rem]:gap-2 min-[90rem]:rounded-[6px] min-[90rem]:border min-[90rem]:border-[#BDBDBD] min-[90rem]:bg-[#FFFFFF] min-[90rem]:px-0 min-[90rem]:py-[13px]">
          <p
            className={`${SEGOE_UI_CLASS} text-center text-[1.25rem] leading-7 font-[600] tracking-normal text-[var(--Main-headings,#000000)] sm:text-[1.375rem] min-[90rem]:h-8 min-[90rem]:text-[1.5rem] min-[90rem]:leading-8 min-[90rem]:whitespace-nowrap`}
          >
            {name}
          </p>
          <p
            className={`${SEGOE_UI_CLASS} text-center text-[0.9375rem] leading-6 font-[400] tracking-normal text-[#2D2E2E] sm:text-[1rem] min-[90rem]:h-8 min-[90rem]:text-[1.125rem] min-[90rem]:leading-8 min-[90rem]:whitespace-nowrap`}
          >
            {role}
          </p>
        </div>
      </div>
    </li>
  );
}
