/**
 * Type Definitions Index
 *
 * This module exports all type definitions for centralized access.
 * Provides a single import point for all application types.
 *
 * Usage patterns:
 * - Import all types: import * as Types from "@/types";
 * - Import specific types: import { User, ApiResponse } from "@/types";
 * - Type re-exports for convenience
 *
 * Example usage:
 * - import { User, Session } from "@/types";
 * - import { ApiResponse, PaginatedResponse } from "@/types";
 * - import { TRPCContext, TRPCError } from "@/types";
 */

// API types
export type {
  ApiEndpoint,
  ApiError,
  ApiParameter,
  ApiRateLimit,
  ApiRequest,
  ApiResponse,
  ApiResponseSchema,
  BulkOperation,
  BulkResult,
  FileUploadResponse,
  FilterOptions,
  PaginatedResponse,
  Pagination,
  QueryOptions,
  SortOptions,
  ValidationError,
} from "./api";
// Database types
export type {
  DatabaseClient,
  DatabaseComment,
  DatabaseConfig,
  DatabaseConnection,
  DatabaseConstraint,
  DatabaseFollow,
  DatabaseIndex,
  DatabaseLike,
  DatabaseMigration,
  DatabasePost,
  DatabaseSession,
  DatabaseUser,
  Field,
  QueryResult,
  Transaction,
} from "./database";

// tRPC types
export type {
  TRPCBatchRequest,
  TRPCBatchResponse,
  TRPCClientOptions,
  TRPCContext,
  TRPCError,
  TRPCInfiniteQueryOptions,
  TRPCMeta,
  TRPCMiddleware,
  TRPCMutationOptions,
  TRPCProcedure,
  TRPCProcedureInput,
  TRPCProcedureMeta,
  TRPCProcedureOutput,
  TRPCQueryOptions,
  TRPCResult,
  TRPCRouter,
  TRPCSubscription,
  TRPCSubscriptionOptions,
} from "./trpc";
// User types
export type {
  AccountSettings,
  ActivityType,
  NotificationSettings,
  PrivacySettings,
  SecuritySettings,
  SocialLinks,
  UserActivity,
  UserPreferences,
  UserProfile,
  UserRelationship,
  UserSearchResult,
  UserSettings,
  UserStats,
} from "./user";

// Common utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
export type NonNullable<T> = T extends null | undefined ? never : T;

// Form types
export interface FormState<T = any> {
  data: T;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isDirty: boolean;
  isValid: boolean;
}

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  "data-testid"?: string;
}

export interface LoadingProps extends BaseComponentProps {
  loading?: boolean;
  size?: "sm" | "md" | "lg";
}

export interface ErrorProps extends BaseComponentProps {
  error?: string | Error;
  onRetry?: () => void;
}

// Event types
export interface CustomEvent<T = any> {
  type: string;
  payload: T;
  timestamp: Date;
}

// Configuration types
export interface AppConfig {
  app: {
    name: string;
    version: string;
    url: string;
    environment: string;
  };
  database: {
    url: string;
    maxConnections: number;
  };
  logging: {
    level: string;
    service: string;
  };
}
