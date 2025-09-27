/**
 * Public tRPC Procedures
 *
 * This module defines public tRPC procedures that don't require authentication.
 * These procedures can be called by anyone without a valid session.
 *
 * Usage patterns:
 * - Import in routers: import { publicProcedure } from "@/server/trpc/procedures/public"
 * - Use in router: publicProcedure.query(...)
 * - Add middleware: publicProcedure.use(middleware)
 *
 * Example usage:
 * - export const publicRouter = createTRPCRouter({
 *     health: publicProcedure.query(() => ({ status: "ok" }))
 *   });
 */

import { initTRPC } from "@trpc/server";
import type { Context } from "@/server/trpc/context";

// Initialize tRPC
const t = initTRPC.context<Context>().create();

// Export public procedure
export const publicProcedure = t.procedure;
