import Link from "next/link";
import { Star } from "lucide-react";
import CldImage from "@/components/cld-image";
import PageSection from "@/components/page-section";
import {
  SEGOE_UI_CLASS,
  WINGS_OF_HOPE_CTA,
  WINGS_OF_HOPE_EXPLORE,
  WINGS_SECTION,
  getLiveCause,
} from "@/constants";

function ExploreCard({
  id,
  title,
  meta,
  photoLabel,
}: {
  id: string;
  title: string;
  meta: string;
  photoLabel: string;
}) {
  const cause = getLiveCause(id);
  const href = `/causes/${id}`;

  return (
    <li className="min-w-0">
      <Link
        href={href}
        className="group flex h-full flex-col overflow-hidden rounded-[0.875rem] border border-[#d9e1e2] bg-[#FFFFFF] transition-[border-color,box-shadow] hover:border-[var(--Circle-Green,#02938c)] hover:shadow-[0px_4px_20px_0px_#0000000F] sm:rounded-[1rem]"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[repeating-linear-gradient(-45deg,#e8f4f8,#e8f4f8_8px,#eef2f2_8px,#eef2f2_16px)]">
          {cause?.src ? (
            <CldImage
              src={cause.src}
              alt={cause.alt}
              fill
              sizes="(max-width: 767px) 92vw, (max-width: 1023px) 45vw, 28rem"
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <span
              className={`${SEGOE_UI_CLASS} absolute inset-0 flex items-center justify-center px-3 text-center text-[0.75rem] font-[600] leading-5 text-[var(--Subheading,#4a5558)]`}
            >
              {photoLabel}
            </span>
          )}
        </div>
        <div className="flex flex-col px-4 py-3.5 sm:px-5 sm:py-4">
          <h3
            className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-[700] leading-5 tracking-normal text-[var(--Main-headings,#1c2426)] sm:text-[1rem] sm:leading-6`}
          >
            {title}
          </h3>
          <p
            className={`${SEGOE_UI_CLASS} mt-1 text-[0.8125rem] font-[400] leading-5 tracking-normal text-[var(--Subheading,#4a5558)] sm:text-[0.875rem]`}
          >
            {meta}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default function WingsOfHopeCtaExplore() {
  const cta = WINGS_OF_HOPE_CTA;
  const explore = WINGS_OF_HOPE_EXPLORE;

  return (
    <PageSection
      tone="alternate"
      innerClassName={`${WINGS_SECTION.pad} gap-10 sm:gap-12 lg:gap-14`}
    >
      <div className="flex w-full flex-col gap-6 rounded-[1.25rem] bg-[var(--Circle-Green,#02938c)] px-5 py-7 sm:gap-7 sm:rounded-[1.5rem] sm:px-7 sm:py-8 md:flex-row md:items-center md:justify-between md:gap-10 md:px-8 md:py-9 lg:rounded-[2rem] lg:px-10 lg:py-10 min-[90rem]:px-12 min-[90rem]:py-12">
        <div className="min-w-0 flex-1">
          <h2 className="font-['Georgia'] text-[1.5rem] font-[700] leading-8 tracking-normal text-[#FFFFFF] sm:text-[1.75rem] sm:leading-9 md:text-[1.875rem] lg:text-[2.125rem] lg:leading-[2.5rem] min-[90rem]:text-[2.5rem] min-[90rem]:leading-[3rem]">
            {cta.title}
          </h2>
          <p
            className={`${SEGOE_UI_CLASS} mt-2.5 max-w-[36rem] text-[0.875rem] font-[400] leading-6 text-[#FFFFFF] sm:mt-3 sm:text-[0.9375rem] sm:leading-6 md:text-[1rem] md:leading-7`}
          >
            {cta.body}
          </p>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto sm:min-w-[14rem] sm:gap-3">
          <Link
            href={cta.primary.href}
            className={`${SEGOE_UI_CLASS} inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--Giving-Red,#e62b4f)] px-5 text-[0.875rem] font-[700] leading-none text-[#FFFFFF] transition-opacity hover:opacity-90 sm:h-12 sm:px-6 sm:text-[0.9375rem]`}
          >
            <Star className="h-3.5 w-3.5 fill-current" aria-hidden />
            {cta.primary.label}
          </Link>
          <Link
            href={cta.secondary.href}
            className={`${SEGOE_UI_CLASS} inline-flex h-11 items-center justify-center rounded-full border border-[#FFFFFF] bg-transparent px-5 text-[0.875rem] font-[700] leading-none text-[#FFFFFF] transition-colors hover:bg-[#FFFFFF]/10 sm:h-12 sm:px-6 sm:text-[0.9375rem]`}
          >
            {cta.secondary.label}
          </Link>
        </div>
      </div>

      <div className="w-full">
        <p className={`${SEGOE_UI_CLASS} ${WINGS_SECTION.eyebrow}`}>
          {explore.eyebrow}
        </p>
        <h2 className={WINGS_SECTION.title}>{explore.title}</h2>
        <p className={`${SEGOE_UI_CLASS} ${WINGS_SECTION.body}`}>
          {explore.body}
        </p>

        <ul className="mt-6 grid w-full grid-cols-1 gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {explore.causes.map((item) => (
            <ExploreCard key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </PageSection>
  );
}
