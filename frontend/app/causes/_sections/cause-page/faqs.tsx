import PageSection from "@/components/page-section";
import FaqsAccordion from "@/components/faqs-accordion";
import type { CausePageFaqsContent } from "@/constants/cause-page";
import { CAUSE_SECTION, SEGOE_UI_CLASS } from "@/constants";

export default function CausePageFaqs({
  content,
}: {
  content: CausePageFaqsContent;
}) {
  const { eyebrow, title, body, items } = content;

  return (
    <PageSection
      id="cause-faqs"
      tone="white"
      innerClassName={CAUSE_SECTION.pad}
    >
      <p className={`${SEGOE_UI_CLASS} ${CAUSE_SECTION.eyebrow}`}>{eyebrow}</p>
      <h2 className={CAUSE_SECTION.title}>{title}</h2>
      <p className={`${SEGOE_UI_CLASS} ${CAUSE_SECTION.body}`}>{body}</p>

      <div className="mt-6 w-full sm:mt-8 lg:mt-10">
        <FaqsAccordion items={[...items]} fullWidth />
      </div>
    </PageSection>
  );
}
