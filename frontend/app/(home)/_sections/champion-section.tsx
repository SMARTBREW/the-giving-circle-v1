import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import CtaArrow from "@/components/cta-arrow";
import SectionIntro from "@/components/section-intro";
import ChampionStep from "@/components/champion-step";
import { CHAMPION_PHOTO, CHAMPION_STEPS } from "@/constants";

function ChampionPhoto({ className }: { className: string }) {
  return (
    <div className={className}>
      <Image
        src={CHAMPION_PHOTO}
        alt="Women in our circle gathered together"
        fill
        sizes="(max-width: 1023px) 100vw, (max-width: 1439px) 44vw, 37.0625rem"
        className="object-cover"
      />
      <span className="absolute inset-0 bg-[#00000040]" />
      <span className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFFFFF] sm:h-16 sm:w-16 lg:h-20 lg:w-20">
        <svg
          className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path d="M7 5L15 10L7 15V5Z" fill="#00A3BE" />
        </svg>
      </span>
    </div>
  );
}

export default function ChampionSection() {
  return (
    <section
      id="champion"
      className="w-full bg-[#FFFFFF] lg:h-dvh lg:overflow-hidden"
    >
      <FadeInSection className="relative mx-auto flex h-full w-full max-w-[90rem] flex-col px-4 pt-6 pb-4 sm:px-8 sm:pt-10 sm:pb-10 md:px-10 md:pt-12 md:pb-12 lg:flex-row lg:items-center lg:gap-8 lg:px-12 lg:py-8 min-[90rem]:gap-12 min-[90rem]:px-[6.25rem] min-[90rem]:py-10">
        <div className="flex min-h-0 w-full flex-col items-center lg:flex-1 lg:items-start lg:justify-center">
          <SectionIntro
            align="center"
            eyebrow="Become a Cause Champion"
            eyebrowClassName="w-full max-w-[36rem] lg:max-w-none lg:text-left min-[90rem]:w-[16rem]"
            title={
              <>
                Lead Your Circle.
                <br />
                Create Real Impact.
              </>
            }
            titleClassName="!mt-2 h-auto w-full max-w-[36rem] text-[1.75rem] leading-9 sm:text-[2.25rem] sm:leading-10 md:text-[2.5rem] md:leading-[3rem] lg:max-w-none lg:text-left lg:text-[2.5rem] lg:leading-[3rem] min-[90rem]:text-[2.5rem] min-[90rem]:leading-[3.125rem]"
            subtitle="Start a Giving Circle, rally your network around a verified cause, and track the change you help create."
            subtitleClassName="!mt-2 h-auto w-full max-w-[36rem] text-[0.875rem] leading-5 sm:text-[1rem] sm:leading-6 lg:max-w-none lg:text-left lg:text-[1rem] lg:leading-6 min-[90rem]:max-w-[36rem]"
          />
          <ul className="mt-4 flex w-full max-w-[28rem] flex-col gap-2.5 sm:mt-5 sm:gap-3 md:mt-6 md:gap-3.5 lg:mt-5 lg:max-w-none lg:gap-3 min-[90rem]:mt-6 min-[90rem]:gap-3.5">
            {CHAMPION_STEPS.map((step) => (
              <ChampionStep
                key={step.title}
                iconSrc={step.iconSrc}
                title={step.title}
                body={step.body}
              />
            ))}
          </ul>
          <div className="mt-4 flex w-full justify-center sm:mt-5 md:mt-6 lg:mt-5 lg:justify-start min-[90rem]:mt-6">
            <CtaButton
              href="/champion/apply"
              className="mx-auto h-11 w-full max-w-[20rem] gap-2 px-6 py-3 sm:h-12 md:h-12 lg:mx-0 lg:h-14 lg:max-w-none min-[90rem]:h-14 min-[90rem]:w-[18rem] min-[90rem]:px-8 min-[90rem]:py-4"
              labelClassName="font-[700]"
            >
              Start Your Giving Journey
              <CtaArrow />
            </CtaButton>
          </div>
        </div>

        <ChampionPhoto className="relative mt-6 aspect-[16/10] max-h-[14rem] w-full overflow-hidden rounded-[1rem] border border-[#BDBDBD] sm:mt-8 sm:max-h-[18rem] md:mt-10 md:max-h-[20rem] lg:mt-0 lg:aspect-auto lg:h-[calc(100dvh-14rem)] lg:max-h-none lg:w-[44%] lg:shrink-0 min-[90rem]:h-[calc(100dvh-12rem)] min-[90rem]:w-[37.0625rem]" />
      </FadeInSection>
    </section>
  );
}
