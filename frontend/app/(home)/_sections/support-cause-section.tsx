import PhotoCtaBand from "@/components/photo-cta-band";
import { SUPPORT_CAUSE_BAND } from "@/constants";

export default function SupportCauseSection() {
  return (
    <PhotoCtaBand
      src={SUPPORT_CAUSE_BAND.src}
      alt={SUPPORT_CAUSE_BAND.alt}
      title={SUPPORT_CAUSE_BAND.title}
      subtitle={SUPPORT_CAUSE_BAND.subtitle}
      ctaLabel={SUPPORT_CAUSE_BAND.ctaLabel}
      href={SUPPORT_CAUSE_BAND.href}
    />
  );
}
