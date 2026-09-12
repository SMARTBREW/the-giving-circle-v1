import VolunteerBand from "@/components/volunteer-band";
import { CHAMPION_MEET } from "@/constants";

export default function ChampionMeet() {
  const { eyebrow, title, subtitle, ctaLabel, href, people } = CHAMPION_MEET;

  return (
    <VolunteerBand
      id="meet-champions"
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      ctaLabel={ctaLabel}
      href={href}
      people={people}
      ctaClassName="h-12 w-full max-w-[20.875rem] gap-2 rounded-full border bg-[#FFFFFF] px-8 py-4 sm:h-14 min-[90rem]:h-16 min-[90rem]:w-[20.875rem] min-[90rem]:px-10 min-[90rem]:py-5"
    />
  );
}
