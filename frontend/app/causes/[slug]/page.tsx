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
      {/* ── HERO: IMMERSIVE FULL-BLEED IMAGE + EDITORIAL OVERLAY (TOUCHES VERY TOP) ── */}
      <section className="relative -mt-[5.5rem] w-full overflow-hidden bg-[#0C1A13] sm:-mt-[6.25rem] md:-mt-[6.75rem] lg:-mt-[7rem] min-[90rem]:-mt-[7.25rem]">
        {/* Full-bleed background image with rich gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={cause.src}
            alt={cause.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          {/* Multi-layer gradient for cinematic depth */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-[#0C1A13]/60 via-[#0C1A13]/20 to-[#0C1A13]/95"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0C1A13]/70 via-transparent to-transparent"
          />
        </div>

        {/* Decorative mesh blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-[#00A98F]/10 blur-[6rem]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-[#00A3BE]/10 blur-[5rem]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-4 pt-[6.5rem] pb-12 sm:px-8 sm:pt-[7.5rem] sm:pb-16 md:px-10 md:pt-[8.25rem] md:pb-16 lg:px-12 lg:pt-[8.75rem] lg:pb-20 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[9.25rem] min-[90rem]:pb-24">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className={`${SEGOE_UI_CLASS} flex flex-wrap items-center gap-1.5 text-[0.8125rem] font-[500] text-white/50`}
          >
            <Link href="/" className="transition-colors hover:text-white/80">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/causes" className="transition-colors hover:text-white/80">
              Live Causes
            </Link>
            <span aria-hidden="true">/</span>
            <span className="max-w-[18rem] truncate text-white/70 sm:max-w-none">
              {cause.title}
            </span>
          </nav>

          {/* Hero content grid */}
          <div className="mt-8 grid w-full grid-cols-1 gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start lg:gap-10 min-[90rem]:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] min-[90rem]:gap-14">
            {/* Left: Title & meta */}
            <FadeInSection className="flex flex-col">
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`${SEGOE_UI_CLASS} inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3.5 py-1 text-[0.6875rem] font-[700] uppercase tracking-[0.1em] text-white`}
                >
                  {cause.category}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/20 backdrop-blur-sm px-3 py-1 text-[0.6875rem] font-[700] uppercase tracking-[0.08em] text-emerald-300">
                  <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.25" />
                    <path d="M3.5 6l1.75 1.75L8.5 4.25" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Verified Non-Profit
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm px-3 py-1 text-[0.6875rem] font-[600] text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {cause.daysLeft}
                </span>
              </div>

              {/* Main headline */}
              <h1 className="mt-5 font-['Georgia'] text-[2rem] font-[700] leading-[1.2] tracking-tight text-white sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] min-[90rem]:text-[3.5rem]">
                {cause.title}
              </h1>

              {/* Summary */}
              <p
                className={`${SEGOE_UI_CLASS} mt-5 max-w-2xl text-[1.0625rem] leading-7 font-[400] text-white/75 sm:text-[1.125rem] sm:leading-8`}
              >
                {cause.summary}
              </p>

              {/* Trust badges row */}
              <div className="mt-7 flex flex-wrap items-center gap-2.5">
                {cause.trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className={`${SEGOE_UI_CLASS} inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm px-3.5 py-1.5 text-[0.8125rem] font-[600] text-white/80`}
                  >
                    <svg viewBox="0 0 14 14" fill="none" className="h-3 w-3 text-emerald-400">
                      <path d="M7 1L2 3.5v4c0 3.1 2.2 5.3 5 5.8 2.8-.5 5-2.7 5-5.8v-4L7 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                      <path d="M4.5 7l2 2L9.5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {badge}
                  </span>
                ))}
              </div>

              {/* Partner + location */}
              <div
                className={`${SEGOE_UI_CLASS} mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-5 text-[0.875rem] text-white/50`}
              >
                <span className="inline-flex items-center gap-1.5">
                  <span>Partner:</span>
                  <strong className="font-[700] text-white/80">{cause.org}</strong>
                </span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <svg viewBox="0 0 14 14" fill="none" className="h-3.5 w-3.5 text-white/40">
                    <path d="M7 1.5A4 4 0 0 1 11 5.5c0 3-4 7-4 7S3 8.5 3 5.5a4 4 0 0 1 4-4Z" stroke="currentColor" strokeWidth="1.25" />
                    <circle cx="7" cy="5.5" r="1.25" stroke="currentColor" strokeWidth="1.25" />
                  </svg>
                  {cause.location}
                </span>
              </div>
            </FadeInSection>

            {/* Right: Donation card — cleanly aligned at top of hero */}
            <aside className="w-full">
              <div className="rounded-[1.75rem] border border-gray-200/80 bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.14)] sm:p-7">
                {/* Org header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[rgba(0,169,143,0.1)]">
                      <span className={`${SEGOE_UI_CLASS} text-[0.6875rem] font-[800] text-[var(--Brand-Green-Teal,#00A98F)] uppercase`}>
                        {cause.org.slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <p className={`${SEGOE_UI_CLASS} text-[0.875rem] font-[700] text-gray-900 leading-tight`}>
                        {cause.org}
                      </p>
                      <p className={`${SEGOE_UI_CLASS} text-[0.75rem] text-gray-400`}>
                        Verified Partner
                      </p>
                    </div>
                  </div>
                  <span className={`${SEGOE_UI_CLASS} rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-[0.6875rem] font-[700] text-emerald-700`}>
                    Active
                  </span>
                </div>

                {/* Raised amount */}
                <div className="mt-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <div>
                      <span className={`${SEGOE_UI_CLASS} block text-[2rem] font-[800] tracking-tight text-gray-900 leading-none`}>
                        {cause.raised}
                      </span>
                      <span className={`${SEGOE_UI_CLASS} mt-1 block text-[0.8125rem] font-[500] text-gray-400`}>
                        raised of {cause.goal}
                      </span>
                    </div>
                    <span className={`${SEGOE_UI_CLASS} shrink-0 rounded-xl bg-[#F0FDF4] border border-emerald-100 px-3.5 py-2 text-[1.25rem] font-[800] text-emerald-700`}>
                      {cause.percent}%
                    </span>
                  </div>

                  {/* Segmented progress bar */}
                  <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#00A98F] to-[#00A3BE] transition-all duration-700"
                      style={{ width: `${cause.percent}%` }}
                    />
                  </div>
                </div>

                {/* Stats chips */}
                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3.5 py-3">
                    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0 text-[#00A98F]">
                      <circle cx="6" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.4" />
                      <circle cx="11" cy="6" r="1.6" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M2.5 13c0-2 1.7-3.5 3.5-3.5S9.5 11 9.5 13M9.5 13c.3-1.5 1.5-2.6 3-2.6 1.2 0 2.2.7 2.6 1.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    <span className={`${SEGOE_UI_CLASS} text-[0.8125rem] font-[600] text-gray-800`}>
                      {cause.supporters}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3.5 py-3">
                    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0 text-[#00A3BE]">
                      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M8 5v3.2L10 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={`${SEGOE_UI_CLASS} text-[0.8125rem] font-[600] text-gray-800`}>
                      {cause.daysLeft}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-5 flex flex-col gap-3">
                  <CtaButton
                    href="/champion/apply"
                    className="h-[3.5rem] w-full rounded-[0.875rem] bg-gradient-to-r from-[#00A98F] to-[#00A3BE] text-white shadow-lg shadow-[#00A98F]/25 transition-all hover:shadow-xl hover:shadow-[#00A98F]/35 hover:brightness-105"
                    labelClassName="gap-2 text-[1rem] font-[700]"
                  >
                    Champion This Cause
                    <CtaArrow />
                  </CtaButton>
                  <Link
                    href="/causes"
                    className={`${SEGOE_UI_CLASS} flex h-11 items-center justify-center rounded-[0.875rem] border border-gray-200 text-[0.875rem] font-[600] text-gray-600 transition-colors hover:text-gray-900 hover:border-gray-300`}
                  >
                    Browse Other Causes
                  </Link>
                </div>

                {/* Trust note */}
                <div className="mt-4 flex items-center justify-center gap-1.5">
                  <svg viewBox="0 0 14 14" fill="none" className="h-3.5 w-3.5 shrink-0 text-emerald-500">
                    <path d="M7 1L2 3.5v4c0 3.1 2.2 5.3 5 5.8 2.8-.5 5-2.7 5-5.8v-4L7 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                    <path d="M4.5 7l2 2L9.5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[500] text-gray-400`}>
                    100% of circle funds go directly to the verified NGO
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── ABOUT THIS CAUSE ── */}
      <PageSection
        tone="white"
        fade={false}
        innerClassName="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14 min-[90rem]:gap-16"
      >
        {/* Left: Story */}
        <div className="min-w-0 flex-1">
          <SectionIntro
            align="left"
            eyebrow="About This Cause"
            title={cause.aboutHeading}
          />
          <div className="mt-7 flex flex-col gap-5">
            {cause.about.map((para, index) => (
              <p
                key={para.slice(0, 48)}
                className={`${SEGOE_UI_CLASS} ${
                  index === 0
                    ? "text-[1.125rem] leading-8 font-[500] text-gray-800 sm:text-[1.1875rem]"
                    : "text-[1rem] leading-7.5 font-[400] text-gray-600 sm:text-[1.0625rem]"
                }`}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Commitment card */}
          <div className="mt-9 relative overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-[#F3FBF7] to-[#EBF9F2] p-6 sm:p-7">
            {/* Decorative accent */}
            <div aria-hidden="true" className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-bl-[3rem] bg-emerald-100/50" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-emerald-200/30 blur-xl" />
            <h3 className={`${SEGOE_UI_CLASS} relative z-10 flex items-center gap-2.5 text-[1rem] font-[700] text-emerald-900`}>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white text-xs">
                ✓
              </span>
              How Your Circle Drives Direct Change
            </h3>
            <ul className="relative z-10 mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Direct partner allocation — zero hidden platform cuts",
                "80G tax receipt issued to every contributor",
                "Transparent milestone updates shared back with champions",
                "Verified field visits available for active Cause Champions",
              ].map((item) => (
                <li
                  key={item}
                  className={`${SEGOE_UI_CLASS} flex items-start gap-2.5 text-[0.9375rem] text-emerald-900/80`}
                >
                  <svg viewBox="0 0 14 14" fill="none" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600">
                    <path d="M3 7l3 3 5-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Impact stats + quote (sticky on desktop, aligned downward with title) */}
        <aside className="w-full shrink-0 lg:sticky lg:top-28 lg:w-[22rem] min-[90rem]:w-[24rem] lg:mt-10 min-[90rem]:mt-11">
          {/* Impact stats card */}
          <div className="relative overflow-hidden rounded-2xl bg-[#0C1A13] p-7 shadow-xl shadow-black/10 sm:p-8">
            {/* Decorative blobs */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-[#00A98F]/20 blur-2xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#00A3BE]/15 blur-2xl" />

            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
              <p className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[700] uppercase tracking-[0.1em] text-white/50`}>
                Impact So Far
              </p>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 text-[0.6875rem] font-[700] text-emerald-400">
                Verified Metrics
              </span>
            </div>

            <ul className="relative z-10 mt-5 grid grid-cols-2 gap-3.5">
              {cause.impact.map((stat) => (
                <li
                  key={stat.label}
                  className="flex flex-col rounded-xl border border-white/8 bg-white/5 p-4"
                >
                  <span
                    className={`${SEGOE_UI_CLASS} text-[1.625rem] font-[800] leading-none text-white sm:text-[1.75rem]`}
                  >
                    {stat.value}
                  </span>
                  <span
                    className={`${SEGOE_UI_CLASS} mt-2 text-[0.75rem] font-[500] leading-tight text-white/55 sm:text-[0.8125rem]`}
                  >
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote card */}
          {cause.quote ? (
            <blockquote className="relative mt-5 overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
              {/* Big decorative quote */}
              <div
                aria-hidden="true"
                className="absolute -top-3 right-4 font-['Georgia'] text-[6rem] leading-none text-[var(--Brand-Green-Teal,#00A98F)] opacity-8 select-none pointer-events-none"
              >
                &ldquo;
              </div>
              {/* Teal top accent bar */}
              <div className="absolute top-0 left-0 h-1 w-16 rounded-full bg-gradient-to-r from-[#00A98F] to-[#00A3BE]" />
              <p
                className={`${SEGOE_UI_CLASS} relative z-10 text-[1rem] leading-7 font-[400] text-gray-700 italic sm:text-[1.0625rem]`}
              >
                &ldquo;{cause.quote.text}&rdquo;
              </p>
              <footer className="relative z-10 mt-5 flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#00A98F] to-[#00A3BE] text-white font-[700] text-sm shadow-sm">
                  {cause.quote.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-[700] text-gray-900 leading-tight`}>
                    {cause.quote.author}
                  </p>
                  <p className={`${SEGOE_UI_CLASS} text-[0.75rem] text-[#00A98F] font-[600] mt-0.5`}>
                    {cause.quote.role}
                  </p>
                </div>
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
