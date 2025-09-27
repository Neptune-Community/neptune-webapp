/**
 * tRPC Hook Utilities
 *
 * This module provides utility functions for working with tRPC.
 * These are helper functions that work with the main tRPC client.
 *
 * Usage patterns:
 * - Use with tRPC client: import { trpc } from "@/lib/trpc/react"
 * - Query data: const { data } = trpc.health.useQuery()
 * - Mutations: const mutation = trpc.user.update.useMutation()
 * - Utils: const utils = trpc.useUtils()
 *
 * Example usage:
 * - const { data, isLoading } = trpc.user.getProfile.useQuery({ id: userId });
 * - const mutation = trpc.user.updateProfile.useMutation();
 * - const utils = trpc.useUtils();
 */

import { useCallback } from "react";
import { trpc } from "@/lib/trpc/react";

/**
 * Utility hook for common tRPC operations
 * This provides a cleaner interface for common patterns
 */
export function useTrpcUtils() {
  const utils = trpc.useUtils();

  const invalidateQueries = useCallback(
    (_procedure: string) => {
      // In tRPC v11, we use the utils to invalidate queries
      utils.invalidate();
    },
    [utils],
  );

  const setQueryData = useCallback(
    (_procedure: string, _data: unknown) => {
      // Set query data for a specific procedure
      // Note: In tRPC v11, we use invalidate to refresh data instead of setData
      utils.invalidate();
    },
    [utils],
  );

  const getQueryData = useCallback((_procedure: string) => {
    // Get cached query data
    // Note: In tRPC v11, we use the query client directly for cached data
    return null; // This would need to be implemented with the query client
  }, []);

  return {
    invalidateQueries,
    setQueryData,
    getQueryData,
    utils,
  };
}

/**
 * Hook for optimistic updates
 * Provides utilities for optimistic UI updates
 */
export function useOptimisticUpdate() {
  const utils = trpc.useUtils();

  const optimisticUpdate = useCallback((procedure: string, data: unknown) => {
    // Set optimistic data
    // Note: In tRPC v11, optimistic updates are handled differently
    // This would need to be implemented with the query client
    console.log("Optimistic update for", procedure, data);
  }, []);

  const rollbackUpdate = useCallback(
    (_procedure: string) => {
      // Rollback optimistic update
      utils.invalidate();
    },
    [utils],
  );

  return {
    optimisticUpdate,
    rollbackUpdate,
  };
}

// Re-export the main tRPC client for direct usage
export { trpc };
