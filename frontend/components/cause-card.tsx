import Image from "next/image";
import { SEGOE_UI_CLASS } from "@/constants";

export default function CauseCard({
  label,
  src,
  alt,
}: {
  label: string;
  src: string;
  alt: string;
}) {
  return (
    <li className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-[1rem] border border-[#BDBDBD] md:aspect-[4/5] md:w-[calc(50%-0.625rem)] min-[90rem]:aspect-auto min-[90rem]:h-[21.75rem] min-[90rem]:min-w-0 min-[90rem]:flex-1 min-[90rem]:w-auto">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 18.5rem"
        className="object-cover"
      />
      <span className="absolute inset-0 bg-[linear-gradient(360deg,rgba(0,0,0,0.85)_26.44%,rgba(0,0,0,0)_55.17%)]" />
      <span className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-3 transition-transform duration-700 ease-in-out group-hover:-translate-y-2 sm:inset-x-5 sm:bottom-5 lg:inset-x-6 lg:bottom-6 min-[90rem]:justify-start">
        <span
          className={`${SEGOE_UI_CLASS} text-center text-[1.125rem] leading-none font-[700] tracking-normal text-[#FFFFFF] sm:text-[1.25rem] lg:text-[1.375rem] min-[90rem]:text-left min-[90rem]:text-[1.5rem] min-[90rem]:whitespace-nowrap`}
        >
          {label}
        </span>
        <span className="absolute right-0 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFFFFF] opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 min-[90rem]:static">
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 11L11 3M11 3H5.5M11 3V8.5"
              stroke="#00A3BE"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </li>
  );
}
