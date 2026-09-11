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
        sizes="(max-width: 767px) 100vw, (max-width: 1439px) 44vw, 37.0625rem"
        className="object-cover"
      />
      <span className="absolute inset-0 bg-[#00000040]" />
      <span className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFFFFF] sm:h-20 sm:w-20 lg:h-24 lg:w-24">
        <svg
          className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16"
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
      className="w-full bg-[#FFFFFF] min-[90rem]:mx-auto min-[90rem]:h-[60.5rem] min-[90rem]:max-w-[90rem]"
    >
      <FadeInSection className="relative flex h-full w-full flex-col px-4 pt-6 pb-4 sm:px-8 sm:pt-10 sm:pb-10 md:flex-row md:gap-6 md:px-10 md:pt-12 md:pb-12 lg:gap-10 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:block min-[90rem]:px-0 min-[90rem]:pt-0 min-[90rem]:pb-0">
        <div className="flex flex-col md:flex-1 min-[90rem]:absolute min-[90rem]:top-[5rem] min-[90rem]:left-[6.25rem] min-[90rem]:w-[36rem]">
          <SectionIntro
            align="center"
            eyebrow="Become a Cause Champion"
            eyebrowClassName="w-full md:text-left min-[90rem]:w-[16rem]"
            title={
              <>
                Lead Your Circle.
                <br />
                Create Real Impact.
              </>
            }
            titleClassName="h-auto w-full text-[1.75rem] leading-9 sm:text-[2.25rem] sm:leading-10 md:text-left md:text-[2.5rem] md:leading-[3.25rem] lg:text-[2.75rem] lg:leading-[3.5rem] min-[90rem]:h-[8rem] min-[90rem]:w-[33.4375rem] min-[90rem]:text-[3rem] min-[90rem]:leading-[4rem]"
            subtitle="Start a Giving Circle, rally your network around a verified cause, and track the change you help create."
            subtitleClassName="h-auto w-full md:text-left min-[90rem]:h-[4rem] min-[90rem]:w-[36rem]"
          />
          <ul className="mt-5 flex flex-col gap-3 sm:mt-7 sm:gap-5 min-[90rem]:mt-8 min-[90rem]:gap-6">
            {CHAMPION_STEPS.map((step) => (
              <ChampionStep
                key={step.title}
                iconSrc={step.iconSrc}
                title={step.title}
                body={step.body}
              />
            ))}
          </ul>
          <div className="mt-5 sm:mt-7 min-[90rem]:mt-10">
            <CtaButton
              href="/champion/apply"
              variant="outline"
              hoverFill
              className="h-11 w-full gap-2 bg-[#FFFFFF] px-6 py-3 sm:h-14 md:h-[4rem] min-[90rem]:w-[20rem] min-[90rem]:px-10 min-[90rem]:py-5"
            >
              Start Your Giving Journey
              <CtaArrow />
            </CtaButton>
          </div>
        </div>

        <ChampionPhoto className="relative mt-6 aspect-[4/5] w-full overflow-hidden rounded-[1rem] border border-[#BDBDBD] sm:mt-8 sm:aspect-[5/6] md:mt-0 md:w-[42%] md:aspect-auto lg:w-[44%] min-[90rem]:absolute min-[90rem]:top-[5rem] min-[90rem]:left-[46.68rem] min-[90rem]:h-[50rem] min-[90rem]:w-[37.0625rem]" />

      </FadeInSection>
    </section>
  );
}
