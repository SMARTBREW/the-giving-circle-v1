import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeInSection from "@/components/fade-in-section";
import PhotoCtaBand from "@/components/photo-cta-band";
import CtaArrow from "@/components/cta-arrow";
import {
  BLOG_ARTICLES,
  BLOG_CTA,
  EDUCATION_PHOTO,
  SEGOE_UI_CLASS,
  getBlogArticle,
} from "@/constants";

export function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({ slug: article.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) {
    return { title: "Article | The Giving Circle" };
  }

  return {
    title: `${article.title} | The Giving Circle`,
    description: article.summary,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();

  const related = BLOG_ARTICLES.filter((item) => item.id !== article.id).slice(
    0,
    3,
  );

  return (
    <>
      <section className="w-full bg-[var(--Alternate-color,#F7FBFB)]">
        <div className="mx-auto w-full max-w-[90rem] px-4 pt-8 pb-10 sm:px-8 sm:pt-10 sm:pb-12 md:px-10 md:pt-12 md:pb-14 lg:px-12 lg:pt-14 lg:pb-16 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[4rem] min-[90rem]:pb-[4.5rem]">
          <nav
            aria-label="Breadcrumb"
            className={`${SEGOE_UI_CLASS} flex flex-wrap items-center gap-2 text-[0.8125rem] font-[400] leading-none tracking-normal text-[var(--Subheading,#45564B)] sm:text-[0.875rem]`}
          >
            <Link
              href="/"
              className="text-[var(--Brand-Green-Teal,#00A98F)] transition-opacity hover:opacity-80"
            >
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/blog"
              className="text-[var(--Brand-Green-Teal,#00A98F)] transition-opacity hover:opacity-80"
            >
              Blog
            </Link>
            <span aria-hidden="true">/</span>
            <span className="min-w-0 break-words text-[var(--Subheading,#45564B)]">
              {article.title}
            </span>
          </nav>

          <FadeInSection className="mt-6 sm:mt-8">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
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

            <h1 className="mt-4 max-w-[48rem] font-['Georgia'] text-[1.75rem] font-[700] leading-[2.25rem] tracking-normal text-[var(--Main-headings,#000000)] sm:mt-5 sm:text-[2.25rem] sm:leading-[2.75rem] md:text-[2.5rem] md:leading-[3rem] lg:text-[2.75rem] lg:leading-[3.5rem] min-[90rem]:text-[3rem] min-[90rem]:leading-[3.75rem]">
              {article.title}
            </h1>
            <p
              className={`${SEGOE_UI_CLASS} mt-4 max-w-[42rem] text-[0.9375rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#45564B)] sm:mt-5 sm:text-[1.0625rem] sm:leading-7 md:text-[1.125rem] md:leading-8`}
            >
              {article.summary}
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="w-full bg-[#FFFFFF]">
        <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-10 px-4 pt-8 pb-10 sm:gap-12 sm:px-8 sm:pt-12 sm:pb-12 md:px-10 md:pt-14 md:pb-14 lg:flex-row lg:items-start lg:gap-14 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:gap-16 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem]">
          <aside className="w-full shrink-0 lg:sticky lg:top-28 lg:w-[16rem] min-[90rem]:w-[18rem]">
            <p
              className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[700] leading-none tracking-[0.08em] uppercase text-[var(--Eyebrow-label,#00A98F)] sm:text-[0.8125rem]`}
            >
              In This Article
            </p>
            <ol className="mt-4 flex flex-col gap-3">
              {article.sections.map((section, index) => (
                <li key={section.heading}>
                  <a
                    href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className={`${SEGOE_UI_CLASS} text-[0.875rem] font-[500] leading-5 tracking-normal text-[var(--Subheading,#45564B)] transition-colors hover:text-[var(--Main-CTA-button,#00A3BE)] sm:text-[0.9375rem] sm:leading-6`}
                  >
                    {index + 1}. {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="min-w-0 flex-1">
            {article.sections.map((section) => {
              const sectionId = section.heading
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-");
              const list =
                "list" in section && Array.isArray(section.list)
                  ? section.list
                  : null;

              return (
                <FadeInSection
                  key={section.heading}
                  className="scroll-mt-28 border-b border-[#00000014] py-8 first:pt-0 last:border-b-0 last:pb-0 sm:py-10"
                >
                  <h2
                    id={sectionId}
                    className="font-['Georgia'] text-[1.375rem] font-[700] leading-8 tracking-normal text-[var(--Main-headings,#000000)] sm:text-[1.5rem] sm:leading-9 md:text-[1.75rem] md:leading-10"
                  >
                    {section.heading}
                  </h2>
                  <div className="mt-4 flex flex-col gap-4">
                    {section.paragraphs.map((para) => (
                      <p
                        key={para.slice(0, 48)}
                        className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#45564B)] sm:text-[1rem] sm:leading-7 lg:text-[1.0625rem] lg:leading-8`}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                  {list ? (
                    <ul className="mt-4 flex list-disc flex-col gap-2 pl-5">
                      {list.map((item) => (
                        <li
                          key={item}
                          className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#45564B)] sm:text-[1rem] sm:leading-7`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </FadeInSection>
              );
            })}

            {related.length > 0 ? (
              <div className="mt-10 border-t border-[#00000014] pt-8 sm:mt-12 sm:pt-10">
                <p
                  className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[700] leading-none tracking-[0.08em] uppercase text-[var(--Eyebrow-label,#00A98F)] sm:text-[0.8125rem]`}
                >
                  Related Reading
                </p>
                <ul className="mt-5 flex flex-col gap-4">
                  {related.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/blog/${item.id}`}
                        className={`${SEGOE_UI_CLASS} inline-flex items-center gap-2 text-[1rem] font-[600] leading-snug tracking-normal text-[var(--Main-CTA-button,#00A3BE)] transition-opacity hover:opacity-80 sm:text-[1.0625rem]`}
                      >
                        {item.title}
                        <CtaArrow />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <PhotoCtaBand
        src={EDUCATION_PHOTO}
        alt={BLOG_CTA.alt}
        title={BLOG_CTA.title}
        subtitle={BLOG_CTA.subtitle}
        ctaLabel={BLOG_CTA.ctaLabel}
        href={BLOG_CTA.href}
        objectPosition="sm:object-[50%_40%]"
      />
    </>
  );
}
