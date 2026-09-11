import type { LiveCause } from "@/constants";
import type { CauseDetailContent } from "@/constants/cause-details";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import { SEGOE_UI_CLASS } from "@/constants";

const STEP_ICONS = [
  // Workshops / Education
  <svg key="0" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 4.5 3 9l9 4.5L21 9l-9-4.5Z" strokeLinejoin="round" />
    <path d="M6 10.5v5c0 2 2.7 3.5 6 3.5s6-1.5 6-3.5v-5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 9v6" strokeLinecap="round" />
  </svg>,
  // Kits / Package
  <svg key="1" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="7" width="18" height="13" rx="2.5" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" strokeLinecap="round" />
    <path d="M12 11v5M9.5 13.5h5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Community / People
  <svg key="2" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6">
    <circle cx="9" cy="8" r="3" />
    <circle cx="16" cy="9" r="2.5" />
    <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" strokeLinecap="round" />
    <path d="M14 19c0-2.2 1.6-3.8 3.8-4" strokeLinecap="round" />
  </svg>,
  // Follow-up / Check circle
  <svg key="3" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="8" />
    <path d="m8.5 12.5 2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

const FUNDING_ICONS = [
  <svg key="0" viewBox="0 0 20 20" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 3.5 2.5 7.5 10 11.5l7.5-4L10 3.5Z" strokeLinejoin="round" />
    <path d="M5 8.8v4.2c0 1.7 2.2 3 5 3s5-1.3 5-3V8.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="1" viewBox="0 0 20 20" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
    <rect x="2.5" y="6" width="15" height="11" rx="2" />
    <path d="M13 6V4.5a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 7 4.5V6" strokeLinecap="round" />
    <path d="M10 9.5v4M8 11.5h4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="2" viewBox="0 0 20 20" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
    <circle cx="7.5" cy="6.5" r="2.5" />
    <circle cx="13.5" cy="7.5" r="2" />
    <path d="M3 16c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" strokeLinecap="round" />
    <path d="M12 16c0-1.8 1.3-3.2 3-3.4" strokeLinecap="round" />
  </svg>,
  <svg key="3" viewBox="0 0 20 20" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
    <circle cx="10" cy="10" r="7" />
    <path d="m7 10 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

const STEP_COLORS = [
  { bg: "bg-[#E8F8F4]", text: "text-[#00A98F]", ring: "ring-[#00A98F]/20", icon: "bg-[#00A98F]", num: "01" },
  { bg: "bg-[#E8F4FB]", text: "text-[#00A3BE]", ring: "ring-[#00A3BE]/20", icon: "bg-[#00A3BE]", num: "02" },
  { bg: "bg-[#FEF3E8]", text: "text-[#E88A00]", ring: "ring-[#E88A00]/20", icon: "bg-[#E88A00]", num: "03" },
  { bg: "bg-[#F0EBF8]", text: "text-[#7C4DCC]", ring: "ring-[#7C4DCC]/20", icon: "bg-[#7C4DCC]", num: "04" },
];

export default function CauseDetailSections({
  cause,
  detail,
}: {
  cause: LiveCause;
  detail: CauseDetailContent;
}) {
  return (
    <>
      {/* ── 1. HOW THIS CAUSE WORKS ── */}
      <PageSection tone="gray" fade={false}>
        <SectionIntro
          eyebrow="How This Cause Works"
          title={detail.responseHeading}
        />

        {/* Intro narrative */}
        <div className="mx-auto mt-6 max-w-3xl text-center">
          <p className={`${SEGOE_UI_CLASS} text-[1.0625rem] leading-8 font-[500] text-gray-700 sm:text-[1.125rem]`}>
            {detail.response[0]}
          </p>
          {detail.response.slice(1).map((para) => (
            <p
              key={para.slice(0, 48)}
              className={`${SEGOE_UI_CLASS} mt-3 text-[0.9375rem] leading-7 font-[400] text-gray-500 sm:text-[1rem]`}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Steps grid */}
        <div className="mt-12 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {detail.howItWorks.map((step, index) => {
            const color = STEP_COLORS[index % STEP_COLORS.length];
            return (
              <div
                key={step.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                {/* Colored top strip */}
                <div
                  className={`h-1.5 w-full ${color.icon} transition-all duration-300 group-hover:h-2`}
                />

                <div className="flex flex-col flex-1 p-6 sm:p-7">
                  {/* Step number + icon row */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`${SEGOE_UI_CLASS} ${color.bg} ${color.text} inline-flex items-center rounded-full px-3 py-1 text-[0.6875rem] font-[800] uppercase tracking-[0.1em]`}
                    >
                      Step {color.num}
                    </span>
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${color.bg} ${color.text} ring-2 ring-inset ring-transparent group-hover:ring-[${color.ring}] transition-all duration-300`}
                    >
                      {STEP_ICONS[index % STEP_ICONS.length]}
                    </div>
                  </div>

                  {/* Step title */}
                  <h3
                    className={`${SEGOE_UI_CLASS} mt-5 text-[1.1875rem] font-[700] text-gray-900`}
                  >
                    {step.title}
                  </h3>

                  {/* Step body */}
                  <p
                    className={`${SEGOE_UI_CLASS} mt-2.5 flex-1 text-[0.9375rem] leading-6 text-gray-500`}
                  >
                    {step.body}
                  </p>

                  {/* Progress bar footer */}
                  <div className={`mt-6 h-0.5 w-full rounded-full bg-gray-100`}>
                    <div
                      className={`h-full rounded-full ${color.icon} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                      style={{ width: `${(index + 1) * 25}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </PageSection>

      {/* ── 2. WHY IT MATTERS + WHAT YOUR GIFTS FUND ── */}
      <PageSection tone="white" fade={false}>
        {/* Why it matters */}
        <div className="w-full max-w-4xl text-center">
          <SectionIntro
            eyebrow="Why It Matters"
            title={detail.whyNowHeading}
          />
          <p className={`${SEGOE_UI_CLASS} mt-5 text-[1.0625rem] leading-8 font-[500] text-gray-700 sm:text-[1.125rem]`}>
            {detail.whyNow[0]}
          </p>
        </div>

        {/* Urgency highlight bar */}
        {detail.whyNow.length > 1 && (
          <div className="relative mx-auto mt-8 w-full max-w-3xl overflow-hidden rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50 via-orange-50/40 to-amber-50 p-6 sm:p-8">
            {/* Decorative corner blob */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-amber-300/25 blur-2xl" />
            <div className="relative z-10 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white font-bold text-base shadow-md shadow-amber-500/25">
                !
              </div>
              <div>
                <p className={`${SEGOE_UI_CLASS} text-[0.875rem] font-[700] text-amber-900 uppercase tracking-[0.06em]`}>
                  Why Timely Action Matters
                </p>
                {detail.whyNow.slice(1).map((para) => (
                  <p
                    key={para.slice(0, 48)}
                    className={`${SEGOE_UI_CLASS} mt-2 text-[0.9375rem] leading-7 text-amber-800/80 sm:text-[1rem]`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* What gifts fund */}
        <div className="mt-16 w-full">
          {/* Section heading */}
          <div className="flex flex-col items-center text-center">
            <span className={`${SEGOE_UI_CLASS} inline-flex items-center gap-1.5 rounded-full border border-[#00A3BE]/20 bg-[#00A3BE]/8 px-4 py-1.5 text-[0.75rem] font-[700] uppercase tracking-[0.1em] text-[#00A3BE]`}>
              <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3">
                <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Transparency
            </span>
            <h3 className="mt-4 font-['Georgia'] text-[1.625rem] font-[700] text-gray-900 sm:text-[1.875rem]">
              {detail.coversHeading}
            </h3>
            <p className={`${SEGOE_UI_CLASS} mt-2 max-w-xl text-[0.9375rem] text-gray-400`}>
              Every rupee pooled by your giving circle directly powers these deliverables.
            </p>
          </div>

          {/* Grid of funding cards */}
          <ul className="mx-auto mt-10 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {cause.whatYourSupportDoes.map((item, index) => (
              <li
                key={item}
                className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00A3BE]/40 hover:shadow-lg sm:p-6"
              >
                {/* Subtle hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#00A3BE]/0 to-[#00A3BE]/0 transition-all duration-300 group-hover:from-[#00A3BE]/3 group-hover:to-[#00A98F]/3 rounded-2xl" />
                {/* Icon */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(0,163,190,0.08)] text-[#00A3BE] transition-colors duration-300 group-hover:bg-[#00A3BE] group-hover:text-white">
                  {FUNDING_ICONS[index % FUNDING_ICONS.length]}
                </div>
                {/* Text */}
                <div className="relative z-10 min-w-0 flex-1 pt-1.5">
                  <p className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-[600] leading-6 text-gray-800 sm:text-[1rem]`}>
                    {item}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      {/* ── 3. VOICES: TESTIMONIALS ── */}
      <PageSection tone="gray" fade={false}>
        <SectionIntro
          eyebrow="In Their Own Words"
          title="Voices From This Cause"
          subtitle="Parents, champions, and community partners describing the change they have seen."
        />

        <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          {detail.quotes.map((item, index) => (
            <blockquote
              key={`${item.author}-${item.text.slice(0, 24)}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              {/* Decorative accent bar */}
              <div className="absolute top-0 left-7 h-0.5 w-12 rounded-full bg-gradient-to-r from-[#00A98F] to-[#00A3BE] transition-all duration-300 group-hover:w-20" />

              {/* Big quote mark */}
              <div
                aria-hidden="true"
                className="absolute top-3 right-6 font-['Georgia'] text-[7rem] leading-none text-[#00A98F] opacity-[0.06] select-none pointer-events-none"
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="mb-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 12 12" fill="currentColor" className="h-3.5 w-3.5 text-amber-400">
                    <path d="M6 1l1.27 2.57 2.84.41-2.05 2 .48 2.83L6 7.27 3.46 8.81l.48-2.83-2.05-2 2.84-.41L6 1Z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p
                className={`${SEGOE_UI_CLASS} relative z-10 flex-1 text-[1rem] leading-[1.75] font-[400] text-gray-700 italic sm:text-[1.0625rem]`}
              >
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Author */}
              <footer className="relative z-10 mt-6 flex items-center gap-3.5 border-t border-gray-100 pt-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#00A98F] to-[#00A3BE] text-white font-[700] text-sm shadow-sm">
                  {item.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className={`${SEGOE_UI_CLASS} text-[1rem] font-[700] text-gray-900 leading-tight`}>
                    {item.author}
                  </p>
                  <p className={`${SEGOE_UI_CLASS} mt-0.5 text-[0.8125rem] font-[600] text-[#00A98F]`}>
                    {item.role}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </PageSection>

      {/* ── 4. VERIFIED PARTNER PROFILE ── */}
      <PageSection tone="white" fade={false}>
        <div className="mx-auto w-full max-w-5xl">
          {/* Header row */}
          <div className="mb-10 flex flex-col items-center text-center">
            <span className={`${SEGOE_UI_CLASS} inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-[0.75rem] font-[700] uppercase tracking-[0.1em] text-emerald-700`}>
              <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3">
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.25" />
                <path d="M3.5 6l2 2L9 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Verified Partner Organization
            </span>
          </div>

          {/* Main card */}
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-100/80">
            {/* Dark header band */}
            <div className="relative overflow-hidden bg-[#0C1A13] px-8 py-10 sm:px-10 sm:py-12">
              <div aria-hidden="true" className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#00A98F]/20 blur-3xl" />
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-8 left-8 h-28 w-28 rounded-full bg-[#00A3BE]/15 blur-2xl" />

              <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                {/* Avatar */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
                  <span className={`${SEGOE_UI_CLASS} text-[1.5rem] font-[800] text-white`}>
                    {detail.partner.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h2 className="font-['Georgia'] text-[1.625rem] font-[700] text-white sm:text-[2rem]">
                    {detail.partner.name}
                  </h2>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-0.5 text-[0.75rem] font-[700] text-emerald-400">
                      <svg viewBox="0 0 10 10" fill="none" className="h-2.5 w-2.5">
                        <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M3 5l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Verified Partner
                    </span>
                    <span className={`${SEGOE_UI_CLASS} text-[0.8125rem] text-white/50`}>
                      {detail.partner.note}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Body: blurb + stats */}
            <div className="flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-start lg:gap-12">
              {/* Blurb */}
              <div className="min-w-0 flex-1">
                <p className={`${SEGOE_UI_CLASS} text-[1rem] leading-[1.8] font-[400] text-gray-600 sm:text-[1.0625rem]`}>
                  {detail.partner.blurb}
                </p>

                {/* Info note */}
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                  <svg viewBox="0 0 16 16" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-blue-500">
                    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.25" />
                    <path d="M8 5v3.5M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <p className={`${SEGOE_UI_CLASS} text-[0.875rem] text-blue-700`}>
                    {detail.partner.note}
                  </p>
                </div>
              </div>

              {/* Stats grid */}
              <ul className="grid w-full grid-cols-2 gap-3 sm:gap-4 lg:w-[22rem] lg:shrink-0">
                {detail.partner.stats.map((stat) => (
                  <li
                    key={stat.label}
                    className="group flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-[#F8FDFB] p-5 text-center transition-all duration-200 hover:border-emerald-200 hover:bg-[#F0FDF4] sm:p-6"
                  >
                    <p className={`${SEGOE_UI_CLASS} text-[2rem] font-[800] leading-none text-[#00A98F] sm:text-[2.25rem]`}>
                      {stat.value}
                    </p>
                    <p className={`${SEGOE_UI_CLASS} mt-2.5 text-[0.8125rem] font-[600] text-gray-500 leading-tight`}>
                      {stat.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
