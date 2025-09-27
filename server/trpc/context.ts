/**
 * tRPC Context Creation
 *
 * This module creates the tRPC context for each request.
 * Provides access to database and other services.
 *
 * Usage patterns:
 * - Import in tRPC router: import { createTRPCContext } from "@/server/trpc/context"
 * - Use in procedures: const { db } = ctx;
 * - Access request data: const { req, res } = ctx;
 *
 * Example usage:
 * - const ctx = await createTRPCContext({ req, res });
 * - const db = ctx.db;
 */

import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { logger } from "@/lib/logging";

export async function createTRPCContext(opts: FetchCreateContextFnOptions) {
  const { req } = opts;

  // Create context object
  const ctx = {
    req,
    db: null, // Add your database connection here
    logger,
  };

  return ctx;
}

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
