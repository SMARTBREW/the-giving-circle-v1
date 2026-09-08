import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import { CHAMPION_PAGE_HERO, PoppinsFont, SEGOE_UI_CLASS } from "@/constants";

export default function ChampionHero() {
  const {
    eyebrow,
    titleLine1,
    titleLine2Before,
    titleAccent,
    subtitle,
    primaryCta,
    secondaryCta,
    src,
    alt,
    stats,
  } = CHAMPION_PAGE_HERO;

  return (
    <section className="h-[calc(100dvh-4rem-1px)] w-full overflow-hidden bg-[#F3F9FF] sm:h-[calc(100dvh-4.5rem-1px)] md:h-[calc(100dvh-5rem-1px)] lg:h-[calc(100dvh-5.5rem-1px)] min-[90rem]:h-[calc(100dvh-6.25rem-1px)]">
      <div className="mx-auto flex h-full w-full max-w-[90rem] flex-col gap-6 px-4 py-6 sm:gap-8 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:px-12 lg:py-0 min-[90rem]:gap-16 min-[90rem]:px-[6.25rem]">
        <FadeInSection className="flex min-h-0 w-full min-w-0 flex-1 flex-col lg:h-[min(38.5rem,82%)] lg:max-w-[36rem] lg:justify-between min-[90rem]:h-[38.5rem] min-[90rem]:max-w-[36rem]">
          <div className="flex flex-col">
            <p
              className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[700] leading-6 tracking-[0.08em] uppercase text-[var(--Eyebrow-label,#00A98F)] sm:text-[0.875rem] min-[90rem]:text-[1rem]`}
            >
              {eyebrow}
            </p>

            <h1 className="mt-4 w-full font-['Georgia'] text-[1.75rem] font-[700] leading-9 tracking-[0.01em] text-[var(--Main-headings,#000000)] sm:mt-5 sm:text-[2.25rem] sm:leading-[2.75rem] md:text-[2.75rem] md:leading-[3.5rem] lg:mt-6 lg:text-[3.25rem] lg:leading-[4rem] min-[90rem]:mt-8 min-[90rem]:w-[36rem] min-[90rem]:text-[4rem] min-[90rem]:leading-[5rem]">
              <span className="block whitespace-nowrap">{titleLine1}</span>
              <span className="block whitespace-nowrap">
                {titleLine2Before}
                <span className="text-[var(--Main-CTA-button,#00A3BE)]">
                  {titleAccent}
                </span>
              </span>
            </h1>

            <p
              className={`${SEGOE_UI_CLASS} mt-4 max-w-[34rem] text-[0.9375rem] font-[400] leading-6 tracking-normal text-[#212121] sm:mt-5 sm:text-[1.0625rem] sm:leading-7 md:text-[1.125rem] md:leading-8 lg:mt-6 lg:text-[1.25rem] lg:leading-9 min-[90rem]:mt-8 min-[90rem]:w-[36rem] min-[90rem]:max-w-none min-[90rem]:text-[1.5rem] min-[90rem]:leading-[2.5rem]`}
            >
              {subtitle}
            </p>

            <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-5 lg:mt-10 min-[90rem]:mt-12 min-[90rem]:h-16 min-[90rem]:w-[30.875rem] min-[90rem]:gap-6">
              <CtaButton
                href={primaryCta.href}
                className="h-12 w-full gap-2 px-6 sm:h-14 sm:w-auto sm:px-8 min-[90rem]:h-16 min-[90rem]:w-[16.9375rem] min-[90rem]:px-9 min-[90rem]:py-[1.125rem] min-[90rem]:text-[1.125rem]"
                labelClassName="font-[700]"
              >
                {primaryCta.label}
              </CtaButton>
              <CtaButton
                href={secondaryCta.href}
                variant="outline"
                smoothScroll
                className="h-12 w-full border-[#66756D] bg-[#FFFFFF] px-6 sm:h-14 sm:w-auto sm:px-8 min-[90rem]:h-16 min-[90rem]:w-[12.4375rem] min-[90rem]:px-0 min-[90rem]:text-[1.125rem]"
                labelClassName="font-[700] !text-[var(--Main-CTA-button,#00A3BE)]"
              >
                {secondaryCta.label}
              </CtaButton>
            </div>
          </div>

          <ul className="mt-8 flex w-full items-start justify-between gap-6 sm:mt-10 sm:gap-10 lg:mt-0 min-[90rem]:w-auto min-[90rem]:justify-start min-[90rem]:gap-14">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="flex shrink-0 flex-col items-start sm:items-center sm:text-center min-[90rem]:h-[6.75rem] min-[90rem]:w-[10.625rem] min-[90rem]:items-center"
              >
                <p
                  className={`${SEGOE_UI_CLASS} whitespace-nowrap text-[1.375rem] font-[700] leading-none tracking-normal text-[var(--Main-headings,#000000)] sm:text-[1.75rem] md:text-[2.25rem] min-[90rem]:h-[3.75rem] min-[90rem]:text-[2.75rem] min-[90rem]:leading-[3.75rem]`}
                >
                  {stat.value}
                </p>
                <p
                  className={`${PoppinsFont.className} mt-2 whitespace-nowrap text-[0.75rem] font-[400] leading-4 tracking-normal text-[#000000B2] capitalize sm:mt-2.5 sm:text-[0.875rem] sm:leading-5 md:text-[1rem] md:leading-6 min-[90rem]:mt-3 min-[90rem]:h-8 min-[90rem]:text-[1.25rem] min-[90rem]:leading-8`}
                >
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </FadeInSection>

        <FadeInSection className="relative mx-auto aspect-[574/687] w-full max-w-[15rem] shrink-0 overflow-hidden rounded-[1.25rem] sm:max-w-[18rem] sm:rounded-[1.5rem] md:max-w-[22rem] lg:mx-0 lg:h-[min(38.5rem,82%)] lg:w-auto lg:max-w-none lg:aspect-[574/687] min-[90rem]:h-[38.5rem] min-[90rem]:w-[32.125rem] min-[90rem]:rounded-[2rem]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1023px) 90vw, 32.125rem"
            className="object-cover object-[50%_28%]"
            priority
          />
        </FadeInSection>
      </div>
    </section>
  );
}
