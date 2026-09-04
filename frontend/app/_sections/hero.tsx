import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import { SEGOE_UI_CLASS } from "@/constants";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden bg-[#FAF1E8] sm:h-[calc(100vh-4.5rem)] md:h-[calc(100vh-5rem)] lg:h-[calc(100vh-5.5rem)] min-[90rem]:h-[calc(100vh-6.25rem)]">
      <Image
        src="/images/hero-mobile.png"
        alt="Young people in our circle, together"
        fill
        sizes="100vw"
        className="object-cover object-bottom sm:hidden"
        quality={100}
        priority
      />
      <Image
        src="/images/image.png"
        alt="Young people in our circle, together"
        fill
        sizes="100vw"
        className="hidden object-cover object-[50%_10%] sm:block"
        priority
      />
      <FadeInSection className="relative z-10 mx-auto flex h-full min-h-0 w-full max-w-[90rem] flex-col items-center pt-8 pb-0 sm:pt-10 md:pt-12 lg:pt-14 min-[90rem]:pt-[4rem]">
        <h1 className="w-full px-4 text-center font-['Georgia'] text-[1.75rem] leading-[2.25rem] font-[700] tracking-[0.02em] text-[var(--Main-headings,#000000)] sm:px-6 sm:text-[2.25rem] sm:leading-[2.75rem] md:max-w-[36rem] md:px-10 md:text-[2.75rem] md:leading-[3.5rem] lg:max-w-[42rem] lg:px-0 lg:text-[3.25rem] lg:leading-[4rem] min-[90rem]:h-[10rem] min-[90rem]:w-[39.25rem] min-[90rem]:max-w-none min-[90rem]:text-[4rem] min-[90rem]:leading-[5rem]">
          A Stronger Circle.
          <br />
          A Greater Impact.
        </h1>
        <p
          className={`${SEGOE_UI_CLASS} relative z-10 mt-3 w-full max-w-[20.5rem] px-4 text-center text-[0.9375rem] leading-6 font-[350] tracking-normal text-[#212121] sm:mt-4 sm:max-w-[28rem] sm:px-6 sm:text-[1.125rem] sm:leading-7 md:max-w-[36rem] md:px-10 md:text-[1.25rem] md:leading-8 lg:max-w-[46rem] lg:px-0 lg:text-[1.375rem] lg:leading-8 min-[90rem]:h-[5rem] min-[90rem]:w-[46rem] min-[90rem]:max-w-none min-[90rem]:text-[1.5rem] min-[90rem]:leading-[2.5rem]`}
        >
          Champion a cause backed by a verified NGO, bring your circle together,
          and help raise funds for meaningful change.
        </p>

        <div className="relative z-10 mt-8 hidden flex-row items-center gap-4 min-[90rem]:flex min-[90rem]:h-[4rem] min-[90rem]:gap-[1.53125rem]">
          <CtaButton
            href="/#champion"
            className="h-[4rem] gap-2 px-[2.25rem] py-[1.125rem]"
            labelClassName="font-[700]"
          >
            Champion a Cause
          </CtaButton>
          <CtaButton
            href="/#causes"
            variant="outline"
            smoothScroll
            className="h-[4rem] px-8"
            labelClassName="font-[700]"
          >
            Explore Causes
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}
