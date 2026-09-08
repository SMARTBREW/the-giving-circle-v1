import PhotoCtaBand from "@/components/photo-cta-band";
import { ABOUT_VISION_CTA, EDUCATION_PHOTO } from "@/constants";

export default function AboutVisionCta() {
  return (
    <PhotoCtaBand
      src={EDUCATION_PHOTO}
      alt={ABOUT_VISION_CTA.alt}
      title={ABOUT_VISION_CTA.title}
      subtitle={ABOUT_VISION_CTA.subtitle}
      ctaLabel={ABOUT_VISION_CTA.ctaLabel}
      href={ABOUT_VISION_CTA.href}
      objectPosition="object-[42%_40%] sm:object-[50%_40%]"
    />
  );
}
