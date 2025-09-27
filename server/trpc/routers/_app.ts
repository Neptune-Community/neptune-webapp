/**
 * Main tRPC App Router
 *
 * This module combines all tRPC routers into the main app router.
 * Exports the complete router for use in API routes.
 *
 * Usage patterns:
 * - Import in API route: import { appRouter } from "@/server/trpc/routers/_app"
 * - Use in tRPC handler: router: appRouter
 * - Add new routers: import and merge with createTRPCRouter
 *
 * Example usage:
 * - const handler = fetchRequestHandler({ router: appRouter, ... });
 * - trpc.user.getProfile.useQuery({ id: "123" });
 */

import { initTRPC } from "@trpc/server";
import type { Context } from "@/server/trpc/context";
import { publicProcedure } from "@/server/trpc/procedures/public";
import { marketRouter } from "./market";

// Initialize tRPC with context
const t = initTRPC.context<Context>().create();

// Create main app router
export const appRouter = t.router({
    // Health check endpoint
    health: publicProcedure.query(() => {
        return {
            status: "healthy",
            timestamp: new Date().toISOString(),
        };
    }),

    // Market data router
    market: marketRouter,

    // Add more routers here as they are created
    // user: userRouter,
    // auth: authRouter,
    // admin: adminRouter,
});

export type AppRouter = typeof appRouter;
