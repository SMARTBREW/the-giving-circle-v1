import { Check } from "lucide-react";
import PageSection from "@/components/page-section";
import type { CausePageVettingContent } from "@/constants/cause-page";
import { CAUSE_SECTION, SEGOE_UI_CLASS } from "@/constants";
import { sanitizeUrl } from "@/lib/sanitize";

function SealCheck({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`relative inline-flex h-8 w-8 shrink-0 items-center justify-center sm:h-9 sm:w-9 ${className}`}
    >
      <svg viewBox="0 0 22 21" fill="none" className="h-full w-full">
        <path
          d="M22 10.49L19.56 7.7L19.9 4.01L16.29 3.19L14.4 0L11 1.46L7.6 0L5.71 3.19L2.1 4L2.44 7.7L0 10.49L2.44 13.28L2.1 16.98L5.71 17.8L7.6 21L11 19.53L14.4 20.99L16.29 17.8L19.9 16.98L19.56 13.29L22 10.49Z"
          fill="var(--color-circle)"
        />
      </svg>
      <svg
        viewBox="0 0 12 9"
        fill="none"
        className="absolute top-1/2 left-1/2 h-3 w-4 -translate-x-1/2 -translate-y-1/2"
      >
        <path
          d="M3.8 5.88L1.48 3.55L0 5.04L3.8 8.85L11.14 1.49L9.66 0L3.8 5.88Z"
          fill="#FFFFFF"
        />
      </svg>
    </span>
  );
}

export default function CausePageVetting({
  content,
}: {
  content: CausePageVettingContent;
}) {
  const {
    eyebrow,
    title,
    body,
    lastReviewed,
    checks,
    documents,
    goodToKnow,
  } = content;

  return (
    <PageSection
      id="vetting"
      tone="alternate"
      className="scroll-mt-28"
      innerClassName={CAUSE_SECTION.pad}
    >
      <div className="tgc-card overflow-hidden sm:rounded-[1.25rem]">
        <div className="p-4 sm:p-5 md:p-6 lg:p-7">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <SealCheck />
                <p
                  className={`${SEGOE_UI_CLASS} text-[0.625rem] font-bold leading-4 tracking-[0.08em] uppercase text-circle sm:text-[0.6875rem]`}
                >
                  {eyebrow}
                </p>
              </div>

              <h2
                className={`${SEGOE_UI_CLASS} mt-2 text-[1.125rem] font-bold leading-6 tracking-normal text-heading sm:mt-2.5 sm:text-[1.25rem] sm:leading-7 lg:text-[1.375rem] lg:leading-7`}
              >
                {title}
              </h2>

              <p
                className={`${SEGOE_UI_CLASS} mt-2 text-[0.8125rem] font-normal leading-5 tracking-normal text-subhead sm:text-[0.875rem] sm:leading-5`}
              >
                {body}
              </p>

              {lastReviewed ? (
                <p
                  className={`${SEGOE_UI_CLASS} mt-2 text-[0.75rem] font-normal leading-4 tracking-normal text-subhead sm:mt-2.5 sm:text-[0.8125rem]`}
                >
                  Last reviewed:{" "}
                  <span className="font-bold text-heading">
                    {lastReviewed}
                  </span>
                </p>
              ) : null}
            </div>

            <ul className="flex min-w-0 flex-col gap-2.5 sm:gap-3">
              {checks.map((check) => (
                <li key={check.title} className="flex items-start gap-2">
                  <Check
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-circle"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <p
                      className={`${SEGOE_UI_CLASS} text-[0.8125rem] font-bold leading-4 tracking-normal text-heading sm:text-[0.875rem] sm:leading-5`}
                    >
                      {check.title}
                    </p>
                    <p
                      className={`${SEGOE_UI_CLASS} mt-0.5 text-[0.75rem] font-normal leading-4 tracking-normal text-subhead sm:text-[0.8125rem] sm:leading-5`}
                    >
                      {check.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-5 border-t border-line sm:mt-6">
            {documents.map((doc) => {
              const href = sanitizeUrl(doc.href);
              const isExternal = href.startsWith("http");

              return (
                <li
                  key={doc.badge}
                  className="flex flex-col gap-2 border-b border-line py-2.5 last:border-b-0 sm:flex-row sm:items-center sm:gap-3 sm:py-3"
                >
                  <span
                    className={`${SEGOE_UI_CLASS} flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-circle px-1 text-center text-[0.5625rem] font-bold leading-tight tracking-tight text-circle sm:h-10 sm:w-10 sm:text-[0.625rem]`}
                  >
                    {doc.badge}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`${SEGOE_UI_CLASS} text-[0.8125rem] font-bold leading-4 tracking-normal text-heading sm:text-[0.875rem] sm:leading-5`}
                    >
                      {doc.title}
                    </p>
                    <p
                      className={`${SEGOE_UI_CLASS} mt-0.5 text-[0.75rem] font-normal leading-4 tracking-normal text-subhead`}
                    >
                      {doc.number && !doc.number.includes("[") ? (
                        <>No. {doc.number} · </>
                      ) : null}
                      <span className="font-semibold text-circle">
                        Checked
                      </span>{" "}
                      · {doc.note}
                    </p>
                  </div>

                  <a
                    href={href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`${SEGOE_UI_CLASS} shrink-0 text-[0.8125rem] font-semibold leading-4 tracking-normal text-circle transition-opacity hover:opacity-80`}
                  >
                    View document
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="bg-[rgba(2,147,140,0.08)] px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 lg:px-7">
          <p
            className={`${SEGOE_UI_CLASS} text-[0.75rem] font-normal leading-4 tracking-normal text-subhead sm:text-[0.8125rem] sm:leading-5`}
          >
            <span className="font-bold text-heading">
              Good to know:
            </span>{" "}
            {goodToKnow}
          </p>
        </div>
      </div>
    </PageSection>
  );
}
