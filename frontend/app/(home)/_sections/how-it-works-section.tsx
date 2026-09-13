import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import HowItWorksStep from "@/components/how-it-works-step";
import { HOW_IT_WORKS_STEPS } from "@/constants";

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="w-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"
    >
      <FadeInSection className="relative mx-auto flex w-full max-w-[90rem] flex-col items-center px-4 pt-6 pb-6 sm:px-8 sm:pt-12 sm:pb-12 md:px-10 md:pt-14 md:pb-14 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:h-[35.4375rem] min-[90rem]:px-[4rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem]">
        <SectionIntro
          tone="onDark"
          eyebrow="How It Works"
          title="Three Simple Steps"
        />
        <div className="relative mt-10 w-full self-stretch sm:mt-10 lg:mt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden h-[6.25rem] min-[90rem]:block"
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
          <ul className="relative z-10 flex flex-col items-center gap-0 lg:grid lg:grid-cols-3 lg:gap-0">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <HowItWorksStep
                key={step.title}
                iconSrc={step.iconSrc}
                title={step.title}
                body={step.body}
                showConnector={index < HOW_IT_WORKS_STEPS.length - 1}
              />
            ))}
          </ul>
        </div>
      </FadeInSection>
    </section>
  );
}
