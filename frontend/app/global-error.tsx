"use client";

import { useEffect } from "react";
import { logErrorToService } from "@/lib/error-logger";
import { logger } from "@/lib/logger";
import { config } from "@/lib/config";

export default function GlobalError({
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
        logger.error("Global application error", { message: error.message });
      }
    }
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-[var(--Off-White,#f7f9f9)] text-[var(--Dark-Charcoal,#1c2426)]">
        <div className="flex min-h-screen flex-col items-center justify-center px-6">
          <h2 className="mb-4 font-['Georgia'] text-2xl font-bold">
            Something went wrong
          </h2>
          <p className="mb-8 text-center text-[var(--Body-Grey,#4a5558)]">
            We&apos;ve been notified and are working on it.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg bg-[var(--Circle-Green,#02938c)] px-8 py-3 text-white"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
