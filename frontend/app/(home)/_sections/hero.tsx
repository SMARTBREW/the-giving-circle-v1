import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import { SEGOE_UI_CLASS } from "@/constants";

// Phone frame has no in-hero buttons — the sticky bar is the only CTA there.
// Mobile hero fills the viewport under the header; the floating CTA overlays the
// bottom without a full-bleed bar so more of the people stay visible.
//
// Figma hero banner is 1440x886 below a 100px header. From sm up the section keeps
// that ratio but never exceeds the viewport, and every value below is a share of the
// frame height (cqh) so the whole composition scales instead of cropping.
//
// When the viewport is shorter than the artboard the photo is cropped, which lifts the
// group. The top padding subtracts that lift so the copy keeps Figma's clearance above
// their heads; at the artboard size it resolves to Figma's 64px.
export default function Hero() {
  return (
    <section className="relative h-[calc(100dvh-4rem-1px)] w-full overflow-hidden bg-[#F4F1ED] [container-type:size] sm:aspect-[1440/886] sm:h-auto sm:max-h-[calc(100dvh-4.5rem-1px)] md:max-h-[calc(100dvh-5rem-1px)] lg:max-h-[calc(100dvh-5.5rem-1px)] min-[90rem]:max-h-[calc(100dvh-6.25rem-1px)]">
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
        className="hidden object-cover object-[50%_50%] sm:block"
        priority
      />

      <FadeInSection className="relative z-10 mx-auto flex w-full flex-col items-center px-4 pt-8 sm:px-0 sm:pt-[max(2cqh,16.2cqh_-_5.54cqw)]">
        <h1 className="w-full max-w-[20.5rem] text-center font-['Georgia'] text-[1.75rem] leading-[2.25rem] font-[700] tracking-[0.02em] text-[var(--Main-headings,#000000)] sm:w-[70.88cqh] sm:max-w-none sm:text-[7.22cqh] sm:leading-[9.03cqh]">
          A Stronger Circle.
          <br />
          A Greater Impact.
        </h1>
        <p
          className={`${SEGOE_UI_CLASS} mt-3 w-full max-w-[20.5rem] text-center text-[0.9375rem] leading-6 font-[400] tracking-normal text-[#212121] sm:mt-[1.81cqh] sm:w-[77.2cqh] sm:max-w-none sm:text-[2.71cqh] sm:leading-[4.51cqh]`}
        >
          Champion a cause backed by a verified NGO, bring your circle together,
          and help raise funds for meaningful change.
        </p>

        <div className="hidden sm:mt-[3.61cqh] sm:flex sm:flex-row sm:flex-nowrap sm:items-center sm:justify-center sm:gap-[2.765cqh]">
          <CtaButton
            href="/#champion"
            className="sm:h-[7.22cqh] sm:gap-[0.9cqh] sm:px-[4.06cqh] sm:text-[2.03cqh]"
            labelClassName="font-[700]"
          >
            Champion a Cause
          </CtaButton>
          <CtaButton
            href="/#causes"
            variant="outline"
            smoothScroll
            className="bg-[#F4F1ED] sm:h-[7.22cqh] sm:px-[3.61cqh] sm:text-[2.03cqh]"
            labelClassName="font-[700]"
          >
            Explore Causes
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}
