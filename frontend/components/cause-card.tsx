import Image from "next/image";
import Link from "next/link";
import { SEGOE_UI_CLASS } from "@/constants";

export default function CauseCard({
  label,
  src,
  alt,
  href,
}: {
  label: string;
  src: string;
  alt: string;
  href?: string;
}) {
  const destination =
    href ?? `/causes?category=${encodeURIComponent(label)}`;

  return (
    <li className="group relative aspect-[4/3] w-full overflow-hidden isolate rounded-[1rem] border border-[#BDBDBD] transition-all duration-300 hover:border-[var(--Main-CTA-button,#228b22)] md:aspect-[4/5] md:w-[calc(50%-0.625rem)] min-[90rem]:aspect-auto min-[90rem]:h-[21.75rem] min-[90rem]:min-w-0 min-[90rem]:flex-1 min-[90rem]:w-auto">
      <Link href={destination} className="absolute -inset-px block">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 18.5rem"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 bg-[linear-gradient(360deg,rgba(0,0,0,0.85)_26.44%,rgba(0,0,0,0)_55.17%)]" />
        <span className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2.5 transition-transform duration-500 ease-in-out group-hover:-translate-y-2 sm:inset-x-5 sm:bottom-5 lg:inset-x-5 lg:bottom-5">
          <span
            className={`${SEGOE_UI_CLASS} min-w-0 text-left text-[1.0625rem] leading-tight font-[700] tracking-normal text-[#FFFFFF] sm:text-[1.1875rem] lg:text-[1.25rem] min-[90rem]:text-[1.25rem]`}
          >
            {label}
          </span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFFFFF] opacity-0 shadow-sm transition-opacity duration-500 ease-in-out group-hover:opacity-100 sm:h-9 sm:w-9">
            <svg
              width="15"
              height="15"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 11L11 3M11 3H5.5M11 3V8.5"
                stroke="var(--Main-CTA-button, #228b22)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
      </Link>
    </li>
  );
}
