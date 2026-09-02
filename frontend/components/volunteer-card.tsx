import Image from "next/image";
import { SEGOE_UI_CLASS } from "@/constants";

export default function VolunteerCard({
  name,
  nameClassName = "",
  role,
  roleClassName = "",
  src,
  alt,
}: {
  name: string;
  nameClassName?: string;
  role: string;
  roleClassName?: string;
  src: string;
  alt: string;
}) {
  return (
    <li className="relative h-[24.1875rem] w-full md:w-[18.5rem]">
      <div className="relative h-[21.0625rem] w-full overflow-hidden rounded-[12px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="18.5rem"
          className="object-cover"
        />
      </div>
      <div className="absolute top-[17.9375rem] left-[1.5625rem] z-10 flex h-[6.25rem] w-[15.4375rem] flex-col items-center justify-center gap-2 rounded-[6px] border border-[#BDBDBD] bg-[#FFFFFF] py-[13px]">
        <p
          className={`${SEGOE_UI_CLASS} h-8 text-center text-[1.5rem] leading-8 font-[600] tracking-normal whitespace-nowrap text-[var(--Main-headings,#000000)] ${nameClassName}`}
        >
          {name}
        </p>
        <p
          className={`${SEGOE_UI_CLASS} h-8 text-center text-[1.125rem] leading-8 font-[400] tracking-normal whitespace-nowrap text-[#2D2E2E] ${roleClassName}`}
        >
          {role}
        </p>
      </div>
    </li>
  );
}
