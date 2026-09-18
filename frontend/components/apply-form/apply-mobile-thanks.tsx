import Link from "next/link";
import { SEGOE_UI_CLASS } from "@/constants";

export const applyMobilePrimaryBtnClass = `${SEGOE_UI_CLASS} inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--Main-CTA-button,#02938c)] text-[1rem] leading-none font-[700] text-[#FFFFFF] transition-opacity disabled:cursor-not-allowed disabled:opacity-40`;

export const applyMobileOutlineBtnClass = `${SEGOE_UI_CLASS} inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-[var(--Main-CTA-button,#02938c)] bg-[#FFFFFF] text-[1rem] leading-none font-[700] text-[var(--Main-CTA-button,#02938c)] transition-opacity disabled:cursor-not-allowed disabled:opacity-40`;

export const applyMobileFieldClass = `${SEGOE_UI_CLASS} champion-apply-field h-12 w-full rounded-xl border border-[#d9e1e2] bg-[#FFFFFF] px-4 text-[1rem] text-[#4a5558] outline-none placeholder:text-[#4A5558] focus:border-[var(--Main-CTA-button,#02938c)] focus:outline-none focus:ring-0 sm:h-14`;

export const applyMobileFooterClass =
  "flex w-full items-center gap-3";

function SuccessCheck() {
  return (
    <span
      className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--Main-CTA-button,#02938c)] sm:h-[4.5rem] sm:w-[4.5rem]"
      aria-hidden
    >
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8 sm:h-9 sm:w-9">
        <path
          d="M10 25.5 18.5 34 38 13"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function CopyIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <rect
        x="8"
        y="8"
        width="12"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ApplyMobileThanks({
  title,
  eyebrow,
  body,
  homeLabel,
  homeHref,
  inviteLabel,
  inviteHint,
  inviteUrl,
  copyLabel,
  copied,
  onCopy,
}: {
  title: string;
  eyebrow: string;
  body: string;
  homeLabel: string;
  homeHref: string;
  inviteLabel?: string;
  inviteHint?: string;
  inviteUrl?: string;
  copyLabel?: string;
  copied?: boolean;
  onCopy?: () => void;
}) {
  const hasInvite = Boolean(inviteLabel && inviteUrl && onCopy);

  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-hidden bg-[#FFFFFF]">
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto overscroll-contain px-5 py-8 sm:px-8">
        <div className="flex w-full max-w-[22.5rem] flex-col items-center text-center sm:max-w-[26rem]">
          <SuccessCheck />

          <h2
            className={`${SEGOE_UI_CLASS} mt-5 text-[1.75rem] leading-none font-[700] text-[#4a5558] sm:mt-6 sm:text-[2rem]`}
          >
            {title}
          </h2>

          <p
            className={`${SEGOE_UI_CLASS} mt-3 text-[1rem] leading-6 font-[700] text-[var(--Main-CTA-button,#02938c)] sm:mt-4 sm:text-[1.125rem] sm:leading-7`}
          >
            {eyebrow}
          </p>

          <p
            className={`${SEGOE_UI_CLASS} mt-3 text-[0.9375rem] leading-6 font-[400] text-[#4a5558] sm:text-[1rem] sm:leading-7`}
          >
            {body}
          </p>

          {hasInvite ? (
            <>
              <div className="mt-6 w-full border-t border-[#D9E1E2] pt-6 text-left">
                <p
                  className={`${SEGOE_UI_CLASS} text-[1.125rem] leading-none font-[700] text-[var(--Dark-Charcoal,#1c2426)] sm:text-[1.25rem]`}
                >
                  {inviteLabel}
                </p>
                <p
                  className={`${SEGOE_UI_CLASS} mt-2 text-[0.875rem] leading-5 font-[400] text-[#4a5558] sm:text-[0.9375rem] sm:leading-6`}
                >
                  {inviteHint}
                </p>

                <div className="mt-4 flex h-12 w-full items-center overflow-hidden rounded-xl border border-[#d9e1e2] bg-[#FFFFFF] sm:h-14">
                  <input
                    readOnly
                    value={inviteUrl}
                    className={`${SEGOE_UI_CLASS} min-w-0 flex-1 bg-transparent px-3.5 text-[0.875rem] text-[#4A5558] outline-none sm:px-4 sm:text-[0.9375rem]`}
                  />
                  <button
                    type="button"
                    onClick={onCopy}
                    aria-label="Copy invite link"
                    className="flex h-full shrink-0 items-center justify-center px-3.5 text-[#4A5558] hover:text-[#4a5558]"
                  >
                    <CopyIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={onCopy}
                className={`${applyMobilePrimaryBtnClass} mt-5`}
              >
                {copied ? "Copied" : (copyLabel ?? "Copy Link")}
                <CopyIcon className="h-5 w-5 text-[#FFFFFF]" />
              </button>
            </>
          ) : null}

          <Link
            href={homeHref}
            className={`${hasInvite ? applyMobileOutlineBtnClass : applyMobilePrimaryBtnClass} mt-3`}
          >
            {homeLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
