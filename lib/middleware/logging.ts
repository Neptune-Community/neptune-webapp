/**
 * Request/Response Logging Middleware
 *
 * This module provides logging utilities for HTTP requests and responses.
 * Integrates with Winston logger for structured logging.
 *
 * Usage patterns:
 * - Log all incoming requests with timing
 * - Track API response times
 * - Monitor error rates
 * - Debug request/response flow
 */

import type { NextRequest, NextResponse } from "next/server";
import { edgeLogger } from "@/lib/logging/edge";

export interface LogData {
  method: string;
  url: string;
  userAgent?: string;
  ip?: string;
  timestamp: string;
  userId?: string;
  sessionId?: string;
}

/**
 * Log incoming HTTP request
 * Returns timing data for response logging
 */
export function requestLogger(request: NextRequest) {
  const start = Date.now();

  const logData: LogData = {
    method: request.method,
    url: request.url,
    userAgent: request.headers.get("user-agent") || undefined,
    ip: getClientIP(request),
    timestamp: new Date().toISOString(),
  };

  // Add user context if available
  const userId = request.headers.get("x-user-id");
  const sessionId = request.headers.get("x-session-id");

  if (userId) logData.userId = userId;
  if (sessionId) logData.sessionId = sessionId;

  edgeLogger.info("HTTP Request", {
    ...logData,
    type: "http_request",
  });

  return { start, logData };
}

/**
 * Log HTTP response with timing information
 */
export function responseLogger(
  logData: LogData,
  start: number,
  response: NextResponse,
) {
  const duration = Date.now() - start;

  edgeLogger.info("HTTP Response", {
    ...logData,
    status: response.status,
    duration,
    type: "http_response",
  });
}

/**
 * Log API errors with context
 */
export function logApiError(
  error: Error,
  request: NextRequest,
  context?: Record<string, unknown>,
) {
  edgeLogger.error("API Error", error, {
    method: request.method,
    url: request.url,
    userAgent: request.headers.get("user-agent"),
    ip: getClientIP(request),
    ...context,
    type: "api_error",
  });
}

/**
 * Extract client IP address from request headers
 */
function getClientIP(request: NextRequest): string | undefined {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    undefined
  );
}

/**
 * Log performance metrics
 */
export function logPerformance(
  operation: string,
  duration: number,
  metadata?: Record<string, unknown>,
) {
  edgeLogger.info("Performance Metric", {
    operation,
    duration,
    ...metadata,
    type: "performance",
  });
}
