import FadeInSection from "@/components/fade-in-section";
import { InterFont } from "@/constants";

export default function SectionHeading({ title }: { title: string }) {
  return (
    <FadeInSection className="flex flex-row items-center gap-8 justify-center mt-24">
      <div className="flex w-[6.875rem] items-center">
        <div className="w-[6.25rem] h-px bg-[#BDBDBD]" />
      </div>
      <h2
        className={`font-['Inter'] text-[2rem] md:text-5xl font-bold tracking-[-0.06em] text-center text-[#000000] ${InterFont.className}`}
      >
        {title}
      </h2>
      <div className="flex w-[6.875rem] items-center">
        <div className="w-[6.25rem] h-px bg-[#BDBDBD]" />
      </div>
    </FadeInSection>
  );
}
