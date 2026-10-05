import FaqItem from "@/components/faq-item";
import type { FaqEntry } from "@/constants/faqs";
import { FAQ_ITEMS } from "@/constants/faqs";

function faqKey(item: FaqEntry | { question: string; answer: string; id?: string }) {
  return "id" in item && item.id ? item.id : item.question;
}

function faqId(item: FaqEntry | { question: string; answer: string; id?: string }) {
  if ("id" in item && item.id) return item.id;
  return item.question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

export default function FaqsAccordion({
  items = FAQ_ITEMS,
  questionAs = "h4",
  fullWidth = false,
  compact = false,
}: {
  items?: readonly (FaqEntry | { question: string; answer: string; id?: string })[];
  questionAs?: "h3" | "h4";
  /** Stretch cards to the section width instead of the default centered FAQ column. */
  fullWidth?: boolean;
  /** Tighter padding and type for sections that need to fit one viewport. */
  compact?: boolean;
}) {
  return (
    <ul
      className={`flex w-full flex-col ${
        compact ? "gap-2.5 sm:gap-3" : "gap-4 sm:gap-5 md:gap-6"
      } ${fullWidth ? "items-stretch" : "items-center"}`}
    >
      {items.map((item, index) => (
        <FaqItem
          key={faqKey(item)}
          id={faqId(item)}
          question={item.question}
          answer={item.answer}
          links={"links" in item ? item.links : undefined}
          defaultOpen={index === 0}
          questionAs={questionAs}
          fullWidth={fullWidth}
          compact={compact}
        />
      ))}
    </ul>
  );
}
