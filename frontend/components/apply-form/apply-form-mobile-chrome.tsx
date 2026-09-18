import Link from "next/link";
import { SEGOE_UI_CLASS } from "@/constants";

export type ApplyFormStepMeta = {
  number: number;
  title: string;
};

function StepCheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3.5 8.2 6.4 11l6.1-6.5"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BackChevron() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M12.5 4.5 7 10l5.5 5.5"
        stroke="#4a5558"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ApplyHorizontalStepper({
  steps,
  activeStep,
}: {
  steps: readonly ApplyFormStepMeta[];
  /** 1-based index into `steps` for the current step */
  activeStep: number;
}) {
  return (
    <ol className="flex w-full items-start justify-between gap-1 px-1">
      {steps.map((step, index) => {
        const stepNum = index + 1;
        const isComplete = stepNum < activeStep;
        const isActive = stepNum === activeStep;
        const isLast = index === steps.length - 1;
        const labelActive = isActive || isComplete;

        return (
          <li
            key={step.title}
            className={`flex min-w-0 flex-1 flex-col items-center ${
              isLast ? "" : "relative"
            }`}
          >
            <div className="relative flex w-full items-center justify-center">
              {!isLast ? (
                <span
                  aria-hidden
                  className={`absolute top-1/2 left-[calc(50%+1.125rem)] right-[calc(-50%+1.125rem)] h-0.5 -translate-y-1/2 ${
                    isComplete || isActive
                      ? "bg-[var(--Main-CTA-button,#02938c)]"
                      : "bg-[#d9e1e2]"
                  }`}
                />
              ) : null}
              <span
                className={`relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.8125rem] leading-none font-[700] ${SEGOE_UI_CLASS} ${
                  isComplete || isActive
                    ? "bg-[var(--Main-CTA-button,#02938c)] text-[#FFFFFF]"
                    : "border border-[#d9e1e2] bg-[#FFFFFF] text-[#4A5558]"
                }`}
              >
                {isComplete ? (
                  <StepCheckIcon />
                ) : (
                  String(step.number).padStart(2, "0")
                )}
              </span>
            </div>
            <p
              className={`${SEGOE_UI_CLASS} mt-2 whitespace-nowrap text-center text-[0.625rem] leading-none font-[600] sm:text-[0.6875rem] ${
                labelActive
                  ? "text-[var(--Main-CTA-button,#02938c)]"
                  : "text-[#4A5558]"
              }`}
            >
              {step.title}
            </p>
          </li>
        );
      })}
    </ol>
  );
}

export default function ApplyFormMobileChrome({
  title,
  backHref = "/",
  steps,
  activeStep,
  children,
  footer,
}: {
  title: string;
  backHref?: string;
  steps: readonly ApplyFormStepMeta[];
  activeStep: number;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-hidden bg-[#FFFFFF]">
      <header className="shrink-0 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 sm:px-5">
        <div className="relative flex h-11 items-center justify-center">
          <Link
            href={backHref}
            aria-label="Go back"
            className="absolute top-1/2 left-0 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg hover:bg-[#eef2f2]"
          >
            <BackChevron />
          </Link>
          <h1
            className={`${SEGOE_UI_CLASS} max-w-[14rem] truncate text-center text-[1rem] leading-6 font-[700] text-[#4a5558] sm:max-w-[18rem] sm:text-[1.0625rem]`}
          >
            {title}
          </h1>
        </div>
        <div className="mt-4 sm:mt-5">
          <ApplyHorizontalStepper steps={steps} activeStep={activeStep} />
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pt-5 pb-4 sm:px-5 sm:pt-6">
        {children}
      </div>

      <footer className="shrink-0 border-t border-[#D9E1E2] px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-5 sm:pt-4">
        {footer}
      </footer>
    </div>
  );
}
