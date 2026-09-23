import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import { SEGOE_UI_CLASS } from "@/constants";

// Phone + small tablet (<900px): no in-hero buttons — sticky bar is the CTA.
//
// Figma hero is 1440×886. From sm up the section keeps that ratio (capped by
// max-h-dvh). Copy/CTAs use cqh but are capped in rem so large/tall laptops
// don't overscale into the faces (same clearance as the 1440 artboard).
//
// Mid-zoom (< lg, ≥56.25rem): compact rem copy + stronger photo lift.
export default function Hero() {
  return (
    <section className="relative -mt-[5.5rem] h-dvh w-full overflow-x-hidden overflow-hidden bg-[#F6F3EE] pt-[5.5rem] [container-type:size] sm:-mt-[6.25rem] sm:aspect-[1440/886] sm:h-auto sm:max-h-dvh sm:pt-[6.25rem] md:-mt-[6.75rem] md:max-h-dvh md:pt-[6.75rem] lg:-mt-[7rem] lg:pt-[7rem] min-[90rem]:-mt-[8.75rem] min-[90rem]:max-h-dvh min-[90rem]:pt-[8.75rem]">
      <Image
        src="/images/hero-mobile.png"
        alt="Young people in our circle, together"
        fill
        sizes="100vw"
        className="object-cover object-[50%_70%] sm:hidden"
        quality={100}
        priority
      />
      <Image
        src="/images/hero-desktop.png"
        alt="Young people in our circle, together"
        fill
        sizes="100vw"
        className="hidden object-cover object-[50%_62%] translate-y-16 sm:block min-[56.25rem]:translate-y-24 lg:translate-y-28 min-[90rem]:translate-y-[7.5rem]"
        priority
      />

      <FadeInSection className="relative z-10 mx-auto flex w-full flex-col items-center px-4 pt-2 sm:px-0 sm:pt-3 md:pt-4 lg:pt-6 min-[90rem]:pt-8">
        <h1 className="w-full max-w-[20.5rem] text-center font-['Georgia'] text-[1.75rem] leading-[2.25rem] font-[700] tracking-[0.02em] text-[var(--Main-headings,#1c2426)] sm:w-[min(70.88cqh,100%)] sm:max-w-none sm:text-[min(7.22cqh,2.5rem)] sm:leading-[min(9.03cqh,3rem)] min-[56.25rem]:max-[89.99rem]:w-auto min-[56.25rem]:max-[89.99rem]:max-w-[34rem] min-[56.25rem]:max-[89.99rem]:text-[2.25rem] min-[56.25rem]:max-[89.99rem]:leading-[2.75rem] lg:text-[2.5rem] lg:leading-[3rem] min-[90rem]:w-[min(70.88cqh,100%)] min-[90rem]:max-w-none min-[90rem]:text-[min(7.22cqh,4rem)] min-[90rem]:leading-[min(9.03cqh,5rem)]">
          A Stronger Circle.
          <br />
          A Greater Impact.
        </h1>
        <p
          className={`${SEGOE_UI_CLASS} mt-3 w-full max-w-[20.5rem] text-center text-[0.9375rem] leading-6 font-[400] tracking-normal text-[#4a5558] sm:mt-3 sm:w-[min(77.2cqh,100%)] sm:max-w-none sm:text-[min(2.71cqh,1.125rem)] sm:leading-[min(4.51cqh,1.75rem)] min-[56.25rem]:max-[89.99rem]:mt-2.5 min-[56.25rem]:max-[89.99rem]:w-auto min-[56.25rem]:max-[89.99rem]:max-w-[30rem] min-[56.25rem]:max-[89.99rem]:text-[0.9375rem] min-[56.25rem]:max-[89.99rem]:leading-5 min-[90rem]:mt-4 min-[90rem]:w-[min(77.2cqh,100%)] min-[90rem]:max-w-none min-[90rem]:text-[min(2.71cqh,1.5rem)] min-[90rem]:leading-[min(4.51cqh,2.25rem)]`}
        >
          Champion a cause backed by a verified NGO, bring your circle together,
          and help raise funds for meaningful change.
        </p>

        <div className="hidden min-[56.25rem]:mt-4 min-[56.25rem]:flex min-[56.25rem]:flex-row min-[56.25rem]:flex-nowrap min-[56.25rem]:items-center min-[56.25rem]:justify-center min-[56.25rem]:gap-3.5 min-[90rem]:mt-6 min-[90rem]:gap-6">
          <CtaButton
            href="/become-a-cause-champion"
            className="h-10 px-5 text-[0.8125rem] min-[90rem]:h-[min(7.22cqh,3.75rem)] min-[90rem]:gap-[0.9cqh] min-[90rem]:px-[min(4.06cqh,2.5rem)] min-[90rem]:text-[min(2.03cqh,1.125rem)]"
            labelClassName="font-[700]"
          >
            Champion a Cause
          </CtaButton>
          <CtaButton
            href="/#causes"
            variant="outline"
            smoothScroll
            className="h-10 px-5 text-[0.8125rem] min-[90rem]:h-[min(7.22cqh,3.75rem)] min-[90rem]:px-[min(3.61cqh,2.25rem)] min-[90rem]:text-[min(2.03cqh,1.125rem)]"
            labelClassName="font-[700]"
          >
            Explore Causes
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}
