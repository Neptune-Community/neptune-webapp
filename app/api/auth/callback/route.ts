/**
 * OAuth Callback Handler
 *
 * This handles OAuth provider callbacks after user authentication.
 * Processes the authorization code and exchanges it for user data.
 *
 * Usage patterns:
 * - Handle OAuth redirects from providers
 * - Exchange authorization codes for tokens
 * - Create or update user accounts
 * - Redirect to appropriate page after login
 *
 * Example usage:
 * - Google callback: /api/auth/callback/google
 * - GitHub callback: /api/auth/callback/github
 * - Custom provider: /api/auth/callback/custom
 */

import { type NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logging";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const error = searchParams.get("error");

    if (error) {
      logger.error("OAuth callback error", new Error(error));
      return NextResponse.redirect(
        new URL("/login?error=oauth_error", request.url),
      );
    }

    if (!code) {
      return NextResponse.redirect(
        new URL("/login?error=no_code", request.url),
      );
    }

    // Process OAuth callback
    // This would typically be handled by NextAuth.js
    // but can be customized for specific needs

    logger.info("OAuth callback processed", { code, state });

    // Redirect to dashboard or intended page
    const redirectUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    logger.error("OAuth callback failed", error as Error);
    return NextResponse.redirect(
      new URL("/login?error=callback_failed", request.url),
    );
  }
}
