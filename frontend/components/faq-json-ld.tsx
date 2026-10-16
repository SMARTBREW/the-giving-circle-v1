import type { FaqEntry } from "@/constants/faqs";
import JsonLd from "@/components/json-ld";

/** FAQPage JSON-LD - `text` must match visible answer copy word for word. */
export default function FaqJsonLd({
  items,
  id,
}: {
  items: readonly FaqEntry[];
  /** Optional `@id` for the FAQPage node (e.g. page `#faq`). */
  id?: string;
}) {
  if (!items.length) return null;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(id ? { "@id": id } : {}),
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}
