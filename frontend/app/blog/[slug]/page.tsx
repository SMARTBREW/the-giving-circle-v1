import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeInSection from "@/components/fade-in-section";
import PhotoCtaBand from "@/components/photo-cta-band";
import CtaArrow from "@/components/cta-arrow";
import FaqsAccordion from "@/components/faqs-accordion";
import {
  BLOG_ARTICLES,
  BLOG_CTA,
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

  const canonicalUrl = `https://www.thegivingcircle.in/blog/${slug}`;
  const ogImageUrl =
    "image" in article && article.image
      ? article.image.startsWith("/")
        ? `https://www.thegivingcircle.in${article.image}`
        : article.image
      : "https://www.thegivingcircle.in/images/causes/92db69bff355c2fc20daf700e27d23cf0f6b57dd.png";

  return {
    title: `${article.title} | The Giving Circle`,
    description: article.summary,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${article.title} | The Giving Circle`,
      description: article.summary,
      url: canonicalUrl,
      siteName: "The Giving Circle",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt:
            (article as { imageAlt?: string; title: string }).imageAlt ||
            article.title,
        },
      ],
      type: "article",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | The Giving Circle`,
      description: article.summary,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
    },
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

  const canonicalUrl = `https://www.thegivingcircle.in/blog/${slug}`;
  const ogImageUrl =
    "image" in article && article.image
      ? article.image.startsWith("/")
        ? `https://www.thegivingcircle.in${article.image}`
        : article.image
      : "https://www.thegivingcircle.in/images/causes/92db69bff355c2fc20daf700e27d23cf0f6b57dd.png";

  // Collect any FAQs for JSON-LD
  const allFaqs: { question: string; answer: string }[] = [];
  article.sections.forEach((sec) => {
    if ("faqs" in sec && Array.isArray(sec.faqs)) {
      allFaqs.push(...sec.faqs);
    }
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.thegivingcircle.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://www.thegivingcircle.in/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: article.title,
        description: article.summary,
        url: canonicalUrl,
        image: ogImageUrl,
        dateModified: article.updated,
        publisher: {
          "@type": "Organization",
          name: "The Giving Circle",
          url: "https://www.thegivingcircle.in",
          logo: {
            "@type": "ImageObject",
            url: "https://www.thegivingcircle.in/logo.png",
          },
        },
        author: {
          "@type": "Organization",
          name: "author" in article && article.author ? article.author : "The Giving Circle Team",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
      },
      ...(allFaqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: allFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  const hasImage = "image" in article && Boolean(article.image);
  const customRelatedLinks =
    "relatedLinks" in article && Array.isArray(article.relatedLinks)
      ? article.relatedLinks
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="w-full bg-[#F5F7F6]">
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
                className={`${SEGOE_UI_CLASS} inline-flex items-center rounded-full bg-[rgba(0,169,143,0.12)] px-3 py-1.5 text-[0.75rem] font-[700] leading-none tracking-normal text-[var(--Brand-Green-Teal,#00A98F)] sm:text-[0.8125rem]`}
              >
                {article.category}
              </span>
              {"author" in article && article.author ? (
                <>
                  <span
                    className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[500] leading-none tracking-normal text-[var(--Main-headings,#000000)] sm:text-[0.8125rem]`}
                  >
                    {article.author}
                  </span>
                  <span aria-hidden className="text-gray-400">
                    •
                  </span>
                </>
              ) : null}
              <span
                className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[400] leading-none tracking-normal text-[var(--Subheading,#45564B)] sm:text-[0.8125rem]`}
              >
                Last updated: {article.updated}
              </span>
            </div>

            <div
              className={
                hasImage
                  ? "mt-5 grid grid-cols-1 gap-8 min-[56.25rem]:mt-7 min-[56.25rem]:grid-cols-[1.15fr_1fr] min-[56.25rem]:items-center min-[56.25rem]:gap-8 lg:gap-10 min-[90rem]:gap-14"
                  : "mt-5"
              }
            >
              <div>
                <h1 className="max-w-[48rem] font-['Georgia'] text-[1.75rem] font-[700] leading-[2.25rem] tracking-normal text-[var(--Main-headings,#000000)] sm:text-[2.25rem] sm:leading-[2.75rem] md:text-[2.5rem] md:leading-[3rem] lg:text-[2.75rem] lg:leading-[3.5rem] min-[90rem]:text-[3rem] min-[90rem]:leading-[3.75rem]">
                  {article.title}
                </h1>
                <p
                  className={`${SEGOE_UI_CLASS} mt-4 max-w-[42rem] text-[0.9375rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#45564B)] sm:mt-5 sm:text-[1.0625rem] sm:leading-7 md:text-[1.125rem] md:leading-8`}
                >
                  {article.summary}
                </p>
              </div>

              {hasImage ? (
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1rem] border border-[#BDBDBD] shadow-[0_0.25rem_1.25rem_0_#0000000F] sm:rounded-[1.25rem]">
                  <Image
                    src={article.image as string}
                    alt={
                      "imageAlt" in article && typeof article.imageAlt === "string"
                        ? article.imageAlt
                        : (article as { title: string }).title
                    }
                    fill
                    priority
                    sizes="(max-width: 899px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="w-full bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[56rem] px-4 pt-8 pb-10 sm:px-8 sm:pt-12 sm:pb-12 md:pt-14 md:pb-14 lg:pt-16 lg:pb-16 min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem]">
          {/* In This Article - placed directly above the main text */}
          <nav
            aria-label="Table of contents"
            className="mb-10 rounded-[1rem] border border-[#E5EAE7] bg-[#F7FAF8] p-6 sm:mb-12 sm:rounded-[1.25rem] sm:p-8"
          >
            <p
              className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[700] leading-none tracking-[0.08em] uppercase text-[var(--Eyebrow-label,#00A98F)] sm:text-[0.8125rem]`}
            >
              In This Article
            </p>
            <ol className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 sm:gap-y-3">
              {article.sections.map((section, index) => {
                const sec = section as { id?: string; heading: string };
                const targetId =
                  sec.id ||
                  sec.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-");

                return (
                  <li key={sec.heading}>
                    <a
                      href={`#${targetId}`}
                      className={`${SEGOE_UI_CLASS} text-[0.875rem] font-[500] leading-5 tracking-normal text-[var(--Subheading,#45564B)] transition-colors hover:text-[var(--Main-CTA-button,#00A3BE)] sm:text-[0.9375rem] sm:leading-6`}
                    >
                      {index + 1}. {sec.heading}
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="min-w-0 w-full">
            {article.sections.map((section, index) => {
              const sec = section as { id?: string; heading: string };
              const primaryId =
                sec.id ||
                sec.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              const altId = sec.heading
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-");
              const sectionIndexId = `section-${index + 1}`;

              const list =
                "list" in section && Array.isArray(section.list)
                  ? section.list
                  : null;
              const subsections =
                "subsections" in section && Array.isArray(section.subsections)
                  ? section.subsections
                  : null;
              const faqs =
                "faqs" in section && Array.isArray(section.faqs)
                  ? (section.faqs as { question: string; answer: string }[])
                  : null;

              return (
                <FadeInSection
                  key={section.heading}
                  className="scroll-mt-28 border-b border-[#00000014] py-8 first:pt-0 last:border-b-0 last:pb-0 sm:py-10"
                >
                  {/* Invisible anchor helpers so both #section-1 and #who-this-guide-is-for work smoothly */}
                  <span id={primaryId} className="relative -top-28 block invisible" />
                  {altId !== primaryId ? (
                    <span id={altId} className="relative -top-28 block invisible" />
                  ) : null}
                  {sectionIndexId !== primaryId ? (
                    <span id={sectionIndexId} className="relative -top-28 block invisible" />
                  ) : null}

                  <h2 className="font-['Georgia'] text-[1.375rem] font-[700] leading-8 tracking-normal text-[var(--Main-headings,#000000)] sm:text-[1.5rem] sm:leading-9 md:text-[1.75rem] md:leading-10">
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
                    <ul className="mt-4 flex list-disc flex-col gap-2.5 pl-5">
                      {list.map((item) => (
                        <li
                          key={item.slice(0, 48)}
                          className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#45564B)] sm:text-[1rem] sm:leading-7`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {subsections ? (
                    <div className="mt-6 flex flex-col gap-6">
                      {subsections.map((sub) => {
                        const subParas =
                          "paragraphs" in sub && Array.isArray(sub.paragraphs)
                            ? (sub.paragraphs as readonly string[])
                            : null;
                        const subList =
                          "list" in sub && Array.isArray(sub.list)
                            ? (sub.list as readonly string[])
                            : null;

                        return (
                          <div key={sub.subheading} className="mt-2">
                            <h3 className="font-['Georgia'] text-[1.125rem] font-[700] leading-7 text-[var(--Main-headings,#000000)] sm:text-[1.25rem]">
                              {sub.subheading}
                            </h3>
                            {subParas ? (
                              <div className="mt-3 flex flex-col gap-3">
                                {subParas.map((p) => (
                                  <p
                                    key={p.slice(0, 48)}
                                    className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#45564B)] sm:text-[1rem] sm:leading-7`}
                                  >
                                    {p}
                                  </p>
                                ))}
                              </div>
                            ) : null}
                            {subList ? (
                              <ul className="mt-3 flex list-disc flex-col gap-2 pl-5">
                                {subList.map((item) => (
                                  <li
                                    key={item.slice(0, 48)}
                                    className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#45564B)] sm:text-[1rem] sm:leading-7`}
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  ) : null}

                  {faqs && faqs.length > 0 ? (
                    <div className="mt-6">
                      <FaqsAccordion items={faqs} />
                    </div>
                  ) : null}
                </FadeInSection>
              );
            })}

            {/* Related Reading */}
            {customRelatedLinks && customRelatedLinks.length > 0 ? (
              <div className="mt-10 border-t border-[#00000014] pt-8 sm:mt-12 sm:pt-10">
                <p
                  className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[700] leading-none tracking-[0.08em] uppercase text-[var(--Eyebrow-label,#00A98F)] sm:text-[0.8125rem]`}
                >
                  Related Reading
                </p>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {customRelatedLinks.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className={`${SEGOE_UI_CLASS} inline-flex max-w-full min-w-0 items-start gap-2 text-[0.9375rem] font-[600] leading-snug tracking-normal text-[var(--Main-CTA-button,#00A3BE)] transition-opacity hover:opacity-80 sm:text-[1rem]`}
                      >
                        <span className="min-w-0 flex-1 text-balance">{item.title}</span>
                        <CtaArrow />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : related.length > 0 ? (
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
                        className={`${SEGOE_UI_CLASS} inline-flex max-w-full min-w-0 items-start gap-2 text-[1rem] font-[600] leading-snug tracking-normal text-[var(--Main-CTA-button,#00A3BE)] transition-opacity hover:opacity-80 sm:text-[1.0625rem]`}
                      >
                        <span className="min-w-0 flex-1 text-balance">{item.title}</span>
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
        src={BLOG_CTA.src}
        mobileSrc={BLOG_CTA.mobileSrc}
        alt={BLOG_CTA.alt}
        title={BLOG_CTA.title}
        subtitle={BLOG_CTA.subtitle}
        ctaLabel={BLOG_CTA.ctaLabel}
        href={BLOG_CTA.href}
        objectPosition={BLOG_CTA.objectPosition}
        mobileObjectPosition={BLOG_CTA.mobileObjectPosition}
      />
    </>
  );
}

