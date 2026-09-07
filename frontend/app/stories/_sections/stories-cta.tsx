import PhotoCtaBand from "@/components/photo-cta-band";
import { EDUCATION_PHOTO, STORIES_CTA } from "@/constants";

export default function StoriesCta() {
  return (
    <PhotoCtaBand
      src={EDUCATION_PHOTO}
      alt={STORIES_CTA.alt}
      title={STORIES_CTA.title}
      subtitle={STORIES_CTA.subtitle}
      ctaLabel={STORIES_CTA.ctaLabel}
      href={STORIES_CTA.href}
      objectPosition="sm:object-[50%_40%]"
    />
  );
}
