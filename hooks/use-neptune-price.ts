/**
 * Custom Hook for Neptune Price
 *
 * This hook wraps the tRPC Neptune price query with additional functionality
 * like error handling, loading states, and automatic refetching
 */

import { trpc } from "@/lib/trpc/react";

/**
 * Hook to get Neptune price with frequent updates
 */
export function useNeptunePrice() {
  return trpc.market.getNeptunePrice.useQuery(undefined, {
    staleTime: 30000, // 30 seconds
    refetchInterval: 60000, // 1 minute
    refetchIntervalInBackground: true,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}
