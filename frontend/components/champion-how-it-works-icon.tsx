import Image from "next/image";

export default function ChampionHowItWorksIcon({
  iconSrc,
}: {
  iconSrc: string;
}) {
  // Assets already include the blue circle — fill the slot, no second chrome.
  return (
    <span className="relative z-10 h-16 w-16 shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20 min-[90rem]:h-[6.25rem] min-[90rem]:w-[6.25rem]">
      <Image
        src={iconSrc}
        alt=""
        fill
        sizes="100px"
        className="object-cover object-center"
      />
    </span>
  );
}
