import PhotoCtaBand from "@/components/photo-cta-band";
import { VOLUNTEER_CTA } from "@/constants";

export default function VolunteerCta() {
  return (
    <PhotoCtaBand
      src={VOLUNTEER_CTA.src}
      mobileSrc={VOLUNTEER_CTA.mobileSrc}
      alt={VOLUNTEER_CTA.alt}
      title={VOLUNTEER_CTA.title}
      subtitle={VOLUNTEER_CTA.subtitle}
      ctaLabel={VOLUNTEER_CTA.ctaLabel}
      href={VOLUNTEER_CTA.href}
      align="left"
      overlay={false}
      objectPosition="object-right min-[90rem]:object-center"
      mobileObjectPosition="object-[85%_center]"
    />
  );
}
