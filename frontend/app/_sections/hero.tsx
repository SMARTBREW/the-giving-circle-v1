import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import { SEGOE_UI_CLASS } from "@/constants";

export default function Hero() {
  return (
    <section className="relative isolate w-full bg-[#F6F3EF] lg:h-[calc(100dvh-6.25rem)] lg:overflow-hidden">
      <Image
        src="/images/image.png"
        alt="Young people in our circle, together"
        fill
        sizes="100vw"
        className="z-[-1] hidden object-cover object-[50%_10%] lg:block"
        priority
      />
      <FadeInSection className="relative z-[1] mx-auto flex w-full max-w-[90rem] flex-col items-center px-4 pt-8 pb-10 sm:px-6 sm:pt-10 sm:pb-12 md:px-10 md:pt-12 md:pb-14 lg:px-0 lg:pt-[4rem] lg:pb-0">
        <h1 className="w-full text-center font-['Georgia'] text-[1.75rem] leading-[2.25rem] font-[700] tracking-[0.02em] text-[var(--Main-headings,#000000)] sm:text-[2.25rem] sm:leading-[2.75rem] md:max-w-[36rem] md:text-[2.75rem] md:leading-[3.5rem] lg:h-[10rem] lg:w-[39.25rem] lg:max-w-none lg:text-[4rem] lg:leading-[5rem]">
          A Stronger Circle.
          <br />
          A Greater Impact.
        </h1>
        <p
          className={`${SEGOE_UI_CLASS} mt-3 w-full max-w-[20.5rem] text-center text-[0.9375rem] leading-6 font-[350] tracking-normal text-[#212121] sm:mt-4 sm:max-w-[28rem] sm:text-[1.125rem] sm:leading-7 md:max-w-[36rem] md:text-[1.25rem] md:leading-8 lg:h-[5rem] lg:w-[40.375rem] lg:max-w-none lg:text-[1.5rem] lg:leading-[2.5rem]`}
        >
          Champion a cause backed by a verified NGO, bring your circle together,
          and help raise funds for meaningful change.
        </p>

        <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-[0.75rem] sm:mt-8 md:mt-10 md:max-w-[42rem] lg:hidden">
          <Image
            src="/images/image.png"
            alt="Young people in our circle, together"
            fill
            sizes="(max-width: 767px) 100vw, 42rem"
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="mt-6 w-full sm:mt-8 md:max-w-[42rem] lg:hidden">
          <CtaButton
            href="/#champion"
            className="h-12 w-full !rounded-[0.5rem] sm:h-14"
            labelClassName="font-[700]"
          >
            Become a Cause Champion
          </CtaButton>
        </div>

        <div className="mt-8 hidden h-[4rem] w-[28.21875rem] flex-row items-center gap-[1.53125rem] lg:flex">
          <CtaButton
            href="/#champion"
            className="h-[4rem] w-[14.25rem] gap-2 px-[2.25rem] py-[1.125rem]"
            labelClassName="w-[9.75rem] font-[700]"
          >
            Champion a Cause
          </CtaButton>
          <CtaButton
            href="/#causes"
            variant="outline"
            smoothScroll
            className="h-[4rem] w-[12.4375rem]"
            labelClassName="w-[7.9375rem] font-[700]"
          >
            Explore Causes
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}
