/**
 * tRPC API Handler
 *
 * This is the main entry point for all tRPC API routes.
 * Handles both GET and POST requests for tRPC procedures.
 *
 * Usage patterns:
 * - GET requests: Used for queries (cached, safe to repeat)
 * - POST requests: Used for mutations (not cached, may have side effects)
 * - Batch requests: Multiple procedures in a single request
 * - Streaming: Real-time updates via subscriptions
 *
 * Example usage:
 * - Query: GET /api/trpc/user.getProfile
 * - Mutation: POST /api/trpc/user.updateProfile
 * - Batch: POST /api/trpc with multiple procedures
 */

import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createTRPCContext } from "@/server/trpc/context";
import { appRouter } from "@/server/trpc/routers/_app";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
    onError:
      process.env.NODE_ENV === "development"
        ? ({ path, error }: { path?: string; error: Error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
            );
          }
        : undefined,
  });

export { handler as GET, handler as POST };
