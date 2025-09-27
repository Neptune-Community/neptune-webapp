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

import type { User } from "./auth";

export interface TRPCContext {
  user?: User;
  session?: any;
  req: Request;
  res: Response;
  db: any; // Database connection
  logger: any; // Logger instance
}

export interface TRPCProcedure {
  input?: any;
  output?: any;
  meta?: TRPCMeta;
}

export interface TRPCMeta {
  description?: string;
  tags?: string[];
  deprecated?: boolean;
  examples?: any[];
}

export interface TRPCError extends Error {
  code: string;
  httpStatus: number;
  cause?: Error;
  data?: Record<string, any>;
}

export interface TRPCResult<T = any> {
  data?: T;
  error?: TRPCError;
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
  };
}

export interface TRPCSubscription<T = any> {
  data: T;
  type: "data" | "error" | "complete";
}

export interface TRPCBatchRequest {
  requests: Array<{
    id: string;
    method: string;
    params: any;
  }>;
}

export interface TRPCBatchResponse {
  responses: Array<{
    id: string;
    result?: any;
    error?: TRPCError;
  }>;
}

export interface TRPCMiddleware {
  name: string;
  execute: (opts: any) => Promise<any>;
}

export interface TRPCRouter {
  [key: string]: TRPCProcedure | TRPCRouter;
}

export interface TRPCClientOptions {
  url: string;
  headers?: Record<string, string>;
  transformer?: any;
  links?: any[];
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
  examples?: any[];
  rateLimit?: {
    max: number;
    windowMs: number;
  };
}
