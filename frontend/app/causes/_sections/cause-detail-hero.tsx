import CldImage from "@/components/cld-image";
import FadeInSection from "@/components/fade-in-section";
import { SEGOE_UI_CLASS, type LiveCause } from "@/constants";
import { PAGE_HERO_BLEED, PAGE_HERO_COL_H } from "@/lib/page-hero-layout";

export default function CauseDetailHero({ cause }: { cause: LiveCause }) {
  return (
    <section
      className={`relative min-h-0 w-full overflow-x-hidden bg-[#eaf4f8] min-[90rem]:flex min-[90rem]:min-h-dvh min-[90rem]:flex-col ${PAGE_HERO_BLEED}`}
    >
      <div className="mx-auto flex h-full w-full max-w-[90rem] flex-1 flex-col gap-6 px-4 py-6 sm:gap-8 sm:px-8 sm:py-8 md:px-10 md:py-10 min-[56.25rem]:flex-row min-[56.25rem]:items-center min-[56.25rem]:gap-6 min-[56.25rem]:px-10 min-[56.25rem]:py-10 lg:gap-8 lg:px-12 lg:py-12 min-[90rem]:items-center min-[90rem]:gap-16 min-[90rem]:px-[6.25rem] min-[90rem]:py-8">
        <FadeInSection
          className={`flex min-h-0 w-full min-w-0 flex-1 flex-col justify-center min-[56.25rem]:max-w-none lg:max-w-[38rem] min-[90rem]:max-w-[36rem] ${PAGE_HERO_COL_H}`}
        >
          <div className="flex flex-col">
            <p
              className={`${SEGOE_UI_CLASS} text-center text-[0.75rem] font-[700] leading-6 tracking-[0.08em] uppercase sm:text-[0.875rem] min-[56.25rem]:text-left min-[90rem]:text-[1rem] ${cause.categoryClassName}`}
            >
              {cause.category}
            </p>

            <h1 className="mt-4 w-full text-center font-['Georgia'] text-[1.75rem] font-[700] leading-9 tracking-[0.01em] text-[var(--Main-headings,#1c2426)] sm:mt-5 sm:text-[2.25rem] sm:leading-[2.75rem] md:text-[2.5rem] md:leading-[3.25rem] min-[56.25rem]:mt-4 min-[56.25rem]:text-left min-[56.25rem]:text-[2.25rem] min-[56.25rem]:leading-[2.75rem] lg:mt-5 lg:text-[2.5rem] lg:leading-[3.125rem] min-[90rem]:mt-[clamp(1rem,2.2dvh,2rem)] min-[90rem]:w-[36rem] min-[90rem]:text-[clamp(2.5rem,5.5dvh,3.5rem)] min-[90rem]:leading-[clamp(3rem,6.5dvh,4.25rem)]">
              {cause.title}
            </h1>

            <p
              className={`${SEGOE_UI_CLASS} mx-auto mt-4 max-w-[34rem] text-center text-[0.9375rem] font-[400] leading-6 tracking-normal text-[#4a5558] sm:mt-5 sm:text-[1.0625rem] sm:leading-7 md:text-[1.125rem] md:leading-8 min-[56.25rem]:mx-0 min-[56.25rem]:mt-4 min-[56.25rem]:max-w-none min-[56.25rem]:text-left min-[56.25rem]:text-[1rem] min-[56.25rem]:leading-7 lg:mt-5 lg:text-[1.125rem] lg:leading-8 min-[90rem]:mt-[clamp(1rem,2.2dvh,2rem)] min-[90rem]:w-[36rem] min-[90rem]:max-w-none min-[90rem]:text-[clamp(1.125rem,2.4dvh,1.5rem)] min-[90rem]:leading-[clamp(1.75rem,3.6dvh,2.5rem)]`}
            >
              {cause.summary}
            </p>

            <ul className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-6 min-[56.25rem]:justify-start min-[90rem]:mt-[clamp(1rem,2.2dvh,2rem)]">
              {cause.trustBadges.map((badge) => (
                <li
                  key={badge}
                  className={`${SEGOE_UI_CLASS} rounded-[6.25rem] border border-[#d9e1e2] bg-[#FFFFFF] px-3.5 py-1.5 text-[0.8125rem] font-[600] text-[var(--Main-headings,#1c2426)] transition-[border-color,box-shadow] duration-300 hover:border-[var(--Main-CTA-button,#02938c)] hover:shadow-[0_0_0_3px_rgba(11,165,187,0.15)] sm:text-[0.875rem]`}
                >
                  {badge}
                </li>
              ))}
            </ul>

            <p
              className={`${SEGOE_UI_CLASS} mt-5 text-center text-[0.875rem] font-[400] text-[var(--Paragraph,#4a5558)] sm:mt-6 sm:text-[0.9375rem] min-[56.25rem]:text-left min-[90rem]:mt-[clamp(1rem,2dvh,1.75rem)]`}
            >
              By{" "}
              <span className="font-[700] text-[var(--Main-headings,#1c2426)]">
                {cause.org}
              </span>
              <span aria-hidden className="mx-2 text-[#d9e1e2]">
                ·
              </span>
              {cause.location}
            </p>
          </div>
        </FadeInSection>

        <FadeInSection
          className={`relative mx-auto aspect-[4/3] w-full max-w-[26rem] shrink-0 overflow-hidden rounded-[1.25rem] sm:aspect-[16/10] sm:max-w-[34rem] sm:rounded-[1.5rem] md:max-w-[40rem] min-[56.25rem]:mx-0 min-[56.25rem]:aspect-auto min-[56.25rem]:h-auto min-[56.25rem]:min-h-[28rem] min-[56.25rem]:w-[min(46%,26rem)] min-[56.25rem]:max-w-none min-[56.25rem]:self-stretch lg:w-[min(46%,30rem)] min-[90rem]:min-h-0 min-[90rem]:w-[32.125rem] min-[90rem]:self-auto min-[90rem]:rounded-[2rem] ${PAGE_HERO_COL_H}`}
        >
          <CldImage
            src={cause.src}
            alt={cause.alt}
            fill
            sizes="(max-width: 899px) 90vw, (max-width: 1439px) 44vw, 32.125rem"
            className="object-cover object-[50%_40%]"
            priority
          />
        </FadeInSection>
      </div>
    </section>
  );
}
