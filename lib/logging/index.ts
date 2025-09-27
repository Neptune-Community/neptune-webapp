/**
 * Winston Logger Configuration
 *
 * This module provides the main logger instance for the application.
 * Configures Winston with appropriate transports, formats, and log levels.
 *
 * Usage patterns:
 * - Import logger: import { logger } from "@/lib/logging"
 * - Log messages: logger.info("Message", { context })
 * - Error logging: logger.error("Error", error)
 * - Debug logging: logger.debug("Debug info", { data })
 *
 * Example usage:
 * - logger.info("User login", { userId: "123", email: "user@example.com" });
 * - logger.error("Database connection failed", error);
 * - logger.warn("Rate limit exceeded", { ip: "192.168.1.1" });
 */

import winston from "winston";

// Create logger instance
export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  defaultMeta: { service: "neptune-webapp" },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
  ],
});

// Add file transport in production
if (process.env.NODE_ENV === "production") {
  logger.add(
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
  );
  logger.add(
    new winston.transports.File({
      filename: "logs/combined.log",
    }),
  );
}

export default logger;
