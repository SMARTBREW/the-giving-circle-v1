import Link from "next/link";
import { CircleCheck, LineChart, ShieldCheck, type LucideIcon } from "lucide-react";
import CtaButton from "@/components/cta-button";
import CtaArrow from "@/components/cta-arrow";
import FadeInSection from "@/components/fade-in-section";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import { SEGOE_UI_CLASS, type NgosCityPage } from "@/constants";
import { PAGE_HERO_BLEED } from "@/lib/page-hero-layout";
import { NgosCardShell } from "../_sections/ngos-hero";
import NgosIcon from "../_sections/ngos-icon";

const BADGE_ICONS: LucideIcon[] = [ShieldCheck, CircleCheck, LineChart];

export function NgosCityHero({ data }: { data: NgosCityPage }) {
  const { city, hero } = data;

  return (
    <section
      className={`relative w-full overflow-x-hidden bg-white ${PAGE_HERO_BLEED}`}
    >
      <FadeInSection className="mx-auto flex w-full max-w-[90rem] flex-col items-stretch px-4 pt-2 pb-6 sm:px-8 sm:pt-4 sm:pb-12 md:px-10 md:pt-5 md:pb-14 lg:px-12 lg:pt-6 lg:pb-16 min-[90rem]:px-[6.25rem] min-[90rem]:pt-8 min-[90rem]:pb-[5rem]">
        <nav
          aria-label="Breadcrumb"
          className={`${SEGOE_UI_CLASS} text-left text-[0.8125rem] font-medium leading-5 tracking-normal text-subhead sm:text-[0.875rem]`}
        >
          <Link
            href="/"
            className="transition-colors hover:text-circle"
          >
            Home
          </Link>
          <span aria-hidden className="mx-2 text-[#D9E1E2]">
            /
          </span>
          <Link
            href="/ngos/"
            className="transition-colors hover:text-circle"
          >
            NGO Directory
          </Link>
          <span aria-hidden className="mx-2 text-[#D9E1E2]">
            /
          </span>
          <span className="text-heading">{city}</span>
        </nav>

        <h1 className="mt-5 max-w-[40rem] text-left font-georgia text-[1.75rem] font-bold leading-[2.25rem] tracking-normal text-heading sm:mt-6 sm:text-[2.25rem] sm:leading-[2.75rem] md:text-[2.5rem] md:leading-[3rem] lg:text-[2.75rem] lg:leading-[3.25rem] min-[90rem]:text-[3rem] min-[90rem]:leading-[3.75rem]">
          {hero.title}
        </h1>
        <p
          className={`${SEGOE_UI_CLASS} mt-4 max-w-[42rem] text-left text-[0.9375rem] font-normal leading-6 tracking-normal text-subhead sm:mt-5 sm:text-[1.0625rem] sm:leading-7 md:text-[1.125rem] md:leading-8`}
        >
          {hero.subtitle}
        </p>

        <ul className="mt-6 flex w-full flex-col items-start gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3">
          {hero.badges.map((badge, index) => {
            const Icon = BADGE_ICONS[index] ?? CircleCheck;
            return (
              <li
                key={badge}
                className={`${SEGOE_UI_CLASS} inline-flex items-center gap-2 rounded-full border border-line bg-gray-100 px-3.5 py-2 text-[0.8125rem] font-semibold leading-none tracking-normal text-heading sm:text-[0.875rem]`}
              >
                <Icon
                  className="h-4 w-4 shrink-0 text-circle"
                  strokeWidth={2}
                  aria-hidden
                />
                {badge}
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
          <CtaButton
            href={hero.primaryCta.href}
            className="h-11 w-full rounded-full px-7 py-3 text-[0.875rem] sm:h-12 sm:w-auto sm:px-8 sm:text-[1rem] min-[90rem]:h-[3.5rem] min-[90rem]:px-9"
            labelClassName="gap-2 font-bold"
          >
            {hero.primaryCta.label}
            <CtaArrow />
          </CtaButton>
          <CtaButton
            href={hero.secondaryCta.href}
            variant="outline"
            className="h-11 w-full rounded-full px-7 py-3 text-[0.875rem] sm:h-12 sm:w-auto sm:px-8 sm:text-[1rem] min-[90rem]:h-[3.5rem] min-[90rem]:px-9"
            labelClassName="gap-2 font-bold"
          >
            {hero.secondaryCta.label}
            <CtaArrow />
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}

export function NgosCityLeading({ data }: { data: NgosCityPage }) {
  const { leading } = data;

  return (
    <PageSection tone="gray" innerClassName="flex w-full flex-col items-center">
      <SectionIntro
        eyebrow={leading.eyebrow}
        title={leading.title}
        subtitle={leading.body}
        titleAs="h2"
      />
    </PageSection>
  );
}

export function NgosCityFeatured({ data }: { data: NgosCityPage }) {
  const { featured } = data;

  return (
    <PageSection tone="white" innerClassName="flex w-full flex-col items-center">
      <SectionIntro
        eyebrow={featured.eyebrow}
        title={featured.title}
        titleAs="h2"
      />
      <ul className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
        {featured.items.map((item) => (
          <li key={item}>
            <div className="flex h-full flex-col rounded-[1rem] border border-line bg-white p-5 shadow-card sm:rounded-[1.25rem] sm:p-6">
              <NgosIcon name="verified" />
              <p
                className={`${SEGOE_UI_CLASS} mt-4 text-[0.9375rem] font-semibold leading-6 tracking-normal text-heading sm:text-[1rem] sm:leading-7`}
              >
                {item}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}

export function NgosCityWhyDonate({ data }: { data: NgosCityPage }) {
  const { whyDonate } = data;

  return (
    <PageSection tone="gray" innerClassName="flex w-full flex-col items-center">
      <SectionIntro
        eyebrow={whyDonate.eyebrow}
        title={whyDonate.title}
        titleAs="h2"
      />
      <ul className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {whyDonate.items.map((item) => (
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

export function NgosCityCategories({ data }: { data: NgosCityPage }) {
  const { categories } = data;

  return (
    <PageSection tone="white" innerClassName="flex w-full flex-col items-center">
      <SectionIntro
        eyebrow={categories.eyebrow}
        title={categories.title}
        titleAs="h2"
      />
      <ul className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {categories.items.map((item) => (
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

export function NgosCityHowTo({ data }: { data: NgosCityPage }) {
  const { howTo } = data;

  return (
    <PageSection tone="gray" innerClassName="flex w-full flex-col items-center">
      <SectionIntro eyebrow={howTo.eyebrow} title={howTo.title} titleAs="h2" />
      <ol className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {howTo.steps.map((step, index) => (
          <li key={step.title}>
            <div className="flex h-full flex-col rounded-[1rem] border border-line bg-white p-5 shadow-card sm:rounded-[1.25rem] sm:p-6">
              <span
                className={`${SEGOE_UI_CLASS} flex h-10 w-10 items-center justify-center rounded-full bg-circle text-[0.9375rem] font-bold text-white`}
              >
                {index + 1}
              </span>
              <h3
                className={`${SEGOE_UI_CLASS} mt-4 text-[1.0625rem] font-bold leading-7 tracking-normal text-heading sm:text-[1.125rem]`}
              >
                {step.title}
              </h3>
              <p
                className={`${SEGOE_UI_CLASS} mt-2 text-[0.9375rem] font-normal leading-6 tracking-normal text-subhead sm:text-[1rem] sm:leading-7`}
              >
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex w-full justify-center sm:mt-10">
        <CtaButton
          href={howTo.cta.href}
          className="h-11 w-full rounded-full px-7 py-3 text-[0.875rem] sm:h-12 sm:w-auto sm:px-8 sm:text-[1rem] min-[90rem]:h-[3.5rem] min-[90rem]:px-9"
          labelClassName="gap-2 font-bold"
        >
          {howTo.cta.label}
          <CtaArrow />
        </CtaButton>
      </div>
    </PageSection>
  );
}

export function NgosCityNearby({ data }: { data: NgosCityPage }) {
  const { nearby } = data;

  return (
    <PageSection tone="white" innerClassName="flex w-full flex-col items-center">
      <SectionIntro eyebrow={nearby.eyebrow} title={nearby.title} titleAs="h2" />
      <ul className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
        {nearby.items.map((item) => (
          <li key={item.href}>
            <NgosCardShell href={item.href}>
              <NgosIcon name="city" />
              <h3
                className={`${SEGOE_UI_CLASS} mt-4 text-[1.0625rem] font-bold leading-7 tracking-normal text-heading sm:text-[1.125rem]`}
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
                Explore →
              </span>
            </NgosCardShell>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
