import VolunteerBand from "@/components/volunteer-band";
import { VOLUNTEER_BAND } from "@/constants";

export default function VolunteerSection() {
  return (
    <VolunteerBand
      id="volunteer"
      eyebrow={VOLUNTEER_BAND.eyebrow}
      title={VOLUNTEER_BAND.title}
      subtitle={VOLUNTEER_BAND.subtitle}
      ctaLabel={VOLUNTEER_BAND.ctaLabel}
      href={VOLUNTEER_BAND.href}
    />
  );
}
