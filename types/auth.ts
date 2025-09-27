/**
 * Authentication Types
 *
 * This module defines TypeScript types for authentication-related data structures.
 * Used throughout the application for type safety in auth operations.
 *
 * Usage patterns:
 * - User session management
 * - JWT token handling
 * - OAuth provider integration
 * - Role-based access control
 *
 * Example usage:
 * - const user: User = await getCurrentUser();
 * - const session: Session = await getSession();
 * - const token: JWT = await getToken();
 */

export interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  role: UserRole;
  permissions: Permission[];
  createdAt: Date;
  updatedAt: Date;
  emailVerified?: Date;
  lastLoginAt?: Date;
}

export interface Session {
  user: User;
  expires: string;
  accessToken?: string;
  refreshToken?: string;
}

export interface JWT {
  sub: string; // user id
  email: string;
  name: string;
  role: UserRole;
  permissions: Permission[];
  iat: number;
  exp: number;
  jti: string; // JWT ID
}

export type UserRole = "user" | "admin" | "moderator" | "guest";

export type Permission =
  | "read:users"
  | "write:users"
  | "delete:users"
  | "read:posts"
  | "write:posts"
  | "delete:posts"
  | "admin:all";

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  acceptTerms: boolean;
}

export interface AuthError {
  code: string;
  message: string;
  field?: string;
}

export interface OAuthProvider {
  id: string;
  name: string;
  type: "oauth";
  signinUrl: string;
  callbackUrl: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  session: Session | null;
  loading: boolean;
  error: AuthError | null;
}

export interface PasswordResetRequest {
  email: string;
}

export interface PasswordReset {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface EmailVerification {
  token: string;
  email: string;
}
