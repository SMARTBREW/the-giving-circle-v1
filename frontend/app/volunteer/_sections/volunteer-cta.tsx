import PhotoCtaBand from "@/components/photo-cta-band";
import { VOLUNTEER_CTA } from "@/constants";

export default function VolunteerCta() {
  return (
    <PhotoCtaBand
      src={VOLUNTEER_CTA.src}
      alt={VOLUNTEER_CTA.alt}
      title={VOLUNTEER_CTA.title}
      subtitle={VOLUNTEER_CTA.subtitle}
      ctaLabel={VOLUNTEER_CTA.ctaLabel}
      href={VOLUNTEER_CTA.href}
      align="left"
      overlay={false}
      objectPosition="object-[50%_42%]"
    />
  );
}
