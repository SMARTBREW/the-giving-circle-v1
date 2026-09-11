import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import ChampionHowItWorksIcon from "@/components/champion-how-it-works-icon";
import { CHAMPION_HOW_IT_WORKS, SEGOE_UI_CLASS } from "@/constants";

export default function ChampionHowItWorks() {
  const { eyebrow, title, arrowSrc, steps } = CHAMPION_HOW_IT_WORKS;

  return (
    <section
      id="how-it-works"
      className="w-full bg-[#FFFFFF] min-[90rem]:min-h-[36.5rem]"
    >
      <FadeInSection className="mx-auto flex h-full w-full max-w-[90rem] flex-col items-center px-4 pt-10 pb-12 sm:px-8 sm:pt-14 sm:pb-16 md:px-10 md:pt-16 md:pb-16 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[3.5rem] min-[90rem]:pb-0">
        <div className="flex w-full flex-col items-center text-center">
          <SectionIntro
            eyebrow={eyebrow}
            title={title}
            titleClassName="min-[90rem]:h-16 min-[90rem]:whitespace-nowrap"
          />
        </div>

        <ul className="mt-10 grid w-full max-w-[72rem] grid-cols-1 justify-items-center sm:mt-12 lg:mt-14 lg:grid-cols-3 lg:items-start min-[90rem]:mt-16 min-[90rem]:max-w-[74rem]">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <li
                key={step.title}
                className="relative flex w-full max-w-[20rem] flex-col items-center text-center lg:max-w-none"
              >
                <div className="relative flex h-16 w-full items-center justify-center sm:h-20 min-[90rem]:h-[6.25rem]">
                  <ChampionHowItWorksIcon iconSrc={step.iconSrc} />

                  {!isLast ? (
                    <Image
                      src={arrowSrc}
                      alt=""
                      width={280}
                      height={70}
                      aria-hidden
                      className="pointer-events-none absolute top-1/2 left-[calc(50%+2.5rem)] z-0 hidden h-auto w-[calc(100%-5rem)] -translate-y-1/2 object-contain object-center lg:block min-[90rem]:left-[calc(50%+3.25rem)] min-[90rem]:w-[calc(100%-6.5rem)]"
                    />
                  ) : null}
                </div>

                <h3
                  className={`${SEGOE_UI_CLASS} mt-5 w-full text-center text-[1.125rem] font-[700] leading-8 tracking-normal text-[var(--Main-headings,#000000)] sm:mt-6 sm:text-[1.25rem] min-[90rem]:mt-6 min-[90rem]:h-8 min-[90rem]:text-[1.5rem] min-[90rem]:leading-8 min-[90rem]:whitespace-nowrap`}
                >
                  {step.title}
                </h3>

                <p
                  className={`${SEGOE_UI_CLASS} mt-3 w-full max-w-[20rem] text-center text-[0.9375rem] font-[400] leading-6 tracking-normal text-[#000000] sm:mt-4 sm:text-[1rem] sm:leading-7 min-[90rem]:mt-4 min-[90rem]:h-[5.25rem] min-[90rem]:w-[20rem] min-[90rem]:max-w-[20rem] min-[90rem]:text-[1.125rem] min-[90rem]:leading-7`}
                >
                  {step.body}
                </p>

                {!isLast ? (
                  <span
                    aria-hidden
                    className="my-6 h-10 w-0 border-l-2 border-dashed border-[#C5C9D6] lg:hidden"
                  />
                ) : null}
              </li>
            );
          })}
        </ul>
      </FadeInSection>
    </section>
  );
}
