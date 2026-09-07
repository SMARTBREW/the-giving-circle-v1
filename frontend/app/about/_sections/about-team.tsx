import VolunteerBand from "@/components/volunteer-band";
import { ABOUT_TEAM } from "@/constants";

export default function AboutTeam() {
  return (
    <VolunteerBand
      eyebrow={ABOUT_TEAM.eyebrow}
      title={ABOUT_TEAM.title}
      subtitle={ABOUT_TEAM.subtitle}
      ctaLabel={ABOUT_TEAM.ctaLabel}
      href={ABOUT_TEAM.href}
    />
  );
}
