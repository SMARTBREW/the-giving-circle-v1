import Link from "next/link";
import type { ReactNode } from "react";
import { CircleCheck, LineChart, ShieldCheck, type LucideIcon } from "lucide-react";
import CtaButton from "@/components/cta-button";
import CtaArrow from "@/components/cta-arrow";
import FadeInSection from "@/components/fade-in-section";
import { NGOS_PAGE, SEGOE_UI_CLASS } from "@/constants";
import { PAGE_HERO_BLEED } from "@/lib/page-hero-layout";

const BADGE_ICONS: LucideIcon[] = [ShieldCheck, CircleCheck, LineChart];

export default function NgosHero() {
  const { eyebrow, title, subtitle, badges, primaryCta, secondaryCta } =
    NGOS_PAGE;

  return (
    <section
      className={`relative w-full overflow-x-hidden bg-[#FFFFFF] ${PAGE_HERO_BLEED}`}
    >
      <FadeInSection className="mx-auto flex w-full max-w-[90rem] flex-col items-stretch px-4 pt-2 pb-6 sm:px-8 sm:pt-4 sm:pb-12 md:px-10 md:pt-5 md:pb-14 lg:px-12 lg:pt-6 lg:pb-16 min-[90rem]:px-[6.25rem] min-[90rem]:pt-8 min-[90rem]:pb-[5rem]">
        <nav
          aria-label="Breadcrumb"
          className={`${SEGOE_UI_CLASS} text-left text-[0.8125rem] font-[500] leading-5 tracking-normal text-[var(--Subheading,#4a5558)] sm:text-[0.875rem]`}
        >
          <Link
            href="/"
            className="transition-colors hover:text-[var(--Main-CTA-button,#02938c)]"
          >
            Home
          </Link>
          <span aria-hidden className="mx-2 text-[#D9E1E2]">
            /
          </span>
          <span className="text-[var(--Main-headings,#1c2426)]">NGO Directory</span>
        </nav>

        <p
          className={`${SEGOE_UI_CLASS} mt-5 text-left text-[0.75rem] font-[700] leading-[1.5rem] tracking-[0.08em] uppercase text-[var(--Eyebrow-label,#02938c)] sm:mt-6 sm:text-[0.875rem] lg:text-[0.9375rem] min-[90rem]:text-[1rem]`}
        >
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-[40rem] text-left font-['Georgia'] text-[1.75rem] font-[700] leading-[2.25rem] tracking-normal text-[var(--Main-headings,#1c2426)] sm:mt-4 sm:text-[2.25rem] sm:leading-[2.75rem] md:text-[2.5rem] md:leading-[3rem] lg:text-[2.75rem] lg:leading-[3.25rem] min-[90rem]:text-[3rem] min-[90rem]:leading-[3.75rem]">
          {title}
        </h1>
        <p
          className={`${SEGOE_UI_CLASS} mt-4 max-w-[42rem] text-left text-[0.9375rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#4a5558)] sm:mt-5 sm:text-[1.0625rem] sm:leading-7 md:text-[1.125rem] md:leading-8`}
        >
          {subtitle}
        </p>

        <ul className="mt-6 flex w-full flex-col items-start gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3">
          {badges.map((badge, index) => {
            const Icon = BADGE_ICONS[index] ?? CircleCheck;
            return (
              <li
                key={badge}
                className={`${SEGOE_UI_CLASS} inline-flex items-center gap-2 rounded-full border border-[#D9E1E2] bg-gray-100 px-3.5 py-2 text-[0.8125rem] font-[600] leading-none tracking-normal text-[var(--Main-headings,#1c2426)] sm:text-[0.875rem]`}
              >
                <Icon
                  className="h-4 w-4 shrink-0 text-[var(--Circle-Green,#02938c)]"
                  strokeWidth={2}
                  aria-hidden
                />
                {badge}
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
          <CtaButton
            href={primaryCta.href}
            className="h-11 w-full rounded-full px-7 py-3 text-[0.875rem] sm:h-12 sm:w-auto sm:px-8 sm:text-[1rem] min-[90rem]:h-[3.5rem] min-[90rem]:px-9"
            labelClassName="gap-2 font-[700]"
          >
            {primaryCta.label}
            <CtaArrow />
          </CtaButton>
          <CtaButton
            href={secondaryCta.href}
            variant="outline"
            className="h-11 w-full rounded-full px-7 py-3 text-[0.875rem] sm:h-12 sm:w-auto sm:px-8 sm:text-[1rem] min-[90rem]:h-[3.5rem] min-[90rem]:px-9"
            labelClassName="gap-2 font-[700]"
          >
            {secondaryCta.label}
            <CtaArrow />
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}

export function NgosCardShell({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-[1rem] border border-[#d9e1e2] bg-[#FFFFFF] p-5 shadow-[0px_4px_20px_0px_#0000000F] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--Circle-Green,#02938c)] hover:shadow-[0px_8px_30px_0px_rgba(0,0,0,0.08)] sm:rounded-[1.25rem] sm:p-6"
    >
      {children}
    </Link>
  );
}
