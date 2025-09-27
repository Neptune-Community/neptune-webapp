/**
 * Market Data Router
 *
 * This router handles all market data related tRPC procedures
 * Includes Neptune price fetching with proper error handling and logging
 */

import { initTRPC } from "@trpc/server";
import type { Context } from "@/server/trpc/context";
import { publicProcedure } from "@/server/trpc/procedures/public";
import { neptunePriceClient } from "@/lib/api/neptune-price/client";
import { logger } from "@/lib/logging";

// Initialize tRPC
const t = initTRPC.context<Context>().create();

export const marketRouter = t.router({
    /**
     * Get Neptune price specifically
     * Uses multiple API sources with fallback strategy
     */
    getNeptunePrice: publicProcedure.query(async () => {
        try {
            logger.info("Fetching Neptune price", {
                timestamp: new Date().toISOString(),
                source: "trpc-market-router",
            });

            const response = await neptunePriceClient.getNeptunePrice();

            logger.info("Neptune price fetched successfully", {
                source: response.source,
                price: response.data?.price,
                timestamp: response.timestamp,
            });

            return response;
        } catch (error) {
            logger.error("Failed to fetch Neptune price", {
                error: error instanceof Error ? error.message : "Unknown error",
                stack: error instanceof Error ? error.stack : undefined,
                timestamp: new Date().toISOString(),
            });

            throw new Error(
                `Failed to fetch Neptune price: ${
                    error instanceof Error ? error.message : "Unknown error"
                }`
            );
        }
    }),
});
