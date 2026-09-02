import type { ReactNode } from "react";
import { SEGOE_UI_CLASS } from "@/constants";

export default function SectionIntro({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "default",
  eyebrowClassName = "",
  titleClassName = "",
  subtitleClassName = "",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "default" | "onDark";
  eyebrowClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const isOnDark = tone === "onDark";

  return (
    <>
      <p
        className={`${SEGOE_UI_CLASS} h-[1.5rem] ${alignClass} text-[1rem] leading-[1.5rem] font-[700] tracking-[0.08em] uppercase whitespace-nowrap ${
          isOnDark
            ? "text-[#FFFFFFCC]"
            : "text-[var(--Eyebrow-label,#00A98F)]"
        } ${eyebrowClassName}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-['Georgia'] text-[3rem] leading-[4rem] font-[700] tracking-normal ${alignClass} ${
          isOnDark ? "text-[#FFFFFF]" : "text-[var(--Main-headings,#000000)]"
        } ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`${SEGOE_UI_CLASS} mt-4 ${alignClass} text-[1.125rem] leading-[2rem] font-[400] tracking-normal text-[var(--Subheading,#45564B)] ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      ) : null}
    </>
  );
}
