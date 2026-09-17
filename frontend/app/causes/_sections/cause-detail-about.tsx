import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import { SEGOE_UI_CLASS, type LiveCause } from "@/constants";

export default function CauseDetailAbout({ cause }: { cause: LiveCause }) {
  return (
    <PageSection
      tone="white"
      innerClassName="flex flex-col gap-10 min-[56.25rem]:flex-row min-[56.25rem]:items-start min-[56.25rem]:gap-8 lg:gap-12 min-[90rem]:gap-16"
    >
      <div className="min-w-0 flex-1">
        <SectionIntro
          align="left"
          eyebrow="About This Cause"
          title={cause.aboutHeading}
        />
        <div className="mt-6 flex flex-col gap-4 sm:mt-7 sm:gap-5">
          {cause.about.map((para) => (
            <p
              key={para.slice(0, 48)}
              className={`${SEGOE_UI_CLASS} text-[0.9375rem] leading-6 font-[400] tracking-normal text-[var(--Subheading,#45564B)] sm:text-[1rem] sm:leading-7 lg:text-[1.125rem] lg:leading-8`}
            >
              {para}
            </p>
          ))}
        </div>
      </div>

      <aside className="flex w-full shrink-0 flex-col gap-5 min-[56.25rem]:sticky min-[56.25rem]:top-28 min-[56.25rem]:w-[min(20rem,38%)] lg:w-[min(22rem,36%)] min-[90rem]:w-[24rem]">
        <div className="relative overflow-hidden rounded-[1rem] border border-[#BDBDBD] bg-gray-100 p-5 sm:p-6">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-[var(--Brand-Green-Teal,#00A98F)]/15 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-[var(--Main-CTA-button,#00A3BE)]/15 blur-2xl"
          />
          <p
            className={`${SEGOE_UI_CLASS} relative text-[0.75rem] font-[700] uppercase tracking-[0.08em] text-[var(--Eyebrow-label,#00A98F)]`}
          >
            Impact So Far
          </p>
          <ul className="relative mt-5 grid grid-cols-2 gap-4">
            {cause.impact.map((stat) => (
              <li key={stat.label} className="flex flex-col">
                <span
                  className={`${SEGOE_UI_CLASS} text-[1.5rem] font-[700] leading-none text-[var(--Main-headings,#000000)] sm:text-[1.75rem]`}
                >
                  {stat.value}
                </span>
                <span
                  className={`${SEGOE_UI_CLASS} mt-2 text-[0.8125rem] font-[400] leading-5 text-[var(--Paragraph,#5F6D64)]`}
                >
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {cause.quote ? (
          <blockquote className="rounded-[1rem] border border-[#BDBDBD] bg-[#FFFFFF] p-5 sm:p-6">
            <div
              aria-hidden
              className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[var(--Brand-Green-Teal,#00A98F)] to-[var(--Main-CTA-button,#228b22)]"
            />
            <p
              className={`${SEGOE_UI_CLASS} text-[1rem] leading-7 font-[400] text-[var(--Main-headings,#000000)] sm:text-[1.0625rem] sm:leading-8`}
            >
              “{cause.quote.text}”
            </p>
            <footer className="mt-4 border-t border-[#E8E8E8] pt-4">
              <p
                className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-[700] text-[var(--Main-headings,#000000)]`}
              >
                {cause.quote.author}
              </p>
              <p
                className={`${SEGOE_UI_CLASS} mt-1 text-[0.8125rem] font-[400] text-[var(--Paragraph,#5F6D64)]`}
              >
                {cause.quote.role}
              </p>
            </footer>
          </blockquote>
        ) : null}
      </aside>
    </PageSection>
  );
}
