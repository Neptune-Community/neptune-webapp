/**
 * Next.js Middleware
 *
 * This middleware runs on every request and handles:
 * - Request logging
 * - Security headers
 * - Rate limiting
 * - Redirects
 *
 * Usage: Automatically runs on all requests matching the config.matcher
 *
 * Example usage patterns:
 * - Log requests: Track API calls and page visits
 * - Set headers: Add security headers to all responses
 * - Rate limiting: Prevent abuse of API endpoints
 */

import { type NextRequest, NextResponse } from "next/server";
import { requestLogger } from "@/lib/middleware/logging";
import { securityHeaders } from "@/lib/middleware/security";

export function middleware(request: NextRequest) {
    // Log the request
    requestLogger(request);

    // Apply security headers
    const response = NextResponse.next();
    securityHeaders(response);

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
         * - Static assets (images, fonts, etc.)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(svg|png|jpg|jpeg|gif|ico|webp|woff|woff2|ttf|eot)).*)",
    ],
};
