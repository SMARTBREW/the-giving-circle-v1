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
      <FadeInSection className="mx-auto flex w-full max-w-[90rem] flex-col items-center px-4 pt-6 pb-6 sm:px-8 sm:pt-12 sm:pb-12 md:px-10 md:pt-14 md:pb-14 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem]">
        <SectionIntro
          eyebrow="Cherish what matters"
          title="Make your special moments count"
          subtitle="Celebrate a milestone, honour a memory, or mark a special day by making a difference that lasts."        />
        {/*
          Stack below 70rem so ~1055px / 150% zoom keep full-width nowrap CTAs.
          3-up from 70rem covers 110% (~1309) without cramped labels.
        */}
        <ul className="relative mt-6 flex w-full flex-col items-stretch gap-4 sm:mt-8 sm:gap-5 md:gap-6 min-[70rem]:mt-8 min-[70rem]:grid min-[70rem]:grid-cols-3 min-[70rem]:gap-5 min-[90rem]:mt-10 min-[90rem]:flex min-[90rem]:flex-row min-[90rem]:gap-[1.625rem] min-[90rem]:pt-3 min-[90rem]:pb-3">
          {MOMENT_CARDS.map((moment) => (
            <li
              key={moment.title}
              className="relative z-0 w-full min-w-0 hover:z-10 min-[90rem]:w-[24.75rem] min-[90rem]:flex-none"
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
