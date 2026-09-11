import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import ReachStat from "@/components/reach-stat";

export default function ReachBand({
  id,
  eyebrow,
  title,
  subtitle,
  stats,
  tone = "alternate",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  stats: readonly { value: string; label: string }[];
  tone?: "alternate" | "white";
}) {
  return (
    <section
      id={id}
      className={
        tone === "white"
          ? "w-full bg-[#FFFFFF]"
          : "w-full bg-gray-100"
      }
    >
      <FadeInSection
        className={`mx-auto flex w-full max-w-[90rem] flex-col items-center px-4 pt-6 pb-6 sm:px-8 sm:pt-12 sm:pb-12 md:px-10 md:pt-14 md:pb-14 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:px-[4rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem] ${
          subtitle ? "" : "min-[90rem]:h-[26.25rem]"
        }`}
      >
        <SectionIntro eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <ul className="mt-10 grid w-full grid-cols-2 self-stretch sm:mt-10 lg:mt-12 lg:grid-cols-4 lg:gap-0">
          {stats.map((stat, index) => (
            <ReachStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </ul>
      </FadeInSection>
    </section>
  );
}
