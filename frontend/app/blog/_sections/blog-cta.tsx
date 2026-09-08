import PhotoCtaBand from "@/components/photo-cta-band";
import { BLOG_CTA, EDUCATION_PHOTO } from "@/constants";

export default function BlogCta() {
  return (
    <PhotoCtaBand
      src={EDUCATION_PHOTO}
      alt={BLOG_CTA.alt}
      title={BLOG_CTA.title}
      subtitle={BLOG_CTA.subtitle}
      ctaLabel={BLOG_CTA.ctaLabel}
      href={BLOG_CTA.href}
      objectPosition="object-[42%_40%] sm:object-[50%_40%]"
    />
  );
}
