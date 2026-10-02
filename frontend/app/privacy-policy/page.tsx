import type { Metadata } from "next";
import PageSection from "@/components/page-section";
import {
  PRIVACY_INTRO,
  PRIVACY_PAGE,
  PRIVACY_SECTIONS,
  SEGOE_UI_CLASS,
  SITE,
  type PrivacyBlock,
} from "@/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | The Giving Circle",
  description:
    "How The Giving Circle collects, uses, shares and protects personal data for donors, Cause Champions, volunteers and NGO partners.",
  alternates: { canonical: `${SITE.url}/privacy-policy/` },
};

function PrivacyBlocks({ blocks }: { blocks: PrivacyBlock[] }) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return (
            <p
              key={index}
              className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#4a5558)] sm:text-[1rem] sm:leading-7 lg:text-[1.0625rem] lg:leading-8`}
            >
              {block.text}
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

export default function PrivacyPolicyPage() {
  const { eyebrow, title, lastUpdated } = PRIVACY_PAGE;

  return (
    <PageSection
      id="privacy-policy"
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
          <PrivacyBlocks blocks={PRIVACY_INTRO} />

          {PRIVACY_SECTIONS.map((section) => (
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
              <PrivacyBlocks blocks={section.blocks} />
            </section>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
