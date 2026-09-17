import type { LiveCause } from "@/constants";
import type { CauseDetailContent } from "@/constants/cause-details";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import CauseMotionCard from "./cause-motion-card";
import { getCauseCardAccent } from "./cause-card-accents";
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
      <PageSection tone="gray">
        <SectionIntro
          eyebrow="How This Cause Works"
          title={detail.responseHeading}
        />

        <div className="mx-auto mt-6 w-full max-w-4xl text-center sm:mt-7">
          {detail.response.map((para, index) => (
            <p
              key={para.slice(0, 48)}
              className={`${SEGOE_UI_CLASS} ${
                index === 0 ? "mt-0" : "mt-4"
              } text-[0.9375rem] leading-6 font-[400] text-[var(--Subheading,#45564B)] sm:text-[1rem] sm:leading-7 lg:text-[1.125rem] lg:leading-8`}
            >
              {para}
            </p>
          ))}
        </div>

        <ul className="mt-10 grid w-full grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:mt-14 min-[90rem]:grid-cols-4 min-[90rem]:gap-6">
          {detail.howItWorks.map((step, index) => {
            const accent = getCauseCardAccent(index);
            return (
              <li key={step.title} className="min-w-0">
                <CauseMotionCard
                  accentIndex={index}
                  className="items-center px-5 py-6 text-center sm:px-6 sm:py-7"
                >
                  <span
                    className={`${SEGOE_UI_CLASS} relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-[1.25rem] font-[700] transition-transform duration-300 group-hover/cause-card:scale-110 ${accent.soft}`}
                  >
                    {index + 1}
                  </span>
                  <h3
                    className={`${SEGOE_UI_CLASS} relative z-10 mt-5 text-[1.125rem] font-[700] leading-7 text-[var(--Main-headings,#000000)] sm:text-[1.25rem]`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`${SEGOE_UI_CLASS} relative z-10 mt-3 text-[0.9375rem] leading-6 font-[400] text-[var(--Subheading,#45564B)] sm:text-[1rem] sm:leading-7`}
                  >
                    {step.body}
                  </p>
                </CauseMotionCard>
              </li>
            );
          })}
        </ul>
      </PageSection>

      <PageSection tone="white">
        <div className="w-full">
          <SectionIntro
            eyebrow="Transparency"
            title={detail.coversHeading}
            subtitle="Every contribution pooled by your giving circle goes directly to the verified NGO."
          />
          <ul className="mx-auto mt-8 grid w-full max-w-5xl grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
            {cause.whatYourSupportDoes.map((item, index) => {
              const accent = getCauseCardAccent(index);
              return (
                <li key={item} className="min-w-0">
                  <CauseMotionCard
                    accentIndex={index}
                    className="flex-row items-start gap-3 px-5 py-5 sm:px-6 sm:py-6"
                  >
                    <span
                      aria-hidden
                      className={`relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#FFFFFF] transition-transform duration-300 group-hover/cause-card:scale-110 ${accent.check}`}
                    >
                      <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3">
                        <path
                          d="M2.5 6.2 4.8 8.5 9.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p
                      className={`${SEGOE_UI_CLASS} relative z-10 text-[0.9375rem] leading-6 font-[400] text-[var(--Main-headings,#000000)] sm:text-[1rem] sm:leading-7`}
                    >
                      {item}
                    </p>
                  </CauseMotionCard>
                </li>
              );
            })}
          </ul>
        </div>
      </PageSection>

      <PageSection tone="gray">
        <SectionIntro
          eyebrow="In Their Own Words"
          title="Voices From This Cause"
          subtitle="Parents, champions, and community partners describing the change they have seen."
        />
        <ul className="mx-auto mt-8 grid w-full max-w-6xl grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2 md:gap-6">
          {detail.quotes.map((item, index) => {
            const accent = getCauseCardAccent(index === 1 ? 2 : index);
            return (
              <li
                key={`${item.author}-${item.text.slice(0, 24)}`}
                className="min-w-0"
              >
                <blockquote
                  className={`flex h-full flex-col rounded-[1rem] border-2 bg-[#FFFFFF] p-6 sm:p-7 ${accent.ring}`}
                >
                  <p
                    className={`${SEGOE_UI_CLASS} flex-1 text-[1rem] leading-7 font-[400] text-[var(--Main-headings,#000000)] sm:text-[1.0625rem] sm:leading-8`}
                  >
                    “{item.text}”
                  </p>
                  <footer className="mt-6 border-t border-[#E8E8E8] pt-5">
                    <p
                      className={`${SEGOE_UI_CLASS} text-[1rem] font-[700] text-[var(--Main-headings,#000000)]`}
                    >
                      {item.author}
                    </p>
                    <p
                      className={`${SEGOE_UI_CLASS} mt-1 text-[0.875rem] font-[400] text-[var(--Paragraph,#5F6D64)]`}
                    >
                      {item.role}
                    </p>
                  </footer>
                </blockquote>
              </li>
            );
          })}
        </ul>
      </PageSection>

      <PageSection
        tone="white"
        innerClassName="flex flex-col gap-8 min-[56.25rem]:flex-row min-[56.25rem]:items-center min-[56.25rem]:gap-8 lg:gap-12 min-[90rem]:gap-16"
      >
        <div className="min-w-0 flex-1">
          <SectionIntro
            align="left"
            eyebrow="Verified Partner"
            title={`About ${detail.partner.name}`}
          />
          <p
            className={`${SEGOE_UI_CLASS} mt-6 text-[0.9375rem] leading-6 font-[400] text-[var(--Subheading,#45564B)] sm:text-[1rem] sm:leading-7 lg:text-[1.125rem] lg:leading-8`}
          >
            {detail.partner.blurb}
          </p>
          <p
            className={`${SEGOE_UI_CLASS} mt-4 text-[0.875rem] leading-6 font-[400] text-[var(--Paragraph,#5F6D64)] sm:text-[0.9375rem]`}
          >
            {detail.partner.note}
          </p>
        </div>

        <ul className="grid w-full grid-cols-2 gap-3 sm:gap-4 min-[56.25rem]:w-[min(20rem,38%)] min-[56.25rem]:shrink-0 min-[56.25rem]:pt-4 lg:w-[min(22rem,36%)] lg:pt-6 min-[90rem]:w-[24rem] min-[90rem]:pt-8">
          {detail.partner.stats.map((stat, index) => {
            const accent = getCauseCardAccent(index);
            return (
              <li
                key={stat.label}
                className={`flex flex-col items-center justify-center rounded-[1rem] border-2 bg-[#FFFFFF] px-4 py-5 text-center sm:py-6 ${accent.ring}`}
              >
                <p
                  className={`${SEGOE_UI_CLASS} text-[1.75rem] font-[700] leading-none sm:text-[2rem] ${accent.value}`}
                >
                  {stat.value}
                </p>
                <p
                  className={`${SEGOE_UI_CLASS} mt-2 text-[0.8125rem] font-[400] leading-5 text-[var(--Paragraph,#5F6D64)]`}
                >
                  {stat.label}
                </p>
              </li>
            );
          })}
        </ul>
      </PageSection>
    </>
  );
}
