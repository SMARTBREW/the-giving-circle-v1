import Link from "next/link";
import { Star } from "lucide-react";
import CldImage from "@/components/cld-image";
import CtaButton from "@/components/cta-button";
import FadeInSection from "@/components/fade-in-section";
import type { CausePageHeroContent } from "@/constants/cause-page";
import { SEGOE_UI_CLASS } from "@/constants";
import { PAGE_HERO_BLEED } from "@/lib/page-hero-layout";

function InstagramGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <rect
        x="2.75"
        y="2.75"
        width="18.5"
        height="18.5"
        rx="5.25"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.35" cy="6.65" r="1.15" fill="currentColor" />
    </svg>
  );
}

/** Scalloped seal from champions assets, solid Circle Green + white check. */
function VerifiedSeal({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`relative inline-flex h-8 w-8 shrink-0 items-center justify-center sm:h-9 sm:w-9 lg:h-10 lg:w-10 ${className}`}
    >
      <svg viewBox="0 0 22 21" fill="none" className="h-full w-full">
        <path
          d="M22 10.49L19.56 7.7L19.9 4.01L16.29 3.19L14.4 0L11 1.46L7.6 0L5.71 3.19L2.1 4L2.44 7.7L0 10.49L2.44 13.28L2.1 16.98L5.71 17.8L7.6 21L11 19.53L14.4 20.99L16.29 17.8L19.9 16.98L19.56 13.29L22 10.49Z"
          fill="var(--Circle-Green,#02938c)"
        />
      </svg>
      <svg
        viewBox="0 0 12 9"
        fill="none"
        className="absolute top-1/2 left-1/2 h-3 w-4 -translate-x-1/2 -translate-y-1/2 sm:h-3.5 sm:w-[1.125rem]"
      >
        <path
          d="M3.8 5.88L1.48 3.55L0 5.04L3.8 8.85L11.14 1.49L9.66 0L3.8 5.88Z"
          fill="#FFFFFF"
        />
      </svg>
    </span>
  );
}

/** Hatched placeholder until campaign media is supplied. */
function MediaSlot({
  label,
  caption,
  className = "",
}: {
  label: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.25rem] border border-[#d9e1e2] bg-[repeating-linear-gradient(-45deg,#eef2f2,#eef2f2_8px,#e8f4f8_8px,#e8f4f8_16px)] sm:rounded-[1.5rem] lg:rounded-[2rem] ${className}`}
    >
      <span
        className={`${SEGOE_UI_CLASS} absolute inset-0 flex items-center justify-center px-4 text-center text-[0.8125rem] font-[600] leading-5 text-[var(--Subheading,#4a5558)] sm:text-[0.875rem]`}
      >
        {label}
      </span>
      {caption ? (
        <span
          className={`${SEGOE_UI_CLASS} absolute right-2.5 bottom-2.5 rounded-full bg-[rgba(28,36,38,0.72)] px-2.5 py-1 text-[0.6875rem] font-[500] leading-none text-white sm:right-3 sm:bottom-3 sm:px-3 sm:py-1.5 sm:text-[0.75rem]`}
        >
          {caption}
        </span>
      ) : null}
    </div>
  );
}

function CampaignLogo({ src }: { src: string | null }) {
  return (
    <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[repeating-linear-gradient(-45deg,#eef2f2,#eef2f2_4px,#e8f4f8_4px,#e8f4f8_8px)] sm:h-12 sm:w-12 lg:h-14 lg:w-14">
      {src ? (
        <CldImage src={src} alt="" fill sizes="56px" className="object-cover" />
      ) : null}
    </span>
  );
}

export default function CausePageHero({
  content,
}: {
  content: CausePageHeroContent;
}) {
  const {
    category,
    title,
    orgLine,
    orgName,
    tagline,
    pitch,
    vetting,
    chips,
    primaryCta,
    secondaryCta,
    instagram,
    campaignLogo,
    media,
    stickyDonate,
  } = content;

  return (
    <>
      <section
        className={`relative flex min-h-0 w-full flex-col overflow-x-hidden bg-[var(--Blue-Tint,#eaf4f8)] pb-[4.75rem] sm:pb-[5.25rem] lg:min-h-dvh lg:pb-0 [@media(max-height:50rem)]:lg:min-h-0 ${PAGE_HERO_BLEED}`}
      >
        {/* Top-aligned (not vertically centered) so the block sits higher under the header */}
        <div className="mx-auto flex h-full w-full max-w-[90rem] flex-1 flex-col gap-6 px-4 pt-4 pb-5 sm:gap-7 sm:px-8 sm:pt-5 sm:pb-6 md:gap-8 md:px-10 md:pt-6 md:pb-8 min-[56.25rem]:flex-row min-[56.25rem]:items-start min-[56.25rem]:justify-center min-[56.25rem]:gap-6 min-[56.25rem]:px-10 min-[56.25rem]:pt-5 min-[56.25rem]:pb-8 lg:gap-8 lg:px-12 lg:pt-3 lg:pb-6 min-[90rem]:gap-14 min-[90rem]:px-[6.25rem] min-[90rem]:pt-2 min-[90rem]:pb-6">
          <FadeInSection className="flex min-h-0 w-full min-w-0 flex-col min-[56.25rem]:w-[min(100%,22rem)] min-[56.25rem]:shrink min-[56.25rem]:flex-none lg:w-[min(100%,32rem)] min-[90rem]:w-[36rem]">
            <p
              className={`${SEGOE_UI_CLASS} text-[0.6875rem] font-[700] leading-4 tracking-[0.08em] uppercase text-[var(--Giving-Red,#e62b4f)] sm:text-[0.75rem] sm:leading-5 md:text-[0.8125rem]`}
            >
              {category}
            </p>

            <h1 className="mt-2 w-full font-['Georgia'] text-[2.25rem] font-[700] leading-[2.625rem] tracking-[0.01em] text-[var(--Main-headings,#1c2426)] sm:mt-2.5 sm:text-[2.625rem] sm:leading-[3rem] md:text-[2.875rem] md:leading-[3.25rem] min-[56.25rem]:text-[2.25rem] min-[56.25rem]:leading-[2.625rem] lg:mt-2.5 lg:text-[clamp(2.25rem,4dvh,3.125rem)] lg:leading-[clamp(2.625rem,4.6dvh,3.5rem)] min-[90rem]:text-[3.375rem] min-[90rem]:leading-[3.75rem]">
              {title}
            </h1>

            <p
              className={`${SEGOE_UI_CLASS} mt-2 text-[0.9375rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#4a5558)] sm:mt-2.5 sm:text-[1rem] min-[56.25rem]:text-[0.9375rem] lg:mt-2.5 lg:text-[1rem]`}
            >
              {orgLine}{" "}
              <span className="font-[700] text-[var(--Main-headings,#1c2426)]">
                {orgName}
              </span>
            </p>

            <p className="mt-2.5 font-['Georgia'] text-[1.25rem] font-[400] leading-7 tracking-normal italic text-[var(--Circle-Green,#02938c)] sm:mt-3 sm:text-[1.375rem] sm:leading-8 md:text-[1.5rem] md:leading-9 min-[56.25rem]:text-[1.1875rem] min-[56.25rem]:leading-7 lg:mt-3 lg:text-[clamp(1.25rem,2.4dvh,1.75rem)] lg:leading-[clamp(1.75rem,3dvh,2.25rem)]">
              {tagline}
            </p>

            <p
              className={`${SEGOE_UI_CLASS} mt-2.5 w-full max-w-[36rem] text-[1rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#4a5558)] sm:mt-3 sm:text-[1.0625rem] sm:leading-7 md:text-[1.125rem] min-[56.25rem]:max-w-none min-[56.25rem]:text-[0.9375rem] min-[56.25rem]:leading-6 lg:mt-3 lg:text-[clamp(1rem,1.8dvh,1.125rem)] lg:leading-7`}
            >
              {pitch}
            </p>

            <Link
              href={vetting.href}
              className="mt-4 flex w-full items-start gap-2.5 rounded-[0.875rem] border border-[#d9e1e2] bg-[#FFFFFF] p-3 shadow-[0px_4px_20px_0px_#0000000F] transition-[border-color,box-shadow] hover:border-[var(--Circle-Green,#02938c)] sm:mt-5 sm:items-center sm:gap-3 sm:rounded-[1rem] sm:p-3.5 min-[56.25rem]:mt-4 min-[56.25rem]:p-3 lg:mt-5"
            >
              <VerifiedSeal />
              <span
                className={`${SEGOE_UI_CLASS} min-w-0 text-[0.8125rem] leading-5 tracking-normal sm:text-[0.875rem] min-[56.25rem]:text-[0.8125rem] lg:text-[0.875rem]`}
              >
                <span className="font-[700] text-[var(--Circle-Green,#02938c)]">
                  {vetting.title}
                </span>{" "}
                <span className="font-[400] text-[var(--Subheading,#4a5558)]">
                  {vetting.body}{" "}
                </span>
                <span className="font-[600] text-[var(--Circle-Green,#02938c)]">
                  {vetting.ctaLabel} →
                </span>
              </span>
            </Link>

            <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-2.5">
              {chips.map((chip) => (
                <li
                  key={chip}
                  className={`${SEGOE_UI_CLASS} rounded-full border border-[#d9e1e2] bg-[#FFFFFF] px-3 py-1.5 text-[0.75rem] font-[600] leading-none text-[var(--Main-headings,#1c2426)] sm:text-[0.8125rem]`}
                >
                  {chip}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex w-full flex-row gap-2 sm:mt-5 sm:gap-2.5 min-[56.25rem]:mt-4.5 lg:mt-5 lg:gap-3">
              <CtaButton
                href={primaryCta.href}
                smoothScroll
                className="h-11 min-w-0 flex-1 rounded-full px-2 !text-[0.625rem] sm:h-12 sm:px-2.5 sm:!text-[0.6875rem] lg:px-4 lg:!text-[0.8125rem] min-[90rem]:px-5 min-[90rem]:!text-[0.875rem]"
                labelClassName="whitespace-nowrap font-[700]"
              >
                {primaryCta.label}
              </CtaButton>
              <CtaButton
                href={secondaryCta.href}
                className="h-11 min-w-0 flex-1 !rounded-full !border-transparent !bg-[var(--Giving-Red,#e62b4f)] px-2 !text-[0.625rem] !text-[#FFFFFF] sm:h-12 sm:px-2.5 sm:!text-[0.6875rem] lg:px-4 lg:!text-[0.8125rem] min-[90rem]:px-5 min-[90rem]:!text-[0.875rem]"
                labelClassName="gap-1.5 whitespace-nowrap font-[700]"
              >
                <Star className="h-3 w-3 shrink-0 fill-current sm:h-3.5 sm:w-3.5" aria-hidden />
                {secondaryCta.label}
              </CtaButton>
            </div>

            <a
              href={instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center gap-3 self-start sm:mt-5 min-[56.25rem]:mt-4.5 lg:mt-5"
            >
              <CampaignLogo src={campaignLogo.src} />
              <span className="min-w-0">
                <span
                  className={`${SEGOE_UI_CLASS} flex items-center gap-1.5 text-[0.8125rem] font-[400] leading-5 text-[var(--Subheading,#4a5558)]`}
                >
                  <InstagramGlyph className="h-3.5 w-3.5 shrink-0 text-[var(--Main-headings,#1c2426)]" />
                  {instagram.label}
                </span>
                <span
                  className={`${SEGOE_UI_CLASS} mt-0.5 block break-all text-[0.9375rem] font-[700] leading-5 text-[var(--Main-headings,#1c2426)] sm:break-normal`}
                >
                  {instagram.handle}
                </span>
              </span>
            </a>
          </FadeInSection>

          <FadeInSection className="relative mx-auto aspect-[4/5] w-full max-w-[22rem] shrink-0 sm:max-w-[26rem] md:max-w-[28rem] min-[56.25rem]:mx-0 min-[56.25rem]:aspect-auto min-[56.25rem]:h-[min(30rem,62dvh)] min-[56.25rem]:w-[min(42%,20rem)] min-[56.25rem]:max-w-none min-[56.25rem]:self-start lg:h-[min(32rem,66dvh)] lg:w-[min(42%,28rem)] min-[90rem]:h-[min(34rem,calc(100dvh-10rem))] min-[90rem]:w-[32rem]">
            {media.src ? (
              <div className="relative h-full min-h-[15rem] w-full overflow-hidden rounded-[1.25rem] sm:min-h-[17rem] sm:rounded-[1.5rem] lg:rounded-[2rem]">
                <CldImage
                  src={media.src}
                  alt={media.alt}
                  fill
                  priority
                  sizes="(max-width: 639px) 92vw, (max-width: 1023px) 420px, 32rem"
                  className="object-cover object-[center_72%]"
                />
                <span
                  className={`${SEGOE_UI_CLASS} absolute right-2.5 bottom-2.5 rounded-full bg-[rgba(28,36,38,0.72)] px-2.5 py-1 text-[0.6875rem] font-[500] leading-none text-white sm:right-3 sm:bottom-3 sm:px-3 sm:py-1.5 sm:text-[0.75rem]`}
                >
                  {media.caption}
                </span>
              </div>
            ) : (
              <MediaSlot
                label="Hero photo slot"
                caption={media.caption}
                className="h-full min-h-[15rem] w-full sm:min-h-[17rem]"
              />
            )}
          </FadeInSection>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#d9e1e2] bg-[#FFFFFF] px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] sm:px-6 lg:hidden [@media(hover:hover)_and_(pointer:fine)]:hidden">
        <CtaButton
          href={stickyDonate.href}
          smoothScroll
          className="h-12 w-full !rounded-lg sm:h-14"
          labelClassName="font-[700]"
        >
          {stickyDonate.label}
        </CtaButton>
      </div>
    </>
  );
}
