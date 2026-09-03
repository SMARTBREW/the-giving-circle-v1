import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import { SEGOE_UI_CLASS, SUPPORT_CAUSE_PHOTO } from "@/constants";

export default function SupportCauseSection() {
  return (
    <section className="relative isolate h-[29.625rem] w-full overflow-hidden">
      <Image
        src={SUPPORT_CAUSE_PHOTO}
        alt="Schoolchildren in our circle, smiling together"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.62)_20%,rgba(0,0,0,0.9)_43.5%,rgba(0,0,0,0.82)_66.99%,rgba(0,0,0,0.43)_90.49%,rgba(0,0,0,0.25)_102.24%,rgba(0,0,0,0.12)_108.11%,rgba(0,0,0,0)_113.99%)]"
      />
      <FadeInSection className="relative z-[1] flex h-full flex-col items-center pt-[5.5rem]">
        <h2 className="h-[6.875rem] w-[29.375rem] text-center font-['Georgia'] text-[3rem] leading-none font-[600] tracking-[0.5px] text-[#FFFFFF]">
          Your Giving Can Change a Life.
        </h2>
        <p
          className={`${SEGOE_UI_CLASS} mt-6 h-[4.5rem] w-[32.5rem] text-center text-[1.125rem] leading-9 font-[400] tracking-[0.0025em] text-[#FFFFFF]`}
        >
          Every verified donation helps children, families, and communities
          access better education, healthcare, and opportunities.
        </p>
        <div className="mt-6">
          <CtaButton
            href="/#causes"
            className="h-[4rem] w-[13.1875rem] rounded-[100px] bg-[#00A3BE] px-9 py-[1.125rem]"
            labelClassName="gap-2 font-[700] tracking-normal"
          >
            <span className="inline-flex h-6 w-[8.6875rem] items-center justify-center leading-none">
              Support a Cause
            </span>
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}
