import type { ReactNode } from "react";
import FadeInSection from "@/components/fade-in-section";

const SECTION_PAD =
  "mx-auto w-full max-w-[90rem] px-4 pt-6 pb-6 sm:px-8 sm:pt-12 sm:pb-12 md:px-10 md:pt-14 md:pb-14 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem]";

export default function PageSection({
  id,
  tone = "white",
  className = "",
  innerClassName = "flex flex-col items-center",
  fade = true,
  children,
}: {
  id?: string;
  tone?: "white" | "gray";
  className?: string;
  innerClassName?: string;
  fade?: boolean;
  children: ReactNode;
}) {
  const background = tone === "gray" ? "bg-gray-100" : "bg-[#FFFFFF]";
  const contentClassName = `${SECTION_PAD} ${innerClassName}`;

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
