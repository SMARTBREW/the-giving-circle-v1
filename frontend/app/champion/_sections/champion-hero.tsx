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
    <section className="relative -mt-[5.5rem] min-h-0 w-full overflow-x-hidden bg-[#F3F9FF] pt-[5.5rem] sm:-mt-[6.25rem] sm:pt-[6.25rem] md:-mt-[6.75rem] md:pt-[6.75rem] lg:-mt-[7rem] lg:pt-[7rem] min-[90rem]:-mt-[7.25rem] min-[90rem]:h-dvh min-[90rem]:overflow-hidden min-[90rem]:pt-[7.25rem]">
      <div className="mx-auto flex h-full w-full max-w-[90rem] flex-col gap-6 px-4 py-6 sm:gap-8 sm:px-8 sm:py-8 md:px-10 md:py-10 min-[56.25rem]:flex-row min-[56.25rem]:items-stretch min-[56.25rem]:justify-between min-[56.25rem]:gap-8 min-[56.25rem]:px-10 min-[56.25rem]:py-10 lg:gap-14 lg:px-12 lg:py-12 min-[90rem]:gap-16 min-[90rem]:px-[6.25rem] min-[90rem]:py-0">
        <FadeInSection className="flex min-h-0 w-full min-w-0 flex-1 flex-col min-[56.25rem]:max-w-[48%] min-[56.25rem]:justify-between lg:max-w-[36rem] min-[90rem]:h-[38.5rem] min-[90rem]:max-w-[36rem]">
          <div className="flex flex-col">
            <p
              className={`${SEGOE_UI_CLASS} text-center text-[0.75rem] font-[700] leading-6 tracking-[0.08em] uppercase text-[var(--Eyebrow-label,#00A98F)] sm:text-[0.875rem] min-[56.25rem]:text-left min-[90rem]:text-[1rem]`}
            >
              {eyebrow}
            </p>

            <h1 className="mt-4 w-full text-center font-['Georgia'] text-[1.75rem] font-[700] leading-9 tracking-[0.01em] text-[var(--Main-headings,#000000)] sm:mt-5 sm:text-[2.25rem] sm:leading-[2.75rem] md:text-[2.5rem] md:leading-[3.25rem] min-[56.25rem]:mt-4 min-[56.25rem]:text-left min-[56.25rem]:text-[2.25rem] min-[56.25rem]:leading-[2.75rem] lg:mt-5 lg:text-[2.5rem] lg:leading-[3.125rem] min-[90rem]:mt-8 min-[90rem]:w-[36rem] min-[90rem]:text-[4rem] min-[90rem]:leading-[5rem]">
              <span className="block min-[90rem]:whitespace-nowrap">
                {titleLine1}
              </span>
              <span className="block min-[90rem]:whitespace-nowrap">
                {titleLine2Before}
                <span className="text-[var(--Main-CTA-button,#00A3BE)]">
                  {titleAccent}
                </span>
              </span>
            </h1>

            <p
              className={`${SEGOE_UI_CLASS} mx-auto mt-4 max-w-[34rem] text-center text-[0.9375rem] font-[400] leading-6 tracking-normal text-[#212121] sm:mt-5 sm:text-[1.0625rem] sm:leading-7 md:text-[1.125rem] md:leading-8 min-[56.25rem]:mx-0 min-[56.25rem]:mt-4 min-[56.25rem]:max-w-none min-[56.25rem]:text-left min-[56.25rem]:text-[1rem] min-[56.25rem]:leading-7 lg:mt-5 lg:text-[1.125rem] lg:leading-8 min-[90rem]:mt-8 min-[90rem]:w-[36rem] min-[90rem]:text-[1.5rem] min-[90rem]:leading-[2.5rem]`}
            >
              {subtitle}
            </p>

            <div className="mt-6 flex w-full flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4 min-[56.25rem]:mt-6 min-[56.25rem]:justify-start min-[56.25rem]:gap-3 lg:mt-8 lg:gap-4 min-[90rem]:mt-12 min-[90rem]:h-16 min-[90rem]:w-[30.875rem] min-[90rem]:gap-6">
              <CtaButton
                href={primaryCta.href}
                className="h-12 w-full gap-2 px-6 sm:h-14 sm:w-auto sm:px-7 min-[56.25rem]:h-11 min-[56.25rem]:min-w-0 min-[56.25rem]:px-5 min-[56.25rem]:text-[0.8125rem] lg:h-12 lg:px-6 lg:text-[0.9375rem] min-[90rem]:h-16 min-[90rem]:w-[16.9375rem] min-[90rem]:px-9 min-[90rem]:py-[1.125rem] min-[90rem]:text-[1.125rem]"
                labelClassName="font-[700]"
              >
                {primaryCta.label}
              </CtaButton>
              <CtaButton
                href={secondaryCta.href}
                variant="outline"
                smoothScroll
                className="h-12 w-full bg-[#FFFFFF] px-6 sm:h-14 sm:w-auto sm:px-7 min-[56.25rem]:h-11 min-[56.25rem]:min-w-0 min-[56.25rem]:px-5 min-[56.25rem]:text-[0.8125rem] lg:h-12 lg:px-6 lg:text-[0.9375rem] min-[90rem]:h-16 min-[90rem]:w-[12.4375rem] min-[90rem]:px-0 min-[90rem]:text-[1.125rem]"
                labelClassName="font-[700]"
              >
                {secondaryCta.label}
              </CtaButton>
            </div>
          </div>

          <ul className="mt-8 flex w-full flex-wrap items-start justify-center gap-x-6 gap-y-4 sm:mt-10 sm:gap-x-10 min-[56.25rem]:mt-8 min-[56.25rem]:flex-nowrap min-[56.25rem]:justify-start min-[56.25rem]:gap-x-5 lg:mt-8 lg:gap-x-8 min-[90rem]:mt-0 min-[90rem]:gap-14">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="flex shrink-0 flex-col items-center text-center min-[56.25rem]:items-start min-[56.25rem]:text-left"
              >
                <p
                  className={`${SEGOE_UI_CLASS} text-[1.25rem] font-[700] leading-none tracking-normal text-[var(--Main-headings,#000000)] sm:text-[1.75rem] md:text-[2.25rem] min-[56.25rem]:text-[1.5rem] lg:text-[2rem] min-[90rem]:text-[2.75rem] min-[90rem]:leading-[3.75rem] min-[90rem]:whitespace-nowrap`}
                >
                  {stat.value}
                </p>
                <p
                  className={`${PoppinsFont.className} mt-2 text-[0.6875rem] font-[400] leading-4 tracking-normal text-[#000000B2] capitalize sm:mt-2.5 sm:text-[0.875rem] sm:leading-5 md:text-[1rem] md:leading-6 min-[56.25rem]:text-[0.75rem] lg:text-[0.9375rem] min-[90rem]:mt-3 min-[90rem]:text-[1.25rem] min-[90rem]:leading-8 min-[90rem]:whitespace-nowrap`}
                >
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </FadeInSection>

        <FadeInSection className="relative mx-auto aspect-[4/3] w-full max-w-[26rem] shrink-0 overflow-hidden rounded-[1.25rem] sm:aspect-[16/10] sm:max-w-[34rem] sm:rounded-[1.5rem] md:max-w-[40rem] min-[56.25rem]:mx-0 min-[56.25rem]:aspect-auto min-[56.25rem]:h-auto min-[56.25rem]:min-h-[28rem] min-[56.25rem]:w-[min(44%,24rem)] min-[56.25rem]:max-w-none min-[56.25rem]:self-stretch lg:w-[min(44%,28rem)] min-[90rem]:h-[38.5rem] min-[90rem]:min-h-0 min-[90rem]:w-[32.125rem] min-[90rem]:self-auto min-[90rem]:rounded-[2rem]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 899px) 90vw, (max-width: 1439px) 44vw, 32.125rem"
            className="object-cover object-[50%_28%]"
            priority
          />
        </FadeInSection>
      </div>
    </section>
  );
}
