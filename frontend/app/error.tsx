"use client";

import { useEffect } from "react";
import { logErrorToService } from "@/lib/error-logger";
import { logger } from "@/lib/logger";
import { config } from "@/lib/config";
import { InterFont } from "@/constants";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (config.isProduction) {
        logErrorToService({
          message: error.message,
          stack: error.stack,
          digest: error.digest,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        });
      } else {
        logger.error("Application error", { message: error.message });
      }
    }
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-[4.5rem]">
      <h2
        className={`text-2xl font-bold mb-4 tracking-[-0.06em] ${InterFont.className}`}
      >
        Something went wrong
      </h2>
      <p className="text-[var(--Dark-Charcoal,#1c2426)] mb-8">
        We have been notified and are looking into it. Thank you for your
        patience.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-[0.5rem] bg-[var(--Main-CTA-button,#02938c)] px-8 py-3 text-white"
      >
        Try again
      </button>
      {config.isDevelopment && (
        <details className="mt-8 p-4 bg-[rgba(255,255,255,0.06)] rounded-2xl max-w-2xl">
          <summary>Error Details (dev only)</summary>
          <pre className="text-xs mt-2 whitespace-pre-wrap">{error.stack}</pre>
        </details>
      )}
    </div>
  );
}
