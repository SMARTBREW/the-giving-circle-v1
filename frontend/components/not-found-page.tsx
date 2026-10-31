import Link from "next/link";
import { getVisibleCauses, SEGOE_UI_CLASS } from "@/constants";

function CauseButton({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className={`${SEGOE_UI_CLASS} group relative inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-circle transition-colors duration-200 hover:text-giving-teal`}
    >
      <span className="relative z-10">{title}</span>
      <span className="text-giving-teal transition-transform duration-200 group-hover:translate-x-1">
        ›
      </span>
      <span className="absolute inset-0 rounded-lg bg-green-tint opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </Link>
  );
}

function SleepingCat() {
  return (
    <div className="relative mx-4 h-20 w-20">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full bg-[var(--Teal-Tint,#e8f7f8)]">
        <svg
          width="48"
          height="36"
          viewBox="0 0 48 36"
          className="text-subhead"
          aria-hidden="true"
        >
          <ellipse cx="24" cy="26" rx="16" ry="8" fill="currentColor" opacity="0.8" />
          <circle cx="24" cy="16" r="10" fill="currentColor" opacity="0.8" />
          <path d="M16 8 L14 2 L20 6 Z" fill="currentColor" opacity="0.8" />
          <path d="M28 6 L32 8 L34 2 Z" fill="currentColor" opacity="0.8" />
          <path
            d="M20 14 Q20 16 20 14"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M28 14 Q28 16 28 14"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="24" cy="18" r="1.5" fill="currentColor" opacity="0.7" />
          <path
            d="M24 20 Q21 22 19 20"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M24 20 Q27 22 29 20"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <line
            x1="14"
            y1="16"
            x2="19"
            y2="17"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
          />
          <line
            x1="14"
            y1="18"
            x2="19"
            y2="18"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
          />
          <line
            x1="34"
            y1="16"
            x2="29"
            y2="17"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
          />
          <line
            x1="34"
            y1="18"
            x2="29"
            y2="18"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
          />
          <path
            d="M40 26 Q42 20 38 18 Q36 20 38 22"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </div>
      <span className="absolute -top-2 -right-2 text-sm font-bold text-subhead">z</span>
      <span className="absolute -top-4 right-0 text-xs font-bold text-subhead">z</span>
      <span className="absolute top-[-1.5rem] right-2 text-xs font-bold text-subhead">z</span>
    </div>
  );
}

const CAUSE_LINKS = getVisibleCauses().map((cause) => ({
  title: cause.cardTitle,
  href: `/causes/${cause.id}`,
}));

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-[calc(100dvh-5.5rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--Off-White,#f7f9f9)] to-[var(--Green-Tint,#e8f5f3)] px-4 sm:min-h-[calc(100dvh-6.25rem)] md:min-h-[calc(100dvh-6.75rem)] lg:min-h-[calc(100dvh-7rem)] min-[90rem]:min-h-[calc(100dvh-8.75rem)]">
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-8 flex items-center justify-center">
          <span className="select-none text-9xl font-bold text-[#b7e0dc] md:text-[12rem]">
            4
          </span>
          <SleepingCat />
          <span className="select-none text-9xl font-bold text-[#b7e0dc] md:text-[12rem]">
            4
          </span>
        </div>

        <div className="mb-12">
          <p className={`${SEGOE_UI_CLASS} mb-2 text-lg text-subhead md:text-xl`}>
            This page does not exist.
          </p>
          <h1 className="mb-4 font-georgia text-2xl font-bold text-heading md:text-3xl">
            Our causes
          </h1>
          <p className={`${SEGOE_UI_CLASS} mx-auto max-w-md text-sm text-subhead md:text-base`}>
            Tap below to find out how your social giving can transform
            someone&apos;s life through our community support platform.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {CAUSE_LINKS.map((item) => (
            <CauseButton key={item.title} title={item.title} href={item.href} />
          ))}
        </div>
      </div>
    </div>
  );
}
