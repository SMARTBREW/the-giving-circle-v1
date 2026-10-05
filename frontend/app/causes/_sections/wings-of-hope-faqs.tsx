import PageSection from "@/components/page-section";
import FaqsAccordion from "@/components/faqs-accordion";
import { SEGOE_UI_CLASS, WINGS_OF_HOPE_FAQS, WINGS_SECTION } from "@/constants";

export default function WingsOfHopeFaqs() {
  const { eyebrow, title, body, items } = WINGS_OF_HOPE_FAQS;

  return (
    <PageSection
      id="cause-faqs"
      tone="white"
      innerClassName={WINGS_SECTION.pad}
    >
      <p className={`${SEGOE_UI_CLASS} ${WINGS_SECTION.eyebrow}`}>{eyebrow}</p>
      <h2 className={WINGS_SECTION.title}>{title}</h2>
      <p className={`${SEGOE_UI_CLASS} ${WINGS_SECTION.body}`}>{body}</p>

      <div className="mt-6 w-full sm:mt-8 lg:mt-10">
        <FaqsAccordion items={[...items]} fullWidth />
      </div>
    </PageSection>
  );
}
