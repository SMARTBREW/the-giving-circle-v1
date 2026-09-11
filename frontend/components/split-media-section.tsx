import Image from "next/image";
import type { ReactNode } from "react";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import { SEGOE_UI_CLASS } from "@/constants";

export default function SplitMediaSection({
  eyebrow,
  title,
  subtitle,
  paragraphs,
  src,
  alt,
  tone = "white",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  paragraphs?: readonly string[];
  src: string;
  alt: string;
  tone?: "white" | "gray";
  children?: ReactNode;
}) {
  return (
    <PageSection
      tone={tone}
      innerClassName="flex flex-col gap-8 sm:gap-10 md:flex-row md:items-center md:gap-10 lg:gap-14 min-[90rem]:gap-20"
    >
      <div className="flex flex-col md:flex-1">
        <SectionIntro
          align="left"
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />
        {paragraphs?.length ? (
          <div className="mt-5 flex flex-col gap-4 sm:mt-6 lg:mt-7">
            {paragraphs.map((para) => (
              <p
                key={para.slice(0, 40)}
                className={`${SEGOE_UI_CLASS} text-[0.9375rem] leading-6 font-[400] tracking-normal text-[var(--Subheading,#45564B)] sm:text-[1rem] sm:leading-7 lg:text-[1.125rem] lg:leading-8`}
              >
                {para}
              </p>
            ))}
          </div>
        ) : null}
        {children}
      </div>

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1rem] border border-[#BDBDBD] md:w-[42%] md:self-stretch md:aspect-auto lg:w-[44%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 767px) 100vw, 44vw"
          className="object-cover"
        />
      </div>
    </PageSection>
  );
}
