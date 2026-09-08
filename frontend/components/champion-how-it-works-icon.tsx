import Image from "next/image";

export default function ChampionHowItWorksIcon({
  iconSrc,
}: {
  iconSrc: string;
}) {
  return (
    <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--Brand-Deep-Blue,#3976A8)] sm:h-20 sm:w-20 min-[90rem]:h-[6.25rem] min-[90rem]:w-[6.25rem]">
      <Image
        src={iconSrc}
        alt=""
        width={40}
        height={40}
        className="h-7 w-7 object-contain sm:h-8 sm:w-8 min-[90rem]:h-10 min-[90rem]:w-10"
      />
    </span>
  );
}
