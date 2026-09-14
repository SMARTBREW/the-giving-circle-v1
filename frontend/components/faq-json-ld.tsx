import type { FaqEntry } from "@/constants/faqs";

/** FAQPage JSON-LD — `text` must match visible answer copy word for word. */
export default function FaqJsonLd({ items }: { items: readonly FaqEntry[] }) {
  if (!items.length) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
