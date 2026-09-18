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
  align?: "center" | "left" | "center-to-left";
  tone?: "default" | "onDark";
  eyebrowClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}) {
  const alignClass =
    align === "center"
      ? "text-center"
      : align === "center-to-left"
        ? "text-center md:text-left"
        : "text-left";
  const isOnDark = tone === "onDark";

  return (
    <>
      <p
        className={`${SEGOE_UI_CLASS} text-[0.75rem] leading-[1.5rem] font-[700] tracking-[0.08em] uppercase sm:text-[0.875rem] lg:text-[0.9375rem] min-[90rem]:h-[1.5rem] min-[90rem]:text-[1rem] min-[90rem]:whitespace-nowrap ${alignClass} ${
          isOnDark
            ? "text-[#FFFFFFCC]"
            : "text-[var(--Eyebrow-label,#02938c)]"
        } ${eyebrowClassName}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-['Georgia'] text-[1.75rem] leading-[2.25rem] font-[700] tracking-normal sm:text-[2rem] sm:leading-[2.75rem] md:text-[2.25rem] md:leading-[2.875rem] lg:text-[2.375rem] lg:leading-[3rem] min-[90rem]:text-[3rem] min-[90rem]:leading-[4rem] ${alignClass} ${
          isOnDark ? "text-[#FFFFFF]" : "text-[var(--Main-headings,#1c2426)]"
        } ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`${SEGOE_UI_CLASS} mt-4 ${alignClass} text-[0.9375rem] leading-[1.5rem] font-[400] tracking-normal text-[var(--Subheading,#4a5558)] sm:text-[1rem] sm:leading-[1.75rem] md:text-[1.0625rem] lg:text-[1.0625rem] lg:leading-[1.75rem] min-[90rem]:text-[1.125rem] min-[90rem]:leading-[2rem] ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      ) : null}
    </>
  );
}
