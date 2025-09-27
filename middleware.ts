/**
 * Next.js Middleware
 *
 * This middleware runs on every request and handles:
 * - Authentication checks
 * - Request logging
 * - Security headers
 * - Rate limiting
 * - Redirects
 *
 * Usage: Automatically runs on all requests matching the config.matcher
 *
 * Example usage patterns:
 * - Protect routes: Check authentication and redirect to login
 * - Log requests: Track API calls and page visits
 * - Set headers: Add security headers to all responses
 * - Rate limiting: Prevent abuse of API endpoints
 */

import { type NextRequest, NextResponse } from "next/server";
import { authMiddleware } from "@/lib/middleware/auth";
import { requestLogger } from "@/lib/middleware/logging";
import { securityHeaders } from "@/lib/middleware/security";

export function middleware(request: NextRequest) {
  // Log the request
  requestLogger(request);

  // Apply security headers
  const response = NextResponse.next();
  securityHeaders(response);

  // Handle authentication for protected routes
  const authResult = authMiddleware(request);
  if (
    authResult &&
    typeof authResult === "object" &&
    "redirect" in authResult
  ) {
    return (authResult as any).redirect;
  }

  // Log response
  // responseLogger(logData, start, response);

  return response;
}

// Configure which routes the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
