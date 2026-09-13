import PhotoCtaBand from "@/components/photo-cta-band";
import { CHAMPION_CTA } from "@/constants";

export default function ChampionCta() {
  return (
    <PhotoCtaBand
      src={CHAMPION_CTA.src}
      mobileSrc={CHAMPION_CTA.mobileSrc}
      alt={CHAMPION_CTA.alt}
      title={CHAMPION_CTA.title}
      subtitle={CHAMPION_CTA.subtitle}
      ctaLabel={CHAMPION_CTA.ctaLabel}
      href={CHAMPION_CTA.href}
      align="left"
      overlay={false}
      objectPosition="object-right min-[90rem]:object-center"
      mobileObjectPosition="object-[85%_center]"
    />
  );
}
