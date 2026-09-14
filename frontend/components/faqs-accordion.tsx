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
}: {
  items?: readonly (FaqEntry | { question: string; answer: string; id?: string })[];
}) {
  return (
    <ul className="flex w-full flex-col items-center gap-4 sm:gap-5 md:gap-6">
      {items.map((item, index) => (
        <FaqItem
          key={faqKey(item)}
          id={faqId(item)}
          question={item.question}
          answer={item.answer}
          links={"links" in item ? item.links : undefined}
          defaultOpen={index === 0}
        />
      ))}
    </ul>
  );
}
