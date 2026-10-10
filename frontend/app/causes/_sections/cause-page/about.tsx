import PageSection from "@/components/page-section";
import type { CausePageAboutContent } from "@/constants/cause-page";
import { CAUSE_SECTION, SEGOE_UI_CLASS } from "@/constants";

export default function CausePageAbout({
  content,
}: {
  content: CausePageAboutContent;
}) {
  const { eyebrow, title, body, cards } = content;

  return (
    <PageSection
      tone="white"
      innerClassName={`${CAUSE_SECTION.pad} !pb-4 sm:!pb-6 md:!pb-8 lg:!pb-8 min-[90rem]:!pb-10`}
    >
      <p className={`${SEGOE_UI_CLASS} ${CAUSE_SECTION.eyebrow}`}>{eyebrow}</p>
      <h2 className={CAUSE_SECTION.title}>{title}</h2>
      <p className={`${SEGOE_UI_CLASS} ${CAUSE_SECTION.body} lg:max-w-[38rem]`}>
        {body}
      </p>

      <ul className="mt-6 grid w-full grid-cols-1 gap-3.5 sm:mt-8 sm:gap-4 md:grid-cols-2 md:gap-4 lg:mt-10 lg:gap-5">
        {cards.map((card) => (
          <li
            key={card.label}
            className="flex min-h-0 flex-col rounded-[0.875rem] border border-[#d9e1e2] bg-[#FFFFFF] p-4 shadow-[0px_4px_20px_0px_#0000000F] sm:rounded-[1rem] sm:p-5"
          >
            <p
              className={`${SEGOE_UI_CLASS} text-[0.625rem] font-[700] leading-4 tracking-[0.08em] uppercase text-[var(--Circle-Green,#02938c)] sm:text-[0.6875rem]`}
            >
              {card.label}
            </p>
            <h3 className="mt-1.5 font-['Georgia'] text-[1.0625rem] font-[700] leading-6 tracking-normal text-[var(--Main-headings,#1c2426)] sm:mt-2 sm:text-[1.125rem] sm:leading-7">
              {card.title}
            </h3>
            <p
              className={`${SEGOE_UI_CLASS} mt-1.5 text-[0.875rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#4a5558)] sm:mt-2 sm:text-[0.9375rem] sm:leading-6`}
            >
              {card.body}
            </p>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
