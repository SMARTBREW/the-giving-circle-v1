import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import HowItWorksStep from "@/components/how-it-works-step";
import { HOW_IT_WORKS_STEPS } from "@/constants";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full bg-[#3976A8]">
      <FadeInSection className="relative mx-auto flex h-full w-full max-w-[90rem] flex-col items-center px-[2rem] pt-[5rem] pb-[5rem] md:h-[35.4375rem] md:px-[4rem]">
        <SectionIntro
          tone="onDark"
          eyebrow="How It Works"
          eyebrowClassName="w-[8.5rem]"
          title="Three Simple Steps"
          titleClassName="h-[4rem] w-[29.8125rem]"
        />
        <div className="relative mt-12 w-full self-stretch">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden h-[6.25rem] md:block"
          >
            <svg
              viewBox="0 0 778 115"
              fill="none"
              overflow="visible"
              preserveAspectRatio="none"
              className="absolute top-1/2 left-[16.666%] h-[7.1875rem] w-2/3 -translate-y-[55.3%] overflow-visible"
            >
              <path
                d="M2 63.6387C52.99 17.1032 201.77 -48.0464 389 63.6387C512.99 137.903 673.8 120.345 776 63.6387"
                stroke="white"
                strokeOpacity="0.6"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="1 10"
              />
            </svg>
          </div>
          <ul className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <HowItWorksStep
                key={step.title}
                iconSrc={step.iconSrc}
                title={step.title}
                body={step.body}
              />
            ))}
          </ul>
        </div>
      </FadeInSection>
    </section>
  );
}
