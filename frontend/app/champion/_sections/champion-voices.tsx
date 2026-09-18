"use client";

import { useState } from "react";
import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import { CHAMPION_VOICES, SEGOE_UI_CLASS } from "@/constants";

function NavArrow({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d9e1e2] bg-[#FFFFFF] transition-colors hover:border-[#4A5558] sm:h-14 sm:w-14 min-[90rem]:h-16 min-[90rem]:w-16"
    >
      <svg
        aria-hidden
        viewBox="0 0 14 24"
        fill="none"
        className="h-[1.25rem] w-[0.75rem] text-[var(--Main-CTA-button,#02938c)] min-[90rem]:h-[1.458rem] min-[90rem]:w-[0.859rem]"
      >
        <path
          d={
            direction === "prev"
              ? "M12.5 2L2 12l10.5 10"
              : "M1.5 2L12 12 1.5 22"
          }
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function ChampionVoices() {
  const { eyebrow, title, subtitle, quoteSrc, testimonials } = CHAMPION_VOICES;
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const goPrev = () =>
    setIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  const goNext = () =>
    setIndex((current) => (current + 1) % testimonials.length);

  return (
    <section id="voices" className="w-full bg-[#FFFFFF]">
      <FadeInSection className="mx-auto flex w-full max-w-[90rem] flex-col items-center px-4 pt-10 pb-12 sm:px-8 sm:pt-14 sm:pb-16 md:px-10 md:pt-16 md:pb-16 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:h-[60.4375rem] min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem]">
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          titleClassName="text-[#1C2426] min-[90rem]:h-16 min-[90rem]:w-[39.75rem] min-[90rem]:whitespace-nowrap"
          subtitleClassName="max-w-[35rem] text-[var(--Paragraph,#4a5558)] min-[90rem]:h-16 min-[90rem]:max-w-[35rem]"
        />

        <div
          className="mt-8 flex w-full flex-col items-center sm:mt-10 lg:mt-12 min-[90rem]:mt-14"
          aria-roledescription="carousel"
          aria-label="Champion testimonials"
        >
          <div className="flex w-full items-center justify-center gap-3 sm:gap-4 min-[56.25rem]:gap-4 lg:gap-5 min-[90rem]:gap-6">
            <div className="hidden shrink-0 min-[56.25rem]:block">
              <NavArrow direction="prev" onClick={goPrev} label="Previous testimonial" />
            </div>

            <article
              key={active.name}
              className="flex min-w-0 w-full flex-col overflow-hidden rounded-[1rem] border border-[#d9e1e2] bg-[#FFFFFF] min-[56.25rem]:max-w-[68.5rem] min-[56.25rem]:flex-row min-[56.25rem]:items-stretch min-[90rem]:h-[31.125rem] min-[90rem]:w-[68.5rem] min-[90rem]:max-w-none min-[90rem]:shrink-0 min-[90rem]:rounded-[1.5rem]"
            >
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden min-[56.25rem]:aspect-auto min-[56.25rem]:min-h-[22rem] min-[56.25rem]:w-1/2 min-[56.25rem]:self-stretch lg:min-h-[24rem] min-[90rem]:h-full min-[90rem]:min-h-0 min-[90rem]:w-[32.25rem]">
                <Image
                  src={active.imageSrc}
                  alt={active.imageAlt}
                  fill
                  sizes="(min-width: 1440px) 32.25rem, (min-width: 900px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex h-full min-h-0 min-w-0 flex-1 flex-col px-5 py-6 sm:px-7 sm:py-8 md:px-8 min-[56.25rem]:px-6 min-[56.25rem]:py-6 lg:px-8 lg:py-8 min-[90rem]:px-8 min-[90rem]:pt-10 min-[90rem]:pb-0">
                <div className="relative mb-4 h-8 w-10 shrink-0 sm:mb-5 sm:h-9 sm:w-11 min-[90rem]:mb-5 min-[90rem]:h-10 min-[90rem]:w-10">
                  <Image
                    src={quoteSrc}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-contain object-left"
                  />
                </div>

                <h3
                  className={`${SEGOE_UI_CLASS} shrink-0 text-[1.25rem] font-[700] leading-7 tracking-normal text-[var(--Main-headings,#1c2426)] sm:text-[1.5rem] sm:leading-8 lg:text-[1.625rem] lg:leading-8 min-[90rem]:w-full min-[90rem]:max-w-[33.5rem] min-[90rem]:text-[1.75rem] min-[90rem]:leading-9`}
                >
                  {active.title}
                </h3>

                <p
                  className={`${SEGOE_UI_CLASS} mt-3 shrink-0 text-[0.9375rem] font-[400] leading-6 tracking-normal text-[var(--Paragraph,#4a5558)] sm:mt-4 sm:text-[1rem] sm:leading-7 lg:leading-8 min-[90rem]:mt-5 min-[90rem]:h-32 min-[90rem]:w-full min-[90rem]:max-w-[34rem] min-[90rem]:text-[1.0625rem] min-[90rem]:leading-8`}
                >
                  {active.body}
                </p>

                <div className="mt-8 flex min-h-0 w-full flex-1 flex-col sm:mt-10 min-[90rem]:mt-10">
                  <div className="w-full max-w-[32rem] shrink-0 border-t border-[#d9e1e2]" aria-hidden />
                  <div className="my-auto flex w-full max-w-[32rem] items-center gap-3 py-5 sm:gap-4 sm:py-6 min-[90rem]:py-0">
                    <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full sm:h-14 sm:w-14 min-[90rem]:h-[4.5rem] min-[90rem]:w-[4.5rem]">
                      <Image
                        src={active.avatarSrc}
                        alt={active.avatarAlt}
                        fill
                        sizes="72px"
                        className="object-cover"
                      />
                    </span>
                    <span className="min-w-0 text-left">
                      <span
                        className={`${SEGOE_UI_CLASS} block text-[1rem] font-[700] leading-5 tracking-normal text-[var(--Main-headings,#1c2426)] sm:text-[1.125rem] min-[90rem]:text-[1.5rem] min-[90rem]:leading-5`}
                      >
                        {active.name}
                      </span>
                      <span
                        className={`${SEGOE_UI_CLASS} mt-1 block text-[0.875rem] font-[400] leading-5 tracking-normal text-[#4A5558] sm:text-[1rem] min-[90rem]:mt-2.5 min-[90rem]:text-[1.125rem] min-[90rem]:leading-5`}
                      >
                        {active.role}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </article>

            <div className="hidden shrink-0 min-[56.25rem]:block">
              <NavArrow direction="next" onClick={goNext} label="Next testimonial" />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-4 min-[56.25rem]:hidden">
            <NavArrow direction="prev" onClick={goPrev} label="Previous testimonial" />
            <NavArrow direction="next" onClick={goNext} label="Next testimonial" />
          </div>

          <div
            className="mt-8 flex items-center justify-center gap-2.5 sm:mt-10 min-[90rem]:mt-12"
            role="tablist"
            aria-label="Testimonial slides"
          >
            {testimonials.map((item, dotIndex) => {
              const isActive = dotIndex === index;
              return (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show testimonial ${dotIndex + 1}`}
                  onClick={() => setIndex(dotIndex)}
                  className={`h-5 w-5 rounded-full transition-colors ${
                    isActive
                      ? "bg-[var(--Main-CTA-button,#02938c)]"
                      : "border border-[#4A5558] bg-transparent"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
