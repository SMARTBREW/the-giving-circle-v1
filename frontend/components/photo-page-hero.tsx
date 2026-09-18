import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import CtaArrow from "@/components/cta-arrow";
import { SEGOE_UI_CLASS } from "@/constants";
import { PAGE_HERO_BLEED } from "@/lib/page-hero-layout";

export default function PhotoPageHero({
  src,
  alt,
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  priority = false,
  objectPosition = "object-[50%_55%]",
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  priority?: boolean;
  objectPosition?: string;
}) {
  const showCta = Boolean(ctaLabel && ctaHref);

  return (
    <section
      className={`relative isolate min-h-[min(70vh,28rem)] w-full overflow-hidden sm:min-h-[min(36rem,70vh)] md:min-h-[min(38rem,72vh)] min-[56.25rem]:min-h-[min(36rem,70vh)] min-[90rem]:min-h-[min(48rem,80vh)] ${PAGE_HERO_BLEED}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={`object-cover ${objectPosition}`}
        priority={priority}
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.58)_50%,rgba(0,0,0,0.72)_100%)]"
      />
      <FadeInSection className="relative z-[1] mx-auto flex w-full max-w-[90rem] flex-col items-center justify-center px-6 pb-14 pt-16 text-center sm:px-10 sm:pb-16 sm:pt-20 md:px-12 md:pb-16 md:pt-20 min-[56.25rem]:min-h-[min(36rem,70vh)] min-[56.25rem]:px-12 min-[56.25rem]:py-16 lg:px-14 lg:py-20 min-[90rem]:min-h-[min(48rem,80vh)] min-[90rem]:px-[6.25rem] min-[90rem]:py-16">
        <p
          className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[700] leading-[1.5rem] tracking-[0.08em] uppercase text-[#FFFFFFCC] sm:text-[0.875rem] min-[56.25rem]:text-[0.8125rem] lg:text-[0.875rem] min-[90rem]:text-[1rem]`}
        >
          {eyebrow}
        </p>
        <h1 className="mt-3 w-full max-w-[22rem] font-['Georgia'] text-[1.75rem] font-[700] leading-[2.25rem] tracking-[0.02em] text-[#FFFFFF] sm:mt-4 sm:max-w-[34rem] sm:text-[2.25rem] sm:leading-[2.75rem] md:max-w-[40rem] md:text-[2.25rem] md:leading-[2.75rem] min-[56.25rem]:max-w-[min(36rem,90%)] min-[56.25rem]:text-[2rem] min-[56.25rem]:leading-[2.5rem] lg:max-w-[min(40rem,85%)] lg:text-[2.375rem] lg:leading-[3rem] min-[90rem]:mt-4 min-[90rem]:max-w-none min-[90rem]:text-[3rem] min-[90rem]:leading-[4rem]">
          {title}
        </h1>
        <p
          className={`${SEGOE_UI_CLASS} mt-3 w-full max-w-[21rem] text-center text-[0.9375rem] font-[400] leading-6 tracking-normal text-[#FFFFFFCC] sm:mt-4 sm:max-w-[34rem] sm:text-[1.0625rem] sm:leading-7 md:max-w-[40rem] md:text-[1.0625rem] md:leading-7 min-[56.25rem]:mt-3.5 min-[56.25rem]:max-w-[min(34rem,90%)] min-[56.25rem]:text-[0.9375rem] min-[56.25rem]:leading-6 lg:max-w-[min(38rem,80%)] lg:text-[1.0625rem] lg:leading-7 min-[90rem]:mt-4 min-[90rem]:max-w-[46rem] min-[90rem]:text-[1.125rem] min-[90rem]:leading-8`}
        >
          {subtitle}
        </p>
        {showCta ? (
          <div className="mt-6 sm:mt-7 min-[56.25rem]:mt-6 lg:mt-7 min-[90rem]:mt-8">
            <CtaButton
              href={ctaHref!}
              smoothScroll={ctaHref!.startsWith("#")}
              className="h-11 rounded-full px-7 py-3 text-[0.875rem] sm:h-12 sm:px-8 min-[56.25rem]:h-11 min-[56.25rem]:px-6 min-[56.25rem]:text-[0.875rem] lg:h-12 lg:px-8 lg:text-[length:inherit] min-[90rem]:h-[4rem] min-[90rem]:px-9 min-[90rem]:py-[1.125rem] min-[90rem]:text-[length:inherit]"
              labelClassName="gap-2 font-[700]"
            >
              {ctaLabel}
              <CtaArrow />
            </CtaButton>
          </div>
        ) : null}
      </FadeInSection>
    </section>
  );
}
