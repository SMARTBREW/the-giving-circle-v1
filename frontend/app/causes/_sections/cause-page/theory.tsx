import PageSection from "@/components/page-section";
import type { CausePageTheoryContent } from "@/constants/cause-page";
import { CAUSE_SECTION, SEGOE_UI_CLASS } from "@/constants";

const DOT_RED = "bg-[var(--Giving-Red,#e62b4f)]";
const DOT_SKY = "bg-[#7ec8e3]";
const LINE_RED = "bg-[var(--Giving-Red,#e62b4f)]";

export default function CausePageTheory({
  content,
}: {
  content: CausePageTheoryContent;
}) {
  const { eyebrow, titleLine1, titleLine2, body, steps, footer } = content;

  return (
    <PageSection tone="alternate" innerClassName={CAUSE_SECTION.padTightY}>
      <div className="w-full rounded-[1.25rem] bg-[#0A1E33] px-5 py-8 sm:rounded-[1.5rem] sm:px-8 sm:py-10 md:px-10 md:py-12 lg:rounded-[2rem] lg:px-12 lg:py-14 min-[90rem]:px-14 min-[90rem]:py-16">
        <p className={`${SEGOE_UI_CLASS} ${CAUSE_SECTION.eyebrow}`}>{eyebrow}</p>

        <h2 className={CAUSE_SECTION.titleOnDark}>
          <span className="block">{titleLine1}</span>
          {titleLine2 ? <span className="block">{titleLine2}</span> : null}
        </h2>

        <p className={`${SEGOE_UI_CLASS} ${CAUSE_SECTION.bodyOnDark}`}>
          {body}
        </p>

        {/* Phone / tablet: vertical steps */}
        <ol className="relative mt-8 flex flex-col gap-0 sm:mt-10 lg:hidden">
          <span
            aria-hidden
            className={`absolute top-1.5 bottom-1.5 left-[0.3125rem] w-px ${LINE_RED}`}
          />
          {steps.map((step) => (
            <li key={step.label} className="relative flex gap-4 pb-7 last:pb-0 sm:gap-5 sm:pb-8">
              <span
                aria-hidden
                className={`relative z-10 mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                  step.outcome ? DOT_SKY : DOT_RED
                }`}
              />
              <div className="min-w-0 flex-1">
                <p
                  className={`${SEGOE_UI_CLASS} text-[0.625rem] font-[700] leading-4 tracking-[0.08em] uppercase sm:text-[0.6875rem] ${
                    step.outcome
                      ? "text-[#7ec8e3]"
                      : "text-[var(--Giving-Red,#e62b4f)]"
                  }`}
                >
                  {step.label}
                </p>
                <h3
                  className={`${SEGOE_UI_CLASS} mt-1.5 text-[1rem] font-[700] leading-6 tracking-normal sm:text-[1.0625rem] sm:leading-7 ${
                    step.outcome ? "text-[#7ec8e3]" : "text-[#FFFFFF]"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`${SEGOE_UI_CLASS} mt-1.5 text-[0.8125rem] font-[400] leading-5 tracking-normal text-white/80 sm:text-[0.875rem] sm:leading-6`}
                >
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Desktop: horizontal timeline */}
        <ol className="mt-10 hidden grid-cols-4 gap-5 lg:mt-12 lg:grid lg:gap-6 min-[90rem]:mt-14 min-[90rem]:gap-8">
          {steps.map((step, index) => (
            <li key={step.label} className="relative flex min-w-0 flex-col">
              <div className="relative mb-4 h-2.5 w-full">
                <span
                  aria-hidden
                  className={`absolute top-0 left-0 z-10 h-2.5 w-2.5 rounded-full ${
                    step.outcome ? DOT_SKY : DOT_RED
                  }`}
                />
                {index < steps.length - 1 ? (
                  <span
                    aria-hidden
                    className={`absolute top-1 left-2.5 h-px right-[-1.25rem] lg:right-[-1.5rem] min-[90rem]:right-[-2rem] ${LINE_RED}`}
                  />
                ) : null}
              </div>
              <p
                className={`${SEGOE_UI_CLASS} text-[0.625rem] font-[700] leading-4 tracking-[0.08em] uppercase min-[90rem]:text-[0.6875rem] ${
                  step.outcome
                    ? "text-[#7ec8e3]"
                    : "text-[var(--Giving-Red,#e62b4f)]"
                }`}
              >
                {step.label}
              </p>
              <h3
                className={`${SEGOE_UI_CLASS} mt-2 text-[1rem] font-[700] leading-6 tracking-normal min-[90rem]:text-[1.0625rem] min-[90rem]:leading-7 ${
                  step.outcome ? "text-[#7ec8e3]" : "text-[#FFFFFF]"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`${SEGOE_UI_CLASS} mt-2 text-[0.8125rem] font-[400] leading-5 tracking-normal text-white/80 min-[90rem]:text-[0.875rem] min-[90rem]:leading-6`}
              >
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <p
          className={`${SEGOE_UI_CLASS} mt-8 max-w-[48rem] border-t border-white/15 pt-6 text-[0.8125rem] font-[400] leading-5 tracking-normal text-white/70 sm:mt-10 sm:pt-7 sm:text-[0.875rem] sm:leading-6 lg:mt-12`}
        >
          {footer}
        </p>
      </div>
    </PageSection>
  );
}
