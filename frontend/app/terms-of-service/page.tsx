import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "@/components/page-section";
import {
  SEGOE_UI_CLASS,
  SITE,
  TERMS_INTRO,
  TERMS_PAGE,
  TERMS_SECTIONS,
  type TermsBlock,
} from "@/constants";

export const metadata: Metadata = {
  title: "Terms of Use | The Giving Circle",
  description:
    "Terms of Use for The Giving Circle platform - donations, Cause Champions, volunteers, NGO partners, and community giving in India.",
  alternates: { canonical: `${SITE.url}/terms-of-service/` },
};

function TermsBlocks({ blocks }: { blocks: TermsBlock[] }) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, index) => {
        if (block.type === "p") {
          const privacyLinked =
            block.text.includes("Privacy Policy") &&
            !block.text.includes("privacy policies");

          return (
            <p
              key={index}
              className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#4a5558)] sm:text-[1rem] sm:leading-7 lg:text-[1.0625rem] lg:leading-8`}
            >
              {privacyLinked
                ? block.text.split(/(Privacy Policy)/).map((part, i) =>
                    part === "Privacy Policy" ? (
                      <Link
                        key={i}
                        href="/privacy-policy"
                        className="font-[500] text-[var(--Main-CTA-button,#02938c)] underline-offset-2 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    ) : (
                      part
                    ),
                  )
                : block.text}
            </p>
          );
        }

        if (block.type === "h3") {
          return (
            <h3
              key={index}
              className={`${SEGOE_UI_CLASS} mt-2 text-[1.0625rem] font-[600] leading-7 tracking-normal text-[var(--Main-headings,#1c2426)] sm:text-[1.125rem] sm:leading-8`}
            >
              {block.text}
            </h3>
          );
        }

        return (
          <ul
            key={index}
            className={`${SEGOE_UI_CLASS} list-disc space-y-2 pl-5 text-[0.9375rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#4a5558)] sm:pl-6 sm:text-[1rem] sm:leading-7 lg:text-[1.0625rem] lg:leading-8`}
          >
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

export default function TermsOfServicePage() {
  const { eyebrow, title, lastUpdated } = TERMS_PAGE;

  return (
    <PageSection
      id="terms-of-service"
      tone="alternate"
      pad="tight-top"
      innerClassName="flex w-full flex-col items-stretch"
    >
      <div className="mx-auto w-full max-w-[48rem]">
        <p
          className={`${SEGOE_UI_CLASS} text-[0.75rem] leading-[1.5rem] font-[700] tracking-[0.08em] uppercase text-[var(--Eyebrow-label,#02938c)] sm:text-[0.875rem] lg:text-[0.9375rem] min-[90rem]:text-[1rem]`}
        >
          {eyebrow}
        </p>
        <h1 className="mt-4 font-['Georgia'] text-[1.75rem] leading-[2.25rem] font-[700] tracking-normal text-[var(--Main-headings,#1c2426)] sm:text-[2rem] sm:leading-[2.75rem] md:text-[2.25rem] md:leading-[2.875rem] lg:text-[2.375rem] lg:leading-[3rem]">
          {title}
        </h1>
        <p
          className={`${SEGOE_UI_CLASS} mt-3 text-[0.875rem] font-[500] leading-6 tracking-normal text-[var(--Subheading,#4a5558)] sm:text-[0.9375rem]`}
        >
          Last Updated: {lastUpdated}
        </p>

        <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:gap-8">
          <TermsBlocks blocks={TERMS_INTRO} />

          {TERMS_SECTIONS.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 flex flex-col gap-4"
            >
              <h2
                className={`${SEGOE_UI_CLASS} text-[1.125rem] font-[700] leading-7 tracking-normal text-[var(--Main-headings,#1c2426)] sm:text-[1.25rem] sm:leading-8`}
              >
                {section.title}
              </h2>
              <TermsBlocks blocks={section.blocks} />
            </section>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
