import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/fade-in-section";
import CauseFundingCard from "./cause-funding-card";
import { SEGOE_UI_CLASS, type LiveCause } from "@/constants";

export default function CauseDetailHero({ cause }: { cause: LiveCause }) {
  return (
    <section className="relative -mt-[5.5rem] w-full overflow-x-hidden bg-[#F3F9FF] pt-[5.5rem] sm:-mt-[6.25rem] sm:pt-[6.25rem] md:-mt-[6.75rem] md:pt-[6.75rem] lg:-mt-[7rem] lg:pt-[7rem] min-[90rem]:-mt-[7.25rem] min-[90rem]:pt-[7.25rem]">
      {/* Soft brand-color ambient motion */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-[-6rem] h-64 w-64 rounded-full bg-[var(--Main-CTA-button,#00A3BE)]/15 blur-3xl motion-safe:animate-pulse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 right-[-4rem] h-56 w-56 rounded-full bg-[var(--Brand-Green-Teal,#00A98F)]/15 blur-3xl motion-safe:animate-pulse [animation-delay:1s]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-[35%] h-44 w-44 rounded-full bg-[var(--Brand-Coral,#ED3B58)]/10 blur-3xl motion-safe:animate-pulse [animation-delay:2s]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-4 pt-6 pb-10 sm:px-8 sm:pt-8 sm:pb-12 md:px-10 md:pt-10 md:pb-14 lg:px-12 lg:pt-10 lg:pb-16 min-[90rem]:px-[6.25rem] min-[90rem]:pt-12 min-[90rem]:pb-20">
        <nav
          aria-label="Breadcrumb"
          className={`${SEGOE_UI_CLASS} flex flex-wrap items-center gap-1.5 text-[0.8125rem] font-[500] text-[var(--Paragraph,#5F6D64)] sm:text-[0.875rem]`}
        >
          <Link
            href="/"
            className="text-[var(--Main-CTA-button,#00A3BE)] transition-colors hover:text-[var(--Brand-Green-Teal,#00A98F)]"
          >
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link
            href="/causes"
            className="text-[var(--Main-CTA-button,#00A3BE)] transition-colors hover:text-[var(--Brand-Green-Teal,#00A98F)]"
          >
            Live Causes
          </Link>
          <span aria-hidden>/</span>
          <span className="max-w-[14rem] truncate text-[var(--Main-headings,#000000)] sm:max-w-none">
            {cause.title}
          </span>
        </nav>

        {/* Image + funding card — image stretches to match card */}
        <div className="mt-8 grid w-full grid-cols-1 items-stretch gap-6 min-[56.25rem]:mt-10 min-[56.25rem]:grid-cols-[minmax(0,1fr)_minmax(16rem,min(22rem,38%))] min-[56.25rem]:gap-6 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,min(24.75rem,36%))] lg:gap-8 min-[90rem]:mt-12 min-[90rem]:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] min-[90rem]:gap-14">
          <FadeInSection className="flex min-w-0 min-[56.25rem]:h-full">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1rem] border border-[#BDBDBD] sm:rounded-[1.25rem] min-[56.25rem]:aspect-auto min-[56.25rem]:h-full min-[56.25rem]:min-h-[22rem] min-[90rem]:rounded-[1.5rem]">
              <Image
                src={cause.src}
                alt={cause.alt}
                fill
                priority
                sizes="(max-width: 899px) 100vw, (max-width: 1439px) 60vw, 55vw"
                className="object-cover"
              />
            </div>
          </FadeInSection>

          <aside className="w-full min-w-0">
            <CauseFundingCard
              raised={cause.raised}
              goal={cause.goal}
              percent={cause.percent}
              supporters={cause.supporters}
              daysLeft={cause.daysLeft}
            />
          </aside>
        </div>

        {/* Full-width title block under the image/card row */}
        <FadeInSection className="mt-8 w-full sm:mt-10 lg:mt-12">
          <p
            className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[700] uppercase tracking-[0.08em] sm:text-[0.875rem] ${cause.categoryClassName}`}
          >
            {cause.category}
          </p>

          <h1 className="mt-3 max-w-none font-['Georgia'] text-[1.75rem] font-[700] leading-9 tracking-normal text-[var(--Main-headings,#000000)] sm:mt-4 sm:text-[2.25rem] sm:leading-[2.75rem] md:text-[2.5rem] md:leading-[3rem] lg:text-[2.75rem] lg:leading-[3.25rem] min-[90rem]:text-[3rem] min-[90rem]:leading-[3.75rem]">
            {cause.title}
          </h1>

          <p
            className={`${SEGOE_UI_CLASS} mt-4 w-full max-w-none text-[0.9375rem] leading-6 font-[400] text-[#212121] sm:mt-5 sm:text-[1.0625rem] sm:leading-7 md:text-[1.125rem] md:leading-8 lg:text-[1.25rem] lg:leading-9`}
          >
            {cause.summary}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {cause.trustBadges.map((badge) => (
              <li
                key={badge}
                className={`${SEGOE_UI_CLASS} rounded-[6.25rem] border border-[#BDBDBD] bg-[#FFFFFF] px-3.5 py-1.5 text-[0.8125rem] font-[600] text-[var(--Main-headings,#000000)] transition-[border-color,box-shadow] duration-300 hover:border-[var(--Main-CTA-button,#00A3BE)] hover:shadow-[0_0_0_3px_rgba(0,163,190,0.15)] sm:text-[0.875rem]`}
              >
                {badge}
              </li>
            ))}
          </ul>

          <p
            className={`${SEGOE_UI_CLASS} mt-5 text-[0.875rem] font-[400] text-[var(--Paragraph,#5F6D64)] sm:mt-6 sm:text-[0.9375rem]`}
          >
            By{" "}
            <span className="font-[700] text-[var(--Main-headings,#000000)]">
              {cause.org}
            </span>
            <span aria-hidden className="mx-2 text-[#BDBDBD]">
              ·
            </span>
            {cause.location}
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
