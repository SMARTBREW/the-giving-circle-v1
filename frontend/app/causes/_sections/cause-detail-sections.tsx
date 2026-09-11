import type { LiveCause } from "@/constants";
import type { CauseDetailContent } from "@/constants/cause-details";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import { SEGOE_UI_CLASS } from "@/constants";

export default function CauseDetailSections({
  cause,
  detail,
}: {
  cause: LiveCause;
  detail: CauseDetailContent;
}) {
  return (
    <>
      <PageSection
        tone="gray"
        innerClassName="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14 min-[90rem]:gap-16"
      >
        <div className="min-w-0 flex-1">
          <SectionIntro
            align="left"
            eyebrow="How This Cause Works"
            title={detail.responseHeading}
          />
          <div className="mt-5 flex flex-col gap-4 sm:mt-6">
            {detail.response.map((para) => (
              <p
                key={para.slice(0, 48)}
                className={`${SEGOE_UI_CLASS} text-[0.9375rem] leading-6 font-[400] text-[var(--Subheading,#45564B)] sm:text-[1rem] sm:leading-7 lg:text-[1.125rem] lg:leading-8`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:w-[22rem] lg:shrink-0 lg:grid-cols-1 min-[90rem]:w-[24rem]">
          {detail.howItWorks.map((step, index) => (
            <li
              key={step.title}
              className="rounded-[1rem] border border-[#BDBDBD] bg-[#FFFFFF] p-5 shadow-[0px_4px_20px_0px_#0000000F] sm:p-6"
            >
              <p
                className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[700] uppercase tracking-[0.08em] text-[var(--Eyebrow-label,#00A98F)]`}
              >
                Step {index + 1}
              </p>
              <h3
                className={`${SEGOE_UI_CLASS} mt-2 text-[1.0625rem] font-[700] text-[var(--Main-headings,#000000)] sm:text-[1.125rem]`}
              >
                {step.title}
              </h3>
              <p
                className={`${SEGOE_UI_CLASS} mt-2 text-[0.875rem] leading-6 text-[var(--Subheading,#45564B)] sm:text-[0.9375rem] sm:leading-7`}
              >
                {step.body}
              </p>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection tone="white">
        <SectionIntro
          eyebrow="Why It Matters"
          title={detail.whyNowHeading}
          subtitle={detail.whyNow[0]}
        />
        {detail.whyNow.length > 1 ? (
          <div className="mt-5 flex w-full max-w-[48rem] flex-col gap-4 sm:mt-6">
            {detail.whyNow.slice(1).map((para) => (
              <p
                key={para.slice(0, 48)}
                className={`${SEGOE_UI_CLASS} text-center text-[0.9375rem] leading-6 font-[400] text-[var(--Subheading,#45564B)] sm:text-[1rem] sm:leading-7 lg:text-[1.125rem] lg:leading-8`}
              >
                {para}
              </p>
            ))}
          </div>
        ) : null}

        <div className="mt-10 w-full sm:mt-12">
          <h3
            className={`${SEGOE_UI_CLASS} text-center text-[1.125rem] font-[700] text-[var(--Main-headings,#000000)] sm:text-[1.25rem]`}
          >
            {detail.coversHeading}
          </h3>
          <ul className="mt-6 grid w-full grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 lg:gap-4">
            {cause.whatYourSupportDoes.map((item) => (
              <li
                key={item}
                className={`${SEGOE_UI_CLASS} flex gap-3 rounded-[1rem] border border-[#BDBDBD] bg-gray-100 px-4 py-4 text-[0.9375rem] leading-6 text-[var(--Subheading,#45564B)] sm:px-5 sm:text-[1rem] sm:leading-7`}
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--Main-CTA-button,#00A3BE)]"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      <PageSection tone="gray">
        <SectionIntro
          eyebrow="In Their Own Words"
          title="Voices From This Cause"
          subtitle="Parents, champions, and community partners describing the change they have seen."
        />
        <ul className="mt-8 grid w-full grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2 md:gap-6">
          {detail.quotes.map((item) => (
            <li
              key={`${item.author}-${item.text.slice(0, 24)}`}
              className="flex h-full flex-col rounded-[1rem] border border-[#BDBDBD] bg-[#FFFFFF] p-5 shadow-[0px_4px_20px_0px_#0000000F] sm:p-6 md:p-7"
            >
              <p
                className={`${SEGOE_UI_CLASS} flex-1 text-[0.9375rem] leading-6 font-[400] text-[var(--Subheading,#45564B)] sm:text-[1rem] sm:leading-7 lg:text-[1.0625rem] lg:leading-8`}
              >
                “{item.text}”
              </p>
              <footer className="mt-5 border-t border-[#00000014] pt-4">
                <p
                  className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-[700] text-[var(--Main-headings,#000000)]`}
                >
                  {item.author}
                </p>
                <p
                  className={`${SEGOE_UI_CLASS} mt-1 text-[0.8125rem] text-[var(--Subheading,#45564B)]`}
                >
                  {item.role}
                </p>
              </footer>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection
        tone="white"
        innerClassName="flex flex-col gap-8 md:flex-row md:items-start md:gap-10 lg:gap-14"
      >
        <div className="min-w-0 flex-1">
          <SectionIntro
            align="left"
            eyebrow="Verified Partner"
            title={`About ${detail.partner.name}`}
          />
          <p
            className={`${SEGOE_UI_CLASS} mt-5 text-[0.9375rem] leading-6 font-[400] text-[var(--Subheading,#45564B)] sm:mt-6 sm:text-[1rem] sm:leading-7 lg:text-[1.125rem] lg:leading-8`}
          >
            {detail.partner.blurb}
          </p>
          <p
            className={`${SEGOE_UI_CLASS} mt-4 text-[0.875rem] leading-6 text-[var(--Subheading,#45564B)] sm:text-[0.9375rem]`}
          >
            {detail.partner.note}
          </p>
        </div>
        <ul className="grid w-full grid-cols-2 gap-3 sm:gap-4 md:w-[18rem] md:shrink-0 min-[90rem]:w-[20rem]">
          {detail.partner.stats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-[1rem] border border-[#BDBDBD] bg-gray-100 px-4 py-4 sm:px-5 sm:py-5"
            >
              <p
                className={`${SEGOE_UI_CLASS} text-[1.25rem] font-[700] leading-none text-[var(--Main-headings,#000000)] sm:text-[1.375rem]`}
              >
                {stat.value}
              </p>
              <p
                className={`${SEGOE_UI_CLASS} mt-2 text-[0.8125rem] leading-5 text-[var(--Subheading,#45564B)]`}
              >
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </PageSection>
    </>
  );
}
