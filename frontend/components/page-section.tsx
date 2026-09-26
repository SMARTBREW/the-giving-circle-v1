import type { ReactNode } from "react";
import FadeInSection from "@/components/fade-in-section";

const SECTION_PAD =
  "mx-auto w-full max-w-[90rem] px-4 pt-6 pb-6 sm:px-8 sm:pt-12 sm:pb-12 md:px-10 md:pt-14 md:pb-14 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem]";

const SECTION_PAD_TIGHT_TOP =
  "mx-auto w-full max-w-[90rem] px-4 pt-2 pb-6 sm:px-8 sm:pt-4 sm:pb-12 md:px-10 md:pt-5 md:pb-14 lg:px-12 lg:pt-6 lg:pb-16 min-[90rem]:px-[6.25rem] min-[90rem]:pt-8 min-[90rem]:pb-[5rem]";

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
  tone?: "white" | "gray";
  className?: string;
  innerClassName?: string;
  /** `tight-top` reduces top padding when a page has no hero above. */
  pad?: "default" | "tight-top";
  fade?: boolean;
  children: ReactNode;
}) {
  const background = tone === "gray" ? "bg-gray-100" : "bg-[#FFFFFF]";
  const padClass = pad === "tight-top" ? SECTION_PAD_TIGHT_TOP : SECTION_PAD;
  const contentClassName = `${padClass} ${innerClassName}`;

  return (
    <section id={id} className={`w-full ${background} ${className}`}>
      {fade ? (
        <FadeInSection className={contentClassName}>{children}</FadeInSection>
      ) : (
        <div className={contentClassName}>{children}</div>
      )}
    </section>
  );
}
