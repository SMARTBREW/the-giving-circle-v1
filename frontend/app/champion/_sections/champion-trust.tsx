import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import { CHAMPION_TRUST, SEGOE_UI_CLASS } from "@/constants";

export default function ChampionTrust() {
  const { eyebrow, title, subtitle, features } = CHAMPION_TRUST;

  return (
    <section className="w-full overflow-hidden bg-[#FFFFFF]">
      <FadeInSection className="mx-auto flex w-full max-w-[90rem] flex-col items-center px-4 pt-10 pb-12 sm:px-8 sm:pt-14 sm:pb-16 md:px-10 md:pt-16 md:pb-16 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[4rem]">
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          titleClassName="text-[#1D2D23] min-[90rem]:h-16 min-[90rem]:whitespace-nowrap"
          subtitleClassName="max-w-[35rem] text-[var(--Paragraph,#5F6D64)] min-[90rem]:h-16 min-[90rem]:max-w-[35rem]"
        />

        <div className="relative mt-10 w-full max-w-[77.5rem] overflow-hidden sm:mt-12 lg:mt-14 min-[90rem]:mt-16">
          <ul className="relative z-10 grid w-full grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 md:gap-0 lg:grid-cols-3">
            {features.map((feature, index) => (
              <li
                key={feature.title}
                className={`flex w-full flex-col items-center px-4 text-center sm:px-6 md:px-8 md:py-10 min-[90rem]:px-10 min-[90rem]:py-12 ${
                  index < 3 ? "md:pb-12 min-[90rem]:pb-14" : "md:pt-12 min-[90rem]:pt-14"
                }`}
              >
                <span className="relative flex h-16 w-16 items-center justify-center overflow-hidden">
                  <Image
                    src={feature.iconSrc}
                    alt=""
                    width={64}
                    height={64}
                    className="h-16 w-16 object-contain"
                  />
                </span>

                <h3
                  className={`${SEGOE_UI_CLASS} mt-5 text-[1.25rem] font-[700] leading-7 tracking-normal text-[var(--Main-headings,#000000)] sm:mt-6 sm:text-[1.375rem] min-[90rem]:mt-6 min-[90rem]:h-7 min-[90rem]:text-[1.5rem] min-[90rem]:leading-7`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`${SEGOE_UI_CLASS} mt-3 max-w-[21.4375rem] text-[0.9375rem] font-[400] leading-6 tracking-normal text-[#52525B] sm:mt-4 sm:text-[1rem] sm:leading-[1.625rem] min-[90rem]:h-[4.875rem] min-[90rem]:w-[21.4375rem] min-[90rem]:max-w-none`}
                >
                  {feature.body}
                </p>
              </li>
            ))}
          </ul>

          {/* Vertical dividers — Figma 1px #E4E4E7 */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-1/3 z-0 hidden w-px -translate-x-1/2 bg-[#E4E4E7] lg:block"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-2/3 z-0 hidden w-px -translate-x-1/2 bg-[#E4E4E7] lg:block"
          />

          {/* Horizontal divider — Figma 1240px #E4E4E7 */}
          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-0 z-0 hidden h-px w-full -translate-y-1/2 bg-[#E4E4E7] lg:block"
          />
        </div>
      </FadeInSection>
    </section>
  );
}
