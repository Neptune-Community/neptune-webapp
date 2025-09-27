/**
 * Edge Runtime Logger
 *
 * This module provides a simple logging utility for Edge Runtime environments.
 * It doesn't use Node.js APIs and is compatible with Next.js middleware.
 *
 * Usage patterns:
 * - Import in middleware: import { edgeLogger } from "@/lib/logging/edge"
 * - Log messages: edgeLogger.info("Message", { context })
 * - Error logging: edgeLogger.error("Error", error)
 *
 * Example usage:
 * - edgeLogger.info("Request processed", { method: "GET", url: "/api/users" });
 * - edgeLogger.error("Authentication failed", { userId: "123" });
 */

type LogLevel = "debug" | "info" | "warn" | "error";

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: Record<string, unknown>;
}

class EdgeLogger {
  private log(
    level: LogLevel,
    message: string,
    context?: Record<string, unknown>,
  ) {
    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      context,
    };

    // In development, log to console
    if (process.env.NODE_ENV === "development") {
      const logMethod =
        level === "error"
          ? console.error
          : level === "warn"
            ? console.warn
            : level === "debug"
              ? console.debug
              : console.log;

      logMethod(`[${level.toUpperCase()}] ${message}`, context || "");
    }

    // In production, you could send to external logging service
    // For now, we'll just use console in development
  }

  debug(message: string, context?: Record<string, unknown>) {
    this.log("debug", message, context);
  }

  info(message: string, context?: Record<string, unknown>) {
    this.log("info", message, context);
  }

  warn(message: string, context?: Record<string, unknown>) {
    this.log("warn", message, context);
  }

  error(
    message: string,
    error?: Error | unknown,
    context?: Record<string, unknown>,
  ) {
    const errorContext = {
      ...context,
      ...(error instanceof Error
        ? {
            error: {
              name: error.name,
              message: error.message,
              stack: error.stack,
            },
          }
        : { error }),
    };

    this.log("error", message, errorContext);
  }
}

export const edgeLogger = new EdgeLogger();
export default edgeLogger;
