import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import {
  NGOS_CAUSES,
  NGOS_CITIES,
  NGOS_GUIDES,
  NGOS_TRUST,
  SEGOE_UI_CLASS,
} from "@/constants";
import { NgosCardShell } from "./ngos-hero";
import NgosIcon from "./ngos-icon";

export function NgosBrowseCauses() {
  const { eyebrow, title, subtitle, items } = NGOS_CAUSES;

  return (
    <PageSection tone="gray" innerClassName="flex w-full flex-col items-center">
      <SectionIntro
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        titleAs="h2"
      />
      <ul className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.href + item.title} className="min-h-0">
            <NgosCardShell href={item.href}>
              <NgosIcon name={item.icon} />
              <h3
                className={`${SEGOE_UI_CLASS} mt-4 text-[1.0625rem] font-bold leading-7 tracking-normal text-heading sm:text-[1.125rem] sm:leading-8`}
              >
                {item.title}
              </h3>
              <p
                className={`${SEGOE_UI_CLASS} mt-2 flex-1 text-[0.9375rem] font-normal leading-6 tracking-normal text-subhead sm:text-[1rem] sm:leading-7`}
              >
                {item.body}
              </p>
            </NgosCardShell>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}

export function NgosBrowseCities() {
  const { eyebrow, title, subtitle, items } = NGOS_CITIES;

  return (
    <PageSection tone="white" innerClassName="flex w-full flex-col items-center">
      <SectionIntro
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        titleAs="h2"
      />
      <ul className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.href}>
            <NgosCardShell href={item.href}>
              <NgosIcon name="city" />
              <h3
                className={`${SEGOE_UI_CLASS} mt-4 text-[1.125rem] font-bold leading-7 tracking-normal text-heading sm:text-[1.25rem]`}
              >
                {item.city}
              </h3>
              <span
                className={`${SEGOE_UI_CLASS} mt-3 text-[0.9375rem] font-semibold leading-6 tracking-normal text-circle transition-colors group-hover:text-giving-red sm:text-[1rem]`}
              >
                {item.cta}
              </span>
            </NgosCardShell>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}

export function NgosGuides() {
  const { eyebrow, title, subtitle, items } = NGOS_GUIDES;

  return (
    <PageSection tone="gray" innerClassName="flex w-full flex-col items-center">
      <SectionIntro
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        titleAs="h2"
      />
      <ul className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.href + item.title}>
            <NgosCardShell href={item.href}>
              <NgosIcon name="guide" />

              <h3
                className={`${SEGOE_UI_CLASS} mt-4 text-[1.0625rem] font-bold leading-7 tracking-normal text-heading sm:text-[1.125rem] sm:leading-8`}
              >
                {item.title}
              </h3>
              <p
                className={`${SEGOE_UI_CLASS} mt-2 flex-1 text-[0.9375rem] font-normal leading-6 tracking-normal text-subhead sm:text-[1rem] sm:leading-7`}
              >
                {item.body}
              </p>
              <span
                className={`${SEGOE_UI_CLASS} mt-4 text-[0.9375rem] font-semibold leading-6 tracking-normal text-circle transition-colors group-hover:text-giving-red`}
              >
                Read more →
              </span>
            </NgosCardShell>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}

export function NgosTrust() {
  const { eyebrow, title, items } = NGOS_TRUST;

  return (
    <PageSection tone="white" innerClassName="flex w-full flex-col items-center">
      <SectionIntro eyebrow={eyebrow} title={title} titleAs="h2" />

      <ul className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
        {items.map((item) => (
          <li key={item.title}>
            <div className="flex h-full flex-col rounded-[1rem] border border-line bg-white p-5 shadow-card sm:rounded-[1.25rem] sm:p-6">
              <NgosIcon name={item.icon} />
              <h3
                className={`${SEGOE_UI_CLASS} mt-4 text-[1.0625rem] font-bold leading-7 tracking-normal text-heading sm:text-[1.125rem]`}
              >
                {item.title}
              </h3>
              <p
                className={`${SEGOE_UI_CLASS} mt-2 text-[0.9375rem] font-normal leading-6 tracking-normal text-subhead sm:text-[1rem] sm:leading-7`}
              >
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
