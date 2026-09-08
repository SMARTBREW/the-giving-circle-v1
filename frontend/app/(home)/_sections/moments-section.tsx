import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import MomentCard from "@/components/moment-card";
import { MOMENT_CARDS } from "@/constants";

export default function MomentsSection({
  className = "bg-[#FFFFFF]",
}: {
  className?: string;
}) {
  return (
    <section id="moments" className={`w-full ${className}`}>
      <FadeInSection className="mx-auto flex h-full w-full max-w-[90rem] flex-col items-center px-4 pt-6 pb-6 sm:px-8 sm:pt-12 sm:pb-12 md:px-10 md:pt-14 md:pb-14 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:h-[50.9375rem] min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem]">
        <SectionIntro
          eyebrow="Meaningful Moments"
          title="Celebrate. Remember. Give."
          subtitle="The flowers fade. Start a fundraiser instead, and let the people who love you give where your heart already is."
        />
        <ul className="relative mt-6 flex w-full flex-col items-stretch gap-4 sm:mt-8 sm:gap-5 md:gap-6 lg:mt-8 lg:flex-row lg:gap-5 lg:pt-4 min-[90rem]:gap-[1.625rem]">
          {MOMENT_CARDS.map((moment) => (
            <li
              key={moment.title}
              className="relative z-0 w-full min-w-0 hover:z-10 lg:flex-1 min-[90rem]:w-[24.75rem] min-[90rem]:flex-none"
            >
              <MomentCard
                iconSrc={moment.iconSrc}
                title={moment.title}
                body={moment.body}
                ctaLabel={moment.ctaLabel}
                href={moment.href}
              />
            </li>
          ))}
        </ul>
      </FadeInSection>
    </section>
  );
}
