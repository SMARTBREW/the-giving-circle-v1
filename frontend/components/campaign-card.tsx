import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/components/cta-button";
import { SEGOE_UI_CLASS, type CampaignCardData } from "@/constants";

function PeopleIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="h-4 w-4 shrink-0">
      <circle cx="6" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="11" cy="6" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M2.5 13c0-2 1.7-3.5 3.5-3.5S9.5 11 9.5 13M9.5 13c.3-1.5 1.5-2.6 3-2.6 1.2 0 2.2.7 2.6 1.7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="h-4 w-4 shrink-0">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 5v3.2L10 10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <span className="relative inline-flex h-5 w-3.5 shrink-0 items-center justify-center">
      <Image
        src="/images/champions/location-pin.svg"
        alt=""
        width={14}
        height={20}
        className="h-5 w-3.5 object-contain"
      />
      <Image
        src="/images/champions/location-dot.svg"
        alt=""
        width={5}
        height={5}
        className="absolute top-[0.35rem] left-1/2 h-[0.3125rem] w-[0.3125rem] -translate-x-1/2 object-contain"
      />
    </span>
  );
}

export default function CampaignCard({ card }: { card: CampaignCardData }) {
  const href = `/causes/${card.id}`;

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden isolate rounded-[1rem] border border-[#d9e1e2] bg-[#FFFFFF] shadow-[0px_4px_20px_0px_#0000000F] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--Main-CTA-button,#02938c)] hover:shadow-[0px_8px_30px_0px_rgba(0,0,0,0.12)] min-[90rem]:h-[39.0625rem] min-[90rem]:w-full">
      <Link
        href={href}
        className="relative -mt-px -mx-px aspect-[396/240] w-[calc(100%+2px)] shrink-0 overflow-hidden min-[90rem]:h-[15rem] min-[90rem]:aspect-auto"
      >
        <Image
          src={card.src}
          alt={card.alt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1439px) 45vw, 24.75rem"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span
          className={`${SEGOE_UI_CLASS} absolute top-4 left-4 inline-flex h-[2.125rem] items-center gap-1 rounded-full border border-[#d9e1e2] bg-[#FFFFFF] py-1 pr-3 pl-3 text-[0.8125rem] font-[600] leading-none tracking-normal text-[var(--Main-headings,#1c2426)]`}
        >
          <span className="relative inline-flex h-[1.3125rem] w-[1.375rem] shrink-0 items-center justify-center">
            <Image
              src="/images/champions/verified-badge.svg"
              alt=""
              width={22}
              height={21}
              className="h-full w-full object-contain"
            />
            <Image
              src="/images/champions/verified-check.svg"
              alt=""
              width={12}
              height={9}
              className="absolute top-1/2 left-1/2 h-[0.5625rem] w-3 -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          </span>
          Verified
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-3 px-4 pt-4 pb-4 sm:gap-3.5 sm:px-5 sm:pt-5 sm:pb-5 min-[90rem]:gap-4 min-[90rem]:px-6 min-[90rem]:pt-5 min-[90rem]:pb-6">
        <p
          className={`${SEGOE_UI_CLASS} text-[0.875rem] font-[700] leading-5 tracking-[0.0875em] uppercase min-[90rem]:text-[1rem] min-[90rem]:leading-[1.225rem] ${card.categoryClassName}`}
        >
          {card.category}
        </p>

        <h3
          className={`${SEGOE_UI_CLASS} line-clamp-2 text-[1.25rem] font-[700] leading-7 tracking-normal text-[var(--Main-headings,#1c2426)] sm:text-[1.375rem] sm:leading-8 min-[90rem]:min-h-[4.625rem] min-[90rem]:text-[1.75rem] min-[90rem]:leading-[2.1875rem]`}
        >
          <Link href={href} className="transition-colors hover:text-[var(--Main-CTA-button,#02938c)]">
            {card.titleLines ? (
              <>
                <span className="block">{card.titleLines[0]}</span>
                <span className="block">{card.titleLines[1]}</span>
              </>
            ) : (
              card.title
            )}
          </Link>
        </h3>

        <div
          className={`${SEGOE_UI_CLASS} flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[0.875rem] leading-none tracking-normal text-[var(--Subheading,#4a5558)] min-[90rem]:text-[1rem]`}
        >
          <span>
            <span className="font-[400]">By </span>
            <span className="font-[600] text-[var(--Main-headings,#1c2426)]">
              {card.org}
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 font-[400]">
            <LocationIcon />
            {card.location}
          </span>
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <div className="flex items-end justify-between gap-2">
            <p className={`${SEGOE_UI_CLASS} min-w-0 text-[#4a5558]`}>
              <span className="text-[1.125rem] font-[700] leading-none tracking-normal min-[90rem]:text-[1.25rem]">
                {card.raised}
              </span>
              <span className="text-[0.875rem] font-[600] leading-none tracking-normal min-[90rem]:text-[1rem]">
                {" "}
                raised of {card.goal}
              </span>
            </p>
            <span
              className={`${SEGOE_UI_CLASS} shrink-0 text-[0.875rem] font-[700] leading-none tracking-normal text-[var(--Main-CTA-button,#02938c)] min-[90rem]:text-[1rem]`}
            >
              {card.percent}%
            </span>
          </div>

          <div className="h-3 w-full overflow-hidden rounded-full bg-[#EEF2F2]">
            <div
              className="h-full rounded-full bg-[var(--Main-CTA-button,#02938c)] transition-all duration-500"
              style={{ width: `${card.percent}%` }}
            />
          </div>

          <div
            className={`${SEGOE_UI_CLASS} flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[0.875rem] font-[400] leading-none tracking-normal text-[#4A5558] min-[90rem]:text-[1rem]`}
          >
            <span className="inline-flex items-center gap-1.5">
              <PeopleIcon />
              {card.supporters}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon />
              {card.daysLeft}
            </span>
          </div>

          <CtaButton
            href={href}
            className="mt-1 h-12 w-full px-[1.1875rem] text-[0.9375rem] min-[90rem]:h-14 min-[90rem]:text-[1rem]"
            labelClassName="font-[700]"
          >
            View Cause
          </CtaButton>
        </div>
      </div>
    </article>
  );
}
