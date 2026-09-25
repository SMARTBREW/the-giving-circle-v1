import Image from "next/image";
import CldImage from "@/components/cld-image";
import Link from "next/link";
import CtaButton from "@/components/cta-button";
import { SEGOE_UI_CLASS, type CampaignCardData } from "@/constants";

function PeopleIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="h-3.5 w-3.5 shrink-0">
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

function ImpactIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="h-3.5 w-3.5 shrink-0">
      <path
        d="M8 2.5v2.2M8 11.3V13.5M2.5 8h2.2M11.3 8H13.5M4.1 4.1l1.55 1.55M10.35 10.35l1.55 1.55M4.1 11.9l1.55-1.55M10.35 5.65l1.55-1.55"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="8" cy="8" r="2.25" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <span className="relative inline-flex h-4 w-3 shrink-0 items-center justify-center">
      <Image
        src="/images/champions/location-pin.svg"
        alt=""
        width={12}
        height={16}
        className="h-4 w-3 object-contain"
      />
      <Image
        src="/images/champions/location-dot.svg"
        alt=""
        width={4}
        height={4}
        className="absolute top-[0.3rem] left-1/2 h-1 w-1 -translate-x-1/2 object-contain"
      />
    </span>
  );
}

function VerifiedBadge() {
  return (
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
  );
}

function supportersCount(supporters: string): string {
  const match = supporters.match(/^([\d,]+)/);
  return match?.[1] ?? supporters;
}

export default function CampaignCard({ card }: { card: CampaignCardData }) {
  const href = `/causes/${card.id}`;
  const count = supportersCount(card.supporters);

  return (
    <article className="group flex h-full w-full min-w-0 flex-col overflow-hidden rounded-[1.25rem] border border-[#d9e1e2] bg-[#FFFFFF] shadow-[0px_4px_20px_0px_#0000000F] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--Main-CTA-button,#02938c)] hover:shadow-[0px_8px_30px_0px_rgba(0,0,0,0.12)]">
      <Link
        href={href}
        className="relative aspect-[16/10] w-full shrink-0 overflow-hidden"
      >
        <CldImage
          src={card.src}
          alt={card.alt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1439px) 45vw, 24.75rem"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span
          className={`${SEGOE_UI_CLASS} absolute top-3 left-3 inline-flex h-8 items-center gap-1 rounded-full border border-[#d9e1e2] bg-[#FFFFFF] py-1 pr-3 pl-3 text-[0.75rem] font-[600] leading-none tracking-normal text-[var(--Main-headings,#1c2426)] sm:top-4 sm:left-4 sm:h-[2.125rem] sm:text-[0.8125rem]`}
        >
          <VerifiedBadge />
          Verified
        </span>
      </Link>

      <div className="flex min-w-0 flex-1 flex-col px-4 pt-4 pb-4 sm:px-5 sm:pt-5 sm:pb-5 min-[90rem]:px-6 min-[90rem]:pt-5 min-[90rem]:pb-6">
        <p
          className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[700] leading-none tracking-[0.08em] uppercase sm:text-[0.8125rem] ${card.categoryClassName}`}
        >
          {card.category}
        </p>

        <h3
          className={`${SEGOE_UI_CLASS} mt-2.5 truncate text-[1.25rem] font-[700] leading-7 tracking-normal whitespace-nowrap text-[var(--Main-headings,#1c2426)] sm:mt-3 sm:text-[1.375rem] sm:leading-8 min-[90rem]:text-[1.5rem] min-[90rem]:leading-8`}
        >
          <Link
            href={href}
            className="block truncate transition-colors hover:text-[var(--Main-CTA-button,#02938c)]"
          >
            {card.cardTitle}
          </Link>
        </h3>

        <p
          className={`${SEGOE_UI_CLASS} mt-2 line-clamp-2 min-h-[3rem] text-[0.875rem] leading-6 font-[400] text-[var(--Subheading,#4a5558)] sm:mt-2.5 sm:min-h-[3rem] sm:text-[0.9375rem] sm:leading-6`}
        >
          {card.cardDescription}
        </p>

        <div
          className={`${SEGOE_UI_CLASS} mt-3 flex min-w-0 flex-col gap-1.5 text-[0.8125rem] leading-5 tracking-normal text-[var(--Subheading,#4a5558)] sm:mt-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-3 sm:gap-y-1 sm:text-[0.875rem] sm:leading-none`}
        >
          <span className="min-w-0 shrink-0">
            <span className="font-[400]">By </span>
            <span className="font-[700] text-[var(--Main-headings,#1c2426)]">
              {card.org}
            </span>
          </span>
          <span className="inline-flex min-w-0 items-start gap-1.5 font-[400] sm:items-center">
            <LocationIcon />
            <span className="min-w-0">
              In{" "}
              <span className="font-[700] text-[var(--Main-headings,#1c2426)]">
                {card.location}
              </span>
            </span>
          </span>
        </div>

        <div className="mt-4 grid min-w-0 grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3">
          <div className="flex min-h-[4.75rem] min-w-0 flex-col items-center justify-center rounded-xl bg-[#E8F7F8] px-2 py-3 sm:min-h-[5.25rem] sm:rounded-2xl sm:px-3 sm:py-3.5">
            <p
              className={`${SEGOE_UI_CLASS} text-[1.375rem] font-[700] leading-none tracking-normal text-[var(--Main-headings,#1c2426)] sm:text-[1.5rem]`}
            >
              {count}
            </p>
            <p
              className={`${SEGOE_UI_CLASS} mt-2 inline-flex items-center gap-1 text-[0.75rem] font-[500] leading-none text-[var(--Subheading,#4a5558)] sm:text-[0.8125rem]`}
            >
              <PeopleIcon />
              Supporters
            </p>
          </div>
          <div className="flex min-h-[4.75rem] min-w-0 flex-col items-center justify-center rounded-xl bg-[#E8F7F8] px-2 py-3 sm:min-h-[5.25rem] sm:rounded-2xl sm:px-3 sm:py-3.5">
            <p
              className={`${SEGOE_UI_CLASS} max-w-full truncate text-[1.375rem] font-[700] leading-none tracking-normal text-[var(--Main-headings,#1c2426)] sm:text-[1.5rem]`}
            >
              {card.impactHighlight.value}
            </p>
            <p
              className={`${SEGOE_UI_CLASS} mt-2 inline-flex max-w-full items-center justify-center gap-1 whitespace-nowrap text-[0.75rem] font-[500] leading-none text-[var(--Subheading,#4a5558)] sm:text-[0.8125rem]`}
            >
              <ImpactIcon />
              <span>{card.impactHighlight.label}</span>
            </p>
          </div>
        </div>

        <div className="mt-auto pt-4 sm:pt-5">
          <CtaButton
            href={href}
            className="h-12 w-full px-5 text-[0.9375rem] sm:h-12 min-[90rem]:h-14 min-[90rem]:text-[1rem]"
            labelClassName="font-[700]"
          >
            View Cause
          </CtaButton>
        </div>
      </div>
    </article>
  );
}
