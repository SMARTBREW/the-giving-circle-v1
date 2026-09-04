import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import { SEGOE_UI_CLASS, SUPPORT_CAUSE_PHOTO } from "@/constants";

export default function SupportCauseSection() {
  return (
    <section className="relative isolate min-h-[28rem] w-full overflow-hidden sm:min-h-[30rem] md:min-h-[32rem] lg:min-h-[28rem] min-[90rem]:h-[29.625rem] min-[90rem]:min-h-0">
      <Image
        src={SUPPORT_CAUSE_PHOTO}
        alt="Schoolchildren in our circle, smiling together"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.72)_45%,rgba(0,0,0,0.78)_100%)] min-[90rem]:bg-[linear-gradient(90deg,rgba(0,0,0,0.62)_20%,rgba(0,0,0,0.9)_43.5%,rgba(0,0,0,0.82)_66.99%,rgba(0,0,0,0.43)_90.49%,rgba(0,0,0,0.25)_102.24%,rgba(0,0,0,0.12)_108.11%,rgba(0,0,0,0)_113.99%)]"
      />
      <FadeInSection className="relative z-[1] mx-auto flex h-full min-h-[28rem] w-full max-w-[90rem] flex-col items-center justify-center px-5 py-12 sm:min-h-[30rem] sm:px-8 sm:py-14 md:min-h-[32rem] md:px-10 md:py-16 lg:min-h-[28rem] lg:px-12 lg:py-16 min-[90rem]:min-h-0 min-[90rem]:justify-start min-[90rem]:px-0 min-[90rem]:pt-[5.5rem] min-[90rem]:pb-0">
        <h2 className="w-full max-w-[19.5rem] text-center font-['Georgia'] text-[1.75rem] leading-[2.25rem] font-[700] tracking-normal text-[#FFFFFF] sm:max-w-[28rem] sm:text-[2.25rem] sm:leading-10 md:max-w-[36rem] md:text-[2.75rem] md:leading-[3.25rem] lg:max-w-[32rem] lg:text-[2.875rem] lg:leading-[3.25rem] min-[90rem]:h-[6.875rem] min-[90rem]:max-w-none min-[90rem]:w-[29.375rem] min-[90rem]:text-[3rem] min-[90rem]:leading-none min-[90rem]:font-[600] min-[90rem]:tracking-[0.5px]">
          Your Giving Can Change a Life.
        </h2>
        <p
          className={`${SEGOE_UI_CLASS} mt-3 w-full max-w-[20.5rem] text-center text-[0.875rem] leading-[1.375rem] font-[400] tracking-normal text-[#FFFFFF] sm:mt-5 sm:max-w-[28rem] sm:text-[1.0625rem] sm:leading-7 md:mt-6 md:max-w-[36rem] md:text-[1.125rem] md:leading-8 lg:max-w-[36rem] lg:text-[1.125rem] lg:leading-8 min-[90rem]:mt-4 min-[90rem]:h-[4.5rem] min-[90rem]:w-[32.5rem] min-[90rem]:max-w-none min-[90rem]:text-[1.125rem] min-[90rem]:leading-9 min-[90rem]:tracking-[0.0025em]`}
        >
          Every verified donation helps children, families, and communities
          access better education, healthcare, and opportunities.
        </p>
        <div className="mt-6 sm:mt-7 md:mt-6">
          <CtaButton
            href="/#causes"
            className="h-11 rounded-[0.5rem] bg-[#00A3BE] px-8 py-3 sm:h-14 sm:rounded-[100px] sm:px-9 min-[90rem]:h-[4rem] min-[90rem]:px-9 min-[90rem]:py-[1.125rem]"
            labelClassName="font-[700]"
          >
            Support a Cause
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}
