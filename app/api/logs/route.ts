/**
 * Client Logs API Route
 *
 * This endpoint receives logs from client-side applications
 * and forwards them to the server-side logging system.
 *
 * Usage patterns:
 * - Client-side error logging
 * - User interaction tracking
 * - Performance metrics from browser
 * - Debug information from client
 *
 * Example usage:
 * - Error logging: POST /api/logs with error data
 * - User action: POST /api/logs with action data
 * - Performance: POST /api/logs with timing data
 */

import { type NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logging";

export async function POST(request: NextRequest) {
  try {
    const logData = await request.json();

    // Add client context
    const clientLogData = {
      ...logData,
      userAgent: request.headers.get("user-agent"),
      ip:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip"),
      type: "client_log",
    };

    // Log to server-side logger
    logger.info("Client Log", clientLogData);

    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error("Failed to process client log", error as Error);
    return NextResponse.json(
      { error: "Failed to process log" },
      { status: 500 },
    );
  }
}
