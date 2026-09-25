import { config } from "@/lib/config";

export function logErrorToService(error: {
  message: string;
  stack?: string;
  digest?: string;
  url: string;
  userAgent: string;
  timestamp: string;
}) {
  const base = config.apiUrl.replace(/\/$/, "");
  void fetch(`${base}/api/client-logs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      level: "error",
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      url: error.url,
      userAgent: error.userAgent,
      timestamp: error.timestamp,
    }),
  }).catch(() => {
    // Swallow — never break the UI if logging fails
  });
}
