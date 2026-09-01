import { logger } from "@/lib/logger";

export function logErrorToService(error: {
  message: string;
  stack?: string;
  digest?: string;
  url: string;
  userAgent: string;
  timestamp: string;
}) {
  fetch("/api/log-error", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(error),
  }).catch(() => {
    logger.error("Failed to log error");
  });
}
