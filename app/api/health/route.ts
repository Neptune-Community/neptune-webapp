/**
 * Health Check Endpoint
 *
 * This endpoint provides health status information for monitoring
 * and load balancer health checks.
 *
 * Usage patterns:
 * - Load balancer health checks
 * - Monitoring system status
 * - Database connectivity checks
 * - External service status
 *
 * Example usage:
 * - Basic check: GET /api/health
 * - Detailed check: GET /api/health?detailed=true
 * - Readiness check: GET /api/health/ready
 * - Liveness check: GET /api/health/live
 */

import { type NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logging";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const detailed = searchParams.get("detailed") === "true";

  const health = {
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.APP_VERSION || "1.0.0",
    environment: process.env.NODE_ENV || "development",
  };

  if (detailed) {
    // Add detailed health information
    const detailedHealth = {
      ...health,
      memory: process.memoryUsage(),
      database: await checkDatabaseHealth(),
      externalServices: await checkExternalServices(),
    };

    return NextResponse.json(detailedHealth);
  }

  return NextResponse.json(health);
}

/**
 * Check database connectivity
 */
async function checkDatabaseHealth(): Promise<{
  status: string;
  latency?: number;
}> {
  try {
    const start = Date.now();
    // Add actual database health check here
    // Example: await db.query("SELECT 1");
    const latency = Date.now() - start;

    return { status: "healthy", latency };
  } catch (error) {
    logger.error("Database health check failed", error as Error);
    return { status: "unhealthy" };
  }
}

/**
 * Check external services
 */
async function checkExternalServices(): Promise<Record<string, string>> {
  const services: Record<string, string> = {};

  // Check various external services
  // Example: services.email = await checkEmailService();
  // Example: services.storage = await checkStorageService();

  return services;
}
