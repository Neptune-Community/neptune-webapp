/**
 * Authentication Middleware Utilities
 *
 * This module provides authentication-related middleware functions
 * for protecting routes and managing user sessions.
 *
 * Usage patterns:
 * - Protect API routes: Check JWT tokens or session cookies
 * - Redirect unauthenticated users: Send to login page
 * - Role-based access: Check user permissions
 * - Session validation: Verify session integrity
 */

import { type NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export interface AuthResult {
  redirect?: NextResponse;
  user?: any;
  isAuthenticated: boolean;
}

/**
 * Main authentication middleware function
 * Checks if user is authenticated and handles redirects
 */
export async function authMiddleware(
  request: NextRequest,
): Promise<AuthResult> {
  const { pathname } = request.nextUrl;

  // Define protected routes
  const protectedRoutes = ["/dashboard", "/profile", "/settings"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (!isProtectedRoute) {
    return { isAuthenticated: false };
  }

  // Check for authentication token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    // Redirect to login page
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return {
      redirect: NextResponse.redirect(loginUrl),
      isAuthenticated: false,
    };
  }

  return {
    user: token,
    isAuthenticated: true,
  };
}

/**
 * Check if user has specific role or permission
 */
export function checkUserRole(user: any, requiredRole: string): boolean {
  return user?.role === requiredRole || user?.roles?.includes(requiredRole);
}

/**
 * Check if user has specific permission
 */
export function checkUserPermission(user: any, permission: string): boolean {
  return user?.permissions?.includes(permission);
}

/**
 * Admin-only route protection
 */
export async function adminMiddleware(
  request: NextRequest,
): Promise<AuthResult> {
  const authResult = await authMiddleware(request);

  if (!authResult.isAuthenticated) {
    return authResult;
  }

  if (!checkUserRole(authResult.user, "admin")) {
    return {
      redirect: NextResponse.redirect(new URL("/unauthorized", request.url)),
      isAuthenticated: false,
    };
  }

  return authResult;
}
