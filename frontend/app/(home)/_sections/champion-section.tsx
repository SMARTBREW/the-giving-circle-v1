import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import CtaArrow from "@/components/cta-arrow";
import SectionIntro from "@/components/section-intro";
import ChampionStep from "@/components/champion-step";
import ChampionVideo from "@/components/champion-video";
import { CHAMPION_STEPS } from "@/constants";

export default function ChampionSection() {
  return (
    <section
      id="champion"
      className="w-full scroll-mt-[5.5rem] bg-[#FFFFFF] sm:scroll-mt-[6.25rem] md:scroll-mt-[6.75rem] lg:scroll-mt-[7rem] min-[90rem]:h-dvh min-[90rem]:overflow-hidden"
    >
      {/*
        Phone: column fills the viewport through the CTA (above the sticky bar);
        leftover height goes into step gaps. Small mt keeps video just under the button.
        Tablet md–lg: side-by-side. Desktop: full type + tall video.
      */}
      <FadeInSection className="relative mx-auto flex h-full w-full max-w-[90rem] flex-col px-4 sm:px-8 md:flex-row md:items-center md:gap-5 md:px-10 md:py-10 lg:gap-8 lg:px-12 lg:py-8 min-[90rem]:gap-12 min-[90rem]:px-[6.25rem] min-[90rem]:py-10">
        <div className="flex h-[calc(100dvh-8.75rem)] w-full flex-col items-center pt-6 sm:pt-8 md:h-auto md:min-h-0 md:w-[50%] md:min-w-0 md:shrink md:items-start md:justify-center md:py-0 lg:w-auto lg:flex-1">
          <SectionIntro
            align="center"
            eyebrow="Become a Cause Champion"
            eyebrowClassName="w-full max-w-[36rem] text-[0.6875rem] sm:text-[0.75rem] md:max-w-none md:text-left md:text-[0.75rem] lg:text-[0.9375rem] min-[90rem]:w-[16rem] min-[90rem]:text-[1rem]"
            title={
              <>
                Lead Your Circle.
                <br />
                Create Real Impact.
              </>
            }
            titleClassName="!mt-2 h-auto w-full max-w-[36rem] !text-[1.5rem] !leading-8 sm:!text-[1.625rem] sm:!leading-8 md:max-w-none md:text-left md:!text-[1.625rem] md:!leading-8 lg:!text-[1.875rem] lg:!leading-[2.375rem] min-[90rem]:!text-[2.5rem] min-[90rem]:!leading-[3.125rem]"
            subtitle="Start a Giving Circle, rally your network around a verified cause, and track the change you help create."
            subtitleClassName="!mt-2 h-auto w-full max-w-[36rem] text-[0.8125rem] leading-5 sm:text-[0.875rem] md:max-w-none md:text-left md:text-[0.8125rem] md:leading-5 lg:text-[0.9375rem] lg:leading-6 min-[90rem]:max-w-[36rem] min-[90rem]:text-[1rem]"
          />
          <ul className="mx-auto mt-3 flex w-fit min-h-0 max-w-[28rem] flex-1 flex-col justify-evenly sm:mt-4 md:mx-0 md:mt-4 md:w-full md:max-w-none md:flex-none md:justify-start md:gap-3.5 lg:mt-5 lg:gap-4.5 min-[90rem]:mt-6 min-[90rem]:gap-5">
            {CHAMPION_STEPS.map((step) => (
              <ChampionStep
                key={step.title}
                iconSrc={step.iconSrc}
                title={step.title}
                body={step.body}
              />
            ))}
          </ul>
          <div className="mt-3 flex w-full shrink-0 justify-center md:mt-4 md:justify-start lg:mt-5 min-[90rem]:mt-6">
            <CtaButton
              href="/champion/apply"
              className="mx-auto h-11 w-full max-w-[20rem] gap-2 px-6 py-3 text-[0.8125rem] sm:h-11 md:mx-0 md:h-10 md:w-auto md:max-w-none md:px-5 md:text-[0.8125rem] lg:h-12 lg:text-[0.9375rem] min-[90rem]:h-14 min-[90rem]:w-[18rem] min-[90rem]:px-8 min-[90rem]:py-4 min-[90rem]:text-[length:inherit]"
              labelClassName="font-[700]"
            >
              Start Your Giving Journey
              <CtaArrow />
            </CtaButton>
          </div>
        </div>

        <ChampionVideo className="relative mt-5 mb-20 aspect-[4/3] w-full overflow-hidden rounded-[1rem] border border-[#d9e1e2] sm:mt-5 sm:mb-24 md:mt-0 md:mb-0 md:aspect-square md:w-[min(50%,28rem)] md:shrink-0 lg:w-[min(46%,33rem)] min-[90rem]:h-[40rem] min-[90rem]:w-[40rem] min-[90rem]:aspect-auto" />
      </FadeInSection>
    </section>
  );
}
