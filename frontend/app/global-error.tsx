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
      <body className="bg-[rgba(15,15,15,1)] text-white">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <p className="text-[rgba(255,255,255,0.6)] mb-8">
            We&apos;ve been notified and are working on it.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="px-[3.75rem] py-[1.125rem] rounded-2xl bg-[#FCC010] text-black"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
