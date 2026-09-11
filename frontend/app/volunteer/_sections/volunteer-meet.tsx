import VolunteerBand from "@/components/volunteer-band";
import { VOLUNTEER_MEET } from "@/constants";

export default function VolunteerMeet() {
  const { eyebrow, title, subtitle, ctaLabel, href } = VOLUNTEER_MEET;

  return (
    <VolunteerBand
      id="meet-volunteers"
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      ctaLabel={ctaLabel}
      href={href}
      ctaClassName="h-12 w-full max-w-[17.25rem] gap-2 rounded-[100px] border bg-[#FFFFFF] px-8 py-4 sm:h-14 min-[90rem]:h-16 min-[90rem]:w-[17.25rem] min-[90rem]:px-10 min-[90rem]:py-5"
    />
  );
}
