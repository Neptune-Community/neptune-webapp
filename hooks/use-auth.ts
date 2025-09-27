/**
 * Authentication Hook
 *
 * This hook provides authentication state and methods for managing user sessions.
 * Integrates with NextAuth.js for session management.
 *
 * Usage patterns:
 * - Check authentication status
 * - Access user data
 * - Handle login/logout
 * - Manage session state
 *
 * Example usage:
 * - const { user, isAuthenticated, login, logout } = useAuth();
 * - const { loading, error } = useAuth();
 * - const { signIn, signOut } = useAuth();
 */

import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { useCallback } from "react";
import type { LoginCredentials, User } from "@/types";

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const isAuthenticated = !!session?.user;
  const user = session?.user as User | null;
  const loading = status === "loading";

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      const result = await signIn("credentials", {
        email: credentials.email,
        password: credentials.password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      if (result?.ok) {
        router.push("/dashboard");
      }
    },
    [router],
  );

  const logout = useCallback(async () => {
    await signOut({ redirect: false });
    router.push("/");
  }, [router]);

  const loginWithProvider = useCallback(async (provider: string) => {
    await signIn(provider, { callbackUrl: "/dashboard" });
  }, []);

  const refreshSession = useCallback(async () => {
    await fetch("/api/auth/session?update");
  }, []);

  return {
    user,
    session,
    isAuthenticated,
    loading,
    login,
    logout,
    loginWithProvider,
    refreshSession,
  };
}
