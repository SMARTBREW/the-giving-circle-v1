import CldImage from "@/components/cld-image";
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
    <li className="group relative aspect-[4/3] w-full overflow-hidden isolate rounded-[1rem] border border-[#d9e1e2] transition-all duration-300 hover:border-[var(--Main-CTA-button,#02938c)] md:aspect-[3/4] md:max-h-[min(24rem,55dvh)] md:w-[calc(50%-0.625rem)] min-[56.25rem]:aspect-auto min-[56.25rem]:h-[clamp(14rem,42dvh,18rem)] min-[56.25rem]:max-h-none min-[56.25rem]:min-w-0 min-[56.25rem]:w-auto min-[56.25rem]:flex-1 lg:h-[clamp(15rem,45dvh,20rem)] min-[90rem]:h-[21.75rem]">
      <Link href={destination} className="absolute -inset-px block">
        <CldImage
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 899px) 50vw, 25vw"
          loading="lazy"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 bg-[linear-gradient(360deg,rgba(0,0,0,0.85)_10%,rgba(0,0,0,0)_28%)]" />
        <span className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2.5 transition-transform duration-500 ease-in-out group-hover:-translate-y-2 sm:inset-x-5 sm:bottom-5 lg:inset-x-5 lg:bottom-5">
          <span
            className={`${SEGOE_UI_CLASS} min-w-0 text-left text-[1.0625rem] leading-tight font-[700] tracking-normal text-[#FFFFFF] sm:text-[1.1875rem] min-[56.25rem]:text-[1rem] lg:text-[1.125rem] min-[90rem]:text-[1.25rem]`}
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
                stroke="var(--Main-CTA-button, #02938c)"
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
