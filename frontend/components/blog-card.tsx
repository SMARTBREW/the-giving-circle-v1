import Link from "next/link";
import CtaArrow from "@/components/cta-arrow";
import { SEGOE_UI_CLASS, type BlogArticle } from "@/constants";

export default function BlogCard({ article }: { article: BlogArticle }) {
  return (
    <article className="flex h-full w-full flex-col rounded-[1rem] border border-[#BDBDBD] bg-[#FFFFFF] p-5 shadow-[0px_4px_20px_0px_#0000000F] sm:p-6 md:p-7 min-[90rem]:p-8">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <span
          className={`${SEGOE_UI_CLASS} inline-flex items-center rounded-[50px] bg-[rgba(0,169,143,0.12)] px-3 py-1.5 text-[0.75rem] font-[700] leading-none tracking-normal text-[var(--Brand-Green-Teal,#00A98F)] sm:text-[0.8125rem]`}
        >
          {article.category}
        </span>
        <span
          className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[400] leading-none tracking-normal text-[var(--Subheading,#45564B)] sm:text-[0.8125rem]`}
        >
          Last updated: {article.updated}
        </span>
      </div>

      <h2 className="mt-4 font-['Georgia'] text-[1.25rem] font-[700] leading-7 tracking-normal text-[var(--Main-headings,#000000)] sm:mt-5 sm:text-[1.375rem] sm:leading-8 md:text-[1.5rem] md:leading-8">
        <Link
          href={`/blog/${article.id}`}
          className="transition-colors hover:text-[var(--Main-CTA-button,#00A3BE)]"
        >
          {article.title}
        </Link>
      </h2>

      <p
        className={`${SEGOE_UI_CLASS} mt-3 flex-1 text-[0.9375rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#45564B)] sm:text-[1rem] sm:leading-7`}
      >
        {article.summary}
      </p>

      <Link
        href={`/blog/${article.id}`}
        className={`${SEGOE_UI_CLASS} mt-5 inline-flex items-center gap-2 text-[0.9375rem] font-[600] leading-none tracking-normal text-[var(--Main-CTA-button,#00A3BE)] transition-opacity hover:opacity-80 sm:mt-6 sm:text-[1rem]`}
      >
        Read article
        <CtaArrow />
      </Link>
    </article>
  );
}
