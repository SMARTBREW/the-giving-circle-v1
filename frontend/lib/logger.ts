import { config } from "@/lib/config";

type LogLevel = "debug" | "info" | "warn" | "error";

interface LogData {
  level: LogLevel;
  message: string;
  data?: Record<string, unknown>;
  timestamp: string;
  url?: string;
  userAgent?: string;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === "development";
  private isProduction = process.env.NODE_ENV === "production";

  private log(
    level: LogLevel,
    message: string,
    data?: Record<string, unknown>,
  ) {
    const logData: LogData = {
      level,
      message,
      data,
      timestamp: new Date().toISOString(),
      url: typeof window !== "undefined" ? window.location.href : undefined,
      userAgent:
        typeof window !== "undefined" ? navigator.userAgent : undefined,
    };

    if (this.isDevelopment) {
      const logFn = console[level] || console.log;
      logFn(`[${level.toUpperCase()}] ${message}`, data || "");
    }

    if (this.isProduction && (level === "error" || level === "warn")) {
      void this.sendToService(logData);
    }
  }

  private async sendToService(logData: LogData) {
    try {
      const base = config.apiUrl.replace(/\/$/, "");
      await fetch(`${base}/api/client-logs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logData),
      });
    } catch {
      // Silently fail - don't break app if logging fails
    }
  }

  debug(message: string, data?: Record<string, unknown>) {
    this.log("debug", message, data);
  }

  info(message: string, data?: Record<string, unknown>) {
    this.log("info", message, data);
  }

  warn(message: string, data?: Record<string, unknown>) {
    this.log("warn", message, data);
  }

  error(message: string, data?: Record<string, unknown>) {
    this.log("error", message, data);
  }
}

export const logger = new Logger();
