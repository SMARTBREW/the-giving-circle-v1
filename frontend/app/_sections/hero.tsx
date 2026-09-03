import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import { SEGOE_UI_CLASS } from "@/constants";

export default function Hero() {
  return (
    <section className="relative isolate h-[55.375rem] w-full overflow-hidden bg-[#F6F3EF]">
      <Image
        src="/images/image.png"
        alt="Young people in our circle, together"
        fill
        sizes="100vw"
        className="z-[-1] object-cover object-top"
        priority
      />
      <FadeInSection className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col items-center pt-[4rem]">
        <h1 className="h-[10rem] w-[39.25rem] text-center font-['Georgia'] text-[4rem] leading-[5rem] font-[700] tracking-[0.02em] text-[var(--Main-headings,#000000)]">
          A Stronger Circle.
          <br />
          A Greater Impact.
        </h1>
        <p
          className={`${SEGOE_UI_CLASS} mt-4 h-[5rem] w-[40.375rem] text-center text-[1.5rem] leading-[2.5rem] font-[350] tracking-normal text-[#212121]`}
        >
          Champion a cause backed by a verified NGO, bring your circle together,
          and help raise funds for meaningful change.
        </p>
        <div className="mt-8 flex h-[4rem] w-[28.21875rem] flex-row items-center gap-[1.53125rem]">
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
