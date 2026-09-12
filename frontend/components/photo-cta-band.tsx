import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import { SEGOE_UI_CLASS } from "@/constants";

export default function PhotoCtaBand({
  src,
  alt,
  title,
  subtitle,
  ctaLabel,
  href,
  /** Object-position utilities. Default keeps subjects safe on phone and desktop. */
  objectPosition = "object-[42%_40%] sm:object-[50%_42%]",
  /** Desktop (1440) text placement. Phone stays centered for both. */
  align = "center",
  /** Set false when the asset already includes its own gradient. */
  overlay = true,
}: {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  href: string;
  objectPosition?: string;
  align?: "center" | "left";
  overlay?: boolean;
}) {
  const isLeft = align === "left";

  return (
    <section className="relative isolate aspect-[6/5] min-h-[20rem] w-full overflow-hidden sm:aspect-auto sm:min-h-[30rem] md:min-h-[32rem] lg:min-h-[30rem] min-[90rem]:h-[29.625rem] min-[90rem]:min-h-0">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={`object-cover ${objectPosition}`}
      />
      {overlay ? (
        <>
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.58)_45%,rgba(0,0,0,0.68)_100%)] min-[90rem]:hidden"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden min-[90rem]:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.62) 20%, rgba(0,0,0,0.9) 43.5%, rgba(0,0,0,0.82) 66.99%, rgba(0,0,0,0.43) 90.49%, rgba(0,0,0,0.25) 102.24%, rgba(0,0,0,0.12) 108.11%, rgba(0,0,0,0) 113.99%)",
            }}
          />
        </>
      ) : null}
      <FadeInSection
        className={`relative z-[1] mx-auto flex h-full min-h-[20rem] w-full max-w-[90rem] flex-col justify-center px-6 py-12 sm:min-h-[30rem] sm:px-10 sm:py-16 md:min-h-[32rem] md:px-12 md:py-16 lg:min-h-[30rem] lg:px-14 lg:py-16 min-[90rem]:min-h-0 min-[90rem]:py-0 min-[90rem]:pb-0 ${
          isLeft
            ? "items-center min-[90rem]:relative min-[90rem]:flex min-[90rem]:items-start min-[90rem]:justify-center min-[90rem]:px-[6.25rem]"
            : "items-center min-[90rem]:relative min-[90rem]:block min-[90rem]:px-0"
        }`}
      >
        <h2
          className={`w-full max-w-[20.5rem] font-['Georgia'] text-[1.75rem] leading-[2.25rem] font-[700] tracking-[0.5px] text-[#FFFFFF] sm:max-w-[28rem] sm:text-[2.25rem] sm:leading-[2.75rem] md:max-w-[34rem] md:text-[2.5rem] md:leading-[3rem] lg:text-[2.75rem] lg:leading-[3.25rem] min-[90rem]:max-w-none min-[90rem]:text-[3rem] min-[90rem]:leading-none ${
            isLeft
              ? "text-center min-[90rem]:w-[33rem] min-[90rem]:text-left"
              : "text-center min-[90rem]:absolute min-[90rem]:top-[5.5rem] min-[90rem]:left-[30.3125rem] min-[90rem]:h-[6.875rem] min-[90rem]:w-[29.375rem]"
          }`}
        >
          {title}
        </h2>
        <p
          className={`${SEGOE_UI_CLASS} mt-4 w-full max-w-[22rem] whitespace-pre-line text-[0.9375rem] leading-6 font-[400] tracking-[0.0025em] text-[#FFFFFF] sm:mt-5 sm:max-w-[34rem] sm:text-[1.0625rem] sm:leading-7 md:mt-5 md:max-w-[40rem] md:text-[1.125rem] md:leading-8 lg:max-w-[42rem] min-[90rem]:max-w-none min-[90rem]:text-[1.125rem] min-[90rem]:leading-9 ${
            isLeft
              ? "text-center min-[90rem]:mt-6 min-[90rem]:w-[40rem] min-[90rem]:text-left"
              : "text-center min-[90rem]:absolute min-[90rem]:top-[13.875rem] min-[90rem]:left-1/2 min-[90rem]:mt-0 min-[90rem]:h-[4.5rem] min-[90rem]:w-[40rem] min-[90rem]:-translate-x-1/2"
          }`}
        >
          {subtitle}
        </p>
        <div
          className={`mt-7 sm:mt-8 ${
            isLeft
              ? "min-[90rem]:mt-8"
              : "min-[90rem]:absolute min-[90rem]:top-[19.875rem] min-[90rem]:left-[38.375rem] min-[90rem]:mt-0"
          }`}
        >
          <CtaButton
            href={href}
            className="h-12 rounded-full bg-[#00A3BE] px-8 py-3 sm:h-14 sm:px-9 min-[90rem]:h-[4rem] min-[90rem]:gap-2 min-[90rem]:px-9 min-[90rem]:py-[1.125rem]"
            labelClassName="font-[700]"
          >
            {ctaLabel}
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}
