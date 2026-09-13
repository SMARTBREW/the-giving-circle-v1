import Link from "next/link";
import CtaArrow from "@/components/cta-arrow";
import { SEGOE_UI_CLASS, type BlogArticle } from "@/constants";

type Category = BlogArticle["category"];

const CATEGORY_STYLES: Record<
  Category,
  { pill: string; accent: string; bar: string }
> = {
  "Student & Family Guide": {
    pill: "bg-[rgba(57,118,168,0.12)] text-[#3976A8]",
    accent: "text-[#3976A8]",
    bar: "bg-[#3976A8]",
  },
  "Giving Guide": {
    pill: "bg-[rgba(34,139,34,0.1)] text-[var(--Main-CTA-button,#228b22)]",
    accent: "text-[var(--Main-CTA-button,#228b22)]",
    bar: "bg-[var(--Main-CTA-button,#228b22)]",
  },
  "Trust & Verification Guide": {
    pill: "bg-[rgba(0,169,143,0.12)] text-[var(--Brand-Green-Teal,#00A98F)]",
    accent: "text-[var(--Brand-Green-Teal,#00A98F)]",
    bar: "bg-[var(--Brand-Green-Teal,#00A98F)]",
  },
  "CSR for Companies": {
    pill: "bg-[rgba(237,59,88,0.1)] text-[#ED3B58]",
    accent: "text-[#ED3B58]",
    bar: "bg-[#ED3B58]",
  },
  "Family & Parent Guide": {
    pill: "bg-[rgba(139,69,19,0.1)] text-[#8B4513]",
    accent: "text-[#8B4513]",
    bar: "bg-[#8B4513]",
  },
};

const FALLBACK_STYLE = {
  pill: "bg-[rgba(0,169,143,0.12)] text-[var(--Brand-Green-Teal,#00A98F)]",
  accent: "text-[var(--Brand-Green-Teal,#00A98F)]",
  bar: "bg-[var(--Brand-Green-Teal,#00A98F)]",
};

export default function BlogCard({ article }: { article: BlogArticle }) {
  const style = CATEGORY_STYLES[article.category as Category] ?? FALLBACK_STYLE;

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-[1rem] border border-[#BDBDBD] bg-[#FFFFFF] shadow-[0_0.25rem_1.25rem_0_#0000000F] transition-all duration-300 hover:-translate-y-1 hover:border-[#D0D0D0] hover:shadow-[0_0.5rem_2rem_0_#00000012]">
      {/* Category accent bar */}
      <div className={`h-1 w-full origin-left transition-transform duration-300 ${style.bar}`} />

      <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-7 min-[90rem]:p-8">
        {/* Header row */}
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <span
            className={`${SEGOE_UI_CLASS} inline-flex items-center rounded-full px-3 py-1 text-[0.75rem] font-[700] leading-none tracking-normal sm:text-[0.8125rem] ${style.pill}`}
          >
            {article.category}
          </span>
          <span
            className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[400] leading-none tracking-normal text-[#9CA3A8] sm:text-[0.8125rem]`}
          >
            {article.updated}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-4 font-['Georgia'] text-[1.1875rem] font-[700] leading-[1.6rem] tracking-normal text-[var(--Main-headings,#000000)] sm:mt-5 sm:text-[1.3125rem] sm:leading-[1.8rem] md:text-[1.375rem] md:leading-[1.875rem]">
          <Link
            href={`/blog/${article.id}`}
            className={`transition-colors duration-200 ${style.accent}`}
          >
            {article.title}
          </Link>
        </h2>

        {/* Summary */}
        <p
          className={`${SEGOE_UI_CLASS} mt-3 flex-1 text-[0.9375rem] font-[400] leading-6 tracking-normal text-[#5A6570] sm:text-[1rem] sm:leading-7`}
        >
          {article.summary}
        </p>

        {/* CTA */}
        <Link
          href={`/blog/${article.id}`}
          className={`${SEGOE_UI_CLASS} mt-5 inline-flex items-center gap-1.5 text-[0.875rem] font-[700] leading-none tracking-normal transition-all duration-200 hover:gap-3 sm:mt-6 sm:text-[0.9375rem] ${style.accent}`}
        >
          Read article
          <CtaArrow />
        </Link>
      </div>
    </article>
  );
}
