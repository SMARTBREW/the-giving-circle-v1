import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeInSection from "@/components/fade-in-section";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import CampaignCard from "@/components/campaign-card";
import CtaButton from "@/components/cta-button";
import CtaArrow from "@/components/cta-arrow";
import PhotoCtaBand from "@/components/photo-cta-band";
import FaqsAccordion from "@/components/faqs-accordion";
import CauseDetailSections from "../_sections/cause-detail-sections";
import {
  CAUSES_CTA,
  LIVE_CAUSES,
  SEGOE_UI_CLASS,
  getCauseDetailContent,
  getLiveCause,
  toCampaignCard,
} from "@/constants";

export function generateStaticParams() {
  return LIVE_CAUSES.map((cause) => ({ slug: cause.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cause = getLiveCause(slug);
  if (!cause) {
    return { title: "Cause | The Giving Circle" };
  }

  return {
    title: `${cause.title} | The Giving Circle`,
    description: cause.summary,
  };
}

export default async function CauseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cause = getLiveCause(slug);
  if (!cause) notFound();

  const detail = getCauseDetailContent(cause.id);

  const related = LIVE_CAUSES.filter((item) => item.id !== cause.id)
    .filter((item) => item.category === cause.category)
    .concat(
      LIVE_CAUSES.filter(
        (item) => item.id !== cause.id && item.category !== cause.category,
      ),
    )
    .slice(0, 3)
    .map(toCampaignCard);

  return (
    <>
      <section className="w-full bg-gray-100">
        <div className="mx-auto w-full max-w-[90rem] px-4 pt-8 pb-10 sm:px-8 sm:pt-10 sm:pb-12 md:px-10 md:pt-12 md:pb-14 lg:px-12 lg:pt-14 lg:pb-16 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[4rem] min-[90rem]:pb-[4.5rem]">
          <nav
            aria-label="Breadcrumb"
            className={`${SEGOE_UI_CLASS} flex flex-wrap items-center gap-2 text-[0.8125rem] font-[400] leading-none tracking-normal text-[var(--Subheading,#45564B)] sm:text-[0.875rem]`}
          >
            <Link
              href="/"
              className="text-[var(--Brand-Green-Teal,#00A98F)] transition-opacity hover:opacity-80"
            >
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/causes"
              className="text-[var(--Brand-Green-Teal,#00A98F)] transition-opacity hover:opacity-80"
            >
              Live Causes
            </Link>
            <span aria-hidden="true">/</span>
            <span className="min-w-0 break-words text-[var(--Subheading,#45564B)]">
              {cause.title}
            </span>
          </nav>

          <FadeInSection className="mt-6 grid w-full grid-cols-1 gap-8 sm:mt-8 lg:mt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-12 min-[90rem]:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1rem] border border-[#BDBDBD] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[28rem] min-[90rem]:min-h-[32rem]">
              <Image
                src={cause.src}
                alt={cause.alt}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col">
              <p
                className={`${SEGOE_UI_CLASS} text-[0.875rem] font-[700] leading-none tracking-[0.08em] uppercase ${cause.categoryClassName}`}
              >
                {cause.category}
              </p>
              <h1 className="mt-3 font-['Georgia'] text-[1.75rem] font-[700] leading-[2.25rem] tracking-normal text-[var(--Main-headings,#000000)] sm:mt-4 sm:text-[2.25rem] sm:leading-[2.75rem] md:text-[2.5rem] md:leading-[3rem] lg:text-[2.75rem] lg:leading-[3.25rem]">
                {cause.title}
              </h1>
              <p
                className={`${SEGOE_UI_CLASS} mt-4 text-[0.9375rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#45564B)] sm:mt-5 sm:text-[1.0625rem] sm:leading-7`}
              >
                {cause.summary}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {cause.trustBadges.map((badge) => (
                  <li
                    key={badge}
                    className={`${SEGOE_UI_CLASS} inline-flex items-center rounded-[50px] border border-[#BDBDBD] bg-[#FFFFFF] px-3 py-1.5 text-[0.75rem] font-[600] leading-none text-[var(--Main-headings,#000000)] sm:text-[0.8125rem]`}
                  >
                    {badge}
                  </li>
                ))}
              </ul>

              <p
                className={`${SEGOE_UI_CLASS} mt-4 text-[0.8125rem] font-[400] leading-5 text-[var(--Subheading,#45564B)] sm:text-[0.875rem]`}
              >
                {cause.operations}
              </p>

              <div
                className={`${SEGOE_UI_CLASS} mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.9375rem] text-[var(--Subheading,#45564B)] sm:mt-6 sm:text-[1rem]`}
              >
                <span>
                  By{" "}
                  <span className="font-[600] text-[var(--Main-headings,#000000)]">
                    {cause.org}
                  </span>
                </span>
                <span aria-hidden="true" className="text-[#BDBDBD]">
                  ·
                </span>
                <span>{cause.location}</span>
              </div>

              <div className="mt-6 rounded-[1rem] border border-[#BDBDBD] bg-[#FFFFFF] p-5 shadow-[0px_4px_20px_0px_#0000000F] sm:mt-8 sm:p-6">
                <div className="flex items-end justify-between gap-2">
                  <p className={`${SEGOE_UI_CLASS} min-w-0 text-[#212121]`}>
                    <span className="text-[1.25rem] font-[700] leading-none sm:text-[1.375rem]">
                      {cause.raised}
                    </span>
                    <span className="text-[0.9375rem] font-[600] sm:text-[1rem]">
                      {" "}
                      raised of {cause.goal}
                    </span>
                  </p>
                  <span
                    className={`${SEGOE_UI_CLASS} shrink-0 text-[1rem] font-[700] text-[var(--Eyebrow-label,#00A98F)]`}
                  >
                    {cause.percent}%
                  </span>
                </div>
                <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-[#E8EEEC]">
                  <div
                    className="h-full rounded-full bg-[var(--Eyebrow-label,#00A98F)]"
                    style={{ width: `${cause.percent}%` }}
                  />
                </div>
                <div
                  className={`${SEGOE_UI_CLASS} mt-3 flex flex-wrap justify-between gap-2 text-[0.875rem] text-[#404943] sm:text-[0.9375rem]`}
                >
                  <span>{cause.supporters}</span>
                  <span>{cause.daysLeft}</span>
                </div>
                <CtaButton
                  href="/champion/apply"
                  className="mt-5 h-12 w-full sm:h-14"
                  labelClassName="gap-2 font-[700]"
                >
                  Champion This Cause
                  <CtaArrow />
                </CtaButton>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <PageSection
        tone="white"
        innerClassName="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14 min-[90rem]:gap-16"
      >
        <div className="min-w-0 flex-1">
          <SectionIntro
            align="left"
            eyebrow="About This Cause"
            title={cause.aboutHeading}
          />
          <div className="mt-5 flex flex-col gap-4 sm:mt-6">
            {cause.about.map((para) => (
              <p
                key={para.slice(0, 48)}
                className={`${SEGOE_UI_CLASS} text-[0.9375rem] leading-6 font-[400] text-[var(--Subheading,#45564B)] sm:text-[1rem] sm:leading-7 lg:text-[1.125rem] lg:leading-8`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <aside className="w-full shrink-0 lg:sticky lg:top-28 lg:w-[18rem] min-[90rem]:w-[20rem]">
          <div className="rounded-[1rem] border border-[#BDBDBD] bg-gray-100 p-5 sm:p-6">
            <p
              className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[700] uppercase tracking-[0.08em] text-[var(--Eyebrow-label,#00A98F)]`}
            >
              Impact So Far
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-4">
              {cause.impact.map((stat) => (
                <li key={stat.label} className="flex flex-col">
                  <span
                    className={`${SEGOE_UI_CLASS} text-[1.25rem] font-[700] leading-none text-[var(--Main-headings,#000000)] sm:text-[1.375rem]`}
                  >
                    {stat.value}
                  </span>
                  <span
                    className={`${SEGOE_UI_CLASS} mt-2 text-[0.8125rem] leading-5 text-[var(--Subheading,#45564B)]`}
                  >
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {cause.quote ? (
            <blockquote className="mt-6 rounded-[1rem] border border-[#BDBDBD] bg-[#FFFFFF] p-5 shadow-[0px_4px_20px_0px_#0000000F] sm:p-6">
              <p
                className={`${SEGOE_UI_CLASS} text-[0.9375rem] leading-6 font-[400] text-[var(--Subheading,#45564B)] sm:text-[1rem] sm:leading-7`}
              >
                “{cause.quote.text}”
              </p>
              <footer className="mt-4">
                <p
                  className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-[700] text-[var(--Main-headings,#000000)]`}
                >
                  {cause.quote.author}
                </p>
                <p
                  className={`${SEGOE_UI_CLASS} mt-1 text-[0.8125rem] text-[var(--Subheading,#45564B)]`}
                >
                  {cause.quote.role}
                </p>
              </footer>
            </blockquote>
          ) : null}
        </aside>
      </PageSection>

      {detail ? <CauseDetailSections cause={cause} detail={detail} /> : null}

      {cause.faqs.length > 0 ? (
        <PageSection tone="gray">
          <SectionIntro
            eyebrow="Questions About This Cause"
            title="Frequently Asked Questions"
            subtitle="Clarity on where gifts go, how the programme works, and how your circle can champion it."
          />
          <div className="mt-8 w-full sm:mt-10 lg:mt-12">
            <FaqsAccordion items={cause.faqs} />
          </div>
        </PageSection>
      ) : null}

      {related.length > 0 ? (
        <PageSection tone="white">
          <SectionIntro
            eyebrow="More Live Causes"
            title="Keep Exploring"
            subtitle="Other verified campaigns your circle can champion next."
          />
          <ul className="mt-8 grid w-full grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2 lg:mt-12 min-[90rem]:grid-cols-3 min-[90rem]:gap-6">
            {related.map((card) => (
              <li key={card.id} className="min-w-0">
                <CampaignCard card={card} />
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center sm:mt-10">
            <CtaButton
              href="/causes"
              variant="outline"
              hoverFill
              className="h-12 gap-2 bg-[#FFFFFF] px-8 py-3 sm:h-14"
              labelClassName="font-[700]"
            >
              View All Live Causes
              <CtaArrow />
            </CtaButton>
          </div>
        </PageSection>
      ) : null}

      <PhotoCtaBand
        src={CAUSES_CTA.src}
        alt={CAUSES_CTA.alt}
        title={CAUSES_CTA.title}
        subtitle={CAUSES_CTA.subtitle}
        ctaLabel={CAUSES_CTA.ctaLabel}
        href={CAUSES_CTA.href}
      />
    </>
  );
}
