/**
 * NextAuth.js Configuration
 *
 * This module configures NextAuth.js for authentication.
 * Defines providers, callbacks, and session configuration.
 *
 * Usage patterns:
 * - Import config: import { authConfig } from "@/lib/auth/config"
 * - Use in API routes: export { GET, POST } from NextAuth(authConfig)
 * - Access in components: import { getServerSession } from "next-auth"
 *
 * Example usage:
 * - const session = await getServerSession(authConfig);
 * - const user = session?.user;
 */

import type { NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";

export const authConfig: NextAuthOptions = {
  providers: [
    // Add your authentication providers here
    // Example: Google, GitHub, Email, etc.
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authConfig;
