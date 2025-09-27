/**
 * NextAuth.js API Handler
 *
 * This handles all NextAuth.js authentication routes including:
 * - Sign in/out
 * - OAuth callbacks
 * - Session management
 * - CSRF protection
 *
 * Usage patterns:
 * - Sign in: POST /api/auth/signin
 * - Sign out: POST /api/auth/signout
 * - OAuth callback: GET /api/auth/callback/[provider]
 * - Session: GET /api/auth/session
 * - CSRF token: GET /api/auth/csrf
 *
 * Example usage:
 * - Google OAuth: /api/auth/signin/google
 * - GitHub OAuth: /api/auth/signin/github
 * - Session check: /api/auth/session
 */

import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth/config";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
