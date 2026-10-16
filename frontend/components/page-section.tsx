import type { ReactNode } from "react";
import FadeInSection from "@/components/fade-in-section";

const TONE_CLASS = {
  white: "bg-white",
  gray: "bg-gray-100",
  alternate: "bg-alternate",
} as const;

export default function PageSection({
  id,
  tone = "white",
  className = "",
  innerClassName = "flex flex-col items-center",
  pad = "default",
  fade = true,
  children,
}: {
  id?: string;
  tone?: "white" | "gray" | "alternate";
  className?: string;
  innerClassName?: string;
  /** `tight-top` reduces top padding when a page has no hero above. */
  pad?: "default" | "tight-top";
  fade?: boolean;
  children: ReactNode;
}) {
  const padClass = pad === "tight-top" ? "tgc-section-pad-tight" : "tgc-section-pad";
  const contentClassName = `${padClass} ${innerClassName}`;

  return (
    <section id={id} className={`w-full ${TONE_CLASS[tone]} ${className}`}>
      {fade ? (
        <FadeInSection className={contentClassName}>{children}</FadeInSection>
      ) : (
        <div className={contentClassName}>{children}</div>
      )}
    </section>
  );
}
