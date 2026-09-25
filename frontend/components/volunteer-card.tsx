import CldImage from "@/components/cld-image";
import { SEGOE_UI_CLASS } from "@/constants";

export default function VolunteerCard({
  name,
  role,
  src,
  alt,
  objectPosition = "object-center",
}: {
  name: string;
  role: string;
  src: string;
  alt: string;
  objectPosition?: string;
}) {
  return (
    <li className="relative w-full min-w-0 min-[90rem]:h-[23.4375rem] min-[90rem]:w-[18.5rem]">
      <div className="flex w-full flex-col overflow-hidden rounded-[0.75rem] border border-[#d9e1e2] bg-[#FFFFFF] min-[90rem]:border-0 min-[90rem]:bg-transparent">
        <div className="relative aspect-[4/3] w-full overflow-hidden min-[56.25rem]:aspect-[3/4] min-[90rem]:aspect-auto min-[90rem]:h-[21.0625rem] min-[90rem]:rounded-[0.75rem]">
          <CldImage
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 899px) 50vw, (max-width: 1439px) 25vw, 18.5rem"
            loading="lazy"
            className={`object-cover ${objectPosition}`}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-0.5 px-2 py-3 sm:gap-1 sm:px-3 sm:py-3.5 min-[56.25rem]:px-2 min-[90rem]:absolute min-[90rem]:top-[18.6875rem] min-[90rem]:left-[1.5625rem] min-[90rem]:z-10 min-[90rem]:h-[4.75rem] min-[90rem]:w-[15.4375rem] min-[90rem]:gap-0.5 min-[90rem]:rounded-[0.375rem] min-[90rem]:border min-[90rem]:border-[#d9e1e2] min-[90rem]:bg-[#FFFFFF] min-[90rem]:px-0 min-[90rem]:py-2">
          <p
            className={`${SEGOE_UI_CLASS} whitespace-nowrap text-center text-[1.125rem] leading-6 font-[600] tracking-normal text-[var(--Main-headings,#1c2426)] sm:text-[1.25rem] sm:leading-7 min-[56.25rem]:text-[1rem] min-[56.25rem]:leading-5 lg:text-[1.125rem] lg:leading-6 min-[90rem]:text-[1.375rem] min-[90rem]:leading-7`}
          >
            {name}
          </p>
          <p
            className={`${SEGOE_UI_CLASS} whitespace-nowrap text-center text-[0.875rem] leading-5 font-[400] tracking-normal text-[#1C2426] sm:text-[0.9375rem] min-[56.25rem]:text-[0.75rem] lg:text-[0.875rem] min-[90rem]:text-[1rem] min-[90rem]:leading-6`}
          >
            {role}
          </p>
        </div>
      </div>
    </li>
  );
}
