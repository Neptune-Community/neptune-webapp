/**
 * Security Headers and CSP Middleware
 *
 * This module provides security-related middleware functions
 * for setting security headers and Content Security Policy.
 *
 * Usage patterns:
 * - Set security headers on all responses
 * - Configure Content Security Policy
 * - Handle CORS for API routes
 * - Prevent common security vulnerabilities
 */

import type { NextResponse } from "next/server";

/**
 * Apply security headers to response
 */
export function securityHeaders(response: NextResponse): NextResponse {
  // Prevent clickjacking
  response.headers.set("X-Frame-Options", "DENY");

  // Prevent MIME type sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");

  // Enable XSS protection
  response.headers.set("X-XSS-Protection", "1; mode=block");

  // Strict Transport Security (HTTPS only)
  if (process.env.NODE_ENV === "production") {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
    );
  }

  // Referrer Policy
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Permissions Policy
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  );

  // Content Security Policy
  response.headers.set("Content-Security-Policy", getCSP());

  return response;
}

/**
 * Get Content Security Policy string
 */
function getCSP(): string {
  const isDevelopment = process.env.NODE_ENV === "development";

  const directives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'", // unsafe-inline for development
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self' https:",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ];

  // Add development-specific directives
  if (isDevelopment) {
    directives.push(
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' localhost:*",
    );
    directives.push("connect-src 'self' ws: wss: localhost:*");
  }

  return directives.join("; ");
}

/**
 * CORS configuration for API routes
 */
export function corsHeaders(response: NextResponse): NextResponse {
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [
    "http://localhost:3000",
  ];
  const origin = response.headers.get("origin");

  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization",
  );
  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set("Access-Control-Max-Age", "86400");

  return response;
}

/**
 * Rate limiting headers
 */
export function rateLimitHeaders(
  response: NextResponse,
  remaining: number,
  resetTime: number,
): NextResponse {
  response.headers.set("X-RateLimit-Limit", "100");
  response.headers.set("X-RateLimit-Remaining", remaining.toString());
  response.headers.set("X-RateLimit-Reset", resetTime.toString());

  return response;
}
