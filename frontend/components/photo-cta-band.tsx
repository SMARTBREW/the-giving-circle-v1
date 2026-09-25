import CldImage from "@/components/cld-image";
import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import { SEGOE_UI_CLASS } from "@/constants";

export default function PhotoCtaBand({
  src,
  mobileSrc,
  alt,
  title,
  subtitle,
  ctaLabel,
  href,
  /** Object-position utilities. Default keeps subjects safe on phone and desktop. */
  objectPosition = "object-[42%_40%] sm:object-[50%_42%]",
  mobileObjectPosition = "object-[50%_25%]",
  /** Desktop (1440) text placement. Phone stays centered for both. */
  align = "center",
  /** Set false when the asset already includes its own gradient. */
  overlay = true,
}: {
  src: string;
  mobileSrc?: string;
  alt: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  href: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
  align?: "center" | "left";
  overlay?: boolean;
}) {
  const isLeft = align === "left";

  return (
    <section className="relative isolate aspect-[6/5] min-h-[min(22rem,70vh)] w-full overflow-hidden sm:aspect-auto sm:min-h-[min(26rem,65vh)] md:min-h-[min(28rem,65vh)] min-[56.25rem]:min-h-[min(26rem,62vh)] lg:min-h-[min(28rem,64vh)] min-[90rem]:min-h-[29.625rem]">
      {mobileSrc ? (
        <>
          <CldImage
            src={mobileSrc}
            alt={alt}
            fill
            sizes="100vw"
            loading="lazy"
            className={`object-cover sm:hidden ${mobileObjectPosition}`}
          />
          <CldImage
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            loading="lazy"
            className={`hidden object-cover sm:block ${objectPosition}`}
          />
        </>
      ) : (
        <CldImage
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          loading="lazy"
          className={`object-cover ${objectPosition}`}
        />
      )}
      {overlay ? (
        <>
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.62)_45%,rgba(0,0,0,0.72)_100%)] min-[56.25rem]:hidden"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden min-[56.25rem]:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.62) 20%, rgba(0,0,0,0.9) 43.5%, rgba(0,0,0,0.82) 66.99%, rgba(0,0,0,0.43) 90.49%, rgba(0,0,0,0.25) 102.24%, rgba(0,0,0,0.12) 108.11%, rgba(0,0,0,0) 113.99%)",
            }}
          />
        </>
      ) : isLeft ? (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#0A1E33]/70 sm:bg-[#0A1E33]/40 min-[56.25rem]:hidden"
          />
          {/* Mid-zoom + desktop left scrim so white copy stays readable */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden min-[56.25rem]:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,30,51,0.72) 0%, rgba(10,30,51,0.55) 28%, rgba(10,30,51,0.28) 48%, rgba(10,30,51,0.08) 62%, transparent 78%)",
            }}
          />
        </>
      ) : null}
      <FadeInSection
        className={`absolute inset-y-0 left-0 right-0 z-[1] mx-auto flex w-full max-w-[90rem] flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-12 min-[56.25rem]:px-10 min-[56.25rem]:py-12 lg:px-14 lg:py-14 min-[90rem]:px-[6.25rem] min-[90rem]:py-0 ${
          isLeft
            ? "items-center text-center min-[56.25rem]:items-start min-[56.25rem]:text-left"
            : "items-center text-center min-[90rem]:block min-[90rem]:px-0"
        }`}
      >
        <h2
          className={`w-full font-['Georgia'] font-[700] tracking-[0.5px] text-[#FFFFFF] text-[1.75rem] leading-[2.25rem] max-w-[20.5rem] sm:max-w-[28rem] sm:text-[2.125rem] sm:leading-[2.625rem] md:max-w-[34rem] md:text-[2.25rem] md:leading-[2.75rem] min-[56.25rem]:max-w-[min(36rem,52%)] min-[56.25rem]:text-[1.875rem] min-[56.25rem]:leading-[2.375rem] lg:max-w-[min(38rem,48%)] lg:text-[2.25rem] lg:leading-[2.75rem] min-[90rem]:max-w-none min-[90rem]:text-[3rem] min-[90rem]:leading-none ${
            isLeft
              ? "min-[56.25rem]:text-left min-[90rem]:w-[33rem]"
              : "text-center min-[90rem]:absolute min-[90rem]:top-[5.5rem] min-[90rem]:left-[30.3125rem] min-[90rem]:h-[6.875rem] min-[90rem]:w-[29.375rem]"
          }`}
        >
          {title}
        </h2>
        <p
          className={`${SEGOE_UI_CLASS} mt-3 w-full whitespace-pre-line font-[400] tracking-[0.0025em] text-[#FFFFFF] text-[0.9375rem] leading-6 max-w-[22rem] sm:mt-4 sm:max-w-[34rem] sm:text-[1.0625rem] sm:leading-7 md:max-w-[36rem] md:text-[1.0625rem] md:leading-7 min-[56.25rem]:mt-3.5 min-[56.25rem]:max-w-[min(36rem,52%)] min-[56.25rem]:text-[0.9375rem] min-[56.25rem]:leading-6 lg:mt-4 lg:max-w-[min(40rem,50%)] lg:text-[1.0625rem] lg:leading-7 min-[90rem]:mt-4 min-[90rem]:max-w-none min-[90rem]:text-[1.125rem] min-[90rem]:leading-9 ${
            isLeft
              ? "min-[56.25rem]:text-left min-[90rem]:w-[40rem]"
              : "text-center min-[90rem]:absolute min-[90rem]:top-[13.875rem] min-[90rem]:left-1/2 min-[90rem]:mt-0 min-[90rem]:h-[4.5rem] min-[90rem]:w-[40rem] min-[90rem]:-translate-x-1/2"
          }`}
        >
          {subtitle}
        </p>
        <div
          className={`mt-6 sm:mt-7 min-[56.25rem]:mt-6 lg:mt-7 ${
            isLeft
              ? "min-[90rem]:mt-8"
              : "min-[90rem]:absolute min-[90rem]:top-[19.875rem] min-[90rem]:left-1/2 min-[90rem]:mt-0 min-[90rem]:-translate-x-1/2"
          }`}
        >
          <CtaButton
            href={href}
            className="h-11 rounded-full px-7 py-3 text-[0.875rem] sm:h-12 sm:px-8 min-[56.25rem]:h-11 min-[56.25rem]:px-6 min-[56.25rem]:text-[0.875rem] lg:h-12 lg:px-8 lg:text-[length:inherit] min-[90rem]:h-[4rem] min-[90rem]:gap-2 min-[90rem]:px-9 min-[90rem]:py-[1.125rem] min-[90rem]:text-[length:inherit]"
            labelClassName="font-[700]"
          >
            {ctaLabel}
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}
