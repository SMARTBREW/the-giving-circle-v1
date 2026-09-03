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
    <li className="group relative h-[21.75rem] w-full cursor-pointer overflow-hidden rounded-[1rem] border border-[#BDBDBD] md:w-[18.5rem]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="18.5rem"
        className="object-cover"
      />
      <span className="absolute inset-0 bg-[linear-gradient(360deg,rgba(0,0,0,0.85)_26.44%,rgba(0,0,0,0)_55.17%)]" />
      <span className="absolute right-6 bottom-6 left-6 flex items-center gap-3 transition-transform duration-700 ease-in-out group-hover:-translate-y-2">
        <span
          className={`${SEGOE_UI_CLASS} text-[1.5rem] leading-none font-[700] tracking-normal whitespace-nowrap text-[#FFFFFF]`}
        >
          {label}
        </span>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFFFFF] opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
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
