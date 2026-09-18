import { SEGOE_UI_CLASS } from "@/constants";
import { Eye, ShieldCheck, Scale, Users } from "lucide-react";

type ValueIcon = "transparency" | "accountability" | "integrity" | "community";

const ICON_MAP = {
  transparency: Eye,
  accountability: ShieldCheck,
  integrity: Scale,
  community: Users,
} as const;

function ValueIconMark({ icon }: { icon: ValueIcon }) {
  const IconComponent = ICON_MAP[icon];

  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--Eyebrow-label,#02938c)] bg-[#FFFFFF] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#02938c]/10 sm:h-12 sm:w-12 min-[90rem]:h-14 min-[90rem]:w-14">
      <IconComponent
        className="h-5 w-5 text-[var(--Eyebrow-label,#02938c)] sm:h-6 sm:w-6 min-[90rem]:h-7 min-[90rem]:w-7"
        strokeWidth={2}
        aria-hidden="true"
      />
    </span>
  );
}

export default function CoreValueCard({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: ValueIcon;
}) {
  return (
    <li className="group flex h-full w-full flex-col items-center rounded-[1rem] border border-[#d9e1e2] bg-[#FFFFFF] px-5 py-5 shadow-[0px_4px_20px_0px_#0000000F] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_8px_30px_0px_rgba(0,0,0,0.08)] sm:px-6 sm:py-6 md:px-7 md:py-7 min-[90rem]:px-8 min-[90rem]:py-8">
      <ValueIconMark icon={icon} />
      <h3
        className={`${SEGOE_UI_CLASS} mt-3 text-center text-[1.375rem] leading-none font-[700] tracking-normal text-[var(--Dark-Charcoal,#1c2426)] sm:mt-4 sm:text-[1.5rem] md:text-[1.625rem] min-[90rem]:text-[1.75rem]`}
      >
        {title}
      </h3>
      <p
        className={`${SEGOE_UI_CLASS} mt-2.5 text-center text-[0.9375rem] leading-6 font-[400] tracking-normal text-[var(--Subheading,#4a5558)] sm:mt-3 sm:text-[1rem] sm:leading-7 min-[90rem]:text-[1.125rem] min-[90rem]:leading-7`}
      >
        {body}
      </p>
    </li>
  );
}
