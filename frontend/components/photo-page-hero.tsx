import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import CtaArrow from "@/components/cta-arrow";
import { SEGOE_UI_CLASS } from "@/constants";

/** Matches floating header offset so the hero can bleed under the nav at 100dvh. */
const HERO_BLEED =
  "-mt-[5.5rem] pt-[5.5rem] sm:-mt-[6.25rem] sm:pt-[6.25rem] md:-mt-[6.75rem] md:pt-[6.75rem] lg:-mt-[7rem] lg:pt-[7rem] min-[90rem]:-mt-[7.25rem] min-[90rem]:pt-[7.25rem]";

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
      className={`relative isolate min-h-[70vh] w-full overflow-hidden lg:h-dvh ${HERO_BLEED}`}
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
      <FadeInSection className="relative z-[1] mx-auto flex h-full w-full max-w-[90rem] flex-col items-center justify-center px-6 py-14 text-center sm:px-10 sm:py-16 md:px-12 lg:px-14 min-[90rem]:px-[6.25rem]">
        <p
          className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[700] leading-[1.5rem] tracking-[0.08em] uppercase text-[#FFFFFFCC] sm:text-[0.875rem] min-[90rem]:text-[1rem]`}
        >
          {eyebrow}
        </p>
        <h1 className="mt-4 w-full max-w-[22rem] font-['Georgia'] text-[1.75rem] font-[700] leading-[2.25rem] tracking-[0.02em] text-[#FFFFFF] sm:max-w-[34rem] sm:text-[2.25rem] sm:leading-[2.75rem] md:max-w-[42rem] md:text-[2.5rem] md:leading-[3rem] lg:text-[2.75rem] lg:leading-[3.5rem] min-[90rem]:max-w-none min-[90rem]:text-[3rem] min-[90rem]:leading-[4rem]">
          {title}
        </h1>
        <p
          className={`${SEGOE_UI_CLASS} mt-4 w-full max-w-[21rem] text-center text-[0.9375rem] font-[400] leading-6 tracking-normal text-[#FFFFFFCC] sm:mt-5 sm:max-w-[34rem] sm:text-[1.0625rem] sm:leading-7 md:max-w-[42rem] md:text-[1.125rem] md:leading-8 min-[90rem]:max-w-[46rem]`}
        >
          {subtitle}
        </p>
        {showCta ? (
          <div className="mt-7 sm:mt-8">
            <CtaButton
              href={ctaHref!}
              smoothScroll={ctaHref!.startsWith("#")}
              className="h-12 rounded-full px-8 py-3 sm:h-14 sm:px-9 min-[90rem]:h-[4rem] min-[90rem]:px-9 min-[90rem]:py-[1.125rem]"
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
