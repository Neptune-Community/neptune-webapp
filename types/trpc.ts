/**
 * tRPC Types
 *
 * This module defines TypeScript types specific to tRPC integration.
 * Provides type safety for tRPC procedures and context.
 *
 * Usage patterns:
 * - tRPC procedure definitions
 * - Context type safety
 * - Input/output validation
 * - Error handling
 *
 * Example usage:
 * - const procedure: Procedure = publicProcedure.input(schema);
 * - const context: Context = await createContext();
 * - const result: Result = await procedure.query(input);
 */

export interface TRPCContext {
  session?: unknown;
  req: Request;
  res: Response;
  db: unknown; // Database connection
  logger: unknown; // Logger instance
}

export interface TRPCProcedure {
  input?: unknown;
  output?: unknown;
  meta?: TRPCMeta;
}

export interface TRPCMeta {
  description?: string;
  tags?: string[];
  deprecated?: boolean;
  examples?: unknown[];
}

export interface TRPCError extends Error {
  code: string;
  httpStatus: number;
  cause?: Error;
  data?: Record<string, unknown>;
}

export interface TRPCResult<T = unknown> {
  data?: T;
  error?: TRPCError;
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
  };
}

export interface TRPCSubscription<T = unknown> {
  data: T;
  type: "data" | "error" | "complete";
}

export interface TRPCBatchRequest {
  requests: Array<{
    id: string;
    method: string;
    params: unknown;
  }>;
}

export interface TRPCBatchResponse {
  responses: Array<{
    id: string;
    result?: unknown;
    error?: TRPCError;
  }>;
}

export interface TRPCMiddleware {
  name: string;
  execute: (opts: unknown) => Promise<unknown>;
}

export interface TRPCRouter {
  [key: string]: TRPCProcedure | TRPCRouter;
}

export interface TRPCClientOptions {
  url: string;
  headers?: Record<string, string>;
  transformer?: unknown;
  links?: unknown[];
}

export interface TRPCQueryOptions {
  enabled?: boolean;
  staleTime?: number;
  cacheTime?: number;
  refetchOnWindowFocus?: boolean;
  retry?: boolean | number;
  retryDelay?: number;
}

export interface TRPCMutationOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: TRPCError) => void;
  onSettled?: (data: any, error: TRPCError) => void;
}

export interface TRPCInfiniteQueryOptions extends TRPCQueryOptions {
  getNextPageParam?: (lastPage: any) => any;
  getPreviousPageParam?: (firstPage: any) => any;
}

export interface TRPCSubscriptionOptions {
  onData?: (data: any) => void;
  onError?: (error: TRPCError) => void;
  onComplete?: () => void;
}

export interface TRPCProcedureInput {
  schema: any;
  transform?: (input: any) => any;
}

export interface TRPCProcedureOutput {
  schema: any;
  transform?: (output: any) => any;
}

export interface TRPCProcedureMeta {
  description?: string;
  tags?: string[];
  deprecated?: boolean;
  examples?: unknown[];
  rateLimit?: {
    max: number;
    windowMs: number;
  };
}
