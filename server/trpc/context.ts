/**
 * tRPC Context Creation
 *
 * This module creates the tRPC context for each request.
 * Provides access to database, authentication, and other services.
 *
 * Usage patterns:
 * - Import in tRPC router: import { createTRPCContext } from "@/server/trpc/context"
 * - Use in procedures: const { user, db } = ctx;
 * - Access request data: const { req, res } = ctx;
 *
 * Example usage:
 * - const ctx = await createTRPCContext({ req, res });
 * - const user = ctx.user;
 * - const db = ctx.db;
 */

import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth/config";
import { logger } from "@/lib/logging";

export async function createTRPCContext(opts: FetchCreateContextFnOptions) {
  const { req } = opts;

  // Get session from NextAuth
  const session = await getServerSession(authConfig);

  // Create context object
  const ctx = {
    req,
    session,
    user: session?.user || null,
    db: null, // Add your database connection here
    logger,
  };

  return ctx;
}

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
