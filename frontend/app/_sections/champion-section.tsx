import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import SectionIntro from "@/components/section-intro";
import ChampionStep from "@/components/champion-step";
import { CHAMPION_PHOTO, CHAMPION_STEPS } from "@/constants";

export default function ChampionSection() {
  return (
    <section
      id="champion"
      className="mx-auto h-[60.5rem] w-full max-w-[90rem] bg-[#FFFFFF]"
    >
      <FadeInSection className="relative h-full w-full">
        <div className="flex flex-col pl-[6.25rem] pt-[5rem]">
          <SectionIntro
            align="left"
            eyebrow="Become a Cause Champion"
            eyebrowClassName="w-[16rem]"
            title={
              <>
                Lead Your Circle.
                <br />
                Create Real Impact.
              </>
            }
            titleClassName="h-[8rem] w-[33.4375rem]"
            subtitle="Start a Giving Circle, rally your network around a verified cause, and track the change you help create."
            subtitleClassName="h-[4rem] w-[36rem]"
          />
          <ul className="mt-8 flex flex-col gap-6">
            {CHAMPION_STEPS.map((step) => (
              <ChampionStep
                key={step.title}
                iconSrc={step.iconSrc}
                title={step.title}
                body={step.body}
              />
            ))}
          </ul>
          <div className="mt-10">
            <CtaButton
              href="/#contact"
              variant="outline"
              className="group h-[4rem] w-[20rem] gap-2 bg-[#FFFFFF] px-10 py-5 transition-colors duration-300 ease-out hover:bg-[var(--Main-CTA-button,#00A3BE)]"
              labelClassName="inline-flex h-6 items-center font-[600] tracking-normal transition-colors duration-300 ease-out group-hover:text-[#FFFFFF]"
            >
              Start Your Giving Journey →
            </CtaButton>
          </div>
        </div>
        <div className="absolute top-[5rem] left-[46.68rem] h-[50rem] w-[37.0625rem] overflow-hidden rounded-[1rem] border border-[#BDBDBD]">
          <Image
            src={CHAMPION_PHOTO}
            alt="Women in our circle gathered together"
            fill
            sizes="37.0625rem"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-[#00000040]" />
          <span className="absolute top-1/2 left-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFFFFF]">
            <svg
              width="64"
              height="64"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path d="M7 5L15 10L7 15V5Z" fill="#00A3BE" />
            </svg>
          </span>
        </div>
      </FadeInSection>
    </section>
  );
}
