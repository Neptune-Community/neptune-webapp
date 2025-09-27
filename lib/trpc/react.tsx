/**
 * tRPC React Integration
 *
 * This module provides tRPC client integration with React Query.
 * Creates the tRPC client and provider for React components.
 *
 * Usage patterns:
 * - Import in components: import { trpc } from "@/lib/trpc/react"
 * - Use queries: trpc.user.getProfile.useQuery({ id: "123" })
 * - Use mutations: trpc.user.updateProfile.useMutation()
 * - Wrap app: <TRPCProvider><App /></TRPCProvider>
 *
 * Example usage:
 * - const { data, isLoading } = trpc.user.getProfile.useQuery({ id: userId });
 * - const mutation = trpc.user.updateProfile.useMutation();
 */

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { useState } from "react";
import type { AppRouter } from "@/server/trpc/routers/_app";

// Create tRPC React client
export const trpc = createTRPCReact<AppRouter>();

// Create tRPC client
export function getTRPCClient() {
  return trpc.createClient({
    links: [
      httpBatchLink({
        url: "/api/trpc",
      }),
    ],
  });
}

// tRPC Provider component
export function TRPCProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => getTRPCClient());

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
