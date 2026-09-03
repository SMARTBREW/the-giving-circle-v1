import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import ReachStat from "@/components/reach-stat";
import { REACH_STATS } from "@/constants";

export default function ReachSection() {
  return (
    <section
      id="reach"
      className="w-full bg-[var(--Alternate-color,#F7FBFB)]"
    >
      <FadeInSection className="mx-auto flex h-full w-full max-w-[90rem] flex-col items-center px-[2rem] pt-[5rem] pb-[5rem] md:h-[26.25rem] md:px-[4rem]">
        <SectionIntro
          eyebrow="Our Reach"
          eyebrowClassName="w-[6.375rem]"
          title="One Circle, Countless Lives"
          titleClassName="h-[4rem] w-[41.9375rem]"
        />
        <ul className="mt-12 grid w-full min-w-full grid-cols-1 gap-8 self-stretch md:h-[6.75rem] md:grid-cols-4 md:gap-0">
          {REACH_STATS.map((stat, index) => (
            <ReachStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              showDivider={index > 0}
            />
          ))}
        </ul>
      </FadeInSection>
    </section>
  );
}
